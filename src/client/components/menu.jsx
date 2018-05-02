import React from "react";
import MenuTab from "./MenuTab";
import logo from "../images/iskconBay.png";

class Menu extends React.Component {
  render() {
    return (
      <nav>
        <div className="col-sm-8 nav nav-tabs" id="nav-tabs" role="tablist">
          <a className="col col-sm-1" href={`/`}><img src={logo}></img></a>
          <a className="nav-item nav-link active" href={`/`} role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
          <a className="nav-item nav-link" href={`/founder`} role="tab" aria-controls="nav-profile" aria-selected="false">Founder</a>
          <a className="nav-item nav-link" href={`/events`} role="tab" aria-controls="nav-contact" aria-selected="false">Events</a>
          <a className="nav-item nav-link" href={`/media`} role="tab" aria-controls="nav-contact" aria-selected="false">Media</a>
          <a className="nav-item nav-link" href={`/services`} role="tab" aria-controls="nav-contact" aria-selected="false">Services</a>
          <a className="nav-item nav-link" href={`/donate`} role="tab" aria-controls="nav-contact" aria-selected="false">Donate</a>
          <a className="nav-item nav-link" href={`/contactus`} role="tab" aria-controls="nav-contact" aria-selected="false">Contact Us</a>
        </div>
      </nav>
    );
  }
}

Menu.propTypes = {

};

export default Menu;
