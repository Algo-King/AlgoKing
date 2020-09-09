import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="navbar">
      <div>
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
      <div>Log Out Placeholder</div>
    </div>
  );
} 

export default NavBar;