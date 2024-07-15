import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AdminSingleCard = (user) => {
  // console.log(user);
  // console.log(user._id);

  const navigate = useNavigate();
  const handleDelete = (id) => {
    // window.confirm ask for confirmation of deletion
    const confirm = window.confirm("would you like to delete the user");
    if (confirm) {
      axios
        .delete(`http://localhost:3015/users/myProducts/` + id)
        .then((res) => {
          location.reload();
          //   navigate("/") // reload us to the same page
        })
        .catch((err) => console.log(err));
    }
    console.log(id);
  };

  return (
    <div>
      i m Admin single card
      <div>
        <div className="w-full max-w-sm bg-white border border-gray-700 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link to="#">
            <img
              className=" w-96 h-48"
              src="data:image/jpeg;base64,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"
              alt="product image"
            />
          </Link>
          <div className="px-5 pb-5">
            <Link to="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {user.brand_name}brand name
              </h5>
            </Link>
            <div className="flex items-center mt-2.5 mb-5">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                star comes here
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                {user.rating} rating
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                {user.price}Price
              </span>
            </div>
           <div className="border border-slate-700 flex items-center">
           <div className="  m-2 p-2">
              <Link
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                to={`/adminSingleProduct/` + user._id}
              >
                Product Details
              </Link>
            </div>
            <div className=" border border-slate-200 m-2 p-2">
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={(e) => handleDelete(user._id)}
              >
                Delete Product
              </button>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSingleCard;
