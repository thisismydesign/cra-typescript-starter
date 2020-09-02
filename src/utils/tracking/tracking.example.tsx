import React, { FunctionComponent } from "react";
import { Switch, Route, HashRouter as Router, Link } from "react-router-dom";

import { usePageTracking } from "./tracking";

const ExampleComponent: FunctionComponent = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/page">Page</Link>
    </>
  );
};

const ExampleHome: FunctionComponent = () => {
  usePageTracking();

  return (
    <Switch>
      <Route exact path="/" component={ExampleComponent} />
      <Route exact path="/page" component={ExampleComponent} />
    </Switch>
  );
};

const Example: FunctionComponent = () => {
  return (
    <Router>
      <ExampleHome />
    </Router>
  );
};

export default Example;
