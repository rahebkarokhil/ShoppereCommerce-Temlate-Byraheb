

import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

function Mobile() {
  const [dropdown, setDropdown] = useState(false);
  const [subDropdown, setSubDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const closeAll = () => {
    setDropdown(false);
    setSubDropdown(false);
  };

  return (
    <div className="z-40 absolute right-0 w-64 h-auto  py-5 px-3 shadow-lg rounded-lg bg-white overflow-y-auto">
      <ul className="flex flex-col gap-4 px-2 text-gray-700">
        <li ref={dropdownRef}>
          <button
            onClick={() => setDropdown(!dropdown)}
            className="flex items-center justify-between w-full py-2 rounded-md text-blue-500"
          >
            All Categories
            <IoIosArrowDown
              className={`transition-transform ${dropdown ? "rotate-180" : ""}`}
            />
          </button>

          {dropdown && (
            <ul className="mt-2 flex flex-col gap-3 bg-white rounded-md p-3 transition-all duration-300">
              <li className="cursor-pointer hover:text-blue-500">
                Arts & Crafts
              </li>

              <li>
                <button
                  onClick={() => setSubDropdown(!subDropdown)}
                  className="flex items-center justify-between w-full"
                >
                  <span className="hover:text-blue-500">Fashion</span>
                  <IoIosArrowForward
                    className={`transition-transform ${
                      subDropdown ? "rotate-90" : ""
                    }`}
                  />
                </button>

                {subDropdown && (
                  <div className="mt-2 rounded-md p-3">
                    <ul className="flex flex-col gap-3">
                      <li className="font-bold">New Arrivals</li>
                      <li>Dresses</li>
                      <li>Jackets</li>
                      <li>Sweatshirts</li>
                      <li>Tops & Tees Party</li>
                    </ul>
                    <div>
                      <img src="/nave/bannder.jpg" alt="Fashion Banner" />
                    </div>
                  </div>
                )}
              </li>

              <li className="cursor-pointer hover:text-blue-500">
                Bags & Shoes
              </li>
              <li className="cursor-pointer hover:text-blue-500">
                Jewelry & Watch
              </li>
              <li className="cursor-pointer hover:text-blue-500">Contact</li>
            </ul>
          )}
        </li>

      
        <li className="cursor-pointer hover:text-blue-500" onClick={closeAll}>
          Home
        </li>
        <li className="cursor-pointer hover:text-blue-500" onClick={closeAll}>
          Shop
        </li>
        <li className="cursor-pointer hover:text-blue-500" onClick={closeAll}>
          Products
        </li>
        <li
          className="cursor-pointer flex items-center justify-between"
          onClick={closeAll}
        >
          Accessories <IoIosArrowDown />
        </li>
        <li className="cursor-pointer hover:text-blue-500" onClick={closeAll}>
          Contact
        </li>
      </ul>
    </div>
  );
}

export default Mobile;


