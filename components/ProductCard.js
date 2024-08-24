import Image from 'next/image'
import React from 'react'
import fill_eye from '/public/assets/Fill Eye.svg'


import StarRating from './StarRating'
import CardLikeButton from './CardLikeButton'

const ProductCard = () => {
  return (
    <div className='w-[270px] h-[350px] flex flex-col'>
      <div className='productCard-image mb-[16px] relative rounded-[4px]'>
         {/* Conditional rendering of the new rectangle */}
         {/* {product.new ? (
          <div className='new-rect'>New</div>
        ) : null} */}
        <div className='new-rect'>New</div>

        <div className='productCard-icons gap-[8px] absolute top-[12px] right-[12px] flex'>
          <CardLikeButton />
          <Image src={fill_eye} width={34} height={34} alt='' />
        </div>
        <div className='image-container'>
          <Image src={'./assets/productcard1.svg'} width='100%' height='100%' className='image' alt='' />
        </div>

        {/* Hover Effect */}
        <div className='add-to-cart absolute left-0 right-0 bottom-[-41px] h-[41px] bg-black text-white flex items-center justify-center text-sm rounded-b-[4px] transition-all duration-300'>
          <a href='#'>Add to cart</a>
        </div>
      </div>

      <div className='card-text'>
        <h2 className='card-title'>Breed Dry Dog Food</h2>
        <div className='card-pricing'>
          <span className='price'>$100</span>
          <StarRating rating={4} />
          <span>(78)</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
