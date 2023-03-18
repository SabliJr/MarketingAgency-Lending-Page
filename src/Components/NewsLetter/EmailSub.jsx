import React from "react";
import "./NewsLetter.css";

import SmallDots from "../SmallDots";

const EmailSub = () => {
  return (
    <main className='newsSec'>
      <article className='emailSub'>
        <SmallDots className='subDots' />
        <div className='emailText'>
          <h2 className='subTitle'>Subscribe Newsletter</h2>
          <p className='subP'>
            I will update good news and promotion service not spam
          </p>
        </div>
        <div className='inputDiv'>
          <input type='text' placeholder='Enter your email' />
          <button type='submit' className='subBtn'>
            Contact Now
          </button>
        </div>
      </article>
      <div className='subRectangle'></div>
    </main>
  );
};

export default EmailSub;
