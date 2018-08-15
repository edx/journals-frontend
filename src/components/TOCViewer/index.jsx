import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './TOCViewer.scss';


const TreeViewer = props => (
  props.structure.map(node => (
    <li>
      <Link to={`/${props.journalId}/pages/${node.id}`}>{node.title}</Link>
      <ul>
        {node.children && <TreeViewer structure={node.children} journalId={props.journalId} />}
      </ul>
    </li>
  ))
);

const TOCViewer = props => (
  // If the title is an empty string do not display one
  <div className="toc-border">
    {props.journal.title.trim() && <div className="journal-title">{props.journal.title}</div>}
    <ul>
      <TreeViewer structure={props.journal.structure} journalId={props.journal.id} />
    </ul>
  </div>
);

TOCViewer.defaultProps = {
};

TOCViewer.propTypes = {
  journal: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    shortDescription: PropTypes.string,
    structure: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default TOCViewer;
