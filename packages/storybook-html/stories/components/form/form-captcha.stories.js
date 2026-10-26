import "./form.scss";

export default {
  title: "Components/Form/Captcha",
  render: () => {
    return `

      <script type="module" src="https://cdn.jsdelivr.net/npm/@friendlycaptcha/sdk@1.0.2/site.min.js" async defer></script>
      <script nomodule src="https://cdn.jsdelivr.net/npm/@friendlycaptcha/sdk@1.0.2/site.compat.min.js" async defer></script>
      <form class="uq-form">
      <div class="frc-captcha" data-sitekey="FCMGETO5UETK6BA9"></div>
      </form>
    `;
  },
};

export const captcha = {};
