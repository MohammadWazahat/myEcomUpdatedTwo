import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const AdminUpdateProduct = () => {
  const { id } = useParams();

  const [user, setUser] = useState({
    brand_name: "",
    model_name: "",
    cover_image: "",
    images: [],
    price: "",
    stock: "",
    color: [],
    storage: [],
    ram: [],
    processor: "",
    camera_rear: "",
    camera_front: "",
    display: "",
    battery: "",
    rating: "",
    rating_count: "",
  });

  useEffect(() => {
    axios.get(`http://localhost:3010/users/` + id).then((res) => {
      setUser(res.data);
    });
  }, [id]);

  // console.log(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    // console.log(user);
  };

  const navigate = useNavigate();
  const submitForm = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:3010/users/` + id, user);
    navigate("/adminGetAllProducts");
  };

  return (
    <div>
      <div>
        <div className=" ">
          <Link to="/adminGetAllProducts">Admin All Products</Link>
        </div>
        i am upload product
        <div>
          <form onSubmit={submitForm} className="max-w-sm mx-auto">
            <div className="mb-5">
              <label
                htmlFor="brand_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                brand-name
              </label>
              <input
                type="text"
                id="brand_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="brand_name"
                name="brand_name"
                value={user.brand_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="model_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                model_name
              </label>
              <input
                type="text"
                id="model_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="model_name"
                name="model_name"
                value={user.model_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="cover_image"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                cover_image
              </label>
              <input
                type="text"
                id="cover_image"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="cover_image"
                name="cover_image"
                value={user.cover_image}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                price
              </label>
              <input
                type="text"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="price"
                name="price"
                value={user.price}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="stock"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                stock
              </label>
              <input
                type="text"
                id="stock"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="stock"
                name="stock"
                value={user.stock}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="rating"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                rating
              </label>
              <input
                type="text"
                id="rating"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                placeholder="rating"
                name="rating"
                value={user.rating}
                onChange={handleChange}
              />
            </div>
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
  );
};

export default AdminUpdateProduct;
