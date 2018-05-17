import React from "react";
import { Route, IndexRoute } from "react-router";
import Base from "./components/base";
import Home from "./components/home";
import Temple from "./components/temple";
import Founder from "./components/founder";
import Events from "./components/events";
import Media from "./components/media";
import Services from "./components/services";
import Donate from "./components/donate";
import ContactUs from "./components/ContactUs";

export const routes = (
  <Route path="/" component={Base}>
    <IndexRoute component={Home}/>
    <Route path="/temple" component={Temple}/>
    <Route path="/founder" component={Founder}/>
    <Route path="/events" component={Events}/>
    <Route path="/media" component={Media}/>
    <Route path="/services" component={Services}/>
    <Route path="/donate" component={Donate}/>
    <Route path="/contactus" component={ContactUs}/>
  </Route>
);

