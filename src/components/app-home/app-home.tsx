import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  @State() game: any;

  @Listen('openGame', { target: "window", capture: true })
  openGame(event: CustomEvent) {
    this.game = null;
    this.game = event.detail;
    console.log(this.game.name);
  }

  render() {
    return (
      <div class='app-home'>
        { !this.game
          ? <p>"nothing open, fetch the list or drop a file"</p>
          :  <ho-game-active game={this.game}></ho-game-active>}
      </div>
    );
  }
}
