import React from "react";
import Button from "../shared/Button.jsx"
const ProductData = ({ data }) => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center">
        {data.map((data) => (
          <div key={data.id}
          data-aos="fade-up"
          data-aos-delay={data.aosDelay}
          className="group">
            <div 
            

                           
            className="relative ">
              <img
                src={data.img}
                className="h-[180px] w-[250px] object-cover rounded-r-md"
              />
              <div className="hidden group-hover:flex absolute top-1/2 text-center -translate-x-1/2 
              -translate-y-1/2 w-full left-1/2 
              group-hover:backdrop-blur-sm justify-center h-full items-center duration-200
              ">
                <Button 
                
                text="Add"
                textColor="text-white"
                bgColor="bg-primary"
                />
                </div>
            </div>
            <div className="leading-7">
              <h2 className="font-semibold">{data.title}</h2>
              <h2 className="font-bold">${data.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductData;
