import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import {opGet} from '../actions/opActions'
import {Container, Row, Col, Table} from 'react-bootstrap';


function OpForm(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(opGet())
    }, [dispatch])
    const GetOp = useSelector(state => state.GetOp)
    // bringing things from the reducer
    const {  opform } = GetOp

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
                <Col md={6}>
                    <label for="con-fixed" className="onboard-label"><h6>Fixed rate for Consultant</h6></label>
                    <div className="form-group">
                        <span>Rs.</span>
                        <input className="form-control form-doctor" type="text" placeholder="Fixed for Consultant" name="con-fixed"/>
                    </div>
                </Col>
                <Col md={6}>
                    <label for="comp-fixed" className="onboard-label"><h6>Fixed rate for Company</h6></label>
                    <div className="form-group">
                        <span>Rs.</span>
                        <input className="form-control form-doctor" type="text" placeholder="Fixed for Company" name="comp-fixed"/>
                    </div>
                </Col>
                <Col md={12}>
                    <label for="con-rate" className="onboard-label"><h6>Other Rates</h6></label>
                </Col>
                <Col md={12}>
                    <Table bordered striped>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th style={{width:"250px"}}>Item Group</th>
                                <th style={{width:"150px"}}>Fixed Payout</th>
                                <th>Percentage Payout</th>
                                <th>Count</th>
                                <th style={{width:"150px"}}>Per Unit Charge</th>
                                <th style={{width:"150px"}}>Amount</th>
                                <th style={{width:"150px"}}>Revenue</th>
                                <th style={{width:"150px"}}>Payout</th>
                            </tr>
                        </thead>
                        <tbody>
                        {opform && opform.map((ele) =>(
                            <tr style={{borderBottom:"1px solid black"}}>
                            <td>{ele.id}</td>
                            <td><input className="form-control form-doctor" type="text" placeholder={ele.item_group} name="comp-fixed" disabled>{ele.item_group}</input></td>
                            <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                            <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                            <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                            <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                            <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                            <td><input className="form-control form-doctor" type="text" name="comp-fixed" /></td>
                            <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                        </tr>
                            ))}
                    
                            {/* <tr style={{borderBottom:"1px solid black"}}>
                                <td>2</td>
                                <td><input className="form-control form-doctor" type="text" placeholder="Pharmacy" name="comp-fixed" disabled/></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed" /></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                            </tr>
                            <tr style={{borderBottom:"1px solid black"}}>
                                <td>3</td>
                                <td><input className="form-control form-doctor" type="text" placeholder="Lab" name="comp-fixed" disabled/></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
                                <td><input className="form-control form-doctor" type="text" name="comp-fixed"/></td>
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

export default OpForm;