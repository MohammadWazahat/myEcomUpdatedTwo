import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AdminSingleCard from "./AdminSingleCard";

const AdminGetAllProducts = () => {
  const [myUser, setMyUser] = useState([]);

  useEffect(() => {
    console.log("i m useeffetct");
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3015/users/myProducts/", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("tks")}`,
          },
        });
        console.log(res.data);
        setMyUser(res.data);
      } catch (err) {
        console.log(err);
        setMyUser(null);
      }
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
            {!myUser ? (
              <div> session expired </div>
            ) : (
              myUser.map((user, index) => {
                return (
                  <div className=" " key={index}>
                    <AdminSingleCard {...user} />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminGetAllProducts;
