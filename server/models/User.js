const mongoose = require('mongoose');
const _ = require('lodash');
const generateSlug = require('../utils/slugify');
const sendEmail = require('../aws');
const { getEmailTemplate } = require('./EmailTemplate');

const logger = require('../logs');

const { Schema } = mongoose;

// define user Schema
const mongoSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: false,
    unique: false,
  },
  firstName: {
    type: String,
    required: false,
    unique: false,
  },
  lastName: {
    type: String,
    required: false,
    unique: false,
  },
  googleId: {
    type: String,
    required: false,
    unique: true,
    sparse: true,
  },
  googleToken: {
    access_token: String,
    refresh_token: String,
    token_type: String,
    expiry_date: Number,
  },

  slug: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  displayName: String,
  avatarUrl: String,
  github: {
    isGithubConnected: {
      type: Boolean,
      default: false,
    },
    githubAccessToken: {
      type: String,
    },
  },
  purchasedBookIds: [String],
});

class UserClass {
  static publicFields() {
    return [
      'id',
      'firstName',
      'lastName',
      'displayName',
      'email',
      'avatarUrl',
      'slug',
      'isAdmin',
      'isGithubConnected',
      'purchasedBookIds',
    ];
  }

  static async signInOrSignUp({
    email,
    password,
    firstName,
    lastName,
    googleId,
    googleToken,
    displayName,
    avatarUrl,
  }) {
    // check if user exists with email
    const user = await this.findOne({ email }).select(UserClass.publicFields().join(' '));
    if (user) {
      if (user.googleId) {
        const modifier = {};
        // check if google provided new tokens
        if (googleToken.accessToken) {
          modifier.access_token = googleToken.accessToken;
        }

        if (googleToken.refreshToken) {
          modifier.refresh_token = googleToken.refreshToken;
        }
        // if google did not provide tokens; leave it the same
        if (_.isEmpty(modifier)) {
          return user;
        }
        // if google did provide the tokens, update the User document
        await this.updateOne({ googleId }, { $set: modifier });

        return user;
      }
    }
    if (user) {
      return user;
    }
    // if user does not exist, generate a slug and add the new user

    if (!displayName) {
      // eslint-disable-next-line no-param-reassign
      displayName = firstName + lastName;
    }

    const slug = await generateSlug(this, displayName);

    // set default avatarUrl
    if (avatarUrl === undefined) {
      // eslint-disable-next-line no-param-reassign
      avatarUrl = 'https://storage.googleapis.com/builderbook/logo.svg';
    }

    const newUser = await this.create({
      createdAt: new Date(),
      email,
      password,
      firstName,
      lastName,
      googleId,
      googleToken,
      displayName,
      avatarUrl,
      slug,
    });

    const template = await getEmailTemplate('welcome', {
      userName: displayName,
    });

    try {
      await sendEmail({
        from: `Kelly from Builder Book <${process.env.EMAIL_SUPPORT_FROM_ADDRESS}>`,
        to: [email],
        subject: template.subject,
        body: template.message,
      });
    } catch (err) {
      logger.error('Email sending error:', err);
    }

    return _.pick(newUser, UserClass.publicFields());
  }

  static async verifyPassword(email, password) {
    const verified = await this.findOne({ email, password });
    console.log(`VERIFIED ${verified}`);
    return !!verified;
  }
}

mongoSchema.loadClass(UserClass);

const User = mongoose.model('User', mongoSchema);

module.exports = User;
