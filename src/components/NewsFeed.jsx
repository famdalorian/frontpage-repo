import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/NewsFeed.module.css';

const generatePlaceholderImage = (nftName) => {
  const nameWords = nftName.split(' ');
  const initials = nameWords.reduce((acc, word) => acc + word.charAt(0), '');
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  canvas.width = 100;
  canvas.height = 100;
  context.fillStyle = '#ff80bf';
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.font = 'bold 24px sans-serif';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillStyle = '#ffffff';
  context.fillText(initials, canvas.width / 2, canvas.height / 2);
  return canvas.toDataURL('image/png');
};

const NewsFeed = () => {
  const [sales, setSales] = useState([]);
  const [displayedSales, setDisplayedSales] = useState([]);
  const [displayCount, setDisplayCount] = useState(3);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://top-nft-sales.p.rapidapi.com/sales/30d',
        headers: {
          'X-RapidAPI-Key': '5954b34e8dmsh63c37f8644a88d3p147d34jsn5e3844d4fbed',
          'X-RapidAPI-Host': 'top-nft-sales.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        setSales(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setDisplayedSales(sales.slice(0, displayCount));
  }, [sales, displayCount]);

  const handleLoadMore = () => {
    setDisplayCount(displayCount + 3);
  };

  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.title}>Crypto Updates</h1>
      <div className={styles.salesContainer}>
        <h2 className={styles.sectionTitle}>Latest Sales</h2>
        {displayedSales.map((sale, index) => (
          <div className={styles.saleItem} key={index}>
            <div className={styles.thumbnail}>
              <img
                src={sale.image || generatePlaceholderImage(sale.nft_name)}
                alt="Thumbnail"
              />
            </div>
            <div className={styles.saleDetails}>
              <h3 className={styles.nftName}>{sale.nft_name}</h3>
              <p className={styles.collection}>
                Collection: <a href={sale.collection_url}>{sale.collection}</a>
              </p>
              <p className={styles.date}>Date: {sale.date}</p>
              <p className={styles.price}>Price: {sale.price}</p>
              <a href={sale.nft_url} className={styles.readMoreLink}>
                Read More
              </a>
            </div>
          </div>
        ))}
        {displayedSales.length < sales.length && (
          <button className={styles.loadMoreButton} onClick={handleLoadMore}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default NewsFeed;
