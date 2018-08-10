
import { connect } from 'react-redux';

import PDFViewer from '../../components/PDFViewer';

const mapStateToProps = state => (
  {
    serverBaseUrl: state.siteInfo.serverBaseUrl,
  }
);

const PDFViewerContainer = connect(mapStateToProps)(PDFViewer);

export default PDFViewerContainer;
