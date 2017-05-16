const channelModel = require('./model');

class channel {
  constructor() {
    this.findPresident = (name) => {
      const person = channelModel.findOne({}, (error, data) => {
        return data;
      });
      return person;
    };
  }
}

module.exports = { channel };
