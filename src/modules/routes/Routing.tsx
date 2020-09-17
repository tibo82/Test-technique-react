import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { getRoutes } from "./getRoutes";

const Routing = () => {
  const routeComponents = getRoutes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key}></Route>
  ));
  return (
    <Router>
      <div>
        <Switch>{routeComponents}</Switch>
      </div>
    </Router>
  );
};

export default Routing;
