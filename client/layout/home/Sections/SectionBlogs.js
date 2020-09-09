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
      {/* Blogs 1 START */}
      <div className={classes.blog}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={10}
              md={10}
              className={classes.mlAuto + " " + classes.mrAuto}
            >
              <h2 className={classes.title}>Popular Subjects</h2>
              <br />
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
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
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <Info>
                      <h6 className={classes.cardCategory}>ENTERPRISE</h6>
                    </Info>
                    <h3 className={classes.cardTitle}>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Autodesk looks to future of 3D printing with Project
                        Escher
                      </a>
                    </h3>
                    <p className={classes.description1}>
                      Like so many organizations these days, Autodesk is a
                      company in transition. It was until recently a traditional
                      boxed software company selling licenses. Today, it’s
                      moving to a subscription model. Yet its own business model
                      disruption is only part of the story — and…
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        {" "}
                        Read More{" "}
                      </a>
                    </p>
                    <p className={classes.author}>
                      by{" "}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <b>Mike Butcher</b>
                      </a>{" "}
                      , 2 days ago
                    </p>
                  </GridItem>
                </GridContainer>
              </Card>
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={7} md={7}>
                    <Danger>
                      <h6 className={classes.cardCategory}>
                        <TrendingUp />
                        TRENDING
                      </h6>
                    </Danger>
                    <h3 className={classes.cardTitle}>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        6 insights into the French Fashion landscape
                      </a>
                    </h3>
                    <p className={classes.description1}>
                      Like so many organizations these days, Autodesk is a
                      company in transition. It was until recently a traditional
                      boxed software company selling licenses. Today, it’s
                      moving to a subscription model. Yet its own business model
                      disruption is only part of the story — and…
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        {" "}
                        Read More{" "}
                      </a>
                    </p>
                    <p className={classes.author}>
                      by{" "}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <b>Mike Butcher</b>
                      </a>{" "}
                      , 2 days ago
                    </p>
                  </GridItem>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablito" onClick={(e) => e.preventDefault()}>
                        <img src={office2} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${office2})`,
                          opacity: "1",
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Blogs 1 END */}
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
              <h2 className={classes.title}>Latest Blogposts 2</h2>
              <br />
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
                      <Info>
                        <h6 className={classes.cardCategory}>ENTERPRISE</h6>
                      </Info>
                      <h4 className={classes.cardTitle}>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Autodesk looks to future of 3D printing with Project
                          Escher
                        </a>
                      </h4>
                      <p className={classes.description}>
                        Like so many organizations these days, Autodesk is a
                        company in transition. It was until recently a
                        traditional boxed software company selling licenses.
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          {" "}
                          Read More{" "}
                        </a>
                      </p>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <Card plain blog>
                    <CardHeader plain image>
                      <a href="#pablito" onClick={(e) => e.preventDefault()}>
                        <img src={blog5} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${blog5})`,
                          opacity: "1",
                        }}
                      />
                    </CardHeader>
                    <CardBody plain>
                      <Success>
                        <h6 className={classes.cardCategory}>STARTUPS</h6>
                      </Success>
                      <h4 className={classes.cardTitle}>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Lyft launching cross-platform service this week
                        </a>
                      </h4>
                      <p className={classes.description}>
                        Like so many organizations these days, Autodesk is a
                        company in transition. It was until recently a
                        traditional boxed software company selling licenses.
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          {" "}
                          Read More{" "}
                        </a>
                      </p>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <Card plain blog>
                    <CardHeader plain image>
                      <a href="#pablito" onClick={(e) => e.preventDefault()}>
                        <img src={blog7} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${blog7})`,
                          opacity: "1",
                        }}
                      />
                    </CardHeader>
                    <CardBody plain>
                      <Danger>
                        <h6 className={classes.cardCategory}>
                          <TrendingUp />
                          ENTERPRISE
                        </h6>
                      </Danger>
                      <h4 className={classes.cardTitle}>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          6 insights into the French Fashion landscape
                        </a>
                      </h4>
                      <p className={classes.description}>
                        Like so many organizations these days, Autodesk is a
                        company in transition. It was until recently a
                        traditional boxed software company selling licenses.
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          {" "}
                          Read More{" "}
                        </a>
                      </p>
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
              <h2 className={classes.title}>Latest Blogposts 3</h2>
              <br />
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={4} md={4}>
                    <CardHeader image plain>
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
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${cardBlog4})`,
                          opacity: "1",
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={8} md={8}>
                    <Info>
                      <h6 className={classes.cardCategory}>ENTERPRISE</h6>
                    </Info>
                    <h3 className={classes.cardTitle}>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Autodesk looks to future of 3D printing with Project
                        Escher
                      </a>
                    </h3>
                    <p className={classes.description}>
                      Like so many organizations these days, Autodesk is a
                      company in transition. It was until recently a traditional
                      boxed software company selling licenses. Today, it’s
                      moving to a subscription model. Yet its own business model
                      disruption is only part of the story — and…
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        {" "}
                        Read More{" "}
                      </a>
                    </p>
                    <p className={classes.author}>
                      by{" "}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <b>Mike Butcher</b>
                      </a>{" "}
                      , 2 days ago
                    </p>
                  </GridItem>
                </GridContainer>
              </Card>
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={4} md={4}>
                    <CardHeader image plain>
                      <a href="#pablito" onClick={(e) => e.preventDefault()}>
                        <img src={office2} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${office2})`,
                          opacity: "1",
                        }}
                      />
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${office2})`,
                          opacity: "1",
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={8} md={8}>
                    <Danger>
                      <h6 className={classes.cardCategory}>
                        <TrendingUp />
                        TRENDING
                      </h6>
                    </Danger>
                    <h3 className={classes.cardTitle}>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        6 insights into the French Fashion landscape
                      </a>
                    </h3>
                    <p className={classes.description}>
                      Like so many organizations these days, Autodesk is a
                      company in transition. It was until recently a traditional
                      boxed software company selling licenses. Today, it’s
                      moving to a subscription model. Yet its own business model
                      disruption is only part of the story — and…
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        {" "}
                        Read More{" "}
                      </a>
                    </p>
                    <p className={classes.author}>
                      by{" "}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <b>Mike Butcher</b>
                      </a>{" "}
                      , 2 days ago
                    </p>
                  </GridItem>
                </GridContainer>
              </Card>
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={4} md={4}>
                    <CardHeader image plain>
                      <a href="#pablito" onClick={(e) => e.preventDefault()}>
                        <img src={blog8} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${blog8})`,
                          opacity: "1",
                        }}
                      />
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${blog8})`,
                          opacity: "1",
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={8} md={8}>
                    <Success>
                      <h6 className={classes.cardCategory}>STARTUPS</h6>
                    </Success>
                    <h3 className={classes.cardTitle}>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Lyft launching cross-platform service this week
                      </a>
                    </h3>
                    <p className={classes.description}>
                      Like so many organizations these days, Autodesk is a
                      company in transition. It was until recently a traditional
                      boxed software company selling licenses. Today, it’s
                      moving to a subscription model. Yet its own business model
                      disruption is only part of the story — and…
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        {" "}
                        Read More{" "}
                      </a>
                    </p>
                    <p className={classes.author}>
                      by{" "}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <b>Megan Rose</b>
                      </a>{" "}
                      , 2 days ago
                    </p>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Blogs 3 END */}
      {/* Blogs 4 START */}
      <div className={classes.blog}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={classes.mlAuto + " " + classes.mrAuto}
            >
              <h2 className={classes.title}>Latest Blogposts 4</h2>
              <br />
              <Card plain blog className={classes.card4}>
                <CardHeader image plain>
                  <a href="#pablito" onClick={(e) => e.preventDefault()}>
                    <img src={bg5} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{ backgroundImage: `url(${bg5})`, opacity: "1" }}
                  />
                </CardHeader>
                <CardBody plain>
                  <Info>
                    <h6 className={classes.cardCategory}>FASHION</h6>
                  </Info>
                  <h3 className={classes.cardTitle}>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      Autodesk looks to future of 3D
                    </a>
                  </h3>
                  <h5 className={classes.description}>
                    Don{"'"}t be scared of the truth because we need to restart
                    the human foundation in truth And I love you like Kanye
                    loves Kanye I love Rick Owens’ bed design but the back is
                    too high for the beams and angle of the ceiling I also
                    wanted to point out that it’s the first album to go number 1
                    off of streaming...
                  </h5>
                  <Button round color="primary">
                    Read More
                  </Button>
                </CardBody>
              </Card>
              <Card plain blog className={classes.card4}>
                <CardHeader image plain>
                  <a href="#pablito" onClick={(e) => e.preventDefault()}>
                    <img src={blog6} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{ backgroundImage: `url(${blog6})`, opacity: "1" }}
                  />
                </CardHeader>
                <CardBody plain>
                  <Success>
                    <h6 className={classes.cardCategory}>LIFESTYLE</h6>
                  </Success>
                  <h3 className={classes.cardTitle}>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      We will breathe clean air and exercise
                    </a>
                  </h3>
                  <h5 className={classes.description}>
                    Don{"'"}t be scared of the truth because we need to restart
                    the human foundation in truth And I love you like Kanye
                    loves Kanye I love Rick Owens’ bed design but the back is
                    too high for the beams and angle of the ceiling I also
                    wanted to point out that it’s the first album to go number 1
                    off of streaming...
                  </h5>
                  <Button round color="primary">
                    Read More
                  </Button>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Blogs 4 END */}
    </div>
  );
}
