import React, { useState, useEffect } from "react";

const NixieTimer = ({ targetDate, onComplete }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const target = new Date(targetDate);
    const diff = target - now;

    if (diff <= 0) {
      onComplete?.();
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="space-y-1">
      <h1 className="text-white text-xl text-center font-[VT323] font-bold drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]">
        starts in
      </h1>
      <div className="flex justify-center items-baseline w-2/3 mx-auto lg:w-full gap-1 lg:gap-4">
        <TimeCard timeLeft={timeLeft.days} timeName="DAYS" />
        <span className="text-3xl lg:text-7xl text-yellow-400 drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]">
          :
        </span>
        <TimeCard timeLeft={timeLeft.hours} timeName="HOURS" />
        <span className="text-3xl lg:text-7xl text-yellow-400 drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]">
          :
        </span>
        <TimeCard timeLeft={timeLeft.minutes} timeName="MINUTES" />
        <span className="text-3xl lg:text-7xl text-yellow-400 drop-shadow-[0_2.2px_2.2px_rgba(0,0,0,0.8)]">
          :
        </span>
        <TimeCard timeLeft={timeLeft.seconds} timeName="SECONDS" />
      </div>
    </div>
  );
};

export default NixieTimer;

const TimeCard = ({ timeLeft, timeName }) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-1 rounded-lg px-2">
      <h1 className="text-5xl lg:text-7xl font-bold text-yellow-200 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] font-[VT323]">
        {String(timeLeft).padStart(2, "0")}
      </h1>
      <h2 className="text-sm lg:text-lg font-[VT323] font-bold tracking-wide text-yellow-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
        {timeName}
      </h2>
    </div>
  );
};
