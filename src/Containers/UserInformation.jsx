import {
  Box,
  Button,
  Container,
  Typography,
  Slide,
  TextField,
  makeStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import clsx from "clsx";
import { useParams } from "react-router-dom";
import { useTemplateData } from "../utils/hooks";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        </Slide>
      )}
    </div>
  );
}

export default function UserInformation() {
  const params = useParams();
  const templateData = useTemplateData(params.templateId);
  const [activeTab, setActiveTab] = useState(0);
  const classes = useStyles();

  console.log(params, templateData);

  return (
    <Container className={classes.root}>
      {templateData?.map((step, i) => (
        <TabPanel key={i} value={activeTab} index={i}>
          <Typography variant="h5" className={classes.titlePrimary}>
            {step[step.key].title}
          </Typography>
          <Container>
            <dvi className={classes.container}>
              {step[step.key].isMulti
                ? step[step.key].data.map((p) => {
                    return p.map((c) => {
                      switch (c.type) {
                        case "string": {
                          return (
                            <TextField
                              className={classes.stringTextBox}
                              margin={"dense"}
                              size="small"
                              id="outlined-basic"
                              label={c.lable}
                              variant="outlined"
                            />
                          );
                        }
                        case "mobile": {
                          return (
                            <PhoneInput
                              containerClass={clsx(
                                classes.stringTextBox,
                                classes.mobileTextBox
                              )}
                              country="in"
                              enableAreaCodes={true}
                              enableAreaCodes={["us", "ca"]}
                              enableAreaCodeStretch
                            />
                          );
                        }
                        case "richText": {
                          return (
                            <TextField
                              className={classes.stringTextBox}
                              margin={"dense"}
                              size="small"
                              type="text"
                              minRows={5}
                              maxRows={5}
                              multiline
                              id="outlined-basic"
                              label={c.lable}
                              variant="outlined"
                            />
                            // <TextField
                            //   className={classes.stringTextBox}
                            //   margin={"dense"}
                            //   size="small"
                            //   id="outlined-basic"
                            //   label={c.lable}
                            //   variant="outlined"
                            // />
                          );
                        }
                        default:
                          return "";
                      }
                    });
                  })
                : step[step.key].data.map((p) => {
                    switch (p.type) {
                      case "string": {
                        return (
                          <TextField
                            className={classes.stringTextBox}
                            margin={"dense"}
                            size="small"
                            id="outlined-basic"
                            label={p.lable}
                            variant="outlined"
                          />
                        );
                      }
                      case "richText": {
                        return (
                          <TextField
                            className={classes.stringTextBox}
                            margin={"dense"}
                            size="small"
                            type="text"
                            minRows={5}
                            maxRows={5}
                            multiline
                            id="outlined-basic"
                            label={p.lable}
                            variant="outlined"
                          />
                          // <TextField
                          //   className={classes.stringTextBox}
                          //   margin={"dense"}
                          //   size="small"
                          //   id="outlined-basic"
                          //   label={c.lable}
                          //   variant="outlined"
                          // />
                        );
                      }
                      default:
                        return "";
                    }
                  })}
            </dvi>
          </Container>
        </TabPanel>
      ))}
      <Container className={classes.navButtonContainer}>
        {!!activeTab && (
          <Button
            onClick={() => setActiveTab((p) => p - 1)}
            style={{ marginRight: "auto" }}
            variant="contained"
            color="secondary"
          >
            Prev
          </Button>
        )}
        {activeTab < templateData?.length - 1 && (
          <Button
            onClick={() => setActiveTab((p) => p + 1)}
            style={{ marginLeft: "auto" }}
            color="secondary"
            variant="contained"
          >
            Continue
          </Button>
        )}
      </Container>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  stringTextBox: {
    margin: 5,
    width: "47%",
    flexGrow: 1,
  },
  mobileTextBox: {
    background: "transparent",
    "& > div.special-label": {
      color: theme.palette.primary.main,
      background: theme.palette.primaryLight.main,
    },
    "& > input": {
      background: `${theme.palette.primaryLight.main} !important`,
      height: "40px",
      width: "100% !important",
      "&:focus": {
        borderWidth: 2,
        borderColor: `${theme.palette.primary.main} !important`,
        boxShadow: `none !important`,
      },
    },
  },

  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: theme.spacing(2),
  },
  root: {
    height: "100%",
    position: "relative",
  },
  navButtonContainer: {
    display: "flex",
    width: "100%",
    position: "absolute",
    bottom: 10,
  },
  titlePrimary: {
    color: theme.palette.primary.main,
  },
}));
