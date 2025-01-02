import React from 'react';
import img1 from "../../assets/blogs/blog-1.jpg";
import img2 from "../../assets/blogs/blog-2.jpg";
import img3 from "../../assets/blogs/blog-3.jpg";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


import { Navigation, Pagination } from 'swiper';
import Heading from '../shared/Heading';

const BlogData = [
    {
        title: "Example 1",
        subtitle: "Tips and tricks 1",
        img: img1,
        aosDelay: 0
    },
    {
        title: "Example 2",
        subtitle: "Tips and tricks 2",
        img: img2,
        aosDelay: 200
    },
    {
        title: "Example 3",
        subtitle: "Tips and tricks 3",
        img: img3,
        aosDelay: 400
    },
    {
        title: "Example 4",
        subtitle: "Tips and tricks 4",
        img: img1,
        aosDelay: 600
    },
    {
        title: "Example 5",
        subtitle: "Tips and tricks 5",
        img: img2,
        aosDelay: 800
    }
];

const Blog = () => {
  return (
    <div>
      <div className='container mb-10'>
        <Heading            
          title="Newly Arrived"
          subtitle="Explore Products"
        />
           <Swiper
          navigation={true}
          pagination={{ clickable: true }}
        
          className="mySwiper"
          spaceBetween={30}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
            },
          }}
        >

          {BlogData.map((data, index) => (
            <SwiperSlide key={index}>
              <div    
               data-aos="fade-up"
          data-aos-delay={data.aosDelay}
          className="p-4 bg-white shadow-lg rounded-md">
                <img
          
                src={data.img} alt={data.title} 
                className="rounded-full w-full h-48 object-cover rounded-t-md" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{data.title}</h3>
                  <p className="text-gray-600">{data.subtitle}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Blog;
