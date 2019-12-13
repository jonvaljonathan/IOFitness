const mongoose = require('mongoose');
const User = require('./User.js');

const { Schema } = mongoose;

// define user Schema
const mongoSchema = new Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  uid: {
    type: String,
    required: true,
    unique: true,
  },
});

class RememberMeTokenClass {
  static async findById(uid) {
    try {
      const user = await User.findOne({ id: uid });
      return user.id;
    } catch (e) {
      console.log(`RememberMeToken.js Error in saveToken ${e}`);
      return e;
    }
  }

  static async saveToken(token, uid) {
    try {
      console.log(`Save RememberMeToken.js `);
      console.log(token);
      console.log(uid);
      const rememberMeToken = await this.create({ token, uid });
      return rememberMeToken.token;
    } catch (e) {
      console.log(`RememberMeToken.js Error in saveToken ${e}`);
      return e;
    }
  }

  static async consumeToken(token, fn) {
    try {
      console.log('CONSUMING TOKEN = RememberMeToken.js');
      const rememberMeToken = await this.findOne({ token });
      if (rememberMeToken) {
        const { uid } = rememberMeToken;
        console.log(`Found token ${rememberMeToken}`);
        await this.deleteOne({ token });
        return fn(null, uid);
      }
      return fn(null, null);
    } catch (e) {
      console.log(`ConsumeToken error ${e}`);
      return e;
    }
  }
}

mongoSchema.loadClass(RememberMeTokenClass);

const RememberMeToken = mongoose.model('RememberMeToken', mongoSchema);

module.exports = RememberMeToken;
