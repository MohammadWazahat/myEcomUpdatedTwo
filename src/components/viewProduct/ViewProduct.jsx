import React, { useContext } from "react";
import { AllDataContext } from "../../contexts/AllDataContext";
import StarRating from "./StarRating";
import QuantityAdder from "./QuantityAdder";
import ProductColor from "./ProductColor";
import { CartContext } from "../../contexts/CartContext";

const ViewProduct = () => {
  const { viewData } = useContext(AllDataContext);
  const { AddMoreToMyCart } = useContext(CartContext);
  
  // console.log(viewData);

  return (
    <>
      <div className="brd m-4 p-2">
        <div className="grid grid-cols-2 mx-12">
          <img src={viewData.images[0]} alt="" className="h-32 w-32 m-2" />
          <img src={viewData.images[1]} alt="" className="h-32 w-32 m-2" />
          <img src={viewData.images[2]} alt="" className="h-32 w-32 m-2" />
          <img src={viewData.images[3]} alt="" className="h-32 w-32 m-2" />
        </div>
        <div>{viewData.product_name}</div>
        <div>{viewData.rating}</div>
        <div>
          <StarRating {...viewData} />
        </div>
        <div>customer reviews : {viewData.reviews}</div>
        <div>{viewData.description}</div>
        <div>{viewData.category}</div>
        <div>{viewData.quantity}</div>
        <div>
          <ProductColor {...viewData} />
        </div>
        <div>
          <QuantityAdder {...viewData} />
        </div>
        <button
          className="flex justify-center items-center p-2 px-8"
          onClick={() => AddMoreToMyCart({ ...viewData })}
        >
          Add to cart
        </button>
      </div>
    </>
  );
};

export default ViewProduct;
