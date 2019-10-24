const axios = require('axios');

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema
} = require('graphql');

// Agent Type
let age = 2;
const AgentType = new GraphQLObjectType({
  name: 'Agents',
  fields: () => ({
    name: { type: GraphQLString },
    id: { type: GraphQLInt },
    age: {
      type: GraphQLInt,
      resolve: () => age
    },
    agent_online: { type: GraphQLBoolean },
    newAgentName: { type: GraphQLString }
  })
});

const AgentMutations = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    newAgentName: {
      type: GraphQLString,
      resolve: () => 'Noah Mutated'
    },
    incrementAge: {
      type: GraphQLInt,
      resolve: () => ++age
    }
  })
});


// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    agents: {
      type: new GraphQLList(AgentType),
      resolve(parent, args) {
        return axios
          .get('./dummy_api.json',
            { proxy: { host: '127.0.0.1', port: 5000 } })
          .then((res => res.data))
          .catch(e => e.data);
      }
    },
  }
});



module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: AgentMutations
});
