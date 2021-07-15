import React, { useEffect, useRef, useState } from 'react';
import '../../App.css';
import useSound from 'use-sound';
import { useInterval } from '../../hooks/useInterval';

import bayramSound from '../../Assets/bayram-soundeffect.mp3';

const BayramDate = ({ second }) => {
  const day = Math.floor(second / (3600 * 24));
  const hourLeft = Math.floor(second - day * 86400);
  const hour = Math.floor(hourLeft / 3600);
  const minuteLeft = Math.floor(hourLeft - hour * 3600);
  const minute = Math.floor(minuteLeft / 60);
  return (
    <div className="text-white text-center">
      <p className="text-5xl mb-24">
        {day} Gün, {hour} Saat, {minute} Dakika, {second % 60} Saniye until
      </p>
      <p className="text-6xl"> BAYRAAAAAAAAAAAMMMMMMMMMMMM!!!</p>
    </div>
  );
};

function BayramCounter() {
  const [time, setTime] = useState();
  const [play] = useSound(bayramSound);

  useEffect(() => {
    const remainingSeconds = Math.floor(
      (new Date('July 22, 2021 00:00:00').getTime() - new Date().getTime()) / 1000
    );
    setTime(remainingSeconds);
  }, []);

  useInterval(
    () => {
      setTime(time - 1);
      if (time === 1) play();
    },
    time === 0 ? null : 1000
  );

  return (
    <div className="bg-main-dark h-screen flex justify-center items-center flex-col">
      <BayramDate second={time} />
      <button
        type="button"
        onClick={play}
        className="mt-20 p-4 border-2 rounded-md border-neutral-white text-neutral-white hover:border-main-yellow hover:text-main-yellow font-bold text-2xl">
        Press HERE to celebrate Bayraaaaaammm earlier
      </button>
    </div>
  );
}

export default BayramCounter;
