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
import PageNavigationButtons from '../PageNavigationButtons';
import PDFViewer from '../PDFViewer';

class JournalPage extends React.Component {
  componentDidMount() {
    this.props.getPage(this.props.match.params.pageId);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.pageId !== this.props.match.params.pageId) {
      this.props.getPage(this.props.match.params.pageId);
    }
  }

  render() {
    const baseUrl = `/${this.props.match.params.journalId}/pages`;
    const previousPageUrl = this.props.previousPage ? `${baseUrl}/${this.props.previousPage}` : '';
    const nextPageUrl = this.props.nextPage ? `${baseUrl}/${this.props.nextPage}` : '';
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
                    return (<PDFViewer
                      spanId={el.value.span_id}
                      url={el.value.url}
                      title={el.value.title}
                    />);
                  case XBLOCK_VIDEO:
                    // return <XBlockVideo />
                    return <div>XBlockVideo</div>;
                  case IMAGE:
                    return (<ImageViewer
                      url={el.value.url}
                      spanId={el.value.span_id}
                      width={el.value.width}
                      title={el.value.title}
                      altText={el.value.title}
                      caption={el.value.caption}
                    />);
                  default:
                    return <div>No matching component</div>;
                }
              })
            }
          </div>
          <PageNavigationButtons prev={previousPageUrl} next={nextPageUrl} />
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
  nextPage: null,
  previousPage: null,
};

JournalPage.propTypes = {
  title: PropTypes.string,
  body: PropTypes.arrayOf(PropTypes.object),
  getPage: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      pageId: PropTypes.string,
      journalId: PropTypes.string,
    }),
    url: PropTypes.string,
  }).isRequired,
  fetchPageSuccess: PropTypes.bool,
  nextPage: PropTypes.number,
  previousPage: PropTypes.number,
};


export default JournalPage;
