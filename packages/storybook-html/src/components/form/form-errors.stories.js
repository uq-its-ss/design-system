import './form.scss';
import kitchenSinkHTML from './form-errors-kitchen-sink.html';

export default {
  title: 'Components/Form/Errors',
  parameters: {
    previewTabs: {
      canvas: {hidden: false}
    }
  }
};

export const kitchenSink = () => {
  // See other stories for markup examples
  return kitchenSinkHTML;
};

kitchenSink.parameters = {
  docs: {
    page: null
  }
};
