import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./pages/Home/Containers/Home";

export default () => (
  <HashRouter>
    <div>
      <Route exact path="/" component={Home} />
    </div>
  </HashRouter>
);
