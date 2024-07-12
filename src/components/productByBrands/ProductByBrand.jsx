import React, { useContext } from "react";
import { HomeContext } from "../../contexts/HomeContext";

const ProductByBrand = () => {
  const { state } = useContext(HomeContext);
  console.log(state);
  return (
    <div>
      {state.map((item) => {
        return <div>{item.brand}</div>;
      })}
    </div>
  );
};

export default ProductByBrand;
