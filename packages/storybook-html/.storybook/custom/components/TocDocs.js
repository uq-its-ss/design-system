import React, { useEffect } from 'react';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import tocbot from 'tocbot';

const tocConfiguration = {
  tocSelector: '.js-toc',
  contentSelector: '.sbdocs-content',
  headingSelector: 'h2.sbdocs-h2, h3.sbdocs-h3, h4.sbdocs-h4, h5.sbdocs-h5, h6.sbdocs-h6'
};

const TocDocs = (props) => {
  // Set up toc bot
  useEffect(() => {
    tocbot.init({
      ...tocConfiguration,
      onClick: event => {
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
      tocbot.destroy();
    };
  });
  
  return (
    <>
      <DocsContainer {...props} />
    </>
  )
}

export default TocDocs;
