import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./layout/Home.jsx";
import Leaderboard from "./layout/Leaderboard.jsx";
import Login from "./layout/Login.jsx";
import Register from "./layout/Register.jsx";

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
