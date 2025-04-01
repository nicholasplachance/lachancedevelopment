import "./Section.css";
import "aos/dist/aos.css";

import Aos from "aos";
// import Cardbackground3 from "../../img/cardbackground3.jpg";
import React from "react";
import { useEffect } from "react";

const Section = (props) => {
  const effects = [
    "fade",
    "fade-up",
    "fade-down",
    "fade-left",
    "fade-right",
    "flip-up",
    "flip-left",
    "flip-right",
    "slide-up",
    "slide-left",
    "slide-right",
    "zoom-in",
    "zoom-in-up",
    "zoom-in-left",
    "zoom-in-right",
    "zoom-out",
    "zoom-out-up",
    "zoom-out-left",
    "zoom-out-right",
  ];

  const randomEffect = effects[Math.floor(Math.random() * effects.length)];

  console.log(randomEffect);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos={randomEffect} className='card'>
      <div className='section-header'>
        <h2>{props.title}</h2>
        {props.subtitle ? <h2>{props.subtitle}</h2> : null}
      </div>
      <div className='section card-img'>
        <div className='card-container'>
          <ul>
            {props.services
              ? props.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))
              : null}
          </ul>
          <address>
            {props.address ? (
              <div className='address-container'>
                <h4>Based in:</h4>
                <h4 href='#'>{props.address}</h4>
              </div>
            ) : null}
          </address>
        </div>
      </div>
    </div>
  );
};

export default Section;
