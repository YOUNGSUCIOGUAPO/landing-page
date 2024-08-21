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

const CountdownTimer = ({ onTimeUpdate }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 23, minutes: 30, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const { days, hours, minutes, seconds } = prevTime;

        const newTime = {
          days,
          hours: seconds > 0 ? hours : hours > 0 ? hours - 1 : 0,
          minutes: seconds > 0 ? minutes : minutes > 0 ? minutes - 1 : hours > 0 ? 59 : 0,
          seconds: seconds > 0 ? seconds - 1 : 59,
        };

        if (onTimeUpdate) onTimeUpdate(newTime);

        if (newTime.days === 0 && newTime.hours === 0 && newTime.minutes === 0 && newTime.seconds === 0) {
          clearInterval(timer);
        }

        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onTimeUpdate]);

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
