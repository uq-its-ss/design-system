// import styles
import "./table.scss";

// import HTML template strings
import tableHTML from "./table.html";
import tableClassesHTML from "./table-with-classes.html";
import tableMultipleHeadersHTML from "./table-multiple-headers.html";
import tableIrregularHeadersHTML from "./table-irregular-headers.html";
import tableMultiLevelHeadersHTML from "./table-multi-level-headers.html";
import tableCardHTML from "./table-card.html";

export default {
  title: "Components/Table",
  parameters: {
    layout: "padded",
  },
  previewTabs: {
    canvas: { hidden: false },
  },
};

export const table = {
  render: () => {
    return tableHTML;
  },

  name: "Table scroll with minimal classes",
};

export const tableClasses = {
  render: () => {
    return tableClassesHTML;
  },

  name: "Table scroll with classes",
};

export const tableMultipleHeaders = {
  render: () => {
    return tableMultipleHeadersHTML;
  },

  name: "Table scroll with multiple headers",
};

export const tableIrregularHeaders = {
  render: () => {
    return tableIrregularHeadersHTML;
  },

  name: "Table scroll with irregular headers",
};

export const tableMultiLevelHeaders = {
  render: () => {
    return tableMultiLevelHeadersHTML;
  },

  name: "Table scroll with multi-level headers",
};

export const tableCard = {
  render: () => {
    return tableCardHTML;
  },

  name: "Table card",
};
