import React from "react";
import MenuTab from "./MenuTab";
import logo from "../images/iskconBay.png";

class Menu extends React.Component {
  render() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="col col-sm-1 col-md-4 ">
              <a href={``}><img src={logo}></img></a>
            </div>
            <div className="col col-sm-11 col-md-8">
              <ul className="nav float-right">
                <MenuTab href={`/`} title={`Home`} />
                <MenuTab href={`/temple`} title={`Temple`} />
                <MenuTab href={`/about`} title={`About`} />
                <MenuTab href={`/events`} title={`Events`} />
                <MenuTab href={`/media`} title={`Media`} />
                <MenuTab href={`/services`} title={`Services`} />
                <MenuTab href={`/donate`} title={`Donate`} />
              </ul>
            </div>
        </nav>
    );
  }
}

Menu.propTypes = {

};

export default Menu;
