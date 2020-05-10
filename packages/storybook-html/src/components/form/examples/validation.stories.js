import { useEffect } from '@storybook/client-api';
import docs from './validation.docs.mdx';

import passwordResetInit from './password-reset.es6';
import passwordResetHTML from './password-reset.html';

// import styles
import './password-reset.scss';

export default {
  title: 'Forms/Form errors/Working examples',
  parameters: {
    docs: {
      page: docs
    }
  }
};

export const passwordForm = () => {
  useEffect(() => {
    var init = new passwordResetInit();
  });
  return passwordResetHTML;
};
