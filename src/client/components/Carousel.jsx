
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
        <img src={image1} />
        <img src={image2} />
        <img src={image3} />
        <img src={image4} />
      </Carousel>
    );
  }
}
