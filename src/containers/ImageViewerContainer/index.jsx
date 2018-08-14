
import { connect } from 'react-redux';

import ImageViewer from '../../components/ImageViewer';

const mapStateToProps = state => (
  {
    serverBaseUrl: state.siteInfo.serverBaseUrl,
  }
);

const ImageViewerContainer = connect(mapStateToProps)(ImageViewer);

export default ImageViewerContainer;
