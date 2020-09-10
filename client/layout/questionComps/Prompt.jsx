import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Divider from "@material-ui/core/Divider";
const Prompt = () => {
  const [question, setQuestion] = useState({
    name: "",
    problem: "",
    example1: "",
    example2: "",
  });

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await axios.get(`/api/challenges`);
    setQuestion(res.data);
  };
  console.log(question);

  return (
    <div>
      <h2>Question: {question.name}</h2>
      <Divider />
      <b>{question.problem}</b>
      <div>{question.example1.input}</div>
      <div>{question.example1.output}</div>
    </div>
  );
};

export default Prompt;
