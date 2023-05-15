import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/NewsFeed.module.css'
const NewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const RAPIDAPI_KEY = process.env.REACT_APP_RAPIDAPI_KEY;

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://crypto-news16.p.rapidapi.com/news/top/5',
        headers: {
          'x-rapidapi-key': RAPIDAPI_KEY,
          'x-rapidapi-host': 'crypto-news16.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setArticles(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.newsFeedContainer}>
        <h1>Crypto Updates</h1>
      <h2 className={styles.newsFeedTitle}>Latest News</h2>
      <div className={styles.newsFeedItems}>
        {articles.map((article, index) => (
          <div className={styles.newsFeedItem} key={index}>
            <div className={styles.imageWrapper}>
              {/* <img className={styles.articleImage} src={article.image} alt="Article" /> */}
            </div>
            <div className={styles.articleContent}>
              <h3 className={styles.articleTitle}>{article.title}</h3>
              <p className={styles.articleDescription}>{article.description}</p>
              <a href={article.url} className={styles.articleLink}>Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
