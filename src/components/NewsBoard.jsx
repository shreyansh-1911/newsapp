import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const NewsBoard = ({category}) => {

  const [articles, setArticles] = useState([]);
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=c180d04aca10487f84abe6fd2aa3251f`
    fetch(url).then(response => response.json()).then(data => setArticles(data.articles));
  }, [category])
  return (
    <div>
      <h2 className='text-center mb-3'>Latest <span className='badge bg-danger'>News</span></h2>
      {articles.map((news, index) => {
        return <NewsItem key={index} title={news.title} src={news.urlToImage} description={news.description} url={news.url} />
      })}

    </div>
  )
}

export default NewsBoard
