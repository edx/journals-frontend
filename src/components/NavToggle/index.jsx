import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@edx/paragon';


class NavToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.toggleNavigationOpen();
  }

  render() {
    return (
      (this.props.navPanelVisible) ? (
        <Button
          className={this.props.classNames}
          label={this.props.label}
          onClick={this.handleClick}
        />
      ) : (
        ''
      )
    );
  }
}

NavToggle.defaultProps = {
  classNames: [''],
  label: '',
  toggleNavigationOpen: () => {},
  navPanelVisible: false,
};

NavToggle.propTypes = {
  classNames: PropTypes.arrayOf(PropTypes.string),
  label: PropTypes.string,
  toggleNavigationOpen: PropTypes.func,
  navPanelVisible: PropTypes.bool,
};


export default NavToggle;
