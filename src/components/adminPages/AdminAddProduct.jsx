import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const AdminAddProduct = () => {
  const [values, setValues] = useState({
    brand_name: "",
    model_name: "",
    cover_image: "",
    images: "",
    price: "",
    stock: "",
    color: "",
    storage: "",
    ram: "",
    processor: "",
    rating: "",
    rating_count: "",
    description: "",
    camera_rear: "",
    camera_front: "",
    display: "",
    battery: "",
    amount: 1,
  });

  const handleChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const navigate = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();
    // console.log(values);
    axios
      .post("http://localhost:3015/users/myProducts/", values)
      .then((res) => {
        // console.log(res);
        // hook to navigate back to the page
        navigate("/adminGetAllProducts");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div>
        <div className="flex justify-center items-center  text-2xl font-medium mt-6 mx-2 ">
          Admin Create Product Page
        </div>
        <div>
          <div className="brd mx-2 mt-12 p-1 py-8">
            <form onSubmit={submitForm} className="max-w-sm mx-auto">
              <div className="mb-5">
                <label
                  htmlFor="brand_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Brand Name
                </label>
                <input
                  type="text"
                  id="brand_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="brand_name"
                  name="brand_name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="model_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Model Name
                </label>
                <input
                  type="text"
                  id="model_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="model_name"
                  name="model_name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="cover_image"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Add Cover Image
                </label>
                <input
                  type="text"
                  id="cover_image"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="cover_image"
                  name="cover_image"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  type="text"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="price"
                  name="price"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="stock"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Stock
                </label>
                <input
                  type="text"
                  id="stock"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="stock"
                  name="stock"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="rating"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Rating
                </label>
                <input
                  type="text"
                  id="rating"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  placeholder="rating"
                  name="rating"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="color"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Color
                </label>
                <input
                  type="text"
                  id="color"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  placeholder="color"
                  name="color"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="storage"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Storage
                </label>
                <input
                  type="text"
                  id="storage"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  placeholder="storage"
                  name="storage"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="ram"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  RAM
                </label>
                <input
                  type="text"
                  id="ram"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  placeholder="ram"
                  name="ram"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="processor"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Processor
                </label>
                <input
                  type="text"
                  id="rating"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  placeholder="processor"
                  name="processor"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="rating_count"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Rating Count
                </label>
                <input
                  type="text"
                  id="rating_count"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  placeholder="rating_count"
                  name="rating_count"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <input
                  type="text"
                  id="description"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  placeholder="description"
                  name="description"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="camera_rear"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Camera Rear
                </label>
                <input
                  type="text"
                  id="camera_rear"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  placeholder="camera_rear"
                  name="camera_rear"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="camera_front"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Camera Front
                </label>
                <input
                  type="text"
                  id="camera_front"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  placeholder="camera_front"
                  name="camera_front"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="display"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Display
                </label>
                <input
                  type="text"
                  id="display"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  placeholder="display"
                  name="display"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="battery"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Battery
                </label>
                <input
                  type="text"
                  id="battery"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  placeholder="battery"
                  name="battery"
                  onChange={handleChange}
                />
              </div>
              {/* <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
        </div> */}
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAddProduct;
