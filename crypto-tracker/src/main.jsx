import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './CryptoTrackingHomeCss.css';
import CryptoTrackingHome from './CryptoTrackingHome.jsx';
import CryptoTrackerPageButton from './CryptoTrackerPageButton.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CryptoTrackingHome />} />
        <Route path="/track" element={<CryptoTrackerPageButton />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
