import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import HeaderContainer from './containers/HeaderContainer';
import SubHeader from './components/SubHeader';
import NavigationPanelContainer from './containers/NavigationPanelContainer';
import NavToggleContainer from './containers/NavToggleContainer';
import MainContentContainer from './containers/MainContentContainer';
import store from './data/store';
import './App.scss';


const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Helmet defaultTitle="Journals">
          <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet" />
        </Helmet>
        <HeaderContainer />
        <SubHeader />
        <div id="content">
          <NavigationPanelContainer />
          <NavToggleContainer
            label="Contents"
            id="side-nav-panel-toggle"
            classNames={['nav-panel-toggle', 'd-none', 'd-sm-block']}
          />
          <MainContentContainer />
        </div>
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
