import { FunctionalComponent, h } from '@stencil/core';

interface GlobalMenuLinkClassicProps {
  name: string;
  keyboardAccess: string;
  href: string;
}

export const GlobalMenuLinkClassic: FunctionalComponent<GlobalMenuLinkClassicProps> = ({name, keyboardAccess, href}) => (
  <li class="global-menu__item">
    <a class="global-menu__link" accessKey={keyboardAccess} href={href}>
      {name}
    </a>
  </li>
);
