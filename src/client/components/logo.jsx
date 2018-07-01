import React from 'react';
import image1 from '../images/iskcon.jpg';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { slideIndex: 0 };
  }

  render() {
    return (
      <div className={'logoClass'}>
        <img src={image1} />
      </div>
    );
  }
}
