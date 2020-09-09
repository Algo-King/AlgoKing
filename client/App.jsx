import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Question from "./layout/Question.jsx";
import Leaderboard from "./layout/Leaderboard.jsx";
import Login from "./layout/Login.jsx";
import Register from "./layout/Register.jsx";
import NavBar from "./layout/NavBar.jsx";
import "./assets/styles.scss";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import Home from "./layout/home/Home.jsx";

import "./assets/scss/material-kit-pro-react.scss";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={Home} />
      </Fragment>
      <Fragment>
        <Route exact path="/leaderboard" component={Leaderboard} />
        <Route exact path="/question" component={Question} />
      </Fragment>
    </Router>
  );
};

export default App;
