import React from 'react';
import PropTypes from 'prop-types';

const JournalItem = ({
  title,
  shortDesc,
  longDesc,
  structure,
}) => (
  <div className="journal">
    <h3>Title: {title}</h3>
    <p>Short Description: {shortDesc}</p>
    <p>Long Description: {longDesc}</p>
    <p>Structure: {structure}</p>
  </div>
);

const JournalList = ({ journals }) => (
  <ul>
    {
      journals
        .slice(0, 10)
        .map(journal => (
          <li key={journal.id}>
            <JournalItem
              title={journal.title}
              shortDesc={journal.short_description}
              longDesc={journal.long_description}
              structure={JSON.stringify(journal.get_journal_structure, null, 2)}
            />
          </li>
        ))
    }
  </ul>
);

class JournalListComp extends React.Component {
  constructor(props) {
    super(props);
    this.props.getJournals();
  }

  render() {
    return (
      <div>
        <div>
          <JournalList journals={this.props.journals.items} />
        </div>
      </div>
    );
  }
}

JournalItem.defaultProps = {
  title: '',
  shortDesc: '',
  longDesc: '',
  structure: '',
};

JournalItem.propTypes = {
  title: PropTypes.string,
  shortDesc: PropTypes.string,
  longDesc: PropTypes.string,
  structure: PropTypes.string,
};

JournalList.defaultProps = {
  journals: [],
};

JournalList.propTypes = {
  journals: PropTypes.arrayOf(PropTypes.object),
};

JournalListComp.defaultProps = {
  journals: [],
  getJournals: () => [{}],
};

JournalListComp.propTypes = {
  journals: PropTypes.arrayOf(PropTypes.object),
  getJournals: PropTypes.func,
};

export default JournalListComp;
