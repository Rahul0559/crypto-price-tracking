import React from 'react';
import './header.css'; 
const CryptoTracking = () => {
    return (
        <div>
            <div className="header">
                <div>
                    <p style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>
                        Crypto Tracker
                    </p>
                </div>

                <nav aria-label="Main navigation">
                    <ul style={{
                        listStyleType: 'none',
                        display: 'flex',
                        gap: '20px',
                        margin: 0,
                        padding: 0
                    }}>
                        <li><a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
                        <li>
                            <a 
                                href="https://mudrex.com/buy-bitcoin" 
                                style={{ color: '#fff', textDecoration: 'none' }} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Buy
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://mudrex.com/buy-bitcoin" 
                                style={{ color: '#fff', textDecoration: 'none' }} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Sell
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://rahul0559.github.io/portfolio/" 
                                style={{ color: '#fff', textDecoration: 'none' }} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://mudrex.com/buy-bitcoin" 
                                style={{ color: '#fff', textDecoration: 'none' }} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Market Data
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default CryptoTracking;