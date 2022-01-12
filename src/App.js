import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import CalculatorPage from './pages/CalculatorPage';
import QuotePage from './pages/QuotePage';
import NoMatch from './pages/NoMatch';

const App = () => (
  <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quote" element={<QuotePage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  </div>
);

export default App;
