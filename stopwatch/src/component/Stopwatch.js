import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const startStopWatch = () => {
    setIsRunning(!isRunning);
  };

  const resetStopwatch = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div style={{margin:"10px"}}>
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(time)}</p>
      <div>
        {!isRunning ? (
          <button onClick={startStopWatch} style={{marginRight:"10px"}} name="Start">Start</button>
        ) : (
          <button onClick={startStopWatch} style={{marginRight:"10px"}} name="Stop">Stop</button>
        )}
        <button onClick={resetStopwatch} name="Reset">Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
