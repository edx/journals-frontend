import React from 'react';
import { Button, Icon } from '@edx/paragon';
import PropTypes from 'prop-types';

import NavToggleContainer from '../../containers/NavToggleContainer';
import './MobileNavigation.scss';


const SearchButton = props => (
  <Button
    label={
      <div>
        <Icon
          className="fa fa-search"
        />
        <div>Search</div>
      </div>
    }
    className={['control-btn', 'search-button']}
    onClick={props.onClick}
  />
);

const MobileNavigation = props => (
  <div className="mobile-navigation d-block d-sm-none">
    <div>
      <NavToggleContainer
        label="Contents"
        id="header-nav-panel-toggle"
        classNames={['control-btn', 'd-block', 'd-sm-none']}
      />
      <SearchButton onClick={() => { props.updateSearchOpen(true); }} />
    </div>
  </div>
);

SearchButton.defaultProps = {
  onClick: () => {},
};

SearchButton.propTypes = {
  onClick: PropTypes.func,
};

MobileNavigation.defaultProps = {
  updateSearchOpen: () => {},
};

MobileNavigation.propTypes = {
  updateSearchOpen: PropTypes.func,
};

export default MobileNavigation;
