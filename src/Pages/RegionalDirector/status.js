import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Card, Table, Toast } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
//import ui
import SidebarRD from "../../Components/Rd-sidebar";
import Navmain from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { documentlist } from "../../actions/documentActions";

export default function RdStatus() {
  const [rows, setRows] = useState([]);
  const [doctorid, setdoctorId] = useState(0);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");
  const [rid, setrId] = useState("");
  const [open, setOpen] = React.useState(false);
  const [openr, setOpenr] = React.useState(false);
  const [openRemark, setOpenRemark] = React.useState(false);
  const [viewRemark, setViewRemark] = useState("");
  const [remark, setRemark] = useState("");

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

  const handleClose = () => setShow(false);
  const handleShow = (doctorid) => {
    setShow(true);
    dispatch(documentlist(doctorid));
  };
  const listDoc = useSelector((state) => state.listDoc);
  const { list } = listDoc;

  const userLogin = useSelector((state) => state.userLogin);
  const { user } = userLogin;

  console.log(list.data, "list data");
  useEffect(() => {
    dispatch(documentlist());
  }, [dispatch]);

  function getAllRecord() {
    axios
      .get("http://localhost:8090/api/onboard/")
      .then((res) => res.data)
      .then((rows) => {
        setRows(rows.data);
      });
  }
  useEffect(() => {
    getAllRecord();
  }, []);

  const handleApprove = (row) => {
    const updateData = {
      doctorId: row.doctorid,
      currentAction: "onboarded",
      nextAction: "final-onboarding",
    };
    axios
      .put("http://localhost:8090/api/onboard/" + row.id, updateData)
      .then((res) => {
        getAllRecord();
      });
  };

  function viewDocuments(id) {
    setdoctorId(id);
  }
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
      currentAction: "Rejected by RD",
      remark: remark,
    };
    axios.put("http://localhost:8090/api/onboard/" + rid, obj).then((res) => {
      axios.delete("http://localhost:8090/api/docy/");
      console.log(res);
      getAllRecord();
      setRemark("");
      setOpenr(false);
    });
  };
  const Remark = (e) => {
    setRemark(e.target.value);
    console.log(e.target.value, "Remark:::");
  };

  const handleRemarkOpen = (remark) => {
    setViewRemark(remark);
    setOpenRemark(true);
  };
  const handleCloseRemark = () => {
    setOpenRemark(false);
  };
  return (
    <>
      {/* {user && user.id === 3 ? ( */}
      <>
        {/* <RdSidebar /> */}
        <SidebarRD />
        <div className="main-content side-content pt-0">
          <div className="container-fluid">
            <div className="inner-body">
              <Navmain />

              <div className="page-header">
                <div>
                  <h2 className="main-content-title tx-24 mg-b-5">
                    Welcome {}
                  </h2>
                  <br />
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="dashboard">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      viewstatus
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

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
                  <th>View Remark</th>
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
                      <td>{ele.name}</td>
                      <td>{ele.currentAction}</td>
                      <td>{ele.nextAction}</td>
                      <td>
                        <i
                          className="fas fa-eye"
                          color="black"
                          onClick={() => {
                            handlemClickOpen(ele.doctorId);
                          }}
                        ></i>
                      </td>
                      {!ele.remark ? (
                        <td>NA</td>
                      ) : (
                        <td>
                          <i
                            className="fas fa-eye"
                            color="red"
                            onClick={() => {
                              handleRemarkOpen(ele.remark);
                            }}
                          ></i>
                        </td>
                      )}

                      <td>
                        {ele.currentAction === "rd-approval" ? (
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
                        ) : ele.currentAction === "onboarded" ? (
                          "Approved"
                        ) : ele.currentAction === "Rejected by RD" ? (
                          "Rejected"
                        ) : (
                          ""
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Card.Body>

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
                            onClick={() =>
                              handleDownload(ele.url, ele.docTitle)
                            }
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
      </>
      <Dialog
        fullWidth={true}
        maxWidth="md"
        onClose={handlemClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={handlemClose}
          style={{ textAlign: "center" }}
        >
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
        <DialogTitle
          id="customized-dialog-title"
          onClose={handlerClose}
          style={{ textAlign: "center" }}
        >
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

      <Dialog
        fullWidth={true}
        maxWidth="md"
        onClose={handleCloseRemark}
        aria-labelledby="customized-dialog-title"
        open={openRemark}
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={handlerClose}
          style={{ textAlign: "center" }}
        >
          Remark
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>{viewRemark}</Typography>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleCloseRemark}
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
