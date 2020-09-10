import React, { Component } from "react";
import { Link } from "react-router-dom";


class Output extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    codeString: '',
    outputString: '',
    show: false,
  };  

  render () {
    console.log('props', this.props);
    const regex = /console.log/gi;
    const output = this.props.outputString.replace(regex, 'outputArray.push');
    console.log("output", output);
    let outputArray = [];
    eval(output);
    console.log('outputArray', outputArray);
    const renderArray = outputArray.map( e => (<div>{e}</div>));
    console.log('renderArray', renderArray);
    return (
      <div>
        OUTPUT
        {renderArray}
      </div>
    );
  };
};

export default Output;