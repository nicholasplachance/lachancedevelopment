import "./SideDrawer.css";

import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch,
  withRouter,
} from "react-router-dom";

import HomePage from "../../pages/homepage/homepage.component";
import React from "react";
import WorkShowCasePage from "../../pages/work-showcase/work-showcase.component";
import resume from "../../Resume.pdf";

const SideDrawer = (props) => {
  let drawerClasses = "side-drawer";

  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <ul>
          <Link to={"/work"}>Work Showcase</Link>
          <li>
            <a href='mailto:nicholasplachance@gmail.com'>Email me</a>
          </li>
          <li>
            <a href={resume} target='_blank'>
              Resume
            </a>
          </li>
        </ul>
      </ul>
    </nav>
  );
};

export default withRouter(SideDrawer);
