import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Codemirror Styling
// require('codemirror/lib/codemirror.css');
import "codemirror/lib/codemirror.css";

// Codemirror Languages
import "codemirror/mode/javascript/javascript";

// Codemirror Themes
import "codemirror/mode/markdown/markdown";
import "codemirror/theme/blackboard.css";
require("codemirror/addon/edit/closebrackets");

// Codemirror Component
const CodeMirror = require("react-codemirror");
const options = {
  lineNumbers: true,
  autoCloseBrackets: true,
  mode: "javascript",
  theme: "blackboard",
};

const CodeWindow = (props) => {
  const { setQuestionData, questionData } = props;

  const updateCode = (e) => {
    setQuestionData({
      input: e,
    });
  };

  const handleResetCode = (e) => {
    setQuestionData({
      input: "",
      output: "",
    });
  };

  const handleCodeSubmit = (e) => {
    e.preventDefault();

    // var customJSfromServer = questionData.input;
    // var evalValue = new Function(customJSfromServer)();
    // console.log(evalValue); // should be "6";

    // this gets the return values
    let outputData = eval("(" + questionData.input + ")")();
    console.log("this is output ", outputData);

    let consoleData = eval("(" + questionData.input + ")");
    console.log("this is console data ", consoleData);

    setQuestionData({
      input: questionData.input,
      output: outputData,
    });
    // eval(questionData.input);
  };

  console.log(questionData);
  return (
    <div>
      <form onSubmit={handleCodeSubmit}>
        <div className="codemirror">
          <CodeMirror onChange={updateCode} options={options} />
        </div>
        <button>Submit</button>
        <button>Reset Code</button>
        <button>Run Code</button>
      </form>
    </div>
  );
};

export default CodeWindow;
