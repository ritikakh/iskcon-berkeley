import React from "react";
import Menu from "./Menu";
import Carousel from "./Carousel";
import {EVENTS} from "../enums/menu.enum";

export default () =>
  <div className="container-fluid">
    <Menu page={EVENTS}/>
    <Carousel className={"myCarousel"}/>
  </div>;
