import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Modal, Button, Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navmain from "../../Components/Navbar";
import RdSidebar from "../../Components/RdSidebar";
import Footer from "../../Components/Footer";
import RequestTable from "../../Components/RequestTable";
import RequestCard from "../../Components/RequestCard";
import ChartComponent1 from "../../Components/ChartComponent";
import AreaChart from "../../Components/areaChart";
import ActivitiesCard from "../../Components/ActivitiesCard";
import TestStatsCard from "../../Components/TestStatsCard";
import { createPositions, formlist,addpositions } from '../../actions/createPositionActions'
import { listusers } from '../../actions/userActions'
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TestDashboard({ reqTableData }) {
  toast.configure()
  const [newVis, setNewVis] = useState("hiddenDiv");
  const [ongVis, setOngVis] = useState("hiddenDiv");
  const [compVis, setCompVis] = useState("hiddenDiv");
  const dispatch = useDispatch()

  const [data, setData] = useState({ })
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const userList = useSelector((state) => state.userList)
  const { users } = userList
  
  const uploadDoc = useSelector((state) => state.uploadDoc)
  const { upload } = uploadDoc

  const formList = useSelector((state) => state.formList)
  const { form, success } = formList


  const cardStyle = {
    background: "transparent",
    border: "0px",
  };
  const infoStyle = {
    border: "2px solid #858585",
  };
  const subTitle = {
    fontSize: "13px",
  };

  useEffect(() => {
    dispatch(listusers())
  }, [dispatch])

 

  useEffect(() => {
    dispatch(formlist())
  }, [dispatch])

  const handleCreatePosition = () => {
    dispatch(createPositions(data))
    toast('Success')
    setTimeout(() => {
      window.location.reload()
    }, 3000);
  }
  const info = "Clearing Exceptions";

  function tabChange(stat) {
    if (stat == "new") {
      if (newVis == "hiddenDiv") {
        setNewVis("visibleDiv");
        setOngVis("hiddenDiv");
        setCompVis("hiddenDiv");
      } else {
        setNewVis("hiddenDiv");
      }
    }
  }
  var testdata = newdata
  var newdata = []



  return (
    <>

      <RdSidebar />

      <div className="main-content side-content pt-0">
        <div className="container-fluid">
          <div className="inner-body">
            <Navmain />

            <div className="page-header">
              <div>
                <h2 className="main-content-title tx-24 mg-b-5">
                  Welcome {}
                </h2>
                <br />
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="dashboard">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Dashboard
                  </li>
                </ol>
              </div>
            </div>
            <div>
            <div className="col-md-8 col-sm-12 col-xs-12 requestCol">
                  <TestStatsCard />
                </div>
            </div>

          
            <Card style={cardStyle}  >
              <Card.Body>
                <div className="row"style={{margin:"0 auto"}}>
                  <div
                    className="col-xl-4 col-md-4"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Container >

                      <Row>
                       
                        <br />
                        <Col>
                          <div style={{marginRight:"-30rem"}}>
                            <br />
                            <div className="row row-sm">
                              <div className="col-sm-6 col-md-12 col-lg-12 col-xl-12 grid-margin">
                                <div className="card custom-card">
                                  <div className="card-header border-bottom-0 pb-0">
                                    <div className="d-flex justify-content-between">
                                      <div className="input-group mb-3 searchbar">
                                        <input
                                          type="text"
                                          class="form-control"
                                          placeholder=""
                                          aria-label="Recipient's username"
                                          aria-describedby="basic-addon2"
                                        />
                                        <div className="input-group-append">
                                          <button
                                            className="btn btn-primary"
                                            type="button"
                                          >
                                            <i className="fe fe-search"></i>
                                          </button>
                                        </div>
                                      </div>
                                      <div className="ml-auto float-right">
                                        <select className="form-select rounded cdropdown" aria-label="Default select example" >
                                            <option defaultValue>Filter By</option>
                                            <option value="1">By Region</option>
                                            <option value="2">By Name</option>
                                        </select>
                                    </div>
                            

                                    </div>
                                  </div>
                                  <div className="card-body">
                                    <div className="table-responsive border userlist-table">
                                      <table className="table card-table table-striped table-vcenter text-nowrap mb-0 ctable">
                                        <thead>
                                          <tr>
                                            <th className="wd-lg-20p">
                                              <span>Doctor Name</span>
                                            </th>
                                            <th className="wd-lg-20p">
                                              <span>Doctor Branch</span>
                                            </th>
                                            <th className="wd-lg-20p">
                                              <span>Doctor Region</span>
                                            </th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>Dr Soham Joshi </td>
                                            <td>Chennai</td>
                                            <td>North center 3</td>
                                          </tr>
                                          <tr>
                                            <td>Dr Ritik Sanghvi </td>
                                            <td>Pune</td>
                                            <td>North center 1</td>
                                          </tr>
                                          <tr>
                                            <td>Dr Jacob </td>
                                            <td>Mumbai</td>
                                            <td>North center 1</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>

                                    <ul className="pagination mt-4 mb-0 float-right">
                                      <li className="page-item page-prev disabled">
                                        <a
                                          className="page-link"
                                          href="#"
                                          tabindex="-1"
                                        >
                                          Prev
                                        </a>
                                      </li>
                                      <li className="page-item active">
                                        <a className="page-link" href="#">
                                          1
                                        </a>
                                      </li>
                                      <li className="page-item">
                                        <a className="page-link" href="#">
                                          2
                                        </a>
                                      </li>
                                      <li className="page-item page-next">
                                        <a className="page-link" href="#">
                                          Next
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </div>
               
                </div>
                <br></br>
            
              </Card.Body>
            </Card>
            <br />
          
            <br />
          </div>
        </div>
        <Footer style={{}} />
      </div>
   
    </>
  );
}

export default TestDashboard;
