import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SupabaseProvider } from './context/SupabaseContext';
import { WellbeingProvider } from './context/WellbeingContext';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <SupabaseProvider>
      <WellbeingProvider>
        <App />
      </WellbeingProvider>
    </SupabaseProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
