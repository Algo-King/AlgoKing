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

  const handleCodeRun = (e) => {
    e.preventDefault();
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
      <Button variant="contained" color="primary" onClick={handleCodeRun}>
        Submit
      </Button>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <b>return output:</b>
          {questionData.output}
        </Paper>
      </Grid>
      {/* create a box for vertical */}
    </div>
  );
};

export default CodeWindow;
