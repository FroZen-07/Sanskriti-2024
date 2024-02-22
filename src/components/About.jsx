import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div
      className="w-full md:min-h-screen text-center flex flex-col md:justify-center md:items-center overflow-hidden relative p-10 "
    >
      <div className="w-full">
        <h1
          className="SanskritiFont text-transparent font-extrabold text-4xl md:text-8xl leading-none text-center pb-8
         bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-500 select-none"
        >
           what is sanskriti ? 
        </h1>
        <div className="text-left flex  justify-center items-center">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="px-8 items-center hidden md:flex">
              <Image
                src="/assets/sankriti-logo.png"
                alt="Sanskriti Logo"
                width={400}
                height={400}
              />
            </div>
            <div className="flex justify-center items-center">
      {/* Image container */}
      <div className="absolute z-10 opacity-30 inline md:hidden">
        <Image
          src="/assets/sankriti-logo.png"
          alt="Sanskriti Logo"
          width={350}
          height={350}
        />
      </div>

      {/* Text container */}
      <div className="md:text-left text-center pb-8 md:pb-0 px-8 md:px-0 md:max-w-[48ch] first-letter:tracking-wider leading-tight text-sm md:text-xl">
        <span className="font-bold text-3xl md:text-5xl text-red-600 SanskritiFont">
          {" "}
          Sanskriti{" "}
        </span>
        <span className="font-semibold CaptainFont">
          is a celebration of hope. The very word (origin Sanskrit: Sanskaar)
          contains a hint of mending, and reconstruction and is a relentless
          effort towards upliftment and perfection. From its mere facade,
          Sanskriti is a fest, a cultural festival but to us, the students of
          Jadavpur University, Sanskriti is a guiding force, a path we take in
          our attempt to redefine culture. It is an endeavor to break down the
          shackles of defined cultural norms and to set new boundaries, only to
          reinvent against those. Through its living heritage of 30 years,
          Sanskriti has given shape to ideas - new and bright and cradled
          feelings of warmth and endearment. It has spread its wings to include
          much more - a film festival (Chhayanat), a tech fest (Srijan), and a
          freshers’ welcome U-Turn. As we strive every year to bring light to
          the concept that Sanskriti embodies - igniting the fire of life and
          hope into a morbid, stale state, we dig up a world that existed only
          in imagination. Sanskriti is the literal unfolding of the magic that
          life is.
        </span>
      </div>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
