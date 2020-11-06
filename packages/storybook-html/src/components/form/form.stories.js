// import styles
import './style.scss';

// import HTML template strings
import allHTML from './all.html';
import textAreaHTML from './text-area.html';
import selectHTML from './select.html';

import docs from './form.docs.mdx';

export default {
  title: 'Components/Form',
  parameters: {
    docs: {
      page: docs
    },
    previewTabs: {
      canvas: {
        hidden: false
      }
    }
  }
};

export const inputText = () => `
  <table>
    <thead>
      <tr>
        <th>Default</th>
        <th>Read-only</th>
        <th>Disabled</th>
      <tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <label>Text input</label>
          <input type="text" />
        </td>
        <td>
          <label>Text input <input type="text" readonly /></label>
        </td>
        <td>
          <label>Text input</label>
          <input type="text" disabled />
        </td>
      </tr>
    </tbody>
  </table>
`;

inputText.storyName = "Text input";

export const textArea = () => {
  return textAreaHTML;
};

export const select = () => {
  return selectHTML;
};

export const kitchenSink = () => {
  return allHTML;
};
