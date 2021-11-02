import { Box, Button, Container, Typography ,Slide} from "@material-ui/core";
import React, { useState } from "react";
// import {  } from "react-reveal";
import { useParams } from "react-router-dom";
import { useTemplateData } from "../utils/hooks";

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

  console.log(params, templateData);

  return (
    <Container>
      {templateData?.map((step, i) => (
        <TabPanel key={i} value={activeTab} index={i}>
          {step[step.key].title}
        </TabPanel>
      ))}
      <Container style={{ display: "flex" }}>
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
