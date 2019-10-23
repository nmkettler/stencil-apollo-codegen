import { r as registerInstance, d as createEvent, c as getElement } from './core-88fb431b.js';
import { A as ApolloProviderConsumer } from './apollo-client-state-897de1b1.js';

const ApolloMutationComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.readyEventEmitter = createEvent(this, "ready", 7);
    }
    componentWillLoad() {
        this.passMutation();
    }
    onPropsChange() {
        this.passMutation();
    }
    async passMutation() {
        if (this.client) {
            this.mutationFn = args => this.client.mutate(Object.assign({ mutation: this.mutation, variables: this.variables }, this.options, args));
            this.readyEventEmitter.emit(this.mutationFn);
        }
        else {
            throw new Error('You should wrap your parent component with apollo-provider custom element or ApolloProvider functional component');
        }
    }
    render() {
        return this.renderer && this.renderer(this.mutationFn);
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "client": ["onPropsChange"],
        "mutation": ["onPropsChange"],
        "variables": ["onPropsChange"],
        "renderer": ["onPropsChange"],
        "options": ["onPropsChange"]
    }; }
};
ApolloProviderConsumer.injectProps(ApolloMutationComponent, ['client']);

export { ApolloMutationComponent as apollo_mutation };
