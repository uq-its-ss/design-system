import { useEffect } from "storybook/preview-api";

// Storybook renders in a screen context, so @media print rules never match.
// This rewrites media queries in the live CSSOM (source CSS is untouched):
// `print` rules apply, `screen` rules are switched off. @page is not
// emulated; use browser print preview or emulateMedia('print') for that.
const originals = new Map();

const rewrite = (rules) => {
  Array.from(rules).forEach((rule) => {
    if (rule instanceof CSSMediaRule) {
      const original = originals.get(rule) ?? rule.media.mediaText;
      if (/\bprint\b/.test(original)) {
        originals.set(rule, original);
        rule.media.mediaText = original.replace(/\bprint\b/g, "all");
      } else if (/\bscreen\b/.test(original)) {
        originals.set(rule, original);
        rule.media.mediaText = "not all";
      }
    }
    if (rule.cssRules) rewrite(rule.cssRules);
  });
};

const apply = () => {
  Array.from(document.styleSheets).forEach((sheet) => {
    try {
      rewrite(sheet.cssRules);
    } catch {
      // Cross-origin stylesheets block cssRules access.
    }
  });
};

const restore = () => {
  originals.forEach((mediaText, rule) => {
    rule.media.mediaText = mediaText;
  });
  originals.clear();
};

export const printGlobalTypes = {
  media: {
    description: "Emulate CSS media type",
    toolbar: {
      title: "Media",
      icon: "document",
      items: [
        { value: "screen", title: "Screen" },
        { value: "print", title: "Print preview" },
      ],
      dynamicTitle: true,
    },
  },
};

export const withPrintMedia = (Story, context) => {
  const isPrint = context.globals.media === "print";

  useEffect(() => {
    if (!isPrint) return undefined;
    apply();
    // Re-apply when stories inject <style> tags after render.
    const observer = new MutationObserver(apply);
    observer.observe(document.head, { childList: true });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      restore();
    };
  }, [isPrint, context.id]);

  return Story();
};
