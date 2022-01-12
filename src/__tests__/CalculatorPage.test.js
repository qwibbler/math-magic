import React from 'react';
import CalculatorPage from '../pages/CalculatorPage';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';

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
