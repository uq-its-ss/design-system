import { useEffect } from '@storybook/client-api';

// import scripts
import headerCreate from '@uqds/header/src/js/header';
import siteHeaderNav from '@uqds/site-header/src/js/site-header-navigation';

// import HTML template strings
import headerHTML from '../../components/header/header.html';
import siteHeaderHTML from '../../components/site-header/site-header.html';
import footerHTML from '../../components/footer/footer.html';

import docs from './basic-page.docs.mdx';

export default {
  title: 'Patterns/Basic page',
  parameters: {
    layout: "fullscreen",
    previewTabs: {
      canvas: {hidden: false}
    },
    docs: {
      page: docs,
      inlineStories: false
    }
  }
};

export const basicPage = () => {
  useEffect(() => {
    new headerCreate();
    var navelement = document.getElementById("jsNav");
    new siteHeaderNav(navelement, "uq-site-header__navigation");
  });
  return `
    ${headerHTML}
    ${siteHeaderHTML}
    <div class="uq-grid">
      <div class="uq-grid__col uq-grid__col--6">
        <h1>Heading level 1 (h1)</h1>
        <div class="uq-grid uq-grid--golden">
          <div class="uq-grid__col">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Ut tellus elementum sagittis vitae et leo. Eu sem integer vitae justo. Massa vitae tortor condimentum lacinia quis. Vel fringilla est ullamcorper eget nulla facilisi. Quis imperdiet massa tincidunt nunc. Convallis tellus id interdum velit laoreet id. Eu mi bibendum neque egestas congue quisque egestas diam in.</p>
          </div>
          <div class="uq-grid__col">
            <p><small>Id diam vel quam elementum pulvinar. Vestibulum sed arcu non odio euismod lacinia. Facilisis sed odio morbi quis. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat.</small></p>
          </div>
        </div>
      </div>
    </div>
    ${footerHTML}
  `;
};

basicPage.storyName = "Basic page";
