import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const JournalItem = ({
  id,
  title,
  shortDesc,
}) => (
  <div className="journal">
    <Link to={{ pathname: `/${id}/about` }}>{title}</Link>
    <p>Short Description: {shortDesc}</p>
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
              id={journal.id}
              title={journal.title}
              shortDesc={journal.short_description}
            />
          </li>
        ))
    }
  </ul>
);

class JournalListComp extends React.Component {
  componentDidMount() {
    this.props.getJournals();
  }

  render() {
    return (
      <div>
        <div>
          <JournalList journals={this.props.journals} />
        </div>
      </div>
    );
  }
}

JournalItem.defaultProps = {
  title: '',
  shortDesc: '',
};

JournalItem.propTypes = {
  title: PropTypes.string,
  shortDesc: PropTypes.string,
  id: PropTypes.number.isRequired,
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
