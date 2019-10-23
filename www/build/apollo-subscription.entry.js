import { r as registerInstance, d as createEvent, c as getElement } from './core-88fb431b.js';
import { A as ApolloProviderConsumer } from './apollo-client-state-897de1b1.js';

const ApolloSubscriptionComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.readyEventEmitter = createEvent(this, "ready", 7);
        this.resultEventEmitter = createEvent(this, "result", 7);
    }
    componentWillLoad() {
        this.result = {
            data: undefined,
            errors: [],
            loading: true,
            networkStatus: undefined,
            stale: undefined
        };
        this.startSubscription();
    }
    onPropsChange() {
        this.stopSubscription();
        this.startSubscription();
    }
    componentDidUnload() {
        this.stopSubscription();
    }
    startSubscription() {
        if (this.client) {
            this._subscription = this.client.subscribe(Object.assign({ query: this.subscription, variables: this.variables }, this.options)).subscribe(result => {
                this.result = result;
                this.resultEventEmitter.emit(this.result);
            });
            this.readyEventEmitter.emit(this.result);
        }
        else {
            throw new Error('You should wrap your parent component with apollo-provider custom element or ApolloProvider functional component');
        }
    }
    stopSubscription() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
    render() {
        return this.renderer && this.renderer(this.result);
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "client": ["onPropsChange"],
        "subscription": ["onPropsChange"],
        "variables": ["onPropsChange"],
        "renderer": ["onPropsChange"],
        "options": ["onPropsChange"]
    }; }
};
ApolloProviderConsumer.injectProps(ApolloSubscriptionComponent, ['client']);

export { ApolloSubscriptionComponent as apollo_subscription };
