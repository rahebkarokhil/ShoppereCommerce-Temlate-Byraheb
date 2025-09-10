import React from 'react'

function Hero() {
  return (
    <div className=" mt-0 mb-0     bg-cover bg-no-repeat bg-[url('../public/Hero/Hero-bg.svg')] px-11">
      <div className=" grid  grid-cols-1 gap-9 justify-center md:px-14  md:grid-cols-2 lg:items-center lg:justify-between  ">
        <div className="pt-10">
          <h3 className="text-blue-600 text-xl font-semibold">
            Start From $299
          </h3>
          <h1 className="   font-bold text-2xl  lg:text-4xl py-4 g:w-[500px]">
            Ultra HD Quality Bluetooth Sound Speakers
          </h1>

          <p className=" font-semibold text-slate-500 lg:w-[600px]  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            ornare vestibulum mollis. Nam vitae augue purus.
          </p>

          <button className=" text-white mt-8 rounded-full font-semibold bg-blue-600 py-3 px-7 hover:bg-blue-950 duration-700">
            Shop Now{" "}
          </button>
        </div>
        <div className="flex justify-center py-20">
          <img className="  " src="./public/Hero/Hero.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero

