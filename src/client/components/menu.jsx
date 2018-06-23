import React from "react";
import MenuTab from "./menu-tab";
import logo from "../images/iskconBay.png";
import {
  FOUNDER,
  EVENTS,
  HOME,
  SCHEDULE,
  SERVICES,
  CONTACTUS,
  DONATE,
  MEDIA
} from "../enums/menu.enum";
import PropTypes from "prop-types";

class Menu extends React.Component {
  render() {
    const { page } = this.props;
    return (
      <nav>
        <div className="col-sm-8 nav nav-tabs" id="nav-tabs" role="tablist">
          <a className="col col-sm-1" href={`/`}><img src={logo}></img></a>
          <MenuTab href={"/"} title={"Home"} isActive={page === HOME}/>
          <MenuTab href={"/founder"} title={"Founder"} isActive={page === FOUNDER}/>
          <MenuTab href={"/schedule"} title={"Schedule"} isActive={page === SCHEDULE}/>
          <MenuTab href={"/events"} title={"Events"} isActive={page === EVENTS}/>
          {/*<MenuTab href={"/media"} title={"Media"} isActive={page === MEDIA}/>*/}
          <MenuTab href={"/services"} title={"Services"} isActive={page === SERVICES}/>
          <MenuTab href={"/donate"} title={"Donate"} isActive={page === DONATE}/>
          <MenuTab href={"/contactus"} title={"Contact Us"} isActive={page === CONTACTUS}/>
        </div>
      </nav>
    );
  }
}

Menu.propTypes = {
  page: PropTypes.oneOf([FOUNDER, EVENTS, SCHEDULE, SERVICES, MEDIA, DONATE, CONTACTUS, HOME])
};

export default Menu;
