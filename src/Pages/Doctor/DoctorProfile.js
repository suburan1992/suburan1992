
import React, { useState } from 'react'
import { Modal, Button, Container, Row, Col, Card } from 'react-bootstrap'
import BillingPieSummary from '../../Components/BillingPieSummary'
import userImg from './../../images/user.png'
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar'
import Timeline from '../../Components/Timeline'




function DoctorProfile({ reqTableData }) {
    const [newVis, setNewVis] = useState("hiddenDiv")
    const [ongVis, setOngVis] = useState("hiddenDiv")
    const [compVis, setCompVis] = useState("hiddenDiv")

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [modalShow, setModalShow] = React.useState(false);
    const labelStyle = { paddingBottom: "5px", textDecoration: "underline", color: "black" };
    const infoStyle={padding:"5px", border:"2px solid rgb(133, 133, 133, 0.4)",fontWeight:"lighter", borderRadius:"5px"};
    // const percentage = 66;
    // const info = "Clearing Exceptions";

    const cardStyle = {
        background: 'transparent',
        border: '0px',
    }
    // const infoStyle = {
    //     border: '2px solid #858585',
    // }
    const containerStyle = {
        margin: '0px',
    }
    const subTitle = {
        fontSize: "13px"
    }
    const percentage = 66;
    const info = "Clearing Exceptions";

    function tabChange(stat) {
        if (stat == "new") {
            if (newVis == "hiddenDiv") {
                setNewVis("visibleDiv")
            }
            else {
                setNewVis("hiddenDiv")
            }

        }
    }

    const [datatable, setDatatable] = React.useState({
        columns: [
            {
                label: 'RequestId',
                field: 'requestId',
                width: 100,
            },
            {
                label: 'Request Type',
                field: 'requestType',
                width: 100,
            },
            {
                label: 'Request Raised By',
                field: 'requestRaisedBy',
                sort: 'asc',
                width: 100,
            },
            {
                label: 'Date',
                field: 'date',
                sort: 'disabled',
                width: 100,
            },
            {
                label: 'Subject',
                field: 'subject',
                sort: 'disabled',
                width: 100,
            },
        ],

        rows: reqTableData

    });
    return (
        <>

            <Sidebar />
            <div className="main-content side-content pt-0">
                <div className="container-fluid"style={{margin:"0 auto" , backgroundColor:"white" }}>
                    <div className="inner-body">

                        <Navbar />
                        < Timeline step1 step2 />
                        <br/>
                        <hr/>
                        <div className="col-xl-12 col-md-12 pt-4" >
                            <Row >
                                <Col xs={2} md={2}>
                                    <img class="img-responsive" src={userImg} style={{ border: "1px solid black", borderRadius: "5px" }} />
                                </Col>
                                <Col xs={8} md={{ span: 8, offset: 1 }}>
                                    <Row>
                                        <Col xs={6} md={6} style={{ padding: "10px" }}>
                                            <h6 style={labelStyle}>Name</h6>
                                            <h6 style={infoStyle}>Dr. Preety Aggarwal</h6>
                                        </Col>
                                        <Col xs={6} md={6} style={{ padding: "10px" }}>
                                            <h6 style={labelStyle}>ID</h6>
                                            <h6 style={infoStyle}>DOC00445</h6>
                                        </Col>
                                        <Col xs={6} md={6} style={{ padding: "10px" }}>
                                            <h6 style={labelStyle}>Phone Number</h6>
                                            <h6 style={infoStyle}>9811107606</h6>
                                        </Col>
                                        <Col xs={6} md={6} style={{ padding: "10px" }}>
                                            <h6 style={labelStyle}>Official Email</h6>
                                            <h6 style={infoStyle}>drpreetya@cloudninecare.com</h6>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={4} md={4} style={{ padding: "10px" }}>
                                    <h6 style={{ paddingBottom: "5px", textDecoration: "underline" }}>Specialization</h6>
                                    <h6 style={{ padding: "5px", border: "2px solid rgb(133, 133, 133, 0.4)", fontWeight: "lighter", borderRadius: "5px" }}>Obstetrics and Gynaecology</h6>
                                </Col>
                                <Col xs={4} md={4} style={{ padding: "10px" }}>
                                    <h6 style={{ paddingBottom: "5px", textDecoration: "underline" }}>Current Designation</h6>
                                    <h6 style={{ padding: "5px", border: "2px solid rgb(133, 133, 133, 0.4)", fontWeight: "lighter", borderRadius: "5px" }}>Medical Director</h6>
                                </Col>
                                <Col xs={4} md={4} style={{ padding: "10px" }}>
                                    <h6 style={{ paddingBottom: "5px", textDecoration: "underline" }}>Nature of Employment</h6>
                                    <h6 style={{ padding: "5px", border: "2px solid rgb(133, 133, 133, 0.4)", fontWeight: "lighter", borderRadius: "5px" }}>MG</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={4} md={4} style={{ padding: "10px" }}>
                                    <h6 style={{ paddingBottom: "5px", textDecoration: "underline" }}>PAN Number</h6>
                                    <h6 style={{ padding: "5px", border: "2px solid rgb(133, 133, 133, 0.4)", fontWeight: "lighter", borderRadius: "5px" }}>AGBPA4907D</h6>
                                </Col>
                                <Col xs={4} md={4} style={{ padding: "10px" }}>
                                    <h6 style={{ paddingBottom: "5px", textDecoration: "underline" }}>Bank Name</h6>
                                    <h6 style={{ padding: "5px", border: "2px solid rgb(133, 133, 133, 0.4)", fontWeight: "lighter", borderRadius: "5px" }}>ICICI Bank</h6>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Card style={{ padding: "5px", border: "2px solid rgb(133, 133, 133, 0.4)" }}>
                                        <Card.Header>
                                            Summary of Doctor's Billing
							</Card.Header>
                                        <Card.Body>
                                            <Row>
                                                <Col md={6}>
                                                    <BillingPieSummary />
                                                </Col>
                                                <Col md={6}>
                                                    <Card>
                                                        <Card.Body style={{ height: "300px", border: "2px solid rgb(0,0,0, 0.4)", borderRadius: "5px" }}>
                                                            <table style={{ width: "100%" }}>
                                                                <thead style={{ borderBottom: "2px solid black" }}>
                                                                    <th>Activity</th>
                                                                    <th style={{ textAlign: "left" }}>Amount Billed (&#x20B9;)</th>
                                                                </thead>
                                                                <tbody style={{ width: "100%", borderBottom: "2px solid black" }}>
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
                            <br />


                            <br />


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DoctorProfile
