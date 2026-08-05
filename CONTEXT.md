# Design System Domain Language

## Header Navigation

### Exclusive Toggle

A UI element in the header that can be toggled open/closed and participates in mutual exclusion with other toggles. When one exclusive toggle opens, all others automatically close to prevent multiple overlapping panels.

All exclusive toggle modules must implement:

- `close()` - Close the toggle
- `isOpen()` - Check if toggle is currently open

Current exclusive toggles:

- **Mobile Menu** (SlideMenu panel) - one panel; includes scroll lock behavior
- **Search** panel - one panel
- **Mega Menu** (primary navigation) - group of multiple dropdowns that self-coordinate; treated as one toggle for mutual exclusion purposes

### Mutually Exclusive

The relationship between exclusive toggles where only one can be active at a time.

**Rule**: Opening ANY toggle closes ALL others.

### Coordinator

The Header class acts as the central coordinator for mutual exclusion. Each module receives an `onOpening` callback at construction that triggers the coordinator to close all other toggles before the module opens itself.
