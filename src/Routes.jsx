import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Containers/Home";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route
          exect
          path="/build/:templateId"
          component={() => (
          )}
        /> */}
        <Route
          exect
          path="/"
          component={(props) => (<Home {...props} />)}
        />
      </Switch>
    </BrowserRouter>
  );
}
