import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import axios from "axios";

// ! MateriaUI update
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
// import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Leaderboard = () => {
  const classes = useStyles();
  const [leaderData, setLeaderData] = useState([
    {
      name: "",
      challengeName: "",
      time: 0,
      score: 0,
    },
  ]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await axios.get(`/api/submissions/all`);
    setLeaderData(res.data);
  };

  const sortedArr = leaderData.sort(function (a, b) {
    if (a.time > b.time) {
      return 1;
    }
    if (a.time < b.time) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Grid item xs={12}>
          <Paper className={classes.paper}>Daily Leaderboard</Paper>
        </Grid>
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
        />
      </Container>
      <Grid item xs={12}>
        <Paper className={classes.paper}>xs=12</Paper>
      </Grid>

      <Container>
        {sortedArr.map((el) => {
          return (
            <Container style={{ height: "5vh" }}>
              <span>{el.name}</span> <span>{el.challengeName}</span>{" "}
              <span>{el.time} </span>
            </Container>
          );

          // <Container>{el.name}</div>;
        })}
      </Container>
    </React.Fragment>
  );
};

export default Leaderboard;
