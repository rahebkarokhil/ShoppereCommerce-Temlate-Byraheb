import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Hero from "./Hero";

function Slide() {
  const NextArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className=" hidden  md:flex absolute top-1/2 right-2 -translate-y-1/2 border border-gray-900 p-2  rounded-full cursor-pointerhover:border-none hover:bg-blue-600 hover:text-white z-10"
    >
      <IoChevronForward size={27} />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="hidden md:flex absolute top-1/2 left-2 -translate-y-1/2 border  border-gray-900  border-1 p-2 rounded-full cursor-pointer hover:border-none hover:bg-blue-600 hover:text-white z-10"
    >
      <IoChevronBack size={27} />
    </div>
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow  />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="max-w-full mx-2 lg:mx-0  relative ">
      <Slider {...settings}>
        <Hero />
        <Hero />
      </Slider>
    </div>
  );
}

export default Slide;
