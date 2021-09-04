import React, { useState,useRef } from 'react';
import {Container, Row, Col} from 'react-bootstrap';

function FixedForm(){
    return (
        <>
            <Container fluid>
            <Row>
                <Col md={6}>
                    <label for="ctc-month" className="onboard-label"><h6>CTC / month before professional taxes</h6></label>
                    <div className="form-group">
                        <span>Rs.</span>
                        <input className="form-control form-doctor" type="text" placeholder="CTC/month" name="ctc-month"/>
                    </div>
                </Col>
                <Col md={6}>
                    <label for="pg-degree" className="onboard-label"><h6>Highest PG Degree</h6></label>
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="Highest PG Degree" name="pg-degree"/>
                    </div>
                </Col>
                <Col md={6}>
                    <label for="pg-totalexp" className="onboard-label"><h6>Post PG Degree Total Experience</h6></label>
                    <div className="form-group">
                        <span>In Months</span>
                        <input className="form-control form-doctor" type="number" placeholder="Post PG Degree Total Experience" name="pg-totaexp"/>
                    </div>
                </Col>
                <Col md={6}>
                    <label for="pg-relexp" className="onboard-label"><h6>Post PG Degree Relevant Experience</h6></label>
                    <div className="form-group">
                        <span>In Months</span>
                        <input className="form-control form-doctor" type="number" placeholder="Post PG Degree Relevant Experience" name="pg-relexp"/>
                    </div>
                </Col>
            </Row>
            </Container>
        </>
    );
}

export default FixedForm;