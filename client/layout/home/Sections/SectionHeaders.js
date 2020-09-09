import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Share from "@material-ui/icons/Share";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
// core components -- comes from material-ui folder
import Header from "../../material-ui/Header";
import Button from "../../material-ui/Button.js";
import GridContainer from "../../material-ui/GridContainer.js";
import GridItem from "../../material-ui/GridItem.js";
import Card from "../../material-ui/Card.js";
import CardBody from "../../material-ui/CardBody.js";
import CustomInput from "../../material-ui/CustomInput.js";

import headersStyle from "../../../assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle";

import bg12 from "../../../assets/img/bg12.jpg";
import office2 from "../../../assets/img/examples/office2.jpg";
import dg1 from "../../../assets/img/dg1.jpg";
import dg2 from "../../../assets/img/dg2.jpg";
import dg3 from "../../../assets/img/dg3.jpg";

const useStyles = makeStyles(headersStyle);

export default function SectionHeaders({ ...rest }) {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    // we've set the className to cd-section so we can make smooth scroll to it
    <div className="cd-section" {...rest}>
      {/* <div className={classes.sectionBlank} id="blanksection" /> */}
      {/* HEADER 2 START */}
      <div>
        <Header
          absolute
          brand="AlgoKing"
          color="transparent"
          links={
            <div className={classes.collapse}>
              <List className={classes.list + " " + classes.mlAuto}>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Home
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Become a Tutor
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#pablo"
                    className={classes.navLink}
                    onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Logout
                  </Button>
                </ListItem>
              </List>
            </div>
          }
        />
        <div
          className={classes.pageHeader}
          style={{ backgroundImage: `url("${office2}")` }}
        >
          <div className={classes.containerHeader2}>
            <GridContainer>
              <GridItem
                xs={12}
                sm={8}
                md={8}
                className={classNames(
                  classes.mlAuto,
                  classes.mrAuto,
                  classes.textCenter
                )}
              >
                <h1 className={classes.title}>BEGIN YOUR DAILY ALGO</h1>
                <h4>
                  Do your Daily Algo - Put a switch here that checks if the user
                  did their daily algo
                </h4>
              </GridItem>
              <GridItem
                xs={12}
                sm={10}
                md={10}
                className={classNames(classes.mlAuto, classes.mrAuto)}
              >
                <GridItem
                  xs={12}
                  sm={3}
                  md={3}
                  className={classNames(
                    classes.mlAuto,
                    classes.mrAuto,
                    classes.textCenter
                  )}
                >
                  <Button block color="facebook" className={classes.button}>
                    Start Now
                  </Button>
                </GridItem>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      {/* HEADER 2 END */}
    </div>
  );
}
