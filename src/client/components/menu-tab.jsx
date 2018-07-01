import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class MenuTab extends React.Component {
  // generateClassName(isActive) {
  //   if (isActive) {
  //     return "nav-item nav-link active"
  //   } else {
  //     return "nav-item nav-link";
  //   }
  // }
  //

  render() {
    const { href, title, isActive } = this.props;

    return (
      <a
        className={classNames('nav-item', 'nav-link', { active: isActive })}
        href={href}
        role="tab"
        aria-controls="nav-home"
        aria-selected={isActive}
      >
        {title}
      </a>
    );
  }
}

MenuTab.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired
};

MenuTab.defaultProps = {
  isActive: false
};

export default MenuTab;
