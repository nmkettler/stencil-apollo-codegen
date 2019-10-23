import * as Types from '../../types';

import gql from 'graphql-tag';
import 'stencil-apollo';
import { Component, Prop, h } from '@stencil/core';


    declare global { 
      export type AllAgesQueryVariables = {};


export type AllAgesQuery = (
  { __typename?: 'RootQueryType' }
  & { agents: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'Launch' }
    & Pick<Types.Launch, 'age'>
  )>>> }
);
 
    }
          


 const AllAgesDocument = gql`
    query AllAges {
  agents {
    age
  }
}
    `;

@Component({
    tag: 'apollo-all-ages'
})
export class AllAgesComponent {
    @Prop() renderer: import('stencil-apollo').QueryRenderer<AllAgesQuery, AllAgesQueryVariables>;
    render() {
        return <apollo-query query={ AllAgesDocument } renderer={ this.renderer } />;
    }
}
      