import React from "react";
import logo from "../images/Logos-04.png";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { logout } from "../actions/authActions";
import { useDispatch, useSelector } from "react-redux";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Navmain({ toggleSidebar }) {
  const dispatch = useDispatch();

  // defining logout handler
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <>
      <Navbar bg="light" expand="lg" className="nav-main" sticky="top">
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
        <Form inline>
          <button class="main-header-menu-icon" id="mainSidebarToggle">
            <span></span>
          </button>
          {/* <button class="main-header-menu-icon" id="mainSidebarToggle" onClick={()=>toggleSidebar()}><span></span></button> */}
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
        <Nav className="mr-auto"></Nav>
        {/* <div className="main-header-notification">
          <a className="nav-link icon" href="chat.html">
            {" "}
            <i className="fe fe-message-square header-icons"></i>{" "}
            <span className="badge badge-success nav-link-badge">6</span>{" "}
          </a>
        </div> */}
        {/* <div className="main-header-notification">
          <a className="nav-link icon" href="chat.html">
            {" "}
            <i className="fe fe-bell header-icons"></i>{" "}
            <span className="badge badge-danger nav-link-badge">3</span>{" "}
          </a>
        </div> */}
        <div className="main-header-notification">
          <a className="nav-link icon" href="/" onClick={logoutHandler}>
            {" "}
            <i className="fe fe-user header-icons"></i>{" "}
            <span className="signOut">Sign Out</span>{" "}
          </a>
        </div>
        {/* </Navbar.Collapse> */}
      </Navbar>
    </>
  );
}

export default Navmain;
