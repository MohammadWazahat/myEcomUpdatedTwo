import { createContext, useContext, useReducer, useState } from "react";
import { AllDataContext } from "./AllDataContext";
import reducer from "../reducers/HomeReducer";
export const HomeContext = createContext();

const HomeProvider = ({ children }) => {
  const { myData } = useContext(AllDataContext);
  const initialState = myData;
  const [state, dispatch] = useReducer(reducer, initialState);

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
    console.log(x);
    dispatch({
      type: "FILTER_BY_BRAND",
      payload: {
        pay1: initialState,
        pay2: x,
      },
    });
  };

  // console.log(state);
  return (
    <HomeContext.Provider
      value={{
        state: state,
        arr: arr,
        FilterByBrand: FilterByBrand,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default HomeProvider;
