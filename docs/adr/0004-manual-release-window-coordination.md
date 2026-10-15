# Manual Release-Window Coordination, Not Automated

## Context

Alpha publishing to `master` is fully automated (any merge triggers `lerna publish --conventional-prerelease`), and stable releases are cut from a branch created off `releases` and later merged back into `master` to bring graduated versions across. If a `feat`/`fix` merge lands on `master` while a release is in flight, its alpha-versioned `package.json`/`CHANGELOG.md` changes could collide with the graduated versions arriving via the release merge-back.

## Decision

We rely on manual, verbal coordination to pause merges to `master` while a release is in progress, rather than an automated guardrail (e.g. branch protection or a CI check blocking `master` merges during an open `releases` PR).

**Rationale:** the team is small enough that this is coordinated directly today, and no collision has occurred in practice. The complexity of an automated guard isn't justified yet.

## Consequences

- This is an accepted risk, not a guaranteed-safe process: an accidental `master` merge during a release window could still produce a version/changelog conflict between alpha and graduated versions.
- Revisit this decision (and consider an automated guard) if the team grows beyond direct verbal coordination, or if a collision actually occurs.

## Status

Accepted (2026-09-07)
