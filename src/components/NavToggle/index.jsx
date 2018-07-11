import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@edx/paragon';

import './NavToggle.scss';


class NavToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.toggleNavigationPanel();
  }

  render() {
    return (
      <Button
        className={this.props.classNames}
        label={this.props.label}
        onClick={this.handleClick}
      />
    );
  }
}

NavToggle.defaultProps = {
  classNames: [''],
  label: '',
  toggleNavigationPanel: () => {},
};

NavToggle.propTypes = {
  classNames: PropTypes.arrayOf(PropTypes.string),
  label: PropTypes.string,
  toggleNavigationPanel: PropTypes.func,
};


export default NavToggle;
