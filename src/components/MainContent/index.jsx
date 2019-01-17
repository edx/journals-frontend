import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import classNames from 'classnames';

import JournalIndexPageContainer from '../../containers/JournalIndexPageContainer';
import JournalIndexPreviewContainer from '../../containers/JournalIndexPreviewContainer';
import PrivateRouteContainer from '../../containers/PrivateRouteContainer';
import JournalRouterContainer from '../../containers/JournalRouterContainer';
import SearchPageContainer from '../../containers/SearchPageContainer';
import UserLoginContainer from '../../containers/UserLoginContainer';
import UserLogoutContainer from '../../containers/UserLogoutContainer';
import UserAccountContainer from '../../containers/UserAccountContainer';

const MainContent = (props) => {
  const containerClass = classNames({
    container: true,
    'd-none': props.navPanelOpen,
    'd-lg-block': props.navPanelOpen,
  });
  return (
    <div className={containerClass}>
      <div className="row">
        <div className="col col-12 offset-lg-2 col-lg-8">
          <main>
            <Switch>
              <Route exact path="/" component={JournalIndexPageContainer} />
              <Route path="/indexPreview/:previewId" component={JournalIndexPreviewContainer} />
              <Route exact path="/login" component={UserLoginContainer} />
              <Route exact path="/login" component={UserLogoutContainer} />
              <Route exact path="/createaccount" component={UserAccountContainer} />
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
