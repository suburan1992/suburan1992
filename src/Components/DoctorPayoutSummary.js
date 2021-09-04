import React from "react";
import { Modal, Row, Col, Card } from "react-bootstrap";
import BillingPieSummary from "./BillingPieSummary";
import userImg from "../images/user.png";
import "react-circular-progressbar/dist/styles.css";

// Animation
// import { easeQuadInOut } from "d3-ease";
function DoctorSummaryModal(props) {
  console.log(props.data, "abcd");
  const labelStyle = {
    paddingBottom: "5px",
    textDecoration: "underline",
    color: "black",
  };
  const infoStyle = {
    padding: "5px",
    border: "2px solid rgb(133, 133, 133, 0.4)",
    fontWeight: "lighter",
    borderRadius: "5px",
  };
  // const percentage = 66;
  // const info = "Clearing Exceptions";

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="modalHeader" closeButton>
        <Modal.Title className="modalTitle">
          Doctor's Payout Summary
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={4} md={3}>
            <img
              class="img-responsive"
              src={userImg}
              style={{ border: "1px solid black", borderRadius: "5px" }}
            />
          </Col>
          <Col xs={8} md={{ span: 8, offset: 1 }}>
            <Row>
              <Col xs={6} md={6} style={{ padding: "10px" }}>
                <h6 style={labelStyle}>Name</h6>
                <h6 style={infoStyle}>{props.data.fullname}</h6>
              </Col>
              <Col xs={6} md={6} style={{ padding: "10px" }}>
                <h6 style={labelStyle}>ID</h6>
                <h6 style={infoStyle}>{props.data.doctorId}</h6>
              </Col>
              <Col xs={6} md={6} style={{ padding: "10px" }}>
                <h6 style={labelStyle}>Phone Number</h6>
                <h6 style={infoStyle}>{props.data.mobile} </h6>
              </Col>
              <Col xs={6} md={6} style={{ padding: "10px" }}>
                <h6 style={labelStyle}>Official Email</h6>
                <h6 style={infoStyle}> {props.data.email}</h6>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={4} md={4} style={{ padding: "10px" }}>
            <h6 style={{ paddingBottom: "5px", textDecoration: "underline" }}>
              Specialization
            </h6>
            <h6
              style={{
                padding: "5px",
                border: "2px solid rgb(133, 133, 133, 0.4)",
                fontWeight: "lighter",
                borderRadius: "5px",
              }}
            >
              {props.data.departmentlist}
            </h6>
          </Col>
          <Col xs={4} md={4} style={{ padding: "10px" }}>
            <h6 style={{ paddingBottom: "5px", textDecoration: "underline" }}>
              Current Designation
            </h6>
            <h6
              style={{
                padding: "5px",
                border: "2px solid rgb(133, 133, 133, 0.4)",
                fontWeight: "lighter",
                borderRadius: "5px",
              }}
            >
              {props.data.designationlist}
            </h6>
          </Col>
          <Col xs={4} md={4} style={{ padding: "10px" }}>
            <h6 style={{ paddingBottom: "5px", textDecoration: "underline" }}>
              Nature of Employment
            </h6>
            <h6
              style={{
                padding: "5px",
                border: "2px solid rgb(133, 133, 133, 0.4)",
                fontWeight: "lighter",
                borderRadius: "5px",
              }}
            >
              MG
            </h6>
          </Col>
        </Row>
        <Row>
          <Col xs={4} md={4} style={{ padding: "10px" }}>
            <h6 style={{ paddingBottom: "5px", textDecoration: "underline" }}>
              PAN Number
            </h6>
            <h6
              style={{
                padding: "5px",
                border: "2px solid rgb(133, 133, 133, 0.4)",
                fontWeight: "lighter",
                borderRadius: "5px",
              }}
            >
              {props.data.pancardno}
            </h6>
          </Col>
          <Col xs={4} md={4} style={{ padding: "10px" }}>
            <h6 style={{ paddingBottom: "5px", textDecoration: "underline" }}>
              Bank Name
            </h6>
            <h6
              style={{
                padding: "5px",
                border: "2px solid rgb(133, 133, 133, 0.4)",
                fontWeight: "lighter",
                borderRadius: "5px",
              }}
            >
              {props.data.bankname}
            </h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card
              style={{
                padding: "5px",
                border: "2px solid rgb(133, 133, 133, 0.4)",
              }}
            >
              <Card.Header>Summary of Doctor's Billing</Card.Header>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <BillingPieSummary />
                  </Col>
                  <Col md={6}>
                    <Card>
                      <Card.Body
                        style={{
                          height: "300px",
                          border: "2px solid rgb(0,0,0, 0.4)",
                          borderRadius: "5px",
                        }}
                      >
                        <table style={{ width: "100%" }}>
                          <thead style={{ borderBottom: "2px solid black" }}>
                            <th>Activity</th>
                            <th style={{ textAlign: "left" }}>
                              Amount Billed (&#x20B9;)
                            </th>
                          </thead>
                          <tbody
                            style={{
                              width: "100%",
                              borderBottom: "2px solid black",
                            }}
                          >
                            <tr>
                              <td>Consultation</td>
                              <td>34,256</td>
                            </tr>
                            <br />
                            <tr>
                              <td>Operations / Procedures</td>
                              <td>1,28,030</td>
                            </tr>
                            <br />
                            <tr>
                              <td>Visiting</td>
                              <td>90,147</td>
                            </tr>
                            <br />
                            <tr>
                              <td>Additional</td>
                              <td>34,182</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr style={{ fontWeight: "bold" }}>
                              <td>Total Billed Amount</td>
                              <td>2,86,615</td>
                            </tr>
                            <br />
                            <tr style={{ fontWeight: "bold" }}>
                              <td>Doctor's Payout</td>
                              <td>4,90,000</td>
                            </tr>
                          </tfoot>
                        </table>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default DoctorSummaryModal;
