'use client';

import React, { useEffect, useState } from 'react';
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
  const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 23, minutes: 30, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          return { ...prevTime, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { ...prevTime, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { ...prevTime, hours: hours - 1, minutes: 59, seconds: 59 };
        } else if (days > 0) {
          return { ...prevTime, days: days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return prevTime;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
