import React from "react";
import EventContainer from "../components/EventContainer";

const Events = ({ events }) => {
  return (
    <div className="'w-full min-h-screen md:px-24 w-full text-center flex flex-col justify-center items-center overflow-hidden relative bg-gradient-to-r from-amber-300 to-amber-100">
      <h1
        className='SanskritiFont text-transparent bg-gradient-to-r from-red-500 via-orange-500 to-red-500
      font-extrabold text-5xl md:text-8xl leading-none text-center py-8 select-none'>
         events 
      </h1>
      <EventContainer events={events} />
    </div>
  );
};

export default Events;
