const channelModel = require('./model');
let nextId = 3;

export const resolvers = {
  Query: {
    channels: () => {
      return channelModel.find({});
    },
  },
  Mutation: {
    addChannel: (root, args) => {
      const newChannel = { id: nextId++, name: args.name };
      const ch = new channelModel(newChannel);
      ch.save((error, data) => {
      })
    },
  },
};
