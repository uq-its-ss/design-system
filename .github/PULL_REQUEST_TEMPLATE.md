## Description
<!-- Brief description of what this PR changes and why -->



## Related Issue
<!-- JIRA ticket or GitHub issue -->
JIRA: ITSADSSD-XXXXX

## Type of Change
<!-- Check the relevant box -->
- [ ] 🚀 New feature (feat)
- [ ] 🐛 Bug fix (fix)
- [ ] 💥 Breaking change (feat! or fix!)
- [ ] 📝 Documentation update (docs)
- [ ] 🎨 Code style/refactor (style/refactor)
- [ ] ⚡️ Performance improvement (perf)
- [ ] ✅ Test update (test)
- [ ] 🔧 Chore/maintenance (chore)

## Packages Changed
<!-- List affected packages -->
- [ ] @uqds/package-name
- [ ] @uqds/another-package

## Commit Message Format

**⚠️ Important:** All commits must use [Conventional Commits](https://conventionalcommits.org/) format.

**Examples:**
```bash
✅ feat(button): add disabled state variant
✅ fix(header): correct keyboard navigation
✅ feat(navigation)!: redesign API (BREAKING CHANGE)
❌ ITSADSSD-71324 header updates  # Wrong format
```

**Multi-package commits:**
- Different change types → use separate commits
- Same change type → use most-affected package as scope
- 3+ packages → use generic scope (core, components, etc.)

See [CONTRIBUTING.md](../docs/CONTRIBUTING.md#commit-message-format) for details.

## Testing Checklist
<!-- Check all that apply -->
- [ ] Linting passes (`npm run lint`)
- [ ] Tests pass (`npm run test`)
- [ ] Tested in Storybook (`npm run storybook`)
- [ ] Tested in Chrome, Firefox, Safari
- [ ] Tested responsive behavior (mobile ≤1023px, desktop ≥1024px)
- [ ] Tested keyboard navigation (Tab, Enter, Arrow keys, Escape)
- [ ] Verified focus indicators visible
- [ ] Checked color contrast (WCAG AA minimum)

## Breaking Changes
<!-- If this PR includes breaking changes, describe them and provide migration steps -->

**Breaking changes:**
- None

**Migration guide:**
N/A

<!-- Example:
**Breaking changes:**
- `nav-items` prop now requires `id` field

**Migration guide:**
Add `id: "unique-id"` to each navigation item:
```diff
- <Navigation items={[{label: "Home", url: "/"}]} />
+ <Navigation items={[{id: "home", label: "Home", url: "/"}]} />
```
-->

## Screenshots/Videos
<!-- If UI changes, include before/after screenshots or screen recordings -->



## Additional Notes
<!-- Any additional context, trade-offs, or follow-up work needed -->



---

**For Reviewers:**
- [ ] Commits follow conventional format
- [ ] Breaking changes documented with migration steps
- [ ] Storybook examples updated (if applicable)
- [ ] Accessibility requirements met
- [ ] No unrelated changes included
