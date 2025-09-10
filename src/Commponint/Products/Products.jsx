import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { TbStarFilled } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { lastcard } from "./data.js";
import { useRef, useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
function Products() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="bg-[#fafafaef] py-12">
      {/* Section Header */}
      <div className="flex flex-col justify-center items-center px-11">
        <h1 className="text-[40px] font-bold py-5">Our Latest Products</h1>
        <p className="text-slate-400 md:w-[460px] text-center">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form
        </p>
      </div>

      {/* Swiper Slider */}
      <div className="px-3 lg:px-36 mt-16">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          grabCursor={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onSwiper={setSwiperInstance} // get swiper instance
        >
          {lastcard.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-lg overflow-hidden shadow-md flex flex-col">
                <img
                  className="w-full h-auto"
                  src={data.url}
                  alt={data.title}
                />
                <div className="px-6 py-5">
                  <h1 className="text-2xl font-semibold hover:text-blue-600 duration-700">{data.title}</h1>
                  <p className="text-slate-500">{data.discreption}</p>
                </div>
                <div className="flex justify-between items-center px-4 border h-14">
                  <div className="flex items-center gap-1">
                    <TbStarFilled className="text-yellow-400" />
                    <TbStarFilled className="text-yellow-400" />
                    <TbStarFilled className="text-yellow-400" />
                    <TbStarFilled className="text-yellow-400" />
                    <TbStarFilled className="text-yellow-400" />
                    <FaRegStar className="text-yellow-400" />
                    <span className="ml-3 text-slate-500">{data.reviews}</span>
                  </div>
                  <span className="font-bold border-l h-14 w-16 flex items-center justify-center">
                    {data.rate}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons at Bottom */}
        <div className="flex justify-center mt-6 gap-4   ">
          <div className="border flex gap-1 px-2 py-1  rounded-full bg-[#fafafaef]">
            <button
              ref={prevRef}
              className="w-7 h-7 flex items-center justify-center rounded-full border hover:text-white  bg-white border-gray-300 hover:bg-blue-600 duration-1000 transition"
            >
              <IoIosArrowRoundBack className="w-4 h-4" />
            </button>

            <button
              ref={nextRef}
              className="w-7 h-7 flex items-center justify-center rounded-full  hover:text-white bg-white border border-gray-300 hover:bg-blue-600 duration-1000 transition"
            >
              <IoIosArrowRoundForward className="w-4 h-4 " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
