import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../components/Button';

describe('Button', () => {
  test('Link renders correctly', () => {
    const tree = renderer
      .create(<Button name="test" click={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
