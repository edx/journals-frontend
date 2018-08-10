import React from 'react';
import PropTypes from 'prop-types';


import './TOCViewer.scss';

const getSubPageHTML = (page, journalId) => {
  let retHTML = '<li><a href="' + journalId + '/pages/' + page.id +'">' + page.title + '</a></li>';
  if (page.children) {
    retHTML += '<ul>' + page.children.map((child) => getSubPageHTML(child, journalId)).join("") + '</ul>';
  }
  return retHTML;
};

const getTOCHTML = (journal) => {
  const retHTML = journal.structure.map((page) => getSubPageHTML(page, journal.id)).join('');
  return retHTML;
};


const TOCViewer = props => (
  // If the title is an empty string do not display one
  <div className="toc-border">
    { (props.journal.title.trim() !== '') ? <div className="journal-title">{props.journal.title} </div> : '' }
    <ul>
      <div dangerouslySetInnerHTML={{ __html: getTOCHTML(props.journal) }} />
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
