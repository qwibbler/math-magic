import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CalculatorPage from './pages/CalculatorPage';

const App = () => (
  <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/calculator" element={<CalculatorPage />} />
      </Routes>
    </Router>
  </div>
);

export default App;
