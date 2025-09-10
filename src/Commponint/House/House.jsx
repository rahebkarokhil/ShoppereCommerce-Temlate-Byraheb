import React from "react";

function House() {
  return (
    <div className="   px-4 font-thin  grid grid-cols-1 gap-8  mt-5 lg:grid-cols-2  lg:mt-10     ">
      <div className='  bg-no-repeat bg-cover bg-center h-80 lg:h-[505px]  bg-[url("../public/House/House.jpg")]'>
        <div className="mt-16 ml-10">
          <h6 className="lg:text-slate-500">#House</h6>
          <h1 className=" text-xl w-72 lg:text-3xl font-semibold lg:w-96">
            Express Your Beautiful Life Through Furniture
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <div className='h-48  bg-no-repeat md:h-60   bg-center bg-cover bg-[url("../public/House/image-02.jpg")]'>
          <div className="mt-16 ml-10">
            <h6 className="text-slate-500">#Accessories</h6>
            <h1 className="text-xl w-64 lg:text-3xl font-semibold lg:w-96">
              Discover Our Accessories Collection
            </h1>
          </div>
        </div>
        <div className='h-48 lg:h-56 bg-no-repeat bg-center md:h-60 bg-cover bg-[url("../public/House/image-03.jpg")]'>
          <div className="mt-16 ml-10">
            <h6 className="text-slate-500">#Office</h6>
            <h1 className=" text-xl w-64 lg:text-3xl font-semibold lg:w-96">
              Make Your Workspace More Comfortable
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default House;
