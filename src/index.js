import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';  // Update the import path
import './index.css';  // Update the import path
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-slideshow-image/dist/styles.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
