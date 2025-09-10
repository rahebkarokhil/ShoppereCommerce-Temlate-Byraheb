import React from 'react'
 import { artical } from './articales';
 import { MdOutlineCalendarMonth } from "react-icons/md";
import { LuMessageSquareText } from "react-icons/lu";

function Articles() {
  return (
    <div>
      <div className="  px-9 flex lg:justify-between lg:items-center  lg:px-16 xl:px-32 ">
        <div>
          <h4 className="text-blue-600 text-xl ont-semibold ">Latest News</h4>
          <h1 className=" text-2xl lg:text-4xl absolute font-bold z-20">Recent Blog Articles</h1>
          <p className=" lg:w-[530px] w-60 text-md py-14 text-slate-700">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in  some form.
          </p>
        </div>
        <div>
          <img className='w-[300px] relative'  src="../public/Articles/pattren.svg" alt="" />
        </div>  
      </div>

      <div className=" px-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-11 gap-10  xl:px-28">
        {artical.map((card) => (
          <div>
            <img className='w-[100%] h-auto' src={card.url} alt="" />
            <div>
              <h4 className='text-lg font-semibold py-5 text-blue-600'>{card.discription}</h4>
              <h1 className='text-2xl font-semibold w-96'>{card.title}</h1>
            </div>
            <div className="flex  gap-7 text-slate-700  pt-4">
              <div className="flex items-center gap-4 ">
                <MdOutlineCalendarMonth />
                <span>{card.date}</span>
              </div>
              <div className="flex items-center gap-4">
                <LuMessageSquareText />
                <span>{card.message}</span>
              </div>
            </div>
          </div>
        ))}

        <div className="bg-[#3858f9] text-center rounded-md  mb-24 ">
          <div className="flex justify-end">
            <img
              className="w-10 text "
              src="./public/Articales/artical.svg"
              alt=""
            />
          </div>
          <div className="flex flex-col ju stify-center text-center items-center ">
            <h1 className="text-2xl lg:w-40 xl:w-96 font-semibold text-white">
              Join our newsletter!
            </h1>
            <p className="text-lg lg:w-48 xl:w-96 w-80 text-white">
              Enter your email to rec eive our latest newsletter.
            </p>
            <div className="flex flex-col gap-5 py-5 m">
              <input
                className="bg-[#5f79fa] w-64 h-12 px-14 text-slate-600 rounded-lg"
                placeholder="Your emailaddress"
                type="text"
              />
              <button className="w-64  h-12 rounded-lg text-white font-semibold  bg-[#16b89f]">
                Subscribe Now
              </button>
            </div>
            <span className='text-white font-semibold'>Don't worry, we don't spam</span>
          </div>
          <div className=" mt-9">
            <img
              className="w-10 h-10 text "
              src="./public/Articales/artical.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles
