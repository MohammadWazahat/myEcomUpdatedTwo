import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import SingleCartItem from "./SingleCartItem";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { state, deleteAllCartItems } = useContext(CartContext);

  // console.log(state);
  //  console.log(state.cart)
  //  console.log(state.amount)
  const data = state.cart;
  const myCartData = state.cartProducts;
  // console.log(myCartData);

  if (state.isLoading) {
    return <div>...Loading</div>;
  }

  if (state.isError) {
    return <div>Error ..............</div>;
  }

  return (
    <>
      <div className=" m-2 flex flex-col gap-8">
        {myCartData.map((item, index) => {
          return (
            <div key={index}>
              <SingleCartItem {...item} />
            </div>
          );
        })}
      </div>
      <div>
        <div>
          <button
            className="p-2 m-4 border border-slate-700"
            onClick={() => deleteAllCartItems()}
          >
            Delete All
          </button>
        </div>
      </div>
      <div className=" bgcOne mt-32 flex flex-col border border-slate-700 mx-2 ">
        <div className="p-4">
          <div className="">Cart Total : {state.totalPrice}$ </div>
          <div>Shipping Fee : {state.shippingFee}$</div>
          <div className="text-xl text-red-400">
            Order Total : {state.totalPrice + state.shippingFee}${" "}
          </div>
          <div>
            <button className="p-2 m-4 border border-slate-700">
              Check Out
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12 flex justify-center items-center ">
        <NavLink to="/allProducts">
          <button className="border border-slate-800 p-3 px-5 m-2 ">Shop Now</button>
        </NavLink>
      </div>
      <hr className="horizon border border-slate-800 mx-4 m-2 " />
    </>
  );
};

export default Cart;
