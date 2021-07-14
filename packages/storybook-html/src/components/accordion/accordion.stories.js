import { useEffect } from '@storybook/client-api';

// import styles
import '@uqds/accordion/src/scss/_component.scss';

// import scripts
import accordionCreate from '@uqds/accordion/src/js/accordion';

// import HTML template strings
import accordionDivHTML from './accordion-div.html';
import accordionListHTML from './accordion-list.html';
import accordionDivIsManualHTML from './accordion-div-is-manual.html';

// documentation
import docs from './accordion.docs.mdx';

export default {
  title: 'Components/Accordion',
  parameters: {
    docs: {
      page: docs,
      inlineStories: false
    },
    layout: "padded",
    previewTabs: {
      canvas: {hidden: false}
    }
  }
};

export const usingDivs = () => {
  useEffect(() => {
    new accordionCreate(); 
  });
  return accordionDivHTML;
};

usingDivs.storyName = 'Using divs';

export const usingLists = () => {
  useEffect(() => {
    new accordionCreate(); 
  });
  return accordionListHTML;
};

usingLists.storyName = 'Using lists';

export const isManual = () => {
  useEffect(() => {
    new accordionCreate(); 
  });
  return accordionDivIsManualHTML;
};

isManual.storyName = 'Alternate behaviour';
