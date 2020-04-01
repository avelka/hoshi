import { newSpecPage } from '@stencil/core/testing';
import { HoButton } from './ho-button';

describe('ho-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HoButton],
      html: `<ho-button></ho-button>`,
    });
    expect(page.root).toEqualHtml(`
      <ho-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ho-button>
    `);
  });
});
