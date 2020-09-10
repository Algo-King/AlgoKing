import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Codemirror Styling
require("codemirror/lib/codemirror.css");

// Codemirror Languages
require("codemirror/mode/javascript/javascript");
// Codemirror Themes
require("codemirror/mode/markdown/markdown");
require("codemirror/theme/monokai.css");
require("codemirror/theme/midnight.css");
require("codemirror/theme/lesser-dark.css");
require("codemirror/theme/solarized.css");
require("codemirror/addon/edit/closebrackets");

// Codemirror Component
const CodeMirror = require("react-codemirror");
const options = {
  lineNumbers: true,
  autoCloseBrackets: true,
  mode: "sql",
  theme: "lesser-dark",
};

const CodeWindow = (props) => {
  const { setQuestionData, questionData } = props;

  const updateCode = (e) => {
    setQuestionData({
      input: e,
    });
  };

  const handleCodeSubmit = (e) => {
    e.preventDefault();

    // var customJSfromServer = questionData.input;
    // var evalValue = new Function(customJSfromServer)();
    // console.log(evalValue); // should be "6";
    let outputData = eval("(" + questionData.input + ")")();
    console.log("this is output ", outputData);

    setQuestionData({
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
      </form>
    </div>
  );
};

export default CodeWindow;
