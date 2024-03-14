// import styles
import "./button.scss";

export const createButton = ({
    style = 'primart',
    label,
    size = 'default',
    expand = false,
  }) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.innerText = label;
  
    const mode = expand? 'uq-button--expand' : '';
    btn.className = ['uq-button', `${style}`, `${size}`, mode].join(' ');

  
    return btn;
  };