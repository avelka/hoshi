import { newSpecPage } from '@stencil/core/testing';
import { AppGame } from './app-game';

describe('app-game', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppGame],
      html: `<app-game></app-game>`,
    });
    expect(page.root).toEqualHtml(`
      <app-game>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-game>
    `);
  });
});
