import { createContext, useContext, useEffect, useReducer, useState } from "react";
import reducer from "../reducers/SortAndFilterReducer";
import { AllDataContext } from "./AllDataContext";
import axios from "axios";

export const SortAndFilterContext = createContext();

const SortAndFilterProvider = ({ children }) => {

  const { myData  } = useContext(AllDataContext);
  
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "SET_LOADING" });
      try{
        const res = await axios.get("http://localhost:3010/users");
        // setMyUser(res.data);
        const products = await res.data ;
        dispatch({
          type: "SET_MY_DATA",
          payload: products,
        });
      }catch(err){
        dispatch({ type: "SET_ERROR" });
      }   
    };
    fetchData();
  }, []);

  const initialState = { 
    myData : myData ,
    isLoading : false ,
    isError : false ,
    products : [] ,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  
  const isLoading  = state.isLoading ;
  const isError  = state.isError ;
  const products = state.products;






  // const initialState = myData;


  // const [state, dispatch] = useReducer(reducer, initialState);
console.log(initialState)
console.log(state)

  const SortAscRed = () => {
    // console.log("i m clicked");
    dispatch({
      type: "ASCENDING",
      payload: [...state.products],
    });
  };

  const SortDescRed = () => {
    // console.log("i m clicked");
    dispatch({
      type: "DESCENDING",
      payload: [...state.products],
    });
  };

  const SortLowestRed = () => {
    // console.log("i m clicked");
    dispatch({
      type: "LOWEST",
      payload: [...state.products],
    });
  };
  const SortHighestRed = () => {
    // console.log("i m clicked");
    dispatch({
      type: "HIGHEST",
      payload: [...state.products],
    });
  };

  //for filtering data

  const newData = state.products.map((item) => {
    return item.brand;
  });
  // console.log(newData);

  // to merge all array in one
  const x = newData.flat();
  //   console.log(x)
  const Y = [...new Set(x)];
  // console.log(Y);
  const [arr, setArr] = useState(Y);

  const FilterByBrand = (x) => {
    // console.log(x);
    dispatch({
      type: "FILTER_BY_BRAND",
      payload: {
        pay1: initialState,
        pay2: x,
      },
    });
  };

  return (
    <SortAndFilterContext.Provider
      value={{
        SortAscRed: SortAscRed,
        SortDescRed: SortDescRed,
        SortLowestRed: SortLowestRed,
        SortHighestRed: SortHighestRed,
        state: state,
        arr: arr,
        FilterByBrand: FilterByBrand,
        isLoading  : isLoading ,
        isError : isError ,
        products : products ,
      }}
    >
      {children}
    </SortAndFilterContext.Provider>
  );
};

export default SortAndFilterProvider;
