import React from 'react';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import HomePage from '../pages/HomePage';

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
