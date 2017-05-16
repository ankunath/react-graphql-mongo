const Mongoose = require('mongoose');

const channelSchema = Mongoose.Schema({
  name: String
});

const channel = Mongoose.model('channel', channelSchema);

module.exports = channel;