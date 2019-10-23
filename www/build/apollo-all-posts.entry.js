import { r as registerInstance, h } from './core-88fb431b.js';
import { g as gql } from './index-974859af.js';

const AGENT_QUERY = gql `
  query AgentQuery {
    agents {
        name,
        agent_online,
        id,
        newAgentName
    }
  }
`;
const AllPostsComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h("apollo-query", { query: AGENT_QUERY, renderer: this.renderer });
    }
};

export { AllPostsComponent as apollo_all_posts };
