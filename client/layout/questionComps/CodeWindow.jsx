import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Codemirror Styling
// require('codemirror/lib/codemirror.css');
import "codemirror/lib/codemirror.css";
import axios from "axios";

// Codemirror Languages
import "codemirror/mode/javascript/javascript";

// Codemirror Themes
import "codemirror/mode/markdown/markdown";
import "codemirror/theme/blackboard.css";
require("codemirror/addon/edit/closebrackets");

//material ui
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

// Codemirror Component
const CodeMirror = require("react-codemirror");

const options = {
  lineNumbers: true,
  autoCloseBrackets: true,
  mode: "javascript",
  theme: "blackboard",
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    height: "50vh",
    padding: theme.spacing(2),
  },
}));

const CodeWindow = (props) => {
  const classes = useStyles();
  const { setQuestionData, questionData } = props;

  const [codeWindowData, setCodeWindowData] = useState({
    name: "",
    problem: "",
    example1: "",
    example2: "",
    tests: "",
  });

  const updateCode = (e) => {
    setQuestionData({ ...questionData, input: e });
  };

  const handleResetCode = (e) => {
    setQuestionData({
      input: "",
      output: "",
    });
  };

  // Bring in questionData

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await axios.get(`/api/challenges`);
    setCodeWindowData(res.data);
  };
  // console.log("Here is a CW Data: ", codeWindowData.tests.test1);

  // ! handle code run
  const handleCodeRun = (e) => {
    e.preventDefault();
    console.log("==========in run code");
    const outputString = questionData.input;
    // console.log('props', this.props);
    const regex = /console.log/gi;
    const output = outputString.replace(regex, "outputArray.push");
    console.log("output", output);
    let outputArray = [];
    eval(output);
    console.log("outputArray", outputArray);
    const renderArray = outputArray.map((e) => <div>{e}</div>);
    console.log("renderArray", renderArray);

    setQuestionData({
      ...questionData,
      input: questionData.input,
      output: renderArray,
    });
  };

  // ! code submit then redirect to the leaderboard, which happens after submitted
  const handleCodeSubmit = (e) => {
    e.preventDefault();
    let outputData = eval("(" + questionData.input + ")")();
    outputData = JSON.stringify(outputData);
    console.log("this is output ", outputData);

    // todo: do test case checks here

    let consoleData = eval("(" + questionData.input + ")");
    console.log("this is console data in handleCodeSubmit", consoleData);
    setQuestionData({
      ...questionData,
      input: questionData.input,
      output: outputData,
    });
  };

  // console.log("This is questionData: ", questionData.output);
  return (
    <div className={classes.root}>
      <div className="codemirror">
        <CodeMirror onChange={updateCode} options={options} />
      </div>
      <Button variant="contained" onClick={handleResetCode}>
        Reset
      </Button>
      {/* We need to figure this out */}
      <Button variant="contained" color="secondary" onClick={handleCodeRun}>
        Run
      </Button>
      <Button variant="contained" color="primary" onClick={handleCodeSubmit}>
        Submit
      </Button>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <b>return output:</b>

          <div>{questionData.output}</div>
        </Paper>
      </Grid>
      {/* create a box for vertical */}
    </div>
  );
};

export default CodeWindow;
