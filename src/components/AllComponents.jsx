import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./cart/Cart";
import Home from "./home/Home";
import Products from "./products/Products";
import About from "./about/About";
import Navbar from "./header/Navbar";
import Footer from "./footer/Footer";
import ViewProduct from "./viewProduct/ViewProduct";
import AdminAddProduct from "./adminPages/AdminAddProduct";
import AdminGetAllProducts from "./adminPages/AdminGetAllProducts";
import AdminReadSingleProduct from "./adminPages/AdminReadSingleProduct";
import AdminUpdateProduct from "./adminPages/AdminUpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: "/allProducts",
    element: (
      <>
        <Navbar />
        <Products />
        <Footer />
      </>
    ),
  },
  {
    path: "/viewProduct/:id",
    element: (
      <>
        <Navbar />
        <ViewProduct />
        <Footer />
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
        <Navbar />
        <Cart />
        <Footer />
      </>
    ),
  },
  {
    path: "/adminAddProduct",
    element: (
      <>
        <Navbar />
        <AdminAddProduct />
        <Footer />
      </>
    ),
  },
  {
    path: "/adminGetAllProducts",
    element: (
      <>
        <Navbar />
        <AdminGetAllProducts />
        <Footer />
      </>
    ),
  },
  {
    path: "/adminSingleProduct/:id",
    element: (
      <>
        <Navbar />
        <AdminReadSingleProduct />
        <Footer />
      </>
    ),
  },
  {
    path: "/adminUpdateProduct/:id",
    element: (
      <>
        <Navbar />
        <AdminUpdateProduct />
        <Footer />
      </>
    ),
  },
]);

const AllComponents = () => {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default AllComponents;
