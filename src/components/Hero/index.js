import React from "react";
import "./style.css";

function Hero(props) {
  return (
    <div className="hero text-center" style={{ backgroundImage: `url("https://www.showsightmagazine.com/files/news_gallery/5bbb5a2626564.jpg")` }}>
      {props.children}
    </div>
  );
}

export default Hero;