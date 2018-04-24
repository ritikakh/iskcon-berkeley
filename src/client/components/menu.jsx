import React from "react";
import MenuTab from "./MenuTab";
import logo from "../images/iskcon.png";

class Menu extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="col col-sm-1 col-md-4 ">
              <img href="#" src={logo}></img>
            </div>
            <div className="col col-sm-11 col-md-8">
              <ul className="nav float-right">
                <MenuTab href={``} title={`Home`} />
                <MenuTab href={``} title={`Temple`} />
                <MenuTab href={``} title={`About`} />
                <MenuTab href={``} title={`Events`} />
                <MenuTab href={``} title={`Media`} />
                <MenuTab href={``} title={`Services`} />
                <button className={`btn-primary`}>Donate</button>
              </ul>
            </div>
        </nav>
    );
  }
}

Menu.propTypes = {

};

export default Menu;
