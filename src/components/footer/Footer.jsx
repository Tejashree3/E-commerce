import React from "react";
import { FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

const footerLinks = [
  {
    id: 1,
    title: "Traending",
  },
  {
    id: 1,
    title: "Traending",
  },
  {
    id: 1,
    title: "Traending",
  },
  {
    id: 1,
    title: "Traending",
  },
];
const Footer = () => {
  return (
    <div className="dark:bg-gray-950 bg-gray-100 ">
      <div className="container">
        <div className="grid grid-cols-3 pb-20 pt-5">
          <div className="py-8 px-4">
            <a
              href=""
              className="text-primary font-semibold tracking-wide
                    text-2xl uppercase sm:text-3xl
                    "
            >
              Website
            </a>

            <p className="text-gray-400 pt-3">
              Learn about the history and usage of lorem ipsum, the placeholder
              text used in graphic, print, and web design.
            </p>
          </div>

          <div className=" col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl mb-3 font-bold">Links</h1>
              <ul className="space-y-3">
                {footerLinks.map((data, i) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className=" px-4 font-semibold text-gray-500 hover:text-black duration-200 dark:text-white"
                    >
                      {" "}
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-8 px-4">
              <h1 className="text-xl mb-3 font-bold">Links</h1>
              <ul className="space-y-3">
                {footerLinks.map((data, i) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className=" px-4 font-semibold text-gray-500 hover:text-black duration-200 dark:text-white"
                    >
                      {" "}
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <div className="">
                <div className="flex items-center gap-3">
                  <FaLocationArrow className="" />
                  <p>maharashtra</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+91 9876875</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
