# Contributing to UQ Design System

Thank you for contributing to the UQ Design System! This guide will help you understand our development workflow.

## Table of Contents

- [Getting Started](#getting-started)
- [Commit Message Format](#commit-message-format)
- [Pull Request Process](#pull-request-process)
- [Release Process](#release-process)

---

## Getting Started

### Prerequisites

- Node.js 20+ (use [nvm](https://github.com/nvm-sh/nvm))
- npm 10+

### Installation

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook
```

See [Setup Instructions](./docs/setup-instructions.md) for detailed setup.

---

## Commit Message Format

We use [Conventional Commits](https://conventionalcommits.org/) to automatically generate changelogs and determine package version bumps.

### Format

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Type

Must be one of:

- **feat**: A new feature (triggers MINOR version bump)
- **fix**: A bug fix (triggers PATCH version bump)
- **docs**: Documentation only changes (no version bump)
- **style**: Code style changes - formatting, missing semicolons, etc. (no version bump)
- **refactor**: Code change that neither fixes a bug nor adds a feature (no version bump)
- **perf**: Performance improvement (triggers PATCH version bump)
- **test**: Adding or updating tests (no version bump)
- **chore**: Maintenance tasks - dependency updates, build changes, etc. (no version bump)

### Scope

The package name affected by the change:

- `button`, `header`, `footer`, `card`, `accordion`, etc. (individual packages)
- `core` (for @uqds/core changes)
- `storybook` (for storybook-html/react/email)
- `deps` (for dependency updates)

### Breaking Changes

For breaking changes, add `!` after type or `BREAKING CHANGE:` in footer:

```bash
# Using ! suffix
feat(button)!: remove deprecated large size prop

# Using footer
feat(header): redesign navigation API

BREAKING CHANGE: nav-items prop now requires id field. 
Migration: Add id: "unique-id" to each navigation item.
```

### Examples

#### Good Commits ✅

```bash
# New feature
feat(button): add disabled state variant

# Bug fix
fix(header): correct keyboard navigation tab order

# Breaking change
feat(navigation)!: change API to use new routing structure

BREAKING CHANGE: Navigation items now require href instead of url.
Migration: Rename url prop to href in all navigation items.

# Multi-line with body
fix(footer): improve link color contrast

Updates footer link colors to meet WCAG AA standards.
Also updates hover states for better visibility.

# Chore (no changelog entry)
chore(deps): bump sass from 1.70.0 to 1.80.6
```

#### Bad Commits ❌

```bash
# Too vague
fix: update stuff

# Missing scope
feat: add new feature

# Non-conventional format
ITSADSSD-71324 header navigation updates

# Wrong type
docs(button): add disabled state  # Should be feat:
```

### Multi-Package Changes

When your change affects multiple packages:

#### Different change types → Separate commits

```bash
# Commit 1
feat(button): add disabled state variant

# Commit 2  
fix(card): correct padding to work with new button
```

#### Same change type → Use most-affected package

```bash
# If button is the primary change
feat(button): add disabled state variant

Also updates card and header to use consistent disabled styling.
```

#### 3+ packages → Use generic scope

```bash
feat(components): standardize disabled state across all form components

- button: add disabled variant
- input: add disabled styling  
- select: add disabled styling
- textarea: add disabled styling
```

### Git Hook

We provide a git hook (commitlint + Husky) that validates your commit messages before they're created.

**If the hook blocks you:**

```bash
# Fix the message and try again
git commit -m "feat(button): add disabled state"

# Emergency bypass (use sparingly)
git commit --no-verify -m "your message"
```

The hook is **guidance, not enforcement** — you can bypass it when needed, but please try to follow the format.

### Pre-commit Hook

We also run a **pre-commit hook** that executes `npm test` before each commit.

**What it does:**
- Runs all tests before allowing the commit
- Catches test failures before they enter git history
- Takes 5-30 seconds (depending on test suite size)

**If the pre-commit hook becomes a burden:**

```bash
# Option 1: Bypass for a single commit
git commit --no-verify -m "feat(button): quick fix"

# Option 2: Remove the hook entirely
rm .husky/pre-commit

# Option 3: Change to run only linting (faster)
cat > .husky/pre-commit << 'EOF'
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run lint:es
EOF
chmod +x .husky/pre-commit
```

**Note:** CI/CD runs full tests on every push, so removing the pre-commit hook won't compromise code quality — it just shifts test validation to the push stage instead of the commit stage.

---

## Pull Request Process

### Before Creating a PR

1. ✅ Run linting: `npm run lint`
2. ✅ Run tests: `npm run test`
3. ✅ Verify in Storybook: `npm run storybook`
4. ✅ Check all commits use conventional format
5. ✅ Verify responsive behavior (mobile ≤1023px, desktop ≥1024px)
6. ✅ Test keyboard navigation

### Creating a PR

1. **Branch naming:** `JIRA-TICKET-brief-description`
   - Example: `ITSADSSD-71324-header-navigation-updates`

2. **PR title:** Use conventional commit format
   - ✅ Good: `feat(header): add mobile navigation`
   - ✅ Good: `fix(button): correct focus indicator (ITSADSSD-71324)`
   - ❌ Bad: `ITSADSSD-71324 header updates`

3. **Assign reviewers:** 2 reviewers from ADS-UI team

4. **Fill out PR template** (see template below)

### Merge Strategy

We use **standard merge** (not squash merge) to preserve individual commit history for accurate per-package versioning.

**Before merge:**
- All commits must use conventional format
- All CI checks must pass
- 2 approvals required

### PR Template

When you create a PR, include:

```markdown
## Description
Brief description of what this PR changes and why.

## Related Issue
JIRA: ITSADSSD-XXXXX

## Changes
- feat(button): add disabled state variant
- fix(card): update padding

## Testing
- [ ] Tested in Chrome, Firefox, Safari
- [ ] Tested mobile (≤1023px) and desktop (≥1024px)
- [ ] Tested keyboard navigation
- [ ] Verified in Storybook

## Breaking Changes
None / [Describe breaking changes and migration steps]

## Screenshots
[If UI changes]
```

---

## Release Process

We publish two types of releases:

### Alpha Releases (Master Branch)

**Trigger:** Automatic on every merge to `master`

**Process:**
- Fully automated (no human intervention)
- Version: `v1.2.3-alpha.0`, `v1.2.3-alpha.1`, etc.
- Published to npm with `@alpha` tag
- Per-package CHANGELOGs updated
- No GitHub Release created

**Install alpha:**
```bash
npm install @uqds/button@alpha
```

### Stable Releases (Releases Branch)

**Trigger:** PR merged to `releases` branch

**Process:**
1. Draft GitHub Release created (when PR opens)
2. Lerna calculates version bumps (dry run)
3. Manual approval required (GitHub issue)
4. **Human edits draft release** (add summary, highlights, migration notes)
5. Approval granted via issue comment
6. Packages published to npm with `@latest` tag
7. GitHub Release published (with your manual summary)
8. Root CHANGELOG.md auto-generated from release
9. Per-package CHANGELOGs updated

**Release naming:** Date-based (e.g., "Release: 2026-08-31")

**Breaking changes:** Include inline migration notes in release summary

### Commit Discipline

Since we use conventional commits for automated versioning:

- ✅ `feat(button):` → button gets MINOR bump (1.0.0 → 1.1.0)
- ✅ `fix(header):` → header gets PATCH bump (1.0.0 → 1.0.1)
- ✅ `feat(card)!:` → card gets MAJOR bump (1.0.0 → 2.0.0)
- ❌ `chore(button):` → button gets NO bump (not in changelog)

**Why this matters:** Bad commit messages = incorrect versions + missing changelog entries

---

## Additional Resources

- [Code Standards](./docs/standards/standards.md)
- [Testing Guide](./docs/testing/testing-linting.md)
- [Creating a Package](./docs/create-a-package.md)
- [Using Storybook](./docs/using-storybook.md)
- [Release Documentation Strategy](./docs/adr/0001-release-documentation-strategy.md)

---

## Questions?

Contact the ADS-UI team or create an issue in this repository.

---

**Thank you for contributing to the UQ Design System!** 🎉
