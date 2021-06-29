const { User } = require("../models");

const userData = [
  {
    username: "Nemo",
    email: "Nemo@mail",
    password: "fin1",
  },
  {
    username: "Frog",
    email: "Frog@mail",
    password: "fliesrule",
  },
  {
    username: "Bird",
    email: "Bird@mail",
    password: "2worms",
  },
  {
    username: "Dog",
    email: "Dog@mail",
    password: "Bellyrub",
  },
  {
    username: "Plant",
    email: "Plant@mail",
    password: "watersun",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
