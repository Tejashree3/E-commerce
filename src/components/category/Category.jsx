import React from "react";
import img1 from "../../assets/category/watch.png";
import img2 from "../../assets/category/earphone.png";
import img3 from "../../assets/category/macbook.png";
import Button from "../shared/Button";

const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            className="py-10 pl-5
           bg-gradient-to-br from-black/90
           to-black/70 flex items-end text-white 
           rounded-3xl relative h-[310px]"
          >
            <div className="">
              <div className="mb-4">
                <p className="text-gray-400 mb-1">Enjoy</p>
                <p className="text-2xl font-semibold mb-1">with</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Earphone
                </p>
                <Button
                  text="Browse"
                  bgColor="bg-primary"
                  textColor="text-white"
                />
              </div>
            </div>
            <img src={img2} className="absolute w-[320px] bottom-0" />
          </div>



          <div
            className="py-10 pl-5
           bg-gradient-to-br from-brandYellow/70
           to-brandYellow/90 flex items-end text-white 
           rounded-3xl relative h-[310px]"
          >
            <div className="">
              <div className="mb-4">
                <p className="text-white mb-1">Enjoy</p>
                <p className="text-2xl font-semibold mb-1">with</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Earphone
                </p>
                <Button
                  text="Browse"
                  bgColor="bg-white"
                  textColor="text-brandYellow"
                />
              </div>
            </div>
            <img src={img1} className="absolute w-[320px] top-6 -right-16 lg:top-[40px]" />
          </div>




          <div
            className="py-10 pl-5 sm:col-span-2
           bg-gradient-to-br from-primary
           to-primary/90 flex items-end text-white 
           rounded-3xl relative h-[310px]"
          >
            <div className="">
              <div className=" space-y-2 mb-4">
                <p className="text-white mb-1">Enjoy</p>
                <p className="text-2xl font-semibold mb-1">with</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Laptop
                </p>
                <Button
                  text="Browse"
                  bgColor="bg-white"
                  textColor="text-primary"
                />
              </div>
            </div>
            <img src={img3} className="absolute w-[300px] top-1  -right-0 " />
          </div>



        </div>
      </div>
    </div>
  );
};

export default Category;
