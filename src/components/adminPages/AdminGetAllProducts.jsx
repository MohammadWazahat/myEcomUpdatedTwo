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
        <div className="flex justify-center items-center text-2xl m-12">
          Admin Product Page
        </div>

        <div className=" flex justify-end">
          <Link to="/adminAddProduct">
          <button className="buttonOne p-2 m-12 ">Admin Add Product</button>
          </Link>
        </div>
        <div>
          <div className="flex flex-col justify-center gap-8 sm:grid sm:grid-cols-3 sm:gap-8 ">
            {!myUser ? (
              <div> session expired </div>
            ) : (
              myUser.map((user, index) => {
                return (
                  <div className="flex justify-center " key={index}>
                    <AdminSingleCard {...user} />
                  </div>
                );
              })
            )}
          </div>
          <hr className="horizon border border-slate-800  mt-24" />
        </div>
      </div>
    </div>
  );
};

export default AdminGetAllProducts;
