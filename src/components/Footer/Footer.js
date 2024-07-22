import "./Footer.css";
import { Link } from "react-router-dom";
import React from "react";
import logo from "../../img/logo.png";
import resume from "../../Resume.pdf";

const Footer = (props) => {
  return (
    <div className='footerbar'>
      <footer>
        <div className='footer_columns'>
          <div className='flex-column'>
            <ul className='footer_links'>
              <li>
                <a href='mailto:nicholasplachance@gmail.com'>Email me</a>
              </li>
              <li>
                <a href={resume} target='_blank'>Resume</a>
              </li>
            </ul>
          </div>
          <div className='flex-column'>
            <ul className='footer_links'>
              <li>
                <Link to='/work'>Work Experience</Link>
              </li>
              <li>
                <Link to='/projects'>Projects</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='footerbar__logo'>
          <Link to='/'>
            <img
              className='footerbar__logo__image'
              src={logo}
              alt='LaChance development logo'
            />
          </Link>
          <Link to='/'>
            <p>LaChance Development</p>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
