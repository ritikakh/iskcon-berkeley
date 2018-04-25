
import React from 'react';
import Carousel from 'nuka-carousel';
import image1 from "../images/iskcon1.jpg";
import image2 from "../images/iskcon2.jpg";
import image3 from "../images/iskcon3.jpg";
import image4 from "../images/iskcon4.jpg";
import image5 from "../images/iskcon5.jpg";
import image6 from "../images/iskcon6.jpg";
import image9 from "../images/iskcon9.jpg";

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
        <img className="carousel-image-berkeley" src={image5} />
        <img className="carousel-image-berkeley" src={image6} />
        <img className="carousel-image-berkeley" src={image9} />
      </Carousel>
    );
  }
}
