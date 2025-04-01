import "./NavBar.css";
import { Link, withRouter } from "react-router-dom";
import React from "react";
import ToggleButton from "../SideDrawer/ToggleButton";
import logo from "../../img/logo.png";
import resume from "../../Resume.pdf";

const NavBar = (props) => {
  return (
    <header className='navbar'>
      <nav className='navbar-navigation'>
        <div className='navbar__toggle_button'>
          <ToggleButton click={props.drawerToggleClickHandler} />
        </div>
        <div className='navbar__logo'>
          <Link to='/'>
            <img
              className='navbar__logo__image'
              src={logo}
              alt='LaChance development logo'
            />
          </Link>
          <p>LaChance Development</p>
        </div>
        <div className='spacer'></div>
        <div className='navbar__items'>
          <ul>
            <li>
              <a href='mailto:nicholasplachance@gmail.com'>Email me</a>
            </li>
            <li>
              <a href={resume} target='_blank'>Resume</a>
            </li>
            <li>
              <Link to='/work'>Work Experience</Link>
            </li>
            {/* <li>
              <Link to='/projects'>Projects</Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default withRouter(NavBar);
