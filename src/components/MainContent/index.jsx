import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import classNames from 'classnames';

import IndexPage from '../../containers/IndexPage';
import JournalPageContainer from '../../containers/JournalPageContainer';
import JournalAboutPageContainer from '../../containers/JournalAboutPageContainer';


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
              {/* TODO: Change to slugs not ids */}
              <Route exact path="/" component={IndexPage} />
              <Route path="/:journalId/about" component={JournalAboutPageContainer} />
              <Route path="/:journalId/pages/:pageId" component={JournalPageContainer} />
              {/* <Route path="/:journalId" component={JournalRerouter} /> */}
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
