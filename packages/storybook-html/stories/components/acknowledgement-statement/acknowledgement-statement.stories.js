import { createAcknowledgementStatement } from "./acknowledgement-statement";

export default {
  title: "Components/Acknowledgement statement",
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createAcknowledgementStatement({ label, ...args });
  },
  argTypes: {},
};

export const reconciliationStatement = {
  args: {},
  render: () => {
    return `
    <div  class="uq-acknowledgement-statement">
      <div class="uq-acknowledgement-statement__content">
      UQ acknowledges the Traditional Owners and their custodianship of the lands on which UQ is situated. &mdash; <a href="https://about.uq.edu.au/reconciliation" class="uq-acknowledgement-statement__link">Reconciliation at UQ</a>
      </div>
    </div>
    `;
  },
};

export const culturalAdvise = {
  args: {},
  render: () => {
    return `
    <div  class="uq-acknowledgement-statement">
      <div class="uq-acknowledgement-statement__content">
      The Library is custodian of culturally sensitive <a href="https://web.library.uq.edu.au/collections/culturally-sensitive-collections" class="uq-acknowledgement-statement__link">Aboriginal and Torres Strait Islander materials</a>
      </div>
    </div>
    `;
  },
};
