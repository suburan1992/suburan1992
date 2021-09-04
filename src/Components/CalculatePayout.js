import React, {useState} from 'react'
import icon from '../images/rupee.png'
function PayoutExceptions({num}) {
    const mystyle={
        
    }
    return (
        <div className="card mb-4 requestInfo" style={mystyle} >
            <div className="card-footer align-items-center">
				<div className="row">
					<div className="col-4" style={{fontSize:"50px"}}>
						<img src={icon} className="img-responsive" alt="logo"/>
					</div>
					<div className="col-8">
						<div style={{textAlign:'right'}}>
							<h1 style={{fontSize:"50px", fontWeight:"bold"}}>{num}</h1>
							<br></br>
							<h4>Payout Exceptions</h4>
						</div>
					</div>
				</div>
			</div>
        </div> 
    )
}

export default PayoutExceptions;
