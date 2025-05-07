import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './Footer.jsx';;
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

const CryptoTrackerPage = () => {
  const [coins, setCoins] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchPrices = async () => {
    try {
      const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 10,
          page: 1,
          sparkline: true,
          price_change_percentage: '1h,24h,7d',
        },
      });

      setCoins(res.data);
      setLastUpdated(new Date().toLocaleTimeString());
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 0.5); // Refresh every 0.5s
    return () => clearInterval(interval);
  }, []);

  const generateChartData = (sparklineData) => ({
    labels: sparklineData.map((_, i) => i),
    datasets: [
      {
        label: '7D Price',
        data: sparklineData,
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.3,
      },
    ],
  });

  return (
    <>
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}> Live Crypto Tracker</h2>

      <p style={{ textAlign: 'center', fontSize: '14px' }}>
        Last updated: {lastUpdated}
      </p>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ccc', backgroundColor: '#f5f5f5' }}>
            <th>Coin</th>
            <th>Price</th>
            <th>1h%</th>
            <th>24h%</th>
            <th>7d%</th>
            <th>Volume</th>
            <th>Market Cap</th>
            <th>Circulating Supply</th>
            <th>7-Day Graph</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr key={coin.id} style={{ borderBottom: '1px solid #ddd', textAlign: 'center' }}>
              <td style={{ textAlign: 'left' }}>
                <img src={coin.image} alt={coin.name} width="20" style={{ verticalAlign: 'middle' }} />
                &nbsp;{coin.name}
              </td>
              <td>${coin.current_price.toLocaleString()}</td>
              <td style={{ color: coin.price_change_percentage_1h_in_currency > 0 ? 'green' : 'red' }}>
                {coin.price_change_percentage_1h_in_currency?.toFixed(2) ?? '0.00'}%
              </td>
              <td style={{ color: coin.price_change_percentage_24h_in_currency > 0 ? 'green' : 'red' }}>
                {coin.price_change_percentage_24h_in_currency?.toFixed(2) ?? '0.00'}%
              </td>
              <td style={{ color: coin.price_change_percentage_7d_in_currency > 0 ? 'green' : 'red' }}>
                {coin.price_change_percentage_7d_in_currency?.toFixed(2) ?? '0.00'}%
              </td>
              <td>${coin.total_volume?.toLocaleString() ?? 'N/A'}</td>
              <td>${coin.market_cap?.toLocaleString() ?? 'N/A'}</td>
              <td>{coin.circulating_supply?.toLocaleString() ?? 'N/A'}</td>
              <td style={{ width: '250px', height: '80px' }}>
                {coin.sparkline_in_7d?.price ? (
                  <Line
                    data={generateChartData(coin.sparkline_in_7d.price)}
                    options={{
                      responsive: true,
                      plugins: { legend: { display: false } },
                      scales: {
                        x: { display: false },
                        y: { display: false },
                      },
                    }}
                  />
                ) : (
                  <span>N/A</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      <Footer />
    </>
  );
};

export default CryptoTrackerPage;
