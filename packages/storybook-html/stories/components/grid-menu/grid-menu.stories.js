// import styles
import "./grid-menu.scss";

// import docs
import docs from "./grid-menu.mdx";

// import HTML template strings
import gridMenuHTML from "./grid-menu.html";

export default {
  title: "Components/Grid menu",
  parameters: {
    docs: {
      page: docs,
    },
    layout: "padded",
    previewTabs: {
      canvas: { hidden: false },
    },
  },
};

export const gridMenuDefault = {
  render: () => {
    return gridMenuHTML;
  },

  name: "Default",
};

export const gridMenuDescription = {
  render: () => {
    return `
    <ul class="uq-grid-menu">
      <li class="uq-grid-menu__item">
        <a href="#" class="uq-grid-menu__link">
          <span class="uq-grid-menu__icon uq-icon uq-icon--other--hotel-bedroom-1"></span>
          <span class="uq-grid-menu__title">Menu link 1</span>
          <span class="uq-grid-menu__description">Ullamcorper est sodales egestas condimentum vestibulum proin justo morbi
            luctus porttitor adipiscing eu a eu massa inceptos cras non tempus taciti.
          </span>
        </a>
      </li>
      <li class="uq-grid-menu__item">
        <a href="#" class="uq-grid-menu__link">
          <span class="uq-grid-menu__icon uq-icon uq-icon--education--mortarboard"></span>
          <span class="uq-grid-menu__title">Menu link 2</span>
          <span class="uq-grid-menu__description">Ullamcorper est sodales egestas condimentum vestibulum proin justo morbi
            luctus porttitor adipiscing eu a eu massa inceptos cras non tempus taciti.
          </span>
        </a>
      </li>
      <li class="uq-grid-menu__item">
        <a href="#" class="uq-grid-menu__link">
          <span class="uq-grid-menu__icon uq-icon uq-icon--engineering-and-computing--construction-building"></span>
          <span class="uq-grid-menu__title">Menu link 3</span>
          <span class="uq-grid-menu__description">Ullamcorper est sodales egestas condimentum vestibulum proin justo morbi
            luctus porttitor adipiscing eu a eu massa inceptos cras non tempus taciti.
          </span>
        </a>
      </li>
      <li class="uq-grid-menu__item">
        <a href="#" class="uq-grid-menu__link">
          <span class="uq-grid-menu__icon uq-icon uq-icon--standard--region-domestic"></span>
          <span class="uq-grid-menu__title">Menu link 4</span>
          <span class="uq-grid-menu__description">Ullamcorper est sodales egestas condimentum vestibulum proin justo morbi
            luctus porttitor adipiscing eu a eu massa inceptos cras non tempus taciti.
          </span>
        </a>
      </li>
      <li class="uq-grid-menu__item">
        <a href="#" class="uq-grid-menu__link">
          <span class="uq-grid-menu__icon uq-icon uq-icon--standard--region-international"></span>
          <span class="uq-grid-menu__title">Menu link 5</span>
          <span class="uq-grid-menu__description">Ullamcorper est sodales egestas condimentum vestibulum proin justo morbi
            luctus porttitor adipiscing eu a eu massa inceptos cras non tempus taciti.
          </span>
        </a>
      </li>
    </ul>
    `;
  },

  name: "With description",
};

export const gridMenuDarkText = {
  render: () => {
    return `
    <ul class="uq-grid-menu uq-grid-menu--dark-text">
      <li class="uq-grid-menu__item">
        <a href="#" class="uq-grid-menu__link">
          <span class="uq-grid-menu__icon uq-icon uq-icon--other--hotel-bedroom-1"></span>
          <span class="uq-grid-menu__title">Menu link 1</span>
          <span class="uq-grid-menu__description">Ullamcorper est sodales egestas condimentum vestibulum proin justo morbi
            luctus porttitor adipiscing eu a eu massa inceptos cras non tempus taciti.
          </span>
        </a>
      </li>
      <li class="uq-grid-menu__item">
        <a href="#" class="uq-grid-menu__link">
          <span class="uq-grid-menu__icon uq-icon uq-icon--other--hotel-bedroom-1"></span>
          <span class="uq-grid-menu__title">Menu link 2</span>
          <span class="uq-grid-menu__description">Ullamcorper est sodales egestas condimentum vestibulum proin justo morbi
            luctus porttitor adipiscing eu a eu massa inceptos cras non tempus taciti.
          </span>
        </a>
      </li>
      <li class="uq-grid-menu__item">
        <a href="#" class="uq-grid-menu__link">
          <span class="uq-grid-menu__icon uq-icon uq-icon--other--hotel-bedroom-1"></span>
          <span class="uq-grid-menu__title">Menu link 3</span>
          <span class="uq-grid-menu__description">Ullamcorper est sodales egestas condimentum vestibulum proin justo morbi
            luctus porttitor adipiscing eu a eu massa inceptos cras non tempus taciti.
          </span>
        </a>
      </li>
      <li class="uq-grid-menu__item">
        <a href="#" class="uq-grid-menu__link">
          <span class="uq-grid-menu__icon uq-icon uq-icon--other--hotel-bedroom-1"></span>
          <span class="uq-grid-menu__title">Menu link 4</span>
          <span class="uq-grid-menu__description">Ullamcorper est sodales egestas condimentum vestibulum proin justo morbi
            luctus porttitor adipiscing eu a eu massa inceptos cras non tempus taciti.
          </span>
        </a>
      </li>
      <li class="uq-grid-menu__item">
        <a href="#" class="uq-grid-menu__link">
          <span class="uq-grid-menu__icon uq-icon uq-icon--other--hotel-bedroom-1"></span>
          <span class="uq-grid-menu__title">Menu link 5</span>
          <span class="uq-grid-menu__description">Ullamcorper est sodales egestas condimentum vestibulum proin justo morbi
            luctus porttitor adipiscing eu a eu massa inceptos cras non tempus taciti.
          </span>
        </a>
      </li>
    </ul>
    `;
  },

  name: "With dark text",
};

export const gridMenuIcons = {
  render: () => {
    return `
    <ul class="uq-grid-menu">
      <li class="uq-grid-menu__item"><a href="#" class="uq-grid-menu__link"><span class="uq-grid-menu__icon uq-icon uq-icon--other--car-1"></span><span class="uq-grid-menu__title">Menu link 1</span></a></li>
      <li class="uq-grid-menu__item"><a href="#" class="uq-grid-menu__link"><span class="uq-grid-menu__icon uq-icon uq-icon--other--bus"></span><span class="uq-grid-menu__title">Menu link 2</span></a></li>
      <li class="uq-grid-menu__item"><a href="#" class="uq-grid-menu__link"><span class="uq-grid-menu__icon uq-icon uq-icon--other--sea-transport-boat"></span><span class="uq-grid-menu__title">Menu link 3</span></a></li>
      <li class="uq-grid-menu__item"><a href="#" class="uq-grid-menu__link"><span class="uq-grid-menu__icon uq-icon uq-icon--other--railroad-train-1"></span><span class="uq-grid-menu__title">Menu link 4</span></a></li>
      <li class="uq-grid-menu__item"><a href="#" class="uq-grid-menu__link"><span class="uq-grid-menu__icon uq-icon uq-icon--engineering-and-computing--icon-plane-1"></span><span class="uq-grid-menu__title">Menu link 5</span></a></li>
      <li class="uq-grid-menu__item"><a href="#" class="uq-grid-menu__link"><span class="uq-grid-menu__icon uq-icon uq-icon--other--bicycle"></span><span class="uq-grid-menu__title">Menu link 6</span></a></li>
    </ul>
    `;
  },

  name: "With icons",
};

export const gridMenu2Column = {
  render: () => {
    return `
    <ul class="uq-grid-menu uq-grid-menu--2-column">
      <li class="uq-grid-menu__item"><a href="#" class="uq-grid-menu__link"><span class="uq-grid-menu__title">Menu link 1</span></a></li>
      <li class="uq-grid-menu__item"><a href="#" class="uq-grid-menu__link"><span class="uq-grid-menu__title">Menu link 2</span></a></li>
      <li class="uq-grid-menu__item"><a href="#" class="uq-grid-menu__link"><span class="uq-grid-menu__title">Menu link 3</span></a></li>
      <li class="uq-grid-menu__item"><a href="#" class="uq-grid-menu__link"><span class="uq-grid-menu__title">Menu link 4</span></a></li>
      <li class="uq-grid-menu__item"><a href="#" class="uq-grid-menu__link"><span class="uq-grid-menu__title">Menu link 5</span></a></li>
      <li class="uq-grid-menu__item"><a href="#" class="uq-grid-menu__link"><span class="uq-grid-menu__title">Menu link 6</span></a></li>
    </ul>
    `;
  },

  name: "2 Column",
};

export const gridMenu4Column = {
  render: () => {
    return `
    <ul class="uq-grid-menu uq-grid-menu--4-column">
      <li class="uq-grid-menu__item"><a href="#" class="uq-grid-menu__link"><span class="uq-grid-menu__title">Menu link 1</span></a></li>
      <li class="uq-grid-menu__item"><a href="#" class="uq-grid-menu__link"><span class="uq-grid-menu__title">Menu link 2</span></a></li>
      <li class="uq-grid-menu__item"><a href="#" class="uq-grid-menu__link"><span class="uq-grid-menu__title">Menu link 3</span></a></li>
      <li class="uq-grid-menu__item"><a href="#" class="uq-grid-menu__link"><span class="uq-grid-menu__title">Menu link 4</span></a></li>
      <li class="uq-grid-menu__item"><a href="#" class="uq-grid-menu__link"><span class="uq-grid-menu__title">Menu link 5</span></a></li>
      <li class="uq-grid-menu__item"><a href="#" class="uq-grid-menu__link"><span class="uq-grid-menu__title">Menu link 6</span></a></li>
    </ul>
    `;
  },

  name: "4 Column",
};

export const gridMenuEqualisedHeight = {
  render: () => {
    return `
    <ul class="uq-grid-menu">
      <li class="uq-grid-menu__item"><a class="uq-grid-menu__link" href="#"><span class="uq-grid-menu__title">Menu link 1</span></a></li>
      <li class="uq-grid-menu__item"><a class="uq-grid-menu__link" href="#"><span class="uq-grid-menu__title">Menu link 2</span></a></li>
      <li class="uq-grid-menu__item"><a class="uq-grid-menu__link" href="#"><span class="uq-grid-menu__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum eros vitae dignissim luctus. Phasellus et ligula est.</span></a></li>
      <li class="uq-grid-menu__item"><a class="uq-grid-menu__link" href="#"><span class="uq-grid-menu__title">Menu link 4</span></a></li>
      <li class="uq-grid-menu__item"><a class="uq-grid-menu__link" href="#"><span class="uq-grid-menu__title">Menu link 5</span></a></li>
      <li class="uq-grid-menu__item"><a class="uq-grid-menu__link" href="#"><span class="uq-grid-menu__title">Menu link 6</span></a></li>
    </ul>
    `;
  },

  name: "Equalised height",
};
