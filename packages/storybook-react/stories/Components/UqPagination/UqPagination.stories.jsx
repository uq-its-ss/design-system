import { useState } from "react";
import { UqPagination as Component } from "@uqds/react/src/jsx/main";

export default {
  title: "Components/UqPagination",
  component: Component,
  argTypes: {
    As: {
      control: "select",
      options: ["button", "a"],
    },
  },
  args: {
    As: "button",
    totalResults: 125,
    resultsPerPage: 10,
  },
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(1);
    const onClick = (event) => {
      const value = event.currentTarget.value;
      setCurrentPage(Number(value));
    };
    return <Component currentPage={currentPage} onClick={onClick} {...args} />;
  },
};

export const UqPagination = {};
