import React, { useState, useEffect } from "react";
// import axios
import axios from "axios";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import TrendingUp from "@material-ui/icons/TrendingUp";
import GridContainer from "../../material-ui/GridContainer.js";
import GridItem from "../../material-ui/GridItem.js";
import Card from "../../material-ui/Card.js";
import CardBody from "../../material-ui/CardBody.js";
import CardHeader from "../../material-ui/CardHeader.js";
import Info from "../../material-ui/Info.js";
import Danger from "../../material-ui/Danger.js";
import Success from "../../material-ui/Success.js";
import Button from "../../material-ui/Button.js";

// import blogsStyle from "../../../assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle";

import cardBlog4 from "../../../assets/img/examples/card-blog4.jpg";
import office2 from "../../../assets/img/office2.jpg";
import blog5 from "../../../assets/img/examples/blog5.jpg";
import blog6 from "../../../assets/img/examples/blog6.jpg";
import blog7 from "../../../assets/img/examples/blog7.jpg";
import blog8 from "../../../assets/img/examples/blog8.jpg";
import bg5 from "../../../assets/img/bg5.jpg";
import blogsStyle from "../../../assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle";
const useStyles = makeStyles(blogsStyle);

export default function SectionBlogs({ ...rest }) {
  const classes = useStyles();

  // setup react hook here,
  const [oldQuestion, setOldQuestion] = useState([
    {
      name: "",
      problem: "",
      example1: "",
      example2: "",
    },
  ]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await axios.get(`/api/oldChallenges/all`);
    setOldQuestion(res.data);
  };

  const sortedArr = oldQuestion.sort(function (a, b) {
    if (a.date < b.date) {
      return 1;
    }
    if (a.date > b.date) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  // use effect -- make axios request to the old challenges collection
  return (
    <div className="cd-section" {...rest}>
      {/* Blogs 2 START */}
      <div className={classes.blog}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={12}
              md={10}
              className={classes.mlAuto + " " + classes.mrAuto}
            >
              <h2 className={classes.title}>Instructions</h2>
              <GridContainer>
                <GridItem xs={12} sm={4} md={4}>
                  <Card plain blog>
                    <CardHeader plain image>
                      <a href="#pablito" onClick={(e) => e.preventDefault()}>
                        <img src={cardBlog4} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${cardBlog4})`,
                          opacity: "1",
                        }}
                      />
                    </CardHeader>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          1) Hit Start
                        </a>
                      </h4>
                      <h5 className={classes.description}>
                        Timer Starts immediately
                      </h5>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <Card plain blog>
                    <CardHeader plain image>
                      <a href="#pablito" onClick={(e) => e.preventDefault()}>
                        <img src={cardBlog4} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${cardBlog4})`,
                          opacity: "1",
                        }}
                      />
                    </CardHeader>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          2) Write Your Solution
                        </a>
                      </h4>
                      <h5 className={classes.description}>
                        Timer Starts immediately
                      </h5>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <Card plain blog>
                    <CardHeader plain image>
                      <a href="#pablito" onClick={(e) => e.preventDefault()}>
                        <img src={cardBlog4} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${cardBlog4})`,
                          opacity: "1",
                        }}
                      />
                    </CardHeader>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          3) Submit Code
                        </a>
                      </h4>
                      <h5 className={classes.description}>
                        Timer Starts immediately
                      </h5>
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Blogs 2 END */}
      {/* Blogs 3 START */}
      <div className={classes.blog}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={10}
              md={10}
              className={classes.mlAuto + " " + classes.mrAuto}
            >
              <h2 className={classes.title}>Previous Questions</h2>
              {sortedArr.map((el) => {
                return (
                  <Card plain blog className={classes.card}>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <Info>
                          <h6 className={classes.cardCategory}>Arrays</h6>
                        </Info>
                        <h3 className={classes.cardTitle}>
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            {el.name}
                          </a>
                        </h3>
                        <p className={classes.description}>
                          <div>Problem :{el.problem}</div>
                          <div>Input :{el.example1.input}</div>
                          <div>Output :{el.example1.output}</div>
                        </p>
                        <b>{el.date}</b>
                      </GridItem>
                    </GridContainer>
                  </Card>
                );
              })}
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Blogs 3 END */}
    </div>
  );
}
