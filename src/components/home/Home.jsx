import React, { useContext } from "react";
import { HomeContext } from "../../contexts/HomeContext";
import ProductByBrand from "../productByBrands/ProductByBrand";
import { NavLink } from "react-router-dom";

const Home = () => {
  const { arr, FilterByBrand } = useContext(HomeContext);

  return (
    <div>
      <div className="flex flex-col ">
        {arr.map((item, index) => {
          return (
            <div key={index}>
              <div
                className=" flex border border-slate-700 m-6 mx-12 h-48 justify-center items-center "
                onClick={() => FilterByBrand(item)}
              >
                <div className="textColorDark text-2xl">{item}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center ">
        <NavLink to="/allProducts">
          <button className=" p-3 px-5 m-2 ">Shop Now</button>
        </NavLink>
      </div>
      {/* <div>
        <ProductByBrand />
      </div> */}
    </div>
  );
};

export default Home;
