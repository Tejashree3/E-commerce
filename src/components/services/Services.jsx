import React from "react";
import {
  FaCarSide,
  FaCheckCircle,
  FaHeadphonesAlt,
  FaWallet,
} from "react-icons/fa";

const ServiceData = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
    title: "Example",
    desc: "Learn about the history and usage of lorem ipsum",
  },
  {
    id: 2,
    icon: <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary" />,
    title: "Example",
    desc: "Learn about the history and usage of lorem ipsum",
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl md:text-5xl text-primary" />,
    title: "Example",
    desc: "Learn about the history and usage of lorem ipsum",
  },
  {
    id: 4,
    icon: <FaCheckCircle className="text-4xl md:text-5xl text-primary" />,
    title: "Example",
    desc: "Learn about the history and usage of lorem ipsum",
  },
];

const Services = () => {
  return (
    <div>
      <div className="container mt-14 md:my-20">
        <div
          className="grid grid-cols-2 
        lg:grid-cols-4 gap-4 gap-y-8 "
        >
          {ServiceData.map((data) => (
            <div className="flex gap-4 flex-col sm:flex-row items-start">
              {data.icon}
              <div className="">
                <h1 className="lg:text-xl font-bold ">{data.title}</h1>
                <p className="text-gray-400 text-sm">{data.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
