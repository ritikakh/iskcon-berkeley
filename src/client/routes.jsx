import React from "react";
import { Route, IndexRoute } from "react-router";
import Base from "./components/base";
import Home from "./components/home";
import Temple from "./components/temple";
import About from "./components/about";
import Events from "./components/events";
import Media from "./components/media";
import Services from "./components/services";

export const routes = (
  <Route path="/" component={Base}>
    <IndexRoute component={Home}/>
    <Route path="/temple" component={Temple}/>
    <Route path="/about" component={About}/>
    <Route path="/events" component={Events}/>
    <Route path="/media" component={Media}/>
    <Route path="/services" component={Services}/>
  </Route>
);

