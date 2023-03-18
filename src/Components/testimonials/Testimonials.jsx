import React from "react";
import TheDots from "../SmallDots";
import ScrollDots from "../../Assets/ScrollDots.svg";
import "./Testimonials.css";

//Assets
import BigImg from "../../Assets/unsplash_MTZTGvDsHFY.png";
import Img1 from "../../Assets/unsplash_3TLl_97HNJo.png";
import Img2 from "../../Assets/unsplash_6anudmpILw4.png";
import Img3 from "../../Assets/unsplash_O3ymvT7Wf9U.png";
import Img4 from "../../Assets/unsplash_OhKElOkQ3RE.png";
import Img5 from "../../Assets/unsplash_W7b3eDUb_2I.png";
import Img6 from "../../Assets/unsplash_d1UPkiFd04A.png";
import Img7 from "../../Assets/unsplash_et_78QkMMQs.png";
import Img8 from "../../Assets/unsplash_mEZ3PoFGs_k.png";

const Testimonials = () => {
  return (
    <main className='testiy'>
      {/* <article> */}
      <h2>What our happy client say</h2>
      <p className='testiyP'>
        Several selected clients, who already believe in our service.
      </p>
      {/* </article> */}
      <article className='testiContent'>
        <div className='testiText'>
          <div className='testiCircle'></div>
          <TheDots className='testiyDots' />
          <img src={BigImg} alt='BigImg' className='BigImg' />
          <div className='textDivTest'>
            <h3>Matthew Paul</h3>
            <p>
              Perfect, very good job! Thank you for the amazing design and work.
              Really impressed with the high quality and quick turnaround time.
              Highly recommend.
            </p>
            <img src={ScrollDots} alt='ScrollDots' className='ScrollDots' />
          </div>
        </div>
        <div className='testiPics'>
          <div className='picsCircle'></div>
          <img src={Img1} alt='Img1' className='Img1 Img' />
          <img src={Img2} alt='Img2' className='Img2 Img' />
          <img src={Img3} alt='Img3' className='Img3 Img' />
          <img src={Img4} alt='Img4' className='Img4 Img' />
          <img src={Img5} alt='Img5' className='Img5 Img' />
          <img src={Img6} alt='Img6' className='Img6 Img' />
          <img src={Img7} alt='Img7' className='Img8 Img' />
          <img src={Img8} alt='Img8' className='Img7 Img' />
        </div>
      </article>
    </main>
  );
};

export default Testimonials;
