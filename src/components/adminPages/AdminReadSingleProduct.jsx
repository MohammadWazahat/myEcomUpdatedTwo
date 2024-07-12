import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const AdminReadSingleProduct = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    axios
      .get(`http://localhost:3010/users/` + id)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // console.log(data);

  return (
    <div>
      <div>
        <div className="flex justify-center items-center text-2xl ">
          Admin Single product detail page
        </div>
        <div className=" ">
          <Link to="/">Admin All Products</Link>
        </div>
        
        <div>Brand Name{data.brand_name} </div>
      <div>price {data.price} </div>
      <div>Stock {data.stock} </div>
      <div>Rating {data.rating} </div>
        <div>
          <Link
            className=" border border-slate-200 p-2 m-2"
            to={`/adminUpdateProduct/` + data.id}
          >
            Update Product Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminReadSingleProduct;
