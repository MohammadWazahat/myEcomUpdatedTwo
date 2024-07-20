import React, { useContext, useState } from "react";
import { AllDataContext } from "../../contexts/AllDataContext";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const QuantityAdder = () => {
  const { setDecrease, setIncrease, amount } = useContext(AllDataContext);

  return (
    <div className="flex gap-4">
      <div className="flex gap-2">
        <button
          className="flex items-center"
          onClick={() => {
            setDecrease();
          }}
        >
          <FaMinus />
        </button>
        <div className=" p-2">{amount}</div>
        <button
          className="flex items-center"
          onClick={() => {
            setIncrease();
          }}
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default QuantityAdder;
