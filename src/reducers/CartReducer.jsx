const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_MY_CART") {
    // console.log(state.cart);
    // console.log(action.payload)
    const newCartData = {
      id: action.payload.pay1.id,
      quantity: action.payload.pay1.quantity,
      price : action.payload.pay1.price,
      product_name: action.payload.pay1.product_name,
      images: action.payload.pay1.images,
      amount: action.payload.pay2,
    };
    return {
      ...state,
      cart: [...state.cart, newCartData],
    };
  }

  if (action.type === "ADD_MORE_TO_MY_CART") {
    // console.log(state);
    // console.log(action.payload)
    let existingProduct = state.cart.find(
      (item) => item.id == action.payload.pay1.id
    );
    // console.log(existingProduct);
    if (existingProduct) {
      const updatedCartNew = state.cart.map((item) => {
        // console.log("i already exist")
        if (item.id == action.payload.pay1.id) {
          let newAmount = item.amount + action.payload.pay2;
          if (newAmount >= item.quantity) {
            newAmount = item.quantity;
          }
          return {
            ...item,
            amount: newAmount,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        cart: updatedCartNew,
      };
    } else {
      const newCartData = {
        id: action.payload.pay1.id,
        quantity: action.payload.pay1.quantity,
        price : action.payload.pay1.price,
        product_name: action.payload.pay1.product_name,
        images: action.payload.pay1.images,
        amount: action.payload.pay2,
      };
      // console.log(newCartData);
      return {
        ...state,
        cart: [...state.cart, newCartData],
      };
    }
  }

  if (action.type === "DELETE_CART_ITEM") {
    // console.log(action.payload)
    const updatedCart = state.cart.filter(
      (item) => item.id !== action.payload.pay1
    );
    // console.log(updatedCart);
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "DELETE_ALL_CART_ITEM") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "DEC_AMOUNT") {
    let updatedCart = state.cart.map((item) => {
      // console.log("i m updated");
      if (item.id == action.payload) {
        // console.log(item);
        let decAmount = item.amount - 1;
        if (decAmount <= 1) {
          decAmount = 1;
        }
        return {
          ...item,
          amount: decAmount,
        };
      } else {
        return item;
      }
    });
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "INC_AMOUNT") {
    let updatedCart = state.cart.map((item) => {
      // console.log("i m updated");
      if (item.id == action.payload) {
        // console.log(item);
        let incAmount = item.amount + 1;
        if (incAmount >= item.quantity) {
          incAmount = item.quantity;
        }
        return {
          ...item,
          amount: incAmount,
        };
      } else {
        return item;
      }
    });
    return {
      ...state,
      cart: updatedCart,
    };
  }

if (action.type === 'CHECK_CART'){
  let updateItemVal = state.cart.reduce((initialVal , item )=>{
    let { amount } = item ;
    initialVal = initialVal + amount ;
    return initialVal ;
  },0);
  return {
    ...state,
    totalItems : updateItemVal ,
  }
}

if (action.type === 'CART_TOTAL_PRICE'){
  let myToalPrice = state.cart.reduce((initialVal , item )=>{
    let {price , amount } = item ;
    initialVal = initialVal + price * amount ;
    return initialVal ;
  },0);
  return {
    ...state,
    totalPrice : myToalPrice ,
  }
}

  return state;
};

export default CartReducer;
