import React from "react";
import { Link } from "react-router-dom";
import Timer from "./Timer.jsx";

const Top = (props) => {
  const { questionData, setQuestionData } = props;
  return (
    <div>
      <Timer questionData={questionData} setQuestionData={setQuestionData} />
    </div>
  );
};

export default Top;
