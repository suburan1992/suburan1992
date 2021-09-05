import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Table, Toast } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import axios from "axios";
import { documentlist } from "../../actions/documentActions";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

function UploadedDocument(props) {
  console.log(props.history, "abcde");
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [remark, setRemark] = useState("");
  const [doctorid, setdoctorId] = useState(0);
  const [step, setStep] = useState(1);
  const [rows, setRows] = useState([]);
  const [id, setId] = useState("");
  const [rid, setrId] = useState("");
  const [open, setOpen] = React.useState(false);
  const [openr, setOpenr] = React.useState(false);
  const [lists, setList] = useState([]);
  const [uploadData, setUploadData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const handlemClickOpen = (id) => {
    dispatch(documentlist(id));
    setId(id);
    setOpen(true);
  };
  const handlemClose = () => {
    setOpen(false);
  };

  const handlerClickOpen = (id) => {
    setrId(id);
    setOpenr(true);
  };
  const handlerClose = () => {
    setOpenr(false);
  };

  const handleSubmitReject = () => {
    const obj = {
      currentAction: "Rejected by HR",
      remark: remark,
    };
    axios.put("http://localhost:8090/api/onboard/" + rid, obj).then((res) => {
      console.log(res);
      setRemark("");
    });
  };
  const Remark = (e) => {
    setRemark(e.target.value);
    console.log(e.target.value, "Remark:::");
  };
  const back = useRef(null);
  const next = useRef(null);
  const reviewAndSubmit = useRef(null);
  const handleClose = () => setShow(false);
  const handleShow = (doctorid) => {
    setShow(true);

    dispatch(documentlist(doctorid));
  };
  const listDoc = useSelector((state) => state.listDoc);
  const { list } = listDoc;

  console.log(list, "List!!!");
  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;

  console.log(list.data, "list data");
  // useEffect(() => {
  //   dispatch(documentlist());
  // }, [dispatch]);

  function clickNext() {
    if (step == 1) {
      back.current.className = "standardButton rejectButton";
    } else if (step == 3) {
      next.current.className += " hide";
      back.current.className += " hide";
      reviewAndSubmit.current.className = "standardButton acceptButton";
    }
    setStep((s) => s + 1);
  }

  function clickBack() {
    if (step == 2) {
      back.current.className += " hide";
    }
    setStep((s) => s - 1);
  }
  function clickReviewAndSubmit() {}

  const formStyle = {
    borderRadius: "5px",
    border: "1px solid black",
  };
  const headerStyle = {
    backgroundColor: "#94248E",
    margins: "0px",
    padding: "10px",
    color: "white",
    borderRadius: "5px",
    borderBottom: "3px black solid",
  };
  const bodyStyle = {
    borderRadius: "5px",
  };

  const handleDownload = (url, filename) => {
    fetch("http://localhost:8090/api/documents/download/" + url, {
      method: "GET",
      headers: {
        "Content-Type": "application/pdf",
      },
    }).then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();
      });

      //window.location.href = response.url;
    });
  };

  console.log(rows, "&&&&&&&");

  const Accept = (e, el) => {
    e.preventDefault();
    // var tr = el.parentNode.parentNode; //tr
    // tr.className = "accepted";
  };

  const Reject = (e, el) => {
    e.preventDefault();
    var tr = el.parentNode.parentNode; //tr
    tr.className = "rejected";
  };

  useEffect(() => {
    axios
      .get("http://localhost:8090/api/onboard/")
      .then((res) => res.data)
      .then((rows) => {
        // let k = rows.data.filter((z) => z.doctorcommercial != null);

        setRows(rows.data);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8090/api/documents/list/" + user.user.id)
      .then((res) => res.data)
      .then((rows) => {
        setList(rows.data);
        var k = rows.data;
        var l = [];
        k.forEach((element) => {
          l.push(element.docTitle);
        });
        console.log(l);
        setUploadData(l);
      });
  }, [refresh]);

  console.log(
    lists,
    "cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc"
  );
  const handleApprove = (row) => {
    const updateData = {
      doctorId: row.doctorid,
      currentAction: "rd-approval",
      nextAction: "final-onboarding",
    };
    axios
      .put("http://localhost:8090/api/onboard/" + row.id, updateData)
      .then((res) => {});
  };

  function viewDocuments(id) {
    setdoctorId(id);
  }

  return (
    <>
      <Sidebar />

      <div className="main-content side-content pt-0 mg-b-30">
        <div className="container-fluid">
          <div className="inner-body">
            <Navbar />

            <form>
              <br />
              <Card style={formStyle}>
                <Card.Header style={headerStyle}>
                  <h4>Dr. {user.user.username} -View Documents</h4>
                  <h6 style={{ fontWeight: "lighter" }}>
                    Raised by - Business Head
                  </h6>
                </Card.Header>
                <Card.Body style={bodyStyle}>
                  <Table style={{ width: "100%" }} borderless>
                    <thead>
                      <tr
                        style={{
                          textAlign: "center",
                          borderBottom: "1px solid rgb(200, 200, 200)",
                        }}
                      >
                        {/* <th className="col-1">#</th> */}
                        <th className="col-2">Doctor Name</th>
                        <th className="col-3">Current Action</th>
                        <th className="col-2">Next Action</th>
                        <th>View Documents</th>
                        {/* <th className="col-2">Additional Information</th> */}
                        <th className="col-1">Approve/Reject</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows &&
                        rows.map((ele) => (
                          <tr
                            // onClick={() => handleShow(ele.id)}
                            id="color"
                            style={{
                              textAlign: "center",
                              borderBottom: "1px solid rgb(200, 200, 200)",
                            }}
                          >
                            {/* <td>{ele.id}.</td> */}
                            <td>{ele.name}</td>
                            <td>{ele.currentAction}</td>
                            <td>{ele.nextAction}</td>
                            {/* <td>
                              <input
                                type="text"
                                id="resume"
                                name="resume"
                                value={ele.docValue}
                                className="form-control"
                                disabled
                              />
                            </td> */}
                            {/* <td className="align" style={{ cursor: "pointer" }}>
                              <i
                                className="fas fa-file"
                                onClick={() =>
                                  handleDownload(ele.url, ele.docTitle)
                                }
                                title={"Download"}
                                style={{ fontSize: "22px" }}
                              />
                            </td> */}
                            {/* <td className="align">{ele.name}</td> */}
                            {/* <td>
                              <input
                                type="text"
                                id="resume"
                                name="resume"
                                value={ele.verificationRemark}
                                className="form-control"
                                disabled
                              />
                            </td> */}
                            <td>
                              <i
                                className="fas fa-eye"
                                color="black"
                                onClick={() => {
                                  handlemClickOpen(ele.doctorId);
                                }}
                                // onClick={() => {
                                //   viewDocuments(ele.doctorid);
                                // }}
                              ></i>
                            </td>
                            <td>
                              {ele.currentAction === "rd-approval" ? (
                                "Approved"
                              ) : ele.currentAction === "hr-verification" ? (
                                <div>
                                  <button>
                                    <i
                                      className="fas fa-check"
                                      onClick={() => {
                                        handleApprove(ele);
                                      }}
                                      style={{
                                        color: "green",
                                        marginRight: "2rem",
                                      }}
                                    ></i>
                                  </button>
                                  {/* <button>
                                    <i
                                      className="fas fa-times"
                                     
                                      style={{ color: "red" }}
                                    ></i>
                                  </button> */}
                                  <Button
                                    size="small"
                                    color="secondary"
                                    onClick={() => {
                                      handlerClickOpen(ele.id);
                                    }}
                                  >
                                    Reject
                                  </Button>
                                </div>
                              ) : (
                                "Pending"
                              )}
                            </td>
                          </tr>
                        ))}
                      {/* <tr style={{borderBottom:"1px solid rgb(200, 200, 200)"}}>
                                                <td>1.</td>
                                                <td>Resume</td>
                                                <td><input type="text" id="resume" name="resume" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" disabled/></td>
                                                <td className="align"><i className="fas fa-file" onClick={downloadFile} title={"Download"} style={{fontSize:"22px"}} /></td>
                                                <td><input type="text" id="resume" name="resume" className="form-control" disabled/></td>
                                               <td>
                                                    <div>
                                                        <button><i className="fas fa-check"style={{marginRight:"20px", color:"green"}}></i></button>
                                                        <button><i className="fas fa-times" style={{ color:"red"}}></i></button>
                                                    </div>
                                                </td>
                                            </tr> */}

                      {/* <tr style={{borderBottom:"1px solid rgb(200, 200, 200)"}}>
                                                <td>2.</td>
                                                <td>Medical Council Registration Certificate</td>
                                                <td><input type="text" id="resume" name="resume" className="form-control"/></td>
                                                <td className="align"><i className="fas fa-file"  title={"Download"} style={{fontSize:"22px"}} /></td>
                                                <td>
                                                    <Row>
                                                        <Col md={12}>
                                                            <select name="state" id="state" className="form-control">
                                                                <option value="" disabled selected hidden>Select the state of registration</option>
                                                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                                                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                                                <option value="Assam">Assam</option>
                                                                <option value="Bihar">Bihar</option>
                                                                <option value="Chandigarh">Chandigarh</option>
                                                                <option value="Chhattisgarh">Chhattisgarh</option>
                                                                <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                                                <option value="Daman and Diu">Daman and Diu</option>
                                                                <option value="Delhi">Delhi</option>
                                                                <option value="Lakshadweep">Lakshadweep</option>
                                                                <option value="Puducherry">Puducherry</option>
                                                                <option value="Goa">Goa</option>
                                                                <option value="Gujarat">Gujarat</option>
                                                                <option value="Haryana">Haryana</option>
                                                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                                                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                                                <option value="Jharkhand">Jharkhand</option>
                                                                <option value="Karnataka">Karnataka</option>
                                                                <option value="Kerala">Kerala</option>
                                                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                                                <option value="Maharashtra">Maharashtra</option>
                                                                <option value="Manipur">Manipur</option>
                                                                <option value="Meghalaya">Meghalaya</option>
                                                                <option value="Mizoram">Mizoram</option>
                                                                <option value="Nagaland">Nagaland</option>
                                                                <option value="Odisha">Odisha</option>
                                                                <option value="Punjab">Punjab</option>
                                                                <option value="Rajasthan">Rajasthan</option>
                                                                <option value="Sikkim">Sikkim</option>
                                                                <option value="Tamil Nadu">Tamil Nadu</option>
                                                                <option value="Telangana">Telangana</option>
                                                                <option value="Tripura">Tripura</option>
                                                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                                <option value="Uttarakhand">Uttarakhand</option>
                                                                <option value="West Bengal">West Bengal</option>
                                                            </select>
                                                        </Col>
                                                        <Col md={12}>
                                                            <input type="date" id="birthday" name="birthday" className="form-control"/>
                                                        </Col>
                                                    </Row>
                                                    
                                                </td>
                                               <td>
                                                    <div>
                                                        <button><i className="fas fa-check"style={{marginRight:"20px", color:"green"}}></i></button>
                                                        <button><i className="fas fa-times"style={{ color:"red"}}></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr style={{borderBottom:"1px solid rgb(200, 200, 200)"}}>
                                                <td>3.</td>
                                                <td>PAN Card</td>
                                                <td><input type="text" id="pan-num" name="pan-num" className="form-control" placeholder="PAN Number"/></td>
                                                <td className="align"><i className="fas fa-file"  title={"Download"} style={{fontSize:"22px"}} /></td>
                                                <td><input type="text" id="resume" name="resume" className="form-control" disabled/></td>
                                               <td>
                                                    <div>
                                                        <button><i className="fas fa-check"style={{marginRight:"20px", color:"green"}}></i></button>
                                                        <button><i className="fas fa-times" style={{ color:"red"}}></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr style={{borderBottom:"1px solid rgb(200, 200, 200)"}}>
                                                <td>4.</td>
                                                <td>AADHAR Card</td>
                                                <td><input type="text" id="aad-num" name="aad-num" className="form-control" placeholder="AADHAR Number"/></td>
                                                <td className="align"><i className="fas fa-file"  title={"Download"} style={{fontSize:"22px"}} /></td>
                                                <td><input type="text" id="resume" name="resume" className="form-control" disabled/></td>
                                               <td>
                                                    <div>
                                                        <button><i className="fas fa-check"style={{marginRight:"20px", color:"green"}}></i></button>
                                                        <button><i className="fas fa-times"style={{ color:"red"}}></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr style={{borderBottom:"1px solid rgb(200, 200, 200)"}}>
                                                <td>5.</td>
                                                <td>Cancelled Cheque (Bank Details)</td>
                                                <td><input type="text" id="pan-num" name="pan-num" className="form-control" placeholder="Cheque Number"/></td>
                                                <td className="align"><i className="fas fa-file"  title={"Download"} style={{fontSize:"22px"}} /></td>
                                                <td>
                                                    <Row>
                                                        <Col md={12}>
                                                            <input type="text" id="resume" name="resume" className="form-control" placeholder="Bank Name"/>
                                                        </Col>
                                                        <br />
                                                        <Col md={12}>
                                                            <input type="text" id="resume" name="resume" className="form-control" placeholder="Account Number"/>
                                                        </Col>
                                                        <br />
                                                        <Col md={12}>
                                                            <input type="text" id="resume" name="resume" className="form-control" placeholder="IFSC code"/>
                                                        </Col>
                                                        <br />
                                                    </Row>
                                                </td>
                                               <td>
                                                    <div>
                                                        <button><i className="fas fa-check"style={{marginRight:"20px", color:"green"}}></i></button>
                                                        <button style={{ color:"red"}}><i className="fas fa-times"></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr style={{borderBottom:"1px solid rgb(200, 200, 200)"}}>
                                                <td>6.</td>
                                                <td>Address Proof</td>
                                                <td><input type="text" id="aad-num" name="aad-num" className="form-control" placeholder="" disabled/></td>
                                                <td className="align"><i className="fas fa-file"  title={"Download"} style={{fontSize:"22px"}} /></td>
                                                <td><textarea type="text" id="resume" name="resume" className="form-control" placeholder="Enter Address as mentioned in Proof"/></td>
                                               <td>
                                                    <div>
                                                        <button><i className="fas fa-check"style={{marginRight:"20px", color:"green"}}></i></button>
                                                        <button style={{ color:"red"}}><i className="fas fa-times"></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr style={{borderBottom:"1px solid rgb(200, 200, 200)"}}>
                                                <td>7.</td>
                                                <td>Payslips for the last 6 month</td>
                                                <td><input type="text" id="aad-num" name="aad-num" className="form-control" disabled/></td>
                                                <td className="align"><i className="fas fa-file"  title={"Download"} style={{fontSize:"22px"}} /></td>
                                                <td><input type="text" id="resume" name="resume" className="form-control" disabled/></td>
                                               <td>
                                                    <div>
                                                        <button><i className="fas fa-check"style={{marginRight:"20px", color:"green"}}></i></button>
                                                        <button style={{ color:"red"}}><i className="fas fa-times"></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr style={{borderBottom:"1px solid rgb(200, 200, 200)"}}>
                                                <td>8.</td>
                                                <td>MBBS Degree Certificate</td>
                                                <td><input type="text" id="aad-num" name="aad-num" className="form-control" disabled/></td>
                                                <td className="align"><i className="fas fa-file"  title={"Download"} style={{fontSize:"22px"}} /></td>
                                                <td><input type="text" id="resume" name="resume" className="form-control" disabled/></td>
                                               <td>
                                                    <div>
                                                        <button><i className="fas fa-check"style={{marginRight:"20px", color:"green"}}></i></button>
                                                        <button style={{ color:"red"}}><i className="fas fa-times"></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr style={{borderBottom:"1px solid rgb(200, 200, 200)"}}>
                                                <td>9.</td>
                                                <td>All PG Degree Certificates</td>
                                                <td><input type="text" id="aad-num" name="aad-num" className="form-control" disabled/></td>
                                                <td className="align"><i className="fas fa-file"  title={"Download"} style={{fontSize:"22px"}} /></td>
                                                <td><input type="text" id="resume" name="resume" className="form-control" disabled/></td>
                                               <td>
                                                    <div>
                                                        <button><i className="fas fa-check"style={{marginRight:"20px", color:"green"}}></i></button>
                                                        <button style={{ color:"red"}}><i className="fas fa-times"></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr style={{borderBottom:"1px solid rgb(200, 200, 200)"}}>
                                                <td>10.</td>
                                                <td>Passport Size Photograph</td>
                                                <td><input type="text" id="aad-num" name="aad-num" className="form-control" disabled/></td>
                                                <td className="align"><i className="fas fa-file"  title={"Download"} style={{fontSize:"22px"}} /></td>
                                                <td><input type="text" id="resume" name="resume" className="form-control" disabled/></td>
                                               <td>
                                                    <div>
                                                        <button><i className="fas fa-check"style={{marginRight:"20px", color:"green"}}></i></button>
                                                        <button style={{ color:"red"}}><i className="fas fa-times"></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr style={{borderBottom:"1px solid rgb(200, 200, 200)"}}>
                                                <td>11.</td>
                                                <td>Form 16 for last 2 years</td>
                                                <td><input type="text" id="aad-num" name="aad-num" className="form-control" disabled/></td>
                                                <td className="align"><i className="fas fa-file"  title={"Download"} style={{fontSize:"22px"}} /></td>
                                                <td><input type="text" id="resume" name="resume" className="form-control" disabled/></td>
                                               <td>
                                                    <div>
                                                        <button><i className="fas fa-check"style={{marginRight:"20px", color:"green"}}></i></button>
                                                        <button style={{ color:"red"}}><i className="fas fa-times"></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr style={{borderBottom:"1px solid rgb(200, 200, 200)"}}>
                                                <td>12.</td>
                                                <td>Bank Statement for 6 months</td>
                                                <td><input type="text" id="aad-num" name="aad-num" className="form-control" disabled/></td>
                                                <td className="align"><i className="fas fa-file"  title={"Download"} style={{fontSize:"22px"}} /></td>
                                                <td><input type="text" id="resume" name="resume" className="form-control" disabled/></td>
                                               <td>
                                                    <div>
                                                        <button><i className="fas fa-check" style={{marginRight:"20px", color:"green"}}></i></button>
                                                        <button style={{ color:"red"}}><i className="fas fa-times"></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr style={{borderBottom:"1px solid rgb(200, 200, 200)"}}>
                                                <td>13.</td>
                                                <td>Indemnity Insurance Copy</td>
                                                <td><input type="text" id="aad-num" name="aad-num" className="form-control" disabled/></td>
                                                <td className="align"><i className="fas fa-file"  title={"Download"} style={{fontSize:"22px"}} /></td>
                                                <td><input type="text" id="resume" name="resume" className="form-control" disabled/></td>
                                                <td>
                                                    <div>
                                                        <button style={{marginRight:"20px", color:"green"}}><i className="fas fa-check"></i></button>
                                                        <button style={{ color:"red"}}><i className="fas fa-times"></i></button>
                                                    </div>
                                                </td>
                                            </tr> */}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </form>
          </div>
        </div>
        <Modal
          size="lg"
          scrollable
          dialogClassName="modalStandard"
          centered
          aria-labelledby="example-modal-sizes-title-lg"
          show={show}
          onHide={handleClose}
        >
          <Modal.Header className="modalHeader" closeButton>
            <Modal.Title className="modalTitle">Requested Id</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* {addpos.data && addpos.data.map((ele,index) =>( */}
            <Table style={{ width: "100%" }} borderless>
              <thead>
                <tr
                  style={{
                    textAlign: "center",
                    borderBottom: "1px solid rgb(200, 200, 200)",
                  }}
                >
                  <th className="col-2">Document Name</th>

                  <th> Documents</th>
                </tr>
              </thead>
              <tbody>
                {list.data &&
                  list.data.map((ele) => (
                    <tr
                      onClick={() => handleShow(ele.id)}
                      id="color"
                      style={{
                        textAlign: "center",
                        borderBottom: "1px solid rgb(200, 200, 200)",
                      }}
                    >
                      {/* <td>{ele.id}.</td> */}
                      <td>{ele.docTitle}</td>
                      <td>
                        <i
                          className="fas fa-file"
                          onClick={() => handleDownload(ele.url, ele.docTitle)}
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center"></Modal.Footer>
        </Modal>
      </div>

      <Dialog
        fullWidth={true}
        maxWidth="md"
        onClose={handlemClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handlemClose}>
          Uploaded Documents
        </DialogTitle>
        <DialogContent dividers>
          <Card style={formStyle}>
            <Card.Header style={headerStyle}></Card.Header>
            <Card.Body
              style={bodyStyle}
              style={{ overflowY: "auto", height: "300px" }}
            >
              <Table style={{ width: "100%" }} borderless>
                <thead>
                  <tr
                    style={{
                      textAlign: "center",
                      borderBottom: "1px solid rgb(200, 200, 200)",
                    }}
                  >
                    <th className="col-2">Document Title</th>
                    <th className="col-2"> File</th>
                  </tr>
                  {/* )} */}
                </thead>
                <tbody>
                  {list &&
                    list.data &&
                    list.data.map((ele) => (
                      <tr>
                        <td style={{ textAlign: "center" }}>{ele.docTitle}</td>
                        <td style={{ cursor: "pointer", textAlign: "center" }}>
                          {" "}
                          <i
                            className="fas fa-file"
                            onClick={() =>
                              handleDownload(ele.url, ele.docTitle)
                            }
                            title={"Download"}
                            style={{ fontSize: "22px" }}
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handlemClose}
            color="secondary"
            variant="contained"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        fullWidth={true}
        maxWidth="md"
        onClose={handlerClose}
        aria-labelledby="customized-dialog-title"
        open={openr}
      >
        <DialogTitle id="customized-dialog-title" onClose={handlerClose}>
          Reject
        </DialogTitle>
        <DialogContent dividers>
          <label>
            <b>Remark</b>
          </label>
          <textarea
            type="text"
            onChange={Remark}
            style={{ color: "black", border: "1px solid black" }}
            className="form-control"
          />
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleSubmitReject}
            color="primary"
            variant="contained"
          >
            Submit
          </Button>
          <Button
            autoFocus
            onClick={handlerClose}
            color="secondary"
            variant="contained"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default UploadedDocument;
