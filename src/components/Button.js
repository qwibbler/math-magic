import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  clickHandler = (e) => {
    const { click } = this.props;
    click(e.target.value);
  }

  render = () => {
    const { name } = this.props;
    return (
      <input
        type="button"
        id={name}
        value={name}
        key={name}
        onClick={this.clickHandler}
      />
    );
  }
}
Button.propTypes = {
  name: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};
