import React from "react";
import { Meta } from "@storybook/react";
import { Header as Component } from "@uqds/react/tsx";
import { localLinksExample } from "@uqds/header/src/js/menuData";

export default {
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    siteDomain: "https://uq.edu.au",
  },
} satisfies Meta<typeof Component>;

/**
 * Header with local navigation (Scenario A)
 * Shows site-specific navigation with nested structure in mobile menu
 */
export const WithLocalNavigation = {
  args: {
    siteDomain: "https://study.uq.edu.au",
    localLinks: localLinksExample,
    isLinkActive: (href: string) => href === "https://uq.edu.au",
  },
  name: "With Local Navigation",
};

/**
 * Header without local navigation (Scenario B)
 * Shows global UQ navigation with primary and secondary links in mobile menu
 */
export const WithoutLocalNavigation = {
  args: {
    siteDomain: "https://uq.edu.au",
    // No localLinks provided - falls back to global navigation
  },
  name: "Without Local Navigation (Global)",
};

/**
 * Header with custom active link detection
 */
export const WithActiveLinkDetection = {
  args: {
    siteDomain: "https://study.uq.edu.au",
    localLinks: localLinksExample,
    isLinkActive: (href: string) => {
      // Example: Mark a specific link as active
      return href === "/study-options/programs";
    },
  },
  name: "With Active Link Detection",
};

/**
 * Header with callbacks for state changes
 */
export const WithCallbacks = {
  args: {
    siteDomain: "https://uq.edu.au",
    localLinks: localLinksExample,
    onMenuToggle: (isOpen: boolean) => {
      console.log("Mobile menu toggled:", isOpen);
    },
    onSearchToggle: (isOpen: boolean) => {
      console.log("Search toggled:", isOpen);
    },
  },
  name: "With Event Callbacks",
};

/**
 * Showcase - Multiple scenarios
 */
export const showcase = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
      <div>
        <h2 style={{ padding: "1rem", background: "#f5f5f5" }}>
          Scenario A: With Local Navigation
        </h2>
        <Component
          siteDomain="https://study.uq.edu.au"
          localLinks={localLinksExample}
        />
      </div>

      <div>
        <h2 style={{ padding: "1rem", background: "#f5f5f5" }}>
          Scenario B: Without Local Navigation (Global)
        </h2>
        <Component siteDomain="https://uq.edu.au" />
      </div>
    </div>
  ),
};

/**
 * Base story for controls panel
 */
export const base = {};
