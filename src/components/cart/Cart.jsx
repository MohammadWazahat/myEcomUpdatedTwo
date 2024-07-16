import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

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

  if (state.isLoading) {
    return <div>...Loading</div>;
  }

  if (state.isError) {
    return <div>Error ..............</div>;
  }

  return (
    <>
      <div className=" border border-slate-700 p-2 m-2 brd flex flex-col gap-8">
        {myCartData.map((item, index) => {
          // if (item.amount > item.stock) {
          //   item.amount = item.stock;
          // }
          return (
            <div key={index}>
              <div className="flex border border-slate-700  ">
                <div>
                  <div className="border border-slate-700 h-20 w-20">
                    {item.id}
                  </div>
                  <div className="border border-slate-700">
                    <div>
                      <button onClick={() => decreaseAmount(item._id)}>
                        decrease
                      </button>

                      <div className="brd p-2">cart Amount : {item.amount}</div>
                      <button onClick={() => increaseAmount(item._id)}>
                        increase
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="border border-slate-700">
                    Model name {item.model_name}
                  </div>
                  <div className="border border-slate-700">rating</div>
                  <div className="border border-slate-700">
                    item price : {item.price}
                  </div>

                  <div className="border border-slate-700">
                    stock : {item.stock}
                  </div>
                  <div className="brd p-2  ">
                    sub total {item.price * item.amount}
                  </div>
                </div>
              </div>
              <div className="border border-slate-700">
                <button
                  className="brd p-2"
                  onClick={() => deleteCartItem(item._id)}
                >
                  delete
                </button>
              </div>

              {/* <div className="mx-2">
                  <img className="h-16 w-16 " src={item.images[0]} alt="" />
                </div> */}
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
