import React, { useState } from "react";
import "./TheHeader.css";

//Assets
import Dots from "../BigDots";
import HeroImg from "../../Assets/image8.png";
import Google from "../../Assets/Google.svg";
import AirBnb from "../../Assets/AirBnb.svg";
import Uber from "../../Assets/UberEate.svg";
import Amazon from "../../Assets/Amazon.svg";

//Icons
import { GrMenu } from "react-icons/gr";
import { MdClose } from "react-icons/md";

const TheHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='Header'>
      <nav className='theNav'>
        <h3 className='logo'>
          A+<span> Studio</span>
        </h3>
        <ul className={isOpen ? "navLinks openMenu" : "navLinks"}>
          <li>Home</li>
          <li>What we do</li>
          <li>Services</li>
          <li>Project</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>

        {isOpen ? (
          <MdClose className='CloseIcon' onClick={() => setIsOpen(!isOpen)} />
        ) : (
          <GrMenu className='menuIcon' onClick={() => setIsOpen(!isOpen)} />
        )}
      </nav>

      <section className='theHero'>
        <article className='heroContent'>
          <h2>A Digital Product Agency</h2>
          <p>
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
          <a href='#!' className='heroBtn'>
            Contact Now
          </a>
          <div>
            <Dots className='heroDots' />
          </div>
        </article>
        <article className='heroAssets'>
          <div className='circle'></div>
          <img src={HeroImg} alt='HeroImg' className='heroImg' />

          <div className='otherShape'></div>
        </article>
      </section>

      <main className='client'>
        <div className='clientText'>
          <h3>Our Client</h3>
          <p>Several selected clients, who already believe in our service.</p>
        </div>
        <div className='clientLogos'>
          <img src={Google} alt='Google' />
          <img src={AirBnb} alt='AirBnb' />
          <img src={Amazon} alt='AmazonLogo' />
          <img src={Uber} alt='UberLogo' />
        </div>
      </main>
    </header>
  );
};

export default TheHeader;
