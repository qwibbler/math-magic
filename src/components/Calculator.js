import React, { useState } from 'react';
import Button from './Button';
import calculate from '../logic/calculate';
import './Calculator.css';

const Calculator = () => {
  const [calcObj, setCalcObj] = useState({});

  const clickHandler = (buttonName) => setCalcObj(calculate(calcObj, buttonName));

  const buttonNames = [
    'AC', '+/-', '%', '÷',
    '7', '8', '9', 'x',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=',
  ];
  const buttonsArray = [];
  buttonNames.forEach((button) => buttonsArray.push(
    <Button name={button} click={clickHandler} key={button} />,
  ));

  return (
    <div id="calculator-wrapper">
      <div id="calc-display">
        {calcObj.total}
        &nbsp;
        {calcObj.operation}
        &nbsp;
        {calcObj.next}
      </div>
      <div id="calc-buttons">
        {buttonsArray}
      </div>
    </div>
  );
};
export default Calculator;
