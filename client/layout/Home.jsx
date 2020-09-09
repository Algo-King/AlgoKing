import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home Page
      <Link
        to="/leaderboard"
        style={{ textDecoration: "none" }}
        variant="body2"
      >
        {"Go to leaderboard"}
      </Link>
      <Link to="/question" style={{ textDecoration: "none" }} variant="body2">
        {"Go to Question"}
      </Link>
    </div>
  );
};

export default Home;
