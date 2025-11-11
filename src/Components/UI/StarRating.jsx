import { useState } from "react";
import { FaStar } from "react-icons/fa";

export const StarRating = ({ totalStars = 5,  rate}) => {
  const [rating, setRating] = useState(rate);       
  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <FaStar
            key={index}
            size={30}
            color={starValue <= (rating) ? "#ffc107" : "#e4e5e9"}
            style={{ cursor: "pointer", transition: "color 0.2s" }}
          />
        );
      })}
    </div>
  );
};
