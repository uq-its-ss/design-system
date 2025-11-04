import React from "react";
import { components } from "@storybook/components";
import Toc from "./Toc";

const H1 = components.h1;

const DocHeader = ({ children }, ...rest) => {
  return (
    <>
      <H1 {...rest}>{children}</H1>
      <Toc />
    </>
  );
};

export default DocHeader;
