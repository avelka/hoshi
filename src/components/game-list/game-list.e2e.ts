import { newE2EPage } from '@stencil/core/testing';

describe('ho-game-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ho-game-list></ho-game-list>');

    const element = await page.find('ho-game-list');
    expect(element).toHaveClass('hydrated');
  });
});
