import classNames from "classnames";
import iconCatalog from "@uqds/icon";

export default {
  title: "Components/Button",
  render: ({ style, label, size, expand, icon, iconPosition }) => {
    // Check if style is "Link" (maps to "uq-button--link")
    const isLink = style === "uq-button--link";
    
    // If link type with icon, apply icon classes to button instead of span
    const iconClasses = (isLink && icon) ? `uq-icon uq-icon--${icon}${iconPosition === "right" ? " uq-icon--right" : ""}` : "";
    
    // Icon span element (only for non-link buttons)
    const iconSpan = (icon && !isLink) ? `<span class="uq-icon uq-icon--${icon}"></span>` : "";
    
    // Position icon based on iconPosition arg
    const content = iconPosition === "right" 
      ? `${label} ${iconSpan}`
      : `${iconSpan} ${label}`;
    
    return `<button class="${classNames("uq-button", style, size, { "uq-button--expand": expand }, iconClasses)}">
    ${content}
    </button>`;
  },
  argTypes: {
    label: "text",
    style: {
      control: "select",
      options: ["Primary", "Secondary", "Tertiary", "Link"],
      mapping: {
        Primary: "",
        Secondary: "uq-button--secondary",
        Tertiary: "uq-button--tertiary",
        Link: "uq-button--link",
      },
    },
    size: {
      control: "select",
      options: ["Tiny", "Small", "Default", "Large"],
      mapping: {
        Default: "",
        Tiny: "uq-button--tiny",
        Small: "uq-button--small",
        Large: "uq-button--large",
      },
    },
    expand: "boolean",
    icon: {
      options: iconCatalog.map((icon) => `${icon.category}--${icon.name}`),
      control: "select",
      table: {
        category: "Icon", // Groups the toggle switch
      },
    },
    iconPosition: {
      control: "select",
      options: ["left", "right"],
      description: "Position of the icon relative to the label",
      table: {
        category: "Icon", // Groups the toggle switch
      },
    },
  },
  args: {
    style: "Primary",
    size: "Default",
    label: "Button",
    expand: false,
    iconPosition: "left",
  },
};

export const Primary = {};

export const Secondary = {
  args: {
    label: "Secondary",
    style: "Secondary",
  },
};

export const Tertiary = {
  args: {
    label: "Tertiary",
    style: "Tertiary",
  },
};

export const Size = {
  parameters: {
    tags: ["!dev"],
  },
  render: () => {
    return `<p>
  <button type="button" class="uq-button uq-button--tiny">Tiny</button>
</p>
<p>
  <button type="button" class="uq-button uq-button--small">Small</button>
</p>
<p>
  <button type="button" class="uq-button">Default</button>
</p>
<p>
  <button type="button" class="uq-button uq-button--large">Large</button>
</p>`;
  },
};

export const Expanded = {
  args: {
    expand: true,
  },
};

export const Icon = {
  args: {
    icon: "engineering-and-computing--cog",
  },
  parameters: {
    tags: ["!dev"],
  },
  render: () => {
    return `<p>
  <button class="uq-button">
    <span class="uq-icon uq-icon--engineering-and-computing--icon-plane-1"></span> Button
  </button>
</p>
<p>
  <button class="uq-button">
    Button <span class="uq-icon uq-icon--education--basketball-ball"></span>
  </button>
</p>`;
  },
};
