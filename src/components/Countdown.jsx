import { useEffect, useState } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      return { days, hours, minutes, seconds };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-8">
      <h1 className="text-[#f5e6c5] text-2xl text-center font-oi 
                     drop-shadow-[3px_3px_0px_#000] tracking-widest uppercase">
        Starts In
      </h1>

      <div className="flex justify-center items-baseline w-11/12 mx-auto lg:w-full gap-2 lg:gap-6">
        <TimeCard timeLeft={timeLeft.days} timeName="Days" />
        <Colon />
        <TimeCard timeLeft={timeLeft.hours} timeName="Hours" />
        <Colon />
        <TimeCard timeLeft={timeLeft.minutes} timeName="Minutes" />
        <Colon />
        <TimeCard timeLeft={timeLeft.seconds} timeName="Seconds" />
      </div>
    </div>
  );
};

export default CountdownTimer;

const Colon = () => (
  <span className="text-4xl lg:text-7xl font-vt323 text-[#f5e6c5] 
                   drop-shadow-[2px_2px_0px_#000]">
    :
  </span>
);

const TimeCard = ({ timeLeft, timeName }) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-2 
                    bg-[#2b1d0e] border-2 border-[#f5e6c5] rounded-xl px-4 py-3 
                    shadow-[4px_4px_0px_#000] w-20 lg:w-28">
      <h1 className="text-4xl lg:text-6xl font-kavoon text-[#f5e6c5] 
                     drop-shadow-[2px_2px_0px_#000]">
        {timeLeft}
      </h1>
      <h2 className="text-sm lg:text-lg font-bold font-spicy uppercase 
                     text-[#f5e6c5] tracking-wide drop-shadow-[1px_1px_0px_#000]">
        {timeName}
      </h2>
    </div>
  );
};
