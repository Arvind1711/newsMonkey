import { React, useEffect, useState } from "react";
import "./ArticleCard.css";

function ArticleCard() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=7b5dc6e586274fcb8dffcc6a9d56bfdd"
    )
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.log(error));
  }, []);

  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  if (!articles.articles) {
    return <div>Loading...</div>;
  }

  return (
    <div className="article-container">
      {articles.articles.map((item) => (
        <div key={articles.articles.url} className="card">
          <h5>
            {item.title
              ? item.title.length > 50
                ? item.title.slice(0, 50) + "..."
                : item.title
              : ""}
          </h5>
          <img src={item.urlToImage ? item.urlToImage : "/newsDummy.png"} alt="placeholderImage"></img>
          <p className="content">
            {item.content
              ? item.content.length > 100
                ? item.content.slice(0, 100) + "..."
                : item.content
              : ""}
          </p>
          <p>{item.author}</p>
          <button onClick={() => handleClick(item.url)}>Read More</button>
        </div>
      ))}
    </div>
  );
}

export default ArticleCard;
