const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { resolvers } = require("./resolvers");
const { categories, products, reviews } = require("./data");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    categories,
    products,
    reviews,
  },
});

server.listen().then(({ url }) => {
  console.log(`Server is ready at ${url}`);
});
