import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import classNames from 'classnames';

import IndexPageContainer from '../../containers/IndexPageContainer';
import JournalPreviewContainer from '../../containers/JournalPreviewContainer';
import PrivateRouteContainer from '../../containers/PrivateRouteContainer';
import JournalRouterContainer from '../../containers/JournalRouterContainer';


const MainContent = (props) => {
  const containerClass = classNames({
    container: true,
    'd-none': props.navPanelOpen,
    'd-sm-block': props.navPanelOpen,
  });
  return (
    <div className={containerClass}>
      <div className="row">
        <div className="col offset-1 col-10">
          <main>
            <Switch>
              <Route exact path="/" component={IndexPageContainer} />
              <PrivateRouteContainer path="/preview/:previewId" component={JournalPreviewContainer} />
              <Route path="/:journalId" component={JournalRouterContainer} />
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
