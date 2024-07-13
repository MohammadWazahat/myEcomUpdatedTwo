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
    cartProducts : [] ,
    cart: [],
    totalItems : 0 ,
    totalPrice : 0 ,
    shippingFee : 100 ,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  
  const AddToMyCart = (x) => {
    console.log({...x , cartQuantity : 0 })
    axios
    .post("http://localhost:3011/users", {...x , cartQuantity : 0 })
    .then((res) => {
      console.log(res);
      // hook to navigate back to the page
      // navigate("/adminGetAllProducts");
    })
    .catch((err) => console.log(err));

    // dispatch({
    //   type: "ADD_TO_MY_CART",
    //   payload: {
    //     pay1: x,
    //     pay2: 1,
    //   },
    // });
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
             //   navigate("/") // reload us to the same page
           })
           .catch((err) => console.log(err));
       }
      //  console.log(x); 
  
    // dispatch({
    //   type: "DELETE_CART_ITEM",
    //   payload: {
    //     pay1: x,
    //   },
    // });
  };


   // For deleting All items from the cart by delete All button
   const deleteAllCartItems = () => {
      console.log("i m clicked");
    // dispatch({ type: "DELETE_ALL_CART_ITEM" });
  };







  const { amount } = useContext(AllDataContext);

  const AddMoreToMyCart = (x) => {
    console.log("i m clicked");
    console.log(x)
    console.log({...x , cartQuantity : x.amount})
    axios
    .post("http://localhost:3011/users", {...x , cartQuantity : x.amount })
    .then((res) => {
      console.log(res);
      // hook to navigate back to the page
      // navigate("/adminGetAllProducts");
    })
    .catch((err) => console.log(err));


    // dispatch({
    //   type: "ADD_MORE_TO_MY_CART",
    //   payload: {
    //     pay1: x,
    //     pay2: amount,
    //   },
    // });
  };

  const increaseAmount = (id) => {
    console.log("i m clicked")
    dispatch({ type: "INC_AMOUNT", payload: id });
  };

  const decreaseAmount = (id) => {
    console.log("i m clicked")
    dispatch({ type: "DEC_AMOUNT", payload: id });
  };

  // console.log(amount)

  //To Save cart data during refreshes in local storage
  // const getLocalCartData = () => {
  //   const cartData = localStorage.getItem("myCart");
  //   if (cartData == []) {
  //     return [];
  //   } else {
  //     return JSON.parse(cartData);
  //   }
  // };

 

  // For adding item in the cart from product page
  // const AddToMyCart = (x) => {
  //   // console.log(x)
  //   dispatch({
  //     type: "ADD_TO_MY_CART",
  //     payload: {
  //       pay1: x,
  //       pay2: 1,
  //     },
  //   });
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
