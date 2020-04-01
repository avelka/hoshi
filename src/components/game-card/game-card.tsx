import { Component, Prop, h} from '@stencil/core';

@Component({
  tag: 'ho-game-card',
  styleUrl: 'game-card.css',
  shadow: true
})
export class GameCard {
  @Prop() game: { name: string, data: string, key: string };

  render() {
    return (
      <stencil-route-link url={`/game/${btoa(this.game.key)}`} exact={true}>
      <article>
        <header>
          {this.game.name}
        </header>
        <gc-goban class="goban-viewer" sgf={this.game.data}></gc-goban>
      </article>
      </stencil-route-link>
    );
  }

}
