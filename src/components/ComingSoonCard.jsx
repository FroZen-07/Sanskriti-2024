import React from "react";
import Image from "next/image";
import hourglass from "../../public/assets/hourglass.gif";
const ComingSoonCard = () => {
  return (
    <div className='max-w-screen md:w-screen group cursor-pointer flex flex-col drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out items-center'>
      <div className='w-full flex gap-2 items-center'>
        <div className='w-full h-full flex justify-center items-center rounded-sm text-4xl md:text-8xl  SanskritiFont leading-none tracking-wider text-red-700 text-center'>
          Coming Soon...
        </div>
      </div>
    </div>
  );
};

export default ComingSoonCard;
