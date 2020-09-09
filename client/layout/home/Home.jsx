import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// sections of this Page
import SectionHeaders from "./Sections/SectionHeaders.js";
import SectionBlogs from "./Sections/PreviousQuestions.js";

import sectionsPageStyle from "../../assets/jss/material-kit-pro-react/views/sectionsPageStyle";

const useStyles = makeStyles(sectionsPageStyle);

export default function Home() {
  // setup hook
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  // need to have a useeffect that will initialize user state here - get request by jwt?
  useEffect(() => {
    console.log("here");
    // make axios get request to user data to set the state with the jwt token
    setFormData({ name: "anthony", email: "asdnasd@gmail.com" });
  }, []);
  console.log(formData);

  const classes = useStyles();
  return (
    <div>
      <div className={classes.main}>
        <SectionHeaders id="headers" />
        <SectionBlogs id="blogs" />
      </div>
    </div>
  );
}
