STORYBOOK DOC STRUCTURE 

Now that we have rebuilt the header as documented in /Users/uqbcrunk/development/design-system/CHANGES.md

We need to improve the documentation provided to design system package users in /Users/uqbcrunk/development/design-system/packages/storybook-html/stories/components/header/header.mdx

The PR for changes is here: https://github.com/uq-its-ss/design-system/pull/758

This is a very simple initial outline. 

Overview 

Default example

How to to initialize (usage) - should reflect the 

Variant examples 

Key parts - including descriptions of purpose, usage and states. (ie Mega menu, Search, Mobile Menu (Local vs Global), Secondary menu. 

Analytics - list all the data tags for analytics

Accessibility - List all the key accessibility requirements and key tags 






Here are some background NOTES: 

As a user,
I want to navigate through the mega menu in a clear and logical way,
so that I can quickly find and access the content I’m looking for.
 
Context/background:
The existing mega menu has limitations due to hover-state interactions that interfere with keyboard navigation, restricting functionality for users who rely on keyboard controls.
These interactions also conflict with the existing D7 horizontal site menu’s hover activation behaviour (proposed plan to replace existing interim header on D7 with header mega menu)
 
AC:
Responsive Display
The mobile navigation is displayed on viewports 1023px and below.
The desktop navigation, including the mega menu, is displayed on viewports 1024px and above.
Menu layout and behavior adapt correctly across breakpoints.
Accessibility
The menu complies with WCAG 2.1 AA accessibility standards.
Keyboard navigation follows a logical, sequential focus order:
Tab and arrow keys allow users to move through top-level and nested menu items.
Focus is visibly indicated and does not trap the user.
Screen reader output accurately conveys:
Menu item names
Expanded/collapsed states
Hierarchical relationships
Validate accessibility compliance and provide final confirmation.{*}*
Functional Improvements
Hover-state interactions do not interfere with keyboard navigation.
Menu behavior does not conflict with the existing D7 horizontal site menu.
The mega menu can be used as a replacement for the interim D7 header without regressions.
Dependencies
Any dependencies (e.g., JavaScript libraries, CSS modules) required for the new menu behavior are identified and documented.
Integration with Drupal’s menu system is confirmed.
Responsive display 
The mobile navigation is displayed on viewports 1023px and below.
The desktop navigation (including mega menus) displays from 1024px and above.
Accessibility
Menu must comply with WCAG 2.1 AA accessibility standards.
Keyboard navigation must follow a logical, sequential focus order.
Screen reader output must accurately convey menu item names, states, and hierarchy.
Confirmation of compliance to be validated by @Brett Crunkhorn 
 
Dependencies
?
Helpful links
Figma design: https://www.figma.com/design/yYizwNN4Z6nGHbNHUFCmYW/Mobile-navigation?node-id=3396-3442&t=w4HQG6VBQvBxJQ0v-4 
 
 
As a designer,
I want local navigation to be accessible within the mobile menu and display my current position in the site,
so that users have a consistent and intuitive navigation experience across all devices.
AC:
If a site has local navigation, display local navigation menu items in mobile menu
If a site does not have local navigation, display the global menu items in mobile menu
Each site has its own separate mobile menu.
Mobile menu items to display:
Grandparent link (Back to previous menu section)
Parent
All childen
Do not display siblings
The mobile menu must never display desktop mega menu items. (Mega menu items on mobile are temporary stop gap until content migration is complete)
Active page rules
The menu must always indicate the user’s current position / active page.
The active state rules are:
Standard pages with local navigation: highlight the current page.
Pages without local navigation: highlight the parent section.
Campaign pages: highlight the parent section.
Nested campaign pages: highlight the grandparent section.
Orphan pages (no hierarchy): highlight the parent page.
The active menu item remains highlighted until the user navigates to another page, at which point the new page becomes the active menu item.
When opened, the menu must always default to the section containing the current active page.
If the user navigates through other sections, then closes the menu, reopening it must reset the menu to the active section.
Interaction
Tapping a ‘menu item’ with a chevron moves the user into the next menu level/section.
Tapping a ‘menu link’ opens the corresponding page.
---Laura to add swipe animation expectations & search bar —
Responsive display 
The mobile navigation is displayed on viewports 1023px and below.
The desktop navigation (including mega menus) displays from 1024px and above.
Accessibility
Menu must comply with WCAG 2.1 AA accessibility standards.
Keyboard navigation must follow a logical, sequential focus order.
Screen reader output must accurately convey menu item names, states, and hierarchy.
Confirmation of compliance to be validated by @Brett Crunkhorn 
 
Dependencies
Desktop mega menu accessibility updates.
If these changes are rolled out across D7, the interim header will need to be replaced with the new mega menu header design to avoid interaction conflicts with the existing D7 horizontal site menu hover interaction states.
