import React, {useState} from 'react'
import icon from '../images/invoice.png'
function GeneratePayout() {
    return (
        <div className="card mb-4 payoutBtn disabled">
            <div className="card-footer align-items-center">
				<div className="row">
					<div className="col-4" style={{fontSize:"30px"}}>
						<img src={icon} className="img-responsive" alt="logo"/>
					</div>
					<div className="col-8">
						<div style={{textAlign:'right'}}>
							<h4>Payout Calculation in Progress</h4>
						</div>
					</div>
				</div>
			</div>
        </div> 
    )
}

export default GeneratePayout;
