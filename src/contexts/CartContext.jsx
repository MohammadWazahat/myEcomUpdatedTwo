import React, { createContext, useEffect, useReducer } from "react";
import reducer from "../reducers/CartReducer";
import axios from "axios";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "SET_LOADING" });
      try {
        const res = await axios.get("http://localhost:3015/users/userProduct/");
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
    console.log(x);
    console.log(x._id);
    console.log(state);
    // console.log({ ...x, cartQuantity: 0 });
    const newComp = state.cartProducts.find((item) => item._id == x._id);
    console.log(newComp);
    if (!newComp) {
      axios
        .post("http://localhost:3015/users/userProduct/", {
          ...x,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    } else {
      // console.log("data alredy exist");
      // console.log(newComp.amount)
      axios
        .put(`http://localhost:3015/users/userProduct/` + x._id, {
          ...x,
          amount: x.amount + newComp.amount,
        })
        .then((res) => {
          console.log(res);
        });
    }
  };

  const deleteCartItem = (x) => {
    console.log(x);
    // window.confirm ask for confirmation of deletion
    const confirm = window.confirm("would you like to delete the user");
    if (confirm) {
      axios
        .delete(`http://localhost:3015/users/userProduct/` + x)
        .then((res) => {
          location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  // For deleting All items from the cart by delete All button
  const deleteAllCartItems = () => {
    console.log("i m clicked");
    dispatch({ type: "DELETE_ALL_CART_ITEM" });
  };

  const AddMoreToMyCart = (x) => {
    console.log("i m clicked");
    console.log(x);
    const newComp = state.cartProducts.find((item) => item._id == x._id);
    if (!newComp) {
      axios
        .post("http://localhost:3015/users/userProduct/", { ...x })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    } else {
      // console.log("data alredy exist");
      console.log("already in cart " , newComp.amount)
      console.log("new amount send " , x.amount)
      let newAmount = newComp.amount + x.amount ;
      console.log(newAmount);
      if(newAmount > x.stock){
        newAmount = x.stock ;
      }
      axios
        .put(`http://localhost:3015/users/userProduct/` + x._id, {
          ...x,
          amount: newAmount,
        })
        .then((res) => {
          console.log(res);
        });
    }
  };

  const increaseAmount = (id) => {
    console.log(id);
    // console.log("i m clicked");
    state.cartProducts.map((item) => {
      console.log("i m updated", item);
      if (item._id == id) {
        console.log(item);
        let incAmount = item.amount + 1;
        console.log(incAmount);
        if (incAmount >= item.stock) {
          incAmount = item.stock;
        }
        axios
          .put(`http://localhost:3015/users/userProduct/` + id, {
            ...item,
            amount: incAmount,
          })
          .then((res) => {
            console.log(res);
            location.reload();
          });
      }
    });
  };

  const decreaseAmount = (id) => {
    console.log("i m clicked");
    state.cartProducts.map((item) => {
      console.log("i m updated");
      if (item._id == id) {
        console.log(item);
        let incAmount = item.amount - 1;
        console.log(incAmount);
        if (incAmount <= 1) {
          incAmount = 1;
        }
        axios
          .put(`http://localhost:3015/users/userProduct/` + id, {
            ...item,
            amount: incAmount,
          })
          .then((res) => {
            console.log(res);
            location.reload();
          });
      }
    });
  };

  useEffect(() => {
    dispatch({ type: "CHECK_CART" });
    dispatch({ type: "CART_TOTAL_PRICE" });
  }, [state.cartProducts]);

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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
