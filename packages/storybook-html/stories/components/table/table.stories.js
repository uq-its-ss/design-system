// import styles
import "./table.scss";

// import HTML template strings
import tableHTML from "./table.html?raw";
import tableClassesHTML from "./table-with-classes.html?raw";
import tableMultipleHeadersHTML from "./table-multiple-headers.html?raw";
import tableIrregularHeadersHTML from "./table-irregular-headers.html?raw";
import tableMultiLevelHeadersHTML from "./table-multi-level-headers.html?raw";
import tableCardHTML from "./table-card.html?raw";

export default {
  title: "Components/Table",
  parameters: {
    layout: "padded",
  },
  previewTabs: {
    canvas: { hidden: false },
  },
};

export const Table = {
  render: () => {
    return tableHTML;
  },

  name: "Table scroll with minimal classes",
};

export const TableClasses = {
  render: () => {
    return tableClassesHTML;
  },

  name: "Table scroll with classes",
};

export const TableMultipleHeaders = {
  render: () => {
    return tableMultipleHeadersHTML;
  },

  name: "Table scroll with multiple headers",
};

export const TableIrregularHeaders = {
  render: () => {
    return tableIrregularHeadersHTML;
  },

  name: "Table scroll with irregular headers",
};

export const TableMultiLevelHeaders = {
  render: () => {
    return tableMultiLevelHeadersHTML;
  },

  name: "Table scroll with multi-level headers",
};

export const TableCard = {
  render: () => {
    return tableCardHTML;
  },

  name: "Table card",
};
