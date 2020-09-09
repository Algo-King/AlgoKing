import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar.jsx";

const Home = () => {
  return (
    <NavBar />
    <div>
      Home Page
      <Link
        to="/leaderboard"
        style={{ textDecoration: "none" }}
        variant="body2"
      >
        {"Go to leaderboard"}
      </Link>
    </div>
  );
};

export default Home;
