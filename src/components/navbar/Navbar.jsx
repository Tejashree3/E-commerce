import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";
import DarkMode from "../DarkMode";
const MenuData = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 1,
    name: "About",
    link: "/about",
  },
  {
    id: 1,
    name: "Shop",
    link: "/shop",
  },
  {
    id: 1,
    name: "Blog",
    link: "/blog",
  },
];

const Links = [
  {
    id: 1,
    name: "Traending",
    link: "/",
  },
  {
    id: 1,
    name: "Traending",
    link: "/",
  },
  {
    id: 1,
    name: "Traending",
    link: "/",
  },
  {
    id: 1,
    name: "Traending",
    link: "/",
  },
];
const Navbar = () => {
  return (
    <div
      className="bg-white dark:text-white dark:bg-gray-900 duration-300 relative z-40
    "
    >
      <div className="py-4">
        <div className="container flex justify-between items-center ">
          <div className="flex gap-5 items-center">
            <a
              href=""
              className="text-primary font-semibold tracking-wide
                    text-2xl uppercase sm:text-3xl
                    "
            >
              Website
            </a>

            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {MenuData.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black duration-200 dark:text-white"
                    >
                      {" "}
                      {data.name}
                    </a>
                  </li>
                ))}
                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="flex items-center gap-1 font-semibold
 text-gray-500 dark:hover:text-white py-2"
                  >
                    Links
                    <span className="">
                      <FaCaretDown
                        className="group-hover:rotate-180 

"
                      />
                    </span>
                  </a>

                  <div
                    className="absolute z-[9999] hidden

group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900

p-2 text-black dark:text-white

"
                  >
                    <ul className="space-y-2">
                      {Links.map((data, index) => (
                        <li>
                          <a
                            className="text-gray-500
        p-2 hover:bg-primary/20 w-full rounded-md font-semibold
        dark:hover:text-white py-2 inline-block"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="
                  search-bar
                   "
              />
              <IoMdSearch
                className="text-2xl
               text-gray-600 dark:text-gray-400
               absolute top-1/2 -translate-y-1/2 right-3
               group-hover:text-brandYellow"
              />
            </div>

            <button className="relative p-3">
              <FaShoppingCart
                className="text-2xl
               text-gray-600 dark:text-gray-400"
              />
              <div className="w-4 h-4 bg-red-500 absolute flex justify-center items-center right-0 top-0 text-white rounded-full">
                2
              </div>
            </button>

            <div className="">
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
