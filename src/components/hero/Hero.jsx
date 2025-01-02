import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img2 from "../../assets/category/vr.png";
import img3 from "../../assets/category/macbook.png";
import img4 from "../../assets/category/macbook.png";

import img1 from "../../assets/hero/headphone.png";
import Slider from "react-slick";
import Button from "../shared/Button";

const HeroSlider = [
  {
    id: 1,
    img: img1,
    subtitle: "Example",
    title: "Example",
    Title2: "Example",
    desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  },
  {
    id: 2,
    img: img2,
    subtitle: "Example",
    title: "Example",
    Title2: "Example",
    desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  },
  {
    id: 3,
    img: img3,
    subtitle: "Example",
    title: "Example",
    Title2: "Example",
    desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  },
  {
    id: 4,
    img: img4,
    subtitle: "Example",
    title: "Example",
    Title2: "Example",
    desc: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  },
];
const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container pt-2">
      <div className="hero-bg-color overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[550px] flex justify-center items-center ">
        <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {HeroSlider.map((data) => (
            <div key={data.id} className="">
              <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="flex flex-col justify-center gap-4 sm:pl-3
             pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 
             relative z-10 ">
                <h1 
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="true"
                className="text-2xl sm:text-6xl 
                lg:text-2xl 
                font-bold">{data.subtitle}</h1>
                <h1 
                 data-aos="zoom-out"
                 data-aos-duration="500"
                 data-aos-once="true"
                className="text-5xl sm:text-6xl pb-10
                 lg:text-7xl font-bold">{data.title}</h1>
                <h1 
                   data-aos="zoom-out"
                   data-aos-duration="500"
                   data-aos-once="true"
                className="text-5xl uppercase
                 text-white dark:text-white/5 sm:text-[80px] 
                 md:text-[100px] xl:text-[150px] pb-20 font-bold sm:text-6xl 
                 lg:text-2xl ">{data.Title2}</h1>
<div
 data-aos="fade-up"
 data-aos-duration="500"
 data-aos-offset="0"
 data-aos-delay="300"

className="">
<Button

text="Shop Now"
bgColor="bg-primary"
textColor="text-white"
/>
</div>
</div>
<div className="order-1 sm:order-2">
<div

data-aos="zoom-in"
data-aos-once="true"


className="relative z-10">
    <img src={data.img} className="relative z-10 
    w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] sm:scale-105 
    lg:scale-120 object-contain mx-auto
    drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)]"/>
</div>
</div>
            </div>
            
            </div>
          ))}
        </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
