// import styles
import './side-nav.scss';

// import HTML template strings
import sideNavHTML from './side-nav.html';

import docs from './side-nav.docs.mdx';

export default {
  title: 'Components/Side nav',
  parameters: {
    docs: {
      page: docs
    },
    layout: "padded",
    previewTabs: {
      canvas: {hidden: false}
    }
  }
};

export const sideNavSingleLevel = () => {
  return sideNavHTML;
};

sideNavSingleLevel.storyName = 'Side nav single-level';

export const sideNavMultiLevel = () => {
  return `
  <!-- Side nav multi-level -->
  <div class="uq-side-nav">

  <!-- Side nav title -->
  <h3 class="uq-side-nav__title">
    <a href="#" class="uq-side-nav__title-link">Side nav title</a>
  </h3>

  <!-- Side nav -->
  <nav class="uq-side-nav__container" aria-label="Side navigation">
    <ul class="uq-side-nav__list uq-side-nav__list--level-1">
      <li class="uq-side-nav__list-item">
        <a href="#" class="uq-side-nav__link">Side nav list1</a>
      </li>
      <li class="uq-side-nav__list-item uq-side-nav__list-item--has-subnav uq-side-nav__list-item--active">
        <a href="#" class="uq-side-nav__link" aria-haspopup="true" aria-expanded="true">Side nav list2</a>
        <ul class="uq-side-nav__list uq-side-nav__list--level-2" aria-label="Side nav list2 submenu">
          <li class="uq-side-nav__list-item">
            <a href="#" class="uq-side-nav__link">Side nav list2 submenu1</a>
          </li>
          <li class="uq-side-nav__list-item uq-side-nav__list-item--active">
            <a href="#" class="uq-side-nav__link">Side nav list2 submenu2</a>
          </li>
        </ul>
      </li>
      <li class="uq-side-nav__list-item">
        <a href="#" class="uq-side-nav__link">Side nav list3</a>
      </li>
    </ul>
  </nav>

</div>
  `;
};

sideNavMultiLevel.storyName = 'Side nav multi-level';
