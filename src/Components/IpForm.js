import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import {IPGet} from '../actions/ipActions'
import {Container, Row, Col, Table} from 'react-bootstrap';

function IpForm(){
    const dispatch = useDispatch()
    const GetIp = useSelector(state => state.GetIp)
    // bringing things from the reducer
    const {  ipform } = GetIp

    useEffect(() => {
        dispatch(IPGet())
    }, [dispatch])
    
    return (
        <>
            <Container fluid >
            <Row>
                <Col md={6}>
                    <label for="con-per" className="onboard-label"><h6>Percentage share for Consultant</h6></label>
                    <div className="form-group">
                        <span>%</span>
                        <input className="form-control form-doctor" type="text" placeholder="% for Consultant" name="con-per"/>
                    </div>
                </Col>
                <Col md={6}>
                    <label for="comp-per" className="onboard-label"><h6>Percentage share for Company</h6></label>
                    <div className="form-group">
                        <span>%</span>
                        <input className="form-control form-doctor" type="text" placeholder="% for Company" name="comp-per"/>
                    </div>
                </Col>
                <Col md={12}>
                    <label for="con-rate" className="onboard-label"><h6>Packages</h6></label>
                </Col>
                <Col md={12}>
                    <Table bordered striped hover responsive="xl" id="test">
                        <thead>
                            <tr style={{textAlign:"center"}}>
                                <th colspan="4" className="col-6">Fixed</th>
                                <th colspan="5" className="col-6">Percentage</th>
                                <th rowSpan="2" className="col-1">Count</th>
                                <th rowSpan="2" className="col-1">Revenue</th>
                                <th rowSpan="2" className="col-1">Payout</th>
                            </tr>
                            <tr style={{textAlign:"center"}}>
                                <th style={{fontSize:"12px"}} className="col-4">Type</th>
                                <th style={{fontSize:"12px"}} className="col-3">Room</th>
                                <th style={{fontSize:"12px"}}>Mode of payment</th>
                                <th style={{fontSize:"12px"}}>Amount</th>
                                <th style={{fontSize:"12px"}}>Surgeon Fee</th>
                                <th style={{fontSize:"12px"}}>Package amount</th>
                                <th style={{fontSize:"12px"}}>Gross bill amount</th>
                                <th style={{fontSize:"12px"}}>Net Bill Amount</th>
                                <th style={{fontSize:"12px"}}>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                                 {ipform && ipform.map((ele) =>(
                            <tr>
                                <td style={{fontSize:"10px"}}><input className="form-control form-doctor" type="text" placeholder="Consultation" name="comp-fixed" disabled/></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed" /></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed" /></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                            </tr>
                                 ))}
                            {/* <tr style={{borderBottom:"1px solid black"}}>
                                <td><input className="form-control form-doctor" type="text" placeholder="Pharmacy" name="comp-fixed" disabled/></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed" /></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed" /></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                            </tr>
                            <tr>
                                <td><input className="form-control form-doctor" type="text" placeholder="Lab" name="comp-fixed" disabled/></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed" /></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed" /></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                            </tr> */}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            </Container>
        </>
    );
}

export default IpForm;