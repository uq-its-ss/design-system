import React from "react";
import {
  Title,
  Subtitle,
  Description,
  Stories,
} from "@storybook/addon-docs/blocks";

const DocsPage = () => (
  <>
    <Title />
    <Subtitle />
    <Description />
    <Stories includePrimary title={"Examples"} />
  </>
);

export default DocsPage;
