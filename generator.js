const _ = require("lodash");
const faker = require("faker");

module.exports = () => ({
  people: _.times(100, (num) => ({
    id: num,
    name: faker.name.firstName(num % 2),
    email: faker.internet.email(),
  })),
});
