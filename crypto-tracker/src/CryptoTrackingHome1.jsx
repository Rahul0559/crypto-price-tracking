import React from 'react';
import CryptoTrackerPage from './CryptoTrackerPage.jsx';

const CryptoTrackingHome1 = () => {
  return (
    <div style={{ padding: '0px' }}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
        }}
      >
        {/* Left: Image */}
        <div style={{ flex: '1 1 40%', textAlign: 'center' }}>
          <img
            src="src/assets/2.png"
            alt="Crypto Tracking"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>

        {/* Right: Text */}
        <div style={{ flex: '1 1 55%', textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '10px' }}>
            Real-Time Crypto Price Tracker
          </h2>
          <p
            style={{
              fontSize: '18px',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.6',
            }}
          >
            Stay ahead in the crypto game with our real-time tracking dashboard. Monitor live prices,
            view market changes instantly, and keep an eye on key stats like volume and supply — all in one
            clean, responsive view.
          </p>
        </div>
      </div>

      {/* Crypto Tracker Page Below */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          justifyContent: 'flex-end',
          marginTop: '40px',
          marginBottom: '0px',
        }}
      >
        <CryptoTrackerPage />
      </div>
    </div>  
  );
};

export default CryptoTrackingHome1;
