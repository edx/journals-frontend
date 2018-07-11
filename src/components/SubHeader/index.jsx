import React from 'react';

import NavToggleContainer from '../../containers/NavToggleContainer';
import './SubHeader.scss';


const SubHeader = () => (
  <div className="sub-header d-block d-sm-none">
    <NavToggleContainer label="Menu" classNames={['header-nav-panel-toggle', 'd-block', 'd-sm-none']} />
  </div>
);

export default SubHeader;
