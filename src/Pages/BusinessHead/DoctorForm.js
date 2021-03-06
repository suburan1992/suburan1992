import React, { useState, useEffect } from "react";
// material ui components
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import AddIcon from "@material-ui/icons/Add";
import RefreshIcon from "@material-ui/icons/Refresh";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import MaterialTable from "material-table";
import { Paper } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useLocation } from "react-router-dom";

import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { Card, Container, Row, Col, Table } from "react-bootstrap";
import { toast } from "react-toastify";

import axios from "axios";

import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import { createOnboarding, addonboard } from "../../actions/onboardActions";
import { listusers } from "../../actions/userActions";
import { centerlist } from "../../actions/centerActions";
import { IconButton } from "@material-ui/core";
import { parse } from "date-fns";

const myTableStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
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
  root1: {
    "& label + .MuiInput-formControl": {
      marginTop: "1vw",
    },
  },
}));

const useStyles1 = makeStyles({
  paper: {
    border: "5px solid black",
  },
});

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

const backDropStyle = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

function DoctorForm({ history }) {
  console.log(history, "history");

  const location = useLocation();
  const backClasses = backDropStyle();
  const [backDropOpen, setBackDropOpen] = useState(false);
  const classes1 = useStyles1();
  const tables = myTableStyle();
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [mcrc, setmcrc] = useState();
  const [pan, setpan] = useState();
  const [adhaar, setadhaar] = useState();
  const [cc, setcc] = useState();
  const [address, setaddress] = useState();
  const [bank, setbank] = useState();
  const [mcrcValue, setMcrcValue] = useState();
  const [filename, setFilename] = useState("");
  const [filePath, setfilePath] = useState();
  const [remark, setRemark] = useState();
  const [selectedmcrc, setSelectedmcrc] = useState();
  const [aadNo, setAadNo] = useState();
  const [panNo, setpanNo] = useState();
  const [bankname, setBankNo] = useState();
  const [accountno, setAccountNo] = useState();
  const [bankifsc, setBankifscNo] = useState();
  const [ccBank, setccBank] = useState();
  const [ccAccountNo, setccAccountNo] = useState();
  const [ifsc, setifsc] = useState();
  const [addressProof, setAddressProof] = useState();
  const [visible, setVisible] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [selecteddata, setSelectedData] = useState({});
  const [show, setShow] = useState(false);
  const [Consultation, setConsultation] = useState("");
  const [Package, setPackage] = useState("");
  const [IpRoom, setIpRoom] = useState("");
  const [IpMop, setIpMop] = useState("");

  const [ctcpermonth, setCtcpermonth] = useState("");
  const [indemnityvalue, setindemnityvalue] = useState("");
  const [indemnityexpiry, setindemnityexpiry] = useState("");
  const initialFormtState = {
    consultation: "",
    opfixedpay: "",
    oppercpay: "",
    opadhoc: "",
    opcount: "",
    fixedamount: "",
    fixedpercentage: "",
    opperunitcharge: "",
    netamount: "",
    opamount: "",
    oprevenue: "", 
    oppayout: "",
  };
  const [opservice, setOpservice] = useState({
    initialFormtState,
  });
  const initialFormtStateipservice = {
    ipconsultaion: "",
    iproom: "",
    ipmodeofpayment: "",
    ipfixedamount: "",
    ipsurgeonfeeperc: "",
    ippackageamountperc: "",
    ipgrossperc: "",
    netperc: "",
    amount: "",
    count: "",
    revenue: "",
    payout: "",
  };
  const [ipservice, setIpservice] = useState([
    {
      initialFormtStateipservice,
    },
  ]);
  const [noticeperiod, setnoticeperiod] = useState("");
  const [lockinperiod, setlockinperiod] = useState("");
  const [additionalfeename, setadditionalfeename] = useState("");
  const [additionalfee, setadditionalfee] = useState("");
  const [procedure, setProcedure] = useState([]);
  const [rows, setRows] = useState([]);
  const [calculateData, setCalculateData] = useState(0);
  const [procName, setProcName] = useState("");
  const [table, setTable] = useState([]);
  const [iptable, setIptable] = useState([]);
  const [unit, setUnit] = useState("");
  const [percentage, setPercentage] = useState("");
  const [count, setCount] = useState("");
  const [fixedPay, setFixedPay] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [onboardData, setOnoardData] = useState(0);
  const [disable, setDisable] = useState(false);
  const [checked, setChecked] = React.useState(true);
  const [chkitem, setChkitem] = useState([location.state.data.centerNames]);
  const [regionid, setRegionId] = useState(0);
  const [amount, setAmount] = useState("");
  const [net, setNet] = useState("");
  const [payout, setpayout] = useState("");
  const [adhoc, setAdhoc] = useState("");
  const [totalnetAmount, setTotalnetAmount] = useState([]);
  const [totalpayout, setTotalpayout] = useState([]);
  const [totalippayout, setTotalIppayout] = useState([]);
  const [totalipRevenue, setTotalIpRevenue] = useState([]);

  const [age, setAge] = React.useState("");
  const [sfee, setSfee] = useState(0);
  const [pap, setPap] = useState(0);
  const [gross, setGross] = useState("");
  const [netC, setNetC] = useState("");
  const [finalpayout, setFinalpayout] = useState("");

  const handleChangeRoom = (event) => {
    setAge(event.target.value);
  };

  const makeVisible = () => {
    if (!visible) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  const handleChangeChkbox = (name) => {
    if (chkitem.includes(name)) {
      var k = [];
      k = chkitem.filter((z) => z != name);
      setChkitem(k);
    } else {
      setChkitem((prevItems) => [...prevItems, name]);
    }
  };

  const userList = useSelector((state) => state.userList);
  const { users } = userList;

  const centerList = useSelector((state) => state.centerList);
  const { centers } = centerList;
  var bcenter = location.state.data.centerNames;
  var centerArray = [];
  {
    centers &&
      centers.map((ele) => {
        centerArray.push(ele);
      });
  }

  var k = centerArray.filter((z) => z.name === bcenter);
  var l = centerArray.filter((z) => z.region_id === k[0].region_id);
  // console.log(k.region_id, "rid");
  // setRegionId(k.region_id);
  const getOnboard = useSelector((state) => state.getOnboard);
  const { getonboard } = getOnboard;

  console.log(location.state.data.id, "%%%%!!");

  useEffect(() => {
    dispatch(addonboard());
  }, [dispatch]);

  useEffect(() => {
    dispatch(centerlist());
  }, [dispatch]);

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

  const handleOnboarding = async (event) => {
    event.preventDefault();

    data.designationlist = location.state.data.designationLabel;
    data.departmentlist = location.state.data.departmentLabel;
    // data.fullname = location.state.data.label;
    data.businessunit = location.state.data.centerNames;
    data.ctcmonth = ctcpermonth;
    data.indemnityexpiry = indemnityexpiry;
    data.indemnityvalue = indemnityvalue;
    data.ctcmonth = ctcpermonth;
    data.additionalfeename = additionalfeename;
    data.additionalfee = additionalfee;
    data.centers = chkitem;

    const postData = {
      data: data,
      opservice: table,
      ipservice: iptable,
    };
    // console.log(postData, "&&12rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr343");
    setBackDropOpen(true);
    await axios
      .post("http://localhost:8090/api/onboard", postData)
      .then((res) => {
        console.log(res);
        setOnoardData(res.data.doctorData.id);
        setBackDropOpen(false);

        const obj = {
          doctorId: res.data.doctorData.id,
        };
        axios
          .put(
            "http://localhost:8090/api/vacancies/" + location.state.data.id,
            obj
          )
          .then((res) => {
            console.log(res);
          });
        setTimeout(() => {
          toast.success("Successly Submitted!");
          window.location.reload();
        }, 1000);

      });
  };
  const info = "Clearing Exceptions";

  var testdata = newdata;
  var newdata = [];
  function selectedValue(e) {
    newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }
  var newConsultation = [];
  function selectedConsulataion(e) {
    newConsultation = { ...Consultation };
    newConsultation[e.target.id] = e.target.value;
    setConsultation(newConsultation);
  }

  var optype = [];
  var testData = {};

  const selectedOPValue = (index) => (e) => {
    let newArr = [...opservice]; // copying the old datas array
    newArr[index] = { ...newArr[index], [e.target.name]: e.target.value }; // replace e.target.value with whatever you want to change it to
    setOpservice(newArr);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOpservice({ ...opservice, [name]: value });
  };

  const handleInputChangeForCtc = (event) => {
    const { name, value } = event.target;
    if (value.length > 0) {
      setDisable(true);
    } else {
      setDisable(false);
    }
    setCtcpermonth(value);
  };
  const handleindemnityvalue = (event) => {
    const { name, value } = event.target;

    setindemnityvalue(value);
  };
  const handleindemnityexpiry = (event) => {
    const { name, value } = event.target;

    setindemnityexpiry(value);
  };
  const handleInputChangeForAddName = (event) => {
    const { name, value } = event.target;
    setadditionalfeename(value);
  };
  const handleInputChangeFoAddVal = (event) => {
    const { name, value } = event.target;
    setadditionalfee(value);
  };

  const unitCalculation = () => {
    setUnit(opservice.opperunitcharge);
  };
  const percentageCalculation = () => {
    setPercentage(unit * (opservice.oppercpay / 100));
  };

  const adhocCalculation = () => {
    // let n= parseInt(opservice.opadhoc)
    let m = amount - parseInt(opservice.opadhoc);
    setAdhoc(m);
  };
  const countCalculation = () => {
    let c = parseInt(opservice.opcount);
    let k = parseInt(opservice.opperunitcharge);
    c *= k;
    setAmount(c);
  };

  const payoutCalculation = () => {
    let n = parseInt(opservice.fixedamount);
    let i = parseInt(opservice.fixedpercentage);
    let k = i / 100;
    let m = k * adhoc + n;
    console.log(m, "payout");
    setpayout(m);
  };

  const fixedpayCalculation = () => {
    let i = opservice.opfixedpay;
    let f = parseInt(count);
    let total = Number(i) + Number(f);
    setFixedPay(total);
  };
  const getProcedureValue = (e) => {
    // alert(e.target.value);
    setConsultation(e.target.value);
  };

  const getPackageValue = (e) => {
    setPackage(e.target.value);
  };

  const getIpRoomValue = (e) => {
    setIpRoom(e.target.value);
  };

  const getIpMopValue = (e) => {
    setIpMop(e.target.value);
  };

  const handleIpserviceInputChange = (event) => {
    const { name, value } = event.target;
    setIpservice({ ...ipservice, [name]: value });
  };

  const SHPC = () => {
    var k = parseInt(ipservice.ipsurgeonfeeperc) / 100;
    console.log(k, "//..");
    var sf = k * 2000;
    console.log(sf, "SF");
    setSfee(sf);
  };

  const PAP = () => {
    var i = parseInt(ipservice.ippackageamountperc) / 100;
    console.log(i, "//..");
    var pf = i * 5000;
    console.log(pf, "PF");
    setPap(pf);
  };

  const grossC = () => {
    var g = 7000 * parseInt(ipservice.count);

    // console.log(i, "AAAA");
    console.log(g, "BBBB");
    setGross(g);
  };

  const NetC = () => {
    var i = parseInt(ipservice.amount);
    var NB = gross - i;
    console.log(i, NB, "BBBB");
    setNetC(NB);
  };

  useEffect(() => {
    var a = sfee === 0 ? 0 : sfee;
    var b = pap === 0 ? 0 : pap;
    var c = gross === 0 ? 0 : gross;
    var p;

    var s = parseInt(ipservice.ipfixedamount);
    // console.log(s, "jhgfdasqwewret");
    var k = parseInt(a + b + c);
    var add;
    if (s != "NaN") {
      add = parseInt(k + s);
    } else {
      add = k;
    }

    setFinalpayout(add);
  }, [sfee, pap, gross, ipservice.ipfixedamount]);

  console.log(finalpayout, "finalllllllllllllllllllllllllllll");

  const addIpTableData = () => {
    ipservice.consultation = Package;
    ipservice.iproom = IpRoom;
    ipservice.ipmodeofpayment = IpMop;
    ipservice.netperc = netC;
    ipservice.ipgrossperc = gross;
    ipservice.payout = finalpayout;
    ipservice.revenue = gross;

    console.log(ipservice, "SUBRAT");
    setIptable((prevItems) => [...prevItems, ipservice]);
    setTotalIppayout((i) => [...i, ipservice.payout]);
    setTotalIpRevenue((i) => [...i, ipservice.revenue]);
    setIpservice(initialFormtStateipservice);
    setPackage("");
    setNetC("");
    setGross("");
    setIpRoom("");
    setIpMop("");
    setFixedPay("");
    setpayout("");
    setAdhoc("");
    setAmount("");
  };
  const RefreshIpRecord = () => {
    setIpservice(initialFormtStateipservice);
    setPackage("");
    setIpRoom("room");
    setIpMop("");
    setGross("");
    setFinalpayout("");
    setNetC("");
  };

  console.log(iptable, "SUBRAT PARIDA");
  const addTableData = () => {
    // opservice.opamount = calculateData;
    // opservice.oprevenue = calculateData;
    // opservice.oppayout = calculateData;
    opservice.consultation = Consultation;
    opservice.opamount = amount;
    opservice.oprevenue = fixedPay;
    opservice.oppayout = payout;
    opservice.netamount = adhoc;
    // opservice.fixedamount=,
    // opservice.fixedpercentage=,
    setTotalnetAmount((i) => [...i, opservice.netamount]);
    setTotalpayout((i) => [...i, opservice.oppayout]);
    setTable((prevItems) => [...prevItems, opservice]);
    setOpservice(initialFormtState);
    setFixedPay("");
    setpayout("");
    setAdhoc("");
    setAmount("");
    setCalculateData(0);
  };
  const refreshopRecord = () => {
    setOpservice(initialFormtState);
    setFixedPay("");
    setpayout("");
    setAdhoc("");
    setAmount("");
  };

  console.log(totalnetAmount, "totalamount");
  console.log(totalpayout, "totalpayout");
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
  useEffect(() => {
    axios
      .get("http://localhost:8090/api/procedures/")
      .then((res) => res.data)
      .then((rows) => {
        setProcedure(rows);
      });
  }, [data]);

  const deleteRow = (row) => {
    var k = window.confirm("Are you sure want to delete this record ?");
    if (k) {
      const index = totalnetAmount.indexOf(row.netamount);
      if (index > -1) {
        totalnetAmount.splice(index, 1);
      }
      const index1 = totalpayout.indexOf(row.oppayout);
      if (index > -1) {
        totalpayout.splice(index, 1);
      }
      var data = table.filter((z) => z.consultation != row.consultation);
      setTable(data);
    }
  };

  const deleteIptableRow = (row) => {
    var k = window.confirm("Are you sure want to delete this record ?");
    if (k) {
      const index = totalipRevenue.indexOf(row.revenue);
      if (index > -1) {
        totalipRevenue.splice(index, 1);
      }
      const index1 = totalippayout.indexOf(row.payout);
      if (index > -1) {
        totalippayout.splice(index, 1);
      }
      var data = iptable.filter((z) => z.consultation != row.consultation);
      setIptable(data);
    }
  };

  const handleMCRC = (e) => {
    e.preventDefault();
    var MCRC = document.getElementById("MCRC").innerHTML;
    var dob = document.getElementById("dob").value;
    const formData = new FormData();
    formData.append("name", filename);
    formData.append("doctorId", user.user.id);
    formData.append("url", filePath);
    formData.append("docTitle", MCRC);
    formData.append("status", 1);
    formData.append("docValue", mcrcValue);
    formData.append("verificationRemark", remark);
    formData.append("docFile", mcrc);
    formData.append("registeration", selectedmcrc);
    formData.append("dob", dob);
    axios
      .post("http://localhost:8090/api/documents/uploadOne", formData)
      .then(function (response) {
        if (response.data.message == "Invalid File") {
          toast.error(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else if (response.data.message == "No File uploaded") {
          toast.warning(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else if (response.data.message == "Successfully Uploaded") {
          toast.success(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        toast("Success");
        //   setTimeout(() => {
        //     window.location.reload();
        //   }, 3000);
      });
  };
  const handlePan = (e) => {
    e.preventDefault();
    var panTitle = document.getElementById("pan").innerHTML;
    const formData = new FormData();
    formData.append("docFile", pan);
    formData.append("doctorId", user.user.id);
    formData.append("name", filename);
    formData.append("docValue", panNo);
    formData.append("docTitle", panTitle);
    formData.append("url", filePath);
    axios
      .post("http://localhost:8090/api/documents/uploadOne", formData)
      .then(function (response) {
        if (response.data.message == "Invalid File") {
          toast.error(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else if (response.data.message == "No File uploaded") {
          toast.warning(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else if (response.data.message == "Successfully Uploaded") {
          toast.success(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        toast("Success");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      });
  };
  const handleAdhaar = (e) => {
    e.preventDefault();
    var Adhaar = document.getElementById("Adhaar").innerHTML;
    const formData = new FormData();
    formData.append("docFile", adhaar);
    formData.append("doctorId", user.user.id);
    formData.append("docTitle", Adhaar);
    formData.append("name", filename);
    formData.append("url", filePath);
    formData.append("docValue", aadNo);
    axios
      .post("http://localhost:8090/api/documents/uploadOne", formData)
      .then(function (response) {
        if (response.data.message == "Invalid File") {
          toast.error(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else if (response.data.message == "No File uploaded") {
          toast.warning(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else if (response.data.message == "Successfully Uploaded") {
          toast.success(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        toast("Success");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      });
  };

  function selectedDropdownvalue(e) {
    newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }

  const handleNotice = (e) => {
    setnoticeperiod(e.target.value);
  };

  const handlelockin = (e) => {
    setlockinperiod(e.target.value);
  };
  const handleCC = (e) => {
    e.preventDefault();
    var CC = document.getElementById("CC").innerHTML;
    const formData = new FormData();
    formData.append("docFile", cc);
    formData.append("doctorId", user.user.id);
    formData.append("docTitle", CC);
    formData.append("name", filename);
    formData.append("url", filePath);
    formData.append("Bank", ccBank);
    formData.append("docValue", ccAccountNo);
    formData.append("Ifsc", ifsc);
    axios
      .post("http://localhost:8090/api/documents/uploadOne", formData)
      .then(function (response) {
        if (response.data.message == "Invalid File") {
          toast.error(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else if (response.data.message == "No File uploaded") {
          toast.warning(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else if (response.data.message == "Successfully Uploaded") {
          toast.success(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      });
  };
  const handleAdress = (e) => {
    e.preventDefault();
    var AddressProof = document.getElementById("AddressProof").innerHTML;
    const formData = new FormData();
    formData.append("docFiles", address);
    formData.append("doctorId", user.user.id);
    formData.append("docTitle", AddressProof);
    formData.append("name", filename);
    formData.append("docValue", addressProof);
    formData.append("url", filePath);
    axios
      .post("http://localhost:8090/api/documents/uploadOne", formData)
      .then(function (response) {
        if (response.data.message == "Invalid File") {
          toast.error(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else if (response.data.message == "No File uploaded") {
          toast.warning(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else if (response.data.message == "Successfully Uploaded") {
          toast.success(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        toast("Success");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      });
  };

  const handleBank = (e) => {
    e.preventDefault();
    var BankStatement = document.getElementById("BankStatement").innerHTML;
    const formData = new FormData();
    for (var x = 0; x < bank.length; x++) {
      formData.append("docFiles", bank[x]);
    }
    formData.append("doctorId", user.user.id);
    formData.append("docTitle", BankStatement);
    formData.append("name", filename);
    formData.append("url", filePath);
    axios
      .post("http://localhost:8090/api/documents/uploadMany", formData)
      .then(function (response) {
        if (response.data.message == "Invalid File") {
          toast.error(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else if (response.data.message == "No File uploaded") {
          toast.warning(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else if (response.data.message == "Successfully Uploaded") {
          toast.success(response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      });
  };
  const Confirm = (e) => {
    e.preventDefault();
    history.push("/Doctor-Profile");
  };

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, user } = userLogin;

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
                      <label for="doctor-name">
                        <h6>Name in Full</h6>
                      </label>
                      <div className="form-group">
                        <span>Dr.</span>
                        {/* <input
                          type="text"
                          id="fullname"
                          name="email-id"
                          className="form-control"
                          value={location.state.data.label}
                          readOnly
                        /> */}
                        <input
                          className="form-control form-doctor"
                          type="text"
                          placeholder="Doctor's Full Name"
                          id="fullname"
                          style={{ color: "#000000" }}
                          onChange={selectedValue}
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <label for="birthday">
                        <h6>Date of Birth</h6>
                      </label>

                      <input
                        type="date"
                        id="birthday"
                        style={{ color: "#000000" }}
                        name="birthday"
                        className="form-control"
                        onChange={selectedValue}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <label for="doctor-name">
                        <h6>Father's Name/ Husband's Name</h6>
                      </label>
                      <div className="form-group">
                        <span>Mr.</span>
                        {/* <input
                          type="text"
                          id="fullname"
                          name="email-id"
                          className="form-control"
                          value={location.state.data.label}
                          readOnly
                        /> */}
                        <input
                          className="form-control form-doctor"
                          type="text"
                          style={{ color: "#000000" }}
                          placeholder="Father/Husband Name"
                          id="fathername"
                          onChange={selectedValue}
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <label for="address">
                        <h6>Address</h6>
                      </label>
                      <textarea
                        type="text"
                        placeholder="Address"
                        style={{ color: "#000000" }}
                        id="Address"
                        className="form-control"
                        onChange={selectedValue}
                      />
                    </Col>
                    {/* <Col md={6}>
                      <label for="birthday">
                        <h6>Date of Birth</h6>
                      </label>

                      <input
                        type="date"
                        id="birthday"
                        name="birthday"
                        className="form-control"
                        onChange={selectedValue}
                      />
                    </Col> */}
                  </Row>
                  <Row>
                    <Col md={6}>
                      <label for="doctor-contact">
                        <h6>Contact Number</h6>
                      </label>
                      <div className="form-group">
                        <span>+91</span>
                        <input
                          className="form-control form-doctor"
                          type="text"
                          style={{ color: "#000000" }}
                          placeholder="Contact Number"
                          id="mobile"
                          name="doctor-contact"
                          onChange={selectedValue}
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <label for="email-id">
                        <h6>Email Address</h6>
                      </label>
                      <input
                        type="text"
                        style={{ color: "#000000" }}
                        placeholder="Email Address"
                        id="email"
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
                      <label for="desg-name">
                        <h6 style={{ color: "#000000" }}>Designation</h6>
                      </label>
                      <div className="form-group">
                        <input
                          type="text"
                          id="designationlist"
                          className="form-control"
                          value={location.state.data.designationLabel}
                          readOnly
                          style={{ color: "#000000" }}
                        />
                        {/* <select
                          className="form-control"
                          style={{ color: "black" }}
                          id="designationlist"
                          onChange={selectedValue}
                        >
                          <option>Select Designation</option>
                          {form.designationList &&
                            form.designationList.map((ele) => (
                              <option value={ele.name}>{ele.name}</option>
                            ))}
                        </select> */}
                      </div>
                    </Col>
                    <Col md={6}>
                      <label for="dept-name">
                        <h6>Department</h6>
                      </label>
                      <input
                        type="text"
                        id="departmentlist"
                        className="form-control"
                        value={location.state.data.departmentLabel}
                        readOnly
                        style={{ color: "#000000" }}
                      />
                      {/* <div className="form-group">
                        <select
                          className="form-control"
                          style={{ color: "black" }}
                          id="departmentlist"
                          onChange={selectedValue}
                        >
                          <option>Select Department</option>
                          {form.departmentList &&
                            form.departmentList.map((ele) => (
                              <option value={ele.name}>{ele.name}</option>
                            ))}
                        </select>
                      </div> */}
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <label for="business-unit" style={{ display: "none" }}>
                        <h6>Business Unit(s)</h6>
                      </label>
                      <div>
                        <input
                          type="text"
                          id="businessunit"
                          name="center-name"
                          className="form-control"
                          value={location.state.data.centerNames}
                          readOnly
                          style={{ color: "#000000", display: "none" }}
                        />

                        {/* <>
                          {l.map((item) => (
                            <label>
                              <input
                                id={item.name}
                                type="checkbox"
                                value={item.name}
                                checked={chkitem.includes(item.name)}
                                onChange={() => {
                                  handleChangeChkbox(item.name);
                                }}
                              />{" "}
                              {item.name}
                            </label>
                          ))}
                        </> */}
                        <br />
                        <>
                          <FormControl
                            component="fieldset"
                            style={{
                              marginBottom: ".5rem",
                              marginTop: "-.6rem",
                            }}
                          >
                            <h6
                              component="legend"
                              style={{ color: "black", fontSize: "15px" }}
                            >
                              Business Unit(s)
                            </h6>
                            <FormGroup aria-label="position" row>
                              {l.map((item) => (
                                <FormControlLabel
                                  value="start"
                                  control={<Checkbox color="primary" />}
                                  label={item.name}
                                  labelPlacement="start"
                                  checked={chkitem.includes(item.name)}
                                  onChange={() => {
                                    handleChangeChkbox(item.name);
                                  }}
                                />
                              ))}
                            </FormGroup>
                          </FormControl>
                        </>
                      </div>
                    </Col>
                    <Col md={6}></Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <label for="contract-term">
                        <h6>Specific Period of Contract</h6>
                      </label>
                      <div className="form-group">
                        <span>In Months</span>
                        <input
                          className="form-control form-doctor"
                          type="number"
                          style={{ color: "#000000" }}
                          placeholder="Contract Term"
                          id="contractlength"
                          name="contract-term"
                          onChange={selectedValue}
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <label for="doj">
                        <h6>Joining Date</h6>
                      </label>
                      <input
                        type="date"
                        id="doj"
                        style={{ color: "#000000" }}
                        name="doj"
                        className="form-control"
                        onChange={selectedValue}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      {" "}
                      <label for="pg-degree">
                        <h6>Highest PG Degree</h6>
                      </label>
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Highest PG Degree"
                          id="pgdegree"
                          style={{ color: "#000000" }}
                          onChange={selectedValue}
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      <label for="pg-totalexp">
                        <h6>Post PG Degree Total Experience</h6>
                      </label>
                      <div className="form-group">
                        <span>In Months</span>
                        <input
                          className="form-control form-doctor"
                          type="number"
                          placeholder="Post PG Degree Total Experience"
                          id="pgtotalexp"
                          style={{ color: "#000000" }}
                          onChange={selectedValue}
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      {" "}
                      <label for="pg-relexp">
                        <h6>Post PG Degree Relevant Experience</h6>
                      </label>
                      <div className="form-group">
                        <span>In Months</span>
                        <input
                          className="form-control form-doctor"
                          type="number"
                          style={{ color: "#000000" }}
                          placeholder="Post PG Degree Relevant Experience"
                          id="pgrelevantexp"
                          onChange={selectedValue}
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      {" "}
                      <label for="pg-relexp">
                        <h6>Medical Degree</h6>
                      </label>
                      <div className="form-group">
                        <input
                          className="form-control form-doctor"
                          type="text"
                          style={{ color: "#000000" }}
                          placeholder="Medical Degree"
                          id="medicaldegree"
                          onChange={selectedValue}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      {" "}
                      <label for="pg-degree">
                        <h6>Notice Period</h6>
                      </label>
                      <div className="form-group">
                        <select
                          className="form-control"
                          style={{ color: "black" }}
                          id="noticeperiod"
                          // value={noticeperiod}
                          onChange={selectedDropdownvalue}
                        >
                          <option>Select Notice Period</option>

                          <option value="15 days">15 days</option>
                          <option value="30 days">30 days</option>
                          <option value="45 days">45 days</option>
                          <option value="60 days">60 days</option>
                          <option value="75 days">75 days</option>
                          <option value="90 days">90 days</option>
                        </select>
                      </div>
                    </Col>
                    <Col md={6}>
                      <label for="pg-totalexp">
                        <h6>Lock'n Period</h6>
                      </label>
                      <div className="form-group">
                        <select
                          className="form-control"
                          style={{ color: "black" }}
                          id="lockinperiod"
                          // value={lockinperiod}
                          onChange={selectedDropdownvalue}
                        >
                          <option>Select Lock'n Period</option>

                          <option value="15 days">15 days</option>
                          <option value="30 days">30 days</option>
                          <option value="45 days">45 days</option>
                          <option value="60 days">60 days</option>
                          <option value="75 days">75 days</option>
                          <option value="90 days">90 days</option>
                        </select>
                      </div>
                    </Col>
                    <Col md={6}>
                      {" "}
                      <label for="pg-relexp">
                        <h6>Indemnity insurance - value</h6>
                      </label>
                      <div className="form-group">
                        <span>In Rs</span>
                        <input
                          className="form-control form-doctor"
                          type="number"
                          placeholder="Indemnity insurance"
                          id="indemnityvalue"
                          style={{ color: "#000000" }}
                          value={indemnityvalue}
                          name="indemnityvalue"
                          onChange={handleindemnityvalue}
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      {" "}
                      <label for="pg-relexp">
                        <h6> Indemnity insurance - Expiry </h6>
                      </label>
                      <div className="form-group">
                        <input
                          className="form-control form-doctor"
                          type="date"
                          placeholder="Post PG Degree Relevant Experience"
                          id="indemnityexpiry"
                          style={{ color: "#000000" }}
                          value={indemnityexpiry}
                          name="indemnityexpiry"
                          onChange={handleindemnityexpiry}
                        />
                      </div>
                    </Col>
                  </Row>

                  <hr style={{ backgroundColor: "black", height: "1px" }} />
                  <Row>
                    <Col md={12}>
                      <h5>Other Information</h5>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col md={6}>
                      <label for="pg-degree">
                        <h6> State of Registration</h6>
                      </label>
                      <select
                        name="state"
                        id="selectedmcrc"
                        className="form-control"
                        style={{ color: "#000000" }}
                        onChange={selectedDropdownvalue}
                        // value={selectedmcrc}
                        // onChange={(e) => setSelectedmcrc(e.target.value)}
                      >
                        <option value="" disabled selected hidden>
                          Select the state of registration
                        </option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Andaman and Nicobar Islands">
                          Andaman and Nicobar Islands
                        </option>
                        <option value="Arunachal Pradesh">
                          Arunachal Pradesh
                        </option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Dadar and Nagar Haveli">
                          Dadar and Nagar Haveli
                        </option>
                        <option value="Daman and Diu">Daman and Diu</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Lakshadweep">Lakshadweep</option>
                        <option value="Puducherry">Puducherry</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">
                          Himachal Pradesh
                        </option>
                        <option value="Jammu and Kashmir">
                          Jammu and Kashmir
                        </option>
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

                    <Col md={6}>
                      {" "}
                      <label for="pg-degree">
                        <h6> Medical Council Registration Certificate No</h6>
                      </label>
                      <div className="form-group">
                        <input
                          type="text"
                          value={mcrcValue}
                          id="medicalcertno"
                          onChange={selectedValue}
                          style={{ color: "#000000" }}
                          className="form-control"
                          placeholder="Medical Council Registration Certificate No"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      {" "}
                      <label for="pg-degree">
                        <h6>PAN Card No</h6>
                      </label>
                      <div className="form-group">
                        <input
                          type="text"
                          value={panNo}
                          style={{ color: "#000000" }}
                          id="pancardno"
                          onChange={selectedValue}
                          className="form-control"
                          placeholder="PAN Number"
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      {" "}
                      <label for="pg-degree">
                        <h6>AADHAR Card No</h6>
                      </label>
                      <div className="form-group">
                        <input
                          type="text"
                          style={{ color: "#000000" }}
                          value={aadNo}
                          id="aadhaarno"
                          onChange={selectedValue}
                          className="form-control"
                          placeholder="AADHAR Number"
                        />
                      </div>
                    </Col>
                    <Col md={6}>
                      {" "}
                      <label for="pg-degree">
                        <h6>Bank Details</h6>
                      </label>
                      <div className="form-group">
                        <select
                          className="form-control"
                          style={{ color: "black" }}
                          id="BankName"
                          onChange={selectedDropdownvalue}
                        >
                          <option value="0">Select Bank</option>
                          <option value="Axis Bank">AXIS Bank</option>
                          <option value="HDFC Bank">HDFC Bank</option>
                          <option value="ICICI Bank">ICICI Bank</option>
                          <option value="YES Bank">YES Bank</option>
                          <option value="SBI Bank">SBI Bank</option>
                          <option value="CANARA Bank">CANARA Bank</option>
                        </select>
                        <input
                          style={{ marginLeft: "5px", color: "black" }}
                          type="text"
                          id="bankaccountno"
                          name="aad-num"
                          value={accountno}
                          onChange={selectedValue}
                          className="form-control"
                          placeholder="Account No"
                        />
                        <input
                          style={{ marginLeft: "5px", color: "black" }}
                          type="text"
                          id="ifsccode"
                          name="aad-num"
                          value={bankifsc}
                          onChange={selectedValue}
                          className="form-control"
                          placeholder="IFSC Code"
                        />
                      </div>
                    </Col>
                  </Row>

                  {/* <form encType="multipart/form-data">
                    <br />
                    <Card style={formStyle}>
                      <Card.Body style={bodyStyle}>
                        <Table style={{ width: "100%" }} borderless>
                          <thead>
                            <tr
                              style={{
                                textAlign: "center",
                                borderBottom: "1px solid rgb(200, 200, 200)",
                              }}
                            >
                              <th className="col-1">#</th>
                              <th className="col-2">Document to upload</th>
                              <th className="col-2">Document Number</th>
                              <th className="col-3">Upload</th>
                              <th className="col-3">Additional Information</th>
                              <th className="col-1">Status</th>
                              <th className="col-1">Submit</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              style={{
                                borderBottom: "1px solid rgb(200, 200, 200)",
                              }}
                            >
                              <td>2.</td>
                              <td id="MCRC">
                                Medical Council Registration Certificate
                              </td>
                              <td>
                                <input
                                  type="text"
                                  value={mcrcValue}
                                  onChange={(e) => setMcrcValue(e.target.value)}
                                  className="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="file"
                                  id={2}
                                  name="mcrc"
                                  onChange={fileHandler1}
                                  className="form-control"
                                />
                              </td>
                              <td>
                                <Row>
                                  <Col md={12}>
                                    <select
                                      name="state"
                                      id="state"
                                      className="form-control"
                                      value={selectedmcrc}
                                      onChange={(e) =>
                                        setSelectedmcrc(e.target.value)
                                      }
                                    >
                                      <option value="" disabled selected hidden>
                                        Select the state of registration
                                      </option>
                                      <option value="Andhra Pradesh">
                                        Andhra Pradesh
                                      </option>
                                      <option value="Andaman and Nicobar Islands">
                                        Andaman and Nicobar Islands
                                      </option>
                                      <option value="Arunachal Pradesh">
                                        Arunachal Pradesh
                                      </option>
                                      <option value="Assam">Assam</option>
                                      <option value="Bihar">Bihar</option>
                                      <option value="Chandigarh">
                                        Chandigarh
                                      </option>
                                      <option value="Chhattisgarh">
                                        Chhattisgarh
                                      </option>
                                      <option value="Dadar and Nagar Haveli">
                                        Dadar and Nagar Haveli
                                      </option>
                                      <option value="Daman and Diu">
                                        Daman and Diu
                                      </option>
                                      <option value="Delhi">Delhi</option>
                                      <option value="Lakshadweep">
                                        Lakshadweep
                                      </option>
                                      <option value="Puducherry">
                                        Puducherry
                                      </option>
                                      <option value="Goa">Goa</option>
                                      <option value="Gujarat">Gujarat</option>
                                      <option value="Haryana">Haryana</option>
                                      <option value="Himachal Pradesh">
                                        Himachal Pradesh
                                      </option>
                                      <option value="Jammu and Kashmir">
                                        Jammu and Kashmir
                                      </option>
                                      <option value="Jharkhand">
                                        Jharkhand
                                      </option>
                                      <option value="Karnataka">
                                        Karnataka
                                      </option>
                                      <option value="Kerala">Kerala</option>
                                      <option value="Madhya Pradesh">
                                        Madhya Pradesh
                                      </option>
                                      <option value="Maharashtra">
                                        Maharashtra
                                      </option>
                                      <option value="Manipur">Manipur</option>
                                      <option value="Meghalaya">
                                        Meghalaya
                                      </option>
                                      <option value="Mizoram">Mizoram</option>
                                      <option value="Nagaland">Nagaland</option>
                                      <option value="Odisha">Odisha</option>
                                      <option value="Punjab">Punjab</option>
                                      <option value="Rajasthan">
                                        Rajasthan
                                      </option>
                                      <option value="Sikkim">Sikkim</option>
                                      <option value="Tamil Nadu">
                                        Tamil Nadu
                                      </option>
                                      <option value="Telangana">
                                        Telangana
                                      </option>
                                      <option value="Tripura">Tripura</option>
                                      <option value="Uttar Pradesh">
                                        Uttar Pradesh
                                      </option>
                                      <option value="Uttarakhand">
                                        Uttarakhand
                                      </option>
                                      <option value="West Bengal">
                                        West Bengal
                                      </option>
                                    </select>
                                  </Col>
                                  <Col md={12}>
                                    <input
                                      type="date"
                                      id="dob"
                                      name="birthday"
                                      className="form-control"
                                    />
                                  </Col>
                                </Row>
                              </td>
                              <td id="status">
                                {!mcrc ? "Upload File" : "Uploaded"}
                              </td>
                              <td>
                                {" "}
                                <button
                                  className="btn btn-primary"
                                  type="submit"
                                  disabled={!mcrc}
                                  onClick={handleMCRC}
                                >
                                  {" "}
                                  Submit
                                </button>
                              </td>
                            </tr>
                            <tr
                              style={{
                                borderBottom: "1px solid rgb(200, 200, 200)",
                              }}
                            >
                              <td>3.</td>
                              <td id="pan">PAN Card</td>
                              <td>
                                <input
                                  type="text"
                                  value={panNo}
                                  onChange={(e) => setpanNo(e.target.value)}
                                  className="form-control"
                                  placeholder="PAN Number"
                                />
                              </td>
                              <td>
                                <input
                                  type="file"
                                  onChange={fileHandler2}
                                  id={3}
                                  name="pan"
                                  className="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  id="resume"
                                  name="resume"
                                  className="form-control"
                                  disabled={!pan}
                                />
                              </td>
                              <td>{!pan ? "Upload File" : "Uploaded"}</td>
                              <td>
                                {" "}
                                <button
                                  className="btn btn-primary"
                                  type="submit"
                                  disabled={!pan}
                                  onClick={handlePan}
                                >
                                  {" "}
                                  Submit
                                </button>
                              </td>
                            </tr>
                            <tr
                              style={{
                                borderBottom: "1px solid rgb(200, 200, 200)",
                              }}
                            >
                              <td>4.</td>
                              <td id="Adhaar">AADHAR Card</td>
                              <td>
                                <input
                                  type="text"
                                  value={aadNo}
                                  onChange={(e) => setAadNo(e.target.value)}
                                  className="form-control"
                                  placeholder="AADHAR Number"
                                />
                              </td>
                              <td>
                                <input
                                  type="file"
                                  id={4}
                                  onChange={fileHandler3}
                                  name="adhaar"
                                  className="form-control"
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  id="resume"
                                  name="resume"
                                  className="form-control"
                                  disabled={!adhaar}
                                />
                              </td>
                              <td>{!adhaar ? "Upload File" : "Uploaded"}</td>
                              <td>
                                {" "}
                                <button
                                  className="btn btn-primary"
                                  type="submit"
                                  disabled={!adhaar}
                                  onClick={handleAdhaar}
                                >
                                  {" "}
                                  Submit
                                </button>
                              </td>
                            </tr>

                            <tr
                              style={{
                                borderBottom: "1px solid rgb(200, 200, 200)",
                              }}
                            >
                              <td>6.</td>
                              <td id="AddressProof">Address Proof</td>
                              <td>
                                <input
                                  type="text"
                                  name="aadnum"
                                  id="aad-num"
                                  className="form-control"
                                  placeholder=""
                                  disabled={!address}
                                />
                              </td>
                              <td>
                                <input
                                  type="file"
                                  onChange={fileHandler5}
                                  name="adressproof"
                                  className="form-control"
                                  multiple
                                />
                              </td>
                              <td>
                                <textarea
                                  value={addressProof}
                                  onChange={(e) =>
                                    setAddressProof(e.target.value)
                                  }
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Address as mentioned in Proof"
                                />
                              </td>
                              <td>{!address ? "Upload File" : "Uploaded"}</td>
                              <td>
                                {" "}
                                <button
                                  className="btn btn-primary"
                                  type="submit"
                                  disabled={!address}
                                  onClick={handleAdress}
                                >
                                  {" "}
                                  Submit
                                </button>
                              </td>
                            </tr>
                             

                            <tr
                              style={{
                                borderBottom: "1px solid rgb(200, 200, 200)",
                              }}
                            >
                              <td>12.</td>
                              <td id="BankStatement">
                                Bank Statement for 6 months
                              </td>
                              <td>
                                <input
                                  type="text"
                                  id="aad-num"
                                  name="aad-num"
                                  className="form-control"
                                  disabled={!bank}
                                />
                              </td>
                              <td>
                                <input
                                  type="file"
                                  id={12}
                                  onChange={fileHandler11}
                                  name="bank"
                                  className="form-control"
                                  multiple
                                />
                              </td>
                              <td>
                                <input
                                  type="text"
                                  id="resume"
                                  name="resume"
                                  className="form-control"
                                  disabled={!bank}
                                />
                              </td>
                              <td>{!bank ? "Upload File" : "Uploaded"}</td>
                              <td>
                                {" "}
                                <button
                                  className="btn btn-primary"
                                  type="submit"
                                  disabled={!bank}
                                  onClick={handleBank}
                                >
                                  {" "}
                                  Submit
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </Card.Body>
                    </Card>
                  </form> */}
                  <hr style={{ backgroundColor: "black", height: "1px" }} />
                  <Row>
                    <Col md={12}>
                      <h5>Contract Terms and Details</h5>
                    </Col>
                  </Row>
                  <br />

                  <Row>
                    <Col md={12}>
                      <div className={classes.root}>
                        <AppBar
                          position="static"
                          style={{
                            backgroundColor: "#ffffff1f",
                            color: "black",
                          }}
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
                              disabled={table.length > 0}
                            />
                            <LinkTab
                              label=" Out-Patient Services"
                              href="/trash"
                              {...a11yProps(1)}
                              disabled={disable}
                            />
                            <LinkTab
                              label=" In-Patient Services"
                              href="/spam"
                              {...a11yProps(2)}
                              disabled={disable}
                            />
                          </Tabs>
                        </AppBar>
                        <TabPanel value={value} index={0}>
                          <Row>
                            <Col md={6}>
                              <label for="ctc-month">
                                <h6>Professional Fee /Month</h6>
                              </label>
                              <TextField
                                variant="outlined"
                                name="ctcmonth"
                                label="Professional Fee /Month"
                                value={ctcpermonth}
                                onChange={handleInputChangeForCtc}
                                // onBlur={unitCalculation}
                                size="small"
                                fullWidth
                              />
                            </Col>
                            <Col md={2}>
                              <br />
                              <Button
                                variant="contained"
                                color="secondary"
                                style={{
                                  height: "50%",
                                  marginTop: "10px",
                                  padding: "3px",
                                  width: "60%",
                                }}
                                startIcon={<AddIcon />}
                                fullWidth
                                onClick={makeVisible}
                              >
                                ADD
                              </Button>
                            </Col>
                          </Row>
                          {visible ? (
                            <Row style={{ marginTop: "10px" }}>
                              <Col md={6}>
                                <label for="ctc-month">
                                  <h6>Additional Fee Name</h6>
                                </label>
                                <TextField
                                  variant="outlined"
                                  name="additionalfeename"
                                  label="Additional Fee Name"
                                  value={additionalfeename}
                                  onChange={handleInputChangeForAddName}
                                  // onBlur={unitCalculation}
                                  size="small"
                                  fullWidth
                                />
                              </Col>
                              <Col md={6}>
                                <label for="ctc-month">
                                  <h6>Additonal Fee value</h6>
                                </label>
                                <TextField
                                  variant="outlined"
                                  name="additionalfee"
                                  label="Additonal Fee value"
                                  value={additionalfee}
                                  onChange={handleInputChangeFoAddVal}
                                  // onBlur={unitCalculation}
                                  size="small"
                                  fullWidth
                                />
                              </Col>
                            </Row>
                          ) : (
                            ""
                          )}
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                          <Grid container spacing={1}>
                            <Grid item xs={12}>
                              <div className="form-group">
                                <select
                                  className="form-control"
                                  style={{ color: "black" }}
                                  id="Consultation"
                                  onChange={getProcedureValue}
                                  // onChange={selectedConsulataion}
                                  // value={opservice.consultation}
                                >
                                  <option>Select Procedure</option>
                                  {procedure &&
                                    procedure.map((ele) => (
                                      <option key={ele.id} value={ele.name}>
                                        {ele.name}
                                      </option>
                                    ))}
                                </select>
                              </div>
                            </Grid>
                            <Grid item xs={3}>
                              <TextField
                                variant="outlined"
                                name="opperunitcharge"
                                label="Per Unit Charge"
                                value={opservice.opperunitcharge}
                                onChange={handleInputChange}
                                onBlur={unitCalculation}
                                size="small"
                                fullWidth
                              />
                            </Grid>
                            <Grid item xs={3}>
                              <TextField
                                variant="outlined"
                                name="opcount"
                                label="Count"
                                value={opservice.opcount}
                                onChange={handleInputChange}
                                onBlur={countCalculation}
                                size="small"
                                fullWidth
                              />
                            </Grid>
                            <Grid item xs={3}>
                              <TextField
                                variant="outlined"
                                name="opamount"
                                label="Gross"
                                value={amount}
                                onChange={handleInputChange}
                                // onBlur={fixedpayCalculation}
                                size="small"
                                fullWidth
                              />
                            </Grid>
                            <Grid item xs={3}>
                              <TextField
                                variant="outlined"
                                name="opadhoc"
                                label="Adhoc Deduction"
                                value={opservice.opadhoc}
                                onChange={handleInputChange}
                                onBlur={adhocCalculation}
                                size="small"
                                fullWidth
                              />
                            </Grid>
                            <Grid item xs={3}>
                              <TextField
                                variant="outlined"
                                name="fixedpercentage"
                                label="Fixed Percentage"
                                value={opservice.fixedpercentage}
                                onChange={handleInputChange}
                                size="small"
                                fullWidth
                              />
                            </Grid>

                            <Grid item xs={3}>
                              <TextField
                                variant="outlined"
                                name="fixedamount"
                                label="Fixed Amount"
                                value={opservice.fixedamount}
                                onChange={handleInputChange}
                                onBlur={payoutCalculation}
                                size="small"
                                fullWidth
                              />
                            </Grid>

                            <Grid item xs={3}>
                              <TextField
                                variant="outlined"
                                name="netamount"
                                label="Net"
                                value={adhoc}
                                onChange={handleInputChange}
                                onBlur={fixedpayCalculation}
                                size="small"
                                fullWidth
                              />
                            </Grid>

                            <Grid item xs={3}>
                              <TextField
                                variant="outlined"
                                name="oppayout"
                                label="Payout"
                                // value={opservice.oppayout}
                                value={payout}
                                onChange={handleInputChange}
                                size="small"
                                fullWidth
                              />
                            </Grid>
                            <Grid item xs={3}>
                              <Button
                                variant="contained"
                                color="primary"
                                style={{ height: "100%" }}
                                startIcon={<AddIcon />}
                                // fullWidth
                                onClick={addTableData}
                              >
                                ADD
                              </Button>
                              <Button
                                variant="contained"
                                color="secondary"
                                style={{ height: "100%", marginLeft: "18px" }}
                                startIcon={<RefreshIcon />}
                                // fullWidth
                                onClick={refreshopRecord}
                              >
                                REFRESH
                              </Button>
                            </Grid>
                            <Grid item xs={12}>
                              {table.length > 0 ? (
                                <Paper className={tables.root}>
                                  <MaterialTable
                                    columns={[
                                      {
                                        title: "Procedure Name",
                                        field: "consultation",
                                      },
                                      {
                                        title: "Fixed Amount",
                                        field: "fixedamount",
                                      },
                                      {
                                        title: "Fixed Percentage",
                                        field: "fixedpercentage",
                                      },
                                      {
                                        title: "Count",
                                        field: "opcount",
                                      },
                                      {
                                        title: "Per Unit Charge",
                                        field: "opperunitcharge",
                                      },
                                      {
                                        title: "Revenue",
                                        field: "netamount",
                                      },
                                      // { title: "Revenue", field: "oprevenue" },
                                      { title: "Payout", field: "oppayout" },
                                    ]}
                                    actions={[
                                      {
                                        icon: "delete",
                                        tooltip: "Delete",
                                        iconProps: {
                                          style: {
                                            fontSize: "24px",
                                            color: "#f55151",
                                          },
                                        },
                                        onClick: (event, row) => deleteRow(row),
                                      },
                                    ]}
                                    data={table}
                                    options={{
                                      // filtering: true,
                                      sorting: true,
                                      exportButton: true,
                                      pageSize: 5,
                                      pageSizeOptions: [
                                        5, 10, 50, 100, 200, 500,
                                      ],
                                      search: true,
                                    }}
                                    title="Out-Patient Service"
                                  />
                                </Paper>
                              ) : (
                                ""
                              )}
                            </Grid>
                          </Grid>
                          {totalpayout && totalpayout.length > 0 ? (
                            <Grid
                              xs={12}
                              style={{
                                float: "right",
                                marginTop: "20px",
                                color: "black",
                              }}
                            >
                              Total Payout:{" "}
                              {totalpayout.reduce((a, b) => a + b)}
                            </Grid>
                          ) : (
                            ""
                          )}
                          {totalnetAmount && totalnetAmount.length > 0 ? (
                            <Grid
                              xs={12}
                              style={{
                                float: "right",
                                marginTop: "20px",
                                color: "black",
                                marginRight: "20px",
                              }}
                            >
                              Total Revenue:{" "}
                              {totalnetAmount.reduce((a, b) => a + b)}
                            </Grid>
                          ) : (
                            ""
                          )}
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                          <label for="con-rate">
                            <h6>Packages</h6>
                          </label>
                          <Grid Container spacing="1">
                            <Grid item xs={12}>
                              <div className="form-group">
                                <select
                                  className="form-control"
                                  style={{ color: "black" }}
                                  id="Package"
                                  onChange={getPackageValue}
                                >
                                  <option>Select Procedure</option>
                                  {procedure &&
                                    procedure.map((ele) => (
                                      <option key={ele.id} value={ele.name}>
                                        {ele.name}
                                      </option>
                                    ))}
                                </select>
                              </div>
                            </Grid>
                          </Grid>

                          <Grid container spacing={1}>
                            <Grid item xs={6}>
                              <div className="form-group">
                                <select
                                  className="form-control"
                                  style={{ color: "black" }}
                                  id="IpRoom"
                                  onChange={getIpRoomValue}
                                >
                                  <option value="room">Select Room</option>
                                  <option value="Deluxe">Deluxe</option>
                                  <option value="General">General</option>
                                </select>
                              </div>
                            </Grid>
                            <Grid item xs={6}>
                              <div className="form-group">
                                <select
                                  className="form-control"
                                  style={{ color: "black" }}
                                  id="IpMop"
                                  onChange={getIpMopValue}
                                >
                                  <option>Select MOP</option>
                                  <option value="Card">Card</option>
                                  <option value="Cash">Cash</option>
                                </select>
                              </div>
                            </Grid>
                            <Grid item xs={3}>
                              <TextField
                                variant="outlined"
                                name="ipsurgeonfeeperc"
                                label="Surgeon Fee Percentage"
                                value={ipservice.ipsurgeonfeeperc}
                                onChange={handleIpserviceInputChange}
                                onBlur={SHPC}
                                size="small"
                                fullWidth
                              />
                            </Grid>
                            <Grid item xs={3}>
                              <TextField
                                variant="outlined"
                                name="ippackageamountperc"
                                label=" Package Amount Percentage"
                                value={ipservice.ippackageamountperc}
                                onChange={handleIpserviceInputChange}
                                onBlur={PAP}
                                size="small"
                                fullWidth
                              />
                            </Grid>
                            <Grid item xs={3}>
                              <TextField
                                variant="outlined"
                                name="count"
                                label="Count"
                                onBlur={grossC}
                                // value={opservice.oppayout}
                                value={ipservice.count}
                                onChange={handleIpserviceInputChange}
                                size="small"
                                fullWidth
                              />
                            </Grid>
                            <Grid item xs={3}>
                              <TextField
                                variant="outlined"
                                name="ipgrossperc"
                                label="Gross Percentage"
                                value={gross}
                                // value={ipservice.ipgrossperc}
                                onChange={handleIpserviceInputChange}
                                size="small"
                                fullWidth
                              />
                            </Grid>
                            <Grid item xs={3}>
                              <TextField
                                variant="outlined"
                                name="amount"
                                label="Adhoc Deduction"
                                onBlur={NetC}
                                // value={opservice.oppayout}
                                value={ipservice.amount}
                                onChange={handleIpserviceInputChange}
                                size="small"
                                fullWidth
                              />
                            </Grid>
                            <Grid item xs={3}>
                              <TextField
                                variant="outlined"
                                name="netperc"
                                label="Net Percentage"
                                value={netC}
                                onChange={handleIpserviceInputChange}
                                // onBlur={fixedpayCalculation}
                                size="small"
                                fullWidth
                              />
                            </Grid>

                            <Grid item xs={3}>
                              <TextField
                                variant="outlined"
                                name="ipfixedamount"
                                label="Fixed Amount"
                                value={ipservice.ipfixedamount}
                                onChange={handleIpserviceInputChange}
                                // onBlur={fixedpayCalculation}
                                size="small"
                                fullWidth
                              />
                            </Grid>

                            <Grid item xs={3}>
                              <TextField
                                variant="outlined"
                                name="revenue"
                                label="Revenue"
                                // value={opservice.oppayout}
                                value={ipservice.revenue}
                                onChange={handleIpserviceInputChange}
                                size="small"
                                fullWidth
                              />
                            </Grid>
                            <Grid item xs={3}>
                              <TextField
                                variant="outlined"
                                name="payout"
                                label="Payout"
                                value={finalpayout}
                                // value={ipservice.payout}
                                onChange={handleIpserviceInputChange}
                                size="small"
                                fullWidth
                              />
                            </Grid>
                            <Grid item xs={3}>
                              <Button
                                variant="contained"
                                color="primary"
                                style={{ height: "100%" }}
                                startIcon={<AddIcon />}
                                onClick={addIpTableData}
                              >
                                ADD
                              </Button>
                              <Button
                                variant="contained"
                                color="secondary"
                                style={{ height: "100%", marginLeft: "18px" }}
                                startIcon={<RefreshIcon />}
                                onClick={RefreshIpRecord}
                              >
                                REFRESH
                              </Button>
                            </Grid>
                            <Grid item xs={12}>
                              {iptable.length > 0 ? (
                                <Paper className={tables.root}>
                                  <MaterialTable
                                    columns={[
                                      {
                                        title: "Package Name",
                                        field: "consultation",
                                      },
                                      {
                                        title: "Room Type",
                                        field: "iproom",
                                      },
                                      {
                                        title: "Mode of Payment",
                                        field: "ipmodeofpayment",
                                      },
                                      {
                                        title: "Fixed Amount",
                                        field: "ipfixedamount",
                                      },
                                      {
                                        title: "Surgeon Fee Percentage",
                                        field: "ipsurgeonfeeperc",
                                      },
                                      {
                                        title: "Package Amount Percentage",
                                        field: "ippackageamountperc",
                                      },
                                      {
                                        title: "Gross Percentage",
                                        field: "ipgrossperc",
                                      },
                                      {
                                        title: "Net Percentage",
                                        field: "netperc",
                                      },
                                      {
                                        title: "Amount",
                                        field: "amount",
                                      },
                                      {
                                        title: "Count",
                                        field: "count",
                                      },
                                      { title: "Revenue", field: "revenue" },
                                      { title: "Payout", field: "payout" },
                                    ]}
                                    actions={[
                                      {
                                        icon: "delete",
                                        tooltip: "Delete",
                                        iconProps: {
                                          style: {
                                            fontSize: "24px",
                                            color: "#f55151",
                                          },
                                        },
                                        onClick: (event, row) =>
                                          deleteIptableRow(row),
                                      },
                                    ]}
                                    data={iptable}
                                    options={{
                                      sorting: true,
                                      exportButton: true,
                                      pageSize: 5,
                                      pageSizeOptions: [
                                        5, 10, 50, 100, 200, 500,
                                      ],
                                      search: true,
                                    }}
                                    title="Out-Patient Service"
                                  />
                                </Paper>
                              ) : (
                                ""
                              )}
                            </Grid>
                          </Grid>
                          {totalippayout && totalippayout.length > 0 ? (
                            <Grid
                              xs={12}
                              style={{
                                float: "right",
                                marginTop: "20px",
                                color: "black",
                              }}
                            >
                              Total Payout:{" "}
                              {totalippayout.reduce((a, b) => a + b)}
                            </Grid>
                          ) : (
                            ""
                          )}
                          {totalipRevenue && totalipRevenue.length > 0 ? (
                            <Grid
                              xs={12}
                              style={{
                                float: "right",
                                marginTop: "20px",
                                color: "black",
                                marginRight: "20px",
                              }}
                            >
                              Total Revenue:{" "}
                              {totalipRevenue.reduce((a, b) => a + b)}
                            </Grid>
                          ) : (
                            ""
                          )}
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
        <Backdrop
          className={backClasses.backdrop}
          open={backDropOpen}
          // onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    </>
  );
}

export default DoctorForm;
