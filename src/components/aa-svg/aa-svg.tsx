import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'aa-svg',
  styleUrl: 'aa-svg.css',
  shadow: true,
})
export class AASvgComponent {
  // Indicate that name should be a public property on the component
  @Prop() name: string;

  render() {
    return <div>World! I'm {this.name}</div>;
  }
}
