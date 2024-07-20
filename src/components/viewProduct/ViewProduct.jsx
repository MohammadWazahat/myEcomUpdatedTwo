import React, { useContext } from "react";
import { AllDataContext } from "../../contexts/AllDataContext";
import StarRating from "./StarRating";
import QuantityAdder from "./QuantityAdder";
import ProductColor from "./ProductColor";
import { CartContext } from "../../contexts/CartContext";

const ViewProduct = () => {
  const { viewData, amount } = useContext(AllDataContext);
  const { AddMoreToMyCart } = useContext(CartContext);
  console.log(viewData);
  // console.log(amount);
  return (
    <>
      <div className="mt-12 flex flex-col sm:flex-row gap-12 m-4 p-2 justify-center items-center ">
        
        <div className="brd h-96 w-96 flex justify-center items-center ">
          <div>
            <img className="h-96 w-96" src={viewData.cover_image} alt="" />
          </div>
        </div>
        <div>
          <div className=" flex sm:flex-col justify-center items-center">
            <img src={viewData.images[0]} alt="" className="h-16 w-16 m-2" />
            <img src={viewData.images[1]} alt="" className="h-16 w-16 m-2" />
            <img src={viewData.images[2]} alt="" className="h-16 w-16 m-2" />
            <img src={viewData.images[3]} alt="" className="h-16 w-16 m-2" />
          </div>
        </div>
        <div className=" sm: w-96 ">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <div className="text-2xl font-medium">
                {viewData.brand_name} {viewData.model_name}
              </div>
              <div className="text-yellow-800">
                ( {viewData.color}, {viewData.storage}GB, {viewData.ram}GB )
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-xl">
                <StarRating {...viewData} />
              </div>
              <div className="bg-slate-200 text-sm ">
                {viewData.rating_count} rating{" "}
              </div>
            </div>
            <div className="text-red-800 font-semibold text-xl">
              {viewData.price} $
            </div>
            <div>{viewData.description}</div>
            <div>Internal Storage :{viewData.storage}GB</div>
            <div>RAM : {viewData.ram}GB</div>            
            <div>{viewData.color}</div>
            <div>{viewData.camera_front} MP - Front Camera</div>
            <div>{viewData.camera_rear}MP - Rear Camera</div>
            <div>{viewData.processor} Processor</div>
            <div>stock {viewData.stock}</div>
            <div>{viewData.battery} </div>
            <div>
              <QuantityAdder />
            </div>
            <button
              className="brd buttonTwo flex justify-center items-center sm:justify-start py-2 "
              onClick={() => AddMoreToMyCart({ ...viewData, amount: amount })}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProduct;
