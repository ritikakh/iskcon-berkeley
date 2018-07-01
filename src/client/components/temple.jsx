import React from 'react';
import Menu from './menu';
import Carousel from './carousel';
import { HOME } from '../enums/menu.enum';

export default () => (
  <div className="container-fluid">
    <Menu page={HOME} />
    <Carousel className={'myCarousel'} />
  </div>
);
