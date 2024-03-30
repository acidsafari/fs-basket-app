import React from 'react';
import './App.css';
import Navigation from "./Components/Navigation/Navigation";
import Header from "./Components/Header/Header";
import News from "./Components/News/News";
import Subscribe from "./Components/Subscribe/Subscribe";
import Main from "./Components/Main/Main";
import ResourceHub from "./Components/ResourceHub/ResourceHub";
import Footer from "./Components/Footer/Footer";
import NewsL from './Components/News/NewsL';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <div className='MainAside'>
        <NewsL />
        <Subscribe />
      </div>
      <Main />
      <ResourceHub />
      <Footer />
    </div>
  );
}

export default App;