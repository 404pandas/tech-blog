const seedsUsers = require('./user-seeds');
const seedsPosts = require('./post-seeds');
const seedsComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  // force: true adds DROP TABLE IF EXISTS before trying to create table
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedsUsers();
  console.log('--------------');
  await seedsPosts();
  console.log('--------------');
  await seedsComments();
  console.log('--------------');

  process.exit(0);
};

seedAll();
