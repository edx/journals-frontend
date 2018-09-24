import React from 'react';
import PropTypes from 'prop-types';
import { Hyperlink } from '@edx/paragon';

import './Footer.scss';


const LinkList = footerLinks => (
  <ul>
    {
      footerLinks.map(link =>
        (
          <li key={link.label_text}>
            <Hyperlink
              className="footer-link"
              destination={link.destination_link}
              content={link.label_text}
            />
            <div className="link-divider">/</div>
          </li>
        ))
    }
  </ul>
);


const Footer = props => (
  <footer className="page-footer">
    <div className="footer-content">
      <img className="site-logo" alt="site logo" src={props.siteLogo} />
      {LinkList(props.footerLinks)}
    </div>
  </footer>
);

Footer.defaultProps = {
  siteLogo: '',
  footerLinks: [],
};

Footer.propTypes = {
  siteLogo: PropTypes.string,
  footerLinks: PropTypes.arrayOf(PropTypes.shape({
    destination_link: PropTypes.string,
    label_text: PropTypes.string,
  })),
};

export default Footer;
