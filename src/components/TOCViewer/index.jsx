import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Icon } from '@edx/paragon';
import classNames from 'classnames';


import './TOCViewer.scss';


class TreeViewer extends React.Component {
  constructor(props) {
    super(props);
    this.setExpanded = this.setExpanded.bind(this);

    this.state = {
      expanded: this.props.node.id === this.props.currentPageId,
    };
  }
  componentDidUpdate(prevProps) {
    const isBeingViewed = this.props.node.id === this.props.currentPageId;
    const pageHasChanged = this.props.currentPageId !== prevProps.currentPageId;

    if (isBeingViewed && pageHasChanged && this.props.expandParent) {
      this.props.expandParent();
    }
  }

  setExpanded(event) {
    this.setState({
      expanded: event ? !this.state.expanded : true,
    });
    if (event === undefined && this.props.expandParent) {
      this.props.expandParent();
    }
  }

  render() {
    return (
      <li
        key={this.props.node.id}
        className={
          classNames({
            collapsed: this.props.node.children && !this.state.expanded,
          })
        }
      >
        <span
          className={
            classNames({
              highlight: this.props.node.id === this.props.currentPageId,
            })
          }
        >
          {
            this.props.node.children ?
              <Button
                aria-expanded={this.state.expanded}
                label={
                  <Icon
                    className={
                      classNames({
                        fa: true,
                        'fa-chevron-down': this.state.expanded,
                        'fa-chevron-right': !this.state.expanded,
                      }).split(' ')
                    }
                  />
                }
                onClick={this.setExpanded}
              /> :
              <span className="bullet">&bull;</span>
          }
          <Link to={`/${this.props.journalAboutId}/pages/${this.props.node.id}`}>{this.props.node.title}</Link>
        </span>
        {
          this.props.node.children &&
          <ul>
            <TreeList
              structure={this.props.node.children}
              journalAboutId={this.props.journalAboutId}
              currentPageId={this.props.currentPageId}
              expandParent={this.setExpanded}
            />
          </ul>
        }
      </li>
    );
  }
}

const TreeList = props => (
  props.structure.map(node => (
    <TreeViewer
      key={node.id}
      node={node}
      journalAboutId={props.journalAboutId}
      currentPageId={props.currentPageId}
      expandParent={props.expandParent}
    />
  ))
);

const TOCViewer = props => (
  // If the title is an empty string do not display one
  <div className="toc">
    <div className="toc-title">TABLE OF CONTENTS</div>
    <ul>
      <TreeList
        structure={props.journal.structure}
        journalAboutId={props.journal.id}
        currentPageId={props.currentPageId}
      />
    </ul>
  </div>
);

TreeViewer.defaultProps = {
  currentPageId: 0,
  expandParent: undefined,
};

TreeViewer.propTypes = {
  node: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    children: PropTypes.array,
  }).isRequired,
  journalAboutId: PropTypes.number.isRequired,
  currentPageId: PropTypes.number,
  expandParent: PropTypes.func,
};

TreeList.propTypes = {
  structure: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    children: PropTypes.array,
  })).isRequired,
  journalAboutId: PropTypes.number.isRequired,
};

TOCViewer.defaultProps = {
  currentPageId: 0,
};

TOCViewer.propTypes = {
  journal: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    shortDescription: PropTypes.string,
    structure: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  currentPageId: PropTypes.number,
};

export default TOCViewer;
