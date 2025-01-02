import React from 'react'
import Heading from '../shared/Heading'
import ProductData from './ProductData'

import img1 from "../../assets/product/p-1.jpg"
import img2 from "../../assets/product/p-2.jpg"
import img3 from "../../assets/product/p-3.jpg"
import img4 from "../../assets/product/p-4.jpg"
import img5 from "../../assets/product/p-5.jpg"
import img6 from "../../assets/product/p-9.jpg"
import img7 from "../../assets/product/p-7.jpg"

const productData = [
    {
        id: 1,
        title: "Product 1",
        price: 19.99,
        img: img1,
        aosDelay: 0
    },
    {
        id: 2,
        title: "Product 2",
        price: 29.99,
        img: img2,
        aosDelay: 200
    },
    {
        id: 3,
        title: "Product 3",
        price: 39.99,
        img: img3,
        aosDelay: 400
    },
    {
        id: 4,
        title: "Product 4",
        price: 49.99,
        img: img4,
        aosDelay: 600
    },
    {
        id: 5,
        title: "Product 5",
        price: 59.99,
        img: img5,
        aosDelay: 800
    },
    {
        id: 6,
        title: "Product 5",
        price: 59.99,
        img: img6,
        aosDelay: 1200
    },
    {
        id: 7,
        title: "Product 5",
        price: 59.99,
        img: img7,
        aosDelay: 1400
    },
    {
        id: 8,
        title: "Product 5",
        price: 59.99,
        img: img1,
        aosDelay: 1600
    }
];

const Product = () => {
  return (
    <div>
        <div className='container'>
        
                <Heading            
                title="Product"
                subtitle="Explore Products"
                />
      <ProductData data={productData}/>
        </div>
    </div>
  )
}

export default Product