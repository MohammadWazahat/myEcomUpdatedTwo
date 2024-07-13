const reducer = (state, action) => {
  // console.log(state)
  //  console.log(action.payload)
  if (action.type === "SET_LOADING") {
    // console.log(action.payload)
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === "SET_MY_DATA") {
    // console.log(action.payload)
    return {
      ...state,
      products: action.payload,
      productsByBrand: action.payload,
      isLoading: false,
      isError: false,
    };
  }

  if (action.type === "SET_ERROR") {
    // console.log(action.payload)
    return {
      ...state,
      isLoading: false,
      isError: true,
    };
  }

  if (action.type === "ASCENDING") {
    const sorted = action.payload.sort((a, b) => {
      return a.brand_name.localeCompare(b.brand_name);
    });
    return { ...state, products: sorted };
  }

  if (action.type === "DESCENDING") {
    const sorted = action.payload.sort((a, b) => {
      return b.brand_name.localeCompare(a.brand_name);
    });
    return { ...state, products: sorted };
  }

  if (action.type === "LOWEST") {
    const sorted = action.payload.sort((a, b) => {
      return a.price - b.price;
    });
    return { ...state, products: sorted };
  }

  if (action.type === "HIGHEST") {
    const sorted = action.payload.sort((a, b) => {
      return b.price - a.price;
    });
    return { ...state, products: sorted };
  }

  // for filtering data
  if (action.type === "FILTER_BY_BRAND") {
    // console.log(action.payload.pay1)
    const brands = action.payload.pay1.filter(
      (data) => data.brand_name === action.payload.pay2
    );
    // console.log(brands);
    return { ...state, productsByBrand: brands };
  }

  if (action.type === "ALL_PRODUCTS") {
    return { ...state, productsByBrand: action.payload.pay1 };
  }

  return state;
};

export default reducer;
