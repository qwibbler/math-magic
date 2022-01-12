import React from 'react';
import NoMatch from '../pages/NoMatch';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';

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
