import React from "react";
import { designingart, explorecommunity, ff3d } from "../../assets";

const ExploreWork = () => {
  return (
    <div className="w-full h-[100vh] ">
      <div className="mb-20">
        <h1 className="font-semibold text-4xl border p-3 rounded-lg text-[#9400D3] text-center w-50 ml-80 mr-80">
          Our Work
        </h1>
      </div>
      <div className="flex gap-20">
        <div className="w-1/2 ">
          <div className="flex ml-10 art border p-5">
            <img src={ff3d} alt="" className="w-[50%] h-[50%]" />
            <img src={designingart} alt="" className="w-[50%] h-[50%]" />
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex text-3xl">
            <span className="text-pink-600 font-bold"> | </span>
            <h1 className="mr-3 ml-3 font-semibold">Showcase</h1>
            <span className=""> of Customized T-Shirt Artistry</span>
          </div>
          <div className="description mt-5">
            <p className="leading-loose text-lg">
              Experience the art of self-expression like never before. Our website
              empowers you to design, personalize, and order your own custom t-shirts
              effortlessly. Choose from a rich palette of colors, graphics, and fonts
              to bring your vision to life. We handle the printing and shipping,
              ensuring your unique creation is delivered straight to your door.
              Elevate your style and make a statement with personalized t-shirts
              tailored exclusively for you.
            </p>
          </div>
          <button className="border p-3 bg-pink-500 rounded-full w-[30%] mt-10 font-normal hover:bg-violet-800">
            Join us{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreWork;
