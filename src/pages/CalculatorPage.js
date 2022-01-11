import React from 'react';
import Header from '../components/Header';
import Calculator from '../components/Calculator';

const CalculatorPage = () => (
  <section className="calculator">
    <Header />
    <main>
      <h2>Let&apos;s do some math!</h2>
      <Calculator />
    </main>
  </section>
);
export default CalculatorPage;
