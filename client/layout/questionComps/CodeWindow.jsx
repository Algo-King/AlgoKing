import React, { Component } from "react";
import { Link } from "react-router-dom";
import Output from "./Output.jsx";
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
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
    baseText: ``,
    codeString: `let vari = 'happy';
console.log(vari);  // happy
console.log(1 + 1);  // 2
console.log([1,2,3][0]);  // 1
['this','is','codesmith!'].forEach( e => (console.log(e)));
// this | is | codesmith!`,
    outputString: ``,
    // outputString: `
    // let vari = 'happy';
    // console.log(vari);
    // console.log(1 + 1);
    // console.log([1,2,3][0]);
    // ['a','b','c'].forEach( e => (console.log(e)));
    // // console.log(vari);
    // // console.log(vari);
    // `,
    show: false,
  };  

  updateCode = (e) => {
    console.log('IN UPDATE CODE ', e)
    this.setState({
      codeString : e,
    })
  }

  handleResetCode = (e) => {
    const codeString = this.state.baseText;
    this.setState({ codeString });
  }

  handleRunCode = (e) => {
    console.log('==========in run code')
    const outputString = this.state.codeString;
    this.setState( { outputString })
  }
  
  handleCodeSubmit = (e) => {
    e.preventDefault();
    console.log("next up, the log...");
    eval(this.state.codeString);
  }
  render() {  
    console.log("STATE", this.state.outputString);

    return (
      <div>
        <form onSubmit={this.handleCodeSubmit}>
          <div className="codemirror">
            <CodeMirror
              defaultValue={this.state.codeString}
              onChange={this.updateCode}
              options={options}
            />
          </div>
          <div>
            <button onClick={this.handleResetCode}>Reset Code</button>
            <button onClick={this.handleRunCode}>Run Code</button>
            <button>Submit</button>
          </div>
        </form>
        <Output outputString={this.state.outputString}/>
      </div>
    );
  }
  
};

export default CodeWindow;