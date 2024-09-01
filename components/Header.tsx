import React from 'react'

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className })=> {
  return (
    <header className='bg-black text-white h-12 w-full' id='no-pad'>
        <div className='container mx-auto flex items-center justify-center h-full w-full text-center'>
            <h3 className='font-poppins font-light text-[14px]'>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%
                <span className='ml-[8px] font-poppins font-semibold text-[14px] underline'>
                    ShopNow
                </span>
            </h3>
        </div>
    </header>
  )
}

export default Header
