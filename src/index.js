import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

export const AppContext = createContext({ score: 0, type: null });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppContext.Provider value={{ score: 0, type: null }}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </AppContext.Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
