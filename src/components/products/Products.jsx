import React, { useContext, useState } from "react";
import { AllDataContext } from "../../contexts/AllDataContext";
import { NavLink } from "react-router-dom";
import { SortAndFilterContext } from "../../contexts/SortAndFilterContext";
import { CartContext } from "../../contexts/CartContext";
import SingleCardProd from "./SingleCardProd";

const Products = () => {
  const { AddToPage } = useContext(AllDataContext);
  const { AddToMyCart } = useContext(CartContext);

  const [mode, setMode] = useState(true);
  const {
    SortAscRed,
    SortDescRed,
    SortLowestRed,
    SortHighestRed,
    AllProducts,
    Y: Y,
    productsByBrand,
    FilterByBrand,
    isLoading,
    isError,
  } = useContext(SortAndFilterContext);

  // console.log(state)
  // console.log(newData);
  if (isLoading) {
    return <div>...Loading</div>;
  }

  if (isError) {
    return <div>Error ..............</div>;
  }

  return (
    <div>
      <div>
        <div className="mainHeading flex justify-center items-center m-4 p-4 text-2xl font-bold">
          Choose Your Brand
        </div>
        <div className="  grid grid-cols-3 m-2 gap-2">
          {Y.map((item, index) => {
            return (
              <button
                className="buttonOne m-2 p-2 rounded "
                key={index}
                onClick={() => FilterByBrand(item)}
              >
                {item}
              </button>
            );
          })}
        </div>
        <div className="flex justify-center items-center mt-24 mb-8">
          <button
            className="buttonTwo m-2 p-2 px-4"
            onClick={() => AllProducts()}
          >
            All Products
          </button>
        </div>
        <hr className="horizon boder border-slate-800 mx-4" />

        <div className="flex justify-around p-4">
          <button
            className="buttonThree p-3"
            onClick={() => setMode(true)}
          >
            Grid View
          </button>
          <button
            className="buttonThree p-3 "
            onClick={() => setMode(false)}
          >
            List View
          </button>
        </div>
        <hr className="horizon boder border-slate-800 mx-4" />
        <div className="flex flex-col gap-6 m-2 p-4">
          <div className="flex justify-center items-center gap-6 ">
            <button
              className="buttonThree "
              onClick={() => SortLowestRed()}
            >
              Low to High
            </button>
            <button
              className="buttonThree "
              onClick={() => SortHighestRed()}
            >
              High to Low
            </button>
          </div>
          <div className="flex justify-center items-center gap-6 ">
            <button
              className="buttonThree "
              onClick={() => SortAscRed()}
            >
              A to Z
            </button>
            <button
              className="buttonThree "
              onClick={() => SortDescRed()}
            >
              Z to A
            </button>
          </div>
        </div>
        <hr className="horizon border border-slate-800 mx-4" />

        <div
          className={
            mode
              ? `flex flex-col sm:grid sm:grid-cols-3 gap-8 mx-16 my-32`
              : `flex flex-col gap-4 mx-16 `
          }
        >
          {productsByBrand.map((item) => {
            return (
              <div className="cardOne border border-slate-800 rounded-xl" key={item._id}>
                <div className="">
                <SingleCardProd {...item} />
                </div>
                <div className="flex justify-center items-center gap-4 m-2 p-2 ">
                  <button
                    className="buttonThree flex justify-center items-center p-2 px-8"
                    onClick={() => AddToMyCart({ ...item })}
                  >
                    Add to cart
                  </button>
                  <NavLink to={`/viewProduct/${item.id}`}>
                    <button
                      className="buttonThree p-2"
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
      </div>
      <hr className="horizon border border-slate-800  mt-24" />
    </div>
  );
};

export default Products;
