import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import CalculatorPage from './pages/CalculatorPage';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <CalculatorPage />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
