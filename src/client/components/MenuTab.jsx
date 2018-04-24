import React from "react";

class MenuTab extends React.Component {
  render() {
    return (
      <li className="nav-item">
        <a className="nav-link active" href={this.props.href}>{this.props.title}</a>
      </li>
    );
  }
}

MenuTab.propTypes = {};

export default MenuTab;
