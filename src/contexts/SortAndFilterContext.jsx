import { createContext, useContext, useReducer, useState } from "react";
import reducer from "../reducers/SortAndFilterReducer";
import { AllDataContext } from "./AllDataContext";

export const SortAndFilterContext = createContext();

const SortAndFilterProvider = ({ children }) => {
  const { myData } = useContext(AllDataContext);
  const initialState = myData;
  const [state, dispatch] = useReducer(reducer, initialState);

  const SortAscRed = () => {
    // console.log("i m clicked");
    dispatch({
      type: "ASCENDING",
      payload: [...state],
    });
  };

  const SortDescRed = () => {
    // console.log("i m clicked");
    dispatch({
      type: "DESCENDING",
      payload: [...state],
    });
  };

  const SortLowestRed = () => {
    // console.log("i m clicked");
    dispatch({
      type: "LOWEST",
      payload: [...state],
    });
  };
  const SortHighestRed = () => {
    // console.log("i m clicked");
    dispatch({
      type: "HIGHEST",
      payload: [...state],
    });
  };

  //for filtering data

  const newData = state.map((item) => {
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
      }}
    >
      {children}
    </SortAndFilterContext.Provider>
  );
};

export default SortAndFilterProvider;
