import React from "react";
import "./Header.css";
import HeaderVideo from './HeaderVideo';

function Header(youtubeId) {
  return (
    <div className="Header">
      <div className="HeaderTextCenterrow">
        <h1>Be Part of Something Bigger !</h1>
      </div>
      <HeaderVideo />
    </div>    
  )
}
/*
import YouTube from 'react-youtube';

const youtubeId = "TOHaHEmRtKg"

function Header(youtubeId) {
  return (
    <div className="Header">
      <div className="HeaderTextCenterrow">
        <h1>Be Part of Something Bigger !</h1>
      </div>
      <div className={youtubeId ? "ctn-youtube": null}>
        {youtubeId && <YouTube videoId={youtubeId} className='youtube'/>}
      </div>
    </div>    
  )
}
*/
export default Header;