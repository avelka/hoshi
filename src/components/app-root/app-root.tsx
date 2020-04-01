import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

  render() {
    return (
      <div class="app-root">
        {/* <header>
          <h1>Hoshi</h1>
        </header> */}
        <app-toolbar></app-toolbar>
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/game/:key' component='app-game' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
