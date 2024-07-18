import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { SortAndFilterContext } from "../../contexts/SortAndFilterContext";

const Home = () => {
  const { products, myUser } = useContext(SortAndFilterContext);
  // console.log(products)
  // console.log(myUser);

  const newData = products.map((item) => {
    return item.brand_name;
  });
  // console.log(newData);

  // to merge all array in one
  const x = newData.flat();
  //   console.log(x)
  const Y = [...new Set(x)];
  // console.log(Y);

  return (
    <div>
      <div className="flex flex-col ">
        {!myUser ? (
          <div className="text-gray-950 m-32">
            <div>session expired </div>
            <div>
              please{" "}
              <span>
                <NavLink to="/logIn" className="text-blue-600">
                  logIn
                </NavLink>
              </span>
              {"  "}here
            </div>
          </div>
        ) : (
          Y.map((item, index) => {
            return (
              <div key={index}>
                <div
                  className=" flex border border-slate-700 m-6 mx-12 h-48 justify-center items-center "
                  // onClick={() => FilterByBrand(item)}
                >
                  <div className="textColorDark text-2xl">{item}</div>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="flex justify-center items-center ">
        <NavLink to="/allProducts">
          <button className=" p-3 px-5 m-2 ">Shop Now</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
