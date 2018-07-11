import React from 'react';
import PropTypes from 'prop-types';

import './NavigationPanel.scss';

const NavigationPanel = props => (
  <div id="nav-panel" className={props.navPanelOpen ? 'nav-panel-open' : 'nav-panel-closed'} />
);

NavigationPanel.defaultProps = {
  navPanelOpen: false,
};

NavigationPanel.propTypes = {
  navPanelOpen: PropTypes.bool,
};


export default NavigationPanel;
