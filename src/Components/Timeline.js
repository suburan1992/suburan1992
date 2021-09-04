import react from 'react'
import {Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { NavLink } from 'react-router-dom'

const Timeline = ({step1,step2,step3,step4})=>{
    return(
        <Nav className="justify-content-center md-4" >
        <Nav.Item>
            {step1 ? (
                <LinkContainer to="/upload-documents"style={{color:"green", fontSize:"17px" ,fontWeight:".7rem"}}>
                    <Nav.Link>Upload Documents</Nav.Link>
                </LinkContainer>
            ):  (<Nav.Link disabled>Upload Documents</Nav.Link>)}
        </Nav.Item>
          <Nav.Item>
          {step2 ? (
              <LinkContainer to="/testProgress"style={{color:"green", fontSize:"17px" ,fontWeight:".7rem"}}>
                  <Nav.Link>Submitted for Approval</Nav.Link>
              </LinkContainer>
          ):  (<Nav.Link disabled>Submitted for Approval</Nav.Link>)}
      </Nav.Item>
        <Nav.Item>
        {step3 ? (
            <LinkContainer to="/upload-documents"style={{color:"green", fontSize:"17px" ,fontWeight:".7rem"}}>
                <Nav.Link> Documents Approved</Nav.Link>
            </LinkContainer>
        ):  (<Nav.Link disabled>Documents Approved</Nav.Link>)}
    </Nav.Item>
      <Nav.Item>
      {step4 ? (
          <LinkContainer to="/upload-documents"style={{color:"green", fontSize:"17px" ,fontWeight:".7rem"}}>
              <Nav.Link></Nav.Link>
          </LinkContainer>
      ):  (<Nav.Link disabled></Nav.Link>)}
  </Nav.Item>
  </Nav>
    )
}

export default Timeline