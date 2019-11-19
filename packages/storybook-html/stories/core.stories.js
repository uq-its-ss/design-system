import '@uq-uidf/core/src/scss/_component.scss';

export default {
  title: 'Core',
};

export const typography = () => {
  const container = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.innerText = 'Heading 1';
  const h2 = document.createElement('h2');
  h2.innerText = 'Heading 2';
  const h3 = document.createElement('h3');
  h3.innerText = 'Heading 3';
  container.appendChild(h1);
  container.appendChild(h2);
  container.appendChild(h3);
  return container;
};
