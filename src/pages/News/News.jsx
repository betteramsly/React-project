import axios from 'axios'
import React, { useState } from 'react'

import { Header } from '../../components/Header/Header'
import styles from './News.module.scss'

const News = () => {
  const [news, setNews] = useState([])

  React.useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      setNews(response.data)
    })
  }, [])

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Новости:</h1>
        <div className={styles.newsList}>
          {news.map((item) => {
            return (
              <div className={styles.newsItem} key={item.id}>
                <h1>{item.title}</h1>
                <p>{item.body}</p>
                <hr />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default News
