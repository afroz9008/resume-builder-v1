import React, { useContext, useEffect, useState } from "react";
import { Rotate, Bounce } from "react-reveal";
import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { templates } from "../utils/getTemplates";
import { Route, Switch, useHistory } from "react-router-dom";
import UserInformation from "./UserInformation";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import clsx from "clsx";
import { UserDetailsContext } from "../App";

export default function SelectTemplate(props) {
  const classes = useStyles();
  const [animate, setAnimate] = useState(false);
  const [state] = useContext(UserDetailsContext);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 100);
  }, []);

  return (
    <Rotate top right opposite cascade collapse when={animate}>
      <Grid container className={classes.root}>
        <Grid xs={7} sm={8} md={8} lg={9} xl={10}>
          <Container className={classes.tepmlateContainer}>
            <Typography variant="h4" className={classes.title}>
              choose youre resume{" "}
              <span className={classes.titlePrimary}>template</span>
            </Typography>
            <Typography className={classes.subtitle} variant="caption">
              We suggest including an email and phone number
            </Typography>

            <Switch>
              <Route
                exect
                path={`${props.match.url}/:templateId`}
                component={(rest) => <UserInformation {...rest} />}
              />
              <Route
                exect
                path={`${props.match.url}`}
                component={(rest) => <Templates {...rest} animate={animate} />}
              />
            </Switch>
          </Container>
        </Grid>
        <Grid
          className={classes.progressContainer}
          xs={5}
          sm={4}
          md={4}
          lg={3}
          xl={2}
        >
          <Typography variant="h5" className={classes.progressTitle}>
            My Progress
          </Typography>
          <div className={classes.donutProgressBar}>
            <CircularProgressbar
              styles={{
                path: {
                  stroke: `#ffffff`,
                },
                trail: {
                  stroke: "#E9A04E",
                  strokeLinecap: "butt",
                  transform: "rotate(0.25turn)",
                  transformOrigin: "center center",
                },
                text: {
                  fill: "white",
                },
                background: {
                  fill: "#3e98c7",
                },
              }}
              strokeWidth={12}
              value={state.percentage}
              text={`${state.percentage}%`}
            />
          </div>
          <Typography
            variant="h5"
            className={clsx(classes.progressTitle, classes.progressTitle1)}
          >
            Experince
          </Typography>
          <Typography variant="caption" className={classes.progressTitle}>
            Complate And Get Result
          </Typography>
        </Grid>
      </Grid>
    </Rotate>
  );
}

const Templates = ({ props }) => {
  const classes = useStyles();
  const history = useHistory();
  const [state, setState] = useContext(UserDetailsContext);
  console.log(state);
  return (
    <Container className={classes.templateComponentRoot}>
      <Bounce left opposite cascade collapse>
        <Grid container>
          {templates.map((template) => {
            return (
              <Grid
                className={classes.templateItemContainer}
                key={template.templateId}
                item
                xs={12}
                sm={12}
                md={6}
                lg={4}
              >
                <div className={classes.bottomBorderContainer} />
                <div className={classes.templateItem}>
                  <img
                    className={classes.templateImage}
                    src={template.image}
                    alt={template.templateId}
                  />
                  <div className={classes.overlay}>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => {
                        setState((p) => ({ ...p, percentage: 5 }));
                        history.push(`/build/${template.templateId}`);
                      }}
                    >
                      Use this template
                    </Button>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Bounce>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  donutProgressBar: {
    padding: theme.spacing(3),
    width: "70%",
  },
  progressTitle: {
    marginBottom: 20,
    fontWeight: "bold",
    color: theme.palette.common.white,
  },
  progressTitle1: {
    marginBottom: 5,
  },
  progressContainer: {
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    // padding: 20,
  },
  tepmlateContainer: {
    padding: theme.spacing(3),
    display: "flex",
    width: "100%",
    height: "100vh",
    flexDirection: "column",
    // alignItems:'center'
  },
  title: {
    color: theme.palette.black.main,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  titlePrimary: {
    color: theme.palette.primary.main,
  },
  subtitle: {
    color: theme.palette.black.main,
    paddingLeft: theme.spacing(0.4),
    margin: theme.spacing(1, 0, 1, 0),
  },
  templateComponentRoot: {
    padding: theme.spacing(2),
    overflow: "auto",
    overflowX: "overlape",
    "&::-webkit-scrollbar": {
      width: 2,
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "transparent",
      opacity: 0.5,
      boxShadow: "1px 1px 3px #eee",
      borderRadius: "10px",
      // outline: `1px dashed ${theme.palette.primary.main}`,
    },
  },
  templateItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    height: 341,
    width: 278,
    cursor: "pointer",
    overflow: "hidden",
    zIndex: 1,
    "&:hover": {
      "& $templateImage": {
        transform: "scale(1.2)",
      },
      "& $overlay": {
        height: 341,
        zIndex: 2,
      },
    },
  },
  templateItemContainer: {
    marginBottom: 40,
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  templateImage: {
    maxWidth: "100%",
    maxHeight: "100%",
    transition: "0.5s all",
  },
  bottomBorderContainer: {
    width: "95%",
    bottom: -12,
    height: 41,
    position: "absolute",
    background: theme.palette.primary.main,
    boxShadow: "7px 9px 13px #616161",
    transform: "skewX(-46deg)",
  },
  overlay: {
    position: "absolute",
    height: 0,
    width: 278,
    maxWidth: "100%",
    maxHeight: "100%",
    background: "#7f536a59",
    transition: "0.5s all",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
