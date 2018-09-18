import React from 'react';
import PropTypes from 'prop-types';

import './NavigationPanel.scss';
import TOCViewer from '../TOCViewer';

class NavigationPanel extends React.Component {
  componentDidMount() {
    window.addEventListener('resize', this.closeNavWhenShrunk.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.closeNavWhenShrunk.bind(this));
  }

  closeNavWhenShrunk = () => {
    if (window.matchMedia('(max-width: 992px)').matches && this.props.navPanelOpen) {
      this.props.toggleNavigationOpen();
    }
  }
  render() {
    return (
      this.props.navPanelVisible ? (
        <div id="nav-panel" className={this.props.navPanelOpen ? 'nav-panel-open' : 'nav-panel-closed'}>
          {
            this.props.journalFinishedFetching ?
              <TOCViewer journal={this.props.journal} currentPageId={this.props.currentPageId} /> :
              'Loading...'
          }
        </div>
      ) : (
        ''
      )
    );
  }
}

NavigationPanel.defaultProps = {
  navPanelOpen: true,
  navPanelVisible: false,
  journalFinishedFetching: false,
  currentPageId: 0,
  toggleNavigationOpen: () => {},
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
  currentPageId: PropTypes.number,
  toggleNavigationOpen: PropTypes.func,
};


export default NavigationPanel;
