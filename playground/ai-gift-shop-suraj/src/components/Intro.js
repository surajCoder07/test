import React from "react";

const Intro = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-10 p-5  max-sm:gap-5 text-center max-sm:py-3">
      <h1 className="text-primary-text z-10 text-6xl  font-bold max-sm:text-3xl">
        <strong className="">Ai</strong> Curated Gift Ideas
      </h1>
      <div className="flex w-[80%] leading-10">
        <p className="text-gray-300 text-xl max-sm:text-sm">
          Our AI-powered tool will guide you in choosing the perfect gift when
          you're unsure about what to buy. Simply fill out the form below with
          information about the recipient and your budget , and we'll suggest a
          curated list of gifts!
        </p>
      </div>
    </div>
  );
};

export default Intro;
