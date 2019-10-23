import * as Types from '../../types';

import gql from 'graphql-tag';
import 'stencil-apollo';
import { Component, Prop, h } from '@stencil/core';


    declare global { 
      export type UpvotePostMutationVariables = {
  postId: Types.Scalars['Int']
};


export type UpvotePostMutation = (
  { __typename?: 'Mutation' }
  & { upvotePost: Types.Maybe<(
    { __typename?: 'Post' }
    & Pick<Types.Post, 'id' | 'votes'>
  )> }
);
 
    }
          


 const UpvotePostDocument = gql`
    mutation upvotePost($id: Int!) {
  upvotePost(id: $id) {
    id
    votes
  }
}
    `;
    
const CHANGE_AGENT_STATUS = gql`
#   mutation AddTodo($id: Int!, $name: String!) {
#     upvotePost(id: $id, name: $name) {
#       id
#       name
#     }
#   }
    mutation updateAgent { newAgentName }
`;
@Component({
    tag: 'apollo-upvote-post'
})
// export class UpvotePostComponent {
//     @Prop() renderer: import('stencil-apollo').MutationRenderer<UpvotePostMutation, UpvotePostMutationVariables>;
//     render() {
//         return <apollo-mutation mutation={ UpvotePostDocument } renderer={ this.renderer } />;
//     }
// }
export class UpvotePostComponent {
    @Prop() renderer: import('stencil-apollo').MutationRenderer<UpvotePostMutation, UpvotePostMutationVariables>;
    render() {
        return <apollo-mutation mutation={CHANGE_AGENT_STATUS} renderer={this.renderer} />;
    }
}
      