import axios from "axios";
import { createContext, useEffect, useState } from "react";
import React from "react";

export const AllDataContext = createContext();

const DataProvider = ({ children }) => {
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
    //  console.log(viewData.stock)
    const stock = viewData.stock;
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:3015/users/myProducts/");
  //    console.log(res)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   };
  //   fetchData();
  // }, []);


  return (
    <AllDataContext.Provider
      value={{
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
