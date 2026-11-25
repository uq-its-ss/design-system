import { useEffect } from "storybook/preview-api";
import printStyles from "@uqds/print/src/scss/main.scss?inline";

// Storybook renders in a screen context, so @media print rules never match.
// For stories with `printMedia: true`, this rewrites media queries in the live CSSOM (source CSS is untouched):
// `print` rules apply, `screen` rules are switched off. @page is not
// emulated; use the browser print preview for that.
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

// Opt in per story with `parameters: { printMedia: true }`.
export const withPrintMedia = (Story, context) => {
  const isPrint = Boolean(context.parameters.printMedia);

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

// Injects the print stylesheet as a decorator so it stays out of the code
// view (pair with `docs.source.excludeDecorators: true`).
export const withPrintStyles = (Story) => {
  const content = Story();
  const style = `<style>${printStyles}</style>`;
  if (typeof content === "string") return style + content;
  const fragment = document.createDocumentFragment();
  fragment.append(
    document.createRange().createContextualFragment(style),
    content,
  );
  return fragment;
};
