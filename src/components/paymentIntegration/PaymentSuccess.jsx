import React from "react";
import { useSearchParams, Link } from "react-router-dom";

const PaymentSuccess = () => {
  const seachQuery = useSearchParams()[0];

  const referenceNum = seachQuery.get("reference");
  return (
    <div className="flex justify-center items-center mt-32">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="text-green-600 text-4xl">Order Successfull</div>
        <div>
          Reference No.{" "}
          <span className="text-blue-600 font-medium text-xl">
            {" "}
            {referenceNum}
          </span>
        </div>
        <div className=" flex justify-end">
          <Link to="/">
            <button className="buttonOne p-2 m-12 px-8 text-xl">
              Shop More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
