import "./styles.css";
import React, { useState } from "react";

function Counter({ starttime, endTime }) {
  const [time, setTimer] = React.useState(starttime);
  const [end, setEndTime] = React.useState(endTime);

  React.useEffect(() => {
    StartTimer();
  }, []);
  const StartTimer = () => {
    const id = setInterval(() => {
      setTimer((prev) => {
        if (end == prev + 1) {
          clearInterval(id);
        }
        return prev + 1;
      });
    }, 1000);
  };
  return (
    <>
      <h1> start Time :{time}</h1>
      <h1>End Time :{end}</h1>
    </>
  );
}
export default function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <Counter starttime={10} endTime={20} />
    </div>
  );
}
