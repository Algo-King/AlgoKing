import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import { Link, Redirect } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components -- comes from material-ui folder
import Header from "../../material-ui/Header";
import Button from "../../material-ui/Button.js";
import GridContainer from "../../material-ui/GridContainer.js";
import GridItem from "../../material-ui/GridItem.js";

import headersStyle from "../../../assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle";

import office2 from "../../../assets/img/examples/office2.jpg";

const useStyles = makeStyles(headersStyle);

export default function SectionHeaders(props, { ...rest }) {
  const classes = useStyles();
  const onChange = (e) => {
    // document.cookie = 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    localStorage.removeItem("token");
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
                  <Link to="/leaderboard" style={{ color: "#FFF" }}>
                    Leaderboard
                  </Link>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="/"
                    className={classes.navLink}
                    onClick={onChange}
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
                <h1 className={classes.title}>
                  Hello {props.name} Begin Your Daily Algo
                </h1>
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
                    <Link
                      to={{
                        pathname: `/question/`,
                        query: { thing: "fdsa" },
                      }}
                    >
                      Home 2
                    </Link>
                    <Link to="/question" style={{ color: "white" }}>
                      {"Start Now"}
                    </Link>
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
