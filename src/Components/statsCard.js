import React, { useState, useEffect } from "react";
import { Modal, Button, Container, Row, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import doctorLogo from "../images/doctor.png";
import RequestTable from "../Components/doctorRequestTable";
import RenewalRequest from "../Components/RenewalRequest";
import renewalLogo from "../images/migrate.png";
import positionLogo from "../images/shop.png";
import axios from "axios";
// import { login } from "../../../actions/authActions";
import { login } from "../actions/authActions";

function StatsCard({ history, reqTableData }) {
  const [newVis, setNewVis] = useState("hiddenDiv");
  const [renewVis, setRenewVis] = useState("hiddenDiv");
  const [ongVis, setOngVis] = useState("hiddenDiv");
  const [compVis, setCompVis] = useState("hiddenDiv");
  const [dashBoardCount, setDashBoardCount] = useState([]);

  useEffect(() => {
    async function getRecord() {
      await axios.get("http://localhost:8090/api/doctor/").then((res) => {
        setDashBoardCount(res.data);
        console.log(res, "starCard");
      });
    }
    getRecord();
  }, []);
  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;
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
  function tabChange(stat) {
    if (stat == "new") {
      if (newVis == "hiddenDiv") {
        setNewVis("visibleDiv");
        setRenewVis("hiddenDiv");
        setOngVis("hiddenDiv");
        setCompVis("hiddenDiv");
      } else {
        setNewVis("hiddenDiv");
      }
    }
  }

  function tab1Change(stat) {
    if (stat == "rnew") {
      if (renewVis == "hiddenDiv") {
        setRenewVis("visibleDiv");
        setNewVis("hiddenDiv");
        setOngVis("hiddenDiv");
        setCompVis("hiddenDiv");
      } else {
        setRenewVis("hiddenDiv");
      }
    }
  }

  return (
    <>
      <Card style={infoStyle}>
        <Card.Header
          style={{
            paddingTop: "5px",
            paddingLeft: "5px",
            borderBottom: "1px solid #858585",
          }}
        >
          <h3>Statistics</h3>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={6} xs={6}>
              <Card style={cardStyle}>
                <Card.Body style={{ paddingTop: "10px" }}>
                  <Row>
                    <Col
                      md={6}
                      xs={6}
                      style={{ textAlign: "center", paddingRight: "0px" }}
                    >
                      <div style={{}}>
                        <img
                          onClick={() => tabChange("new")}
                          reqType="new"
                          src={doctorLogo}
                          style={{ cursor: "pointer" }}
                          className="img-responsive"
                          alt=""
                        />
                      </div>
                    </Col>
                    <Col
                      md={6}
                      xs={6}
                      style={{ textAlign: "center", paddingLeft: "0px" }}
                    >
                      <div>
                        <h3>{dashBoardCount.data && dashBoardCount.data.length}</h3>
                        <h6 style={subTitle}>New Doctors</h6>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} xs={6}>
              <Card style={cardStyle}>
                <Card.Body style={{ paddingTop: "10px" }}>
                  <Row>
                    <Col
                      md={6}
                      xs={6}
                      style={{ textAlign: "center", paddingRight: "0px" }}
                    >
                      <div style={{}}>
                        <img
                          onClick={() => tab1Change("rnew")}
                          reqType="new"
                          style={{
                            height: "20%",
                            width: " 50%",
                            cursor: "pointer",
                          }}
                          src={renewalLogo}
                          className="img-responsive"
                          alt=""
                        />
                      </div>
                    </Col>
                    <Col
                      md={6}
                      xs={6}
                      style={{ textAlign: "center", paddingLeft: "0px" }}
                    >
                      <div>
                        <h3>{dashBoardCount.data1 && dashBoardCount.data1.length}</h3>
                        <h6 style={subTitle}>Upcoming Renewals</h6>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            {/* <Col md={3} xs={6}>
            <Card style={cardStyle}>
              <Card.Body style={{ paddingTop: "10px" }}>
                <Row>
                  <Col
                    md={6}
                    xs={6}
                    style={{ textAlign: "center", paddingRight: "0px" }}
                  >
                    <div style={{}}>
                      <img
                        src={positionLogo}
                        className="img-responsive"
                        alt=""
                      />
                    </div>
                  </Col>
                  <Col
                    md={6}
                    xs={6}
                    style={{ textAlign: "center", paddingLeft: "0px" }}
                  >
                    <div>
                      <h3>6</h3>
                      <h6>Open Positions</h6>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card> 
          </Col>*/}
            {/* <Col md={3} xs={6}>
            <Card style={cardStyle}>
              <Card.Body style={{ paddingTop: "10px" }}>
                <Row>
                  <Col
                    md={6}
                    xs={6}
                    style={{ textAlign: "center", paddingRight: "0px" }}
                  >
                    <div style={{}}>
                      <img src={doctorLogo} className="img-responsive" alt="" />
                    </div>
                  </Col>
                  <Col
                    md={6}
                    xs={6}
                    style={{ textAlign: "center", paddingLeft: "0px" }}
                  >
                    <div>
                      <h3>87%</h3>
                      <h6 style={subTitle}>Requests Finished</h6>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col> */}
          </Row>
        </Card.Body>
      </Card>
      <div className={`${newVis}`} id="newReqTable">
        <RequestTable
          newDoctorData={dashBoardCount && dashBoardCount.data}
          reqType="new"
          history={history}
        />
      </div>
      <div className={`${renewVis}`} id="newReqTable">
        <RenewalRequest
          reqTableData={dashBoardCount && dashBoardCount.data1}
          reqType="new"
          history={history}
        />
      </div>
    </>
  );
}
export default StatsCard;
