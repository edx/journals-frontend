import React from 'react';
import PropTypes from 'prop-types';


class JournalAboutPage extends React.Component {
  constructor(props) {
    super(props);
    //this.props.getJournal(this.props.match.params.journalSlug);
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
};

JournalAboutPage.propTypes = {
  title: PropTypes.string,
};


export default JournalAboutPage;
