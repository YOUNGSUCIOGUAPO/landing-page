import Image from 'next/image'
import React from 'react'
import phone from '/public/assets/CellPhone-icon.svg'
import computer from '/public/assets/Computer-icon.svg'

const IconCard = ({ icon}) => {
  console.log('PRODUCT', icon);
  return (
    <div className='icon-card mr-[45px] mb-[70px]'>
      <div className='icon-container icon'>
        <Image
        src={icon.icon}
        width={49}
        height={49}
        className='icon'
        alt=''
        />
      </div>
      <h3 className='icon-text icon'>{icon.text}</h3>
    </div>
  )
}

export default IconCard