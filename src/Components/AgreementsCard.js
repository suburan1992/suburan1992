import React from 'react'

function AgreementsCard() {
    const cardStyle={
        width:'100%',
        height:'100%',
        marginTop: '2px'
    }
    const buttonStyle={
        width:"80%",
        borderRadius: '10px',
        justifySelf: 'center'
    }
    return (
    <div className="card text-center" style={cardStyle}> 
        <div className="card-body user-card"> 
            <div className=""> 
            <h4 className="  ">Agreement v1.1</h4> <br/>
            <p className=" tx-inverse">Udated On:</p>
            <p className="tx-inverse">Udated By:</p><br/>
        </div>
        <button type="button" className="btn btn-primary text-center mt-0" style={buttonStyle}>View Update</button> </div> 
    </div> 
    )
}

export default AgreementsCard
