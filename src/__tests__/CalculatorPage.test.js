import React from 'react';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import CalculatorPage from '../pages/CalculatorPage';

describe('Header', () => {
  test('Header', () => {
    const tree = renderer
      .create(
        <Router>
          <CalculatorPage />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
