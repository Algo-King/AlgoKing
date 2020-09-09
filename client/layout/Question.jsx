import React from "react";
import { Link } from "react-router-dom";

const Question = () => {
  return (
    <div>
      Question Page
      <Link
        to="/leaderboard"
        style={{ textDecoration: "none" }}
        variant="body2"
      >
        {"Go to leaderboard"}
      </Link>
      <Link to="/home" style={{ textDecoration: "none" }} variant="body2">
        {"Go to home"}
      </Link>
    </div>
  );
};

export default Question;
