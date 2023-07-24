const { ApolloServer } = require("apollo-server");
const { products, categories, reviews } = require("./data.js");
const { typeDefs } = require("./schema");

const resolvers = {
  Query: {
    hello: () => {
      return "Hello";
    },
    products: () => products,
    product: (_, args) => {
      const productId = args.id;
      const product = products.find(({ id }) => id === productId);
      if (!product) return null;
      return product;
    },
    categories: () => categories,
    category: (_, args) => {
      const categoryId = args.id;
      const category = categories.find(({ id }) => id === categoryId);
      if (!category) return null;
      return category;
    },
  },
  Category: {
    products: (parent, args) => {
      const { id } = parent;
      return products.filter((product) => product.categoryId === id);
    },
  },
  Product: {
    category: (parent, args) => {
      const { categoryId } = parent;
      return categories.find((cat) => cat.id === categoryId);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server is ready at ${url}`);
});
