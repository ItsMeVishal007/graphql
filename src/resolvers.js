import { ApolloServer, gql } from 'apollo-server-express';
import { Cat } from './models/models';

export const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
  Mutation: {
    createCat: async (_parent, { name , age }) => {
      const kitty = new Cat({ name , age });
      await kitty.save();
      console.log('meow');
      return kitty;
    }
  }
};
