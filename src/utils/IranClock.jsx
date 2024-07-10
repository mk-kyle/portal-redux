import React, { useState, useEffect } from 'react';

const useIranTime = (
) => {
  const [iranTime, setIranTime] = useState({ hour: "", minute: "" });

  useEffect(() => {
    const iranTimeZone = "Asia/Tehran";
    const now = new Date();
    const formattedTime = now.toLocaleString("en-US", {
      timeZone: iranTimeZone,
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    });

    const [hour, minute] = formattedTime.split(":");

    setIranTime({ hour, minute });
  }, []);

  return iranTime;
};

const IranClock = (
) => {
  const iranTime = useIranTime();

  return (
    <div className='flex justify-end gap-1 mb-5'>
      <p className='bg-slate-500 rounded-sm p-1 text-white'>{iranTime.hour}</p>
      <span className='text-xl'>:</span>
      <p className='bg-slate-500 rounded-sm p-1 text-white'>{iranTime.minute}</p>
    </div>
  );
};

export default IranClock;
