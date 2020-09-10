import React, { useState, useEffect } from "react";

// https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks

const Timer = (props) => {
  const { time, setTime } = props;
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  // function toggle() {
  //   setIsActive(!isActive);
  //   console.log("This is seconds: ", seconds);
  // }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
        setTime({ seconds: seconds });
        // setQuestionData({ ...questionData, seconds: seconds });
      }, 1000);
      // console.log(seconds);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="app">
      <div className="time">
        <h1>Timer: {seconds}s</h1>
      </div>
      {/* <div className="row">
        <button
          className={`button button-primary button-primary-${
            isActive ? "active" : "inactive"
          }`}
          onClick={toggle}
        >
          {isActive ? "Pause" : "Start"}
        </button>
      </div> */}
    </div>
  );
};

export default Timer;
