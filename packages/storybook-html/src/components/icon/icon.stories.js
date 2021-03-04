import iconCatalog from '@uqds/icon';
import docs from './icon.docs.mdx';
import './icon.scss';

export default {
  title: 'Components/Icon',
  parameters: {
    docs: {
      page: docs
    },
    previewTabs: {
      canvas: {hidden: false}
    }
  }
};

export const icon = () => {
  return iconCatalog.reduce((acc, cur) => {
    return acc + `<span class="uq-icon uq-icon--${cur.category}--${cur.name}"></span>\n`;
  }, '');
};
