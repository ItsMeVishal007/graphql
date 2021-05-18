// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import ApollerServer, { ApolloServer, gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Query{
    sayHello: String
}
`;

const resolvers = {
  Query: {
    sayHello(_parent, _args, _context) {
      return 'Hello world';
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const handler = apolloServer.createHandler({ path: "/api/graphql" })

export const config = {
  api: {
    bodyParser: false
  }
}

export default handler;