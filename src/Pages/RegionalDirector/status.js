import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Card, Table, Toast } from "react-bootstrap";
import { Modal } from "react-bootstrap";
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
  console.log(user, "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");

  console.log(list.data, "list data");
  useEffect(() => {
    dispatch(documentlist());
  }, [dispatch]);
  useEffect(() => {
    axios
      .get("http://localhost:8090/api/onboard/")
      .then((res) => res.data)
      .then((rows) => {
        setRows(rows.data);
      });
  }, []);

  const handleApprove = (row) => {
    const updateData = {
      doctorId: row.doctorid,
      currentAction: "onboarded",
      nextAction: "final-onboarding",
    };
    axios
      .put("http://localhost:8090/api/onboard/" + row.id, updateData)
      .then((res) => {});
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
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
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
                              viewDocuments(ele.doctorid);
                            }}
                          ></i>
                        </td>
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
                              <button>
                                <i
                                  className="fas fa-times"
                                  // onClick={Reject}
                                  style={{ color: "red" }}
                                ></i>
                              </button>
                            </div>
                          ) : ele.currentAction === "onboarded" ? (
                            "Approved"
                          ) : (
                            "pending"
                          )}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </Card.Body>
            {/* <Footer style={{}} /> */}

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
      {/* ) : ( */}
        {/* "" */}
      {/* )} */}
    </>
  );
}
