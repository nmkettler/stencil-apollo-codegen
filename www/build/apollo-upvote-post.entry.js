import { r as registerInstance, h } from './core-88fb431b.js';
import { g as gql } from './index-974859af.js';

const UpvotePostDocument = gql `
    mutation upvotePost($id: Int!) {
  upvotePost(id: $id) {
    id
    votes
  }
}
    `;
const CHANGE_AGENT_STATUS = gql `
#   mutation AddTodo($id: Int!, $name: String!) {
#     upvotePost(id: $id, name: $name) {
#       id
#       name
#     }
#   }
    mutation updateAgent { newAgentName }
`;
const UpvotePostComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h("apollo-mutation", { mutation: CHANGE_AGENT_STATUS, renderer: this.renderer });
    }
};

export { UpvotePostComponent as apollo_upvote_post };
