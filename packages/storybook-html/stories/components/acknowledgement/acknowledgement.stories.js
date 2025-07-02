import "@uqds/acknowledgement/src/scss/main.scss";
export default {
  title: "Components/Acknowledgement",
  argTypes: {
    content: {
      control: "text",
    },
    size: {
      control: "select",
      options: ["Default", "Large"],
      mapping: {
        Default: "",
        Large: "uq-acknowledgement--large",
      },
    },
  },
  args: {
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor eros dui, vitae iaculis leo ornare eget. Etiam tristique lobortis ligula non mattis. Ut dapibus libero neque, vel tincidunt nunc tempus eget.`,
    size: "Default",
  },
  render: ({ size, content }) => {
    return `
    <div class="uq-acknowledgement ${size}">
  <div class="uq-acknowledgement__content">
    <div class="uq-acknowledgement__text">
      ${content}
    </div>
  </div>
</div>
    `;
  },
};

export const culturalAdvice = {
  args: {
    content: `The Library is custodian of culturally sensitive <a href="https://web.library.uq.edu.au/collections/culturally-sensitive-collections" class="uq-acknowledgement__link">Aboriginal and Torres Strait Islander materials</a>`,
    size: "Default",
  },
};

export const reconciliationStatement = {
  args: {
    content: `UQ acknowledges the Traditional Owners and their custodianship of the lands on which UQ is situated. &ndash; <a href="https://about.uq.edu.au/reconciliation" class="uq-acknowledgement__link">Reconciliation at UQ</a>`,
    size: "Large",
  },
};
