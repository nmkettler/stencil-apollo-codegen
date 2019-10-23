import { r as registerInstance, c as getElement } from './core-88fb431b.js';
import { A as ApolloProviderConsumer } from './apollo-client-state-897de1b1.js';

const ApolloMutationComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return this.renderer(this.client);
    }
    get el() { return getElement(this); }
};
ApolloProviderConsumer.injectProps(ApolloMutationComponent, ['client']);

export { ApolloMutationComponent as apollo_consumer };
