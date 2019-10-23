import { h, Component, Prop } from '@stencil/core';
import ApolloClient from 'apollo-boost';
// import gql from 'graphql-tag';
// import logger from '../../../services/logger';
// import { ApolloProvider, Query, Mutation } from 'stencil-apollo';

const client = new ApolloClient({
  // uri: 'https://graphql-voter-app.herokuapp.com/'
  uri: 'http://localhost:5000/graphql'
});

@Component({
  tag: 'list-all-agents',
  styleUrl: 'list-all-agents.css'
})
export class ListAllAgentsComponent {
  @Prop() first: string;
  @Prop() last: string;

  renderIncrementButton() {
    return (
      <apollo-increment-age
        renderer={incrementAge => <button onClick={() => incrementAge({ variables: { incrementAge } })}>Increment Age</button>}
      />
    )
  }

  render() {
    return (
      <apollo-provider client={client}>
        <list-all-ages testProp='this is a test prop' />
        <apollo-all-agents
          renderer={({ data, loading }) => {
            console.log('taco', data)
            // logger.info(`Getting data: ${data}`);
            if (loading) {
              return 'Loading...';
            }
            return (
              <ul>
                {data.agents.map(person => (
                  <li>
                    <p>{person.name} is online {`${person.agent_online && true}`}</p>
                    <p>{person.name} is {person.age}</p>
                  </li>
                ))}
              </ul>
            );
          }}/>
        {this.renderIncrementButton()}
      </apollo-provider>
    );
  }
}
