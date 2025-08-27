export default {
  title: "Components/General components",
  tags: ["autodocs"],
};

export const heading1 = {
  render: () =>
    `<p style="FONT-SIZE: 32px; MARGIN-BOTTOM: 8px; FONT-WEIGHT: 500; LINE-HEIGHT: 38px; COLOUR:#19151C;">Heading 1</p>`,
  name: "Heading 1",
};

export const heading2 = {
  render: () =>
    `<p style="FONT-SIZE: 24px; MARGIN-BOTTOM: 8px; FONT-WEIGHT: 500; LINE-HEIGHT: 29px; COLOUR:#19151C;">Heading 2</p>`,
  name: "Heading 2",
};

export const heading3 = {
  render: () =>
    `<p style="FONT-SIZE: 18px; MARGIN-BOTTOM: 8px; FONT-WEIGHT: 500; LINE-HEIGHT: 22px; COLOUR:#19151C;">Heading 3</p>`,
  name: "Heading 3",
};

export const bodyText = {
  render: () =>
    `<p class="text" style="color:#3B383E; font-family:'Roboto', Arial, sans-serif; font-size: 16px; line-height: 26px;">Body text</p>`,
  name: "Body text",
};

export const bodyLink = {
  render: () =>
    `<p style="FONT-SIZE: 16px; MARGIN-BOTTOM: 8px; FONT-WEIGHT: 400; LINE-HEIGHT: 26px"><a href="#" class="link" style="color:#51247a;text-decoration:underline;">Body link</a></p>`,
  name: "Body link",
};
