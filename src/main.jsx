import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot desde 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);
