import React, { useContext } from "react";
import { AllDataContext } from "../../contexts/AllDataContext";
import StarRating from "./StarRating";
import QuantityAdder from "./QuantityAdder";
import ProductColor from "./ProductColor";
import { CartContext } from "../../contexts/CartContext";

const ViewProduct = () => {
  const { viewData ,amount } = useContext(AllDataContext);
  const { AddMoreToMyCart } = useContext(CartContext);
  
  // console.log(viewData);
console.log(amount);
  return (
    <>
      <div className="brd m-4 p-2">
        <div>images 4</div>
        <div className="grid grid-cols-2 mx-12">
          <img src={viewData.images[0]} alt="" className="h-32 w-32 m-2" />
          <img src={viewData.images[1]} alt="" className="h-32 w-32 m-2" />
          <img src={viewData.images[2]} alt="" className="h-32 w-32 m-2" />
          <img src={viewData.images[3]} alt="" className="h-32 w-32 m-2" />
        </div>
        <div>cover iMage</div>
        <div>model {viewData.model_name} color ,rom ,ram </div>
        <div>star rating</div>
        <div>
          <StarRating {...viewData} />
        </div> 
        <div>price {viewData.price}</div>
        <div>color array</div>
        <div>storage rom</div>
        <div>ram</div>
        <div>camera front</div>
        <div>camera rear</div>
        <div>processor</div>
        <div>battery</div>
        <div>desctiption</div>
        <div>stock {viewData.stock}</div>
        <div>Rating {viewData.rating}</div>

        {/* <div>
          <ProductColor {...viewData} />
        </div> */}
        <div>
          <QuantityAdder />
        </div> 
        <button
          className="flex justify-center items-center p-2 px-8"
          onClick={() => AddMoreToMyCart({ ...viewData , amount : amount })}
        >
          Add to cart
        </button>
      </div>
    </>
  );
};

export default ViewProduct;
