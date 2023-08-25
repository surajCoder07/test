import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ShimmerCard = () => {
  return (
    <div className="flex justify-between flex-wrap gap-5 px-10">
      {Array(10)
        .fill(" ")
        .map(() => {
          return (
            <Skeleton key={Math.random()} width={"190px"} height={"210px"} baseColor="#D3D3D3" />
          );
        })}
    </div>
  );
};

export default ShimmerCard;
