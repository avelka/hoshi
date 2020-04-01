import { newE2EPage } from '@stencil/core/testing';

describe('ho-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ho-button></ho-button>');

    const element = await page.find('ho-button');
    expect(element).toHaveClass('hydrated');
  });
});
