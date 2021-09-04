import React, { useState } from 'react'
import { Modal,  Container, Row, Col, Card, Breadcrumb } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar'
import Footer from '../../Components/Footer'
import PayoutExceptions from '../../Components/CalculatePayout'
import PayoutBarChart from '../../Components/PayoutBarChart'
import PayoutAreaChart from '../../Components/PayoutAreaChart'
import ActivitiesCard from '../../Components/ActivitiesCard'
import StatsCard from '../../Components/statsCard'
import GeneratePayout from '../../Components/GeneratePayout'
import PayoutTable from '../../Components/PayoutTable'
import DoctorSummaryModal from '../../Components/DoctorPayoutSummary'


import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import { easeQuadInOut } from "d3-ease";





function Temp({ PayoutExceptionData,TopTenPayouts }) {
    const [newVis, setNewVis] = useState("hiddenDiv")
    const [ongVis, setOngVis] = useState("hiddenDiv")
    const [compVis, setCompVis] = useState("hiddenDiv")

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
	const [modalShow, setModalShow] = React.useState(false);

  const [modalId, setModalId] = useState(0);

    const cardStyle = {
        background: 'transparent',
		border:'0px',
    }
    const infoStyle = {
        border: '2px solid #858585',
    }
	const containerStyle = {
		margin:'0px',
	}
    const subTitle = {
        fontSize: "13px"
    }
	const percentage = 66;
	const info = "Clearing Exceptions";

  function clickRow(srNo) {
    setModalId(srNo);
    setModalShow(true)

  }
	
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

        rows:PayoutExceptionData
      
    });
    return (
        <>

            <Sidebar />
            <div className="main-content side-content pt-0">
                <div className="container-fluid">
                    <div className="inner-body">

                        <Navbar />
						<div style={{marginTop:"10px"}}>
							<h2>Welcome XYZ</h2>
						</div>
						<div className="page-header" style={{margin:"0px"}}>
                            <Breadcrumb>
								<Breadcrumb.Item active aria-current="page">Home/</Breadcrumb.Item>
							</Breadcrumb>
                        </div>

                        <div className="justify-content-center">

                            <div className="row">
                                <div className="col-md-4 requestCol">
                                    <a className="requestCard" onClick={() => tabChange("new")}>
										<PayoutExceptions onClick={() => tabChange("new")} reqType="new" num={5} />
                                    </a>
                                </div>
                                <div className="col-md-8 col-sm-12 col-xs-12 requestCol">
                                    <StatsCard />
                                </div>
                            </div>

                        </div>
                        <div className={`${newVis}`} id="newReqTable">
                            <PayoutTable reqTableData={PayoutExceptionData} reqType="new" />
                        </div>

                        <Card style={cardStyle}>
							<Card.Body>
								<div className="row">
									<div className="col-xl-4 col-md-4" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
										<Container style={containerStyle}>
											<Row>
												<Col>
													<Card className="p-12" style={cardStyle}>
														<GeneratePayout />
													</Card>
												</Col>
											</Row>
											<Row>
												<Col>
													<Card className="p-12" style={infoStyle}>
														<Card.Header style={{paddingTop:"5px", paddingLeft:"5px", paddingBottom:"5px", borderBottom:"1px solid #858585"}}>
															<h4>Payout Progress</h4>
														</Card.Header>
														<Card.Body style={{ margin:"0px" }}>
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
																			textSize: '10px',
																		})}
																	/>
																</div>
															</CircularProgressbarWithChildren>
														</Card.Body>
													</Card>
												</Col>
											</Row>   
										</Container>
									</div>
									<div className="col-xl-8 col-md-8">
										<div className="card ht-xs-100p" style={infoStyle}>
											<PayoutAreaChart/>
										</div>
									</div>									
								</div>
								<br></br>

								<DoctorSummaryModal
									show={modalShow}
									onHide={() => setModalShow(false)}
								/>
								<div className="row">
									<div className="col-xl-6 col-md-6">
										<div className="card ht-xs-100p" style={infoStyle}>
											<PayoutBarChart/>
										</div>
									</div>
									<div className="col-xl-6 col-md-6">
										<Card className="p-12" style={infoStyle}>
											<Card.Header style={{paddingTop:"5px", paddingLeft:"5px", paddingBottom:"5px", borderBottom:"1px solid #858585"}}>
												<h5>Top 10 Payouts - June 2021</h5>
											</Card.Header>
											<Card.Body>
												<table class="table table-striped ctable">
													<thead>
														<tr>
															<th scope="col">Doctor Name</th>
															<th scope="col">Branch</th>
															<th scope="col">Payout</th>
														</tr>
													</thead>
													<tbody>
                          {
                            TopTenPayouts.map((doctor)=>{
                              return(
                              <tr onClick={() => clickRow(doctor.srNo)}>
															<td>{doctor.doctorName}</td>
															<td>{doctor.doctorBranch}</td>
															<td>{doctor.Payout}</td>
														</tr>
                              );
                            })
                          }
														{/* <tr onClick={() => setModalShow(true)}>
															<td>Dr Ajay Arora</td>
															<td>Chennai</td>
															<td>50 lpa</td>
														</tr>
														<tr onClick={() => setModalShow(true)}>
															<td>Dr Jacob</td>
															<td>Delhi</td>
															<td>45 lpa</td>
														</tr>
														<tr onClick={() => setModalShow(true)}>
															<td>Dr Richa Shah</td>
															<td>Chennai</td>
															<td>44 lpa</td>
														</tr>
														<tr onClick={() => setModalShow(true)}>
															<td>Dr Richa Shah</td>
															<td>Chennai</td>
															<td>44 lpa</td>
														</tr>
														<tr onClick={() => setModalShow(true)}>
															<td>Dr Richa Shah</td>
															<td>Chennai</td>
															<td>44 lpa</td>
														</tr>
														<tr onClick={() => setModalShow(true)}>
															<td>Dr Richa Shah</td>
															<td>Chennai</td>
															<td>44 lpa</td>
														</tr>
														<tr onClick={() => setModalShow(true)}>
															<td>Dr Richa Shah</td>
															<td>Chennai</td>
															<td>44 lpa</td>
														</tr>
														<tr onClick={() => setModalShow(true)}>
															<td>Dr Richa Shah</td>
															<td>Chennai</td>
															<td>44 lpa</td>
														</tr>
														<tr onClick={() => setModalShow(true)}>
															<td>Dr Richa Shah</td>
															<td>Chennai</td>
															<td>44 lpa</td>
														</tr>
														<tr onClick={() => setModalShow(true)}>
															<td>Dr Richa Shah</td>
															<td>Chennai</td>
															<td>44 lpa</td>
														</tr> */}
													</tbody>
												</table>
											</Card.Body>
										</Card>
									</div>
								</div>
							</Card.Body>
						</Card>
                        <br />
                        

                        <Card style={cardStyle}>
                            <Card.Body>
                                <div className="row row-sm ">
                                    <div className="col-sm-6 col-md-6 col-xl-3">
                                        <Link to="/create-doctor"><ActivitiesCard text="New doctor Onboarding" icon="fe fe-user" style={infoStyle} /></Link>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-xl-3">
                                        <Link to="/create-doctor"><ActivitiesCard text="View All Doctor Agreements" icon="fe fe-user" /></Link>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-xl-3">
                                        <Link to="/create-doctor"><ActivitiesCard text="View All Doctors" icon="fe fe-user" /></Link>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-xl-3">
                                        <Link to="#" onClick={handleShow} ><ActivitiesCard text="Create Position" icon="fe fe-user" /></Link>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <br />
                    </div>
                </div>
                <Footer style={{}} />
            </div>
            <Modal size="lg" scrollable dialogClassName="modalStandard" centered aria-labelledby="example-modal-sizes-title-lg" show={show} onHide={handleClose}>
                <Modal.Header className="modalHeader" closeButton>
                    <Modal.Title className="modalTitle">Create Position</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-6 ">
                            <label className="tx-inverse text-muted">Position Name</label>
                            <input className="form-control" placeholder="Input box" type="text" />
                            <br />
                            <label className="tx-inverse text-muted">Payment Terms</label>
                            <input className="form-control" placeholder="Input box" type="text" />
                        </div>

                        <div className="col-6 ">
                            <label className="tx-inverse text-muted">Postion Type</label>
                            <input className="form-control" placeholder="Input box" type="text" />
                            <br />
                            {/* <label className="tx-inverse text-muted">Raised By</label>
						<input className="form-control" placeholder="Input box" type="text"/> */}
                        </div>
                    </div>
                    <br />
                    <label className="tx-inverse text-muted">Comments</label>
                    <textarea class="form-control" placeholder="Textarea" rows="3"></textarea>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <button className="standardButton acceptButton" onClick={handleClose}>
                        Create
                    </button>
                    <button className="standardButton rejectButton" onClick={handleClose}>
                        Cancel
                    </button>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default Temp
