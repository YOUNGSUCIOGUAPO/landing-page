'use client'
import React, { useRef } from 'react';
import { Poppins, Inter } from 'next/font/google';
import CountdownTimer from './CountdownTimer';
import { itemData } from '@/constants/itemData';
import Card from './Card';
import Image from 'next/image';
import RightArrow from '/public/assets/Right-Arrow.svg'
import LeftArrow from '/public/assets/Left-Arrow.svg'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '600',
});

const inter = Inter({
  subsets: ['latin'],
  weight: '600',
});

const TodaySection = () => {
  const carouselRef = useRef(null);

  const handleScrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 270; // Adjust to card width + margin
    }
  };

  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 250; // Adjust to card width + margin
    }
  };

  return (
    <section className='mt-[140px] w-full h-[493px] ml-[125px]'>
      <div className='flex'>
        <div className='w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]'></div>
        <h4 className={`${poppins.className} ml-[16px] align-content-center text-[#DB4444] text-[16px]`}>
            Todays
        </h4>
      </div>
      <div className='flex'>
        <h2 className={`${inter.className} text-[36px] mt-[24px] mr-[87px]`}>
          Flash Sales
        </h2>
        <CountdownTimer />

        <button onClick={handleScrollLeft} className='absolute left-0 z-10 p-2 border-2'>
          <Image
            src={LeftArrow}
            width={46}
            height={46}
            alt=''
            /> {/* Left arrow */}
        </button>

        <button onClick={handleScrollRight} className='absolute right-0 z-10 p-2 border-2'>
          <Image
          src={RightArrow}
          width={46}
          height={46}
          alt=''
          /> {/* Right arrow */}
        </button>
      </div>
      <div className='relative'>
        
        <div ref={carouselRef} className='carousel flex scroll-smooth overflow-hidden'>
          {itemData && itemData.map((item, index) => (
            <div key={index} className='flex-shrink-0'>
              <Card product={item} />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default TodaySection;
