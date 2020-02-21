import { newE2EPage } from '@stencil/core/testing';

describe('uq-global-menu-classic', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<uq-global-menu-classic></uq-global-menu-classic>');

    const element = await page.find('uq-global-menu-classic');
    expect(element).toHaveClass('hydrated');
  });
});
