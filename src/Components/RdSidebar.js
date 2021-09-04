import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo2 from "../images/Logos-04.png";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import { listusers } from "../actions/userActions";

function RdSidebar({ userType }) {
  const [dash, setDash] = useState("bh-dashboard");
  const [item4, setItem4] = useState("visibleDiv");
  const [item5, setItem5] = useState("visibleDiv");
  const [item6, setItem6] = useState("visibleDiv");
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);

  // bringing things from the reducer
  const { loading, error, user } = userLogin;
  function CheckUser() {
    if (userType === "BH") {
      setDash("bh-dashboard");
    } else if (userType === "HR") {
      setDash("hr-dashboard");
      setItem5("hiddenDiv");
    } else if (userType === "RD") {
      setDash("rd-dashboard");
      setItem4("hiddenDiv");
      setItem6("hiddenDiv");
    }
    useEffect(() => {
      dispatch(listusers());
    }, [dispatch]);
  }

  //  checkUser();

  // useEffect(() => {
  //   checkUser();
  //  } )

  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  return (
    <div class="sidebar main-sidebar main-sidebar-sticky side-menu ps ps--active-y">
      <div className="main-sidebar-header header-img">
        <img src={logo2} className="img-responsive" alt="logo" />
      </div>
      <div className="main-sidebar-body">
        <ul className="nav">
          <li
            className={
              splitLocation[1] === "rd-dashboard"
                ? "active " + "nav-item"
                : "nav-item"
            }
          >
            
            <Link to="/rd-dashboard" id="nav-link" className="nav-link">
              <span className="shape1"></span>
              <span className="shape2"></span>
              <i className="ti-home sidemenu-icon mr-2"></i>
              <span className="sidemenu-label">Dashboard</span>
            </Link>
          </li>
          {/* <li
        className={splitLocation[1] === "TestDashboard" ? "active "+"nav-item" : "nav-item"}
       
      >
        <Link to="/TestDashboard" id="nav-link" className="nav-link">
          
          <span className="shape1"></span>
         <span className="shape2"></span>
          <i className="ti-home sidemenu-icon mr-2"></i>
          <span className="sidemenu-label">Dashboard</span>
          
        </Link>
      </li> */}
          <li
            className={
              splitLocation[1] === "create-doctor"
                ? "active " + "nav-item"
                : "nav-item"
            }
          >
            <Link to="/create-doctor" className="nav-link" id="nav-link">
              <span className="shape1"></span>
              <span className="shape2"></span>
              <i class="ti-user sidemenu-icon mr-2"></i>
              <span className="sidemenu-label">Onboarding</span>
            </Link>
          </li>
         
            <li
              className={
                splitLocation[1] === "view-status"
                  ? "active " + "nav-item"
                  : "nav-item"
              }
            >
              <Link to="/view-status" className="nav-link" id="nav-link">
                <span className="shape1"></span>
                <span className="shape2"></span>
                <i class="ti-user sidemenu-icon  mr-2"></i>
                <span  className="sidemenu-label">ViewStatus</span>
              </Link>
            </li>
          
         
          <li
            className={
              splitLocation[1] === "payout-page"
                ? "active " + "nav-item"
                : "nav-item"
            }
          >
            <Link to="/payout-page" className="nav-link" id="nav-link">
              <span className="shape1"></span>
              <span className="shape2"></span>
              <i className="ti-receipt sidemenu-icon mr-2"></i>
              <span className="sidemenu-label"> Payroll</span>
            </Link>
          </li>
          <li
            className={
              splitLocation[1] === "upload-documents"
                ? "nav-item" + " active " + item4
                : "nav-item " + item4
            }
          >
            <Link to="/upload-documents" className="nav-link" id="nav-link">
              <span className="shape1"></span>
              <span className="shape2"></span>
              <i className="ti-bookmark-alt sidemenu-icon mr-2"></i>
              <span className="sidemenu-label">Doctor Documents</span>
            </Link>
          </li>
          <li
            className={
              splitLocation[1] === "doctor-agreements"
                ? "nav-item" + " active " + item5
                : "nav-item " + item5
            }
          >
            <Link to="/doctor-agreements" className="nav-link" id="nav-link">
              {/* {" "} */}
              <span className="shape1"></span>
              <span className="shape2"></span>
              <i className="ti-pencil-alt sidemenu-icon mr-2"></i>
              <span className="sidemenu-label">Agreements</span>
            </Link>
          </li>
          <li
            className={
              splitLocation[1] === "/"
                ? "nav-item" + " active " + item6
                : "nav-item " + item6
            }
          >
            <Link to="/" id="nav-link" className="nav-link">
              {/* {" "} */}
              <span className="shape1"></span>
              <span className="shape2"></span>
              <i className="ti-comment sidemenu-icon mr-2"></i>
              <span className="sidemenu-label">Requests</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RdSidebar;
