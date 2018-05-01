import React from "react";
import MenuTab from "./MenuTab";
import logo from "../images/iskconBay.png";

class Menu extends React.Component {
  render() {
    return (

      <nav className="navbar-dark-berkeley navbar navbar-expand-md navbar-dark">
        <a href={``}><img src={logo}></img></a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse navbar-right" id="collapsibleNavbar">
          <ul className="navbar-nav-iskcon navbar-nav">
            <MenuTab className="test-nav-item-iskcon nav-item" href={`/`} title={`Home`} />
            {/*<MenuTab className="nav-item" href={`/temple`} title={`Temple`} />*/}
            <MenuTab className="nav-item" href={`/founder`} title={`Founder`} />
            {/*<li className="dropdown">*/}
              {/*<a href="#" data-toggle="dropdown" className="dropdown-toggle">Messages <b className="caret"></b></a>*/}
              {/*<ul className="dropdown-menu">*/}
                {/*<li><a href="#">Inbox</a></li>*/}
                {/*<li><a href="#">Drafts</a></li>*/}
                {/*<li><a href="#">Sent Items</a></li>*/}
                {/*<li className="divider"></li>*/}
                {/*<li><a href="#">Trash</a></li>*/}
              {/*</ul>*/}
            {/*</li>*/}
            <MenuTab className="nav-item" href={`/events`} title={`Events`} />
            {/*<MenuTab className="nav-item" href={`/media`} title={`Media`} />*/}
            <MenuTab className="nav-item" href={`/services`} title={`Services`} />
            <MenuTab className="nav-item" href={`/donate`} title={`Donate`} />
            <MenuTab className="nav-item" href={`/contactus`} title={`ContactUs`} />
          </ul>
        </div>
      </nav>



    );
  }
}

Menu.propTypes = {

};

export default Menu;
