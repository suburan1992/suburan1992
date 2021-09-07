import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Row, Col, Table, ProgressBar } from "react-bootstrap";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import axios from "axios";
import Timeline from "../../Components/Timeline";
import Message from "../../Components/Message";
import Footer from "../../Components/Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

function UploadDocuments({ history }) {
  const [file, setFile] = useState();
  const [resume, setresume] = useState();
  const [mcrc, setmcrc] = useState();
  const [pan, setpan] = useState();
  const [adhaar, setadhaar] = useState();
  const [cc, setcc] = useState();
  const [address, setaddress] = useState();
  const [payslip, setpayslip] = useState();
  const [mbbs, setmbbs] = useState();
  const [pg, setpg] = useState();
  const [photo, setphoto] = useState();
  const [form16, setform16] = useState();
  const [bank, setbank] = useState();
  const [iic, setiic] = useState();
  const [docValue, setdocValue] = useState();
  const [mcrcValue, setMcrcValue] = useState();
  const [bankstateval, setBankstateValue] = useState();
  const [bankval, setBankValue] = useState();
  const [pgval, setPgValue] = useState();
  const [photoval, setphotoValue] = useState();
  const [iicval, setiicValue] = useState();

  const [filename, setFilename] = useState("");
  const [list, setList] = useState([]);
  const [form16val, setForm16val] = useState("");
  const [filePath, setfilePath] = useState();
  const [remark, setRemark] = useState();
  const [selectedmcrc, setSelectedmcrc] = useState();
  const [aadNo, setAadNo] = useState();
  const [panNo, setpanNo] = useState();
  const [ccBank, setccBank] = useState();
  const [ccAccountNo, setccAccountNo] = useState();
  const [ifsc, setifsc] = useState();
  const [addressProof, setAddressProof] = useState();

  const [payslipno, setpayslipno] = useState();
  const [mbbsCertificate, setmbbsCertificate] = useState();
  const [uploadData, setUploadData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [resumestatus, setResumeStatus] = useState(false);
  const [rowdata, setRoWData] = useState(0);

  const [step, setStep] = useState(1);
  const back = useRef(null);
  const next = useRef(null);
  const reviewAndSubmit = useRef(null);

  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), additionalInfo: "" },
  ]);
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, user } = userLogin;
  // const [progress, setProgress] = useState()
  // var newdata = []
  //   function onFileUpload(event) {
  //     event.preventDefault();
  //     newdata = { ...data }
  //     newdata[event.target.name] =event.target.files

  //     setData(newdata)
  //   }
  const fileHandler = async (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
    setfilePath(e.target.value);
  };
  const fileHandler1 = (e) => {
    setmcrc(e.target.files[0]);
    setfilePath(e.target.value);
    setFilename(e.target.files[0].name);
  };
  const fileHandler2 = (e) => {
    setpan(e.target.files[0]);
    setfilePath(e.target.value);
    setFilename(e.target.files[0].name);
  };
  const fileHandler3 = (e) => {
    setadhaar(e.target.files[0]);
    setfilePath(e.target.value);
    setFilename(e.target.files[0].name);
  };
  const fileHandler4 = (e) => {
    setcc(e.target.files[0]);
    setfilePath(e.target.value);
    setFilename(e.target.files[0].name);
  };
  const fileHandler5 = (e) => {
    setaddress(e.target.files[0]);
    setfilePath(e.target.value);
    setFilename(e.target.files[0].name);
  };
  const fileHandler6 = (e) => {
    setpayslip(e.target.files);
    setfilePath(e.target.value);
    setFilename(e.target.files.name);
  };
  const fileHandler7 = (e) => {
    setmbbs(e.target.files[0]);
    setfilePath(e.target.value);
    setFilename(e.target.files[0].name);
  };
  const fileHandler8 = (e) => {
    setpg(e.target.files);
    setfilePath(e.target.value);
    setFilename(e.target.files.name);
  };
  const fileHandler9 = (e) => {
    setphoto(e.target.files[0]);
    setfilePath(e.target.value);
    setFilename(e.target.files[0].name);
  };
  const fileHandler10 = (e) => {
    setform16(e.target.files);
    setfilePath(e.target.value);
    setFilename(e.target.files.name);
  };
  const fileHandler11 = (e) => {
    setbank(e.target.files);
    setfilePath(e.target.value);
    setFilename(e.target.files.name);
  };

  const fileHandler12 = (e) => {
    setiic(e.target.files[0]);
    setfilePath(e.target.value);
    setFilename(e.target.files[0].name);
  };

  useEffect(() => {
    console.log(user.user.id, " user id ");
    axios
      .get("http://localhost:8090/api/onboard/" + user.user.id)
      .then((res) => {
        setRoWData(res.data.onBoardData[0].id);
      });
  }, []);

  const handleSubmit = (e, onUploadProgress) => {
    e.preventDefault();
    var resume = document.getElementById("Resume").innerHTML;
    const formData = new FormData();
    formData.append("name", filename);
    formData.append("doctorId", user.user.id);
    formData.append("url", filePath);
    formData.append("docTitle", resume);
    formData.append("status", 1);
    formData.append("docValue", docValue);
    formData.append("verificationRemark", remark);
    formData.append("docFile", file);
    setRefresh(false);
    axios
      .post("http://localhost:8090/api/documents/uploadOne", formData)
      .then(function (response) {
        setResumeStatus(true);
        setRefresh(true);
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
    setRefresh(false);
    axios
      .post("http://localhost:8090/api/documents/uploadOne", formData)
      .then(function (response) {
        setRefresh(true);
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
    setRefresh(false);
    axios
      .post("http://localhost:8090/api/documents/uploadOne", formData)
      .then(function (response) {
        setRefresh(true);
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
    setRefresh(false);
    axios
      .post("http://localhost:8090/api/documents/uploadOne", formData)
      .then(function (response) {
        setRefresh(true);
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
    setRefresh(false);
    axios
      .post("http://localhost:8090/api/documents/uploadOne", formData)
      .then(function (response) {
        setRefresh(true);
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
    var AddressProof = document.getElementById("AddressProofid").innerHTML;
    const formData = new FormData();
    formData.append("docFiles", address);
    formData.append("doctorId", user.user.id);
    formData.append("docTitle", AddressProof);
    formData.append("name", filename);
    formData.append("docValue", addressProof);
    formData.append("url", filePath);
    setRefresh(false);
    console.log(formData, "addressdata");
    axios
      .post("http://localhost:8090/api/documents/uploadMany", formData)
      .then(function (response) {
        setRefresh(true);
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
        // toast("Success");
        // setTimeout(() => {
        //   window.location.reload();
        // }, 3000);
      });
  };
  const handlePayslip = (e) => {
    e.preventDefault();
    var paySlip = document.getElementById("paySlip").innerHTML;
    const formData = new FormData();
    for (var x = 0; x < payslip.length; x++) {
      formData.append("docFiles", payslip[x]);
    }
    formData.append("name", filename);
    formData.append("doctorId", user.user.id);
    formData.append("docTitle", paySlip);
    formData.append("docValue", payslipno);
    formData.append("url", filePath);
    setRefresh(false);
    axios
      .post("http://localhost:8090/api/documents/uploadMany", formData)
      .then(function (response) {
        setRefresh(true);
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
  const handleMbbs = (e) => {
    e.preventDefault();
    var Mbbs = document.getElementById("Mbbs").innerHTML;
    const formData = new FormData();
    formData.append("doctorId", user.user.id);
    formData.append("docTitle", Mbbs);
    formData.append("docFile", mbbs);
    formData.append("docValue", mbbsCertificate);
    formData.append("name", filename);
    formData.append("url", filePath);
    setRefresh(false);
    axios
      .post("http://localhost:8090/api/documents/uploadOne", formData)
      .then(function (response) {
        setRefresh(true);
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
  const handlePg = (e) => {
    e.preventDefault();
    var PG = document.getElementById("PG").innerHTML;
    const formData = new FormData();
    for (var x = 0; x < pg.length; x++) {
      formData.append("docFiles", pg[x]);
    }
    formData.append("docValue", pgval);
    formData.append("doctorId", user.user.id);
    formData.append("docTitle", PG);
    formData.append("name", filename);
    formData.append("url", filePath);
    setRefresh(false);
    axios
      .post("http://localhost:8090/api/documents/uploadMany", formData)
      .then(function (response) {
        setRefresh(true);
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
  const handlePhoto = (e) => {
    e.preventDefault();
    var Photo = document.getElementById("photo").innerHTML;
    const formData = new FormData();
    formData.append("docTitle", Photo);
    formData.append("docValue", photoval);
    formData.append("doctorId", user.user.id);
    formData.append("docFile", photo);
    formData.append("name", filename);
    formData.append("url", filePath);
    setRefresh(false);
    axios
      .post("http://localhost:8090/api/documents/uploadOne", formData)
      .then(function (response) {
        setRefresh(true);
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
  const handleForm16 = (e) => {
    e.preventDefault();
    var Form16 = document.getElementById("Form16").innerHTML;
    console.log(
      Form16,
      "777777777777777777777777777777777777777777777777777777777"
    );
    const formData = new FormData();
    for (var x = 0; x < form16.length; x++) {
      formData.append("docFiles", form16[x]);
    }
    formData.append("docValue", form16val);
    formData.append("doctorId", user.user.id);
    formData.append("docTitle", Form16);
    formData.append("name", filename);
    formData.append("url", filePath);

    setRefresh(false);
    axios
      .post("http://localhost:8090/api/documents/uploadMany", formData)
      .then(function (response) {
        setRefresh(true);
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
  const handleBank = (e) => {
    e.preventDefault();

    var BankStatement = document.getElementById("BankStatement").innerHTML;
    const formData = new FormData();
    for (var x = 0; x < bank.length; x++) {
      formData.append("docFiles", bank[x]);
    }
    formData.append("doctorId", user.user.id);
    formData.append("docValue", bankstateval);
    formData.append("docTitle", BankStatement);
    formData.append("name", filename);
    formData.append("url", filePath);
    setRefresh(false);

    axios
      .post("http://localhost:8090/api/documents/uploadMany", formData)
      .then(function (response) {
        setRefresh(true);
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
  const handleIIC = (e) => {
    e.preventDefault();
    var IIc = document.getElementById("IIc").innerHTML;
    const formData = new FormData();
    formData.append("doctorId", user.user.id);
    formData.append("docTitle", IIc);
    formData.append("docValue", iicval);
    formData.append("docFile", iic);
    formData.append("name", filename);
    formData.append("url", filePath);
    setRefresh(false);
    axios
      .post("http://localhost:8090/api/documents/uploadOne", formData)
      .then(function (response) {
        setRefresh(true);
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

  function clickReviewAndSubmit() {}
  ///api/onboard
  const Confirm = (e) => {
    e.preventDefault();
    const updateData = {
      doctorId: user.user.id,
      currentAction: "hr-verification",
      nextAction: "rd action",
    };
    // console.log(rowdata, updateData, "allllllllllllllllllllllllllll");
    axios
      .put("http://localhost:8090/api/onboard/" + rowdata, updateData)
      .then((res) => {
        console.log(res);
      });
    // history.push("/Doctor-Profile");
  };

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
  // const handleChangeInput = (id, event) => {
  //     const newInputFields = inputFields.map(i => {
  //       if(id === i.id) {
  //         i[event.target.name] = event.target.value
  //       }
  //       return i;
  //     })

  //     setInputFields(newInputFields);
  //   }

  //   const handleAddFields = () => {
  //     setInputFields([...inputFields, { id: uuidv4(),  aadnum: '',adressproof:'' }])
  //   }

  // const getAlldata = () => {
  //   axios
  //     .get("http://localhost:8090/api/documents/list/" + user.user.id)
  //     .then((res) => res.data)
  //     .then((rows) => {
  //       var k = rows.data;
  //       var l = [];
  //       k.forEach((element) => {
  //         l.push(element.docTitle);
  //       });

  //       setUploadData(l);
  //     });
  // };

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
        
        setUploadData(l);
      });
  }, [refresh]);
  console.log(list, "listtttttt");
  // var array = [];
  // var k =
  //   uploadData &&
  //   uploadData.data &&
  //   uploadData.data.map((e) => {
  //     array.push(e);
  //   });
  console.log(uploadData, "&&");
  return (
    <>
      <Sidebar />

      <div className="main-content side-content pt-0 mg-b-30">
        <div className="container-fluid">
          <div className="inner-body">
            <Navbar />
            {/* <div className="progressbar-wrapper">
                            {" "}
                            <div class="col-md-8 col-sm-12 col-xs-12  container">
                                <ul class="progressbar">
                                    <li class="active"></li>
                                    <li> </li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div> */}

            <form encType="multipart/form-data">
              <br />
              <Card style={formStyle}>
                <Card.Header style={headerStyle}>
                  <h4> Uploaded Documents </h4>
                </Card.Header>
                <Card.Body style={bodyStyle} style={{overflowY:"auto", height:"300px"}}>
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
                        list.map((ele) => (
                          <tr>
                            <td style={{ textAlign: "center" }}>
                              {ele.docTitle}
                            </td>
                            <td
                              style={{ cursor: "pointer", textAlign: "center" }}
                            >
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
              <br />
              <Card style={formStyle}>
                <Card.Header style={headerStyle}>
                  <h4>Dr. Test - Documents Upload</h4>
                  <h6 style={{ fontWeight: "lighter" }}>
                    Raised by - Business Head
                  </h6>
                </Card.Header>
                <Card.Body style={bodyStyle}>
                  <Table style={{ width: "100%" }} borderless>
                    <thead>
                      {/* {uploadData &&
                      uploadData.data &&
                      uploadData.data.filter(
                        (z) =>
                          z.docTitle === "Resume" &&
                          "Medical Council Registration Certificate" &&
                          "PAN Card" &&
                          "AADHAR Card" &&
                          "Cancelled Cheque (Bank Details)" &&
                          "Address Proof"
                      ) ? (
                        ""
                      ) : ( */}
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
                      {/* )} */}
                    </thead>
                    <tbody>
                      {uploadData && uploadData.includes("Resume") ? (
                        ""
                      ) : (
                        <tr
                          id="row1"
                          style={{
                            borderBottom: "1px solid rgb(200, 200, 200)",
                          }}
                        >
                          <td>1.</td>
                          <td id="Resume">Resume</td>
                          <td>
                            <input
                              type="text"
                              id="docValue"
                              value={docValue}
                              onChange={(e) => setdocValue(e.target.value)}
                              className="form-control"
                              disabled={!file}
                            />
                          </td>

                          <td>
                            <input
                              type="file"
                              id={1}
                              name="resume"
                              className="form-control"
                              onChange={fileHandler}
                            />
                            {/* {progress && <ProgressBar now={progress} label={`${progress}%`} />} */}
                          </td>

                          <td>
                            <input
                              type="text"
                              value={remark}
                              onChange={(e) => setRemark(e.target.value)}
                              className="form-control"
                              disabled={!file}
                            />
                          </td>
                          <td id="status">
                            {!file ? "Upload File" : "Uploaded"}
                          </td>
                          <td>
                            {" "}
                            <button
                              className="btn btn-primary"
                              type="submit"
                              disabled={!file}
                              onClick={handleSubmit}
                            >
                              {" "}
                              Submit
                            </button>
                          </td>
                        </tr>
                      )}
                      {/* )} */}
                      {uploadData &&
                      uploadData.includes(
                        "Medical Council Registration Certificate"
                      ) ? (
                        ""
                      ) : (
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
                                  <option value="Chandigarh">Chandigarh</option>
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
                                  <option value="Madhya Pradesh">
                                    Madhya Pradesh
                                  </option>
                                  <option value="Maharashtra">
                                    Maharashtra
                                  </option>
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
                      )}
                      {uploadData && uploadData.includes("PAN Card") ? (
                        ""
                      ) : (
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
                      )}
                      {uploadData && uploadData.includes("AADHAR Card") ? (
                        ""
                      ) : (
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
                      )}
                      {uploadData &&
                      uploadData.includes("Cancelled Cheque (Bank Details)") ? (
                        ""
                      ) : (
                        <tr
                          style={{
                            borderBottom: "1px solid rgb(200, 200, 200)",
                          }}
                        >
                          <td>5.</td>
                          <td id="CC">Cancelled Cheque (Bank Details)</td>
                          <td>
                            <input
                              type="text"
                              value={bankval}
                              onChange={(e) => setBankValue(e.target.value)}
                              className="form-control"
                              placeholder="Cheque Number"
                            />
                          </td>
                          <td>
                            <input
                              type="file"
                              onChange={fileHandler4}
                              name="CC"
                              className="form-control"
                            />
                          </td>
                          <td>
                            <Row>
                              <Col md={12}>
                                <input
                                  type="text"
                                  value={ccBank}
                                  onChange={(e) => setccBank(e.target.value)}
                                  className="form-control"
                                  placeholder="Bank Name"
                                />
                              </Col>
                              <br />
                              <Col md={12}>
                                <input
                                  type="text"
                                  value={ccAccountNo}
                                  onChange={(e) =>
                                    setccAccountNo(e.target.value)
                                  }
                                  className="form-control"
                                  placeholder="Account Number"
                                />
                              </Col>
                              <br />
                              <Col md={12}>
                                <input
                                  type="text"
                                  value={ifsc}
                                  onChange={(e) => setifsc(e.target.value)}
                                  className="form-control"
                                  placeholder="IFSC code"
                                />
                              </Col>
                              <br />
                            </Row>
                          </td>
                          <td>{!cc ? "Upload File" : "Uploaded"}</td>
                          <td>
                            {" "}
                            <button
                              className="btn btn-primary"
                              type="submit"
                              disabled={!cc}
                              onClick={handleCC}
                            >
                              {" "}
                              Submit
                            </button>
                          </td>
                        </tr>
                      )}
                      {uploadData && uploadData.includes("Address Proof") ? (
                        ""
                      ) : (
                        <tr
                          style={{
                            borderBottom: "1px solid rgb(200, 200, 200)",
                          }}
                        >
                          <td>6.</td>
                          <td id="AddressProofid">Address Proof</td>
                          {/* value={inputField.aadnum} onChange={event => handleChangeInput(inputField.id, event)} */}
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
                              id="adressproof"
                              className="form-control"
                              multiple
                            />
                          </td>
                          <td>
                            <textarea
                              value={addressProof}
                              onChange={(e) => setAddressProof(e.target.value)}
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
                      )}
                      {uploadData &&
                      uploadData.includes("Payslips for the last 6 month") ? (
                        ""
                      ) : (
                        <tr
                          style={{
                            borderBottom: "1px solid rgb(200, 200, 200)",
                          }}
                        >
                          <td>7.</td>
                          <td id="paySlip">Payslips for the last 6 month</td>
                          <td>
                            <input
                              type="text"
                              value={payslipno}
                              onChange={(e) => setpayslipno(e.target.value)}
                              id="aad-num"
                              name="aad-num"
                              className="form-control"
                              disabled={!payslip}
                            />
                          </td>
                          <td>
                            <input
                              type="file"
                              onChange={fileHandler6}
                              id={7}
                              name="payslip"
                              className="form-control"
                              multiple
                            />
                          </td>
                          {/* <td><input type="text" className="form-control" disabled={!payslip} /> <i className="fas fa-check" onClick={handleAddFields}></i></td> */}
                          <td>
                            <input
                              type="text"
                              className="form-control"
                              disabled={!payslip}
                            />{" "}
                          </td>
                          <td>{!payslip ? "Upload File" : "Uploaded"}</td>
                          <td>
                            {" "}
                            <button
                              className="btn btn-primary"
                              type="submit"
                              disabled={!payslip}
                              onClick={handlePayslip}
                            >
                              {" "}
                              Submit
                            </button>
                          </td>
                          {/* <td><button type="button" class="btn btn-primary me-3" onClick={() => setNoOfRows(noOfRows + 1)}>Add</button></td> */}
                        </tr>
                      )}

                      {/* })} */}
                      {uploadData &&
                      uploadData.includes("MBBS Degree Certificate") ? (
                        ""
                      ) : (
                        <tr
                          style={{
                            borderBottom: "1px solid rgb(200, 200, 200)",
                          }}
                        >
                          <td>8.</td>
                          <td id="Mbbs">MBBS Degree Certificate</td>
                          <td>
                            <input
                              type="text"
                              id="aad-num"
                              name="aad-num"
                              className="form-control"
                              disabled={!mbbs}
                            />
                          </td>
                          <td>
                            <input
                              type="file"
                              onChange={fileHandler7}
                              id={8}
                              name="mbbs"
                              className="form-control"
                              multiple
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              value={mbbsCertificate}
                              onChange={(e) =>
                                setmbbsCertificate(e.target.value)
                              }
                              id="resume"
                              name="resume"
                              className="form-control"
                              disabled={!mbbs}
                            />
                          </td>
                          <td>{!mbbs ? "Upload File" : "Uploaded"}</td>
                          <td>
                            {" "}
                            <button
                              className="btn btn-primary"
                              type="submit"
                              disabled={!mbbs}
                              onClick={handleMbbs}
                            >
                              {" "}
                              Submit
                            </button>
                          </td>
                        </tr>
                      )}
                      {uploadData &&
                      uploadData.includes("All PG Degree Certificates") ? (
                        ""
                      ) : (
                        <tr
                          style={{
                            borderBottom: "1px solid rgb(200, 200, 200)",
                          }}
                        >
                          <td>9.</td>
                          <td id="PG">All PG Degree Certificates</td>
                          <td>
                            <input
                              type="text"
                              id="aad-num"
                              name="aad-num"
                              className="form-control"
                              disabled={!pg}
                            />
                          </td>
                          <td>
                            <input
                              type="file"
                              onChange={fileHandler8}
                              id={9}
                              name="pg"
                              className="form-control"
                              multiple
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              id="resume"
                              value={pgval}
                              onChange={(e) => setPgValue(e.target.value)}
                              name="resume"
                              className="form-control"
                              disabled={!pg}
                            />
                          </td>
                          <td>{!pg ? "Upload File" : "Uploaded"}</td>
                          <td>
                            {" "}
                            <button
                              className="btn btn-primary"
                              type="submit"
                              disabled={!pg}
                              onClick={handlePg}
                            >
                              {" "}
                              Submit
                            </button>
                          </td>
                        </tr>
                      )}
                      {uploadData &&
                      uploadData.includes("Passport Size Photograph") ? (
                        ""
                      ) : (
                        <tr
                          style={{
                            borderBottom: "1px solid rgb(200, 200, 200)",
                          }}
                        >
                          <td>10.</td>
                          <td id="photo">Passport Size Photograph</td>
                          <td>
                            <input
                              type="text"
                              id="aad-num"
                              name="aad-num"
                              className="form-control"
                              disabled={!photo}
                            />
                          </td>
                          <td>
                            <input
                              type="file"
                              accept="jpeg,jpg,png"
                              onChange={fileHandler9}
                              id={10}
                              name="photo"
                              className="form-control"
                              // multiple
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              value={photoval}
                              onChange={(e) => setphotoValue(e.target.value)}
                              id="resume"
                              name="resume"
                              className="form-control"
                              disabled={!photo}
                            />
                          </td>
                          <td>{!photo ? "Upload File" : "Uploaded"}</td>
                          <td>
                            {" "}
                            <button
                              className="btn btn-primary"
                              type="submit"
                              disabled={!photo}
                              onClick={handlePhoto}
                            >
                              {" "}
                              Submit
                            </button>
                          </td>
                        </tr>
                      )}
                      {uploadData &&
                      uploadData.includes("Form 16 for last 2 years") ? (
                        ""
                      ) : (
                        <tr
                          style={{
                            borderBottom: "1px solid rgb(200, 200, 200)",
                          }}
                        >
                          <td>11.</td>
                          <td id="Form16">Form 16 for last 2 years</td>
                          <td>
                            <input
                              type="text"
                              id="aad-num"
                              name="aad-num"
                              className="form-control"
                              disabled={!form16}
                            />
                          </td>
                          <td>
                            <input
                              type="file"
                              id={11}
                              onChange={fileHandler10}
                              name="form16"
                              id="form16"
                              className="form-control"
                              multiple
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              id="resume"
                              value={form16val}
                              onChange={(e) => setForm16val(e.target.value)}
                              name="resume"
                              className="form-control"
                              disabled={!form16}
                            />
                          </td>
                          <td>{!form16 ? "Upload File" : "Uploaded"}</td>
                          <td>
                            {" "}
                            <button
                              className="btn btn-primary"
                              type="submit"
                              disabled={!form16}
                              onClick={handleForm16}
                            >
                              {" "}
                              Submit
                            </button>
                          </td>
                        </tr>
                      )}
                      {uploadData &&
                      uploadData.includes("Bank Statement for 6 months") ? (
                        ""
                      ) : (
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
                              value={bankstateval}
                              onChange={(e) =>
                                setBankstateValue(e.target.value)
                              }
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
                      )}
                      {uploadData &&
                      uploadData.includes("Bank Statement for 6 months") ? (
                        ""
                      ) : (
                        <tr
                          style={{
                            borderBottom: "1px solid rgb(200, 200, 200)",
                          }}
                        >
                          <td>13.</td>
                          <td id="IIc">Indemnity Insurance Copy</td>
                          <td>
                            <input
                              type="text"
                              id="aad-num"
                              name="aad-num"
                              className="form-control"
                              disabled={!iic}
                            />
                          </td>
                          <td>
                            <input
                              type="file"
                              id={13}
                              onChange={fileHandler12}
                              name="iic"
                              className="form-control"
                              multiple
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              id="resume"
                              value={iicval}
                              onChange={(e) => setiicValue(e.target.value)}
                              name="resume"
                              className="form-control"
                              disabled={!iic}
                            />
                          </td>
                          <td>{!iic ? "Upload File" : "Uploaded"}</td>
                          <td>
                            {" "}
                            <button
                              className="btn btn-primary"
                              type="submit"
                              disabled={!iic}
                              onClick={handleIIC}
                            >
                              {" "}
                              Submit
                            </button>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </Table>

                  <button
                    className="btn btn-primary"
                    className="btn btn-success confirm-btn"
                    onClick={Confirm}
                  >
                    Confirm
                  </button>
                </Card.Body>
              </Card>
              <br />
            
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UploadDocuments;
