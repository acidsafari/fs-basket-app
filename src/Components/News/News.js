import React from 'react';
import "./News.css";
import Image from 'react-bootstrap/Image';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import HighPerformanceCamp from './HighPerformanceCamp.jpg';



const News = () => {
 
  return (
    <div className="News">
      <h1>NEWS</h1>
      <div className="CarouselContainer">
        <div className="carousel">
        <img src={HighPerformanceCamp} 
          alt="National Performance Camp 2024"
          style={{ width: '600px', height:'400px' }}/>
          
          <div className="news-heading">
            <a href="https://www.basketballvictoria.com.au/news/victorias-clean-sweep-at-nationals" 
              class="link">Clean Sweep At Nationals!</a>
          </div>
      </div>    
      </div>
    </div>
  );
};


export default News;

/*
<div className="carousel">
        <img src="assets/women-selected.jpg" 
          alt="Victorians Selected"
          style="width: 100%;" />
        <div className="news-heading">
          <a href="https://www.basketballvictoria.com.au/news/victorias-clean-sweep-at-nationals" 
            class="link">Victorians Selected</a>
        </div>
      </div>
      <div className="carousel">
        <img src="assets/high-performance-camp.jpg" 
          alt="National Performance Camp 2024"
          style="width: 100%;" />
        <div className="news-heading">
          <a href="https://www.basketballvictoria.com.au/news/national-performance-camp-2024" 
            class="link">National Performance Camp 2024</a>
        </div>    
      </div> 
      <div className="carousel">
        <img src="assets/rollers-euro-tour.webp" 
          alt="Rollers Ready For European Tour"
          style="width: 100%;" />
        <div class="news-heading">
          <a href="https://www.australia.basketball/news/3339914/rollers-ready-for-european-tour" 
            class="link">Rollers Ready For European Tour</a>
        </div> 
      </div> 
        <a class="back" onclick="plusSlides(-1)">&#10094;</a>
        <a class="forward" onclick="plusSlides(1)">&#10095;</a>
      </div>
      */