import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import '@fortawesome/fontawesome-free/js/all.js';
import fbase from './service/fbase'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
