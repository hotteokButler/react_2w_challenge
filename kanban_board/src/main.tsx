import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './style/index.css';
import { Reset } from 'styled-reset';
import { RecoilRoot } from 'recoil';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <Reset />
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
