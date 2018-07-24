import React from 'react';
import PropTypes from 'prop-types';

import {
  RICH_TEXT,
  RAW_HTML,
  PDF,
  XBLOCK_VIDEO,
  IMAGE,
} from '../../data/constants/contentTypes';

import RawHTML from '../../components/RawHTML';

class JournalPage extends React.Component {
  constructor(props) {
    super(props);
    this.props.getPage(this.props.match.params.pageId);
  }


  render() {
    return (
      <div className="page">
        <h3>{this.props.title}</h3>
        <div>
          {
            this.props.body.map((el) => {
              switch (el.type) {
                case RICH_TEXT:
                case RAW_HTML:
                  // rich text and raw HTML use the same component
                  return <RawHTML content={el.value} />;
                case PDF:
                  // return <PDF />
                  return <div>PDF</div>;
                case XBLOCK_VIDEO:
                  // return <XBlockVideo />
                  return <div>XBlockVideo</div>;
                case IMAGE:
                  // return <Image />
                  return <div>Image</div>;
                default:
                  return <div>No matching component</div>;
              }
            })
          }
        </div>
      </div>
    );
  }
}

JournalPage.defaultProps = {
  title: '',
  body: [],
  getPage: () => {},
};

JournalPage.propTypes = {
  title: PropTypes.string,
  body: PropTypes.arrayOf(PropTypes.object),
  getPage: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      pageId: PropTypes.string,
    }),
    url: PropTypes.string,
  }).isRequired,
};


export default JournalPage;
