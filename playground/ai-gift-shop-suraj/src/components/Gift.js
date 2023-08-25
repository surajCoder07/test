import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import ShimmerCard from "./ShimmerCard";
const Gift = () => {
  const [gifts, setGifts] = useState([]);
  const data = useParams();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://serpapi.com/search.json?engine=google_shopping&q=${
          data?.relationship + "+" + data?.occasion
        }+forage+${20}+under+${3000}&google_domain=google.com&gl=in&api_key=895ccf51e332986910d5a76a87c9f164743c5d85a11aa7fee7afd1c3dbfd44fa`
      );
      const result = await response.json();
      setGifts(result.shopping_results);
    } catch (error) {
      console.error(error);
      return error;
    }
  };
  return (
    <div className="bg-primary-meganta min-h-screen min-w-full py-4 ">
      <Link to={"/"} className="inline-block">
        <BsArrowLeftCircle size={"2em"} color="white" className="mx-8" />
      </Link>
      <h1 className="text-white w-full text-center font-medium text-3xl ">
        Gifts
      </h1>
      {gifts.length === 0 ? (
        <ShimmerCard />
      ) : (
        <div className=" flex justify-between flex-wrap  gap-4 p-8 max-sm:justify-center">
          {gifts?.map((gift) => {
            return <Card data={gift} key={gift?.position} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Gift;
