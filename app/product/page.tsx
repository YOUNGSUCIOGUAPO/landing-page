'use client'
import React,{ useRef } from 'react'
import Image from 'next/image'
import details1 from '@/public/assets/details1.svg'
import details2 from '@/public/assets/details2.svg'
import details3 from '@/public/assets/details3.svg'
import details4 from '@/public/assets/details4.svg'
import details5 from '@/public/assets/details5.svg'
import { Poppins, Inter } from 'next/font/google';
import StarRating from '@/components/StarRating'
import ColorRadio from '@/public/assets/ColorRadio.svg'
import plus from '@/public/assets/plus-white.svg'
import minus from '@/public/assets/minus.svg'
import like from '@/public/assets/like-icon.svg'
import delivery from '@/public/assets/icon-delivery.svg';
import returnIcon from '@/public/assets/icon-return.svg'
import RightArrow from '/public/assets/Right-Arrow.svg'
import LeftArrow from '/public/assets/Left-Arrow.svg'
import { itemData } from '@/constants/itemData';
import Card from '@/components/Card';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600']
});

const inter = Inter({
  subsets: ['latin'],
  weight: '600',
});



const page = () => {
  const carouselRef = useRef(null);

  const handleScrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 300; // Adjust to card width + margin
    }
  };

  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 300; // Adjust to card width + margin
    }
  };

  return (
    <main className='mt-[80px] mx-[5%]'>
      <div className='flex space-x-3 mb-20'>
        <h5 className='opacity-50'>About</h5>
        <h5 className='opacity-50'>/</h5>
        <h5 className='opacity-50'>Gaming</h5>
        <h5 className='opacity-50'>/</h5>
        <h5 className=''>Havic HV G-92 Gamepad</h5>
      </div>

  <div className="grid grid-flow-col w-full gap-y-[16px]">
  <div className="grid grid-rows-4 gap-y-[16px]">
    <div className="bg-[#F5F5F5] w-[170px] h-[138px] rounded flex items-center justify-center"> <Image src={details1} width={121} height={114} alt=''/></div>
    <div className="bg-[#F5F5F5] w-[170px] h-[138px] rounded flex items-center justify-center"> <Image src={details2} width={121} height={114} alt=''/></div>
    <div className="bg-[#F5F5F5] w-[170px] h-[138px] rounded flex items-center justify-center"> <Image src={details3} width={121} height={114} alt=''/></div>
    <div className="bg-[#F5F5F5] w-[170px] h-[138px] rounded flex items-center justify-center"> <Image src={details4} width={121} height={114} alt=''/></div>
  </div>
  <div className="ml-[30px] bg-[#F5F5F5] p-5 w-[500px] h-[600px] row-span-4 rounded flex items-center justify-center"><Image src={details5} width={446} height={315} alt=''/></div>

  {/* Details section */}
  <div className="ml-[70px] w-[500px] h-[600px] row-span-4 rounded">
    <div className='flex flex-col space-y-[16px]'>
      <h3 className={`${inter.className} text-[24px]`}>Havic HV G-92 Gamepad</h3>
      <div className='flex'>
        <StarRating rating={4} />
        <h3 className='opacity-50 ml-2'>(150 Reviews)</h3>
        <h3 className='mr-4 ml-4'>|</h3>
        <h3 className='text-[#00FF66] opacity-60'>In Stock</h3>
      </div>
      <h2 className='text-[24px] no-padding'>$192.00</h2>
    </div>
    
    <h3 className={`${poppins.className} text-[14px] font-[400] my-[24px] w-[373px]`}>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</h3>
    <div className='border-1 border-black opacity-25 w-full mb-[24px]'></div>

<div className='flex space-x-6'>
  <h4 className='text-[20px]'>Colours:</h4>
  <Image src={ColorRadio} width={48} height={20} alt='Color Radio' />
</div>

<div className='flex align-items-center my-[24px]'>
  <h4 className={`mr-[24px] text-[20px]`}>Size:</h4>
  <div className={`${poppins.className} font-[500] text-[14px] flex space-x-4`}>
    <div className='flex justify-center items-center w-[32PX] h-[32px]  border-opacity-50 border-1 border-black rounded'>XS</div>
    <div className='flex justify-center items-center w-[32PX] h-[32px]  border-opacity-50 border-1 border-black rounded'>S</div>
    <div className='flex justify-center items-center w-[32PX] h-[32px]  border-opacity-50 border-1 border-black rounded text-white bg-[#DB4444]'>M</div>
    <div className='flex justify-center items-center w-[32PX] h-[32px]  border-opacity-50 border-1 border-black rounded'>L</div>
    <div className='flex justify-center items-center w-[32PX] h-[32px]  border-opacity-50 border-1 border-black rounded'>XL</div>
  </div>
</div>

<div className='flex items-center mb-[36px]'>
  <button className='w-[40px] h-[44px] border-opacity-50 border-1 border-black flex justify-center items-center rounded-tl rounded-bl'><Image src={minus} width={24} height={24} alt='' /></button>
  <div className='w-[80px] h-[44px] border-opacity-50 border-1 border-black flex justify-center items-center'>2</div>
  <button className='w-[40px] h-[44px] border-opacity-50 border-1 border-black bg-[#DB4444] flex justify-center items-center mr-4 rounded-tr rounded-br'><Image src={plus} width={24} height={24} alt='' /></button>

  <div className='w-[165px] h-[44px] flex justify-center items-center text-white rounded bg-[#DB4444] mr-[19px]'>
    Buy Now
  </div>

  <div className='w-[40px] h-[40px] border-opacity-50 border-1 border-black rounded flex justify-center items-center'><Image src={like} width={20} height={17.83} alt='' /></div>
</div>

  <div className='w-full h-[180px] border-opacity-50 border-1 border-black rounded'>
    {/* top */}
    <div className='flex mt-[24px] ml-[16px] mb-[16px]'>
      <Image src={delivery} width={40} height={40} alt=''/>
      <div className='ml-[16px]'>
        <h5 className={`${poppins.className} text-[16px] font-[500] `}>Free Delivery</h5>
        <h5 className={`${poppins.className} text-[12px] font-[500] underline mt-[8px]`}>Enter your postal code for Delivery Availability</h5>
      </div>
    </div>
    {/* middle line */}
    <div className='border-1 border-black opacity-25 w-full mb-[24px]'></div>
    {/* bottom */}
    <div className='flex mt-[24px] ml-[16px] mb-[16px]'>
      <Image src={returnIcon} width={40} height={40} alt=''/>
      <div className='ml-[16px]'>
        <h5 className={`${poppins.className} text-[16px] font-[500] `}>Return Delivery</h5>
        <h5 className={`${poppins.className} text-[12px] font-[500] mt-[8px]`}>Free 30 Days Delivery Returns. <span className='underline'>Details</span></h5>
      </div>
    </div>
  </div>
  </div>
</div>

<div className='related-section mt-[140px]'>
<div className='flex'>
        <div className='w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]'></div>
        <h4 className={`${poppins.className} ml-[16px] align-content-center text-[#DB4444] text-[16px]`}>
            Related Items
        </h4>
      </div>
      <div className='flex px-[5%] mb-[40px]'>

        <div className='ml-auto space-x-2'>
        <button onClick={handleScrollLeft} className=''>
          <Image
            src={LeftArrow}
            width={46}
            height={46}
            alt=''
            /> {/* Left arrow */}
        </button>
        <button onClick={handleScrollRight} className=''>
          <Image
          src={RightArrow}
          width={46}
          height={46}
          alt=''
          /> {/* Right arrow */}
        </button>
        </div>
      </div>

      <div className='relative'>
        <div ref={carouselRef} id='productCarousel' className='carousel flex scroll-smooth overflow-hidden  gap-10'>
          {itemData && itemData.map((item, index) => (
            <div key={index} className='flex-shrink-0'>
              <Card product={item} />
            </div>
          ))}
        </div>
      </div>
</div>

    </main>
  )
}

export default page