import React, { useState } from "react";

import tree from "../../assets/2.png";
import box1 from "../../assets/3.png";
import box2 from "../../assets/4.png";
import box3 from "../../assets/5.png";
import snowman from "../../assets/6.png";

import cloud1 from "../../assets/cloud/1.png";
import cloud2 from "../../assets/cloud/2.png";
import cloud3 from "../../assets/cloud/3.png";

import Card from "../Card";

const index = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <img
          width={400}
          src={cloud1}
          className="absolute z-50 left-20 max-sm:hidden top-10 opacity-80 slide-in-left"
        />
        <img
          width={300}
          src={cloud2}
          className="absolute z-50 right-40 top-10 opacity-80 slide-in-right"
        />
        <img
          width={250}
          src={cloud3}
          className="absolute z-50 left-[27rem] max-sm:left-[15rem] top-32 opacity-80 slide-in-top"
        />
        <img
          width={960}
          src={tree}
          className="z-50 fixed mt-[7rem] sm:mt-[16rem] max-sm:mt-[23rem] md:mt-[7rem] lg:mt-[7rem] select-none"
        />
        <div className="w-20 h-auto max-sm:absolute bg-red-400 max-sm:left-[0rem] md:bottom-0 max-sm:bottom-0">
        <img
          width={100}
          src={box3}
          id="my-canvas3"
          className="absolute bottom-20 z-50 sm:left-[12rem]  md:left-[17rem] lg:left-[25rem] xl:left-[38rem] max-sm:left-[8rem] max-sm:w-14 bounce-in-top"
        />
        <img
          width={100}
          src={box1}
          className="absolute bottom-16 z-50 sm:left-[9rem] md:left-[13rem] lg:left-[20em] xl:left-[34rem] max-sm:left-[5rem] max-sm:w-14 bounce-in-top"
        />
        <img
          width={100}
          src={box2}
          className="absolute bottom-10 z-50 sm:left-[6rem] md:left-[10rem]  lg:left-[18rem] xl:left-[30rem] max-sm:left-[7rem] max-sm:w-14 bounce-in-top"
        />
        </div>
        <img
          width={180}
          src={snowman}
          className="absolute bottom-20 z-50 sm:right-[3rem] md:right-[10rem] lg:right-[18rem] xl:right-[30rem] max-sm:right-[2rem] max-sm:w-32 cursor-pointer transition-all duration-300 hover:rotate-6"
        />
        <Card open={open} setOpen={setOpen} />
      </div>
      <div className="w-full h-20 absolute bottom-0 bg-white"></div>
    </div>
  );
};

export default index;
