import Image from 'next/image'
import React from 'react'
import phone from '/public/assets/CellPhone-icon.svg'
import computer from '/public/assets/Computer-icon.svg'

const IconCard = ({icon}) => {
  return (
    <div className='icon-card mr-[55px] mb-[70px]'>
      <div className='icon-container icon'>
        <Image
        src={icon.icon}
        width='3.5rem'
        height='3.5rem'
        className='icon'
        alt=''
        />
      </div>
      <h3 className='icon-text icon'>{icon.text}</h3>
    </div>
  )
}

export default IconCard