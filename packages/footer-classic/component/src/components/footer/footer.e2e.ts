import { newE2EPage } from '@stencil/core/testing';

describe('uq-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uq-footer></uq-footer>');

    const element = await page.find('uq-footer');
    expect(element).toHaveClass('hydrated');
  });
});
