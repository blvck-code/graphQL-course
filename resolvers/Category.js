exports.Category = {
  products: ({ id }, { filter }, { products }) => {
    const catProducts = products.filter((product) => product.categoryId === id);
    let filteredCat = catProducts;

    if (filter) {
      if (filter.onSale === true) {
        filteredCat = filteredCat.filter((product) => {
          return product.onSale;
        });
      }
    }
    return filteredCat;
  },
};
