'use client'
import React, { useRef, useState, useEffect } from 'react';
import { Poppins, Inter } from 'next/font/google';
import { itemData } from '@/constants/itemData';
import Card from './Card';
import Image from 'next/image';
import RightArrow from '/public/assets/Right-Arrow.svg';
import LeftArrow from '/public/assets/Left-Arrow.svg';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '600',
});

const inter = Inter({
  subsets: ['latin'],
  weight: '600',
});



const ProductSection = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const [products, setProducts] = useState([]);

  const cardsPerSet = 8; // 4 cards per row * 2 rows
  const totalCards = itemData.length;
  const totalSets = Math.ceil(totalCards / cardsPerSet);

  const handleScrollLeft = () => {
    if (currentIndex > 0) {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
        setFade(false);
      }, 300); // Duration matches CSS animation duration
    }
  };

  const handleScrollRight = () => {
    if (currentIndex < totalSets - 1) {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setFade(false);
      }, 300); // Duration matches CSS animation duration
    }
  };

  const getProduct = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products?limit=20');
      const data = await response.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

useEffect(() => {
    getProduct();
  }, [])




  return (
    <section id='todaySection' className='mt-[140px] w-full'>
      <div className='flex px-[5%]'>
        <div className='w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]'></div>
        <h4 className={`${poppins.className} ml-[16px] align-content-center text-[#DB4444] text-[16px]`}>
          Our Products
        </h4>
      </div>
      <div className='flex px-[5%] mb-[40px]'>
        <h2 className={`${inter.className} text-[36px] mt-[24px] mr-[87px]`}>
          Explore Our Products
        </h2>
        <div className='ml-auto space-x-2'>
          <button onClick={handleScrollLeft} disabled={currentIndex === 0}>
            <Image
              src={LeftArrow}
              width={46}
              height={46}
              alt=''
            />
          </button>
          <button onClick={handleScrollRight} disabled={currentIndex >= totalSets - 1}>
            <Image
              src={RightArrow}
              width={46}
              height={46}
              alt=''
            />
          </button>
        </div>
      </div>

      <div className='relative'>
        <div ref={carouselRef} id='todayCarousel' className={`carousel flex scroll-smooth overflow-hidden px-[5%] ${fade ? 'fade' : ''}`}>
          <div className='grid grid-cols-4 gap-x-[4.5rem] gap-y-8 w-full transition-opacity duration-300 ease-in-out'>
            {products.slice(currentIndex * cardsPerSet, (currentIndex + 1) * cardsPerSet).map((product, id) => (
              <div key={product.id} className=' w-[270px]'>
                <Card product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className='flex justify-center items-center'>
        <button className='my-[60px] bg-[#DB4444] w-[234px] h-[56px] mb-[140px] rounded-[4px] text-white flex justify-center align-middle items-center'>
          View All Products
        </button>
      </div>
    </section>
  );
};

export default ProductSection;
