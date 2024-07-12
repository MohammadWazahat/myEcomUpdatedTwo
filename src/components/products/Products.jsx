import React, { useContext, useEffect, useReducer, useState } from "react";
import { AllDataContext } from "../../contexts/AllDataContext";
import SingleProduct from "../singleProduct/SingleProduct";
import { NavLink } from "react-router-dom";
import "./Products.css";
import { SortAndFilterContext } from "../../contexts/SortAndFilterContext";
import { CartContext } from "../../contexts/CartContext";

const Products = () => {
  const { AddToPage } = useContext(AllDataContext);
  const { AddToMyCart } = useContext(CartContext);
 
  const [mode, setMode] = useState(true);
  const {
    state,
    SortAscRed,
    SortDescRed,
    SortLowestRed,
    SortHighestRed,
    arr,
    FilterByBrand,
  } = useContext(SortAndFilterContext);

  return (
    <>
      <div className="flex justify-center items-center m-4 p-4 text-2xl">
        Choose Your Brand
      </div>
      <div className=" grid grid-cols-4 m-2 ">
        {arr.map((item, index) => {
          return (
            <button
              className="m-2 p-2"
              key={index}
              onClick={() => FilterByBrand(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
      <hr className="horizon boder border-slate-800 mx-4" />
      <div className="flex gap-4 m-2 p-4">
        <button className="p-3 px-8" onClick={() => setMode(true)}>
          Grid
        </button>
        <button className="p-3 px-8" onClick={() => setMode(false)}>
          list
        </button>
      </div>
      <hr className="horizon boder border-slate-800 mx-4" />
      <div className="flex flex-col gap-4 m-2 p-4">
        <button className="p-3 px-8" onClick={() => SortLowestRed()}>
          Low stock first
        </button>
        <button className="p-3 px-8" onClick={() => SortHighestRed()}>
          High Stock first
        </button>
        <button className="p-3 px-8" onClick={() => SortAscRed()}>
          AscendingRed
        </button>
        <button className="p-3 px-8" onClick={() => SortDescRed()}>
          DescendingRed
        </button>
      </div>
      <hr className="horizon boder border-slate-800 mx-4" />

      <div
        className={
          mode
            ? `flex flex-col sm:grid sm:grid-cols-3 gap-4 mx-16`
            : `flex flex-col gap-4 mx-16 `
        }
      >
        {state.map((item) => {
          return (
            <div className="brd m-4 my-8" key={item.id}>
              <SingleProduct {...item} />
              <div className="flex justify-center items-center gap-4 m-2 p-2 ">
                <button
                  className="flex justify-center items-center p-2 px-8"
                  onClick={() => AddToMyCart({ ...item })}
                >
                  Add to cart
                </button>
                <NavLink to={`/viewProduct/${item.id}`}>
                  <button
                    className="p-2"
                    onClick={() => AddToPage({ ...item })}
                  >
                    More details ...
                  </button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
