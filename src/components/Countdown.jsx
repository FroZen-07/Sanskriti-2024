import React from "react";
import { useState, useEffect } from "react";
const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "March, 30, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className='timer w-full md:h-screen text-center flex flex-col justify-center items-center overflow-hidden relative p-10 md:p-0'>
      <div className='grid md:grid-cols-4 grid-cols-2 gap-8 text-red-700 SanskritiFont '>
        <div
          className='border border-red-700 rounded-3xl flex flex-col justify-center items-center min-w-[8rem] min-h-[12rem]  md:w-[20rem] md:h-[28rem] drop-shadow-lg'>
          <p className='text-[5rem] md:text-[10rem]'>
            {days > 9 ? days : `0${days}`}
          </p>
          <p className='text-3xl md:text-6xl'>{days === 1 ? `day` : `days`}</p>
        </div>
        <div className=' border border-red-700 rounded-3xl flex flex-col justify-center items-center min-w-[8rem] min-h-[12rem]  md:w-[20rem] md:h-[28rem] drop-shadow-lg'>
          <p className='text-[5rem] md:text-[10rem]'>
            {hours > 9 ? hours : `0${hours}`}
          </p>
          <p className='text-3xl md:text-6xl'>
            {hours === 1 ? `hour` : `hours`}
          </p>
        </div>
        <div className=' border border-red-700 rounded-3xl flex flex-col justify-center items-center min-w-[8rem] min-h-[12rem]  md:w-[20rem] md:h-[28rem] drop-shadow-lg'>
          <p className='text-[5rem] md:text-[10rem]'>
            {minutes > 9 ? minutes : `0${minutes}`}
          </p>
          <p className='text-3xl md:text-6xl'>
            {minutes === 1 ? `minute` : `minutes`}
          </p>
        </div>
        <div className='border border-red-700 rounded-3xl flex flex-col justify-center items-center min-w-[8rem] min-h-[12rem]  md:w-[20rem] md:h-[28rem] drop-shadow-lg'>
          <p className='text-[5rem] md:text-[10rem]'>
            {seconds > 9 ? seconds : `0${seconds}`}
          </p>
          <p className='text-3xl md:text-6xl'>
            {seconds === 1 ? `second` : `seconds`}
          </p>
        </div>
  </div>
    </div>
  );
};

export default Countdown;