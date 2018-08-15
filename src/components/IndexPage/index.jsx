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

class IndexPage extends React.Component {
  componentDidMount() {
    this.props.getJournals();
    this.props.toggleNavigationVisibility(false);
  }

  render() {
    return (
      <div>
        <div>
          <ul>
            {
              this.props.journals.map(journal => (
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

IndexPage.defaultProps = {
  journals: [],
  getJournals: () => [{}],
  toggleNavigationVisibility: () => {},
};

IndexPage.propTypes = {
  journals: PropTypes.arrayOf(PropTypes.object),
  getJournals: PropTypes.func,
  toggleNavigationVisibility: PropTypes.func,
};

export default IndexPage;
