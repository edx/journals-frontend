import React from 'react';
import PropTypes from 'prop-types';


class JournalAboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.props.getJournal(this.props.match.params.journalId);
  }

  render() {
    return (
      <div className="about-page">
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}

JournalAboutPage.defaultProps = {
  title: '',
  getJournal: () => {},
};

JournalAboutPage.propTypes = {
  title: PropTypes.string,
  getJournal: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      journalId: PropTypes.string,
    }),
    url: PropTypes.string,
  }).isRequired,
};


export default JournalAboutPage;
