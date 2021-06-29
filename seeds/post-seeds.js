const { Post } = require("../models");

const postData = [
  {
    title: "JavaScript",
    content: "gnerinsfoioewpofjpopwsmvo",
    user_id: 1,
  },
  {
    title: "MySQL",
    content: "ngiowengwoejvlkfjd",
    user_id: 2,
  },
  {
    title: "Express",
    content: "nbarosjfkweop;skf,cpw",
    user_id: 3,
  },
  {
    title: "HTML",
    content: "rbguhiehtowjf",
    user_id: 4,
  },
  {
    title: "Handlebars",
    content: "rbguierhfeindf",
    user_id: 5,
  },
];

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;
