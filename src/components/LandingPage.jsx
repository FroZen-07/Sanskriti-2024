import React from 'react'

const LandingPage = () => {
  return (
    <div className='w-full h-screen text-center flex flex-col justify-center items-center overflow-hidden relative '>
      <div className='z-10 select-none'>
        <p className='ProgressFont text-left text-red-500  text-2xl md:text-4xl leading-none'>
          F.E.T.S.U. presents
        </p>
        <p
          className='SanskritiFont leading-none
            bg-gradient-to-r bg-clip-text text-transparent 
            from-red-500 to-yellow-400
            animate-text font-extrabold text-[20vw] md:text-[18vw] z-10 '>
          Sanskriti <span className='  tracking- text-[8vw] -ml-4'>2024</span>
        </p>

        <p
          className='SanskritiFont text-red-500 font-extrabold text-3xl md:text-8xl leading-none
      '>
          redefining culture...
        </p>
      </div>
 </div>
  )
}

export default LandingPage