import React from 'react';

import NavToggleContainer from '../../containers/NavToggleContainer';
import './SubHeader.scss';


const SubHeader = () => (
  <div className="sub-header d-flex d-sm-none">
    <NavToggleContainer
      label="Contents"
      id="header-nav-panel-toggle"
      classNames={['nav-panel-toggle', 'd-block', 'd-sm-none']}
    />
  </div>
);

export default SubHeader;
