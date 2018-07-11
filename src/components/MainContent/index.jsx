import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import classNames from 'classnames';

import IndexPage from '../../containers/IndexPage';
import JournalPage from '../../containers/JournalPage';


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
              <Route path="/page" component={JournalPage} />
              <Route path="/explore" component={IndexPage} />
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
