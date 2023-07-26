exports.Query = {
  hello: () => {
    return "Hello";
  },
  products: (_, { filter }, { products, reviews }) => {
    let filteredProducts = products;

    if (filter) {
      const { onSale, avgRating } = filter;
      if (onSale === true) {
        filteredProducts = filteredProducts.filter((product) => {
          return product.onSale;
        });
      }
      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filteredProducts = filteredProducts.filter(({ id }) => {
          let sumRating = 0;
          let numOfReviews = 0;
          reviews.forEach(({ productId, rating }) => {
            if (productId === id) {
              sumRating += rating;
              numOfReviews++;
            }
          });
          const avgProductRating = sumRating / numOfReviews;
          return avgProductRating >= avgRating;
        });
      }
    }

    return filteredProducts;
  },
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
