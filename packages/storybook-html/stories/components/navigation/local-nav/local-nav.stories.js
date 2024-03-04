import "@uqds/navigation/src/scss/main.scss";

export default {
  title: "Components/Navigation/Local nav",
  parameters: {
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
  <div class="uq-local-nav__grandparent"><a class="uq-local-nav__link" href="#" aria-label="Back to UQ home">UQ home</a></div>
  <div class="uq-local-nav__parent"><a class="uq-local-nav__link" href="#" aria-label="Back to Research">Research</a></div>
  <ul class="uq-local-nav__children">
    <li class="uq-local-nav__child"><a class="uq-local-nav__link" href="#">Research impact</a></li>
    <li class="uq-local-nav__child uq-local-nav--has-children uq-local-nav--current-child">
      <a class="uq-local-nav__link uq-local-nav--active-link" href="#" aria-current="page">Research capabilities and initiatives</a>
      <ul class="uq-local-nav__grandchildren">
        <li class="uq-local-nav__grandchild uq-local-nav--has-children"><a class="uq-local-nav__link" href="#">Energy network</a></li>
        <li class="uq-local-nav__grandchild"><a class="uq-local-nav__link" href="#">Other networks</a></li>
      </ul>
    </li>
    <li class="uq-local-nav__child"><a class="uq-local-nav__link" href="#">Ethics and integrity</a></li>
    <li class="uq-local-nav__child uq-local-nav--has-children"><a class="uq-local-nav__link" href="#">Graduate research</a></li>
    <li class="uq-local-nav__child uq-local-nav--has-children"><a class="uq-local-nav__link" href="#">Research partnerships</a></li>
    <li class="uq-local-nav__child"><a class="uq-local-nav__link" href="#">News</a></li>
    <li class="uq-local-nav__child uq-local-nav--has-children"><a class="uq-local-nav__link" href="#">Research and innovation week</a></li>
    <li class="uq-local-nav__child"><a class="uq-local-nav__link" href="#">Supporting our researchers</a></li>
    <li class="uq-local-nav__child"><a class="uq-local-nav__link" href="#">Contact</a></li>
  </ul>
</nav>
`,
};
