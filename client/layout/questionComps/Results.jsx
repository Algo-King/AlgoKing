import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    height: "35vh",
    padding: theme.spacing(2),
  },
}));

const Results = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <h3>
            <b>Test Cases:</b>
          </h3>
          <h4>
            <b>Test Case: This is an example title</b>
          </h4>
          <h5>
            <b>Test Input:</b>
          </h5>
          <h5>
            <b>Your Output:</b>{" "}
          </h5>
          <h5>
            <b>Correct Output:</b>{" "}
          </h5>
        </Paper>
      </Grid>
    </div>
  );
};

export default Results;
