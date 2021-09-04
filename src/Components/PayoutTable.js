import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Chat from './Chat';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import { MDBDataTableV5 } from 'mdbreact';

import userImg from '../images/user.png'
function RequestTable({ reqTableData, reqType }) {

    const [show, setShow] = useState(false);
    const [modalId, setModalId] = useState(0)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    var sr = 0;
    // var modalId=0;
    function rowClicked(id) {
        setModalId(id)

        handleShow()
    }

    reqTableData.forEach(dataRow => {
        dataRow.srNo = sr;
        dataRow.clickEvent = () => rowClicked(dataRow.srNo);
        sr++;
    })

    const [datatable, setDatatable] = React.useState({
        columns: [
            {
                label: 'Exception ID',
                field: 'exceptionId',
                width: 100,
            },
            {
                label: 'Doctor Name',
                field: 'doctorName',
                width: 100,
            },
            {
                label: 'Doctor Branch',
                field: 'doctorBranch',
                sort: 'asc',
                width: 200,
            },
            {
                label: 'Date',
                field: 'date',
                sort: 'asc',
                width: 100,
            },
            {
                label: 'Exception Message',
                field: 'errorMessage',
                sort: 'disabled',
                width: 150,
            },
            {
                label: 'Current Status',
                field: 'currentStatus',
                sort: 'disabled',
                width: 100,
            },
        ],

        rows: reqTableData

    });
    const infoStyle = {
        border: '2px solid #858585',
    }
    return (
        <div className="card custom-card" style={infoStyle}>
            <div className="card-body">
                <h3 className="main-content-title tx-24 mb-4 mg-b-5">Payout Exceptions</h3>
                <MDBDataTableV5 responsive
                    hover
                    entriesOptions={[5, 10, 15, 20, 25]}
                    entries={5}
                    pagesAmount={4}
                    data={datatable}
                    style={{ textAlign: "center" }}
                    pagingTop
                    searchTop searchBottom={false}
                    barReverse
                />
            </div>

            <Modal size="lg" scrollable dialogClassName="modalStandard" centered aria-labelledby="example-modal-sizes-title-lg" show={show} onHide={handleClose} responsive>
                <Modal.Header className="modalHeader" closeButton>
                    <Modal.Title className="modalTitle">{reqTableData[modalId].exceptionId}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ padding: "0px" }}>
                    <Container fluid style={{ border: "2px" }}>
                        <Row style={{ padding: "10px" }}>
                            <Col md={6} xs={6}>
                                <h5 style={{ paddingBottom: "10px", textDecoration: "underline" }}>Doctor Name</h5>
                                <h6 style={{ border: "1px solid #858585", borderRadius: "10px", padding: "10px", width: "70%", fontWeight: "lighter" }}>{reqTableData[modalId].doctorName}</h6>
                            </Col>
                            <Col md={6} xs={6}>
                                <h5 style={{ paddingBottom: "10px", textDecoration: "underline" }}>Branch</h5>
                                <h6 style={{ border: "1px solid #858585", borderRadius: "10px", padding: "10px", width: "70%", fontWeight: "lighter" }}>{reqTableData[modalId].doctorBranch}</h6>
                            </Col>
                            <Col md={6} xs={6}>
                                <h5 style={{ paddingBottom: "10px", textDecoration: "underline" }}>Date</h5>
                                <h6 style={{ border: "1px solid #858585", borderRadius: "10px", padding: "10px", width: "70%", fontWeight: "lighter" }}>{reqTableData[modalId].date}</h6>
                            </Col>
                            <Col md={6} xs={6}>
                                <h5 style={{ paddingBottom: "10px", textDecoration: "underline" }}>Current Status</h5>
                                <h6 style={{ border: "1px solid #858585", borderRadius: "10px", padding: "10px", width: "70%", fontWeight: "lighter" }}>{reqTableData[modalId].currentStatus}</h6>
                            </Col>
                        </Row>
                        <br />
                        <label className="tx-inverse text-muted"> Error Message</label>
                        <h6 style={{ border: "1px solid #858585", borderRadius: "10px", padding: "10px", width: "70%", fontWeight: "lighter" }}>{reqTableData[modalId].errorMessage}</h6>
                        <br />

                        <hr />

                        <label className="tx-inverse text-muted"> Exception: </label>
                        <h6 style={{ border: "1px solid #858585", borderRadius: "10px", padding: "10px", width: "70%", fontWeight: "lighter" }}>exception details</h6>
                        <br />
                        <label className="tx-inverse font-weight-regular">Discussion History</label>
                        <div className="m3 " style={{ width: "750px", height: "350px", overflow: "scroll" }}>
                            <Chat />
                        </div>
                        {/* <div className="row">
                            <div className="col-12 col-sm-4">
                                <label className="tx-inverse text-muted">Full Name</label>
                                <input className="form-control" placeholder="Input box" type="text" />
                            </div>

                            <div className="col-12 col-sm-4">
                                <label className="tx-inverse text-muted">Contact Number</label>
                                <input className="form-control" placeholder="Input box" type="text" />
                            </div>

                            <div className="col-12 col-sm-4">
                                <label className="tx-inverse text-muted">Email Id</label>
                                <input className="form-control" placeholder="Input box" type="text" />
                            </div>
                        </div> */}
                        <hr />
                        <div className="d-flex justify-content-center mb-4">
                            <button className="standardButton acceptButton" onClick={handleClose}>
                                Accept
                            </button>
                            <button className="standardButton rejectButton" onClick={handleClose}>
                                Reject
                            </button>
                        </div>
                    </Container>
                </Modal.Body>


            </Modal>







        </div>


    )
}

export default RequestTable
