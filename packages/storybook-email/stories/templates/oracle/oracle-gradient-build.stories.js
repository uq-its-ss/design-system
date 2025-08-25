import { topWrapper } from "../../components/general-components/o-top-wrapper.stories.js";
import { header } from "../../components/general-components/o-header.stories.js";
import { senderHeaderGradient } from "../../components/general-components/o-sender-header.stories.js";
import { body } from "../../components/general-components/o-body.stories.js";
import { purpleBlockGradient } from "../../components/general-components/o-purple-block.stories.js";
import { divider24 } from "../../components/general-components/o-divider-24.stories.js";
import { footer } from "../../components/general-components/o-footer.stories.js";
import { bottomWrapper } from "../../components/general-components/o-bottom-wrapper.stories.js";

export default {
  title: "Templates/Oracle",
  parameters: {
    story: {
      inline: false,
    },
  },
};

export const oracleGradientBuild = {
  render: () => `
  ${topWrapper.render()}
  ${header.render()}
  ${senderHeaderGradient.render()}
  ${body.render()}
  ${purpleBlockGradient.render()}
  ${divider24.render()}
  ${footer.render()}
  ${bottomWrapper.render()}
`,
};
