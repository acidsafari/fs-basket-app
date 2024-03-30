import React from 'react';
import "./News.css";
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
//import 'bootstrap/dist/css/bootstrap.min.css';
import HighPerformanceCamp from './HighPerformanceCamp.jpg';


function NewsL() {

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="News">
      <h1>NEWS</h1>
      <div className="CarouselContainer">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img src={HighPerformanceCamp} 
            style={{ width: '600px', height:'400px' }}/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={HighPerformanceCamp} 
            style={{ width: '600px', height:'400px' }}/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={HighPerformanceCamp} 
            style={{ width: '600px', height:'400px' }}/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      
    </div>
  );
}

//export default ControlledCarousel;

/*
const News = () => {
 
  return (
    <div className="News">
      <h1>NEWS</h1>
      <div className="carousel-container">
        <div className="carousel">
          <img src="assets/nationals-vic-results.jpg" 
            alt="Clean Sweep At Nationals!" 
            style="width: 100%;" />
        <div className="news-heading">
          <a href="https://www.basketballvictoria.com.au/news/victorias-clean-sweep-at-nationals" 
            class="link">Clean Sweep At Nationals!</a>
        </div>
      </div>    
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
    </div>
  );
};
*/

export default NewsL;