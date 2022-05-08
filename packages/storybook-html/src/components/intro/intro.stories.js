import { useEffect } from "@storybook/client-api";

// import scripts
import header from "@uqds/header-legacy/src/js/header";
import siteHeaderNav from "@uqds/site-header/src/js/site-header-navigation";
import accordion from "@uqds/accordion/src/js/accordion";

// import HTML template strings
import kitchenSinkHTML from "./kitchen-sink.html";

export default {
  title: "Gallery & Examples/Kitchen sink",
  parameters: {
    layout: "fullscreen",
    viewMode: "story",
    previewTabs: {
      "storybook/docs/panel": { hidden: true },
      canvas: { hidden: false },
    },
  },
};

export const kitchenSink = () => {
  useEffect(() => {
    new header();
    var navelement = document.getElementById("jsNav");
    new siteHeaderNav(navelement, "uq-site-header__navigation");
    new accordion();
  });
  return kitchenSinkHTML;
};

kitchenSink.storyName = "Kitchen sink";

kitchenSink.parameters = {
  docs: {
    page: null,
  },
};
