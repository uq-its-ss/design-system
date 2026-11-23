#!/usr/bin/env node

/**
 * Generate root CHANGELOG.md from GitHub Releases
 *
 * This script fetches all stable releases (non-prerelease) from GitHub
 * and generates a unified CHANGELOG.md at the repository root.
 */

const https = require("https");
const fs = require("fs");
const path = require("path");

// Configuration
const GITHUB_REPO = "uq-its-ss/design-system";
const CHANGELOG_PATH = path.join(__dirname, "..", "CHANGELOG.md");

/**
 * Fetch data from GitHub API
 */
function fetchFromGitHub(url) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        "User-Agent": "UQ-Design-System-Changelog-Generator",
        Accept: "application/vnd.github.v3+json",
      },
    };

    // Add authorization if token is available
    if (process.env.GITHUB_TOKEN || process.env.GH_TOKEN) {
      const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
      options.headers["Authorization"] = `token ${token}`;
    }

    https
      .get(url, options, (res) => {
        let data = "";

        res.on("data", (chunk) => {
          data += chunk;
        });

        res.on("end", () => {
          if (res.statusCode === 200) {
            try {
              resolve(JSON.parse(data));
            } catch (err) {
              reject(
                new Error(
                  `Failed to parse GitHub API response as JSON: ${err.message}`,
                ),
              );
            }
          } else {
            reject(new Error(`GitHub API returned ${res.statusCode}: ${data}`));
          }
        });
      })
      .on("error", reject);
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Fetch all stable releases from GitHub
 *
 * This runs immediately after a release is published in the same workflow
 * job, and the GitHub REST API can briefly lag behind that write - a list
 * call moments later can still return a stale, pre-publish snapshot. That
 * snapshot is **not** empty in general (it's the full history of prior
 * stable releases), so merely checking "did we get any releases back" isn't
 * enough: it stops retrying on the very first stale response and silently
 * regenerates CHANGELOG.md without the release that was just published.
 *
 * Instead, when `expectedTag` is provided, keep retrying until that exact
 * release appears among the stable releases returned, and throw (rather
 * than silently proceeding) once attempts are exhausted - callers must treat
 * that as a hard failure, not a reason to skip/regenerate from stale data.
 */
async function fetchReleases(expectedTag) {
  const url = `https://api.github.com/repos/${GITHUB_REPO}/releases?per_page=100`;

  let stableReleases = [];
  const maxAttempts = 5;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    console.log(
      `Fetching releases from GitHub... (attempt ${attempt}/${maxAttempts})`,
    );
    const releases = await fetchFromGitHub(url);

    // Filter to stable releases only (not pre-releases, not drafts)
    stableReleases = releases.filter(
      (release) => !release.prerelease && !release.draft,
    );

    const hasExpectedRelease =
      !expectedTag ||
      stableReleases.some((release) => release.tag_name === expectedTag);

    if (hasExpectedRelease) {
      break;
    }

    if (attempt === maxAttempts) {
      throw new Error(
        `GitHub API still did not return release "${expectedTag}" among stable releases after ${maxAttempts} attempts. ` +
          "Refusing to generate CHANGELOG.md from what may be a stale/incomplete release list.",
      );
    }

    console.log(
      `Expected release "${expectedTag}" not yet present (got ${stableReleases.length} stable releases) - retrying after a short delay in case of API read-after-write lag...`,
    );
    await sleep(3000);
  }

  console.log(`Found ${stableReleases.length} stable releases`);
  return stableReleases;
}

/**
 * Generate CHANGELOG.md content from releases
 */
function generateChangelog(releases) {
  const lines = [];

  // Header
  lines.push("# Changelog");
  lines.push("");
  lines.push(
    "All notable changes to the UQ Design System are documented in this file.",
  );
  lines.push("");
  lines.push(
    "This changelog aggregates stable releases only. For alpha releases and detailed per-package changelogs, see:",
  );
  lines.push(
    "- [GitHub Releases](https://github.com/uq-its-ss/design-system/releases) (includes alpha releases)",
  );
  lines.push("- Individual package CHANGELOG.md files (per-package details)");
  lines.push("");
  lines.push("---");
  lines.push("");

  // Sort releases by date (newest first)
  releases.sort((a, b) => new Date(b.published_at) - new Date(a.published_at));

  // Add each release
  for (const release of releases) {
    const date = new Date(release.published_at).toISOString().split("T")[0];
    const title = release.name || release.tag_name;

    // Release header
    lines.push(`## ${title}`);
    lines.push("");
    lines.push(`**Released:** ${date}`);
    lines.push("");

    // Release body (contains manual summary + auto-generated changelog)
    if (release.body) {
      lines.push(release.body.trim());
    }

    lines.push("");
    lines.push("---");
    lines.push("");
  }

  // Footer
  lines.push("## Archive");
  lines.push("");
  lines.push(
    "For releases before this changelog was automated, see the [GitHub Releases page](https://github.com/uq-its-ss/design-system/releases).",
  );
  lines.push("");

  return lines.join("\n");
}

/**
 * Main execution
 */
async function main() {
  try {
    // The workflow passes the tag of the release it just published, so this
    // script can confirm the API has caught up rather than trusting whatever
    // (possibly stale) list it happens to get back first.
    const expectedTag = process.env.EXPECTED_RELEASE_TAG;
    if (!expectedTag) {
      console.warn(
        "EXPECTED_RELEASE_TAG was not set - skipping the read-after-write check and using whatever stable releases the API returns on the first attempt.",
      );
    }

    // Fetch releases from GitHub
    const releases = await fetchReleases(expectedTag);

    if (releases.length === 0) {
      console.log(
        "No stable releases found. Skipping CHANGELOG.md generation.",
      );
      return;
    }

    // Generate changelog content
    const changelogContent = generateChangelog(releases);

    // Write to file
    fs.writeFileSync(CHANGELOG_PATH, changelogContent, "utf8");
    console.log(
      `✅ CHANGELOG.md generated successfully (${releases.length} releases)`,
    );
    console.log(`   Location: ${CHANGELOG_PATH}`);
  } catch (error) {
    console.error("❌ Error generating CHANGELOG.md:", error.message);
    process.exit(1);
  }
}

// Run if executed directly
if (require.main === module) {
  main();
}

module.exports = { fetchReleases, generateChangelog };
