import React, { useContext, useState } from "react";
import { AllDataContext } from "../../contexts/AllDataContext";

const QuantityAdder = (viewData) => {
  // console.log(viewData.quantity)
  const { setDecrease, setIncrease, amount } = useContext(AllDataContext);

  return (
    <div className="flex gap-4">
      <button
        onClick={() => {
          setDecrease();
        }}
      >
        Decrease
      </button>
      <div>{amount}</div>

      <button
        onClick={() => {
          setIncrease();
        }}
      >
        Increase
      </button>
    </div>
  );
};

export default QuantityAdder;
