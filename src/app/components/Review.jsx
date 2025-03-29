import React from "react";
import { FaStar } from "react-icons/fa6";

const Review = ({ name, rating, text }) => {
  return (
    <div>
      <div className="flex items-center my-2">
        <div className="flex items-center">
          {/* Star Rating */}
          {[...Array(4)].map((_, index) => (
            <FaStar key={index} style={{color:"gold", width:"20px"}} />
          ))}
        </div>
        <span className="ml-2 font-semibold">{name}</span>
      </div>
      <p className="text-gray-600">{text}</p>
    </div>
  );
};

export default Review;
