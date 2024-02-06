import docs from "./local-nav.docs.mdx";
import "../../../../../navigation/src/scss/main.scss";

export default {
  title: "Components/Navigation/Local nav",
  parameters: {
    docs: {
      page: docs,
    },
    layout: "fullscreen",
    previewTabs: {
      canvas: { hidden: false },
    },
  },
};

export const LocalNav = {
  name: "Local nav",
  render: () => `
<nav class="uq-local-nav" aria-label="Local navigation">
  <div class="uq-local-nav__menu-item uq-local-nav__grandparent"><a href="#"><span class="uq-sr-only">Back to </span>UQ home</a></div>
  <div class="uq-local-nav__menu-item uq-local-nav__parent"><a href="#"><span class="uq-sr-only">Back to </span>Research</a></div>
  <ul class="uq-local-nav__menu">
    <li class="uq-local-nav__menu-item"><a href="#">Research impact</a></li>
    <li class="uq-local-nav__menu-item uq-local-nav--has-children uq-local-nav--is-current uq-local-nav--is-active">
      <a href="#" aria-current="page">Research capabilities and initiatives</a>
      <ul class="uq-local-nav__child-menu">
        <li class="uq-local-nav__menu-item uq-local-nav--has-children uq-local-nav__child"><a href="#">Energy network</a></li>
        <li class="uq-local-nav__menu-item uq-local-nav__child"><a href="#">Other networks</a></li>
      </ul>
    </li>
    <li class="uq-local-nav__menu-item"><a href="#">Ethics and integrity</a></li>
    <li class="uq-local-nav__menu-item uq-local-nav--has-children"><a href="#">Graduate research</a></li>
    <li class="uq-local-nav__menu-item uq-local-nav--has-children"><a href="#">Research partnerships</a></li>
    <li class="uq-local-nav__menu-item"><a href="#">News</a></li>
    <li class="uq-local-nav__menu-item uq-local-nav--has-children"><a href="#">Research and innovation week</a></li>
    <li class="uq-local-nav__menu-item"><a href="#">Supporting our researchers</a></li>
    <li class="uq-local-nav__menu-item"><a href="#">Contact</a></li>
  </ul>
</nav>
`,
};
