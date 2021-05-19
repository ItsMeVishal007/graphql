import { ApolloServer, gql } from 'apollo-server-express';

export const typeDefs = gql`
type Query{
  hello : String
}

type Cat{
  id : ID!
  name : String!
  age : String!
}

type Mutation{
  createCat(name : String! , age : String!) : Cat!
}
`;