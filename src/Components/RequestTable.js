import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import {
  addpositions,
  removeRequest,
  findpositions,
} from "../../src/actions/createPositionActions";
import MaterialTable from "material-table";
import VisibilityIcon from "@material-ui/icons/Visibility";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const myTableStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "20%",
    marginTop: theme.spacing(3),
    "& td": {
      fontFamili: "Roboto !important",
    },
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflow: "auto",
    marginBottom: "50px",
  },
}));

function RequestTable({ reqTableData, reqType, match, history }) {
  // const id=match.params.id
  const tables = myTableStyle();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    dispatch(findpositions(id));
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addpositions());
  }, [dispatch]);

  const userLogin = useSelector((state) => state.userLogin);

  // bringing things from the reducer
  const { user } = userLogin;
  const addPosition = useSelector((state) => state.addPosition);
  const { addpos } = addPosition;

  const findPos = useSelector((state) => state.findPos);
  const { findpos } = findPos;
  // reqTableData.forEach(dataRow => dataRow.clickEvent = (id) => handleShow(id))

  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: "RequestId",
        field: "requestId",
        width: 100,
      },
      {
        label: "Request Type",
        field: "requestType",
        width: 100,
      },
      {
        label: "Request Raised By",
        field: "requestRaisedBy",
        sort: "asc",
        width: 200,
      },
      {
        label: "Date",
        field: "date",
        sort: "disabled",
        width: 100,
      },
      {
        label: "Subject",
        field: "subject",
        sort: "disabled",
        width: 150,
      },
      {
        label: "Current Status",
        field: "currentStatus",
        sort: "disabled",
        width: 100,
      },
    ],

    rows: reqTableData,
  });
  const infoStyle = {
    border: "2px solid #858585",
  };

  const removeRequestHandler = (id) => {
    // dispatch(removeRequest(id))
  };

  return (
    <div className="card custom-card" style={infoStyle}>
      {user && user.user && user.user.roles == "1" ? (
        <div className="card-body">
          <h3 className="main-content-title tx-24 mb-4 mg-b-5">New Requests</h3>
          <table
            className="table card-table table-striped table-vcenter text-nowrap mb-0 ctable"
            id="table"
          >
            <thead>
              <tr>
                <th className="wd-lg-20p">
                  <span>Request ID</span>
                </th>
                <th className="wd-lg-20p">
                  <span>Request Type</span>
                </th>
                <th className="wd-lg-20p">
                  <span>Request Raised By</span>
                </th>
                <th className="wd-lg-20p">
                  <span>Date</span>
                </th>
                <th className="wd-lg-20p">
                  <span>Designation</span>
                </th>
                <th className="wd-lg-20p">
                  <span>Current Status</span>
                </th>
                <th className="wd-lg-20p">
                  <span>Remove</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {addpos.data &&
                addpos.data.map((ele) => (
                  <tr key={ele.id} onClick={() => handleShow(ele.id)}>
                    <td>{ele.id} </td>
                    <td>{ele.category} </td>
                    <td>{ele.label}</td>
                    <td>{ele.createdAt.substring(0, 10)}</td>
                    <td>{ele.designationLabel}</td>
                    <td>{ele.status}</td>
                    <td>
                      <button
                        className="danger"
                        onClick={() => removeRequestHandler(ele.id)}
                      >
                        <i
                          className="fas fa-trash"
                          style={{ color: "red" }}
                        ></i>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {/* <MDBDataTableV5
                    id="table"
                    hover
                    entriesOptions={[5, 10, 15, 20, 25]}
                    entries={5}
                    pagesAmount={4}
                    data={datatable}
                    pagingTop
                    searchTop searchBottom={false}
                    barReverse
                /> */}
        </div>
      ) : (
        <div className="card-body">
          <h3 className="main-content-title tx-24 mb-4 mg-b-5"> </h3>

          <Paper className={tables.root}>
            <MaterialTable
              columns={[
                { title: "Request Id", field: "id" },
                { title: "Request Type", field: "category" },
                { title: "Request Raised By", field: "label" },
                { title: "Date", field: "createdAt" },
                { title: "Designation", field: "designationLabel" },

                {
                  title: "Status",
                  field: "status",
                  lookup: { 1: "Active", 0: "Inactive" },
                },
              ]}
              actions={[
                {
                  icon: VisibilityIcon,
                  tooltip: "View Request",
                  iconProps: { style: { fontSize: "24px", color: "#f55151" } },
                  // onClick={() => handleShow(ele.id)}
                  onClick: (event, row) => {
                    handleShow(row.id);
                    // console.log(row.id,"ifffffd");
                  },
                },
              ]}
              data={addpos.data}
              options={{
                // filtering: true,
                sorting: true,
                exportButton: true,
                pageSize: 5,
                pageSizeOptions: [5, 10, 50, 100, 200, 500],
                search: true,
              }}
              title="New Requests"
            />
          </Paper>
          {/* <table
            className="table card-table table-striped table-vcenter text-nowrap mb-0 ctable"
            id="table"
          >
            <thead>
              <tr>
                <th className="wd-lg-20p">
                  <span>Request ID</span>
                </th>
                <th className="wd-lg-20p">
                  <span>Request Type</span>
                </th>
                <th className="wd-lg-20p">
                  <span>Request Raised By</span>
                </th>
                <th className="wd-lg-20p">
                  <span>Date</span>
                </th>
                <th className="wd-lg-20p">
                  <span>Designation</span>
                </th>
                <th className="wd-lg-20p">
                  <span>Current Status</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {addpos.data &&
                addpos.data.map((ele) => (
                  <tr key={ele.id} onClick={() => handleShow(ele.id)}>
                    <td>{ele.id} </td>
                    <td>{ele.category} </td>
                    <td>{ele.label}</td>
                    <td>{ele.createdAt.substring(0, 10)}</td>
                    <td>{ele.designationLabel}</td>
                    <td>{ele.status}</td>
                  </tr>
                ))}
            </tbody>
          </table> */}
          {/* <MDBDataTableV5
                    id="table"
                    hover
                    entriesOptions={[5, 10, 15, 20, 25]}
                    entries={5}
                    pagesAmount={4}
                    data={datatable}
                    pagingTop
                    searchTop searchBottom={false}
                    barReverse
                /> */}
        </div>
      )}
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
          <Modal.Title className="modalTitle">
            Requested Id:{findpos.id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* {addpos.data && addpos.data.map((ele,index) =>( */}
          <div className="row">
            <div className="col-6 ">
              <label className="tx-inverse text-muted">Request Id</label>
              <input
                className="form-control"
                id="RequestId"
                value={findpos.id}
                placeholder="Input box"
                type="text"
              />
              <br />
              <label className="tx-inverse text-muted">Onboarding Type</label>
              <input
                className="form-control"
                id="RequestType"
                placeholder="Input box"
                value={findpos.category}
                type="text"
              />
            </div>

            <div className="col-6 ">
              <label className="tx-inverse text-muted">Request Raised By</label>
              <input
                className="form-control"
                id="RequestRaisedBy"
                placeholder="Input box"
                value={findpos.label}
                type="text"
              />
              <br />
              <label className="tx-inverse text-muted">Date</label>
              <input
                className="form-control"
                id="Date"
                placeholder="Input box"
                value={findpos.createdAt}
                type="text"
              />
            </div>
          </div>
          {/* ))}   */}
          <br />
          <div className="row">
            <div className="col-6 ">
              <label className="tx-inverse text-muted">Subject</label>
              <input
                className="form-control"
                id="Subject"
                placeholder="Input box"
                value={findpos.designationLabel}
                type="text"
              />
            </div>

            <div className="col-6 ">
              <label className="tx-inverse text-muted">Current Status</label>
              <input
                className="form-control"
                id="CurrentStatus"
                placeholder="Input box"
                value={findpos.status}
                type="text"
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-6 ">
              <label className="tx-inverse text-muted">Designation</label>
              <input
                className="form-control"
                id="Subject"
                placeholder="Input box"
                value={findpos.designationLabel}
                type="text"
              />
            </div>

            <div className="col-6 ">
              <label className="tx-inverse text-muted">Category</label>
              <input
                className="form-control"
                id="CurrentStatus"
                placeholder="Input box"
                value={findpos.category}
                type="text"
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-6 ">
              <label className="tx-inverse text-muted">Department</label>
              <input
                className="form-control"
                id="Subject"
                placeholder="Input box"
                value={findpos.departmentLabel}
                type="text"
              />
            </div>

            <div className="col-6 ">
              <label className="tx-inverse text-muted">Center Name</label>
              <input
                className="form-control"
                id="CurrentStatus"
                placeholder="Input box"
                value={findpos.centerNames}
                type="text"
              />
            </div>
          </div>

          <br />
          <label className="tx-inverse text-muted">Comments</label>
          <textarea
            class="form-control"
            placeholder="Textarea"
            rows="3"
          ></textarea>

          {/* <p className="tx-inverse "> Personal Information</p>

                    <div className="row">
                        <div className="col-12 col-sm-4">
                            <label className="tx-inverse text-muted">Full Name</label>
                            <input className="form-control" placeholder="Input box" type="text" />
                        </div>

                        <div className="col-12 col-sm-4">
                            <label className="tx-inverse text-muted">Contact Number</label>
                            <input className="form-control" placeholder="Input box" type="text" />
                        </div>

                        <div className="col-12 col-sm-4">
                            <label className="tx-inverse text-muted">Email Id</label>
                            <input className="form-control" placeholder="Input box" type="text" />
                        </div>
                    </div> */}
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Link
            to={{
              pathname: "/create-doctor",

              state: { data: findpos },
            }}
            className="standardButton acceptButton pt-2"
            style={{ textAlign: "center" }}
          >
            Initiate Onboarding
          </Link>

          <button className="standardButton rejectButton" onClick={handleClose}>
            Reject
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default RequestTable;