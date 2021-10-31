import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Containers/Home";
import SelectTemplate from "./Containers/SelectTemplate";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exect
          path="/build"
          component={(props) => <SelectTemplate {...props} />}
        />
        <Route exect path="/" component={(props) => <Home {...props} />} />
      </Switch>
    </BrowserRouter>
  );
}
