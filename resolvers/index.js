const { Category } = require("./Category");
const { Product } = require("./Product");
const { Query } = require("./Query");

const resolvers = {
  Query,
  Category,
  Product,
};

module.exports = { resolvers };
