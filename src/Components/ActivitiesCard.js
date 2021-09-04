import React from 'react'
import {Card} from 'react-bootstrap'

function ActivitiesCard({text,icon}) {
	const activityStyle={
		boxShadow:'0px 4px 8px 0px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.6)',
		border:'2px solid #858585',
	}
    return (
		<div className="activityCard">
			<Card>
				<Card.Body>
					<div className="icon-service rounded-circle">   
						<i className={icon}></i> 
					</div> 
					<p className="">{text}</p>
				</Card.Body>
			</Card>
		</div>
    )
}

export default ActivitiesCard
