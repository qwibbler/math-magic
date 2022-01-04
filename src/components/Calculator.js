import React from 'react';

const Button = (props) => {
  const { name } = props;
  return (
    <td className="calc-button">
      {name}
    </td>
  );
};

const Row = (props) => {
  const buttons = [];
  const { names } = props;
  names.forEach((name) => buttons.push(<Button name={name} />));
  return (
    <tr>
      {buttons}
    </tr>
  );
};

const Calculator = () => {
  const buttonNames = [
    ['AC', '+/-', '%', 'U00F7'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];
  const allRows = [];
  buttonNames.forEach((row) => allRows.push(<Row buttons={row} />));

  return (
    <div id="calculator">
      <div id="calc-display" />
      <table id="calc-buttons">
        {allRows}
      </table>
    </div>
  );
};
export default Calculator;
