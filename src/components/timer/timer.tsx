import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { formatTimer } from '../../todo-helpers';

export default function Timer({
  timerCreated,
  done,
  id,
}: {
  timerCreated: number;
  done: boolean;
  id: number;
}) {
  const getSavedTimer = () => {
    const savedTimer = Number(localStorage.getItem(`timer${id}`));
    if (typeof savedTimer === 'number') {
      if (savedTimer <= 0) {
        return 0;
      }
      return savedTimer;
    }
  };
  const [timer, setTimer] = useState(getSavedTimer() || timerCreated);
  const startTime: MutableRefObject<number> = useRef(Date.now());
  const timerId: MutableRefObject<
    number | undefined | ReturnType<typeof setTimeout>
  > = useRef(undefined);
  const getRemainingTime = () => {
    const timeDiff = Date.now() - startTime.current;
    const remaining = Math.round(timer - timeDiff / 1000);
    return remaining;
  };
  const tick = () => {
    let remaining = getRemainingTime();
    if (remaining < 0) {
      remaining = 0;
      pauseTimer();
    }
    console.log(remaining);
    setTimer(remaining);
  };

  const startTimer = () => {
    if (!timerId.current) {
      startTime.current = Date.now();
      timerId.current = window.setInterval(() => {
        tick();
      }, 1000);
    }
  };

  const pauseTimer = () => {
    clearInterval(timerId.current);
    timerId.current = undefined;
  };

  useEffect(() => {
    localStorage.setItem(`timer${id}`, String(timer));
  }, [timer]);

  useEffect(() => {
    return () => {
      pauseTimer();
    };
  }, []);

  useEffect(() => {
    done && pauseTimer();
  }, [done]);

  return (
    <span className='description'>
      <button className='icon icon-play' onClick={() => startTimer()} />
      <button className='icon icon-pause' onClick={() => pauseTimer()} />
      <span className='timer'>{formatTimer(timer)}</span>
    </span>
  );
}
