const seedUser = require('./user-seeds');
const seedComment = require('./comment-seeds');
const seedPost = require('./post-seeds');
// const seedVotes = require('./vote-seeds');


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

    // await seedVotes();
    // console.log('--------------');


    process.exit(0)
};

seedAll();