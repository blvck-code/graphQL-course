exports.Query = {
  hello: () => {
    return "Hello";
  },
  products: () => products,
  product: (_, { id: productId }, { products }) => {
    const product = products.find(({ id }) => id === productId);
    if (!product) return null;
    return product;
  },
  categories: () => categories,
  category: (_, { id: categoryId }, { categories }) => {
    const category = categories.find(({ id }) => id === categoryId);
    if (!category) return null;
    return category;
  },
};
