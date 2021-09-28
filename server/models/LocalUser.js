const mongoose = require('mongoose');

const { Schema } = mongoose;

// define user Schema
const mongoSchema = new Schema({
  email: {
    type: String,
    unique: true,
    sparse: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  given_name: {
    type: String,
    unique: false,
    default: '',
  },
  family_name: {
    type: String,
    unique: false,
    default: '',
  },
  nickname: {
    type: String,
    unique: false,
    default: '',
  },
  trainingSessionOrder: {
    type: Array,
    unique: false,
    default: [],
  },
  nextSession: {
    type: String,
    unique: false,
    default: '',
  },
  sub: {
    type: String,
    unique: true,
  },
  updated_at: {
    type: String,
    unique: false,
  },
});

class LocalUserClass {
  static publicFields() {
    return ['id', 'displayName', 'email', 'isAdmin'];
  }

  static async findEmail({ uid }) {
    try {
      const email = await this.findOne({ _id: uid }).select('email');
      return email;
    } catch (e) {
      return e;
    }
  }

  static async findUserByEmail(email) {
    try {
      const user = await this.findOne(email);
      return user;
    } catch (e) {
      return e;
    }
  }

  static async deleteLocalUser(email) {
    // if no user exists... return something expressive
    // if user found and deleted, return something else expressive
    try {
      const user = await this.findUserByEmail(email);
      if (user) {
        const deleted = await this.findOneAndDelete(email);
        return deleted;
      }
      return 0;
    } catch (e) {
      return e;
    }
  }

  static async updateNextSession(uid, nextSession) {
    try {
      const updatedUser = await this.findOneAndUpdate({ _id: uid }, { nextSession }, { new: true });
      return updatedUser;
    } catch (e) {
      return e;
    }
  }

  static async updateTrainingSessionOrder(uid, trainingSessionOrder) {
    try {
      const updatedUser = await this.findOneAndUpdate(
        { _id: uid },
        { trainingSessionOrder, nextSession: trainingSessionOrder[0] },
      );
      return updatedUser;
    } catch (e) {
      return e;
    }
  }

  static async loginLocal({ user }) {
    const { sub } = user;
    try {
      const userExists = await this.findOne({ sub });
      // if user does not exist, add user to local userDB,
      if (userExists === null) {
        const newUser = await this.create(user);
        return newUser;
      }
      if (userExists != null && userExists.updated_at === user.updated_at) {
        return userExists;
      }
      // update user
      await this.updateOne({ _id: userExists._id }, { user });
      return userExists;
    } catch (e) {
      return e;
    }
  }
}

mongoSchema.loadClass(LocalUserClass);

module.exports = mongoose.models.LocalUser || mongoose.model('LocalUser', mongoSchema);
