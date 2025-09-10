import React from "react";
import { foter } from "./footer.js";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa"; 
import { CiLocationOn } from "react-icons/ci";
function Footer() {
  return (
    <div className="container mx-auto ">
      <div className="bg-[#111928]  relative lg:h-[500px] justify-start gap-20   px-5 md:justify-center md:items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:px-36">
        <img
          className="absolute right-0 top-0  mix-blend-screen"
          src="footer/imgi_50_default.jpeg"
          alt=""
        />
        <div className="flex flex-col gap-14 mt-14">
          <div>
            <img src="logo/whitelogo.svg" alt="" />
            <img
              className=" absolute right-3 top-2 "
              src="./public/Articales/artical.svg"
              alt=""
            />
          </div>
          <div className="flex gap-2 items-center ">
            <CiLocationOn className="text-3xl text-white " />

            <h2 className="text-white text-2xl">Our Store Locations</h2>
          </div>
          <p className="text-slate-500  font-semibold">
            01. 29 Holles Place, Dublin 2 D02 YY46
          </p>
          <p className="text-slate-500  w-72 font-semibold ">
            02. 68 Jay Street, Suite 902 New Side Brooklyn, NY 11201
          </p>
        </div>

        {foter.map((data, index) => (
          <div className="" key={index}>
            <h3 className="text-white text-xl font-bold ">{data.title}</h3>
            <span className="text-5xl  text-white font-bold ">
              <TfiLayoutLineSolid />
            </span>
            <ul className="w-40">
              {data.li.map((item, i) => (
                <li className="text-white hover:underline py-3" key={i}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="text-white flex flex-col gap-11 mb-11">
          <div>
            <h1>Newsletter</h1>
            <TfiLayoutLineSolid className="text-5xl  text-white font-bold " />
          </div>
          <p>
            Enter your email to receive our latest updates about our products.
          </p>
          <div className="flex items-center w-[45~0px]">
            <input
              className="bg-[#1f2735] h-12  w-[300px]  px-9 "
              placeholder="Email Address"
              type="text"
            />
            <span>
              <button className="py-1 px-4 bg-blue-600 text-whit right-4 -ml-28">
                Subscribe
              </button>
            </span>
          </div>
        </div>
        <img
          className="absolute left-0-0 bottom-0  mix-blend-screen"
          src="footer/imgi_48_default.jpeg"
          alt=""
        />
      </div>

      <div className=" flex flex-wrap-reverse gap-2 justify-between px-20 bg-[#2e3842] h-28 items-center ">
        <div>
          <h4 className="text-slate-200">© 2024 TailGrids. All Rights Reserved.</h4>
        </div>

        <div>
          <img src="../public/footer/footer2.svg" alt="" />
        </div>
        <div>
          <div className="flex gap-2 ">
            <h5 className="text-white">follow US:</h5>
            <span className=" flex gap-4 text-2xl text-gray-500">
              <FaFacebookF className="hover:text-white" />
              <FaTwitter className="hover:text-white" />
              <FaInstagram className="hover:text-white" />
              <FaLinkedin className="hover:text-white" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
