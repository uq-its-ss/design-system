export default {
  title: "Components/General components",
  tags: ["autodocs"],
};

export const headingOne = {
  render: () =>
    `<p style="FONT-SIZE: 32px; MARGIN-BOTTOM: 8px; FONT-WEIGHT: 500; LINE-HEIGHT: 38px; COLOUR:#19151C;">Heading 1</p>`,
};

export const headingTwo = {
  render: () =>
    `<p style="FONT-SIZE: 24px; MARGIN-BOTTOM: 8px; FONT-WEIGHT: 500; LINE-HEIGHT: 29px; COLOUR:#19151C;">Heading 2</p>`,
};

export const headingThree = {
  render: () =>
    `<p style="FONT-SIZE: 18px; MARGIN-BOTTOM: 8px; FONT-WEIGHT: 500; LINE-HEIGHT: 22px; COLOUR:#19151C;">Heading 3</p>`,
};

export const bodyText = {
  render: () =>
    `<p class="text" style="color:#3B383E; font-family:'Roboto', Arial, sans-serif; font-size: 16px; line-height: 26px;">Body text</p>`,
};

export const bodyLink = {
  render: () =>
    `<p style="FONT-SIZE: 16px; MARGIN-BOTTOM: 8px; FONT-WEIGHT: 400; LINE-HEIGHT: 26px"><a href="#" class="link" style="color:#51247a;text-decoration:underline;">Body link</a></p>`,
};
