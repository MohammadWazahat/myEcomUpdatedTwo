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
      <div>
        <div className="w-full max-w-sm bg-white border border-gray-700 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link to="#">
            <img
              className=" w-96 h-48"
              src={user.cover_image}
              alt="product image"
            />
          </Link>
          <div className="px-5 pb-5">
            <Link to="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white m-2">
                {user.brand_name}
              </h5>
            </Link>
            <div className="flex items-center mt-2.5 mb-5 m-2">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                {user.rating}
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                {user.rating_count} rating
              </span>
            </div>
            <div className="flex items-center justify-between mb-2 ml-2">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                {user.price} $
              </span>
            </div>
            <div className=" flex items-center">
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
