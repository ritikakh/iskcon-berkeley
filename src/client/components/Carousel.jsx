
import React from 'react';
import Carousel from 'nuka-carousel';
import image5 from "../images/iskconfinal5.jpg";
import image2 from "../images/iskconfinal2.jpg";
import image3 from "../images/iskconfinal3.jpg";
import image1 from "../images/iskcon1122.jpg";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {slideIndex: 0};
  }

  render() {
    return (
      <Carousel
        autoplay={true}
        wrapAround={true}
      >
        <img className="carousel-image-berkeley" src={image1} />
        <img className="carousel-image-berkeley" src={image5} />
        <img className="carousel-image-berkeley" src={image2} />
        <img className="carousel-image-berkeley" src={image3} />
      </Carousel>
    );
  }
}
