import { createContext, useReducer, useState } from "react";
import reducer from "../reducers/AllDataReducer";
import React from "react";
import Data from "../DummyProducts.json";

export const AllDataContext = createContext();

const DataProvider = ({ children }) => {
  const initialState = { Data: Data };
  const [state, dispatch] = useReducer(reducer, initialState);
  const myData = state.Data;

  const [viewData, setViewData] = useState();
  const AddToPage = (x) => {
    // console.log(x);
    setViewData({ ...x });
    // console.log(viewData);
  };
  // console.log(viewData);

  const [amount, setAmount] = useState(1);
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrease = () => {
    // console.log(amount)
    const stock = viewData.quantity;
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <AllDataContext.Provider
      value={{
        state: state,
        myData: myData,
        setIncrease: setIncrease,
        setDecrease: setDecrease,
        amount: amount,
        AddToPage: AddToPage,
        viewData: viewData,
      }}
    >
      {children}
    </AllDataContext.Provider>
  );
};

export default DataProvider;
