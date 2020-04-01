import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'ho-button',
  styleUrl: 'ho-button.css',
  shadow: true,
})
export class HoButton implements ComponentInterface {
  @Prop() onClick: Function;

  render() {
    return (
      <button onClick={ev => this.onClick(ev)}>
        <slot></slot>
      </button>
    );
  }

}
