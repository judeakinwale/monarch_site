import React from "react";
import { Star, StarHalf } from "lucide-react"; // Assuming you use Lucide icons

const ReviewStars = ({
  score = 0,
  fill = "yellow",
  textClass = "text-gray-500",
}) => {
  const maxStars = 5;
  const fullStars = Math.floor(score);
  const hasHalfStar = score % 1 !== 0;

  return (
    <div className="flex space-x-1">
      {Array.from({ length: maxStars }, (_, index) => {
        if (index < fullStars) {
          return (
            <Star fill={fill} key={index} className={`w-6 h-6 ${textClass}`} />
          );
        } else if (index === fullStars && hasHalfStar) {
          return <StarHalf fill={fill} className={`w-6 h-6 ${textClass}`} />;
        } else {
          return <Star key={index} className={`w-6 h-6 ${textClass}`} />;
        }
      })}
    </div>
  );
};

export default ReviewStars;
