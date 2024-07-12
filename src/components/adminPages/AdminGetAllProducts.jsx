import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AdminSingleCard from "./AdminSingleCard";

const AdminGetAllProducts = () => {
  const [myUser, setMyUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:3010/users");
      setMyUser(res.data);
    };
    fetchData();
  }, []);

  // console.log(myUser);

  return (
    <div>
      <div>
        <div className="flex justify-center items-center text-2xl ">
          Admin product page
        </div>

        <div className=" ">
          <Link to="/adminAddProduct">Admin Add Products</Link>
        </div>
        <div>
          <div>
            {myUser.map((user, index) => {
              return (
                <div className="" key={index}>
                  <div className=" m-2 ">
                    <AdminSingleCard {...user} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminGetAllProducts;
