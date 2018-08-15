import React from 'react';
import PropTypes from 'prop-types';

import './NavigationPanel.scss';
import TOCViewer from '../TOCViewer';

const NavigationPanel = props => (
  props.navPanelVisible ? (
    <div id="nav-panel" className={props.navPanelOpen ? 'nav-panel-open' : 'nav-panel-closed'}>
      {
        props.journalFinishedFetching ?
          <TOCViewer journal={props.journal} /> :
          'Loading...'
      }
    </div>
  ) : (
    ''
  )
);

NavigationPanel.defaultProps = {
  navPanelOpen: true,
  navPanelVisible: false,
  journalFinishedFetching: false,
};

NavigationPanel.propTypes = {
  navPanelOpen: PropTypes.bool,
  navPanelVisible: PropTypes.bool,
  journal: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    structure: PropTypes.arrayOf(PropTypes.object),
    shortDescription: PropTypes.string,
  }).isRequired,
  journalFinishedFetching: PropTypes.bool,
};


export default NavigationPanel;
