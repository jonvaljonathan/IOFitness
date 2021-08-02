const mongoose = require('mongoose');
const dbConnect = require('../server/middleware/database');

async function updateDB(collection, db) {
  dbConnect();
  try {
    const result = await collection.insertMany(db);
    await mongoose.connection.close();
    return result;
  } catch (e) {
    await mongoose.connection.close();
    return e;
  }
}

module.exports = updateDB;
