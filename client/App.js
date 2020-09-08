import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./layout/Home";
import Leaderboard from "./layout/Leaderboard";
import Login from "./layout/Login";
import Register from "./layout/Register";

const App = () => (
  <Router>
    <Fragment>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/leaderboard" component={Leaderboard} />
      <Route exact path="/home" component={Home} />
    </Fragment>
  </Router>
);

export default App;
