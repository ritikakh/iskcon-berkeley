
import React from "react";
import Menu from "./Menu";
import Carousel from "./Carousel";
import {HOME} from "../enums/menu.enum";

export default () =>
  <div className="container-fluid">
    <Menu page={HOME}/>
    <Carousel className={"myCarousel"}/>
  </div>;
