import "@uqds/pill/src/scss/main.scss";

export default {
  title: "Components/Pill/Pill",
  argTypes: {
    label: "text",
    href: "text",
    id: "text",
    name: "text",
    value: "Text",
  },
  args: {
    label: "Agriculture and food",
    href: "#",
  },
};

export const Link = {
  render: ({ label, href }) => {
    return `<a class="uq-pill" href="${href}">${label}</a>`;
  },
};

export const Checkbox = {
  args: {
    id: "agriculture-and-food-checkbox",
    name: "pill-checkbox",
    value: "agriculture-and-food",
  },
  render: ({ label, id, name, value }) => {
    return `<label class="uq-pill" for="${id}">
   ${label}
   <input type="checkbox" id="${id}" name="${name}" value="${value}" />
</label>`;
  },
};

export const Radio = {
  args: {
    id: "agriculture-and-food-radio",
    name: "pill-radio",
    value: "agriculture-and-food",
  },
  render: ({ label, id, name, value }) => {
    return `<label class="uq-pill" for="${id}">
   ${label}
   <input type="radio" id="${id}" name="${name}" value="${value}" />
</label>`;
  },
};
