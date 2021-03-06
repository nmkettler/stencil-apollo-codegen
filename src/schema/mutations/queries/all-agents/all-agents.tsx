import * as Types from '../../../../types';

import gql from 'graphql-tag';
import 'stencil-apollo';
import { Component, Prop, h } from '@stencil/core';


    declare global { 
      export type AllAgentsQueryVariables = {};


export type AllAgentsQuery = (
  { __typename?: 'RootQueryType' }
  & { agents: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'Agents' }
    & Pick<Types.Agents, 'name' | 'agent_online' | 'id' | 'newAgentName' | 'age'>
  )>>> }
);
 
    }
          


 const AllAgentsDocument = gql`
    query AllAgents {
  agents {
    name
    agent_online
    id
    newAgentName
    age
  }
}
    `;

@Component({
    tag: 'apollo-all-agents'
})
export class AllAgentsComponent {
    @Prop() renderer: import('stencil-apollo').QueryRenderer<AllAgentsQuery, AllAgentsQueryVariables>;
    render() {
        return <apollo-query query={ AllAgentsDocument } renderer={ this.renderer } />;
    }
}
      