import React from 'react';

const Footer = () => {
   return (
     <div style={{ backgroundColor: '#333', padding: '20px' }}>
       <ul style={{
           listStyleType: 'none',
           gap: '20px',
           margin: 0,
           padding: 0,
           display: 'flex',
           justifyContent: 'center' // Center the links horizontally
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
     </div>
   );
}

export default Footer;
