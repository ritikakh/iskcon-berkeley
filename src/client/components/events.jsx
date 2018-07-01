import React from 'react';
import Menu from './menu';
import Carousel from './carousel';
import { EVENTS } from '../enums/menu.enum';
import image1 from '../images/ajaflyer.jpg';
import image2 from '../images/trainRide.jpg';

export default () => (
  <div className="container-fluid">
    <Menu page={EVENTS} />
    <Carousel className={'myCarousel'} />
    <br />
    <label className="events-heading">
      <h4>Ekadashi Flyer - &nbsp;</h4>
    </label>
    <a href="/static/ekadashi-flyer.pdf">Download as PDF</a>
    <br />
    <br />
    <label className="events-heading">
      <h4>TRAIN RIDE</h4>
    </label>
    <br />
    <img className="events-image" src={image2} />
    <br />
    <br />
    <label className="events-heading">
      <h4>RATH YATRA</h4>
    </label>
    <br />
    <img className="events-image" src={image1} />
  </div>
);
