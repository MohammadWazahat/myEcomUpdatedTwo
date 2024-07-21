import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import StarRating from "../viewProduct/StarRating";

const AdminReadSingleProduct = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    axios
      .get(`http://localhost:3015/users/myProducts/` + id)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // console.log(data);

  return (
    <div>
      <div>
        <div className="flex justify-center text-2xl font-medium mt-6 mx-2">
          Admin Product Details
        </div>
   <div>
   <div className="mt-12 flex flex-col sm:flex-row gap-12 m-4 p-2 justify-center items-center ">
        
        <div className="brd h-96 w-96 flex justify-center items-center ">
          <div>
            <img className="h-96 w-96" src={data.cover_image} alt="" />
          </div>
        </div>
        <div>
          <div className=" flex sm:flex-col justify-center items-center">
            <img src="" alt="" className="h-16 w-16 m-2" />
            <img src="" alt="" className="h-16 w-16 m-2" />
            <img src="" alt="" className="h-16 w-16 m-2" />
            <img src="" alt="" className="h-16 w-16 m-2" />
          </div>
        </div>
        <div className=" sm: w-96 ">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <div className="text-2xl font-medium">
                {data.brand_name} {data.model_name}
              </div>
              <div className="text-yellow-800">
                ( {data.color}, {data.storage}GB, {data.ram}GB )
              </div>
            </div>
            <div className="flex items-center gap-3">
              {/* <div className="text-xl">
                <StarRating {...data} />
              </div> */}
              <div className="bg-slate-200 text-sm ">
                {data.rating_count} rating{" "}
              </div>
            </div>
            <div className="text-red-800 font-semibold text-xl">
              {data.price} $
            </div>
            <div>{data.description}</div>
            <div>Internal Storage :{data.storage}GB</div>
            <div>RAM : {data.ram}GB</div>            
            <div>{data.color}</div>
            <div>{data.camera_front} MP - Front Camera</div>
            <div>{data.camera_rear}MP - Rear Camera</div>
            <div>{data.processor} Processor</div>
            <div>stock {data.stock}</div>
            <div>{data.battery} </div>
          </div>
        </div>
      </div>
   </div>
        <div>
          <Link
           className="brd mx-12 buttonTwo flex justify-center items-center sm:justify-start py-2 "
           to={`/adminUpdateProduct/` + data._id}
          >
            Update Product Details
          </Link>
        </div>
      </div>
      <hr className="horizon border border-slate-800 mt-32  " />
    </div>
  );
};

export default AdminReadSingleProduct;
