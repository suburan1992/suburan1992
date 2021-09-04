import React, { useState, useEffect } from "react";
// material ui components
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { Card, Container, Row, Col, Table } from "react-bootstrap";
import { toast } from "react-toastify";

import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import { createOnboarding, addonboard } from "../../actions/onboardActions";
import { listusers } from "../../actions/userActions";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function DoctorForm() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [show, setShow] = useState(false);
  const [opservice, setOpservice] = useState([
    {
      consultation: "",
      opfixedpay: "",
      oppercpay: "",
      opcount: "",
      opperunitcharge: "",
      opamount: "",
      oprevenue: "",
      oppayout: "",
    },
    {
      consultation: "",
      opfixedpay: "",
      oppercpay: "",
      opcount: "",
      opperunitcharge: "",
      opamount: "",
      oprevenue: "",
      oppayout: "",
    },
  ]);
  const [ipservice, setIpservice] = useState([
    {
      ipfixedroom: "",
      ipfixedmodeofpay: "",
      ipfixedamount: "",
      ipsurgeonfee: "",
      ippackageamount: "",
      ipgrossbillamount: "",
      ipnetbillamount: "",
      ippercamount: "",
      ipcount: "",
      iprevenue: "",
      ippayout: "",
    },
    {
      ipfixedroom: "",
      ipfixedmodeofpay: "",
      ipfixedamount: "",
      ipsurgeonfee: "",
      ippackageamount: "",
      ipgrossbillamount: "",
      ipnetbillamount: "",
      ippercamount: "",
      ipcount: "",
      iprevenue: "",
      ippayout: "",
    },
  ]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const userList = useSelector((state) => state.userList);
  const { users } = userList;

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

  useEffect(() => {
    dispatch(listusers());
  }, [dispatch]);

  const handleOnboarding = (event) => {
    event.preventDefault();
    const postData = {
      data: data,
      opservice: opservice,
      ipservice: ipservice,
    };
    dispatch(createOnboarding(postData));

    //toast('Success')
    //     setTimeout(() => {
    //       window.location.reload()
    //     }, 3000);
  };
  const info = "Clearing Exceptions";

  var testdata = newdata;
  var newdata = [];
  function selectedValue(e) {
    newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }

  var optype = [];
  var testData = {};

  const selectedOPValue = (index) => (e) => {
    let newArr = [...opservice]; // copying the old datas array
    newArr[index] = { ...newArr[index], [e.target.name]: e.target.value }; // replace e.target.value with whatever you want to change it to
    setOpservice(newArr);
  };

  const selectedIPValue = (index) => (e) => {
    let ipArr = [...ipservice]; // copying the old datas array
    ipArr[index] = { ...ipArr[index], [e.target.id]: e.target.value }; // replace e.target.value with whatever you want to change it to
    setIpservice(ipArr);
  };

  function selectedTabValue(e) {
    let testop = document.getElementsByClassName("optype");
    let tabKey = e && e.target && e.target.id;
    let tempData = e && e.target && e.target.value;
    if (tabKey == "optype") {
      testData[tabKey] = tempData;
      optype.push(testData);
    }
  }
  const formList = useSelector((state) => state.formList);
  const { form, success } = formList;

  //  var selectedcenter= document.getElementById('centerlist').value;
  //  var selecteddept = document.getElementById('departmentlist').value;
  //  var selecteddesignation = document.getElementById('designationlist').value;
  //  var selectedtype = document.getElementById('typelist').value;

  return (
    <>
      <Sidebar />

      <div className="main-content side-content pt-0 mg-b-30">
        <div className="container-fluid">
          <div className="inner-body">
            <Navbar />

            <form method="post" action="#">
              <br />
              <Card style={formStyle}>
                <Card.Header style={headerStyle}>
                  <h4>N1234 - Doctor's Onboarding</h4>
                  <h6 style={{ fontWeight: "lighter" }}>
                    Raised by - Business Head
                  </h6>
                </Card.Header>
                <Card.Body style={bodyStyle}>
                  <Row>
                    <Col md={12}>
                      <h5>Personal Information</h5>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col md={6}>
                      <label for="doctor-name" className="onboard-label">
                        <h6>Name in Full</h6>
                      </label>
                      <div className="form-group">
                        <span>Dr.</span>
                        <input
                          className="form-control form-doctor"
                          type="text"
                          placeholder="Doctor's Full Name"
                          id="fullname"
                          onChange={selectedValue}
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <label for="birthday" className="onboard-label">
                        <h6>Date of Birth</h6>
                      </label>
                      <input
                        type="date"
                        id="birthday"
                        name="birthday"
                        className="form-control"
                        onChange={selectedValue}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <label for="doctor-contact" className="onboard-label">
                        <h6>Contact Number</h6>
                      </label>
                      <div className="form-group">
                        <span>+91</span>
                        <input
                          className="form-control form-doctor"
                          type="text"
                          placeholder="Contact Number"
                          id="mobile "
                          name="doctor-contact"
                          onChange={selectedValue}
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <label for="email-id" className="onboard-label">
                        <h6>Email Address</h6>
                      </label>
                      <input
                        type="text"
                        placeholder="Email Address"
                        id="email"
                        name="email-id"
                        className="form-control"
                        onChange={selectedValue}
                      />
                    </Col>
                  </Row>

                  <hr style={{ backgroundColor: "black", height: "0.5px" }} />
                  <Row>
                    <Col md={12}>
                      <h5>Joining Details</h5>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col md={6}>
                      <label for="desg-name" className="onboard-label">
                        <h6>Designation</h6>
                      </label>
                      <div className="form-group">
                        <select
                          className="form-control"
                          style={{ color: "black" }}
                          id="designationlist"
                          onChange={selectedValue}
                        >
                          {form.designationList &&
                            form.designationList.map((ele) => (
                              <option value={ele.name}>{ele.name}</option>
                            ))}
                        </select>
                      </div>
                    </Col>
                    <Col md={6}>
                      <label for="dept-name" className="onboard-label">
                        <h6>Department</h6>
                      </label>
                      <div className="form-group">
                        <select
                          className="form-control"
                          style={{ color: "black" }}
                          id="departmentlist"
                          onChange={selectedValue}
                        >
                          {form.departmentList &&
                            form.departmentList.map((ele) => (
                              <option value={ele.name}>{ele.name}</option>
                            ))}
                        </select>
                        {/* <input
                          className="form-control"
                          type="text"
                          id="departmentlist"
                          placeholder="Department"
                          name="doctor-name"
                          onChange={selectedValue}
                        /> */}
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <label for="business-unit" className="onboard-label">
                        <h6>Business Unit(s)</h6>
                      </label>
                      <div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="businessunit"
                            value="Jayanagar"
                            onChange={selectedValue}
                          />
                          <label class="form-check-label" for="inlineCheckbox1">
                            Jayanagar
                          </label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="businessunit"
                            value="Bellandur"
                            onChange={selectedValue}
                          />
                          <label class="form-check-label" for="businessunit[]">
                            Bellandur
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col md={6}>
                      {/* <label for="med-council" className="onboard-label">
                        <h6>Medical Council Registration Number</h6>
                      </label>
                      <input
                        type="text"
                        placeholder="Medical Council Registration Number"
                        id="medcouncil"
                        name="med-council"
                        className="form-control"
                        onChange={selectedValue}
                      /> */}
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <label for="contract-term" className="onboard-label">
                        <h6>Specific Period of Contract</h6>
                      </label>
                      <div className="form-group">
                        <span>In Months</span>
                        <input
                          className="form-control form-doctor"
                          type="number"
                          placeholder="Contract Term"
                          id="contractlength"
                          name="contract-term"
                          onChange={selectedValue}
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <label for="doj" className="onboard-label">
                        <h6>Joining Date</h6>
                      </label>
                      <input
                        type="date"
                        id="doj"
                        name="doj"
                        className="form-control"
                        onChange={selectedValue}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      {" "}
                      <label for="pg-degree" className="onboard-label">
                        <h6>Highest PG Degree</h6>
                      </label>
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Highest PG Degree"
                          id="pgdegree"
                          onChange={selectedValue}
                        />
                      </div>
                    </Col>
                    <Col md={4}>
                      <label for="pg-totalexp" className="onboard-label">
                        <h6>Post PG Degree Total Experience</h6>
                      </label>
                      <div className="form-group">
                        <span>In Months</span>
                        <input
                          className="form-control form-doctor"
                          type="number"
                          placeholder="Post PG Degree Total Experience"
                          id="pgtotalexp"
                          onChange={selectedValue}
                        />
                      </div>
                    </Col>
                    <Col md={4}>
                      {" "}
                      <label for="pg-relexp" className="onboard-label">
                        <h6>Post PG Degree Relevant Experience</h6>
                      </label>
                      <div className="form-group">
                        <span>In Months</span>
                        <input
                          className="form-control form-doctor"
                          type="number"
                          placeholder="Post PG Degree Relevant Experience"
                          id="pgrelevantexp"
                          onChange={selectedValue}
                        />
                      </div>
                    </Col>
                  </Row>
                  <hr style={{ backgroundColor: "black", height: "1px" }} />
                  <Row>
                    <Col md={12}>
                      <h5>Contract Terms and Details</h5>
                    </Col>
                  </Row>
                  <br />
                  {/* <Row>
                    <Col md={12}>
                      <label for="business-unit" className="onboard-label">
                        <h6>Payment Terms (select which are applicable)</h6>
                      </label>
                      <Row>
                        <Col md={12}>
                          <input
                            type="checkbox"
                            value="Yes"
                            id="fixedservice"
                            style={{ marginRight: "2px", marginTop: "2px" }}
                            onChange={selectedValue}
                          />
                          Fixed Retainership Fees
                          <div class="fixed-test">
                            <br />
                            <Col md={12}>
                              <Container fluid>
                                <Row>
                                  <Col md={6}>
                                    <label
                                      for="ctc-month"
                                      className="onboard-label"
                                    >
                                      <h6>
                                        CTC / month before professional taxes
                                      </h6>
                                    </label>
                                    <div className="form-group">
                                      <span>Rs.</span>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        placeholder="CTC/month"
                                        id="ctcmonth"
                                        onChange={selectedValue}
                                        name="ctc-month"
                                      />
                                    </div>
                                  </Col>
                                  <Col md={6}></Col>
                                  <Col md={6}></Col>
                                  <Col md={6}></Col>
                                </Row>
                              </Container>
                            </Col>
                            <hr
                              style={{
                                backgroundColor: "black",
                                height: "1px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "50%",
                              }}
                            />
                          </div>
                        </Col>
                        <Col md={12}>
                          <input
                            type="checkbox"
                            value="Yes"
                            id="opservice"
                            style={{ marginRight: "2px" }}
                            onChange={selectedValue}
                          /> */}
                  {/* Out-Patient Services
                          <div class="op-test">
                            <br />
                            <Col md={12}>
                              <Container fluid>
                                <Row> */}
                  {/* <Col md={6}>
                                    <label
                                      for="con-per"
                                      className="onboard-label"
                                    >
                                      <h6>Percentage share for Consultant</h6>
                                    </label>
                                    <div className="form-group">
                                      <span>%</span>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        placeholder="% for Consultant"
                                        id="opconsultantperc"
                                        onChange={selectedValue}
                                      />
                                    </div>
                                  </Col>
                                  <Col md={6}>
                                    <label
                                      for="comp-per"
                                      className="onboard-label"
                                    >
                                      <h6>Percentage share for Company</h6>
                                    </label>
                                    <div className="form-group">
                                      <span>%</span>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        placeholder="% for Company"
                                        id="opcompanyperc"
                                        onChange={selectedValue}
                                      />
                                    </div>
                                  </Col>
                                  <Col md={6}>
                                    <label
                                      for="con-fixed"
                                      className="onboard-label"
                                    >
                                      <h6>Fixed rate for Consultant</h6>
                                    </label>
                                    <div className="form-group">
                                      <span>Rs.</span>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        placeholder="Fixed for Consultant"
                                        id="opconsultantfixed"
                                        onChange={selectedValue}
                                      />
                                    </div>
                                  </Col>
                                  <Col md={6}>
                                    <label
                                      for="comp-fixed"
                                      className="onboard-label"
                                    >
                                      <h6>Fixed rate for Company</h6>
                                    </label>
                                    <div className="form-group">
                                      <span>Rs.</span>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        placeholder="Fixed for Company"
                                        id="opcompanyfixed"
                                        onChange={selectedValue}
                                      />
                                    </div>
                                  </Col> */}
                  {/* <Col md={12}>
                                    <label
                                      for="con-rate"
                                      className="onboard-label"
                                    >
                                      <h6>Other Rates</h6>
                                    </label>
                                  </Col>
                                  <Col md={12}>
                                    <Table bordered striped>
                                      <thead>
                                        <tr>
                                          <th>#</th>
                                          <th style={{ width: "250px" }}>
                                            Item Group
                                          </th>
                                          <th style={{ width: "150px" }}>
                                            Fixed Payout
                                          </th>
                                          <th>Percentage Payout</th>
                                          <th>Count</th>
                                          <th style={{ width: "150px" }}>
                                            Per Unit Charge
                                          </th>
                                          <th style={{ width: "150px" }}>
                                            Amount
                                          </th>
                                          <th style={{ width: "150px" }}>
                                            Revenue
                                          </th>
                                          <th style={{ width: "150px" }}>
                                            Payout
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr
                                          style={{
                                            borderBottom: "1px solid black",
                                          }}
                                        >
                                          <td>1</td>
                                          <td>
                                            <input
                                              className="form-control form-doctor"
                                              type="text"
                                              placeholder="Consultation"
                                              name="consultation"
                                              class="optype"
                                              onChange={selectedOPValue(0)}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              className="form-control form-doctor"
                                              type="text"
                                              id="opfixedpay"
                                              name="opfixedpay"
                                              onChange={selectedOPValue(0)}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              className="form-control form-doctor"
                                              type="text"
                                              id="oppercpay"
                                              name="oppercpay"
                                              onChange={selectedOPValue(0)}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              className="form-control form-doctor"
                                              type="text"
                                              id="opcount"
                                              name="opcount"
                                              onChange={selectedOPValue(0)}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              className="form-control form-doctor"
                                              type="text"
                                              id="opperunitcharge"
                                              name="opperunitcharge"
                                              onChange={selectedOPValue(0)}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              className="form-control form-doctor"
                                              type="text"
                                              id="opamount"
                                              name="opamount"
                                              onChange={selectedOPValue(0)}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              className="form-control form-doctor"
                                              type="text"
                                              id="oprevenue"
                                              name="oprevenue"
                                              onChange={selectedOPValue(0)}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              className="form-control form-doctor"
                                              type="text"
                                              id="oppayout"
                                              name="oppayout"
                                              onChange={selectedOPValue(0)}
                                            />
                                          </td>
                                        </tr>
                                        <tr
                                          style={{
                                            borderBottom: "1px solid black",
                                          }}
                                        >
                                          <td>1</td>
                                          <td>
                                            <input
                                              className="form-control form-doctor"
                                              type="text"
                                              placeholder="Consultation"
                                              name="consultation"
                                              class="optype"
                                              onChange={selectedOPValue(1)}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              className="form-control form-doctor"
                                              type="text"
                                              id="opfixedpay"
                                              name="opfixedpay"
                                              onChange={selectedOPValue(1)}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              className="form-control form-doctor"
                                              type="text"
                                              id="oppercpay"
                                              name="oppercpay"
                                              onChange={selectedOPValue(1)}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              className="form-control form-doctor"
                                              type="text"
                                              id="opcount"
                                              name="opcount"
                                              onChange={selectedOPValue(1)}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              className="form-control form-doctor"
                                              type="text"
                                              id="opperunitcharge"
                                              name="opperunitcharge"
                                              onChange={selectedOPValue(1)}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              className="form-control form-doctor"
                                              type="text"
                                              id="opamount"
                                              name="opamount"
                                              onChange={selectedOPValue(1)}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              className="form-control form-doctor"
                                              type="text"
                                              id="oprevenue"
                                              name="oprevenue"
                                              onChange={selectedOPValue(1)}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              className="form-control form-doctor"
                                              type="text"
                                              id="oppayout"
                                              name="oppayout"
                                              onChange={selectedOPValue(1)}
                                            />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </Table>
                                  </Col>
                                </Row>
                              </Container>
                            </Col> */}
                  {/* <hr
                              style={{
                                backgroundColor: "black",
                                height: "1px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "50%",
                              }}
                            /> */}
                  {/* </div>
                        </Col> */}
                  {/* <Col md={12}>
                          <input
                            type="checkbox"
                            value="Yes"
                            id="ipservice"
                            style={{ marginRight: "2px" }}
                            onChange={selectedValue}
                          />
                          In-Patient Services
                          <div class="op-test">
                            <br />
                            <Col md={12}>
                              <Container fluid>
                                <Row>
                                  {/* <Col md={6}>
                                    <label
                                      for="con-per"
                                      className="onboard-label"
                                    >
                                      <h6>Percentage share for Consultant</h6>
                                    </label>
                                    <div className="form-group">
                                      <span>%</span>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        placeholder="% for Consultant"
                                        id="ipconsultantpercentage"
                                      />
                                    </div>
                                  </Col>
                                  <Col md={6}>
                                    <label
                                      for="comp-per"
                                      className="onboard-label"
                                    >
                                      <h6>Percentage share for Company</h6>
                                    </label>
                                    <div className="form-group">
                                      <span>%</span>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        placeholder="% for Company"
                                        id="ipcompanypercentage"
                                      />
                                    </div>
                                  </Col> 
                                  <Col md={12}>
                                    <label
                                      for="con-rate"
                                      className="onboard-label"
                                    >
                                      <h6>Packages</h6>
                                    </label>
                                  </Col>
                                  <Col md={12}>
                                    <Table
                                      bordered
                                      striped
                                      hover
                                      responsive="xl"
                                      id="test"
                                    >
                                      <thead>
                                        <tr style={{ textAlign: "center" }}>
                                          <th colspan="4" className="col-6">
                                            Fixed
                                          </th>
                                          <th colspan="5" className="col-6">
                                            Percentage
                                          </th>
                                          <th rowSpan="2" className="col-1">
                                            Count
                                          </th>
                                          <th rowSpan="2" className="col-1">
                                            Revenue
                                          </th>
                                          <th rowSpan="2" className="col-1">
                                            Payout
                                          </th>
                                        </tr>
                                        <tr style={{ textAlign: "center" }}>
                                          <th
                                            style={{ fontSize: "12px" }}
                                            className="col-4"
                                          >
                                            Type
                                          </th>
                                          <th
                                            style={{ fontSize: "12px" }}
                                            className="col-3"
                                          >
                                            Room
                                          </th>
                                          <th style={{ fontSize: "12px" }}>
                                            Mode of payment
                                          </th>
                                          <th style={{ fontSize: "12px" }}>
                                            Amount
                                          </th>
                                          <th style={{ fontSize: "12px" }}>
                                            Surgeon Fee
                                          </th>
                                          <th style={{ fontSize: "12px" }}>
                                            Package amount
                                          </th>
                                          <th style={{ fontSize: "12px" }}>
                                            Gross bill amount
                                          </th>
                                          <th style={{ fontSize: "12px" }}>
                                            Net Bill Amount
                                          </th>
                                          <th style={{ fontSize: "12px" }}>
                                            Amount
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>
                                            <input
                                              className="form-control form-doctor"
                                              type="text"
                                              id="iptype"
                                              name="iptype"
                                              placeholder="Consultation"
                                              class="optype"
                                              onChange={selectedIPValue(0)}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              className="form-control form-doctor"
                                              type="text"
                                              id="ipfixedroom"
                                              name="ipfixedroom"
                                              onChange={selectedIPValue(0)}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              className="form-control form-doctor"
                                              type="text"
                                              id="ipfixedmodeofpay"
                                              name="ipfixedmodeofpay"
                                              onChange={selectedIPValue(0)}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              className="form-control form-doctor"
                                              type="text"
                                              id="ipfixedamount"
                                              name="ipfixedamount"
                                              onChange={selectedIPValue(0)}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              className="form-control form-doctor"
                                              type="text"
                                              id="ipsurgeonfee"
                                              name="ipsurgeonfee"
                                              onChange={selectedIPValue(0)}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              className="form-control form-doctor"
                                              type="text"
                                              id="ippackageamount"
                                              name="ippackageamount"
                                              onChange={selectedIPValue(0)}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              className="form-control form-doctor"
                                              type="text"
                                              id="ipgrossbillamount"
                                              name="ipgrossbillamount"
                                              onChange={selectedIPValue(0)}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              className="form-control form-doctor"
                                              type="text"
                                              id="ipnetbillamount"
                                              name="ipnetbillamount"
                                              onChange={selectedIPValue(0)}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              className="form-control form-doctor"
                                              type="text"
                                              id="ippercamount"
                                              name="ippercamount"
                                              onChange={selectedIPValue(0)}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              className="form-control form-doctor"
                                              type="text"
                                              id="ipcount"
                                              name="ipcount"
                                              onChange={selectedIPValue(0)}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              className="form-control form-doctor"
                                              type="text"
                                              id="iprevenue"
                                              name="iprevenue"
                                              onChange={selectedIPValue(0)}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              className="form-control form-doctor"
                                              type="text"
                                              id="ippayout"
                                              name="ippayout"
                                              onChange={selectedIPValue(0)}
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <input
                                              className="form-control form-doctor"
                                              type="text"
                                              id="iptype"
                                              name="iptype"
                                              placeholder="Consultation"
                                              class="optype"
                                              onChange={selectedIPValue(1)}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              className="form-control form-doctor"
                                              type="text"
                                              id="ipfixedroom"
                                              name="ipfixedroom"
                                              onChange={selectedIPValue(1)}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              className="form-control form-doctor"
                                              type="text"
                                              id="ipfixedmodeofpay"
                                              name="ipfixedmodeofpay"
                                              onChange={selectedIPValue(1)}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              className="form-control form-doctor"
                                              type="text"
                                              id="ipfixedamount"
                                              name="ipfixedamount"
                                              onChange={selectedIPValue(1)}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              className="form-control form-doctor"
                                              type="text"
                                              id="ipsurgeonfee"
                                              name="ipsurgeonfee"
                                              onChange={selectedIPValue(1)}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              className="form-control form-doctor"
                                              type="text"
                                              id="ippackageamount"
                                              name="ippackageamount"
                                              onChange={selectedIPValue(1)}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              className="form-control form-doctor"
                                              type="text"
                                              id="ipgrossbillamount"
                                              name="ipgrossbillamount"
                                              onChange={selectedIPValue(1)}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              className="form-control form-doctor"
                                              type="text"
                                              id="ipnetbillamount"
                                              name="ipnetbillamount"
                                              onChange={selectedIPValue(1)}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              className="form-control form-doctor"
                                              type="text"
                                              id="ippercamount"
                                              name="ippercamount"
                                              onChange={selectedIPValue(1)}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              className="form-control form-doctor"
                                              type="text"
                                              id="ipcount"
                                              name="ipcount"
                                              onChange={selectedIPValue(1)}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              className="form-control form-doctor"
                                              type="text"
                                              id="iprevenue"
                                              name="iprevenue"
                                              onChange={selectedIPValue(1)}
                                            />
                                          </td>
                                          <td>
                                            <input
                                              className="form-control form-doctor"
                                              type="text"
                                              id="ippayout"
                                              name="ippayout"
                                              onChange={selectedIPValue(1)}
                                            />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </Table>
                                  </Col>
                                </Row>
                              </Container>
                            </Col>
                            <hr
                              style={{
                                backgroundColor: "black",
                                height: "1px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "50%",
                              }}
                            />
                          </div>
                        </Col> */}
                  {/* </Row>
                    </Col> */}
                  {/* </Row> */}
                  <Row>
                    <Col md={12}>
                      <div className={classes.root}>
                        <AppBar
                          position="static"
                          style={{ backgroundColor: "#ffffff1f", color: "black" }}
                        >
                          <Tabs
                            variant="fullWidth"
                            value={value}
                            onChange={handleChange}
                            aria-label="nav tabs example"
                          >
                            <LinkTab
                              label=" Fixed Retainership Fees"
                              href="/drafts"
                              {...a11yProps(0)}
                            />
                            <LinkTab
                              label=" Out-Patient Services"
                              href="/trash"
                              {...a11yProps(1)}
                            />
                            <LinkTab
                              label=" In-Patient Services"
                              href="/spam"
                              {...a11yProps(2)}
                            />
                          </Tabs>
                        </AppBar>
                        <TabPanel value={value} index={0}>
                          <Row>
                            <Col md={6}>
                              <label for="ctc-month" className="onboard-label">
                                <h6>CTC / month before professional taxes</h6>
                              </label>
                              <div className="form-group">
                                <span>Rs.</span>
                                <input
                                  className="form-control form-doctor"
                                  type="text"
                                  placeholder="CTC/month"
                                  id="ctcmonth"
                                  onChange={selectedValue}
                                  name="ctc-month"
                                />
                              </div>
                            </Col>
                          </Row>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                          <Row>
                            <Col md={12}>
                              <label for="con-rate" className="onboard-label">
                                <h6>Other Rates</h6>
                              </label>
                            </Col>
                            <Col md={12}>
                              <Table bordered striped>
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th style={{ width: "250px" }}>
                                      Item Group
                                    </th>
                                    <th style={{ width: "150px" }}>
                                      Fixed Payout
                                    </th>
                                    <th>Percentage Payout</th>
                                    <th>Count</th>
                                    <th style={{ width: "150px" }}>
                                      Per Unit Charge
                                    </th>
                                    <th style={{ width: "150px" }}>Amount</th>
                                    <th style={{ width: "150px" }}>Revenue</th>
                                    <th style={{ width: "150px" }}>Payout</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr
                                    style={{
                                      borderBottom: "1px solid black",
                                    }}
                                  >
                                    <td>1</td>
                                    <td>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        placeholder="Consultation"
                                        name="consultation"
                                        class="optype"
                                        onChange={selectedOPValue(0)}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        id="opfixedpay"
                                        name="opfixedpay"
                                        onChange={selectedOPValue(0)}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        id="oppercpay"
                                        name="oppercpay"
                                        onChange={selectedOPValue(0)}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        id="opcount"
                                        name="opcount"
                                        onChange={selectedOPValue(0)}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        id="opperunitcharge"
                                        name="opperunitcharge"
                                        onChange={selectedOPValue(0)}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        id="opamount"
                                        name="opamount"
                                        onChange={selectedOPValue(0)}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        id="oprevenue"
                                        name="oprevenue"
                                        onChange={selectedOPValue(0)}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        id="oppayout"
                                        name="oppayout"
                                        onChange={selectedOPValue(0)}
                                      />
                                    </td>
                                  </tr>
                                  <tr
                                    style={{
                                      borderBottom: "1px solid black",
                                    }}
                                  >
                                    <td>1</td>
                                    <td>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        placeholder="Consultation"
                                        name="consultation"
                                        class="optype"
                                        onChange={selectedOPValue(1)}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        id="opfixedpay"
                                        name="opfixedpay"
                                        onChange={selectedOPValue(1)}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        id="oppercpay"
                                        name="oppercpay"
                                        onChange={selectedOPValue(1)}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        id="opcount"
                                        name="opcount"
                                        onChange={selectedOPValue(1)}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        id="opperunitcharge"
                                        name="opperunitcharge"
                                        onChange={selectedOPValue(1)}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        id="opamount"
                                        name="opamount"
                                        onChange={selectedOPValue(1)}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        id="oprevenue"
                                        name="oprevenue"
                                        onChange={selectedOPValue(1)}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        id="oppayout"
                                        name="oppayout"
                                        onChange={selectedOPValue(1)}
                                      />
                                    </td>
                                  </tr>
                                </tbody>
                              </Table>
                            </Col>
                          </Row>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                          <Row>
                            <Col md={12}>
                              <label for="con-rate" className="onboard-label">
                                <h6>Packages</h6>
                              </label>
                            </Col>
                            <Col md={12}>
                              <Table
                                bordered
                                striped
                                hover
                                responsive="xl"
                                id="test"
                              >
                                <thead>
                                  <tr style={{ textAlign: "center" }}>
                                    <th colspan="4" className="col-6">
                                      Fixed
                                    </th>
                                    <th colspan="5" className="col-6">
                                      Percentage
                                    </th>
                                    <th rowSpan="2" className="col-1">
                                      Count
                                    </th>
                                    <th rowSpan="2" className="col-1">
                                      Revenue
                                    </th>
                                    <th rowSpan="2" className="col-1">
                                      Payout
                                    </th>
                                  </tr>
                                  <tr style={{ textAlign: "center" }}>
                                    <th
                                      style={{ fontSize: "12px" }}
                                      className="col-4"
                                    >
                                      Type
                                    </th>
                                    <th
                                      style={{ fontSize: "12px" }}
                                      className="col-3"
                                    >
                                      Room
                                    </th>
                                    <th style={{ fontSize: "12px" }}>
                                      Mode of payment
                                    </th>
                                    <th style={{ fontSize: "12px" }}>Amount</th>
                                    <th style={{ fontSize: "12px" }}>
                                      Surgeon Fee
                                    </th>
                                    <th style={{ fontSize: "12px" }}>
                                      Package amount
                                    </th>
                                    <th style={{ fontSize: "12px" }}>
                                      Gross bill amount
                                    </th>
                                    <th style={{ fontSize: "12px" }}>
                                      Net Bill Amount
                                    </th>
                                    <th style={{ fontSize: "12px" }}>Amount</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        id="iptype"
                                        name="iptype"
                                        placeholder="Consultation"
                                        class="optype"
                                        onChange={selectedIPValue(0)}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        id="ipfixedroom"
                                        name="ipfixedroom"
                                        onChange={selectedIPValue(0)}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        id="ipfixedmodeofpay"
                                        name="ipfixedmodeofpay"
                                        onChange={selectedIPValue(0)}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        id="ipfixedamount"
                                        name="ipfixedamount"
                                        onChange={selectedIPValue(0)}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        id="ipsurgeonfee"
                                        name="ipsurgeonfee"
                                        onChange={selectedIPValue(0)}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        id="ippackageamount"
                                        name="ippackageamount"
                                        onChange={selectedIPValue(0)}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        id="ipgrossbillamount"
                                        name="ipgrossbillamount"
                                        onChange={selectedIPValue(0)}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        id="ipnetbillamount"
                                        name="ipnetbillamount"
                                        onChange={selectedIPValue(0)}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        id="ippercamount"
                                        name="ippercamount"
                                        onChange={selectedIPValue(0)}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        id="ipcount"
                                        name="ipcount"
                                        onChange={selectedIPValue(0)}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        id="iprevenue"
                                        name="iprevenue"
                                        onChange={selectedIPValue(0)}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        id="ippayout"
                                        name="ippayout"
                                        onChange={selectedIPValue(0)}
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        id="iptype"
                                        name="iptype"
                                        placeholder="Consultation"
                                        class="optype"
                                        onChange={selectedIPValue(1)}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        id="ipfixedroom"
                                        name="ipfixedroom"
                                        onChange={selectedIPValue(1)}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        id="ipfixedmodeofpay"
                                        name="ipfixedmodeofpay"
                                        onChange={selectedIPValue(1)}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        id="ipfixedamount"
                                        name="ipfixedamount"
                                        onChange={selectedIPValue(1)}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        id="ipsurgeonfee"
                                        name="ipsurgeonfee"
                                        onChange={selectedIPValue(1)}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        id="ippackageamount"
                                        name="ippackageamount"
                                        onChange={selectedIPValue(1)}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        id="ipgrossbillamount"
                                        name="ipgrossbillamount"
                                        onChange={selectedIPValue(1)}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        id="ipnetbillamount"
                                        name="ipnetbillamount"
                                        onChange={selectedIPValue(1)}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        id="ippercamount"
                                        name="ippercamount"
                                        onChange={selectedIPValue(1)}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        id="ipcount"
                                        name="ipcount"
                                        onChange={selectedIPValue(1)}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        id="iprevenue"
                                        name="iprevenue"
                                        onChange={selectedIPValue(1)}
                                      />
                                    </td>
                                    <td>
                                      <input
                                        className="form-control form-doctor"
                                        type="text"
                                        id="ippayout"
                                        name="ippayout"
                                        onChange={selectedIPValue(1)}
                                      />
                                    </td>
                                  </tr>
                                </tbody>
                              </Table>
                            </Col>
                          </Row>
                        </TabPanel>
                      </div>
                    </Col>
                  </Row>
                  <br />
                  <Row
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Col
                      md={6}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <button
                        className="btn btn-primary"
                        style={{ width: "100px" }}
                        onClick={handleOnboarding}
                      >
                        Confirm
                      </button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorForm;
