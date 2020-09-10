import React, { Component } from "react";
import { Link } from "react-router-dom";
// Codemirror Styling
// require('codemirror/lib/codemirror.css');
import 'codemirror/lib/codemirror.css';

// Codemirror Languages
import 'codemirror/mode/javascript/javascript';

// Codemirror Themes
import 'codemirror/mode/markdown/markdown';
import 'codemirror/theme/blackboard.css';


// Codemirror Component
const CodeMirror = require('react-codemirror');
const options = {
    lineNumbers: true,
    mode: 'javascript',
    theme: 'blackboard',
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

  handleResetCode = (e) => {
    this.setState({
      codeString : '',
    })
  }

  handleRunCode = (e) => {
    eval(this.state.codeString);
    console.log('in run code')
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
          <div>
            <button>Reset Code</button>
            <button>Run Code</button>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
  
};

export default CodeWindow;