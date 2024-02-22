import React from "react";

const LandingPage = () => {
  return (
    <div className="w-full h-screen text-center relative">
      <div className="absolute inset-0 overflow-hidden">
      <div className="w-full h-full bg-cover bg-center relative" style={{backgroundImage: 'url("/assets/sanskriti-image.jpg")'}}>
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90 md:opacity-80"></div>
        </div>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <p className="ProgressFont text-left text-yellow-400 text-2xl md:text-4xl leading-none">
          F.E.T.S.U. presents
        </p>
        <p className="SanskritiFont leading-none bg-gradient-to-r bg-clip-text text-transparent from-yellow-600 via-red-600 to-red-800 animate-text font-extrabold text-[20vw] md:text-[18vw] z-10 ">
          Sanskriti <span className="tracking- text-[8vw] -ml-4">2024</span>
        </p>
        <p className="SanskritiFont text-yellow-400 font-extrabold text-3xl md:text-8xl leading-none">
          redefining culture...
        </p>
      </div>
      <div className="absolute bottom-0 w-full h-[8em] bg-gradient-to-b from-transparent to-amber-500 opacity-30"></div>
    </div>
  );
};

export default LandingPage;
