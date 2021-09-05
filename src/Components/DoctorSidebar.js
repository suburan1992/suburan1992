import React, {useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import logo2 from "../images/Logos-04.png";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { listusers } from '../actions/userActions'

function DoctorSidebar({userType}) {
  const [dash, setDash] = useState('bh-dashboard')
  const [item4, setItem4] = useState("visibleDiv")
  const [item5, setItem5] = useState("visibleDiv")
  const [item6, setItem6] = useState("visibleDiv")
  const dispatch = useDispatch()
  function CheckUser(){
  if(userType==="BH"){
    setDash('bh-dashboard')
  }
  else if(userType==="HR"){
    setDash('hr-dashboard')
    setItem5("hiddenDiv")
  }

  else if(userType==="RD"){
    setDash('rd-dashboard')
    setItem4("hiddenDiv")
    setItem6("hiddenDiv")
  }
  useEffect(() => {
    dispatch(listusers())
  }, [dispatch])
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
      {/* <li
        className={splitLocation[1] === dash ? "active "+"nav-item" : "nav-item"}
       
      >
        <Link to={`/${dash}`} id="nav-link" className="nav-link">
          
          <span className="shape1"></span>
         <span className="shape2"></span>
          <i className="ti-home sidemenu-icon mr-2"></i>
          <span className="sidemenu-label">Dashboard</span>
          
        </Link>
      </li> */}
     
      <li
        className={splitLocation[1] === "DoctorDashboard" ? "active "+"nav-item" : "active "+"nav-item"}
      >
        <Link to="/DoctorDashboard" className="nav-link" id="nav-link">
        <span className="shape1"></span>
       <span className="shape2"></span>
          <i className="ti-bookmark-alt sidemenu-icon mr-2"></i>
          <span className="sidemenu-label">Doctor Documents</span>
        </Link>
      </li>
      </ul>

      </div>
    </div>
  );
}

export default DoctorSidebar;
