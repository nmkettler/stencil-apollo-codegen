import { r as registerInstance, d as createEvent, c as getElement } from './core-88fb431b.js';
import { A as ApolloProviderConsumer } from './apollo-client-state-897de1b1.js';

const ApolloQueryComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.readyEventEmitter = createEvent(this, "ready", 7);
        this.resultEventEmitter = createEvent(this, "result", 7);
    }
    componentWillLoad() {
        this.startSubscription();
    }
    onPropsChange() {
        this.stopSubscription();
        this.startSubscription();
    }
    componentDidUnload() {
        this.stopSubscription();
    }
    getResult() {
        return {
            data: this.originalResult && this.originalResult.data,
            loading: this.originalResult ? this.originalResult.loading : true,
            error: {
                graphQLErrors: this.originalResult && this.originalResult.errors,
                networkError: undefined,
                message: this.originalResult && this.originalResult.errors && this.originalResult.errors[0] && this.originalResult.errors[0].message,
                name: this.originalResult && this.originalResult.errors && this.originalResult.errors[0] && this.originalResult.errors[0].name,
                extraInfo: this.originalResult && this.originalResult.errors && this.originalResult.errors[0] && this.originalResult.errors[0].originalError,
            },
            variables: this.variables,
            networkStatus: this.originalResult && this.originalResult.networkStatus,
            refetch: this.observable && this.observable.refetch.bind(this.observable),
            fetchMore: this.observable && this.observable.fetchMore.bind(this.observable),
            startPolling: this.observable && this.observable.startPolling.bind(this.observable),
            stopPolling: this.observable && this.observable.stopPolling.bind(this.observable),
            subscribeToMore: this.observable && this.observable.subscribeToMore.bind(this.observable),
            updateQuery: this.observable && this.observable.updateQuery.bind(this.observable),
            client: this.client,
        };
    }
    startSubscription() {
        if (this.client) {
            const observable = this.client.watchQuery(Object.assign({ query: this.query, variables: this.variables }, this.options));
            this._subscription = observable.subscribe(originalResult => {
                this.originalResult = originalResult;
                this.resultEventEmitter.emit(this.getResult());
            }, error => {
                this.error = error;
                this.resultEventEmitter.emit(this.getResult());
            });
            this.readyEventEmitter.emit(this.getResult());
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
        return this.renderer && this.renderer(this.getResult());
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "client": ["onPropsChange"],
        "query": ["onPropsChange"],
        "variables": ["onPropsChange"],
        "renderer": ["onPropsChange"],
        "options": ["onPropsChange"]
    }; }
};
ApolloProviderConsumer.injectProps(ApolloQueryComponent, ['client']);

export { ApolloQueryComponent as apollo_query };
