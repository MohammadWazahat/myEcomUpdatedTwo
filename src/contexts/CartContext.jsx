import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import reducer from "../reducers/CartReducer";
import { AllDataContext } from "./AllDataContext";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const { myData, amount } = useContext(AllDataContext);
  // console.log(amount)

  //To Save cart data during refreshes in local storage
  const getLocalCartData = () => {
    const cartData = localStorage.getItem("myCart");
    if (cartData == []) {
      return [];
    } else {
      return JSON.parse(cartData);
    }
  };

  const initialState = {
    // cart: getLocalCartData(),
    cart: [],
    totalItems : 0 ,
    totalPrice : 0 ,
    shippingFee : 100 ,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // For adding item in the cart from product page
  const AddToMyCart = (x) => {
    // console.log(x)
    dispatch({
      type: "ADD_TO_MY_CART",
      payload: {
        pay1: x,
        pay2: 1,
      },
    });
  };

  // For adding item in the cart from view page
  const AddMoreToMyCart = (x) => {
    // console.log("i m clicked");
    dispatch({
      type: "ADD_MORE_TO_MY_CART",
      payload: {
        pay1: x,
        pay2: amount,
      },
    });
  };

  // For deleting Single item from the cart by delete button/icon
  const deleteCartItem = (x) => {
    // console.log(x);
    dispatch({
      type: "DELETE_CART_ITEM",
      payload: {
        pay1: x,
      },
    });
  };

  // For deleting All items from the cart by delete All button
  const deleteAllCartItems = () => {
    //   console.log("i m clicked");
    dispatch({ type: "DELETE_ALL_CART_ITEM" });
  };

  //To Save cart data during refreshes in local storage
  // useEffect(() => {
  //   // console.log("hey guys")
  // //  console.log(state.myData)
  // dispatch ({ type : 'CHECK_CART' });
  // dispatch ({ type : 'CART_TOTAL_PRICE' });
  //   localStorage.setItem("myCart", JSON.stringify(state.cart));
  // }, [state.cart]);

  const increaseAmount = (id) => {
    // console.log("i m clicked")
    dispatch({ type: "INC_AMOUNT", payload: id });
  };

  const decreaseAmount = (id) => {
    // console.log("i m clicked")
    dispatch({ type: "DEC_AMOUNT", payload: id });
  };

  // const checkCart = () =>{
  //   console.log("i m clicked")
  //   dispatch ({ type : 'CHECK_CART' })
  // }

// useEffect(()=>{
//   dispatch ({ type : 'CHECK_CART' });
//   dispatch ({ type : 'CART_TOTAL_PRICE' });
// },[state.cart])

  return (
    <CartContext.Provider
      value={{
        state: state,
        deleteCartItem: deleteCartItem,
        AddToMyCart: AddToMyCart,
        AddMoreToMyCart: AddMoreToMyCart,
        deleteAllCartItems: deleteAllCartItems,
        increaseAmount: increaseAmount,
        decreaseAmount: decreaseAmount,
        // checkCart : checkCart ,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
