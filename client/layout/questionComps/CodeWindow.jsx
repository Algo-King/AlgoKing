import React, { Component } from "react";
import { Link } from "react-router-dom";
// Codemirror Styling
require('codemirror/lib/codemirror.css');

// Codemirror Languages
require('codemirror/mode/javascript/javascript');

// Codemirror Themes
require('codemirror/mode/markdown/markdown');
require('codemirror/theme/monokai.css');
require('codemirror/theme/midnight.css');
require('codemirror/theme/lesser-dark.css');
require('codemirror/theme/solarized.css');

// Codemirror Component
const CodeMirror = require('react-codemirror');
const options = {
    lineNumbers: true,
    mode: 'sql',
    theme: 'lesser-dark',
  };

class CodeWindow extends Component {
  constructor(props) {
    super(props);
    this.handleCodeSubmit = this.handleCodeSubmit.bind(this);
    this.updateCode = this.updateCode.bind(this);
  }

  state = {
    codeString: '',
    show: false,
  };  

  updateCode = (e) => {
    this.setState({
      codeString : e,
    })
  }

  handleCodeSubmit = (e) => {
    e.preventDefault();
    console.log("next up, the log...");
    eval(this.state.codeString);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleCodeSubmit}>
          <div className="codemirror">
            <CodeMirror
              onChange={this.updateCode}
              options={options}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
  
};

export default CodeWindow;