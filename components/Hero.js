import React from 'react'
import Image from 'next/image'
import HeroImage1 from '/public/assets/HeroImage1.png'

const Hero = () => {
  return (
    <section className="flex items-start  ">
      {/* Left Section: Links */}
      <div className="flex flex-col space-y-2 w-[217px] h-[344px] ml-[125px] mt-[40px] mr-[16px]">
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
      <div id="carouselExampleIndicators" className="carousel slide w-[892px] h-[344px] mt-[40px]" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image
            src={HeroImage1}
            width={892}
            height={344}
            alt='' />
          </div>
          <div className="carousel-item">
            <img src="/assets/HeroImage2.png" className="d-block w-100" alt="Hero Image 2" />
          </div>
          <div className="carousel-item">
            <img src="/assets/HeroImage3.png" className="d-block w-100" alt="Hero Image 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  )
}

export default Hero