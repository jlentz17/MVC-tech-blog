const User = require('./User');
const Post = require("./Post")

User.hasMany(Post, {
    foreignKey: "user_id"
})

Post.belongsTo(User, {
    foreign_key:"user_id"
})

module.exports = { User, Post };