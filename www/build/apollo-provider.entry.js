import { r as registerInstance, h } from './core-88fb431b.js';
import { A as ApolloProviderConsumer } from './apollo-client-state-897de1b1.js';

const Declarations = "DECLARATIONS";

const Provider = ApolloProviderConsumer.Provider;
const ApolloProviderComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.declarations = Declarations;
    }
    render() {
        return (h(Provider, { state: { client: this.client } }, h("slot", null)));
    }
};

export { ApolloProviderComponent as apollo_provider };
