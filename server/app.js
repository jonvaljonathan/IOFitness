/* 
node does not support ES6 syntax yet, could use babel-node, 
want avoid configuration errors so we don't
*/
const express = require('express');
const session = require('express-session');
const mongoSessionStore = require('connect-mongo');
const next = require('next');
const mongoose = require('mongoose');
const helmet = require('helmet');
const sitemapAndRobots = require('./sitemapAndRobots');

const auth = require('./login');
const { setupGithub } = require('./github');
const api = require('./api/index');

const logger = require('./logs');
const { insertTemplates } = require('./models/EmailTemplate');
const routesWithSlug = require('./routesWithSlug');

const getRootUrl = require('../lib/api/getRootUrl');

// initializes dotenv file
require('dotenv').config();

/* 
Initialize the next server, express server, and MongoDB
dev is true when the environment is not in production
*/

const dev = process.env.NODE_ENV !== 'production';

/* 
connect to mongodb
options object avoids deprecation warning
*/
const MONGO_URL = dev ? process.env.MONGO_URL_TEST : process.env.MONGO_URL;

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

mongoose.connect(MONGO_URL, options);

// specify port, root_url, and url_map
const port = process.env.PORT || 8000;
const ROOT_URL = getRootUrl();

const URL_MAP = {
  '/login': '/public/login',
  '/signup': '/public/signup',
  '/my-books': '/customer/my-books',
};

// create next server

const app = next({ dev });
const handle = app.getRequestHandler();

// next server that uses express
app.prepare().then(async () => {
  const server = express();
  server.use(helmet());

  server.use(express.json());

  /* 
    initalize mongoSessionStore
     create session object with the cookie, secret, exipiration and MongoStore
  */

  const MongoStore = mongoSessionStore(session);
  const sess = {
    name: 'builderbook.sid',
    secret: 'HD2w.)q*VqRT4/#NK2M/,E^B)}FED5fWU!dKe[wk',
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 14 * 24 * 60 * 60, // expires in 14 days
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 14 * 24 * 60 * 60 * 1000, // expires in 14 days
    },
  };

  if (!dev) {
    server.set('trust proxy', 1);
    sess.cookie.secure = true;
  }

  /* 
  anytime a user opens the app, and logs in? 
  create and save the sess cookie and document
  */
  server.use(function(req, res, next) {
    console.log(`handling request for: ${req.url}`);
    next();
  });
  server.use(express.static('../_next/static'));
  server.use(session(sess));
  auth({ ROOT_URL, server });

  await insertTemplates();

  setupGithub({ server });
  api(server);
  routesWithSlug({ server, app });
  sitemapAndRobots({ server });

  server.get('*', (req, res) => {
    const url = URL_MAP[req.path];
    logger.info(`> Request- ${req}`);
    if (url) {
      app.render(req, res, url);
    } else {
      handle(req, res);
    }
  });

  server.listen(port, (err) => {
    if (err) throw err;
    logger.info(`> Ready on ${ROOT_URL}`);
  });
});

module.exports = { app };
