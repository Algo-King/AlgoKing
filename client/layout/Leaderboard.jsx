import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { Link } from "react-router-dom";

// ! MateriaUI update
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
// import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    // color: theme.palette.text.secondary,
    height: "10vh",
  },
  paper2: {
    padding: theme.spacing(2),
    // textAlign: "center",
    // color: theme.palette.text.secondary,
    height: "90vh",
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
          <Link to="/home">Go Home</Link>
          <Paper className={classes.paper}>
            <h2>DAILY LEADERBOARD</h2>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper2}>
            {sortedArr.map((el) => {
              return (
                <Container style={{ height: "5vh" }}>
                  <span>
                    <b>Name:</b> {el.name}{" "}
                  </span>
                  <span>
                    <b>Score: </b>
                    {el.time} seconds
                  </span>
                  <Divider />
                </Container>
              );

              // <Container>{el.name}</div>;
            })}
          </Paper>
        </Grid>
      </Container>
      <Container></Container>
    </React.Fragment>
  );
};

export default Leaderboard;
