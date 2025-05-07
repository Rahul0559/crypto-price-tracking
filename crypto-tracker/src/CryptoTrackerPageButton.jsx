import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderForCryptoTrackerPage from './headerForCryptoTrackerPage.jsx'; 

export default function CryptoTrackerPageButton() {
  const navigate = useNavigate(); 

  return (
    <>
      <HeaderForCryptoTrackerPage />
    </>
  );
}
