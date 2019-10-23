import { h, Component, Prop } from '@stencil/core';
// import ApolloClient from 'apollo-boost';

@Component({
  tag: 'list-all-ages'
})

export class AllAgesComponent {
  @Prop() testProp: string;
  render () {
    return (
      <div>{`Hello ${this.testProp}`}</div>
    )
  }
}