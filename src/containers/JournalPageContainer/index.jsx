import { connect } from 'react-redux';

import JournalPage from '../../components/JournalPage';
import fetchPage from '../../data/actions/page';


const mapStateToProps = state => (
  {
    title: state.page.page.title,
    body: state.page.page.body,
    fetchPageSuccess: state.page.error,
  }
);

const mapDispatchToProps = dispatch => (
  {
    getPage: pageId => dispatch(fetchPage(pageId)),
  }
);

const JournalPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(JournalPage);

export default JournalPageContainer;
