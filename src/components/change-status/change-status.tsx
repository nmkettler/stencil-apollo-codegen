import * as Types from '../../types';

import gql from 'graphql-tag';
import 'stencil-apollo';
import { Component, Prop, h } from '@stencil/core';


    declare global { 
      export type IncrementAgeMutationVariables = {};


export type IncrementAgeMutation = (
  { __typename?: 'Mutation' }
  & Pick<Types.Mutation, 'incrementAge'>
);
 
    }
          


 const IncrementAgeDocument = gql`
    mutation incrementAge {
  incrementAge
}
    `;

@Component({
    tag: 'apollo-increment-age'
})
export class IncrementAgeComponent {
    @Prop() renderer: import('stencil-apollo').MutationRenderer<IncrementAgeMutation, IncrementAgeMutationVariables>;
    render() {
        return <apollo-mutation mutation={ IncrementAgeDocument } renderer={ this.renderer } />;
    }
}
      