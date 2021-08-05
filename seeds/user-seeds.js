const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = [
  {
    username: 'alesmonde045',
    email: 'nwestnedge0@cbc.ca',
    password: 'password123'
  },
  {
    username: 'jwilloughway1',
    email: 'rmebes1@sogou.com',
    password: 'password1237'
  },
  {
    username: 'iboddam2',
    email: 'cstoneman2@last.fm',
    password: 'password1234'
  },
  {
    username: 'dstanmer3',
    email: 'ihellier3@goo.ne.jp',
    password: 'password1235'
  }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;