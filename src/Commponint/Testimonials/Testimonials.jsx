import { testimonials } from "./testimonials.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { TbStarFilled } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa";


import { useRef, useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
function Testimonials() {
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
    <div>
      <div>
        <div className="flex flex-col justify-center items-center px-11">
          <h4 className="font-bold text-blue-600 text-lg">Testimonials</h4>
          <h1 className=" text-3xl md:text-[40px] font-bold py-5">What our Clients Says</h1>
          <p className="text-slate-400 md:w-[460px] text-center">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form
          </p>
        </div>
      
        <div className=" px-11 lg:px-32 py-11 ">
          <Swiper
            modules={[Navigation]}
            spaceBetween={34}
            grabCursor={true}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            onSwiper={setSwiperInstance}
          >
            {testimonials.map((clients, index) => (
              <SwiperSlide key={index}>
                <div className="  shadow-2xl shadow-slate-200  py-8 px-4 ">
                  <div className="">
                    <div className="flex items-center gap-1">
                      <TbStarFilled className="text-yellow-400" />
                      <TbStarFilled className="text-yellow-400" />
                      <TbStarFilled className="text-yellow-400" />
                      <TbStarFilled className="text-yellow-400" />
                      <TbStarFilled className="text-yellow-400" />
                      <FaRegStar className="text-yellow-400" />
                    </div>

                    <p className="py-10 text-slate-800">{clients.discreption}</p>
                    <div className="flex gap-5">
                      <img src={clients.url} alt="" />
                      <div className="flex flex-col h-11 ">
                        <span className="font-semibold">{clients.name}</span>
                        <span>{clients.username}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons at Bottom */}
          <div className="flex justify-center mt-11  gap-4   ">
            <div className="flex gap-3 px-2 py-1   ">
              <button
                ref={prevRef}
                className="w-11 h-11 flex items-center justify-center shadow shadow-slate-300   hover:text-white  bg-white hover:bg-blue-600 duration-1000 transition"
              >
                <IoIosArrowRoundBack className="w-9 h-9" />
              </button>

              <button
                ref={nextRef}
                className="w-11 h-11 flex items-center justify-center shadow shadow-slate-300     hover:text-white bg-white  hover:bg-blue-600 duration-1000 transition"
              >
                <IoIosArrowRoundForward className="w-9 h-9 " />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials
