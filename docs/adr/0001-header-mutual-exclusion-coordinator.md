# ADR 0001: Header Mutual Exclusion Coordinator

**Status:** Accepted  
**Date:** 2026-06-17  
**Deciders:** Development team

## Context

The header has three exclusive toggles (Mobile Menu, Search, Mega Menu) that can open/close. Previously, Mobile Menu and Search coordinated closure directly (each module held references to others and called `.close()` on them). With the addition of Mega Menu toggles using buttons (not just hover), we needed complete mutual exclusion: opening ANY toggle must close ALL others.

We needed to decide how to coordinate this closure across three modules without creating a web of dependencies.

## Decision

Implement a **central coordinator pattern** in the Header class using callbacks:

1. **Header class** owns the coordination logic with a `closeAllExcept(toggleName)` method
2. **Each module** receives an `onOpening` callback at construction time
3. **Modules call the callback** before opening themselves, triggering closure of all other toggles
4. **Coordinator defensively checks** if modules exist before calling `.close()` on them

### Key principles:
- Callback only fires when a toggle is **opening**, not closing
- All modules implement consistent API: `close()` and `isOpen()`
- Mega menus treated as one group for mutual exclusion purposes
- Mobile menu owns its toggle button and scroll lock behavior (moved from Header)

## Alternatives Considered

### Direct module references (existing pattern)
Each module receives references to other modules and calls `.close()` directly.

**Rejected because:**
- Creates N-to-N dependencies (each module knows about all others)
- Mutual exclusion rule is scattered across multiple files
- Adding a new toggle requires updating all existing modules

### Event-based coordination
Modules emit events (e.g., `toggle:opening`), Header listens and coordinates.

**Rejected because:**
- Adds event bus complexity and debugging difficulty
- No clear advantage over callbacks in this contained scope
- Events typically better for decoupled, cross-cutting concerns; here the Header already acts as orchestrator

## Consequences

### Positive
- Mutual exclusion rule is explicit and centralized in one place
- Easy to test (coordinator is pure function of which toggle is opening)
- Modules remain focused and don't need to know about each other
- Adding new toggles only requires updating the coordinator
- Consistent API across all exclusive toggle modules

### Negative
- Modules must call callback before opening (easy to forget, though will be obvious if broken)
- Slight increase in constructor parameters (one callback added)
- Header class has slightly more responsibility

### Neutral
- Moved mobile menu toggle button logic from Header into MobileMenuModule for consistency with other modules
