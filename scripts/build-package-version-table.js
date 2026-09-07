#!/usr/bin/env node

/**
 * Builds a markdown list of per-package version bumps for the pending
 * release, so release notes let users associate changes with the exact
 * package version they affect (rather than just a commit message).
 *
 * Uses Lerna's own conventional-commits calculation (the same one that
 * runs at actual publish time) via a local-only dry run, so the numbers
 * shown here always match what Lerna will really publish. The dry run
 * writes version bumps to package.json on disk without committing/tagging/
 * pushing; this script diffs before/after versions, then restores the
 * working tree so nothing is left modified.
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const REPO = "uq-its-ss/design-system";
const PACKAGES_DIR = path.join(__dirname, "..", "packages");

function readVersions() {
  const versions = {};
  for (const name of fs.readdirSync(PACKAGES_DIR)) {
    const pkgPath = path.join(PACKAGES_DIR, name, "package.json");
    if (!fs.existsSync(pkgPath)) continue;
    const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
    versions[pkg.name] = pkg.version;
  }
  return versions;
}

// Ensure a clean baseline in case an earlier workflow step (e.g. Lerna's own
// dry run) left uncommitted version bumps on disk. Scoped to packages/ only
// so this never discards unrelated uncommitted changes elsewhere in the repo.
execSync("git checkout -- packages/", { stdio: "pipe" });

const before = readVersions();

try {
  execSync(
    "npx lerna version --conventional-commits --conventional-graduate --yes --no-git-tag-version --no-push",
    { stdio: "pipe" },
  );
} catch (error) {
  // Lerna exits non-zero when there is nothing to release; treat as "no changes".
}

const after = readVersions();

// Always restore the working tree - this script must never leave local
// modifications behind, regardless of success/failure above. Scoped to
// packages/ only (see rationale above).
execSync("git checkout -- packages/", { stdio: "pipe" });

const changed = Object.keys(after).filter(
  (name) => before[name] !== after[name],
);

if (changed.length === 0) {
  console.log("_No package version changes detected._");
  process.exit(0);
}

const lines = changed.sort().map((name) => {
  const from = before[name];
  const to = after[name];
  const compareUrl = `https://github.com/${REPO}/compare/${name}@${from}...${name}@${to}`;
  return `- **[${name}](${compareUrl})**: ${from} → ${to}`;
});

console.log(lines.join("\n"));
