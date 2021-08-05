const { Post } = require("../models");

const postData = [
  {
    title: "Skillet Potatoes",
    content: "How can she slap?",
    user_id: 1,
  },
  {
    title: "Skilleted Pots",
    content: "How can she not slap?",
    user_id: 2,
  },
  {
    title: "Skilled Toes",
    content: "Who can she slap?",
    user_id: 3,
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
