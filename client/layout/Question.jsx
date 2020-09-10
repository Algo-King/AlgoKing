import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CodeWindow from "./questionComps/CodeWindow.jsx";
import Output from "./questionComps/Output.jsx";
import Prompt from "./questionComps/Prompt.jsx";
import Results from "./questionComps/Results.jsx";
import Top from "./questionComps/Top.jsx";
import NavBar from "./NavBar.jsx";

const Question = () => {
  const [questionData, setQuestionData] = useState({
    input: "",
    output: "",
  });
  return (
    <div>
      <NavBar />
      <Top className="top" />
      <div className="questionBody">
        <Prompt className="prompt" />
        <div className="codePlacement">
          <CodeWindow
            setQuestionData={setQuestionData}
            questionData={questionData}
          />
          <Output />
        </div>
        <Results className="results" />
      </div>
    </div>
  );
};

export default Question;
