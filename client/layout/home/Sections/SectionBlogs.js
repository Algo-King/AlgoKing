import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import TrendingUp from "@material-ui/icons/TrendingUp";
// core components
import GridContainer from "../../material-ui/GridContainer.js";
import GridItem from "../../material-ui/GridItem.js";
import Card from "../../material-ui/Card.js";
import CardBody from "../../material-ui/CardBody.js";
import CardHeader from "../../material-ui/CardHeader.js";
import Info from "../../material-ui/Info.js";
import Danger from "../../material-ui/Danger.js";
import Success from "../../material-ui/Success.js";
import Button from "../../material-ui/Button.js";

import blogsStyle from "../../../assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle";

import cardBlog4 from "../../../assets/img/examples/card-blog4.jpg";
import office2 from "../../../assets/img/office2.jpg";
import blog5 from "../../../assets/img/examples/blog5.jpg";
import blog6 from "../../../assets/img/examples/blog6.jpg";
import blog7 from "../../../assets/img/examples/blog7.jpg";
import blog8 from "../../../assets/img/examples/blog8.jpg";
import bg5 from "../../../assets/img/bg5.jpg";

const useStyles = makeStyles(blogsStyle);

export default function SectionBlogs({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
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
              <br />
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <Info>
                      <h6 className={classes.cardCategory}>Arrays</h6>
                    </Info>
                    <h3 className={classes.cardTitle}>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        TwoSum
                      </a>
                    </h3>
                    <p className={classes.description}>
                      Like so many organizations these days, Autodesk is a
                      company in transition. It was until recently a traditional
                      boxed software company selling licenses. Today, it’s
                      moving to a subscription model. Yet its own business model
                      disruption is only part of the story — and…
                    </p>
                    <b>9/3/2020</b>
                  </GridItem>
                </GridContainer>
              </Card>
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <Info>
                      <h6 className={classes.cardCategory}>Arrays</h6>
                    </Info>
                    <h3 className={classes.cardTitle}>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        TwoSum
                      </a>
                    </h3>
                    <p className={classes.description}>
                      Like so many organizations these days, Autodesk is a
                      company in transition. It was until recently a traditional
                      boxed software company selling licenses. Today, it’s
                      moving to a subscription model. Yet its own business model
                      disruption is only part of the story — and…
                    </p>
                    <b>9/3/2020</b>
                  </GridItem>
                </GridContainer>
              </Card>
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <Info>
                      <h6 className={classes.cardCategory}>Arrays</h6>
                    </Info>
                    <h3 className={classes.cardTitle}>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        TwoSum
                      </a>
                    </h3>
                    <p className={classes.description}>
                      Like so many organizations these days, Autodesk is a
                      company in transition. It was until recently a traditional
                      boxed software company selling licenses. Today, it’s
                      moving to a subscription model. Yet its own business model
                      disruption is only part of the story — and…
                    </p>
                    <b>9/3/2020</b>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Blogs 3 END */}
    </div>
  );
}
