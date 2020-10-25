import { useEffect } from '@storybook/client-api';

// import styles
import './grid-menu.scss';

// import scripts
import gridMenuEqualiser from '@uqds/grid-menu/src/js/grid-menu';

// import docs
import docs from './grid-menu.docs.mdx';

// import HTML template strings
import gridMenuHTML from './grid-menu.html';
import gridMenuEqualisedHTML from './grid-menu-equalised.html';

export default {
  title: 'Components/Grid menu',
  parameters: {
    docs: {
      page: docs,
      inlineStories: false
    },
    layout: "padded"
  }
};

/* export const gridMenuBasic = () => `
<h2>Grid Menu Basic</h2>
<ul class="uq-grid-menu">
  <li><a href="#"><span class="uq-grid-menu__title">Menu link 1</span></a></li>
  <li><a href="#"><span class="uq-grid-menu__title">Menu link 2</span></a></li>
  <li><a href="#"><span class="uq-grid-menu__title">Menu link 3</span></a></li>
  <li><a href="#"><span class="uq-grid-menu__title">Menu link 4</span></a></li>
  <li><a href="#"><span class="uq-grid-menu__title">Menu link 5</span></a></li>
  <li><a href="#"><span class="uq-grid-menu__title">Menu link 6</span></a></li>
</ul>
`;
gridMenuBasic.storyName = "Grid Menu Basic";

export const gridMenuWithDescription = () => `
<h2>Grid Menu with Description</h2>
<ul class="uq-grid-menu">
  <li class="uq-grid-menu__item">
    <a href="#" class="uq-grid-menu__link">
      <span class="uq-grid-menu__icon uq-icon uq-icon--hotel-bedroom-1"></span>
      <span class="uq-grid-menu__title">Menu link 1</span>
      <span class="uq-grid-menu__description">Ullamcorper est sodales egestas condimentum vestibulum proin justo morbi
        luctus porttitor adipiscing eu a eu massa inceptos cras non tempus taciti.
      </span>
    </a>
  </li>
  <li class="uq-grid-menu__item">
    <a href="#" class="uq-grid-menu__link">
      <span class="uq-grid-menu__icon uq-icon uq-icon--hotel-bedroom-1"></span>
      <span class="uq-grid-menu__title">Menu link 2</span>
      <span class="uq-grid-menu__description">Ullamcorper est sodales egestas condimentum vestibulum proin justo morbi
        luctus porttitor adipiscing eu a eu massa inceptos cras non tempus taciti.
      </span>
    </a>
  </li>
  <li class="uq-grid-menu__item">
    <a href="#" class="uq-grid-menu__link">
      <span class="uq-grid-menu__icon uq-icon uq-icon--hotel-bedroom-1"></span>
      <span class="uq-grid-menu__title">Menu link 3</span>
      <span class="uq-grid-menu__description">Ullamcorper est sodales egestas condimentum vestibulum proin justo morbi
        luctus porttitor adipiscing eu a eu massa inceptos cras non tempus taciti.
      </span>
    </a>
  </li>
  <li class="uq-grid-menu__item">
    <a href="#" class="uq-grid-menu__link">
      <span class="uq-grid-menu__icon uq-icon uq-icon--hotel-bedroom-1"></span>
      <span class="uq-grid-menu__title">Menu link 4</span>
      <span class="uq-grid-menu__description">Ullamcorper est sodales egestas condimentum vestibulum proin justo morbi
        luctus porttitor adipiscing eu a eu massa inceptos cras non tempus taciti.
      </span>
    </a>
  </li>
  <li class="uq-grid-menu__item">
    <a href="#" class="uq-grid-menu__link">
      <span class="uq-grid-menu__icon uq-icon uq-icon--hotel-bedroom-1"></span>
      <span class="uq-grid-menu__title">Menu link 5</span>
      <span class="uq-grid-menu__description">Ullamcorper est sodales egestas condimentum vestibulum proin justo morbi
        luctus porttitor adipiscing eu a eu massa inceptos cras non tempus taciti.
      </span>
    </a>
  </li>
</ul>
`;
gridMenuWithDescription.storyName = "Grid Menu with Description";

export const gridMenuDarkTextVariant = () => `
<h2>Grid Menu Dark Text Variant</h2>
<ul class="uq-grid-menu uq-grid-menu--dark-text">
  <li class="uq-grid-menu__item">
    <a href="#" class="uq-grid-menu__link">
      <span class="uq-grid-menu__icon uq-icon uq-icon--hotel-bedroom-1"></span>
      <span class="uq-grid-menu__title">Menu link 1</span>
      <span class="uq-grid-menu__description">Ullamcorper est sodales egestas condimentum vestibulum proin justo morbi
        luctus porttitor adipiscing eu a eu massa inceptos cras non tempus taciti.
      </span>
    </a>
  </li>
  <li class="uq-grid-menu__item">
    <a href="#" class="uq-grid-menu__link">
      <span class="uq-grid-menu__icon uq-icon uq-icon--hotel-bedroom-1"></span>
      <span class="uq-grid-menu__title">Menu link 2</span>
      <span class="uq-grid-menu__description">Ullamcorper est sodales egestas condimentum vestibulum proin justo morbi
        luctus porttitor adipiscing eu a eu massa inceptos cras non tempus taciti.
      </span>
    </a>
  </li>
  <li class="uq-grid-menu__item">
    <a href="#" class="uq-grid-menu__link">
      <span class="uq-grid-menu__icon uq-icon uq-icon--hotel-bedroom-1"></span>
      <span class="uq-grid-menu__title">Menu link 3</span>
      <span class="uq-grid-menu__description">Ullamcorper est sodales egestas condimentum vestibulum proin justo morbi
        luctus porttitor adipiscing eu a eu massa inceptos cras non tempus taciti.
      </span>
    </a>
  </li>
  <li class="uq-grid-menu__item">
    <a href="#" class="uq-grid-menu__link">
      <span class="uq-grid-menu__icon uq-icon uq-icon--hotel-bedroom-1"></span>
      <span class="uq-grid-menu__title">Menu link 4</span>
      <span class="uq-grid-menu__description">Ullamcorper est sodales egestas condimentum vestibulum proin justo morbi
        luctus porttitor adipiscing eu a eu massa inceptos cras non tempus taciti.
      </span>
    </a>
  </li>
  <li class="uq-grid-menu__item">
    <a href="#" class="uq-grid-menu__link">
      <span class="uq-grid-menu__icon uq-icon uq-icon--hotel-bedroom-1"></span>
      <span class="uq-grid-menu__title">Menu link 5</span>
      <span class="uq-grid-menu__description">Ullamcorper est sodales egestas condimentum vestibulum proin justo morbi
        luctus porttitor adipiscing eu a eu massa inceptos cras non tempus taciti.
      </span>
    </a>
  </li>
</ul>
`;
gridMenuDarkTextVariant.storyName = "Grid Menu Dark Text Variant";

export const gridMenu2Col = () => `
<h2>Grid Menu 2 Column</h2>
<ul class="uq-grid-menu uq-grid-menu--2-column">
  <li><a href="#"><span class="uq-grid-menu__title">Menu link 1</span></a></li>
  <li><a href="#"><span class="uq-grid-menu__title">Menu link 2</span></a></li>
  <li><a href="#"><span class="uq-grid-menu__title">Menu link 3</span></a></li>
  <li><a href="#"><span class="uq-grid-menu__title">Menu link 4</span></a></li>
  <li><a href="#"><span class="uq-grid-menu__title">Menu link 5</span></a></li>
  <li><a href="#"><span class="uq-grid-menu__title">Menu link 6</span></a></li>
</ul>
`;
gridMenu2Col.storyName = "Grid Menu 2 Column";

export const gridMenu4Col = () => `
<h2>Grid Menu 4 Column</h2>
<ul class="uq-grid-menu uq-grid-menu--4-column">
  <li><a href="#"><span class="uq-grid-menu__title">Menu link 1</span></a></li>
  <li><a href="#"><span class="uq-grid-menu__title">Menu link 2</span></a></li>
  <li><a href="#"><span class="uq-grid-menu__title">Menu link 3</span></a></li>
  <li><a href="#"><span class="uq-grid-menu__title">Menu link 4</span></a></li>
  <li><a href="#"><span class="uq-grid-menu__title">Menu link 5</span></a></li>
  <li><a href="#"><span class="uq-grid-menu__title">Menu link 6</span></a></li>
</ul>
`;
gridMenu4Col.storyName = "Grid Menu 4 Column";

export const gridMenuWithIcons = () => `
<h2>Grid Menu with Icons</h2>
<ul class="uq-grid-menu">
  <li><a href="#"><span class="uq-grid-menu__icon uq-icon uq-icon--car-1"> </span> <span class="uq-grid-menu__title">Menu link 1</span></a></li>
  <li><a href="#"><span class="uq-grid-menu__icon uq-icon uq-icon--bus"> </span> <span class="uq-grid-menu__title">Menu link 2</span></a></li>
  <li><a href="#"><span class="uq-grid-menu__icon uq-icon uq-icon--sea-transport-boat"> </span> <span class="uq-grid-menu__title">Menu link 3</span></a></li>
  <li><a href="#"><span class="uq-grid-menu__icon uq-icon uq-icon--railroad-train-1"> </span> <span class="uq-grid-menu__title">Menu link 4</span></a></li>
  <li><a href="#"><span class="uq-grid-menu__icon uq-icon uq-icon--icon-plane-1"> </span> <span class="uq-grid-menu__title">Menu link 5</span></a></li>
  <li><a href="#"><span class="uq-grid-menu__icon uq-icon uq-icon--bicycle"> </span> <span class="uq-grid-menu__title">Menu link 6</span></a></li>
</ul>
`;
gridMenuWithIcons.storyName = "Grid Menu with Icons"; */

export const gridMenuAll = () => {
  return gridMenuHTML;
};

// add more keywords
gridMenuAll.parameters = { notes: 'links'};


export const equalised = () => {
  useEffect(() => {
    var equaliseGridMenu = new gridMenuEqualiser('.grid-menu--equalised>a');
    equaliseGridMenu.align();
  });
  return gridMenuEqualisedHTML;
};

equalised.storyName = "Grid Menu Equalised (JS)";
