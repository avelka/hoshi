import { newSpecPage } from '@stencil/core/testing';
import { AppToolbar } from './app-toolbar';

describe('app-toolbar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppToolbar],
      html: `<app-toolbar></app-toolbar>`,
    });
    expect(page.root).toEqualHtml(`
      <app-toolbar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-toolbar>
    `);
  });
});
