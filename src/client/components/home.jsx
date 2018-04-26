
import React from "react";
import Menu from "./menu";
import Carousel from "./Carousel";

export default () =>
  <div className="iskcon-container container-fluid">
    <Menu />
    <div className="container-fluid" id="iskcon-container">
      <Carousel className="myCarousel"/>
    </div>
  </div>;
