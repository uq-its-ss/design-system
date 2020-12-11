import { useEffect } from '@storybook/client-api';

// import scripts
import headerCreate from '@uqds/header/src/js/header.es6';
import siteHeaderNav from '@uqds/site-header/src/js/site-header-navigation.es6';

// import HTML template strings
import headerHTML from '../../components/header/header.html';
import siteHeaderHTML from '../../components/site-header/site-header.html';
import footerHTML from '../../components/footer/footer.html';

export default {
    title: 'Patterns/Header - site title - content - side nav - footer',
    parameters: {
      layout: "fullscreen",
      previewTabs: {
        canvas: {hidden: false}
      }
    }
};

export const example = () => {
    useEffect(() => {
        new headerCreate();
        var navelement = document.getElementById("jsNav");
        var nav = new siteHeaderNav(navelement, "uq-site-header__navigation");
      });
    return `
      ${headerHTML}
      ${siteHeaderHTML}
      <br/><br/>
      <div class="uq-grid uq-grid--golden">
        <div class="uq-grid__col">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Ut tellus elementum sagittis vitae et leo. Eu sem integer vitae justo. Massa vitae tortor condimentum lacinia quis. Vel fringilla est ullamcorper eget nulla facilisi. Quis imperdiet massa tincidunt nunc. Convallis tellus id interdum velit laoreet id. Eu mi bibendum neque egestas congue quisque egestas diam in.</p>
          <p><small>Id diam vel quam elementum pulvinar. Vestibulum sed arcu non odio euismod lacinia. Facilisis sed odio morbi quis. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat.</small></p>
        </div>
        <div class="uq-grid__col">
          <!-- Side nav multi-level -->
          <div class="uq-side-nav">

            <!-- Parent page title -->
            <h3 class="uq-side-nav__title">
              <a href="#" class="uq-side-nav__title-link">Parent page title</a>
            </h3>

            <!-- Side nav -->
            <nav class="uq-side-nav__container" aria-label="Side navigation" id="jsSideNav">
              <ul class="uq-side-nav__list uq-side-nav__list--level-1">
                <li class="uq-side-nav__list-item">
                  <a href="#" class="uq-side-nav__link">Sibling list1</a>
                </li>
                <li class="uq-side-nav__list-item uq-side-nav__list-item--has-subnav uq-side-nav__list-item--active uq-side-nav__list-item--open">
                  <a href="#" class="uq-side-nav__link" aria-haspopup="true" aria-expanded="true">Sibling list2</a>
                  <span class="uq-side-nav__list-item__sub-toggle" tabindex="0">Open</span>
                  <ul class="uq-side-nav__list uq-side-nav__list--level-2" aria-label="Side nav list2 submenu">
                    <li class="uq-side-nav__list-item">
                      <a href="#" class="uq-side-nav__link">Sibling list2 submenu1</a>
                    </li>
                    <li class="uq-side-nav__list-item uq-side-nav__list-item--active">
                      <a href="#" class="uq-side-nav__link">Sibling list2 submenu2</a>
                    </li>
                  </ul>
                </li>
                <li class="uq-side-nav__list-item">
                  <a href="#" class="uq-side-nav__link">Sibling list3</a>
                </li>
              </ul>
            </nav>

          </div>
        </div>
      </div>
      <br/><br/>
      ${footerHTML}
    `;
};
