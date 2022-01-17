import React from 'react';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import NoMatch from '../pages/NoMatch';

test('NoMatch', () => {
  const tree = renderer
    .create(
      <Router>
        <NoMatch />
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
