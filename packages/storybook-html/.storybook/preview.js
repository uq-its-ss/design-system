import "./preview.scss";

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
     docs: {
       toc: true, // 👈 Enables the table of contents
     },
     actions: { argTypesRegex: "^on[A-Z].*" },
     controls: {
       matchers: {
         color: /(background|color)$/i,
         date: /Date$/i,
       },
     },
   },
 };
 export default preview;