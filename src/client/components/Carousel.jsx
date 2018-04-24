
import React from 'react';
import Carousel from 'nuka-carousel';
import image1 from "../images/ISKCON-Berkeley2.jpg";
import image2 from "../images/iskconBerkeley1.jpg";
import image3 from "../images/iskconBerkeley4.jpg";
import image4 from "../images/iskconBerkeley5.jpg";

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
        <img className="carousel-image-berkeley" src={image2} />
        <img className="carousel-image-berkeley" src={image3} />
        <img className="carousel-image-berkeley" src={image4} />
      </Carousel>
    );
  }
}
