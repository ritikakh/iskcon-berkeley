import React from "react";
import Menu from "./menu";
import Carousel from "./carousel";
import {
  MEDIA
} from "../enums/menu.enum";

export default () =>
  <div className="container-fluid">
    <Menu page={MEDIA}/>
    <Carousel className={"myCarousel"}/>
  </div>;
