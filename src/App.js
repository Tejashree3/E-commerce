import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Category from './components/category/Category';
import Category2 from './components/category/Category2';
import Services from './components/services/Services';
import Banner from './components/Banner/Banner';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Correct the typo here
import head from "./assets/hero/headphone.png"
import Product from './components/product/Product';

import head1 from "./assets/category/smartwatch2-removebg-preview.png"
import Blog from './components/blog/Blog';
import Footer from './components/footer/Footer';
import { useEffect, useState } from 'react';
import Contact from './components/contact/Contact';
import Settings from './components/Setting';

const BannerData = {
  discount: "20% Off",
  title: "Summer Sale",
  date: "2024-08-14",
  image:head ,
  title1: "Limited Time Offer",
  title2: "Exclusive Deals",
  title3: "Shop Now",
  title4: "Hurry Up",
  color: " var(--primary-color)"
};


const BannerData2 = {
  discount: "20% Off",
  title: "Summer Sale",
  date: "2024-08-14",
  image:head1 ,
  title1: "Limited Time Offer",
  title2: "Exclusive Deals",
  title3: "Shop Now",
  title4: "Hurry Up",
  color: "#2dcc6f"
};
function App() {

  useEffect(()=>{
    AOS.init({

      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  })
  const [primaryColor, setPrimaryColor] = useState(
    localStorage.getItem("primaryColor") || "#f42c37"
  );

  useEffect(() => {
    document.documentElement.style.setProperty("--primary-color", primaryColor);
    localStorage.setItem("primaryColor", primaryColor);
  }, [primaryColor]);

  return (
   <div className='bg-white dark:bg-gray-700 dark:text-white overflow-hidden
   duration-300
   '>
    <Navbar/>
    <Settings setPrimaryColor={setPrimaryColor} /> 

    <Hero/>
    <Category/>
    <Category2/>
    <Services/>
    <Banner data={BannerData}/>
   <Product/>
   <Banner data={BannerData2}/>
   <Blog/>
   <Contact/>
<Footer/>
   </div>
  );
}

export default App;
