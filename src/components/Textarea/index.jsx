import React from 'react';
import PropTypes from 'prop-types';

class Textarea extends React.Component {
  state = {
    value: this.props.value,
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <textarea
        id={this.props.id}
        name={this.props.name}
        defaultValue={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}

Textarea.defaultProps = {
  value: '',
};

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Textarea;
