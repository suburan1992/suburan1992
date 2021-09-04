import React, { useState } from 'react';
import {Modal, Button, Container, Row, Col, Card} from 'react-bootstrap';

import doctorLogo from '../images/doctor.png'
import renewalLogo from '../images/migrate.png'
import positionLogo from '../images/shop.png'

function TestStatsCard(){
	
	const cardStyle={
		background:'transparent',
		border:'0px',
	}
	const infoStyle={
		border:'2px solid #858585',
	}
	const subTitle={
		fontSize:"13px"
	}
	
	return(				
		<Card style={infoStyle}>
			<Card.Header style={{paddingTop:"5px", paddingLeft:"5px", borderBottom:"1px solid #858585"}}>
				<h3>Statistics</h3>
			</Card.Header>
			<Card.Body>
				<Row>
					<Col md={3} xs={6}>
						<Card style={cardStyle}>
							<Card.Body style={{paddingTop:"10px"}}>
								<Row>
									<Col md={6} xs={6} style={{textAlign:"center", paddingRight:"0px"}}>
										<div style={{}}>
											<img src={doctorLogo} className="img-responsive" alt=""/>
										</div>
									</Col>
									<Col md={6} xs={6} style={{textAlign:"center", paddingLeft:"0px"}}>
										<div>
											<h3>18</h3>
											<h6 style={subTitle}>New Doctors</h6>
										</div>
									</Col>
								</Row>
							</Card.Body>
						</Card>
					</Col>
					<Col md={3} xs={6}>
						<Card style={cardStyle}>
							<Card.Body style={{paddingTop:"10px"}}>
								<Row>
									<Col md={6} xs={6} style={{textAlign:"center", paddingRight:"0px"}}>
										<div style={{}}>
											<img src={renewalLogo} className="img-responsive" alt=""/>
										</div>
									</Col>
									<Col md={6} xs={6} style={{textAlign:"center", paddingLeft:"0px"}}>
										<div>
											<h3>11</h3>
											<h6 style={subTitle}>Upcoming Renewals</h6>
										</div>
									</Col>
								</Row>
							</Card.Body>
						</Card>
					</Col>
					<Col md={3} xs={6}>
						<Card style={cardStyle}>
							<Card.Body style={{paddingTop:"10px"}}>
								<Row>
									<Col md={6} xs={6} style={{textAlign:"center", paddingRight:"0px"}}>
										<div style={{}}>
											<img src={positionLogo} className="img-responsive" alt=""/>
										</div>
									</Col>
									<Col md={6} xs={6} style={{textAlign:"center", paddingLeft:"0px"}}>
										<div>
											<h3>6</h3>
											<h6>Exiting Doctors</h6>
										</div>
									</Col>
								</Row>
							</Card.Body>
						</Card>
					</Col>
					<Col md={3} xs={6}>
						<Card style={cardStyle}>
							<Card.Body style={{paddingTop:"10px"}}>
								<Row>
									<Col md={6} xs={6} style={{textAlign:"center", paddingRight:"0px"}}>
										<div style={{}}>
											<img src={doctorLogo} className="img-responsive" alt=""/>
										</div>
									</Col>
									<Col md={6} xs={6} style={{textAlign:"center", paddingLeft:"0px"}}>
										<div>
											<h3>18</h3>
											<h6 style={subTitle}>Visiting Doctors</h6>
										</div>
									</Col>
								</Row>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	)
}
export default TestStatsCard