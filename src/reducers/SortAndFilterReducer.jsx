const reducer = (state, action) => {
  if (action.type === "ASCENDING") {
    const sorted = action.payload.sort((a, b) => {
      return a.product_name.localeCompare(b.product_name);
    });
    return sorted;
  }
  if (action.type === "DESCENDING") {
    const sorted = action.payload.sort((a, b) => {
      return b.product_name.localeCompare(a.product_name);
    });
    return sorted;
  }
  if (action.type === "LOWEST") {
    const sorted = action.payload.sort((a, b) => {
      return a.price - b.price;
    });
    return sorted;
  }
  if (action.type === "HIGHEST") {
    const sorted = action.payload.sort((a, b) => {
      return b.price - a.price;
    });
    return sorted;
  }

  // for filtering data
  if (action.type === "FILTER_BY_BRAND") {
    const brands = action.payload.pay1.filter(
      (data) => data.brand === action.payload.pay2
    );
    // console.log(brands);
    return brands;
  }

  return state;
};

export default reducer;
