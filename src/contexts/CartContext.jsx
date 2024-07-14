import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import reducer from "../reducers/CartReducer";
import { AllDataContext } from "./AllDataContext";
import axios from "axios";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "SET_LOADING" });
      try {
        const res = await axios.get("http://localhost:3011/users");
        // setMyUser(res.data);
        // console.log(res.data)
        const cartProducts = await res.data;
        dispatch({
          type: "SET_CART_DATA",
          payload: cartProducts,
        });
      } catch (err) {
        dispatch({ type: "SET_ERROR" });
      }
    };
    fetchData();
  }, []);

  const initialState = {
    // cart: getLocalCartData(),
    isLoading: false,
    isError: false,
    cartProducts: [],
    cart: [],
    totalItems: 0,
    totalPrice: 0,
    shippingFee: 100,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const AddToMyCart = (x) => {
    console.log({ ...x, cartQuantity: 0 });
    const newComp = state.cartProducts.find((item) => item.id == x.id);
    if (!newComp) {
      axios
        .post("http://localhost:3011/users", { ...x })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    } else {
      console.log("data alredy exist");
      // console.log(newComp.amount)
      axios
        .put(`http://localhost:3011/users/` + x.id, {
          ...x,
          amount: x.amount + newComp.amount,
        })
        .then((res) => {
          console.log(res);
        });
    }
  };

  const deleteCartItem = (x) => {
    // console.log(x);
    // window.confirm ask for confirmation of deletion
    const confirm = window.confirm("would you like to delete the user");
    if (confirm) {
      axios
        .delete(`http://localhost:3011/users/` + x)
        .then((res) => {
          location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  // For deleting All items from the cart by delete All button
  const deleteAllCartItems = () => {
    console.log("i m clicked");
    // dispatch({ type: "DELETE_ALL_CART_ITEM" });
  };

  const AddMoreToMyCart = (x) => {
    // console.log("i m clicked");
    // console.log(x);
    const newComp = state.cartProducts.find((item) => item.id == x.id);
    if (!newComp) {
      axios
        .post("http://localhost:3011/users", { ...x })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    } else {
      console.log("data alredy exist");
      // console.log(newComp.amount)
      axios
        .put(`http://localhost:3011/users/` + x.id, {
          ...x,
          amount: x.amount + newComp.amount,
        })
        .then((res) => {
          console.log(res);
        });
    }
  };



  const increaseAmount = (id) => {
    console.log("i m clicked");
    let updatedCart = state.cartProducts.map((item) => {
      console.log("i m updated");
      if (item.id == id) {
        console.log(item);
        let incAmount = item.amount + 1;
        console.log(incAmount);
        if (incAmount >= item.stock) {
          incAmount = item.stock;
        }
        axios
          .put(`http://localhost:3011/users/` + id, {
            ...item,
            amount: incAmount,
          })
          .then((res) => {
            console.log(res);
            location.reload();
          });
      }
    });
    // dispatch({ type: "INC_AMOUNT", payload: id });
  };

  const decreaseAmount = (id) => {
    console.log("i m clicked");
    let updatedCart = state.cartProducts.map((item) => {
      console.log("i m updated");
      if (item.id == id) {
        console.log(item);
        let incAmount = item.amount - 1;
        console.log(incAmount);
        if (incAmount <= 1) {
          incAmount = 1;
        }
        axios
          .put(`http://localhost:3011/users/` + id, {
            ...item,
            amount: incAmount,
          })
          .then((res) => {
            console.log(res);
            location.reload();
          });
      }
    });   
    // dispatch({ type: "DEC_AMOUNT", payload: id });
  };


  //To Save cart data during refreshes in local storage
  // const getLocalCartData = () => {
  //   const cartData = localStorage.getItem("myCart");
  //   if (cartData == []) {
  //     return [];
  //   } else {
  //     return JSON.parse(cartData);
  //   }
  // };

  // For adding item in the cart from view page

  // For deleting Single item from the cart by delete button/icon

  //To Save cart data during refreshes in local storage
  // useEffect(() => {
  //   // console.log("hey guys")
  // //  console.log(state.myData)
  // dispatch ({ type : 'CHECK_CART' });
  // dispatch ({ type : 'CART_TOTAL_PRICE' });
  //   localStorage.setItem("myCart", JSON.stringify(state.cart));
  // }, [state.cart]);

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
