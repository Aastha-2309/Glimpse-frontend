import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'react-toastify/ReactToastify.css';
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ToastContainer className="toastt"/>
      <App />
    
  </StrictMode>,
);
reportWebVitals();
