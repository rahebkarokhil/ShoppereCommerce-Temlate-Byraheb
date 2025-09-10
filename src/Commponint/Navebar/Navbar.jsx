import { useState, useEffect, useRef } from "react";
import { FaRegHeart } from "react-icons/fa";
import { CiSearch, CiShoppingBasket } from "react-icons/ci";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";
import Mobile from "./Mobile";
import { MdClose } from "react-icons/md";

function Navbar() {
  const [Dropdown, setDropdown] = useState(false);
  const [second, setSecond] = useState(false);
  const [Menu, setMenu] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdown(false);
        setSecond(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setDropdown(false);
      setSecond(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex justify-between px-5 lg:px-11 items-center h-20">
      <div>
        <img className="w-24 md:w-40" src="/logo/logo.svg" alt="Logo" />
      </div>

      <ul className="hidden lg:flex items-center gap-5 z-40" ref={dropdownRef}>
        <div
          onClick={() => setDropdown(!Dropdown)}
          className="flex items-center px-7 py-3 bg-slate-100 rounded-md cursor-pointer relative"
        >
          <li>All Categories</li>
          <IoIosArrowDown
            className={`ml-1 transition-transform ${
              Dropdown ? "rotate-180" : ""
            }`}
          />
        </div>

        {Dropdown && (
          <ul className="absolute top-20 text-slate-500 bg-white w-40 h-44 flex flex-col gap-2 py-5 rounded-xl border">
            <li className="cursor-pointer hover:text-blue-500 pl-2">
              Arts & Crafts
            </li>

            <span
              onMouseEnter={() => setSecond(true)}
              onMouseLeave={() => setSecond(false)}
              className="flex items-center gap-16 relative"
            >
              <li className="cursor-pointer hover:text-blue-500 pl-2">
                Fashion
              </li>
              <IoIosArrowForward />

              {second && (
                <div className="flex justify-around items-start absolute left-[158px] top-0 bg-white border rounded-lg w-[700px] px-5 py-8 z-50">
                  <ul className="flex flex-col gap-3">
                    <li className="font-bold">New Arrivals</li>
                    <li className="hover:text-blue-600">Dresses</li>
                    <li className="hover:text-blue-600">Jackets</li>
                    <li className="hover:text-blue-600">Sweatshirts</li>
                    <li className="hover:text-blue-600">Tops & Tees</li>
                  </ul>

                  <ul className="flex flex-col gap-3">
                    <li className="font-bold">Trending</li>
                    <li className="hover:text-blue-600">Shoes</li>
                    <li className="hover:text-blue-600">Handbags</li>
                    <li className="hover:text-blue-600">Accessories</li>
                  </ul>

                  <div>
                    <img src="/nave/bannder.jpg" alt="Fashion Banner" />
                  </div>
                </div>
              )}
            </span>

            <li className="cursor-pointer hover:text-blue-500 pl-2">
              Bags & Shoes
            </li>
            <li className="cursor-pointer hover:text-blue-500 pl-2">
              Jewelry & Watch
            </li>
            <li className="cursor-pointer hover:text-blue-500 pl-2">Contact</li>
          </ul>
        )}

        <li className="md:hidden xl:flex cursor-pointer">Home</li>
        <li className="md:hidden xl:flex cursor-pointer">Shop</li>
        <li className="md:hidden xl:flex cursor-pointer">Products</li>
        <span className="flex items-center">
          <li className="cursor-pointer">Accessories</li>
          <IoIosArrowDown />
        </span>
        <li className="md:hidden xl:flex cursor-pointer">Contact</li>
      </ul>

      <div className="flex gap-7 h-6 items-center">
        <div className="hidden md:flex gap-8">
          <div>
            <CiSearch className="text-3xl" />
          </div>
          <div>
            <FaRegHeart className="text-3xl absolute" />
            <span className="relative text-white px-[7px] py-[1px] text-sm rounded-full bg-blue-500 left-5 bottom-4">
              2
            </span>
          </div>
          <div>
            <CiShoppingBasket className="text-3xl absolute" />
            <span className="relative text-white px-[7px] py-[1px] text-sm rounded-full bg-blue-500 left-5 bottom-4">
              5
            </span>
          </div>
        </div>

        <span className="lg:hidden">
          {!Menu ? (
            <MdOutlineMenu className="text-3xl" onClick={() => setMenu(true)} />
          ) : (
            <MdClose className="text-3xl" onClick={() => setMenu(false)} />
          )}

          {Menu && <Mobile />}
        </span>

       
      </div>
    </div>
  );
}

export default Navbar;
