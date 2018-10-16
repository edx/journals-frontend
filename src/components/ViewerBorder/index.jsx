import React from 'react';
import Fullscreen from 'react-full-screen';
import PropTypes from 'prop-types';
import { Button, Icon } from '@edx/paragon';

import './ViewerBorder.scss';

class ViewerBorder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFull: false,
    };
  }

  goFull = () => {
    this.setState({ isFull: true });
  }

  render() {
    const content = <div className="viewer-content">{this.props.children}</div>;
    return (
      <span id={this.props.spanId}>
        <div className={`viewer-border${this.props.spanFullWidth ? ' w-100' : ''}`}>
          { this.props.title.trim() &&
            <div className="grow">
              <div className="viewer-title" >{this.props.title}
                { this.props.showFullscreen &&
                  <Button
                    className={['control-btn', 'float-right']}
                    label={<Icon className="fa fa-expand" />}
                    onClick={this.goFull}
                  />
                }
              </div>
            </div>
          }
          { this.props.showFullscreen ? (
            <Fullscreen
              enabled={this.state.isFull}
              onChange={isFull => this.setState({ isFull })}
            >{content}
            </Fullscreen>
          ) : (
            content
          )}
          { this.props.caption.trim() &&
            /* eslint-disable react/no-danger */
            <div className="viewer-caption grow">
              <div dangerouslySetInnerHTML={{ __html: this.props.caption }} />
            </div>
            /* eslint-enable react/no-danger */
          }
        </div>
      </span>
    );
  }
}

ViewerBorder.defaultProps = {
  title: '',
  caption: '',
  spanFullWidth: false,
  showFullscreen: false,
};

ViewerBorder.propTypes = {
  children: PropTypes.element.isRequired,
  spanId: PropTypes.string.isRequired,
  title: PropTypes.string,
  caption: PropTypes.string,
  spanFullWidth: PropTypes.bool,
  showFullscreen: PropTypes.bool,
};

export default ViewerBorder;
