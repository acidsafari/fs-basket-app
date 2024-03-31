import React from "react";
import './Main.css'
import Players from './Players';
import Competitions from "./Competitions";
// NEED TO FIGURE OUT HOW TO REUSE THE CLASS
import Programs from "./Programs";
import GetInvolved from "./GetInvolved";
import CommunityBlog from "./CommunityBlog";
import Blog from "./Blog"; // Imported this for the blog
import Partners from "./Partners";

const Main = () => {
// Added blogText have a blog to display, you could use a JSON of blogs if you like
  const blogText = `This is a web app to provide information about the local community for locals and tourists.`; 
  return (
    <div className="Main">
      <Players />
      <Competitions /> 
      <Programs />
      <GetInvolved />
      <CommunityBlog />
        <div className="Blog"> 
          <Blog text={blogText}/>
        </div>
      <Partners />
    </div>
  );
};

export default Main;

/*
<LetsPlay />
*/