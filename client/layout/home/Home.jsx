import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components - fromt materialui folder
import Header from "../material-ui/Header";
import HeaderLinks from "../material-ui/HeaderLinks";
// sections of this Page
import SectionHeaders from "./Sections/SectionHeaders.js";
// import SectionFeatures from "./Sections/SectionFeatures.js";
import SectionBlogs from "./Sections/PreviousQuestions.js";

import sectionsPageStyle from "../../assets/jss/material-kit-pro-react/views/sectionsPageStyle";

const useStyles = makeStyles(sectionsPageStyle);

export default function Home() {
  React.useEffect(() => {
    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1
    );
    if (window.location.href.lastIndexOf("#") > 0) {
      document.getElementById(href).scrollIntoView();
    }
  });
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
