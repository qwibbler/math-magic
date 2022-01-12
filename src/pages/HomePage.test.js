import React from 'react';
import HomePage from './HomePage';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';

test('HomePage', () => {
  const tree = renderer
    .create(
      <Router>
        <HomePage />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
