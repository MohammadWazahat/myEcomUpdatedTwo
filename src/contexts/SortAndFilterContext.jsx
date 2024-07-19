import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import reducer from "../reducers/SortAndFilterReducer";
import { AllDataContext } from "./AllDataContext";
import axios from "axios";

export const SortAndFilterContext = createContext();

const SortAndFilterProvider = ({ children }) => {
  const { myData } = useContext(AllDataContext);
  const [myUser, setMyUser] = useState();
  // console.log(myUser);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "SET_LOADING" });
      try {
        // const res = await axios.get("http://localhost:3015/users/myProducts/");
        const res = await axios.get("http://localhost:3015/users/myProducts/", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("tks")}`,
          },
        });
        // console.log(res.data);
        setMyUser(res.data);
        const products = await res.data;
        dispatch({
          type: "SET_MY_DATA",
          payload: products,
        });
      } catch (err) {
        dispatch({ type: "SET_ERROR" });
        setMyUser(null);
      }
    };
    fetchData();
  }, []);

  const initialState = {
    myData: myData,
    isLoading: false,
    isError: false,
    products: [],
    productsByBrand: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const isLoading = state.isLoading;
  const isError = state.isError;
  const products = state.products;
  const productsByBrand = state.productsByBrand;

  const SortAscRed = () => {
    // console.log("i m clicked");
    dispatch({
      type: "ASCENDING",
      payload: products,
    });
  };

  const SortDescRed = () => {
    // console.log("i m clicked");
    dispatch({
      type: "DESCENDING",
      payload: products,
    });
  };

  const SortLowestRed = () => {
    // console.log("i m clicked");
    dispatch({
      type: "LOWEST",
      payload: products,
    });
  };

  const SortHighestRed = () => {
    // console.log("i m clicked");
    dispatch({
      type: "HIGHEST",
      payload: products,
    });
  };

  //for filtering data
  const newData = state.products.map((item) => {
    return item.brand_name;
  });
  // console.log(newData);

  // to merge all array in one
  const x = newData.flat();
  //   console.log(x)
  const Y = [...new Set(x)];
  // console.log(Y);
  const [arr, setArr] = useState(Y);
  // console.log(arr);

  const FilterByBrand = (x) => {
    // console.log(x);
    dispatch({
      type: "FILTER_BY_BRAND",
      payload: {
        pay1: products,
        pay2: x,
      },
    });
  };

  const AllProducts = () => {
    // console.log("i m clicked");
    dispatch({
      type: "ALL_PRODUCTS",
      payload: {
        pay1: products,
      },
    });
  };

  return (
    <SortAndFilterContext.Provider
      value={{
        state: state,
        isLoading: isLoading,
        isError: isError,
        products: products,
        productsByBrand: productsByBrand,
        SortAscRed: SortAscRed,
        SortDescRed: SortDescRed,
        SortLowestRed: SortLowestRed,
        SortHighestRed: SortHighestRed,
        AllProducts: AllProducts,
        FilterByBrand: FilterByBrand,
        arr: arr,
        newData: newData,
        Y: Y,
        myUser: myUser,
      }}
    >
      {children}
    </SortAndFilterContext.Provider>
  );
};

export default SortAndFilterProvider;
