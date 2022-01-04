import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const buttons = [];
    const { names } = this.props;
    names.forEach((name) => buttons.push(<Button name={name} />));
    return (
      <tr>
        {buttons}
      </tr>
    );
  }
}
Row.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
};
