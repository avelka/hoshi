import { Component, ComponentInterface, h, Prop, State, Watch } from '@stencil/core';
import { RouterHistory, MatchResults, LocationSegments } from '@stencil/router';

@Component({
  tag: 'app-game',
  styleUrl: 'app-game.css',
  shadow: true,
})
export class AppGame implements ComponentInterface {
  @Prop() history: RouterHistory;
  @Prop() match: MatchResults;
  @Prop() location: LocationSegments;
  @State() game: any = this.getGame(this.match.params.key);

  getGame(key: string) {
    return JSON.parse(localStorage.getItem(atob(key)));
  }

  @Watch('match')
  routeChanged(match: MatchResults) {
    this.game = this.getGame(match.params.key);
  }

  render() {
    console.log("game view render");
    return (
      <div class='app-home'>
      { !this.game
          ? <p>"nothing open, fetch the list or drop a file"</p>
          :  <ho-game-active game={this.game}></ho-game-active>}
      </div>
    );
  }

}
