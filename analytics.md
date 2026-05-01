# Analytics Tracking Documentation

## Overview
This document tracks analytics implementation, changes, and questions related to the UQ Design System components, with a focus on the Header component.

## Header Component Analytics

### Current Implementation

#### GTM Data Attributes
The header uses Google Tag Manager (GTM) data attributes for tracking user interactions:

- `data-gtm-category`: Categories include "Header", "Primary header", "Secondary header", "Main navigation", "Search"
- `data-gtm-label`: Identifies specific elements (e.g., link titles, "UQ Logo")
- `data-gtm-action`: Tracks actions (e.g., "Toggle", "Text search")
- `data-gtm-trigger`: Specifies event triggers (e.g., "click")
- `data-gtm-form-action`: Tracks form submissions
- `data-gtm-form-search`: Identifies search inputs

#### Tracked Elements

**Primary Navigation (Desktop)**
- Navigation links with category "Primary header"
- Mega menu interactions
- Link labels follow pattern: `${link.title}` or `${parentTitle} > ${child.title}`

**Secondary Navigation (Desktop)**
- Navigation links with category "Secondary header"
- Individual link tracking with labels

**Mobile Navigation**
- Primary navigation items
- Secondary navigation items
- Local navigation links (when enabled)
- Slide menu controls

**Search Functionality**
- Search toggle button
- Search form submissions
- Search input interactions

**Logo**
- UQ Logo link with label "UQ Logo"

### Questions & Issues

#### Open Questions
<!-- Add questions as they arise -->

Local navigation: 

- In the Local Navigation there are two types of link... Control Links (open child list , Back etc) and then there are the Links that go to pages. Do we need to track these differently? 
- Is this pattern correct for a deep linked local nav item: `data-gtm-label="Admissions > Undergraduate > Review admission schemes > Aboriginal and Torres Strait Islander Admission Scheme"`
- should all links have data labels or only some, mobile primary and secondary links currently do not. 

What is `gtm-processed` 
- what is attaching it
- what function does it serve... does it need to be documented in UQDS

#### Resolved Questions
<!-- Move resolved questions here with dates and resolutions -->

### Change Log

#### [Date] - [Change Description]
<!-- Document analytics changes here -->
<!-- Example:
#### 2026-05-01 - Initial analytics documentation
- Created analytics.md to track GTM implementation
- Documented current data attribute usage
-->

### Testing Checklist

- [ ] Verify GTM data layer pushes for primary navigation
- [ ] Verify GTM data layer pushes for secondary navigation
- [ ] Verify GTM data layer pushes for mobile navigation
- [ ] Verify search tracking
- [ ] Verify mega menu interaction tracking
- [ ] Verify logo click tracking

### Related Files
- `/packages/storybook-html/stories/components/header/header.stories.js`
- `/packages/header/src/js/` (header implementation files)

### References
- [GTM Documentation](https://developers.google.com/tag-manager)
- UQ Analytics Requirements (link if available)
