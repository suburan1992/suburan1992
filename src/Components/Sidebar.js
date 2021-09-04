import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo2 from "../images/Logos-04.png";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import { listusers } from "../actions/userActions";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Sidebar({ userType }) {
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
              splitLocation[1] === dash ? "active " + "nav-item" : "nav-item"
            }
          >
            <Link to={`/${dash}`} id="nav-link" className="nav-link">
              <span className="shape1"></span>
              <span className="shape2"></span>
              <i className="ti-home sidemenu-icon mr-2"></i>
              <span className="sidemenu-label">Dashboard</span>
            </Link>
          </li>
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
            <Link to="/UploadedDocument" className="nav-link" id="nav-link">
              <span className="shape1"></span>
              <span className="shape2"></span>
              <i className="ti-bookmark-alt sidemenu-icon mr-2"></i>
              <span className="sidemenu-label">Uploaded Documents</span>
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
          {/* <li>
          <Link
                    to="/manage-department"
                    id="nav-link"
                    className="nav-link"
                  >
                    Departments
                  </Link>
          </li> */}
          {/* <li style={{ marginTop: "4px" }}>
            <Link to="/manage-procedure" id="nav-link" className="nav-link">
              <i className="ti-folder sidemenu-icon mr-2"></i>
              Procedures
            </Link>
          </li> */}
          {/* <li>
          <Link
                    to="/manage-designation"
                    id="nav-link"
                    className="nav-link"
                  >
                    Designations
                  </Link>
          </li>
          <li>
          <Link
                    to="/service-category"
                    id="nav-link"
                    className="nav-link"
                  >
                    Service-Categories
                  </Link>
          </li> */}
        </ul>
        {/* <div
          style={{
            display: "block",
            width: "100%",
            marginTop: "-.5rem",
            marginRight: "-1px",
          }}
        >
          <Accordion
            defaultActiveKey="0"
            style={{ backgroundColor: "transparent" }}
          >
            <Card style={{ backgroundColor: "transparent" }}>
              <Card.Header style={{ backgroundColor: "transparent" }}>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="0"
                  style={{ backgroundColor: "transparent" }}
                >
                  <i className="ti-folder sidemenu-icon mr-2"></i>
                  Masters
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body style={{ backgroundColor: "transparent" }}>
                  <Link
                    to="/manage-designation"
                    id="nav-link"
                    className="nav-link"
                  >
                    Designations
                  </Link>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="0">
                <Card.Body style={{ backgroundColor: "transparent" }}>
                  <Link
                    to="/manage-department"
                    id="nav-link"
                    className="nav-link"
                  >
                    Departments
                  </Link>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="0">
                <Card.Body style={{ backgroundColor: "transparent" }}>
                  <Link
                    to="/manage-procedure"
                    id="nav-link"
                    className="nav-link"
                  >
                    Procedures
                  </Link>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="0">
                <Card.Body style={{ backgroundColor: "transparent" }}>
                  <Link
                    to="/service-category"
                    id="nav-link"
                    className="nav-link"
                  >
                    Service-Categories
                  </Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div> */}

        <div
          style={{
            display: "block",
            width: "100%",
            marginTop: "-.5rem",
            marginLeft: "13px",
           
          }}
        >
          <Accordion
            defaultActiveKey="0"
            style={{ backgroundColor: "transparent"}}
          >
            <Card style={{ backgroundColor: "transparent" }}>
              <Card.Header style={{ backgroundColor: "transparent"}}>
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey="0"
                  style={{ color: "white" }}
                >
                  <i className="ti-folder sidemenu-icon mr-4"></i>
                  Masters
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body
                  style={{ backgroundColor: "transparent", height: "1.2rem", border: "none" }}
                >
                  <Link
                    to="/manage-designation"
                    id="nav-link"
                    className="nav-link"
                    style={{ marginTop: "-1rem" }}
                  >
                    Designations
                  </Link>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="0">
                <Card.Body
                  style={{ backgroundColor: "transparent", height: "1.2rem" , border: "none"}}
                >
                  <Link
                    to="/manage-department"
                    id="nav-link"
                    className="nav-link"
                    style={{ marginTop: "-1rem" }}
                  >
                    Departments
                  </Link>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="0">
                <Card.Body
                  style={{ backgroundColor: "transparent", height: "1.2rem" , border: "none"}}
                >
                  <Link
                    to="/manage-procedure"
                    id="nav-link"
                    className="nav-link"
                    style={{ marginTop: "-1rem" }}
                  >
                    Procedures
                  </Link>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey="0">
                <Card.Body
                  style={{ backgroundColor: "transparent", height: "1.2rem", border: "none" }}
                >
                  <Link
                    to="/service-category"
                    id="nav-link"
                    className="nav-link"
                    style={{ marginTop: "-1rem" }}
                  >
                    Service-Categories
                  </Link>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
