import React from "react";
import Menu from "./Menu";
import Carousel from "./Carousel";
import {
  MEDIA
} from "../enums/menu.enum";

export default () =>
  <div className="container-fluid">
    <Menu page={MEDIA}/>
    <Carousel className={"myCarousel"}/>
  </div>;
