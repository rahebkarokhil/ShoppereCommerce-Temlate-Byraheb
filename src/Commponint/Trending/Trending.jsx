import React from "react";
import { TbStarFilled } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa";
import { trending } from "./trending";
function Trending() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center px-11 mt-20">
        <h1 className=" text-3xl md:text-[40px] font-bold py-5">Trending Products</h1>
        <p className="text-slate-400 md:w-[460px] text-center">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-32 py-24">
        {trending.map((products) => (
          <div className="border px-5 py-5">
            <img className="w-[100%] h-auto" src={products.url} alt="" />
            <h6>{products.rate}</h6>
            <div>
              <h2 className="text-2xl font-semibold py-4">{products.title}</h2>
            </div>

            <div className="flex items-center gap-1">
              <TbStarFilled className="text-yellow-400" />
              <TbStarFilled className="text-yellow-400" />
              <TbStarFilled className="text-yellow-400" />
              <TbStarFilled className="text-yellow-400" />
              <TbStarFilled className="text-yellow-400" />
              <FaRegStar className="text-yellow-400" />
              <span className="ml-3 text-slate-500">{products.reviews}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trending;
