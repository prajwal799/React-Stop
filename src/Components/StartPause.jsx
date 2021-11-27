import React, { useEffect, useState, useRef } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);
  useEffect(() => {
    StartTimer();
  }, []);

  function StartTimer() {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setCount((prev) => {
          return prev + 1;
        });
      }, 1000);
    }
  }
  const PauseTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => StartTimer()}>Start</button>
      <button onClick={PauseTimer}>Pause</button>
    </div>
  );
};

export default Timer;
