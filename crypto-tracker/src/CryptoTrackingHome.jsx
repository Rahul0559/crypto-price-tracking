import React from 'react';
import { useNavigate } from 'react-router-dom';
import CryptoTrackingHome1 from './CryptoTrackingHome1.jsx';
import CryptoTracking from './crypto-tracking.jsx'; 

const CryptoTrackingHome = () => {
  const navigate = useNavigate();

  const handleTrackClick = () => {
    navigate('/track');
  };

  return (
    <>
      <div>
        <CryptoTracking /> {/* ✅ Corrected usage */}
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: '#fff',
          padding: '40px',
        }}
      >
        <div style={{ flex: 1, paddingRight: '20px', color: 'black' }}>
          <p style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>
            Track your Coins and NFTs with Crypto Tracker
          </p>
          <button
            onClick={handleTrackClick}
            style={{
              padding: '10px 30px',
              fontSize: '18px',
              backgroundColor: 'black',
              border: 'none',
              color: 'red',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Track
          </button>
        </div>
        <div style={{ flex: 1, textAlign: 'right' }}>
          <img src="src/assets/1.png" alt="Crypto Tracking" style={{ maxWidth: '100%' }} />
        </div>
      </div>
      <CryptoTrackingHome1 />
    </>
  );
};

export default CryptoTrackingHome;
