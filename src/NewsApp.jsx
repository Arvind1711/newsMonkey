// Code Written By: Arvind Panwar

import React from "react";
import Navbar from "./components/Navbar";
import ArticleCard from "./components/ArticleCard";
import "./index.css";

function NewsApp() {
  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center", margin: "20px" }}>NewsShorts App</h1>
      <div>
        <ArticleCard />
        </div>
        <div style={{display :"flex", justifyContent: "space-between", margin : "20px"}}>
        <button> &larr; Previous</button>
        <button>Next &rarr;</button>
        
      
        </div>
    </div>
  );
}

export default NewsApp;
