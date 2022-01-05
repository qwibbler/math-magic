import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  clickHandler = (e) => {
    const { clickHandlerInherited } = this.props;
    clickHandlerInherited(e.target.value);
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
  clickHandlerInherited: PropTypes.func.isRequired,
};
