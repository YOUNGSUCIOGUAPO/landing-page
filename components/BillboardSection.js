'use client'
import React, { useState } from 'react';
import CountdownTimer from './CountdownTimer';

const BillboardSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  return (
    <div className='billboard-container'>
      {/* Extract the time values without changing the rendering of CountdownTimer */}
      <CountdownTimer onTimeUpdate={setTimeLeft} className='hidden'/>
      <div className='overlay-content border-1 border-green-500'>
        <div className='flex'>
          <div className='h-[61px] w-[61px] rounded-[50%] border-1 border-red-500 mr-[23px] bg-white flex justify-center items-center flex-col'>
            <span>Days</span>
            <span>{timeLeft.days}</span>
          </div>
          <div className='h-[61px] w-[61px] rounded-[50%] border-1 border-red-500 mr-[23px] bg-white flex justify-center items-center flex-col'>
            <span>Hours</span>
            <span>{timeLeft.hours}</span>
          </div>
          <div className='h-[61px] w-[61px] rounded-[50%] border-1 border-red-500 mr-[23px] bg-white flex justify-center items-center flex-col'>
            <span>Minutes</span>
            <span>{timeLeft.minutes}</span>
          </div>
          <div className='h-[61px] w-[61px] rounded-[50%] border-1 border-red-500 mr-[23px] bg-white flex justify-center items-center flex-col'>
            <span>Seconds</span>
            <span>{timeLeft.seconds}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillboardSection;
