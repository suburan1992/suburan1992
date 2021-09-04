import React, { useState } from "react";
import Select from 'react-select';
import { Modal, Button, Container, Row, Col, Card } from "react-bootstrap";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import Navmain from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer";
import RequestTable from "../../Components/RequestTable";
import RequestCard from "../../Components/RequestCard";
import ChartComponent1 from "../../Components/ChartComponent";
import AreaChart from "../../Components/areaChart";
import ActivitiesCard from "../../Components/ActivitiesCard";
import StatsCard from "../../Components/statsCard";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import doctorLogo from "../../images/doctor.png";
import renewalLogo from "../../images/migrate.png";
import positionLogo from "../../images/shop.png";

function Dashboard({ reqTableData ,history}) {
  const [newVis, setNewVis] = useState("hiddenDiv");
  const [ongVis, setOngVis] = useState("hiddenDiv");
  const [compVis, setCompVis] = useState("hiddenDiv");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
  return (
    <>
      <Sidebar />

      <div className="main-content side-content pt-0">
        <div className="container-fluid">
          <div className="inner-body">
            <Navmain />

            <div className="page-header">
              <div>
                <h2 className="main-content-title tx-24 mg-b-5">
                  Welcome XYZ!
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
            {/* new request */}
            <div className="justify-content-center">
              <div className="row">
                <div className="col-md-4 requestCol">
                  <a className="requestCard" onClick={() => tabChange("new")}>
                    <RequestCard
                      onClick={() => tabChange("new")}
                      reqType="new"
                      num={5}
                    />
                  </a>
                </div>
                <div className="col-md-8 col-sm-12 col-xs-12 requestCol">
                  <StatsCard />
                </div>
              </div>
            </div>

            {/* hidden new requests table */}
            <div className={`${newVis}`} id="newReqTable">
              <RequestTable reqTableData={reqTableData} reqType="new"  history={history}/>
            </div>

            <div className={`${ongVis}`} id="ongReqTable">
              <RequestTable reqTableData={reqTableData} reqType="ongoing" />
            </div>

            <div className={`${compVis}`} id="compReqTable">
              <RequestTable reqTableData={reqTableData} reqType="completed" />
            </div>

            <Card style={cardStyle}>
              <Card.Body>
                <div className="row">
                  <div
                    className="col-xl-4 col-md-4"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Container>
                      <Row className="Card-align">
                        <Col>
                          <Card className="p-12" style={infoStyle}>
                            <Card.Header
                              style={{
                                paddingTop: "5px",
                                paddingLeft: "5px",
                                paddingBottom: "5px",
                                borderBottom: "1px solid #858585",
                              }}
                            >
                              <h4>Onboarding Progress</h4>
                            </Card.Header>
                            <Card.Body style={{ margin: "0px" }}>
                              <CircularProgressbarWithChildren
                                value={75}
                                strokeWidth={6}
                                styles={buildStyles({
                                  pathColor: "rgb(98, 89, 202, 0.8)",
                                  trailColor: "transparent",
                                })}
                              >
                                {/*
															  Width here needs to be (100 - 2 * strokeWidth)% 
															  in order to fit exactly inside the outer progressbar.
															*/}
                                <div style={{ width: "88.5%" }}>
                                  <CircularProgressbar
                                    value={20}
                                    text={info}
                                    styles={buildStyles({
                                      pathColor: "rgba(186, 8, 66, 0.8)",
                                      trailColor: "transparent",
                                      textSize: "10px",
                                    })}
                                  />
                                </div>
                              </CircularProgressbarWithChildren>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col>
                          <Card className="p-12" style={infoStyle}>
                            <Card.Header
                              style={{
                                paddingTop: "5px",
                                paddingLeft: "5px",
                                paddingBottom: "5px",
                                borderBottom: "1px solid #858585",
                              }}
                            >
                              <h4>Payout Progress</h4>
                            </Card.Header>
                            <Card.Body style={{ margin: "0px" }}>
                              <CircularProgressbarWithChildren
                                value={75}
                                strokeWidth={6}
                                styles={buildStyles({
                                  pathColor: "rgb(98, 89, 202, 0.8)",
                                  trailColor: "transparent",
                                })}
                              >
                                {/*
															  Width here needs to be (100 - 2 * strokeWidth)% 
															  in order to fit exactly inside the outer progressbar.
															*/}
                                <div style={{ width: "88.5%" }}>
                                  <CircularProgressbar
                                    value={20}
                                    text={info}
                                    styles={buildStyles({
                                      pathColor: "rgba(186, 8, 66, 0.8)",
                                      trailColor: "transparent",
                                      textSize: "10px",
                                    })}
                                  />
                                </div>
                              </CircularProgressbarWithChildren>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                      {/* <Row>
												<Col>
													<Card className="p-6" style={infoStyle}>
														<Card.Body>
															<Card.Title>Card title</Card.Title>
															<Card.Text>
																This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
															</Card.Text>
														</Card.Body>
													</Card>
												</Col>
												<Col>
													<Card className="p-6" style={infoStyle}>
														<Card.Body>
															<Card.Title>Card title</Card.Title>
															<Card.Text>
																This is a wider card with supporting text below as a natural lead-in to
																additional content. This content is a little bit longer.
															</Card.Text>
														</Card.Body>
													</Card>
												</Col>
											</Row> */}
                      {/* <br></br> */}
                   
                      <Row>
                        {/* <Col>
													<Card className="p-12" style={infoStyle}>
														<Card.Body>
															<Card.Title>Card title</Card.Title>
															<Card.Text>
																This is a wider card with supporting text below as a natural lead-in to
																additional content. This content is a little bit longer.
															</Card.Text>
														</Card.Body>
													</Card>
												</Col> */}
                        <br />
                        <Col>
                          <div>
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
                                      {/* <div className="ml-auto float-right">
															<select
																className="form-select rounded cdropdown"
																aria-label="Default select example"
															>
																<option defaultValue>Filter By</option>
																<option value="1">By Date</option>
																<option value="2">By Name</option>
															</select>

															<select
																className="form-select rounded  cdropdown"
																aria-label="Default select example"
															>
																<option defaultValue>Filter By</option>
																<option value="1">By Date</option>
																<option value="2">By Name</option>
															</select> 
															</div> */}
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
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>Dr Soham Joshi </td>
                                            <td>Chennai</td>
                                          </tr>
                                          <tr>
                                            <td>Dr Ritik Sanghvi </td>
                                            <td>Pune</td>
                                          </tr>
                                          <tr>
                                            <td>Dr Jacob </td>
                                            <td>Mumbai</td>
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
                  <div className="col-xl-8 col-md-8">
                    <div className="card ht-xs-90p" style={infoStyle}>
                      <ChartComponent1 />
                    </div>
                  </div>
                </div>
                <br></br>
                <div className="row" style={{ marginTop: "-7rem" }}>
                  <div className="col-xl-6 col-md-6">
                    <div className="card ht-xs-100p" style={infoStyle}>
                      <AreaChart />
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <br />
            <Card style={cardStyle}>
              <Card.Body>
                <div className="row row-sm ">
                  <div className="col-sm-6 col-md-6 col-xl-3">
                    <Link to="#" onClick={handleShow}>
                      <ActivitiesCard
                        text="Create Position"
                        icon="fe fe-user"
                      />
                    </Link>
                  </div>
                  <div className="col-sm-6 col-md-6 col-xl-3">
                    <Link to="/create-doctor">
                      <ActivitiesCard
                        text="New doctor Onboarding"
                        icon="fe fe-user"
                        style={infoStyle}
                      />
                    </Link>
                  </div>
                  <div className="col-sm-6 col-md-6 col-xl-3">
                    <Link to="/create-doctor">
                      <ActivitiesCard
                        text="View All Doctor Agreements"
                        icon="fe fe-user"
                      />
                    </Link>
                  </div>
                  <div className="col-sm-6 col-md-6 col-xl-3">
                    <Link to="/create-doctor">
                      <ActivitiesCard
                        text="View All Doctors"
                        icon="fe fe-user"
                      />
                    </Link>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <br />
          </div>
        </div>
        <Footer style={{}} />
      </div>
      <Modal
        size="lg"
        scrollable
        dialogClassName="modalStandard"
        centered
        aria-labelledby="example-modal-sizes-title-lg"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header className="modalHeader" closeButton>
          <Modal.Title className="modalTitle">Create Position</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-6">
              <label className="tx-inverse" style={{textDecoration:"underline"}}>Select a Designation</label>
              <select className="form-control" style={{color:"black"}}>
                <option value="Associate Director">Associate Director</option>
                <option value="Associates">Associates</option>
                <option value="Consultant">Consultant</option>
                <option value="Physician Assistant">Physician Assistant</option>
              </select>
              <br />
            </div>
            <div className="col-6 ">
              <label className="tx-inverse" style={{textDecoration:"underline"}}>Select a Position Type</label>
              <select className="form-control" style={{color:"black"}}>
                <option value="MG">Minimum Guarantee (MG)</option>
                <option value="saab">Fixed Consultant</option>
                <option value="audi">Visiting Consultant</option>
              </select>
            </div>
            <div className="col-6 ">
              <label className="tx-inverse" style={{textDecoration:"underline"}}>Select a Specialization</label>
              <select className="form-control" style={{color:"black"}}>
                <option value="Cardiology">Cardiology</option>
                <option value="saab">Obstetrics and Gynaecology</option>
                <option value="fiat">Paediatrics</option>
                <option value="audi">Radiology</option>
              </select>
            </div>
            <div className="col-6">
              <label className="tx-inverse" style={{textDecoration:"underline"}}>Select the Branch</label>
              <select className="form-control" style={{color:"black"}}>
                <option value="Jayanagar">Jayanagar</option>
                <option value="Malleshwaram">Malleshwaram</option>
                <option value="Bellandur">Bellandur</option>
              </select>
              <br />
            </div>
            <div className="col-12">
            <label className="tx-inverse" style={{textDecoration:"underline"}}>Reason for Position Creation</label>
            <textarea
              style={{color:"black"}}
              class="form-control"
              placeholder="Textarea"
              rows="3"
            ></textarea>
          </div>
          </div>
          <hr style={{backgroundColor:"black",height:"1px", opacity:"0.4"}} />
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <button className="btn btn-primary" style={{width:"100px"}} onClick={handleClose}>
            Confirm
          </button>
          <button className="btn btn-dark" style={{width:"100px"}} onClick={handleClose}>
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Dashboard;
