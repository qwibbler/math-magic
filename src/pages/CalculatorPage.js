import React from 'react';
import Header from '../components/Header';
import Calculator from '../components/Calculator';
import MagicHat from '../hat_magic.png';

const CalculatorPage = () => (
  <section className="calculator">
    <Header />
    <main>
      <div id="calcText">
        <h2>Let&apos;s do some math!</h2>
        <img src={MagicHat} alt="Magic Hat" />
      </div>
      <Calculator />
    </main>
  </section>
);
export default CalculatorPage;
