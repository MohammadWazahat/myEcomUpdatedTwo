import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import axios from "axios";

const Cart = () => {
  const {
    state,
    deleteCartItem,
    deleteAllCartItems,
    increaseAmount,
    decreaseAmount,
  } = useContext(CartContext);

  // console.log(state);
  //  console.log(state.cart)
  //  console.log(state.amount)
  const data = state.cart;
  const myCartData = state.cartProducts;
  // console.log(myCartData);
  // const [cartData , setCartData ] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await axios.get("http://localhost:3010/users");
  //     setCartData(res.data);
  //   };
  //   fetchData();
  // }, []);

  // console.log(myUser);

  if (state.isLoading) {
    return <div>...Loading</div>;
  }

  if (state.isError) {
    return <div>Error ..............</div>;
  }

  return (
    <>
      <div className="brd flex flex-col gap-2">
        {myCartData.map((item, index) => {
          return (
            <div key={index}>
              <div className="flex gap-8 brd p-4 m-2">
                <div className="brd p-2">{item.id}</div>
                {/* <div className="mx-2">
                  <img className="h-16 w-16 " src={item.images[0]} alt="" />
                </div> */}
                <div className="brd p-2  ">Model name {item.model_name}</div>
                {/* <div className="brd p-2  ">{item.brand_name}</div> */}
                <div className="brd p-2  ">item price : {item.price}</div>
                <div className="brd p-2">stock : {item.stock}</div>

                <div>
                  <button onClick={() => decreaseAmount(item.id)}>
                    decrease
                  </button>

                  {/* <div className="brd p-2">Amount left : {item.stock}</div> */}
                  <div className="brd p-2">cart Amount : {item.amount}</div>

                  <button onClick={() => increaseAmount(item.id)}>
                    increase
                  </button>
                </div>

                {/* <div className="brd p-2  ">
                  sub total {item.price * item.amount}
                </div> */}
                <button
                  className="brd p-2"
                  onClick={() => deleteCartItem(item.id)}
                >
                  delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <div>cart total : {state.totalPrice}$ </div>
        <div>shipping fee : {state.shippingFee}$</div>
        <div>order total : {state.totalPrice + state.shippingFee}$ </div>
      </div>

      <hr className="horizon border border-slate-800 mx-4 m-2" />
      <div>
        <button className="p-4 m-4" onClick={() => deleteAllCartItems()}>
          delete All
        </button>
      </div>
      <hr className="horizon border border-slate-800 mx-4 m-2 " />
    </>
  );
};

export default Cart;
