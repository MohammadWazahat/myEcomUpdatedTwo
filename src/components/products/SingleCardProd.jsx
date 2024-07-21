import React from "react";
import Data from "../../dataFiles/testImages.json"
import StarRating from "../viewProduct/StarRating";


const SingleCardProd = (item) => {
  // console.log(Data[1].image2)
  const testImage = Data[1].image2;
  return (
    <div className="">
      <div className="">
        <div>
          <div className="">
            <img className="border border-slate-700 h-64 w-96 " src={item.cover_image} alt="" />
          </div>
          <div className="flex m-2 text-lg font-medium ">{item.model_name}</div>
          <div className="flex m-2">{item.brand_name}</div>
          <div className="flex m-2">
            <StarRating {...item }/>
          </div>
          <div className="flex justify-end m-2">{item.price} $</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SingleCardProd;
