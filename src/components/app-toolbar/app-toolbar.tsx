import { Component, ComponentInterface, Host, h, State } from '@stencil/core';

@Component({
  tag: 'app-toolbar',
  styleUrl: 'app-toolbar.css',
  shadow: true,
})
export class AppToolbar implements ComponentInterface {
  @State() expanded = false;
  toggleSidebar() {
    this.expanded = !this.expanded;
  }

  render() {
    return (
      <Host>
        <nav>
          <h1>Hoshi</h1>
          <ho-button onClick={() => this.toggleSidebar()}>more</ho-button>
        </nav>
        <aside class="sidebar" aria-expanded={this.expanded}>
          <ho-game-list></ho-game-list>
        </aside>
      </Host>

    );
  }

}
