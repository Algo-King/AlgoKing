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

// Codemirror Component
const CodeMirror = require("react-codemirror");
const options = {
  lineNumbers: true,
  mode: "sql",
  theme: "lesser-dark",
};

const CodeWindow = () => {
  const [output, setOutput] = useState({
    codeString: "",
    show: false,
  });

  const updateCode = (e) => {
    setOutput({
      codeString: e,
    });
  };

  const handleCodeSubmit = (e) => {
    e.preventDefault();
    eval(output.codeString);
  };

  // constructor(props) {
  //   super(props);
  //   this.handleCodeSubmit = this.handleCodeSubmit.bind(this);
  //   this.updateCode = this.updateCode.bind(this);
  // }

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
