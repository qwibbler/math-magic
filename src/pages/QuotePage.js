import React from 'react';
import Header from '../components/Header';
import quotes from '../components/quotes';

const QuotePage = () => {
  const getRndInteger = (minimum = 0, maximum) => (
    Math.floor(Math.random() * (maximum - minimum)) + minimum
  );
  const quote = quotes[getRndInteger(0, quotes.length)];

  return (
    <section className="quote">
      <Header />
      <main>
        <h2>
          {quote.quote}
          <br />
          {quote.author}
        </h2>
      </main>
    </section>
  );
};
export default QuotePage;
