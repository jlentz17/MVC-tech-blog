const seedUser = require('./user-seeds');
const seedComment = require('./cat-seeds');
const seedPost = require('./recipe-seeds');
const seedVotes = require('./vote-seeds');


const sequelize = require('../config/connection');


const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');

    await seedUser();
    console.log('--------------');

    await seedComment();
    console.log('--------------');

    await seedPost();
    console.log('--------------');

    await seedVotes();
    console.log('--------------');


    process.exit(0)
};

seedAll();