import React from "react";
import "./Pitch.css";

import Cube from "../../Assets/Cube.svg";
import Code from "../../Assets/Code.svg";
import Wallet from "../../Assets/Wallet.svg";
import Analytics from "../../Assets/Analytics.svg";
import Dots from "../BigDots";

const Pitch = () => {
  return (
    <main className='pitch'>
      <div className='middleCircle'></div>
      <div className='rectangle'></div>
      <div className='miniRectangle'></div>
      <article className='helpContent'>
        <h2>
          How can we help <br /> your Business ?
        </h2>
        <p>
          We build readymade websites, mobile applications, and elaborate online
          business services.
        </p>
      </article>
      <Dots className='pitchDots' />
      <article className='services'>
        <div className='theFirst2'>
          <div className='cube'>
            <div className='cubeDiv'>
              <img src={Cube} alt='Cube' />
            </div>
            <h4 className='mTitle'>
              Business Idea <br /> Planning
            </h4>
            <p className='mText'>
              We present you a proposal and discuss niffty-gritty like
            </p>
          </div>
          <div className='code'>
            <div className='codeDiv'>
              <img src={Code} alt='Code' />
            </div>
            <h4 className='mTitle'>
              Development <br /> Website and App
            </h4>
            <p className='mText'>
              Communication protocols apart from engagement models
            </p>
          </div>
        </div>
        <div className='theSeconde2'>
          <div className='wallet'>
            <div className='walletDiv'>
              <img src={Wallet} alt='Wallet' />
            </div>
            <h4 className='mTitle'>
              Financial Planning <br /> System
            </h4>
            <p className='mText'>
              Protocols apart from aengage models, pricing billing
            </p>
          </div>
          <div className='analytics'>
            <div className='analyticsDiv'>
              <img src={Analytics} alt='Analytics' />
            </div>
            <h4 className='mTitle'>
              Market Analysis <br /> Project
            </h4>
            <p className='mText'>
              Protocols apart from a engage models, pricing billing
            </p>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Pitch;
