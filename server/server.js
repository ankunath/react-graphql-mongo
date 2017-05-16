
import express from 'express';
import {
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { schema } from './src/schema';
const Mongoose = require('mongoose');
const PORT = 4000;
const server = express();
Mongoose.Promise = global.Promise;
Mongoose.connect('mongodb://localhost:27017/apollo', (err) => {
  if (err) {
    return err;
  }
  return true;
});

server.use('*', cors({ origin: 'http://localhost:3000' }));

server.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}));

server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

server.listen(PORT, () => 
  console.log(`GraphQL Server is now running on http://localhost:${PORT}`)
);
