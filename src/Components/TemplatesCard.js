import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';

function TemplatesCard() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const cardStyle={
        width:'100%',
        height:'100%',
        
    }
    const buttonStyle={
        width:"80%",
        borderRadius: '10px',
        justifySelf: 'center'
    }
    return (
        <div className="mb-3 ">
    <div className="card " style={cardStyle}> 
        <div className="card-body custom-card user-card text-center"> 
            <div className=""> 
            <h4 className="  ">Doctor Full <br/> time Agreement</h4><br />
            <p className="tx-inverse">Template Type: <span style={{fontWeight:'bold', marginLeft:'1px'}}>Full time</span></p>
            <p className="tx-inverse">Created On: <span style={{fontWeight:'bold', marginLeft:'1px'}}></span></p>
            </div>
            
         </div> 
        <div className="card-footer user-card text-right">
        <i className="fas fa-eye ml-2"></i>
        <i onClick={handleShow} className="fas fa-pencil-alt ml-2"></i>
        <i class="fas fa-trash ml-2"></i>
        </div>


        
        <Modal size="lg" scrollable dialogClassName="modalStandard" centered aria-labelledby="example-modal-sizes-title-lg" show={show} onHide={handleClose}>
        <Modal.Header className="modalHeader" closeButton>
          <Modal.Title className="modalTitle">Create New</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row">
                <div className="col-6 mb-7">
                <label className="tx-inverse text-muted">Name</label>
                <input className="form-control" placeholder="Input box" type="text"/>
                </div>

                <div className="col-6 ">
                <label className="tx-inverse text-muted">Category</label>
                <select className="form-select inputStyle" aria-label="Default select example" >
                                                   <option defaultValue>Filter By</option>
                                                   <option value="1">By Date</option>
                                                  <option value="2">By Name</option>
                                                 </select>
                </div>

                <div className="col-6 ">
                <div className="input-group file-browser mt-3"> 
                    <label className="input-group-btn"> 
                        <span className="btn btn-block inputStyle">  <span className="d-flex justify-content-left text-muted">Upload </span> 
                            <input type="file" style={{display: 'none'}} multiple="" /> 
                        </span> 
                    </label> 
                   
                </div>
                </div>
            </div>
          
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
        <button className="standardButton acceptButton" onClick={handleClose}>
         Accept 
          </button>
          <button className="standardButton rejectButton" onClick={handleClose}>
          Reject 
          </button>
        </Modal.Footer>
      </Modal>


</div>
    </div> 
    )
}

export default TemplatesCard