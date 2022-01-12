import React from 'react';
import Header from '../components/Header';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
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

  describe('Links', () => {
    test('Home', () => {
      render(
        <Router>
          <Header />
        </Router>
      );
      expect(document.querySelectorAll("a")[0].getAttribute("href")).toBe('#/')
    })

    test('Calculator', () => {
      render(
        <Router>
          <Header />
        </Router>
      );
      expect(document.querySelectorAll("a")[1].getAttribute("href")).toBe('#/calculator')
    })

    test('Quote', () => {
      render(
        <Router>
          <Header />
        </Router>
      );
      expect(document.querySelectorAll("a")[2].getAttribute("href")).toBe('#/quote')
    })
  })
});
