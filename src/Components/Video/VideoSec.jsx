import React from "react";
import "./videoSec.css";

import VideoSrc from "../../Assets/video.mp4";

const VideoSec = () => {
  return (
    <section className='videoSec'>
      <div className='videoRect'></div>
      <div className='videoCircle'></div>
      <article className='videoArt'>
        <video className='video' controls>
          <source src={VideoSrc} type='video/webm' />
          <source src={VideoSrc} type='video/mp4' />
          Sorry, your browser doesn't support videos.
        </video>
      </article>
      <article className='videoContent'>
        <h2>
          Great Digital Product <br /> Agency since 2016
        </h2>
        <p>
          Our Business Plan is a written document describing a company's core
          business activites, Objectives, and how it plans to achieve its goals.
          Our goal is to provide our client high quality Product with modern
          idea accordingly their budgets and according thir reuirements.
        </p>
      </article>
    </section>
  );
};

export default VideoSec;
