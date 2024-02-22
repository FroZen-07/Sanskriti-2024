import React from "react";

import dynamic from "next/dynamic";

const EventTimeline = dynamic(() => import("../components/EventTimeline"), {
  ssr: false,
});
const Timeline = () => {
  return (
    <div className='w-full min-h-screen md:p-16 flex flex-col  items-center overflow-hidden relative gap-2'>
      <div>
        <h1
          className='SanskritiFont text-transparent font-extrabold text-5xl md:text-8xl leading-none text-center py-8
         bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-500 select-none'>
           event timeline 
        </h1>
      </div>
      <EventTimeline />
    </div>
  );
};

export default Timeline;
