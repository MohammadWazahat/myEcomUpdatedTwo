import React from "react";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";

const StarRating = (viewData) => {
  const stars = viewData.rating ; 
  // console.log(viewData.rating)
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <div key={index}>
        <span >
          {stars >= index + 1 ? (
            <div>
              <FaStar />
            </div> 
          ) : stars >= number ? (
            <div>
             
              <FaRegStarHalfStroke />
            </div>
          ) : (
            <div>
              <CiStar />
            </div>
          )}
        </span>
      </div>
    );
  });
  return (
    <div>
      <div className="flex" >{ratingStar}</div>
    </div>
  );
};

export default StarRating;
