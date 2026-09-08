# Publish Failure Recovery: Manual Runbook, Not Automated Retry

## Context

`npx lerna publish` performs two phases internally, in a single command: it first bumps versions, commits, tags, and **pushes to git**, and only afterward publishes each package to the npm registry. If the npm publish phase fails partway (auth, network, registry issue), the git commit/tag/push has already landed on `master`/`releases` for real, with no corresponding npm package — an inconsistent state confirmed in production, requiring manual cleanup.

Lerna ships a built-in recovery command for exactly this case: `lerna publish from-git`, which re-publishes to npm using the versions already tagged in git, without re-bumping anything.

## Decision

We document the recovery procedure as a manual runbook rather than automating the retry in the workflow.

**Recovery procedure:** if the "✨ Publish stable" or "🐣 Publish alpha" step fails after the version bump/tag/push has occurred, run:

```bash
npx lerna publish from-git --yes
```

This publishes the already-tagged versions to npm without re-bumping, resolving the git/npm mismatch.

## Considered Options

- **Automated retry step** (`if: failure()` running `lerna publish from-git --yes` automatically): rejected for now — an automatic retry immediately after a registry failure risks compounding an unclear failure (e.g. partial publish, auth issue) without a human first checking _why_ it failed. Revisit if this failure mode recurs often enough to justify the added workflow complexity.

## Consequences

- Requires a human to notice the failed workflow run and manually execute the recovery command — no auto-healing.
- Low implementation cost now; can add automated retry later without reversing this decision.

## Status

Accepted (2026-09-07)
