import "./styles.css";
import React, { useState } from "react";
function CountDown({ initial }) {
  const [time, setTime] = React.useState(initial);
  const [isRunning, setIsRunning] = React.useState(false);
  const timerRef = React.useRef();

  React.useEffect(() => {
    startTimer();
  }, []);

  const startTimer = () => {
    if (isRunning) {
      return;
    }
    timerRef.current = setInterval(() => {
      setTime((prev) => {
        if (prev - 1 == 0) {
          clearInterval(timerRef.current);
        }
        return prev - 1;
      });
    }, 1000);
    setIsRunning(true);
  };
  return (
    <>
      <h1>Counter</h1>
      <h3>{time}</h3>
    </>
  );
}
export default function App() {
  const [hide, setHide] = useState(false);
  return (
    <div className="App">
      {!hide && <CountDown initial={5} />}
      <button onClick={() => setHide(!hide)}>Toggle</button>
    </div>
  );
}
