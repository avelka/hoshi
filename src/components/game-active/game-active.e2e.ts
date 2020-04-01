import { newE2EPage } from '@stencil/core/testing';

describe('game-active', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<game-active></game-active>');

    const element = await page.find('game-active');
    expect(element).toHaveClass('hydrated');
  });
});
