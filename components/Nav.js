import Image from 'next/image';
import CustomHead from './Head';
import Cart from '/public/assets/Cart1.svg'
import LikeButton from './LikeButton';

const Nav = () => {
  return (
    <>
    <CustomHead />
    <nav className='h-[94px]'>
        <div className="container mx-auto flex items-center h-full w-full pt-[47px] pl-[125px] ">
        <h1 className="text-xl font-bold">Exclusive</h1>
        <ul className="flex space-x-[48px] pl-[180px] pr-[100]">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Sign Up</a></li>
        </ul>
        <div className='relative rounded-sm text-black w-[243px] h-[38px] bg-[#F5F5F5] ml-[148px]'>
          <input
            type="text"
            placeholder="What are you looking for?"
            className="text-black opacity-50 bg-[#f5f5f5] text-[12px] py-[10px] pl-[20px] pr-[34px]"
          />
          <span className='absolute my-[7px] mr-[2px]'>
            <i class="fa-solid text-black fa-magnifying-glass text-[24px]"></i>
         </span>
        </div>
        {/* <i className="fa-regular fa-heart text-[32px] mx-[10px]"></i> */}
        <LikeButton size='32px' className='mx-[10px]' />
        <Image src={Cart}
        height={32}
        width={32}
        alt='' />
        <i src={Cart}></i>
        
      </div>
    </nav>
    </>
  )
}

export default Nav