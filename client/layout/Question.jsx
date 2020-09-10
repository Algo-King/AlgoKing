import React from "react";
import { Link } from "react-router-dom";
import CodeWindow from "./questionComps/CodeWindow.jsx";
import Output from "./questionComps/Output.jsx";
import Prompt from "./questionComps/Prompt.jsx";
import Results from "./questionComps/Results.jsx";
import Top from "./questionComps/Top.jsx";
import NavBar from "./NavBar.jsx";

const Question = () => {
  return (
    <div>
      <NavBar />
      <Top className="top" />
      <div className="questionBody">
        <Prompt className="prompt" />
        <div className="codePlacement">
          <CodeWindow />
          <Output />
        </div>
        <Results className="results" />
      </div>
    </div>
  );
};

export default Question;
