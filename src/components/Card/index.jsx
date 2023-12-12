import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

function index({ open, setOpen }) {
  const newYearDate = new Date("January 1, 2024 00:00:00 GMT+00:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = newYearDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      };
    } else {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCelebrateClick = () => {
    var count = 200;
    var defaults = {
      origin: { y: 0.7 },
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  return (
    <div
      className={
        !open
          ? `w-[26rem] z-50 h-auto bg-white absolute -left-[45rem] max-sm:-left-[23rem] cursor-pointer transition-all duration-500 rounded-[30px] p-10`
          : `w-[25rem] z-50 h-auto bg-white absolute -left-[15rem] max-sm:left-[2rem] cursor-pointer transition-all duration-500 rounded-[30px] p-10`
      }
    >
      <h1 className="text-3xl font-normal mb-0 font-serif ">
        🎄Yeni Yıl Geri Sayımı
      </h1>
      <hr className="mb-5 mt-2" />
      <p className="text-lg font-sans"> ⏳ Kalan Süre:</p>
      <p className="text-lg font-normal font-sans">
        🕐 {timeLeft.days} gün {timeLeft.hours} saat {timeLeft.minutes} dakika{" "}
        {timeLeft.seconds} saniye
      </p>
      <div className="w-full flex items-center justify-between">
        {timeLeft.days === 0 &&
          timeLeft.hours === 0 &&
          timeLeft.minutes === 0 &&
          timeLeft.seconds === 0 && (
            <button
              className="w-full mt-6 font-normal font-sans float-right border border-[#8993F0] bg-white p-4 rounded-[15px] text-[#8993F0] transition-all duration-300 hover:bg-[#8993F0] hover:text-white active:scale-110"
              onClick={handleCelebrateClick}
            >
              Kutla 🎉
            </button>
          )}
      </div>
      <button
        onClick={() => setOpen(!open)}
        className="w-14 p-4 bg-white absolute -top-3 ring-4 ring-[#DECAEC] text-[#8993F0] font-bold rounded-[17px] -right-10 z-50 transition-all duration-300"
      >
        {open ? "X" : ">"}
      </button>
    </div>
  );
}

export default index;
