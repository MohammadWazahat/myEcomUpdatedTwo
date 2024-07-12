const reducer = (state, action) => {
  // for filtering data
  if (action.type === "FILTER_BY_BRAND") {
    const brands = action.payload.pay1.filter(
      (data) => data.brand === action.payload.pay2
    );
    console.log(brands);
    return brands;
  }

  return state;
};

export default reducer;
