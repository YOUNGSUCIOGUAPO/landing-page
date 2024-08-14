import Image from 'next/image'
import React from 'react'
import fill_eye from '/public/assets/Fill Eye.svg'
import cardImage1 from '/public/assets/card-image1.svg'
import cardImage2 from '/public/assets/card-image2.svg'
import cardImage3 from '/public/assets/card-image1.svg'
import cardImage4 from '/public/assets/card-image1.svg'

import StarRating from './StarRating'
import CardLikeButton from './CardLikeButton'

const Card = ({product}) => {
  const image1 = cardImage1;

  return (
    <div className='w-[270px] h-[350px] flex flex-col mr-[30px]'>
      <div className='card-image mb-[16px] relative rounded-[4px]'>
        <div className='discount-rect'>{product.oldPrice}</div>
        <div className='card-icons gap-[8px] absolute top-[12px] right-[12px] flex'>
          <CardLikeButton />
          <Image src={fill_eye} width={34} height={34} alt='' />
        </div>
        <div className='image-container'>
          <Image src={image1} width='100%' height='100%' className='image' alt='' />
        </div>

        {/* Hover Effect */}
        <div className='add-to-cart hidden absolute left-0 right-0 bottom-[-41px] h-[41px] bg-black text-white flex items-center justify-center text-sm rounded-b-[4px] transition-all duration-300'>
          <a href='#'>Add to cart</a>
        </div>
      </div>

      <div className='card-text'>
        <h2 className='card-title'>{product.title}</h2>
        <div className='card-pricing'>
          <span className='price'>{product.price}</span>
          <span className='old-price'>{product.oldPrice}</span>
        </div>
        <div className='flex'>
          <StarRating rating={product.productRating} />
          <span>{product.reviews}</span>
        </div>
      </div>
    </div>
  )
}

export default Card
