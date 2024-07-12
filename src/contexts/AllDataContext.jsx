import { createContext, useEffect, useReducer, useState } from "react";
import reducer from "../reducers/AllDataReducer";
import React from "react";
import Data from "../DummyProducts.json";
import axios from "axios";

export const AllDataContext = createContext();

const DataProvider = ({ children }) => {

  // useEffect(() => {
  //   const fetchData = async () => {
  //     dispatch({ type: "SET_LOADING" });
  //     try{
  //       const res = await axios.get("http://localhost:3010/users");
  //       // setMyUser(res.data);
  //       const products = await res.data ;
  //       dispatch({
  //         type: "SET_MY_DATA",
  //         payload: products,
  //       });
  //     }catch(err){
  //       dispatch({ type: "SET_ERROR" });
  //     }   
  //   };
  //   fetchData();
  // }, []);

  const initialState = { 
    Data: Data, 
    // isLoading : false ,
    // isError : false ,
    // products : [] ,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const myData = state.Data;
  // const isLoading  = state.isLoading ;
  // const isError  = state.isError ;
  // const products = state.products;

  // const myProductData = state.newData;
  // console.log(state);
  // console.log(myProductData);

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
        // isLoading  : isLoading ,
        // isError : isError ,
        // products : products ,
        // myProductData: myProductData,
      }}
    >
      {children}
    </AllDataContext.Provider>
  );
};

export default DataProvider;
