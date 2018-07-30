import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import JournalPage from '../../components/JournalPage';
import fetchPage from '../../data/actions/page';


const mapStateToProps = state => (
  {
    title: state.page.page.title,
    body: state.page.page.body,
    fetchPageSuccess: state.page.error,
    nextPage: state.page.page.next_page_id,
    previousPage: state.page.page.previous_page_id,
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


export default withRouter(JournalPageContainer);
