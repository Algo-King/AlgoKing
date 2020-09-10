import React, { useState, useEffect } from "react";
import axios from "axios";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// sections of this Page
import SectionHeaders from "./Sections/SectionHeaders.js";
import SectionBlogs from "./Sections/PreviousQuestions.js";

import setAuthToken from "../../utils/setAuthToken";
import sectionsPageStyle from "../../assets/jss/material-kit-pro-react/views/sectionsPageStyle";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles(sectionsPageStyle);

export default function Home() {
  // setup hook
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  if (!localStorage.token) {
    return <Redirect to="/" />;
  }
  // need to have a useeffect that will initialize user state here - get request by jwt?
  useEffect(() => {
    const fetchData = async () => {
      if (localStorage.token) {
        setAuthToken(localStorage.token); // global header
      }

      try {
        const res = await axios.get("http://localhost:5000/api/auth");
        setFormData(res.data);
      } catch {
        console.log("error");
      }
    };
    fetchData();
  }, []);

  const classes = useStyles();
  return (
    <div>
      <div className={classes.main}>
        <SectionHeaders id="headers" name={formData.name} />
        <SectionBlogs id="blogs" />
      </div>
    </div>
  );
}
