import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import JournalPageRedirectContainer from '../../containers/JournalPageRedirectContainer';
import PrivateRouteContainer from '../../containers/PrivateRouteContainer';
import JournalAboutPageContainer from '../../containers/JournalAboutPageContainer';
import JournalPageContainer from '../../containers/JournalPageContainer';

class JournalRouter extends React.Component {
  componentDidMount() {
    this.props.getJournal(this.props.match.params.journalAboutId);
    if (this.props.isAuthenticated) {
      this.props.toggleNavigationVisibility(true);
    }
  }

  componentDidUpdate(prevProps) {
    // if journal changes
    if (prevProps.match.params.journalAboutId !== this.props.match.params.journalAboutId) {
      this.props.getJournal(this.props.match.params.journalAboutId);
    }
    // if auth state changes
    if (prevProps.isAuthenticated !== this.props.isAuthenticated) {
      this.props.toggleNavigationVisibility(true);
    }
  }

  render() {
    return (
      <Switch>
        <PrivateRouteContainer exact path="/:journalAboutId" component={JournalPageRedirectContainer} />
        <Route path="/:journalAboutId/about" component={JournalAboutPageContainer} />
        <PrivateRouteContainer path="/:journalAboutId/pages/:pageId" component={JournalPageContainer} />
      </Switch>
    );
  }
}

JournalRouter.defaultProps = {
  getJournal: () => {},
  toggleNavigationVisibility: () => {},
  isAuthenticated: false,
};

JournalRouter.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      journalAboutId: PropTypes.string,
    }),
    url: PropTypes.string,
  }).isRequired,
  getJournal: PropTypes.func,
  toggleNavigationVisibility: PropTypes.func,
  isAuthenticated: PropTypes.bool,
};

export default JournalRouter;
