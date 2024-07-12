import React, { useState } from "react";

const SingleProduct = (item) => {
  return (
    <div className=" m-1 border border-slate-700 rounded-3xl">
      <div className=" p-2 border border-slate-700 ">
        <div>
          <div className="mx-6">
            <img className="h-64 w-64 " src={item.images[0]} alt="" />
          </div>
          <div className="flex m-2 text-lg font-medium ">{item.product_name}</div>
          <div className="flex m-2">{item.brand}</div>
          <div className="flex justify-end m-2">Price : {item.price} $</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
