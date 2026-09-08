import React, { useEffect } from "react";
import { DocsContainer } from "@storybook/addon-docs/blocks";
import { init as tocbotInit, destroy as tocbotDestroy } from "tocbot";

const tocConfiguration = {
  tocSelector: ".toc-wrapper",
  contentSelector: ".sbdocs-content",
  headingSelector: "h2, h3, h4, h5, h6",
};

const TocDocs = (props) => {
  useEffect(() => {
    // Set up toc bot
    tocbotInit({
      ...tocConfiguration,
      onClick: (event) => {
        event.preventDefault();
        const hash = event?.currentTarget.hash;
        const id = hash?.substr(1);
        const element = document.getElementById(id);
        setTimeout(() => {
          element?.focus();
          element?.scrollIntoView();
        }, 500);
      },
    });

    return () => {
      tocbotDestroy();
    };
  });

  return (
    <>
      <DocsContainer {...props} />
    </>
  );
};

export default TocDocs;
