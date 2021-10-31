import React, { useEffect, useState } from "react";
import {
  AppBar,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import CARTOON from "../assets/Rectangle 11.png";
import IMAGE1 from "../assets/Rectangle 12.png";
import IMAGE2 from "../assets/Rectangle 13.png";
import IMAGE3 from "../assets/Rectangle 14.png";
import clsx from "clsx";
import Rotate from "react-reveal/Rotate";
import { useHistory } from "react-router-dom";

export default function Home(props) {
  const classes = useStyles();
  const [animate, setAnimate] = useState(false);
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 100);
  }, []);

  return (
    <Rotate top left opposite cascade collapse when={animate}>
      <Container className={classes.root}>
        <AppBar
          className={classes.appbar}
          elevation={0}
          color="transparent"
          position="sticky"
        >
          <Typography variant="h5" className={classes.wbName}>
            Resume Builder
          </Typography>
        </AppBar>
        <Container className={classes.container}>
          <Grid item container>
            <Grid
              sm={6}
              order={{ xs: 2, md: 1, lg: 1 }}
              className={classes.textualContainer}
            >
              <Typography variant={"h4"} className={classes.title}>
                Design a professional resume in minutes
              </Typography>
              <Typography variant={"caption"} className={classes.subtitle}>
                Create your resume easily with our free builder and professional
                templates.
              </Typography>
              <div className={classes.actionContainer}>
                <Button
                  onClick={() => history.push("/build")}
                  variant="contained"
                  color="primary"
                >
                  START NOW
                </Button>
                <Typography className={classes.helpText}>
                  NO SIGN-UP REQUIRED
                </Typography>
              </div>
            </Grid>
            <Grid
              sm={6}
              order={{ xs: 1, md: 2, lg: 2 }}
              className={classes.textualContainer}
            >
              <img className={classes.heroImage} src={CARTOON} alt="cartoon" />
              <img
                className={clsx(classes.heroImage, classes.image1)}
                src={IMAGE1}
                alt="cartoon"
              />
              <img
                className={clsx(
                  classes.heroImage,
                  classes.image1,
                  classes.image2
                )}
                src={IMAGE2}
                alt="cartoon"
              />
              <img
                className={clsx(
                  classes.heroImage,
                  classes.image1,
                  classes.image3
                )}
                src={IMAGE3}
                alt="cartoon"
              />
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Rotate>
  );
}

const useStyles = makeStyles((theme) => ({
  appbar: {
    height: 48,
    background: theme.palette.primaryLight.main,
    padding: theme.spacing(1),
  },
  root: {
    height: "100vh",
  },
  wbName: {
    color: theme.palette.primary.main,
    // fontSize:32,
  },
  title: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
    marginBottom: 24,
  },
  container: {
    height: "calc(100% - 48px)",
    display: "flex",
  },
  textualContainer: {
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
    position: "relative",
    height: "100%",
  },
  subtitle: {
    color: theme.palette.black.main,
  },
  actionContainer: {
    marginTop: 50,
    display: "flex",
    alignItems: "center",
  },
  helpText: {
    color: theme.palette.black.main,
    marginLeft: 14,
  },
  heroImage: {
    // maxHeight: "90%",
    maxWidth: "90%",
    // transition:'1s all',
    animation: "$upDownHeroImage 2s linear infinite alternate",
  },
  image1: {
    position: "absolute",
    width: "35%",
    right: 0,
    top: "7%",
    animationDelay: "0.4s",
  },
  image2: {
    position: "absolute",
    width: "30%",
    top: "50%",
    left: "60%",
    animationDelay: "2s",
  },
  image3: {
    position: "absolute",
    width: "30%",
    left: -10,
    top: "25%",
    animationDelay: "1.7s",
  },
  "@keyframes upDownHeroImage": {
    "0%": {
      transform: "translateY(0%)",
    },
    "100%": {
      transform: "translateY(-5%)",
    },
  },
}));
