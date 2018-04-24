import React from "react";
import Menu from "./menu";
import Carousel from "./Carousel";

export default () =>
  <div className="container-fluid">
    <Menu />
    <Carousel className={"myCarousel"}/>
  </div>;
