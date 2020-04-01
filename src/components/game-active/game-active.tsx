import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'ho-game-active',
  styleUrl: 'game-active.css',
  shadow: true,
})
export class GameActive implements ComponentInterface {
  @Prop() game: any;
  render() {
    console.log(this.game);
    return (
      <div>
        {this.game.data && this.game.data.length && <gc-goban class="goban-viewer" currentPosition={0} sgf={this.game.data}></gc-goban>}
      </div>

    );
  }

}
