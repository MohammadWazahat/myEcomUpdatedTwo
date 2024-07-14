const CartReducer = (state, action) => {
  if (action.type === "SET_LOADING") {
    // console.log(action.payload)
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === "SET_CART_DATA") {
    // console.log(action.payload)
    return {
      ...state,
      isLoading: false,
      isError: false,
      cartProducts: action.payload,
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

  if (action.type === "DELETE_ALL_CART_ITEM") {
    console.log("temporary")
    return {
      ...state,
      cartProducts : [],
    };
  }

  if (action.type === "CHECK_CART") {
    // console.log("i m check cart");
    let updateItemVal = state.cartProducts.reduce((initialVal, item) => {
      let { amount } = item;
      initialVal = initialVal + amount;
      return initialVal;
    }, 0);
    return {
      ...state,
      totalItems: updateItemVal,
    };
  }

  if (action.type === "CART_TOTAL_PRICE") {
    // console.log("i m cart total price");
    let myToalPrice = state.cartProducts.reduce((initialVal, item) => {
      let { price, amount } = item;
      initialVal = initialVal + price * amount;
      return initialVal;
    }, 0);
    return {
      ...state,
      totalPrice: myToalPrice,
    };
  }

  return state;
};

export default CartReducer;
