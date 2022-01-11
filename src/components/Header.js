import React from 'react';
import { GiMagickTrick } from 'react-icons/gi';
import './Header.css';

const Header = () => (
  <section className="Home">
    <header>
      <h1>
        <GiMagickTrick />
        Math Magicians
      </h1>
      <nav>
        <a href="https://react-icons.github.io/react-icons/search?q=magic">Home</a>
        |
        <a href="https://react-icons.github.io/react-icons/search?q=magic">Calculator</a>
        |
        <a href="https://react-icons.github.io/react-icons/search?q=magic">Quote</a>
      </nav>
    </header>
  </section>
);
export default Header;
