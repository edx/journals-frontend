import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import JournalPage from '../../components/JournalPage';
import fetchPage from '../../data/actions/page';
import setPageVisit from '../../data/actions/pageVisit';


const mapStateToProps = state => (
  {
    pageId: state.page.page.id,
    title: state.page.page.title,
    body: state.page.page.body,
    fetchPageSuccess: state.page.error,
    nextPage: state.page.page.next_page_id,
    previousPage: state.page.page.previous_page_id,
    userId: state.userInfo.id,
  }
);

const mapDispatchToProps = dispatch => (
  {
    getPage: pageId => dispatch(fetchPage(pageId)),
    setPageVisit: (userId, pageId) => setPageVisit(userId, pageId),
  }
);

const JournalPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(JournalPage);


export default withRouter(JournalPageContainer);
