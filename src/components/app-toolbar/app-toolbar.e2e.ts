import { newE2EPage } from '@stencil/core/testing';

describe('app-toolbar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-toolbar></app-toolbar>');

    const element = await page.find('app-toolbar');
    expect(element).toHaveClass('hydrated');
  });
});
