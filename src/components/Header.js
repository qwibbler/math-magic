import React from 'react';
import { Link } from 'react-router-dom';
import { GiMagickTrick, GiSparkles } from 'react-icons/gi';
import './Header.css';

const Header = () => (
  <header>
    <h1>
      <GiMagickTrick />
      Math Magicians
      <GiSparkles />
    </h1>
    <nav>
      <Link to="/"> Home </Link>
      |
      <Link to="/calculator"> Calculator </Link>
      |
      <Link to="/quote"> Quote </Link>
    </nav>
  </header>
);
export default Header;
