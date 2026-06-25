import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import LenisProvider from './smooth/LenisProvider.jsx';
import './styles/tokens.css';
import './styles/global.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LenisProvider>
      <App />
    </LenisProvider>
  </React.StrictMode>
);
