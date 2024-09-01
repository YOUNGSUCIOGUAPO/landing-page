import React from 'react';
import { useTimerLogic } from './TimerLogic';
import { Poppins, Inter } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500'],
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['700'],
});

const CountdownTimer = () => {
  const timeLeft = useTimerLogic();

  return (
    <div className="flex items-end">
      <div className="flex flex-col items-center justify-end">
        <span className={`${poppins.className} text-[12px]`}>Days</span>
        <span className={`${inter.className} text-[32px] leading-none`}>{timeLeft.days}</span>
      </div>
      <span className="text-[#E07575] mx-[17px] text-[25px]">:</span>
      <div className="flex flex-col items-center">
        <span className={`${poppins.className} text-[12px]`}>Hours</span>
        <span className={`${inter.className} text-[32px] leading-none`}>{timeLeft.hours}</span>
      </div>
      <span className="text-[#E07575] mx-[17px] text-[25px]">:</span>
      <div className="flex flex-col items-center">
        <span className={`${poppins.className} text-[12px]`}>Minutes</span>
        <span className={`${inter.className} text-[32px] leading-none`}>{timeLeft.minutes}</span>
      </div>
      <span className="text-[#E07575] mx-[17px] text-[25px]">:</span>
      <div className="flex flex-col items-center">
        <span className={`${poppins.className} text-[12px]`}>Seconds</span>
        <span className={`${inter.className} text-[32px] leading-none`}>{timeLeft.seconds}</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
