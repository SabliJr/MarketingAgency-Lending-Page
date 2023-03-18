import React from "react";
import "./TheFooter.css";

import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const TheFooter = () => {
  return (
    <footer className='theFooter'>
      <hr />
      <main className='footerMain'>
        <article className='footerLogo'>
          <h3 className='logo'>
            A+<span> Studio</span>
          </h3>
          <p className='logoText'>
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
        </article>
        <article className='footerDetails'>
          <div className='footerText'>
            <h3>What We Do</h3>
            <p>Web Design </p>
            <p>App Design</p>
            <p>Social Media</p>
            <p>Manage Market Analysis Project</p>
          </div>
          <div className='footerText'>
            <h3>Company</h3>
            <p>About Us </p>
            <p>Career</p>
            <p>Become Investor</p>
          </div>
          <div className='footerText'>
            <h3>Support</h3>
            <p>FAQ </p>
            <p>Policy</p>
            <p>Business</p>
          </div>
          <div className='footerText'>
            <h3>Contact</h3>
            <p>WhatsApp</p>
            <p>Support 24</p>
          </div>
        </article>
      </main>
      <div className='footerSocial'>
        <FaFacebook className='fb' />
        <AiFillTwitterCircle className='tw' />
        <FaLinkedin className='in' />
      </div>
      <hr />
      <div className='copyDiv'>
        <p>
          <a className='footerTextTags' href='https://dribbble.com/aviyansah'>
            Design: Avi Yansah &#169;2022
          </a>
        </p>
        <p>
          <a className='footerTextTags' href='https://sablijr.netlify.app/'>
            Dev: SabLi Jr. &#169;2023
          </a>
        </p>
      </div>
    </footer>
  );
};

export default TheFooter;
