import React from 'react';
import PropTypes from 'prop-types';

import './NavigationPanel.scss';
import TOCViewer from '../TOCViewer';

class NavigationPanel extends React.Component {
  componentDidMount() {
    // how to get the current journal id to use here?
    // guessing from props.match??
    this.props.getJournal(4);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.journal.id !== this.props.journal.id) {
      this.props.getJournal(this.props.journal.id);
    }
  }
  render() {
    if (this.props.navPanelOpen && this.props.journalFinishedFetching) {
      return (
        <div id="nav-panel" className={this.props.navPanelOpen ? 'nav-panel-open' : 'nav-panel-closed'}>
          <TOCViewer journal={this.props.journal} />
        </div>
      );
    }
    return (
      <div id="nav-panel" className={this.props.navPanelOpen ? 'nav-panel-open' : 'nav-panel-closed'}>
        Loading...
      </div>
    );
  }
}

NavigationPanel.defaultProps = {
  navPanelOpen: true,
  journalFinishedFetching: false,
  getJournal: () => {},
};

NavigationPanel.propTypes = {
  navPanelOpen: PropTypes.bool,
  journal: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    structure: PropTypes.arrayOf(PropTypes.object),
    shortDescription: PropTypes.string,
  }).isRequired,
  getJournal: PropTypes.func,
  journalFinishedFetching: PropTypes.bool,
};


export default NavigationPanel;
