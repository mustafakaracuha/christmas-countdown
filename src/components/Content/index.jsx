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
    <div className="w-auto h-full relative flex flex-col items-center justify-center">
      <img
        width={400}
        src={cloud1}
        className="absolute z-50 -left-60 top-10 opacity-80 slide-in-left"
      />
      <img
        width={300}
        src={cloud2}
        className="absolute z-50 -right-40 top-10 opacity-80 slide-in-right"
      />
      <img
        width={250}
        src={cloud3}
        className="absolute z-50 left-44 -top-10 opacity-80 slide-in-top"
      />
      <img
        width={960}
        src={tree}
        className="z-50 mt-[7rem] max-sm:mt-[23rem] select-none"
      />
      <img
        width={100}
        src={box3}
        id="my-canvas3"
        className="absolute bottom-1 z-50 left-[9rem] max-sm:left-[8rem] max-sm:w-14 bounce-in-top"
      />
      <img
        width={100}
        src={box1}
        className="absolute bottom-0 z-50 left-[15rem] max-sm:left-[5rem] max-sm:w-14 bounce-in-top"
      />
      <img  
        width={100}
        src={box2}
        className="absolute -bottom-5 z-50 left-[11rem] max-sm:left-[7rem] max-sm:w-14 bounce-in-top"
      />
      <img
        width={180}
        src={snowman}
        className="absolute -bottom-5 z-50 right-[5rem] max-sm:right-[2rem] max-sm:w-32 cursor-pointer transition-all duration-300 hover:rotate-6"
      />
      <Card open={open} setOpen={setOpen} />
      <div className="w-screen h-20 fixed flex items-center justify-center bottom-0 bg-white"></div>
    </div>
  );
};

export default index;
