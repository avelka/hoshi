import { newSpecPage } from '@stencil/core/testing';
import { GameActive } from './game-active';

describe('game-active', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GameActive],
      html: `<game-active></game-active>`,
    });
    expect(page.root).toEqualHtml(`
      <game-active>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </game-active>
    `);
  });
});
