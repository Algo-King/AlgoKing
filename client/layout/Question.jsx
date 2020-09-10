import CodeWindow from "./questionComps/CodeWindow.jsx";
import Output from "./questionComps/Output.jsx";
import Prompt from "./questionComps/Prompt.jsx";
import Results from "./questionComps/Results.jsx";
import Top from "./questionComps/Top.jsx";
import NavBar from "./NavBar.jsx";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// material ui imports
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: "100vh",
    padding: theme.spacing(2),
  },
}));

const Question = (query) => {
  const classes = useStyles();

  console.log("we are querying", query);

  const [questionData, setQuestionData] = useState({
    input: "",
    output: "",
    question: "",
    tests: "",
    todayQuestion: {},
  });

  const [time, setTime] = useState({
    seconds: 0,
  });

  useEffect(() => {
    getData();
  }, []);
  // set the data
  const getData = async () => {
    const res = await axios.get(`/api/challenges`);
    setQuestionData({ ...questionData, todayQuestion: res.data });
  };

  // make the axios request to get the question and all the tests

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Link to="/home"> Give up and go home</Link>
            <Top className="top" time={time} setTime={setTime} />
            <Prompt className="prompt" />
            <Results className="results" questionData={questionData} />
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <CodeWindow
              setQuestionData={setQuestionData}
              questionData={questionData}
              time={time}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
    // Create a left section continaer

    // create a right section container

    // <div>
    //   <NavBar />
    //   <Top
    //     className="top"
    //     quetionData={questionData}
    //     setQuestionData={setQuestionData}
    //   />
    //   <div className="questionBody">
    //     <Prompt className="prompt" />
    //     <div className="codePlacement">
    //       <CodeWindow
    //         setQuestionData={setQuestionData}
    //         questionData={questionData}
    //       />
    //       <Output />
    //     </div>
    //     <Results className="results" />
    //   </div>
    // </div>
  );
};

export default Question;
