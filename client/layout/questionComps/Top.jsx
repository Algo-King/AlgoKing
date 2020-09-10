import React from "react";
import { Link } from "react-router-dom";
import Timer from "./Timer.jsx";

const Top = (props) => {
  const { time, setTime } = props;
  return (
    <div>
      <Timer time={time} setTime={setTime} />
    </div>
  );
};

export default Top;
