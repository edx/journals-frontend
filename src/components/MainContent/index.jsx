import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import classNames from 'classnames';

import IndexPageContainer from '../../containers/IndexPageContainer';
import PrivateRouteContainer from '../../containers/PrivateRouteContainer';
import JournalRouterContainer from '../../containers/JournalRouterContainer';
import SearchPageContainer from '../../containers/SearchPageContainer';


const MainContent = (props) => {
  const containerClass = classNames({
    container: true,
    'd-none': props.navPanelOpen,
    'd-sm-block': props.navPanelOpen,
  });
  return (
    <div className={containerClass}>
      <div className="row">
        <div className="col col-12 offset-md-2 col-md-8">
          <main>
            <Switch>
              <Route exact path="/" component={IndexPageContainer} />
              <PrivateRouteContainer path="/search" component={SearchPageContainer} />
              <Route path="/:journalAboutId" component={JournalRouterContainer} />
            </Switch>
          </main>
        </div>
      </div>
    </div>
  );
};

MainContent.defaultProps = {
  navPanelOpen: false,
};

MainContent.propTypes = {
  navPanelOpen: PropTypes.bool,
};

export default MainContent;
