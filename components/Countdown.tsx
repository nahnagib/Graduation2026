import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC = () => {
  // Libya time (UTC+02:00) to avoid timezone issues for remote viewers
  const targetDate = new Date('2026-02-08T09:45:00+02:00').getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const TimerBox: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-xl p-4 min-w-[80px] sm:min-w-[100px] border border-white/20 shadow-xl transition-all duration-300 hover:scale-105">
      <span className="text-3xl sm:text-5xl font-bold text-white tabular-nums">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-[10px] sm:text-xs uppercase tracking-widest text-blue-200 mt-1 font-semibold">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex space-x-3 sm:space-x-6 justify-center py-8">
      <TimerBox value={timeLeft.days} label="Days" />
      <TimerBox value={timeLeft.hours} label="Hours" />
      <TimerBox value={timeLeft.minutes} label="Minutes" />
      <TimerBox value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default Countdown;
