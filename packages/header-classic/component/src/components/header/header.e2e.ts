import { newE2EPage } from '@stencil/core/testing';

describe('uq-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uq-header></uq-header>');

    const element = await page.find('uq-header');
    expect(element).toHaveClass('hydrated');
  });
});
