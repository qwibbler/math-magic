import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name } = this.props;
    return (
      <input type="button" id={name} value={name} />
    );
  }
}
Button.propTypes = {
  name: PropTypes.string.isRequired,
};
