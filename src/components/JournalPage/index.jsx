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
import ImageViewerContainer from '../../containers/ImageViewerContainer';
import PageNavigationButtons from '../PageNavigationButtons';
import PDFViewerContainer from '../../containers/PDFViewerContainer';
import ViewerBorder from '../ViewerBorder';

class JournalPage extends React.Component {
  componentDidMount() {
    this.props.getPage(this.props.match.params.pageId);
  }
  componentDidUpdate(prevProps) {
    // If we try to change Journal pages
    if (prevProps.match.params.pageId !== this.props.match.params.pageId) {
      this.props.getPage(this.props.match.params.pageId);
    }
    // If we successfully change Journal pages
    if (prevProps.pageId !== this.props.pageId) {
      this.trackVisit();
    }
  }

  trackVisit() {
    if (this.props.userId != null) {
      this.props.setPageVisit(this.props.userId, this.props.match.params.pageId);
    }
  }

  render() {
    const baseUrl = !this.props.is_preview ? `/${this.props.match.params.journalId}/pages` : '';
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
                    return (
                      <ViewerBorder spanId={el.value.span_id} title={el.value.title} spanFullWidth>
                        <PDFViewerContainer url={el.value.url} title={el.value.title} />
                      </ViewerBorder>
                    );
                  case XBLOCK_VIDEO:
                    // return <XBlockVideo />
                    return <div>XBlockVideo</div>;
                  case IMAGE:
                    return (
                      <ViewerBorder
                        spanId={el.value.span_id}
                        title={el.value.title}
                        caption={el.value.caption}
                      >
                        <ImageViewerContainer url={el.value.url} altText={el.value.title} />
                      </ViewerBorder>
                    );
                  default:
                    return <div>No matching component</div>;
                }
              })
            }
          </div>
          {
            !this.props.is_preview &&
              <PageNavigationButtons prev={previousPageUrl} next={nextPageUrl} />
          }
        </div>
      )
    );
  }
}

JournalPage.defaultProps = {
  title: '',
  body: [],
  getPage: () => {},
  setPageVisit: () => {},
  fetchPageSuccess: false,
  nextPage: null,
  previousPage: null,
  is_preview: false,
  pageId: 0,
};

JournalPage.propTypes = {
  title: PropTypes.string,
  body: PropTypes.arrayOf(PropTypes.object),
  getPage: PropTypes.func,
  setPageVisit: PropTypes.func,
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
  is_preview: PropTypes.bool,
  userId: PropTypes.number.isRequired,
  pageId: PropTypes.number,
};


export default JournalPage;
