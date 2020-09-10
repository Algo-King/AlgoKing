import React from 'react';
import { Link } from 'react-router-dom';
import Timer from './Timer.jsx';

const Top = (props) => {
  const { questionData, setQuestionData } = props;
  return (
    <div>
      <div className="questionDate">THURSDAY</div>
      <Timer questionData={questionData} setQuestionData={setQuestionData} />
      <div>TIMER PLACEHOLDER: 5:23</div>
    </div>
  );
};

export default Top;
