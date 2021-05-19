import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';
import mongoose from 'mongoose';



async function startApolloServer() {
  const app = express();
  
  console.log(typeDefs , resolvers)
  
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();
  
  server.applyMiddleware({ app });
  
  app.use((req, res) => {
    res.status(200); 
    res.send('Hello!');
    res.end();
  });
  
  await mongoose.connect('mongodb://localhost:27017/test2', {useNewUrlParser: true, useUnifiedTopology: true});
  
  await new Promise(resolve => app.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
}

startApolloServer();