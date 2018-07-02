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
      <h4>List of Ekadeshi and major festivals at new Jagannath Puri - &nbsp;</h4>
    </label>
    <a href="/static/ekadashi-flyer.pdf">Download as PDF</a>
    <br />
    <br />
    <label className="events-heading">
      <h4>Santsang with Param Pujya Gopal Krishna Goswami Maharaj (Monday, July 9, 2018 @ 6.30 PM) - &nbsp;</h4>
    </label>
    <a href="/static/Gopal_Krisna_9July2018.pdf">Download as PDF</a>
    <br />
    <br />
    <label className="events-heading">
      <h4>Snana Yatra at new Jagannath Puri (Saturday, August 4, 2018 starting @ 11.00 AM) - &nbsp;</h4>
    </label>
    <a href="/static/Snāna_Yatra_2018.pdf">Download as PDF</a>
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
