# Commit Workflow

## Overview

The UQ Design System uses [Conventional Commits](https://conventionalcommits.org/) to automatically generate changelogs and determine version bumps for each package.

**Key principle:** Each commit should represent one logical change with a clear type and scope.

---

## Branch and Commit Workflow

### 1. Create a Branch

**Branch naming:** `JIRA-TICKET-brief-description`

```bash
# Example
git checkout -b ITSADSSD-71324-header-navigation-updates
```

### 2. Make Commits (Conventional Format)

**Format:**

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Example commits:**

```bash
# Feature
git commit -m "feat(button): add disabled state variant"

# Bug fix
git commit -m "fix(header): correct keyboard navigation tab order"

# Breaking change
git commit -m "feat(navigation)!: redesign API

BREAKING CHANGE: nav-items prop now requires id field.
Migration: Add id to each navigation item."
```

**The git hook will validate your commit message.** If it fails:

- Fix the message format and try again
- Emergency bypass: `git commit --no-verify` (use sparingly)

### 3. Handle Multi-Package Changes

When your work affects multiple packages, choose the appropriate strategy:

#### Strategy A: Different Change Types → Separate Commits

```bash
# Scenario: Button gets new feature, Card needs fix
git commit -m "feat(button): add disabled state variant"
git commit -m "fix(card): update padding to work with new button"
```

**Why:** Each package needs correct version bump (feat = minor, fix = patch)

#### Strategy B: Same Change Type → Primary Package Scope

```bash
# Scenario: Header is primary change, footer/navigation are minor adjustments
git commit -m "feat(header): add mobile navigation

Also updates footer and navigation components for consistency."
```

**Why:** One logical feature, header is most affected

#### Strategy C: 3+ Packages → Generic Scope

```bash
# Scenario: Standardizing disabled states across form components
git commit -m "feat(components): standardize disabled state across form components

- button: add disabled variant
- input: add disabled styling
- select: add disabled styling
- textarea: add disabled styling"
```

**Why:** Cross-cutting change affecting many components

### 4. Create Pull Request

**Before creating PR:**

```bash
# Run quality checks
npm run lint    # All linting must pass
npm run test    # All tests must pass

# Verify in Storybook
npm run storybook
```

**PR checklist:**

- ✅ All commits use conventional format
- ✅ Assign 2 reviewers from ADS-UI
- ✅ Fill out PR template completely
- ✅ Link JIRA ticket
- ✅ Give team heads-up if change intersects with other work

### 5. Merge to Master

**Merge strategy:** Standard merge (not squash)

**Why:** Preserves individual commits for accurate per-package versioning

- Lerna reads each commit to determine version bumps
- `feat(header):` → header gets minor bump
- `fix(button):` → button gets patch bump
- Squash would lose this granularity

---

## Commit Message Reference

### Types

| Type       | Description                                       | Version Bump | Changelog |
| ---------- | ------------------------------------------------- | ------------ | --------- |
| `feat`     | New feature                                       | MINOR        | ✅ Yes    |
| `fix`      | Bug fix                                           | PATCH        | ✅ Yes    |
| `feat!`    | Breaking change (or `BREAKING CHANGE:` in footer) | MAJOR        | ✅ Yes    |
| `perf`     | Performance improvement                           | PATCH        | ✅ Yes    |
| `docs`     | Documentation only                                | None         | ❌ No     |
| `style`    | Code formatting (no logic change)                 | None         | ❌ No     |
| `refactor` | Code restructure (no behavior change)             | None         | ❌ No     |
| `test`     | Test updates                                      | None         | ❌ No     |
| `chore`    | Maintenance (deps, build, etc.)                   | None         | ❌ No     |

### Scopes

Use the package name: `button`, `header`, `footer`, `card`, `core`, etc.

**Special scopes:**

- `core` — @uqds/core changes
- `components` — cross-component changes (3+ packages)
- `deps` — dependency updates
- `storybook` — Storybook changes

### Breaking Changes

**Two ways to mark breaking changes:**

1. **Exclamation mark:**

   ```bash
   feat(button)!: remove deprecated large size prop
   ```

2. **Footer:**

   ```bash
   feat(header): redesign navigation API

   BREAKING CHANGE: nav-items prop now requires id field.
   Migration: Add id: "unique-id" to each item.
   ```

**Always include migration instructions** in the commit body or footer.

---

## Common Scenarios

### Scenario 1: Single Package Feature

```bash
# Simple, straightforward
git commit -m "feat(button): add outline variant"
```

### Scenario 2: Bug Fix Spanning Two Packages

```bash
# If different fix types
git commit -m "fix(header): correct navigation keyboard handling"
git commit -m "fix(footer): update to use same keyboard pattern"

# If coupled (same fix)
git commit -m "fix(header): correct keyboard navigation pattern

Also updates footer to use consistent keyboard handling."
```

### Scenario 3: Breaking Change with Migration

```bash
git commit -m "feat(navigation)!: redesign API for better accessibility

BREAKING CHANGE: Navigation items structure changed.

Before:
  nav-items={[{label: 'Home', url: '/'}]}

After:
  nav-items={[{id: 'home', label: 'Home', href: '/'}]}

Migration: Rename 'url' to 'href' and add unique 'id' field."
```

### Scenario 4: Dependency Update (No Changelog)

```bash
# Won't appear in changelog
git commit -m "chore(deps): bump sass from 1.70.0 to 1.80.6"
```

### Scenario 5: Documentation Update (No Version Bump)

```bash
# Won't trigger version bump
git commit -m "docs(button): update usage examples in README"
```

---

## Git Hook Validation

The `commitlint` git hook validates your commit message before accepting it.

**What it checks:**

- ✅ Format matches `<type>(<scope>): <description>`
- ✅ Type is valid (feat, fix, chore, etc.)
- ✅ Scope is not empty
- ✅ Description is present and starts lowercase
- ✅ Description doesn't end with period

**If validation fails:**

```bash
$ git commit -m "updated header"

⧗   input: updated header
✖   subject may not be empty [subject-empty]
✖   type may not be empty [type-empty]

✖   found 2 problems, 0 warnings
```

**Fix it:**

```bash
git commit -m "fix(header): update navigation logic"
```

**Emergency bypass:**

```bash
# Use sparingly - only for emergencies
git commit --no-verify -m "your message"
```

---

## Release Impact

Your commits directly affect:

1. **Package versions** (via Lerna conventional-commits)

   - `feat:` → minor bump (1.0.0 → 1.1.0)
   - `fix:` → patch bump (1.0.0 → 1.0.1)
   - `feat!:` → major bump (1.0.0 → 2.0.0)

2. **Changelogs** (auto-generated)

   - `feat:` and `fix:` → appear in changelog
   - `chore:` and `docs:` → omitted from changelog

3. **Release notes** (stable releases)
   - All `feat:`, `fix:`, breaking changes → included
   - Categorized by type (Features, Bug Fixes, Breaking Changes)

**Bad commits = bad versions = bad changelogs** — please take commit messages seriously!

---

## Additional Resources

- [Conventional Commits Specification](https://conventionalcommits.org/)
- [CONTRIBUTING.md](../CONTRIBUTING.md) — Full contribution guide
- [Release Documentation Strategy](./adr/0001-release-documentation-strategy.md) — ADR explaining our approach

---

## Questions?

Contact the ADS-UI team or see [CONTRIBUTING.md](../CONTRIBUTING.md).
