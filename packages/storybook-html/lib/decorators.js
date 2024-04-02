export const layoutDecorator = (Story) => `
<div class="uqds-layout-preview">
  ${Story()}
</div>
`;

export const cardDecorator = (Story) => `
<div class="uqds-card-preview">
  ${Story()}
</div>
`;
