import React, {useState} from 'react';
import {Link } from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap';
function Table({reqType}) {
    const [status, setStatus] = useState(reqType=="new"? "New Request": (reqType=="ongoing"? "Ongoing Request":"Completed Request"))

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <div className="card custom-card">
        <div className="card-header border-bottom-0 pb-0">
                                        <h3 className="main-content-title tx-24 mb-4 mg-b-5" style={{color:"red"}}>{status}</h3>
                                        <div className="d-flex justify-content-between">
                                            
                                            <div className="input-group mb-3 searchbar">
                                              <input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                              <div className="input-group-append border searchbarIcon">
                                                <button className="btn" type="button"><i className="fe fe-search " ></i></button>
                                              </div>
                                            </div>

                                            

                                            <div className="ml-auto float-right text-muted">

                                            
                                                <select className="form-select rounded cdropdown" aria-label="Default select example" >
                                                   <option defaultValue className="text-muted">Filter By</option>
                                                   <option value="1">By Date</option>
                                                  <option value="2">By Name</option>
                                                 </select>

                                                 <select className="form-select rounded  cdropdown" aria-label="Default select example" >
                                                   <option defaultValue  className="text-muted">Sort By</option>
                                                   <option value="1">By Date</option>
                                                  <option value="2">By Name</option>
                                                 </select>
                                              
                                            </div>
                                        </div>
                                      
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive userlist-table">
                                            <table className="table card-table table-striped table-vcenter text-nowrap mb-0 ctable">
                                                <thead>
                                                    <tr >
                                                        <th className="wd-lg-20p"><span>Request ID</span></th>
                                                        <th className="wd-lg-20p"><span>Request Type</span></th>
                                                        <th className="wd-lg-20p"><span>Request Raised By</span></th>
                                                        <th className="wd-lg-20p"><span>Date</span></th>
                                                        <th className="wd-lg-20p"><span>Subject</span></th>
                                                        <th className="wd-lg-20p"><span>Current Status</span></th>
                                                    
                                                    </tr>
                                                </thead>
                                                <tbody>
                                               
                                                    <tr onClick={handleShow}> 
                                                        <td>1230</td>
                                                        <td>Payout</td>
                                                        <td>RD</td>
                                                        <td>06/06/2020</td>
                                                        <td>Agreement Renewal</td>
                                                        <td>Ongoing</td>
                                                    </tr>
                                                   
                                                    <tr onClick={handleShow}>      
                                                        <td>2144</td>
                                                        <td>Onboarding</td>
                                                        <td>Doctor</td>
                                                        <td>05/11/2021</td>
                                                        <td>Onboarding of chief surgeon</td>
                                                        <td>Ongoing</td>
                                                    </tr>

                                                    <tr onClick={handleShow}>
                                                        <td>3333</td>
                                                        <td>Renewal</td>
                                                        <td>RD</td>
                                                        <td>02/06/2020</td>
                                                        <td>Agreement Renewal</td>
                                                        <td>Completed</td>
                                                    </tr>

                                                    <tr onClick={handleShow}>
                                                        <td>3320</td>
                                                        <td>Position</td>
                                                        <td>Business Head</td>
                                                        <td>21/9/2020</td>
                                                        <td>Create Postion</td>
                                                        <td>Ongoing</td>
                                                    </tr>

                                                   
                                                </tbody>
                                            </table>
                                        </div>
                                        <ul className="pagination mt-4 mb-0 float-right">
                                            <li className="page-item page-prev disabled"><a className="page-link" href="#" tabindex="-1">Prev</a></li>
                                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                                            <li className="page-item"><a className="page-link" href="#">5</a></li>
                                            <li className="page-item page-next"><a className="page-link" href="#">Next</a></li>
                                        </ul>
        </div>

      


      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal size="lg" scrollable dialogClassName="modalStandard" centered aria-labelledby="example-modal-sizes-title-lg" show={show} onHide={handleClose}>
        <Modal.Header className="modalHeader" closeButton>
          <Modal.Title className="modalTitle">Request N1242</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row">
                <div className="col-6 ">
                <label className="tx-inverse text-muted">Raised By</label>
                <input className="form-control" placeholder="Input box" type="text"/>
                <br />
                <label className="tx-inverse text-muted">Raised By</label>
                <input className="form-control" placeholder="Input box" type="text"/>
                </div>

                <div className="col-6 ">
                <label className="tx-inverse text-muted">Raised By</label>
                <input className="form-control" placeholder="Input box" type="text"/>
                <br />
                <label className="tx-inverse text-muted">Raised By</label>
                <input className="form-control" placeholder="Input box" type="text"/>
                </div>
            </div>
            <br />
            <label className="tx-inverse text-muted">Comments</label>
            <textarea class="form-control" placeholder="Textarea" rows="3"></textarea>
            <br />

            <hr />

            <p  className="tx-inverse "> Personal Information</p>   

            <div className="row">
                <div className="col-12 col-sm-4">
                <label className="tx-inverse text-muted">Full Name</label>
                <input className="form-control" placeholder="Input box" type="text"/>  
                </div>

                <div className="col-12 col-sm-4">
                <label className="tx-inverse text-muted">Contact Number</label>
                <input className="form-control" placeholder="Input box" type="text"/>  
                </div>

                <div className="col-12 col-sm-4">
                <label className="tx-inverse text-muted">Email Id</label>
                <input className="form-control" placeholder="Input box" type="text"/>  
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

    
    )
}

export default Table
