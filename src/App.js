import "./App.css";
import "aos/dist/aos.css";

import React, { useState } from "react";
import { Route, Switch, withRouter } from "react-router";

import BackDrop from "./components/BackDrop/BackDrop";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/homepage/homepage.component";
import NavBar from "./components/NavBar/NavBar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import WorkShowCasePage from "./pages/work-showcase/work-showcase.component";

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen((prevState) => {
      return { sideDrawerOpen: !prevState.setSideDrawerOpen };
    });
  };

  const backDropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  let sideDrawer;
  let backdrop;

  if (sideDrawerOpen) {
    sideDrawer = <SideDrawer />;
    backdrop = <BackDrop click={backDropClickHandler} />;
  }
  return (
    <div className='App'>
      <div className='under-construction'>Site Under Constuction</div>
      <NavBar drawerToggleClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen} />
      {backdrop}
      <Switch>
        <Route path='/work' component={withRouter(WorkShowCasePage)} />
        <Route exact path='/' component={HomePage} />
      </Switch>

      <Footer />
    </div>
  );
}

export default withRouter(App);
