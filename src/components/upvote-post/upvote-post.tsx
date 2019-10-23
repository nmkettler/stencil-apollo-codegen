import * as Types from '../../types';

import gql from 'graphql-tag';
import 'stencil-apollo';
import { Component, Prop, h } from '@stencil/core';


    declare global { 
      export type UpdateAgentMutationVariables = {};


export type UpdateAgentMutation = (
  { __typename?: 'Mutation' }
  & Pick<Types.Mutation, 'newAgentName'>
);
 
    }
          


 const UpdateAgentDocument = gql`
    mutation updateAgent {
  newAgentName
}
    `;

@Component({
    tag: 'apollo-update-agent'
})
export class UpdateAgentComponent {
    @Prop() renderer: import('stencil-apollo').MutationRenderer<UpdateAgentMutation, UpdateAgentMutationVariables>;
    render() {
        return <apollo-mutation mutation={ UpdateAgentDocument } renderer={ this.renderer } />;
    }
}
      