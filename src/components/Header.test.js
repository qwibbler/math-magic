import React from 'react';
import Header from './Header';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';

describe('Header', () => {
  test('Header', () => {
    const component = renderer.create(
      <Router>
        <Header />
      </Router>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
