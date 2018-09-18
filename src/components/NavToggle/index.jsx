import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from '@edx/paragon';
import classNames from 'classnames';

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
      (this.props.navPanelVisible &&
        this.props.authorizedJournals.includes(this.props.journalId)) ? (
          <Button
            className={this.props.classNames}
            id={this.props.id}
            label={
              <span className="nav-toggle-label">
                <Icon
                  className={
                    classNames({
                      fa: true,
                      'fa-times': this.props.navPanelOpen,
                      'fa-bars': !this.props.navPanelOpen,
                    }).split(' ')
                  }
                />
                {this.props.label}
              </span>
            }
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
  navPanelOpen: false,
  id: '',
  journalId: 0,
  authorizedJournals: [],
};

NavToggle.propTypes = {
  classNames: PropTypes.arrayOf(PropTypes.string),
  label: PropTypes.string,
  toggleNavigationOpen: PropTypes.func,
  navPanelVisible: PropTypes.bool,
  navPanelOpen: PropTypes.bool,
  id: PropTypes.string,
  journalId: PropTypes.number,
  authorizedJournals: PropTypes.arrayOf(PropTypes.number),
};


export default NavToggle;
