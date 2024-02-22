import React from "react";
import EventContainer from "../components/EventContainer";

const Events = ({ events }) => {
  return (
    <div className="w-full min-h-screen md:px-24 text-center flex flex-col justify-center items-center overflow-hidden relative">
      <h1 className="SanskritiFont font-extrabold text-5xl md:text-8xl leading-none text-center py-10 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-500 select-none">
        events
      </h1>
      <div className="flex justify-center items-center">
        <EventContainer events={events} />
      </div>
    </div>
  );
};

export default Events;
