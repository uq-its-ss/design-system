import React from "react";
import { components } from "storybook/internal/components";
import "./uqds-toc.scss";

const H1 = components.h1;

const DocHeader = ({ children }, ...rest) => {
  return (
    <>
      <H1 {...rest}>{children}</H1>
    </>
  );
};

export default DocHeader;
