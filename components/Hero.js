import React from 'react';
import Image from 'next/image';
import HeroImage1 from '/public/assets/HeroImage1.svg';
import ControlledCarousel from './ControlledCarousel';

const Hero = () => {
  return (
    <section className="flex items-start px-[5%]">
      {/* Left Section: Links */}
      <div className="flex flex-col space-y-2 w-[217px] h-[344px] mt-[40px]">
        <a href="#" className="hover:underline">{`Women's Fashion`}</a>
        <a href="#" className="hover:underline">{`Men's Fashion`}</a>
        <a href="#" className="hover:underline">Electronics</a>
        <a href="#" className="hover:underline">Home & Kitchen</a>
        <a href="#" className="hover:underline">Beauty & Personal Care</a>
        <a href="#" className="hover:underline">Sports & Outdoors</a>
        <a href="#" className="hover:underline">Toys & Games</a>
        <a href="#" className="hover:underline">Automotive</a>
        <a href="#" className="hover:underline">Books & Stationery</a>
      </div>

      {/* Middle Section: Divider Line */}
      <div className="w-[1px] h-[384px] mr-[45px] bg-gray-700"></div>

      {/* Right Section: Image Carousel */}
      <div className='w-[892px] h-[344px] mt-[40px]'>
        <ControlledCarousel />
      </div>
    </section>
  );
};

export default Hero;
