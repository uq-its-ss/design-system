import docs from "./twig.docs.mdx";
import twigbutton from "./twig.twig";

export default {
  title: "Components/Twig",
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

const Template = ({ text, variants }) =>
twigbutton({
  text,
  variants,
});

export const twigbtn = Template.bind({});
twigbtn.args = {
text: "It works party time",
variants: "uq-button--large",
};

export const usingDivs = () => {
  useEffect(() => {
    new accordionCreate();
  });
  return accordionDivHTML;
};