import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import Data from "../../dataFiles/testImages.json";
import StarRating from "../viewProduct/StarRating";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const SingleCartItem = (item) => {
  // console.log(item);
  const myTestImage = Data[0].image1;
  //   console.log(Data[0].image);
  const {
    state,
    deleteCartItem,
    deleteAllCartItems,
    increaseAmount,
    decreaseAmount,
  } = useContext(CartContext);
  const data = state.cart;
  return (
    <div className="cardTwo border border-slate-600">
      <div>
        <div className="flex gap-4 ">
          <div className="flex flex-col m-2">
            <div className="border border-slte-700a w-48">
              <img src={myTestImage} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-2 m-2">
            <div className="text-xl font-semibold">
             {item.brand_name} {item.model_name}
            </div>
            <div className="flex gap-2 ">
              <StarRating {...item} />
              <span className="text-sm"> ( {item.rating_count} ratings ) </span>
            </div>
            <div className="">{item.price} $</div>

            {/* <div className="border border-slate-700">stock : {item.stock}</div> */}
            <div className=" ">Sub Total : {item.price * item.amount} $</div>
          </div>
        </div>
        <div className="flex justify-between m-2 items-center ">
          <div className=" mx-8">
            <div className="flex gap-2">
              <button
                className="flex items-center"
                onClick={() => decreaseAmount(item._id)}
              >
                <FaMinus />
              </button>
              <div className=" p-2">{item.amount}</div>
              <button
                className="flex items-center"
                onClick={() => increaseAmount(item._id)}
              >
                <FaPlus />
              </button>
            </div>
          </div>
          <div className="">
            <button
              type="button"
              className="p-2 m-2 border border-slate-800 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              onClick={() => deleteCartItem(item._id)}
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCartItem;
