const { Comment } = require("../models");

const commentData = [
  {
    user_id: 1,
    post_id: 5,
    comment_content: "JavaScript",
  },
  {
    user_id: 2,
    post_id: 4,
    comment_content: "MySQL",
  },
  {
    user_id: 3,
    post_id: 2,
    comment_content: `Express`,
  },
  {
    user_id: 4,
    post_id: 3,
    comment_content: "HTML",
  },
  {
    user_id: 5,
    post_id: 1,
    comment_content: "Handlebars",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;
