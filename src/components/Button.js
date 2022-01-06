import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const clickHandler = (e) => {
    const { click } = props;
    click(e.target.value);
  };

  const { name } = props;
  return (
    <input
      type="button"
      id={name}
      value={name}
      key={name}
      onClick={clickHandler}
    />
  );
};
Button.propTypes = {
  name: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};
export default Button;
