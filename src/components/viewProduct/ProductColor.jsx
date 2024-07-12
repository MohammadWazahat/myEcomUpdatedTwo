import React from "react";

const ProductColor = (viewData) => {
  const myColors = viewData.color;
//   console.log(myColors);
  return (
    <div className="flex gap-3">
      {myColors.map((item, index) => {
        return (
          <button
            className="h-6 w-6 rounded-xl"
            style={{ backgroundColor: item }}
            key={index}
          ></button>
        );
      })}
    </div>
  );
};

export default ProductColor;
