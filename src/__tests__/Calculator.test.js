import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator', () => {
  test('Calculator renders correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Button click correctly', () => {
    render(<Calculator />);
    const button5 = document.getElementById('5');
    fireEvent.click(button5);
    const display = document.getElementById('calc-display');
    expect(display.textContent[2]).toBe('5');
  });
});
