import "./styles.css";
import React, { useState } from "react";
import Counter from "./Components/EndStop";
import Timer from "./Components/StartPause";
import Scroll from "./Components/Scroll.jsx";
import Image from "./Components/Image.jsx";

export default function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <Timer /> <br />
      <br />
      <Scroll /> <br />
      <br />
      <Image />
      {/* <Counter starttime={10} endTime={20} /> */}
    </div>
  );
}
