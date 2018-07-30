import React from 'react';
import PropTypes from 'prop-types';

import {
  RICH_TEXT,
  RAW_HTML,
  PDF,
  XBLOCK_VIDEO,
  IMAGE,
} from '../../data/constants/contentTypes';
import UnauthorizedPage from '../UnauthorizedPage';

import RawHTMLViewer from '../RawHTMLViewer';
import ImageViewer from '../ImageViewer';

class JournalPage extends React.Component {
  componentDidMount() {
    this.props.getPage(this.props.match.params.pageId);
  }

  render() {
    return (
      this.props.fetchPageSuccess ? (
        <UnauthorizedPage />
      ) : (
        <div className="page">
          <h3>{this.props.title}</h3>
          <div>
            {
              this.props.body.map((el) => {
                switch (el.type) {
                  case RICH_TEXT:
                  case RAW_HTML:
                    // rich text and raw HTML use the same component
                    return <RawHTMLViewer content={el.value} />;
                  case PDF:
                    // return <PDF />
                    return <div>PDF</div>;
                  case XBLOCK_VIDEO:
                    // return <XBlockVideo />
                    return <div>XBlockVideo</div>;
                  case IMAGE:
                    // TODO: need to change id for search
                    return (<ImageViewer
                      url={el.value.url}
                      id={el.id}
                      title={el.value.title}
                      altText={el.value.title}
                    />);
                  default:
                    return <div>No matching component</div>;
                }
              })
            }
          </div>
        </div>
      )
    );
  }
}

JournalPage.defaultProps = {
  title: '',
  body: [],
  getPage: () => {},
  fetchPageSuccess: false,
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
  fetchPageSuccess: PropTypes.bool,
};


export default JournalPage;
