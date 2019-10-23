import { h, Component, Prop } from '@stencil/core';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import logger from '../../../services/logger';
// import { ApolloProvider, Query, Mutation } from 'stencil-apollo';

const client = new ApolloClient({
  // uri: 'https://graphql-voter-app.herokuapp.com/'
  uri: 'http://localhost:5000/graphql'
});

@Component({
  tag: 'list-all-agents',
  styleUrl: 'list-all-agents.css'
})
export class MyComponentWithCodegen {
  @Prop() first: string;
  @Prop() last: string;
  
  renderUpvoteButton(postId: number) {
    return (
      <apollo-upvote-post
        renderer={upvotePost => <button onClick={() => upvotePost({ variables: { postId } })}>Upvote</button>}
      />
    );
  }

  changeStatus (newAgentName: string) {
    console.log('burrito')
    return (
      <apollo-update-agent
        renderer={updateAgent => <button onClick={() => updateAgent({ variables: {  newAgentName } })}>Upvote</button>}
      />
    )
  }

  renderTestButton() {
    return (
      <div>
        <button onClick={() => this.changeStatus('Noah')}>Change Agent Status</button>
      </div>
    )
  }

  render() {
    return (
      <apollo-provider client={client}>
        {this.renderTestButton()}
        <apollo-all-agents
          renderer={({ data, loading }) => {
            console.log('taco', data)
            logger.info(`Getting data: ${data}`);
            if (loading) {
              return 'Loading...';
            }
            return (
              <ul>
                {data.agents.map(person => (
                  <li>
                    {person.name} is online {`${person.agent_online && true}`}
                    {/* {this.renderUpvoteButton(post.id)} */}
                  </li>
                ))}
              </ul>
            );
          }}/>
      </apollo-provider>
    );
  }
}

// return (
//   <apollo-provider client={client}>
//     {this.renderTestButton()}
//     <apollo-all-posts
//       renderer={({ data, loading }) => {
//         console.log('taco', data)
//         if (loading) {
//           return 'Loading...';
//         }
//         return (
//           <ul>
//             {data.posts.map(post => (
//               <li>
//                 {post.title} by {post.author.firstName} {post.author.lastName} ({post.votes} votes){' '}
//                 {this.renderUpvoteButton(post.id)}
//               </li>
//             ))}
//           </ul>
//         );
//       }} />
//   </apollo-provider>
// );