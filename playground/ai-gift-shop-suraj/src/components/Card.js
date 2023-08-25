import React from "react";
import { GoVerified } from "react-icons/go";

const Card = ({ data }) => {
  return (
    <a href={data?.link} target="blank">
      <div className="w-[210px] text-gray-200  flex-shrink-0 rounded-sm duration-700 hover:scale-105 ">
        <div>
          <img
            src={data?.thumbnail}
            alt=""
            className="w-full h-[150px] object-cover object-top rounded-sm"
          />
        </div>
        <div className="py-2 px-1">
          <h1 className=" font-medium">
            {data?.title.length > 30
              ? data?.title.slice(0, 22) + "..."
              : data?.title}
          </h1>
          <span className="text-gray-400 text-sm">
            {data?.source}{" "}
            <GoVerified size={"0.9em"} className="inline-block" />
          </span>
          <div className="flex justify-between items-center my-3">
            <span>{data?.price}</span>
            <span className="bg-white  w-1 h-1 rounded-full"></span>
            <span className="text-xs">
              {data?.delivery.length > 20
                ? data?.delivery.slice(0, 16) + "..."
                : data?.delivery}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
