import { newE2EPage } from '@stencil/core/testing';

describe('ho-game-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ho-game-card></ho-game-card>');

    const element = await page.find('ho-game-card');
    expect(element).toHaveClass('hydrated');
  });
});
