import React, { useState, useRef, useEffect } from "react";
import { Card, Container, Row, Col, Table } from "react-bootstrap";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import FixedForm from "../../Components/FixedForm";
import OpForm from "../../Components/OpForm";
import IpForm from "../../Components/IpForm";
import Footer from "../../Components/Footer";
import Divider from "@material-ui/core/Divider";
import { useDispatch, useSelector } from "react-redux";
import { onboardById } from "../../actions/onboardActions";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import moment from "moment";

function Test({ history }) {
  const location = useLocation();
  const params = useParams();

  console.log(location, "abcdefg");
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

  const dispatch = useDispatch();
  const onboardId = useSelector((state) => state.onboardId);
  const { oboard } = onboardId;

  console.log(
    oboard,
    "aooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo"
  );

  var a = [
    "",
    "one ",
    "two ",
    "three ",
    "four ",
    "five ",
    "six ",
    "seven ",
    "eight ",
    "nine ",
    "ten ",
    "eleven ",
    "twelve ",
    "thirteen ",
    "fourteen ",
    "fifteen ",
    "sixteen ",
    "seventeen ",
    "eighteen ",
    "nineteen ",
  ];
  var b = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  var n;
  function inWords(num) {
    if ((num = num.toString()).length > 9) return "overflow";
    n = ("000000000" + num)
      .substr(-9)
      .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return;
    var str = "";
    str +=
      n[1] != 0
        ? (a[Number(n[1])] || b[n[1][0]] + " " + a[n[1][1]]) + "crore "
        : "";
    str +=
      n[2] != 0
        ? (a[Number(n[2])] || b[n[2][0]] + " " + a[n[2][1]]) + "lakh "
        : "";
    str +=
      n[3] != 0
        ? (a[Number(n[3])] || b[n[3][0]] + " " + a[n[3][1]]) + "thousand "
        : "";
    str +=
      n[4] != 0
        ? (a[Number(n[4])] || b[n[4][0]] + " " + a[n[4][1]]) + "hundred "
        : "";
    str +=
      n[5] != 0
        ? (str != "" ? "and " : "") +
          (a[Number(n[5])] || b[n[5][0]] + " " + a[n[5][1]]) +
          "only "
        : "";
    return str;
  }

  // var dateofJoining =
  //   oboard &&
  //   oboard.doctorCommercial &&
  //   oboard.doctorCommercial[0] &&
  //   oboard.doctorCommercial[0].doj;

  //   console.log( oboard &&
  //     oboard.doctorCommercial &&
  //     oboard.doctorCommercial[0] &&
  //     oboard.doctorCommercial[0].doj,"dateofJoining")
  useEffect(() => {
    dispatch(onboardById(location.state.data));
  }, [dispatch]);

  var k =
    oboard &&
    oboard.doctorCommercial &&
    oboard.doctorCommercial[0] &&
    oboard.doctorCommercial[0].createdAt;

  var amount = parseInt(
    oboard &&
      oboard.doctorCommercial &&
      oboard.doctorCommercial[0] &&
      oboard.doctorCommercial[0].ctcmonth
  );

  return (
    <>
      <Sidebar />

      <div className="main-content side-content pt-0 mg-b-30">
        <div className="container-fluid">
          <div className="inner-body">
            <Navbar />
            <br />
            <Container fluid style={{ padding: "0px" }}>
              <Card style={formStyle}>
                <Card.Header style={headerStyle}>
                  <h4>Dr. Test - Onboarding Agreement</h4>
                  <h6 style={{ fontWeight: "lighter" }}>
                    Raised by - Business Head
                  </h6>
                </Card.Header>
                <Card.Body style={bodyStyle}>
                  <div style={{ wordWrap: "break-word", padding: "100px" }}>
                    <div className="WordSection1">
                      <p
                        className="WW-Default"
                        align="center"
                        style={{
                          "margin-bottom": "6.0pt",
                          "-webkit-text-align": "center",
                          "text-align": "center",
                          "line-height": "normal",
                        }}
                      >
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "font-family": '"Tahoma",sans-serif',
                              color: "windowtext",
                              "-webkit-text-transform": "uppercase",
                              "text-transform": "uppercase",
                            }}
                          >
                            AGREEMENT FOR PROVIDING PROFESSIONAL SERVICES
                          </span>
                        </b>
                      </p>
                      <p
                        className="WW-Default"
                        align="center"
                        style={{
                          "margin-bottom": "6.0pt",
                          "-webkit-text-align": "center",
                          "text-align": "center",
                          "line-height": "normal",
                        }}
                      >
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "font-family": '"Tahoma",sans-serif',
                              color: "windowtext",
                              "-webkit-text-transform": "uppercase",
                              "text-transform": "uppercase",
                            }}
                          >
                            (CONSULTANCY AGREEMENT)
                          </span>
                        </b>
                      </p>
                      <p
                        className="WW-Default"
                        align="center"
                        style={{
                          "margin-bottom": "6.0pt",
                          "-webkit-text-align": "center",
                          "text-align": "center",
                          "line-height": "normal",
                        }}
                      >
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "font-family": '"Tahoma",sans-serif',
                              color: "windowtext",
                            }}
                          >
                            &nbsp;
                          </span>
                        </b>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-bottom": "6.0pt",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "line-height": "150%",
                        }}
                      >
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "line-height": "150%",
                              "font-family": '"Tahoma",sans-serif',
                              color: "windowtext",
                            }}
                          >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            This consultancy agreement (the ‘Agreement’) is made
                            and entered into this on{" "}
                          </span>
                        </b>
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "line-height": "150%",
                              color: "blue",
                              "font-family": '"Tahoma",sans-serif',
                            }}
                          >
                            {/* {moment(dateofJoining, "DD-MM-YYYY")} */}
                            {oboard &&
                              oboard.doctorCommercial &&
                              oboard.doctorCommercial[0] &&
                              oboard.doctorCommercial[0].doj}
                          </span>
                        </b>
                        {/* <b> */}
                        {/* <sup>  var date = moment('15-06-2010', 'DD-MM-YYYY')
                                    console.log(date.format('MM-DD-YYYY'))
                            <span
                              style={{
                                "font-size": "10.5pt",
                                "line-height": "150%",
                                "font-family": '"Tahoma",sans-serif',
                                color: "windowtext",
                              }}
                            >
                              th
                            </span>
                          </sup>
                        </b>
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "line-height": "150%",
                              "font-family": '"Tahoma",sans-serif',
                              color: "windowtext",
                            }}
                          >
                            {" "}
                            day of{" "}
                          </span>
                        </b>
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "line-height": "150%",
                              color: "blue",
                              "font-family": '"Tahoma",sans-serif',
                            }}
                          >
                            ??*Input*??
                          </span>
                        </b>
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "line-height": "150%",
                              "font-family": '"Tahoma",sans-serif',
                              color: "windowtext",
                            }}
                          >
                            ,{" "}
                          </span>
                        </b>
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "line-height": "150%",
                              "font-family": '"Tahoma",sans-serif',
                            }}
                          >
                            0
                          </span> */}
                        {/* </b> */}
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "line-height": "150%",
                              "font-family": '"Tahoma",sans-serif',
                              color: "windowtext",
                            }}
                          >
                            {" "}
                            at Bengaluru by and between;
                          </span>
                        </b>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-bottom": "6.0pt",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "line-height": "150%",
                        }}
                      >
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "line-height": "150%",
                              "font-family": '"Tahoma",sans-serif',
                              color: "windowtext",
                            }}
                          >
                            &nbsp;
                          </span>
                        </b>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-bottom": "6.0pt",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "line-height": "150%",
                        }}
                      >
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "line-height": "150%",
                              "font-family": '"Tahoma",sans-serif',
                              color: "windowtext",
                            }}
                          >
                            Kids Clinic India Private Limited
                          </span>
                        </b>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          {" "}
                          a Company incorporated under the provisions of
                          Companies Act, 1956, having its registered office at
                          #1533, 9th main, 3rd Block, Jayanagar, Bengaluru-560
                          011 (hereinafter referred to as the <b>‘Company’</b>,
                          which expression, unless repugnant to the context
                          hereof shall include its holding Company,
                          subsidiaries, associates, affiliates, shareholders and
                          directors) of the <b>ONE</b> part.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-bottom": "6.0pt",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "line-height": "150%",
                        }}
                      >
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "line-height": "150%",
                              "font-family": '"Tahoma",sans-serif',
                              color: "windowtext",
                            }}
                          >
                            AND{" "}
                          </span>
                        </b>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "line-height": "normal",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          Person named in <b>Schedule 1</b> to this agreement as
                          Consultant (hereinafter referred to as the{" "}
                          <b>“Consultant”</b>) of the SECOND part.
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "line-height": "normal",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "line-height": "150%",
                        }}
                      >
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "line-height": "150%",
                              "font-family": '"Tahoma",sans-serif',
                            }}
                          >
                            WHEREAS
                          </span>
                        </b>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          margin: "0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          a)<span style={{}}>&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          The Company is engaged in providing the specialized
                          medical service to its patients/customers through
                          specialized medical professionals and in order to
                          achieve the object, the Company is engaging the
                          consultant based the representations made by the
                          consultant and the engagement is on the terms and
                          conditions mentioned hereinafter.
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": "0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          b)<span style={{}}>&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "line-height": "150%",
                              "font-family": '"Tahoma",sans-serif',
                            }}
                          >
                            AND WHEREAS
                          </span>
                        </b>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          {" "}
                          the Consultant has represented to the Company that
                          he/she has requisite experience, competency and
                          qualification recognized under Indian laws for
                          providing the Services to the Company in an effective
                          and timely manner.{" "}
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": "0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          c)<span style={{}}>&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "line-height": "150%",
                              "font-family": '"Tahoma",sans-serif',
                            }}
                          >
                            AND WHEREAS{" "}
                          </span>
                        </b>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          the Company, based on the representation of the
                          Consultant, agreed to engage the Consultant for
                          providing the medical Services on the terms and
                          conditions contained in this Agreement.{" "}
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          margin: "0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          d)<span style={{}}>&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          The Company and the Consultant on mutual acceptance
                          agreed to enter into this Agreement to reduce the
                          terms and conditions of the services.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-bottom": "0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          The Company and the Consultant being collectively
                          referred to as Parties and severally as the Party;
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          NOW THIS AGREEMENT WITNESSETH as follows and the
                          parties hereto hereby mutually agree with each other
                          as follows:
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-left": "0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-22.5pt",
                          "text-indent": "-22.5pt",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          1.
                          <span style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <b>
                          <u>
                            <span
                              style={{
                                "font-size": "10.5pt",
                                "line-height": "150%",
                                "font-family": '"Tahoma",sans-serif',
                              }}
                            >
                              DEFINITIONS AND INTERPRETATION
                            </span>
                          </u>
                        </b>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          1.1.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          Definitions - In this Agreement, the following
                          definitions apply:{" "}
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-left": ".75in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.75in",
                          "text-indent": "-.75in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          1.1.1.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "line-height": "150%",
                              "font-family": '"Tahoma",sans-serif',
                            }}
                          >
                            “Commencement Date”{" "}
                          </span>
                        </b>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          shall mean date of commencement mentioned under{" "}
                          <b>Schedule 1 </b>to this Agreement.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-left": ".75in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.75in",
                          "text-indent": "-.75in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          1.1.2.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "line-height": "150%",
                              "font-family": '"Tahoma",sans-serif',
                            }}
                          >
                            “Confidential Information”
                          </span>
                        </b>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          includes information confidential to the Hospital,
                          Company and its group company including but not
                          limited to Intellectual Property, technical know-how,
                          customer information (including names addresses,
                          contact names and addresses, telephone numbers and
                          e-mail addresses), business plans, trade secrets,
                          product specifications, market research, financial
                          data and forecasts, capital strategy and capital
                          raising activities (proposed and ongoing), business
                          methods, marketing strategies, tenders and price
                          sensitive information, fees, commission structure,
                          feasibility figures and plans relating to contracts
                          (actual and proposed), details of actual and proposed
                          contracts, requirements of customers or prospective
                          customers, information in respect of which the Company
                          or its group company is bound by an obligation of
                          confidence to any third party.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-left": ".75in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.75in",
                          "text-indent": "-.75in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          1.1.3.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          “<b>Consultation Fees</b>” shall mean and include the
                          fees collected from the patients as a consultation
                          fees as part of hospital tariff charges.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-left": ".75in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.75in",
                          "text-indent": "-.75in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          1.1.4.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          “<b>Expiry Date</b> “shall mean the date of expiry of
                          this contract mentioned in <b>Schedule 1</b>{" "}
                          hereinafter.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-left": ".75in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.75in",
                          "text-indent": "-.75in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          1.1.5.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;“<b>Hospital</b>
                          “shall mean healthcare facility located at the address
                          mentioned under <b>Schedule 1</b> hereinafter.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-left": ".75in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.75in",
                          "text-indent": "-.75in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          1.1.6.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          “<b>Medical Practitioner</b> “shall mean a person
                          registered and licensed as a medical practitioner with
                          Indian Medical Council/ state Medical Councilor any
                          other applicable Indian laws to provide the Medical
                          Services.{" "}
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-left": ".75in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.75in",
                          "text-indent": "-.75in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          1.1.7.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          “<b>Medical Services</b>” means the type of medical
                          services specified in <b>Part 1</b> of{" "}
                          <b>Schedule – 2</b>.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-left": ".75in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.75in",
                          "text-indent": "-.75in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          1.1.8.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          “<b>Term</b>” shall mean the period mentioned under{" "}
                          <b>Schedule 1</b> hereinafter.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          1.2.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Interpretation -
                          In this Agreement, unless the context otherwise
                          requires:
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-left": ".75in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.75in",
                          "text-indent": "-.75in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          1.2.1.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          a reference to a clause or schedule means a clause of
                          or schedule to this Agreement;
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-left": ".75in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.75in",
                          "text-indent": "-.75in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          1.2.2.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          the singular includes the plural and vice versa;
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-left": ".75in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.75in",
                          "text-indent": "-.75in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          1.2.3.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          words denoting one gender include the other gender;
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-left": ".75in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.75in",
                          "text-indent": "-.75in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          1.2.4.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          the word person includes a firm, a body corporate, an
                          unincorporated association or an authority;
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-left": ".75in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.75in",
                          "text-indent": "-.75in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          1.2.5.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          a reference to this Agreement or another instrument
                          includes any variation or replacement of either of
                          them;
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-left": ".75in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.75in",
                          "text-indent": "-.75in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          1.2.6.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          reference to a statute, ordinance, code or other law
                          includes regulations and other instruments under it
                          and consolidations, amendments, re-enactments or
                          replacements of any of them; and
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-left": ".75in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.75in",
                          "text-indent": "-.75in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          1.2.7.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          reference to a person includes a reference to the
                          person's executors, administrators, successors,
                          substitutes and permitted assigns.{" "}
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-left": ".75in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.75in",
                          "text-indent": "-.75in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          1.2.8.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          Any obligation in this Agreement on a person not to do
                          something includes an obligation not to agree or allow
                          that thing to be done.{" "}
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-left": ".75in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.75in",
                          "text-indent": "-.75in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          1.2.9.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          This Agreement is a jointly drafted product of the
                          parties and any rule of statutory interpretation
                          interpreting Agreement against a party primarily
                          responsible for drafting the agreement shall not be
                          applicable to this Agreement.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          margin: "0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-22.5pt",
                          "text-indent": "-22.5pt",
                          "line-height": "200%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "200%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          2.
                          <span style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <b>
                          <u>
                            <span
                              style={{
                                "font-size": "10.5pt",
                                "line-height": "200%",
                                "font-family": '"Tahoma",sans-serif',
                                color: "windowtext",
                              }}
                            >
                              TERMS OF ENGAGEMENT
                            </span>
                          </u>
                        </b>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          2.1.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          The Company engages the Consultant to provide, and the
                          Consultant agrees to provide, Medical Services on the
                          terms and conditions mentioned hereinafter in this
                          Agreement.
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          2.2.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          The parties agree and acknowledge that the Consultant
                          is an independent professional and not an employee of
                          the Company and the Company is not responsible for any
                          legal obligations, liabilities and expenses in respect
                          of personal taxation, worker's compensation,
                          superannuation, leave entitlements and the like. As a
                          result of being an independent professional nothing in
                          this Agreement affects the Company’s legal or
                          equitable rights of indemnity against the Consultant
                          or either party’s rights against the other in the
                          applicable laws. Except as specifically provided in
                          this Agreement, neither party shall have the right nor
                          authority to assume, create or enlarge any obligation
                          or commitment on behalf of the other party.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          2.3.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          It is agreed between the parties that the Company may
                          engage other Consultants to provide the same or
                          similar Medical Services as the Consultant shall
                          provide under this Agreement.
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          2.4.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          The Consultant shall declare on signing of this
                          Agreement, all current external positions held such as
                          other employment, directorship, trusteeship,
                          partnership and offices of responsibility including
                          honorary positions held including the potential
                          positions which is conflicting with the Company’s
                          interest. During the term of this Agreement, the
                          Consultant agrees not to undertake any obligation or
                          assignment contractual or otherwise, which may involve
                          actual or potential conflict of interest with the
                          business of the Company. If the Company thinks in its
                          discretion that the Consultant has undertaken any
                          obligation or assignment contractual or otherwise,
                          which may involve actual or potential conflict of
                          interest with the business of the Company then it
                          shall be deemed to be in the conflict of interest of
                          the Company.
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          2.5.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          The Consultant shall use{" "}
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          her
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          {" "}
                          best efforts, skills, and abilities in rendering the
                          professional services and shall render the
                          professional services diligently and in good faith.
                          The Company, with an object of providing the best
                          services to its patients/customers, has framed the
                          policies, procedures and by-laws (<b>“Protocols”</b>),
                          which needs to be followed by the Consultant during
                          the term of this Agreement including any renewals
                          thereof along with any modification(s) or amendments
                          to such Protocols.
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          2.6.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          The Consultant shall provide the medical services as
                          mentioned in <b>Part 1</b> of <b>Schedule 2</b> to
                          this agreement to the best of his/her ability. The
                          services provided by the Consultant should be to the
                          absolute satisfaction of the company and the patient.
                          The same shall be the essence of this contract{" "}
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          2.7.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          The Consultant is independent in deciding the medical
                          treatment to be provided to the Patients/ Customers of
                          the Company in their professional capacity.
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          2.8.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          The Consultant shall be available for the provision of
                          the services at a location mentioned hereinabove at
                          all the times as specified by the Company from time to
                          time. It is however understood that the location &amp;
                          time for provision of the services by the Consultant
                          can be changed by the Company, with prior notice to
                          the Consultant.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          margin: "0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-22.5pt",
                          "text-indent": "-22.5pt",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          3.
                          <span style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <b>
                          <u>
                            <span
                              style={{
                                "font-size": "10.5pt",
                                "line-height": "150%",
                                "font-family": '"Tahoma",sans-serif',
                                color: "windowtext",
                              }}
                            >
                              CONSIDERATION
                            </span>
                          </u>
                        </b>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          3.1.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          Subject to the provisions of this Clause 3 and subject
                          to the Consultant performing all the obligation under
                          this agreement to the subjective satisfaction of the
                          Company, the Company will pay the Consultant for the
                          Medical Services provided under this Agreement in
                          accordance with <b>Part 2</b> of <b>Schedule 2 </b>
                          hereinafter.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          3.2.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          That the Consultant shall not be entitled to any
                          benefits from the Company including all those benefits
                          which are made available to the employees of the
                          Company.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          3.3.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          The payment to the Consultant shall be made, after
                          deduction of applicable taxes at source, on monthly
                          basis within 10 (ten) working days of close of the
                          calendar month. All the payments are subject to
                          realization of money from patients/ insurance
                          companies/ guarantors. The Consultant shall pay all
                          his personal and other applicable taxes under the
                          applicable laws and shall always keep the Company
                          indemnified in this respect.{" "}
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          margin: "0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-22.5pt",
                          "text-indent": "-22.5pt",
                          "line-height": "200%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "200%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          4.
                          <span style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <b>
                          <u>
                            <span
                              style={{
                                "font-size": "10.5pt",
                                "line-height": "200%",
                                "font-family": '"Tahoma",sans-serif',
                                color: "windowtext",
                              }}
                            >
                              TERM &amp; TERMINATION
                            </span>
                          </u>
                        </b>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          4.1.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          This Agreement shall continue to be in force for the
                          Term unless earlier terminated in accordance with this
                          Clause 4.{" "}
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          4.2.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          Either party may terminate this Agreement at any time
                          by giving the <b>  {oboard &&
                              oboard.doctorCommercial &&
                              oboard.doctorCommercial[0] &&
                              oboard.doctorCommercial[0].noticeperiod} </b> prior written notice to
                          other party in this respect after completion of first{" "}
                          <b>Lock-in</b>
                          year’s from the date of commencement{" "}
                          <b> {oboard &&
                              oboard.doctorCommercial &&
                              oboard.doctorCommercial[0] &&
                              oboard.doctorCommercial[0].lockinperiod}.</b>
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          4.3.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          The Company and the Consultant may by written
                          agreement terminate this Agreement at any time.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          4.4.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          Notwithstanding anything stated hereunder, this
                          Agreement may be terminated with immediate effect upon
                          the occurrence of any of the following events;
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": "1.0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          (a)<span style={{}}>&nbsp; </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          if the Consultant is in breach of any of the terms and
                          conditions of this Agreement and/or the conduct of the
                          Consultant is considered as detrimental to the
                          interest of the Company or in violation of the
                          Protocols of the Company.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": "1.0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          (b)<span style={{}}>&nbsp; </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          Any information, declaration and/or representation
                          given by the consultant is found to be incorrect,
                          false or misleading.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": "1.0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          (c)<span style={{}}>&nbsp;&nbsp; </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          Death or insolvency of the Consultant.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": "1.0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          (d)<span style={{}}>&nbsp; </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          On acceptance of any assignments in violation of this
                          Agreement.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": "1.0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          (e)<span style={{}}>&nbsp; </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          If any regulatory authority disqualifies the
                          Consultant from providing the medical services or
                          on&nbsp;expiry of Registration certificate issued by
                          Medical Council of India and/or State Medical Council
                          as the case maybe and the same being not renewed
                          within stipulated period as prescribed in terms of any
                          specific regulation or otherwise.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": "1.0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          (f)<span style={{}}>&nbsp;&nbsp; </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          engages in serious or willful misconduct;
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": "1.0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          (g)<span style={{}}>&nbsp; </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          is convicted of any offence including moral turpitude
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": "1.0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          (h)<span style={{}}>&nbsp; </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          if the services rendered by the Consultant are not
                          satisfactory to the Company
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": "1.0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          (i)<span style={{}}>&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          if the Consultant commits breach of confidentiality as
                          envisaged under clause 12 of this agreement;
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          4.5
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          The Consultant hereby agrees that the medical services
                          provided under this agreement is critical in nature
                          and Patients/Customers shall not be deprived of on
                          earlier termination, thus the Consultant shall
                          continue to provide the services as agreed upon,
                          during the Notice Period. In case Consultant fails to
                          provide the required Notice Period and/ or fails to
                          provide the services during the Notice Period, the
                          Consultant shall require to pay damages to the Company
                          which is equivalent to last three (03) months monthly
                          professional fees received by the Consultant under
                          this Agreement.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          4.6
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          Upon expiry or earlier termination of this Agreement,
                          the Consultant shall immediately handover to Company
                          all correspondence, documents, papers, property
                          belonging to the Company which may be in Consultant’s
                          possession or under Consultant’s control including
                          without limitation all the creations that may be in
                          Consultant’s possession. The Consultant shall not keep
                          any copies of these items nor distribute the same to
                          any party without the prior written authorization of
                          the Company. The consultant agrees that failure by
                          her/him to return the Property of the company upon
                          termination shall be deemed to be criminal breach of
                          trust.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          margin: "0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-22.5pt",
                          "text-indent": "-22.5pt",
                          "line-height": "200%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "200%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          5.
                          <span style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <b>
                          <u>
                            <span
                              style={{
                                "font-size": "10.5pt",
                                "line-height": "200%",
                                "font-family": '"Tahoma",sans-serif',
                                color: "windowtext",
                              }}
                            >
                              PRE-REQUISITE{" "}
                            </span>
                          </u>
                        </b>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          5.1.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          The Consultant shall be empaneled with the Company
                          based on the condition that Consultant’s medical
                          degree{" "}
                        </span>
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "line-height": "150%",
                              "font-family": '"Tahoma",sans-serif',
                            }}
                          >
                            Medical Degree
                          </span>
                        </b>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          {" "}
                          and the specialization degree{" "}
                        </span>
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "line-height": "150%",
                              "font-family": '"Tahoma",sans-serif',
                            }}
                          >
                            Specialisation Degree
                          </span>
                        </b>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          {" "}
                          is registered with Medical Council of India and/or
                          State Medical Council as the case may be.&nbsp; The
                          Consultant shall maintain the aforesaid registration
                          valid during the term of this agreement at
                          Consultant’s own cost and expenses and shall renew the
                          registration as when required and provide the copies
                          of the same to Company. If in case the Consultant
                          fails to renew the registrations within the stipulated
                          time, this Agreement shall cease to be valid and the
                          Company at its sole discretion would be at a liberty
                          to terminate this Agreement without notice.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          5.2.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          Consultant shall produce copies of original
                          certificates supporting degrees and/or professional
                          qualification, registration and experience
                          certificates and any other documents as the Company
                          requires.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          &nbsp;&nbsp;&nbsp;{" "}
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          KMC submission 1
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          {" "}
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          KMC submission 2
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          5.3.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          The Consultant shall obtain valid visa and work permit
                          (if required/applicable) being granted prior to
                          commencement of this agreement and maintained and
                          valid for the duration of this agreement with the
                          Company.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          5.4.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          The Consultant hereby agrees that, the Company can
                          disclose and release any and all information relating
                          to Consultant and/ or documents furnished by
                          Consultant to the Company’s authorized representative,
                          agents or to any government authorities including the
                          Company’s affiliates as maybe required by the Company
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "#222222",
                          }}
                        >
                          .
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          5.5.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          This Agreement is subject to correctness of the
                          self-attested documents mentioned in
                          <b>Schedule 3</b> to be submitted by the Consultant to
                          the Company for verification.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          5.6.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          The Consultant shall obtain adequate Professional
                          Indemnity Insurance Policy and other Insurance
                          policies in relation to any causes of actions that can
                          be initiated by any patient or others relating to any
                          negligence, act, omission or deficiency of services
                          provided by the Consultant&nbsp;to the patients
                          of&nbsp;the Company. This indemnity Policy should
                          cover at least a risk of an amount mentioned under{" "}
                          <b>Schedule 1</b> hereinafter&nbsp;and endorse Company
                          name &amp; address in such policy to extend the
                          benefits in case of claim. A Copy of such policy shall
                          be provided by the Consultant to the Company. The
                          Consultant shall ensure the policy is renewed from
                          time to time and the Consultant agrees to maintain and
                          keep the same in full force and effect, at his/ her
                          sole cost and expense and provide copies to the
                          Company on renewals.
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": "22.5pt",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-22.5pt",
                          "text-indent": "-22.5pt",
                          "line-height": "200%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "200%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          6.
                          <span style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <b>
                          <u>
                            <span
                              style={{
                                "font-size": "10.5pt",
                                "line-height": "200%",
                                "font-family": '"Tahoma",sans-serif',
                              }}
                            >
                              OBLIGATIONS OF THE CONSULTANT{" "}
                            </span>
                          </u>
                        </b>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          6.1.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          The Consultant agrees to provide and be available to
                          provide Medical Services to patients at the Hospital
                          in the department mentioned under <b>Schedule 1</b>
                          hereinafter.
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          6.2.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          The Consultant shall follow protocols as per the law
                          of the land.{" "}
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          6.3.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          The Consultant agrees to assist in the development of
                          emergency service rosters and other
                          facilities/services relevant to the Medical Services
                          in his/her department.
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          6.4.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          The Consultant agrees to notify the Hospital in
                          accordance with Hospital procedures or in the absence
                          of such procedures within a reasonable period of time,
                          of any matter of which he/she is aware and about which
                          a prudent Medical Practitioner should reasonably
                          believe the Hospital should be notified. This
                          includes:
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": "93.75pt",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          a)<span style={{}}>&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "line-height": "150%",
                              "font-family": '"Tahoma",sans-serif',
                            }}
                          >
                            involving the Consultant:{" "}
                          </span>
                        </b>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": "1.75in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": "Symbol",
                          }}
                        >
                          ·
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          misconduct of the Consultant
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": "1.75in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": "Symbol",
                          }}
                        >
                          ·
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          fines imposed or registration as a Medical
                          Practitioner being made conditional, suspended,
                          removed or lapsing;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": "1.75in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": "Symbol",
                          }}
                        >
                          ·
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          charges with or convictions of any criminal offence
                          involving moral turpitude;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": "1.75in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": "Symbol",
                          }}
                        >
                          ·
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          actual or potential conflicts of interest; or{" "}
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": "1.75in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": "Symbol",
                          }}
                        >
                          ·
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          actual or anticipated failures to comply with this
                          Agreement, including specifically any inability or
                          non-availability to provide Medical Services; and
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": "93.75pt",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          b)<span style={{}}>&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "line-height": "150%",
                              "font-family": '"Tahoma",sans-serif',
                            }}
                          >
                            involving any Hospital patient:
                          </span>
                        </b>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": "129.75pt",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": "Symbol",
                          }}
                        >
                          ·
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          Adverse incidents;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": "129.75pt",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": "Symbol",
                          }}
                        >
                          ·
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          Verbal or written complaints received;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": "129.75pt",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": "Symbol",
                          }}
                        >
                          ·
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          Threats of legal action or legal notice or summons
                          received; or{" "}
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": "129.75pt",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": "Symbol",
                          }}
                        >
                          ·
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          Any other matter which may adversely affect the
                          Hospital.{" "}
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          6.5.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "line-height": "150%",
                              "font-family": '"Tahoma",sans-serif',
                            }}
                          >
                            Obligation to Co-operate:
                          </span>
                        </b>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": ".75in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.75in",
                          "text-indent": "-.75in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          6.5.1.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          Subject to sub-clause (b):{" "}
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": "1.25in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          (a)
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          if requested by the Company, the Consultant must
                          provide as soon as reasonably practicable all relevant
                          details of any matters of which the Hospital is
                          notified under Clause&nbsp; 6.4 or otherwise becomes
                          aware; and{" "}
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": "1.25in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          (b)
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          the Consultant must take all reasonable steps to
                          assist the Hospital in inquiring into and resolving
                          any complaint, dispute or other difficulty arising
                          under or in connection with this Agreement.
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": ".75in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.75in",
                          "text-indent": "-.75in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          6.5.2.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          Nothing in Clauses 6.4 or 6.5 requires the Consultant
                          to disclose information to the Hospital where to do so
                          would cause the Consultant to be in breach of their
                          respective obligations to any insurer, or which may
                          significantly prejudice any claim by the Consultant
                          under their respective medical license or professional
                          indemnity insurance. In any such circumstances the
                          Consultant must use his best endeavors to obtain the
                          requisite approval to disclosure of the information
                          required by the Hospital and must disclose the
                          information to the Hospital in accordance with any
                          approval given.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          margin: "0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-22.5pt",
                          "text-indent": "-22.5pt",
                          "line-height": "200%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "200%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          7.
                          <span style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <b>
                          <u>
                            <span
                              style={{
                                "font-size": "10.5pt",
                                "line-height": "200%",
                                "font-family": '"Tahoma",sans-serif',
                                color: "windowtext",
                              }}
                            >
                              REPRESENTATIONS &amp; WARRANTIES
                            </span>
                          </u>
                        </b>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          7.1.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          The Consultant represents and warrants to Company
                          that, the Consultant has full right to enter into and
                          fully perform this Agreement, and entering into this
                          Agreement with the Company will not in any way
                          infringe upon or violate any applicable law, rule or
                          regulation, any contract with a third party or any
                          rights of any third person.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          7.2.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          The Consultant represents that he/
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          she
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          {" "}
                          shall provide the services in a diligent manner to the
                          full and complete satisfaction of the Company in
                          compliance with the applicable standards and Protocols
                          of the Company.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          7.3.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          The Consultant will be responsible for medical
                          investigation, treatment, discharge, and follow-ups
                          and pre- and post-operative care of the patients
                          admitted under{" "}
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          her/his
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          {" "}
                          supervision and care.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          7.4.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          The Consultant warrants that all the Documents
                          provided by the Consultant under Schedule C to this
                          agreement are true.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          7.5.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          The Company has represented to the Consultant that the
                          Company has full right to enter into and fully perform
                          this Agreement, and entering into this Agreement with
                          the Consultant, will not in any way infringe upon or
                          violate any applicable law, rule or regulation, any
                          contract with a third party or any rights of any third
                          person.{" "}
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          margin: "0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-22.5pt",
                          "text-indent": "-22.5pt",
                          "line-height": "200%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "200%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          8.
                          <span style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <b>
                          <u>
                            <span
                              style={{
                                "font-size": "10.5pt",
                                "line-height": "200%",
                                "font-family": '"Tahoma",sans-serif',
                                color: "windowtext",
                              }}
                            >
                              INTELLECTUAL PROPERTY RIGHTS
                            </span>
                          </u>
                        </b>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          8.1.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          If the Consultant discovers or participates in the
                          making or discovery of Intellectual Property during
                          the Term of this Agreement by using the resources of
                          Company or otherwise (irrespective of whether he was
                          carrying out his normal duties or others specifically
                          assigned to him) then all such Intellectual Property
                          shall belong to the Company absolutely.&nbsp; For the
                          purpose of this Agreement. “Intellectual Property”
                          includes letters patent, trademarks, service marks,
                          copyrights, design rights, applications for
                          registration of any of the foregoing and the right to
                          apply for them in any part of the world, creations,
                          arrangements, devices, inventions or improvements upon
                          or additions to an invention, moral rights,
                          Confidential Information, know-how and rights of a
                          similar nature arising or subsisting anywhere in the
                          world in relation to all of the foregoing whether
                          registered or unregistered.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          8.2.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          The Consultant shall forthwith notify to the Company
                          full details of all Intellectual Property which he/she
                          may make discover or participate in the making or
                          discovery during the Term of this Agreement, and will
                          keep the Company appraised at all times of the stage
                          that has been reached in relation to any improvement
                          or creation of such Intellectual Property.&nbsp; If
                          the Company requests, the Consultant shall give and
                          supply all such information, data, drawings and
                          assistance as may be required to enable the Company to
                          exploit the Intellectual Property to the best
                          advantage.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          8.3.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          The Consultant&nbsp; shall, without payment of any
                          consideration to the Consultant, take all steps and
                          carry out all acts that may be necessary to ensure
                          that the title to the Intellectual Property is
                          lawfully vested in the Company, including signing all
                          applications and executing any other documents that
                          may be necessary and will carry out such acts and
                          steps with expedition on the instructions of the
                          Company, in particular where the filing of any claim
                          to such Intellectual Property right may give the
                          Company priority.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          8.4.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          The Consultant hereby irrevocably appoints the Company
                          as his lawful attorney in his name and on his/ her
                          behalf to execute any documents and generally to act
                          and to use his/ her name for the purpose of giving the
                          full benefit of this clause to the Company (or its
                          nominee).&nbsp; A certificate in writing signed by a
                          director of the Company that an instrument or act
                          falls within the authority confirmed by this clause
                          shall be conclusive evidence in favor of a third party
                          that it is the case.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          8.5.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          The provisions of this Clause&nbsp; shall remain in
                          force with regard to any Intellectual Property made or
                          discovered during the Term of this Agreement and shall
                          be binding upon the Consultant’s legal representatives
                          notwithstanding the termination of this Agreement
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          8.6.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          It is clarified that all Intellectual Property of the
                          Company shall be exclusive property of Company and
                          Company shall remain the absolute owner of the same
                          and all rights thereto shall continue to vest in the
                          Company only.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          8.7.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          The Company, its affiliates and associates own all
                          Intellectual Property Rights attached to the Company.
                          This Agreement does not constitute and shall not be
                          construed as an assignment or sale or transfer of any
                          trademark rights or any other Intellectual Property
                          rights of the Company, its affiliates and associates
                          in any manner whatsoever to Consultant. Consultant
                          undertake that he/
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          she
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          {" "}
                          shall not, at any time, during the subsistence of this
                          Agreement or at any time after its termination or
                          expiry of this Agreement claim ownership or user
                          rights or interest in respect of the name, trademarks,
                          logo, artwork and brand names of Company or use the
                          trademark without obtaining prior permission from the
                          Company.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          8.8.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          The Consultant shall not be permitted to use any of
                          the brand name of the Company for any purposes without
                          the prior written consent of the Company and shall not
                          take any action that will constitute infringement of
                          Brand name of the Company in any manner whatsoever.
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": "0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-22.5pt",
                          "text-indent": "-22.5pt",
                          "line-height": "200%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "200%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          9.
                          <span style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <b>
                          <u>
                            <span
                              style={{
                                "font-size": "10.5pt",
                                "line-height": "200%",
                                "font-family": '"Tahoma",sans-serif',
                              }}
                            >
                              DATA PROTECTION
                            </span>
                          </u>
                        </b>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          9.1.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          The Consultant shall at all times during the Term act
                          in accordance with the law relating to data protection
                          applicable to the Company including pursuant to any
                          client contract and shall also comply with any policy
                          introduced by the Company from time to time to comply
                          with the data protection. If there is no policy, then
                          the Consultant shall do everything that needs to be
                          done as per law to protect the sensitive personal
                          data.{" "}
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          9.2.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          The Consultant&nbsp; hereby consents to the Company
                          holding and processing both electronically and
                          manually the personal data it collects which relates
                          to the Consultant&nbsp; which is necessary or
                          reasonably required for the proper performance of this
                          Agreement, for management, administrative and other
                          related purposes or for the conduct of the group’s
                          business or to comply with client’s requirement,
                          applicable laws, rules and regulations and the
                          Consultant&nbsp; agrees to provide the Company’s group
                          with all personal data relating to him/ her which is
                          necessary or reasonably required for the aforesaid
                          purposes.{" "}
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          9.3.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          The Consultant agrees that all the information
                          provided by him/her will be stored in electronic form.
                          The Company is not responsible for any data breach. In
                          the event of a data breach, the Consultant shall not
                          hold the Company responsible and shall not claim any
                          damages for the breach.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          margin: "0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-22.5pt",
                          "text-indent": "-22.5pt",
                          "line-height": "200%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "200%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          10.<span style={{}}>&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <b>
                          <u>
                            <span
                              style={{
                                "font-size": "10.5pt",
                                "line-height": "200%",
                                "font-family": '"Tahoma",sans-serif',
                                color: "windowtext",
                              }}
                            >
                              CONFLICT OF INTEREST
                            </span>
                          </u>
                        </b>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          10.1.
                          <span style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          The Consultant shall declare on signing of this
                          Agreement all current external positions held such as
                          other employment, directorship, trusteeship,
                          partnership and offices of responsibility including
                          honorary positions held including the potential
                          positions which is conflicting with the Company’s
                          interest. During the term of this Agreement, the
                          Consultant agrees not to undertake any obligation or
                          assignment contractual or otherwise, which may involve
                          actual or potential conflict of interest with the
                          business of the Company.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          10.2.
                          <span style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          The Consultant agrees and undertakes that Consultant
                          will not during the subsistence of this agreement and
                          three years after termination of this agreement,
                          directly or indirectly solicit, divert or attempt to
                          solicit or divert for{" "}
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          her
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          {" "}
                          benefit or on behalf of any other person, firm,
                          corporation, partnership or any other entity, either
                          directly or indirectly any patient for whom the
                          Company has performed any services during the period
                          of Consultant’s association with the Company.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          margin: "0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-22.5pt",
                          "text-indent": "-22.5pt",
                          "line-height": "200%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "200%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          11.<span style={{}}>&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <b>
                          <u>
                            <span
                              style={{
                                "font-size": "10.5pt",
                                "line-height": "200%",
                                "font-family": '"Tahoma",sans-serif',
                                color: "windowtext",
                              }}
                            >
                              INDEMNIFICATION
                            </span>
                          </u>
                        </b>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          11.1
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          The Consultant shall be fully responsible for the{" "}
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          clinical treatment given to the patient(s) under this
                          agreement. The Company shall be kept indemnified
                          against any medico legal liability arising out of the
                          medical treatment provided by the Consultant and which
                          arise during or after the expiry of this agreement.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          11.2
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          The Consultant agrees to defend with counsel
                          acceptable to the Company (or settle at the
                          Consultant’s sole cost &amp;expense), indemnify and
                          hold the Company/Hospital its affiliates, assignees
                          and each of its and their managing directors,
                          directors, officers, partners, employees and agents
                          (collectively, the “Indemnified Parties”) harmless
                          from and against any and all suits, liabilities
                          incurred, claims and proceedings by third parties
                          relating to and/or resulting in liabilities, damages,
                          costs, losses and expenses, including court costs and
                          reasonable attorneys’ fees, which arise out of the
                          performance or non-performance by Consultant pursuant
                          to this Agreement or out of the breach of any of the
                          terms of this Agreement.{" "}
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          11.3
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          The Consultant shall obtain professional indemnity
                          insurance policy as per Clause 5.6 mentioned herein
                          above.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          11.4
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          Notwithstanding anything stated above, if any
                          authority or Courts or Tribunals or statutory
                          authorities were to find that the Company is
                          vicariously liable for any medical negligence of the
                          Consultant, the Consultant agrees to indemnify the
                          Company to the extent of any claim to which the
                          Company may become liable including expenses to be
                          incurred for defending any proceedings.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          margin: "0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-22.5pt",
                          "text-indent": "-22.5pt",
                          "line-height": "200%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "200%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          12.<span style={{}}>&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <b>
                          <u>
                            <span
                              style={{
                                "font-size": "10.5pt",
                                "line-height": "200%",
                                "font-family": '"Tahoma",sans-serif',
                                color: "windowtext",
                              }}
                            >
                              CONFIDENTIALITY
                            </span>
                          </u>
                        </b>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          12.1.
                          <span style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          All discussions and services held/provided/to be
                          provided by and between the Consultant and Company are
                          of a sensitive and confidential nature and all
                          continued interactions shall be of such nature. The
                          parties hereto in mutual trust and respect agree and
                          warrant to keep confidential all such discussion and
                          interactions including but not limited to information,
                          documents, inventions, know-how, and other
                          intellectual property, trade secrets, and other
                          confidential information relating to the services or
                          otherwise (hereinafter “Confidential Information”,
                          which expression shall include the terms of this
                          arrangement). The parties therefore shall during the
                          Term and thereafter hold such information and all
                          Confidential Information in strict confidence and
                          shall neither disclose the same to any third party nor
                          use it in any manner without prior written consent of
                          the other contracting party.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          12.2.
                          <span style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          The Consultant agrees that he/
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          she
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          {" "}
                          shall not, without the written consent of the Company,
                          disclose to third parties or use for{" "}
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          her
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          {" "}
                          own financial benefit or for the financial or other
                          benefit of any direct or indirect competitor of
                          Company, any information, data, and know-how, manuals,
                          disks, or otherwise, including all programs, decks,
                          listings, tapes, summaries of any papers, documents,
                          plans, specifications, or drawings, which belong to
                          the Company.{" "}
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          12.3.
                          <span style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          The Consultant agrees that all confidential
                          information of the Company shall be deemed to be and
                          shall be treated as the sole and exclusive property of
                          Company.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          12.4.
                          <span style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          In the event of the breach of this clause by the
                          Consultant, the Company shall have the right to seek
                          such remedies at law or in equity against the
                          Consultant including but not limited to termination of
                          this agreement forthwith without any notice and the
                          Company can also claim damages. This section shall
                          survive the termination of this agreement for any
                          reason whatsoever.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": "22.5pt",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-22.5pt",
                          "text-indent": "-22.5pt",
                          "line-height": "200%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "200%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          13.<span style={{}}>&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "line-height": "200%",
                              "font-family": '"Tahoma",sans-serif',
                              color: "windowtext",
                            }}
                          >
                            FORCE MAJEAURE
                          </span>
                        </b>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": "58.4pt",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          13.1
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          Notwithstanding anything to the contrary herein
                          contained,&nbsp; if there is any
                          hindrance/obstruction/Disruption in the business of
                          the company, which results into complete or partial
                          stoppage of work or business activity of the Company{" "}
                        </span>
                        <span
                          lang="EN-IN"
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          or any reason whatsoever including any Force majeure
                          event,
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          {" "}
                          acts of God, fires, explosions, accidents, embargoes,
                          wars, riots, labour disputes, strikes, outbreak of an
                          epidemic or pandemic disease,&nbsp; governmental
                          requirements
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          {" "}
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          ,civil unrest, civil commotion, strike, Lockout, Court
                          orders, Government order etc. or for any reason
                          whatsoever then in such an event, the Company will not
                          be obligated to pay any consideration for the period
                          of such Interruption/disruption/hinderance to the
                          Consultant.
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          {" "}
                          Such Force Majeure situation shall be notified to the
                          Consultant within 30(Thirty days) days from the
                          occurrence of the same.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          margin: "0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-22.5pt",
                          "text-indent": "-22.5pt",
                          "line-height": "200%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "200%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          14.<span style={{}}>&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <b>
                          <u>
                            <span
                              style={{
                                "font-size": "10.5pt",
                                "line-height": "200%",
                                "font-family": '"Tahoma",sans-serif',
                                color: "windowtext",
                              }}
                            >
                              SURVIVAL
                            </span>
                          </u>
                        </b>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          14.1.
                          <span style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          All such provisions (or relevant part thereof) where
                          the context requires shall survive the termination of
                          this Agreement.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          margin: "0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-22.5pt",
                          "text-indent": "-22.5pt",
                          "line-height": "200%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "200%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          15.<span style={{}}>&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <b>
                          <u>
                            <span
                              style={{
                                "font-size": "10.5pt",
                                "line-height": "200%",
                                "font-family": '"Tahoma",sans-serif',
                                color: "windowtext",
                              }}
                            >
                              MISCELLANEOUS{" "}
                            </span>
                          </u>
                        </b>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          15.1.
                          <span style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          The Consultant will render the professional services
                          independently as per{" "}
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          her
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          {" "}
                          own expertise and Consultant will have full liberty to
                          perform the services based on{" "}
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          her
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          {" "}
                          knowledge and skills without interference of company’s
                          employees or representatives. However, the Consultant
                          should perform professional duties faithfully and
                          diligently without any breach of law or Protocols of
                          the Company formulated from time to time and will not
                          indulge in any unfair or unethical practice in any
                          manner.&nbsp;
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          15.2.
                          <span style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          Nothing contained in this Agreement shall be deemed to
                          create an employee employer relationship between
                          Consultant and the Company&nbsp;accordingly Company
                          shall not be liable to make any statutory payments to
                          Consultant. Specifically, no provident fund or
                          ESI&nbsp;contribution&nbsp;shall be deducted from
                          payments to Consultant. Consultant{" "}
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "black",
                          }}
                        >
                          also agree not to act or represent before any other
                          party as an employee of the Company.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          15.3.
                          <span style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "black",
                          }}
                        >
                          During the term of this Agreement, Consultant shall
                          not receive any cash directly from the patient(s).
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          15.4.
                          <span style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          The Parties expressly do not intend hereby to form a
                          partnership, either general or limited, under any
                          jurisdiction's partnership law. The Parties do not
                          intend to be partners one to another, or partners as
                          to any third party, or create any fiduciary
                          relationship among them.{" "}
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          15.5.
                          <span style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          This Agreement may be executed in any number of
                          originals or counterparts, each in the like form and
                          all of which when taken together shall constitute one
                          and the same document and any Party may execute this
                          Agreement by signing any one or more of such originals
                          or counterparts.{" "}
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          15.6.
                          <span style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          No variation of this Agreement shall be binding on any
                          Party unless such variation is in writing and signed
                          by or on behalf of each of the Parties hereto.{" "}
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          15.7.
                          <span style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          This Agreement shall not be capable of assignment by
                          the Consultant.&nbsp; The Company may however assign
                          this Agreement to any third party without requiring
                          any consent or approval of the Consultant.{" "}
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          15.8.
                          <span style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          No waiver of any breach of any provision of this
                          Agreement shall constitute a waiver of any prior,
                          concurrent or subsequent breach of the same or any
                          other provisions hereof, and no waiver shall be
                          effective unless made in writing and signed by an
                          authorized representative of the waiving Party.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          15.9.
                          <span style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          Each and every obligation under this Agreement shall
                          be treated as a separate obligation and shall be
                          severally enforceable as such and in the event of any
                          obligation or obligations being or becoming
                          unenforceable in whole or in part. To the extent that
                          any provision or provisions of this Agreement are
                          unenforceable the Parties shall endeavor to amend such
                          articles as may be necessary to make the provision or
                          provisions valid and effective. Notwithstanding the
                          foregoing any provision which cannot be amended as may
                          be necessary to make it valid and effective shall be
                          deemed to be deleted from this Agreement and any such
                          deletion shall not affect the enforceability of the
                          remainder of this Agreement not so deleted provided
                          the fundamental terms of the Agreement are not
                          altered.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          15.10.<span style={{}}>&nbsp;&nbsp;</span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          This Agreement along with the Schedules constitute the
                          whole agreement between the Parties relating to the
                          subject matter hereof and supersedes any prior
                          arrangements whether oral or written, relating to such
                          subject matter. No Party has relied upon any
                          representation or warranty in entering this Agreement
                          other than those expressly contained herein.{" "}
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          margin: "0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-22.5pt",
                          "text-indent": "-22.5pt",
                          "line-height": "200%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "200%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          16.<span style={{}}>&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <b>
                          <u>
                            <span
                              style={{
                                "font-size": "10.5pt",
                                "line-height": "200%",
                                "font-family": '"Tahoma",sans-serif',
                                color: "windowtext",
                              }}
                            >
                              COMMUNICATION
                            </span>
                          </u>
                        </b>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          16.1.
                          <span style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          Any notice or other communication to be given by
                          either party hereunder shall be in writing and signed
                          by or on behalf of the party giving it. It shall be
                          given in person or sent by registered mail or through
                          courier to the address mentioned in the beginning of
                          this agreement if it is to the Company and to the
                          address mentioned in <b>Schedule 1</b> if it is to the
                          Consultant. The Company may send any notice or may
                          communicate to the Consultant by way of an email
                          mentioned at
                          <b>Schedule 1</b> to this agreement{" "}
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": "0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-22.5pt",
                          "text-indent": "-22.5pt",
                          "line-height": "200%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "200%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          17.<span style={{}}>&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <b>
                          <u>
                            <span
                              style={{
                                "font-size": "10.5pt",
                                "line-height": "200%",
                                "font-family": '"Tahoma",sans-serif',
                              }}
                            >
                              REMEDIES FOR BREACH{" "}
                            </span>
                          </u>
                        </b>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          17.1.
                          <span style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          The Consultant agrees that upon a breach of this
                          Agreement by the Consultant and failure by Consultant
                          to rectify such breach within the cure period of seven
                          (7) days, only if such breach is capable of such cure
                          or rectification as per the Company, the Company shall
                          have the right to recover all the losses and damages
                          suffered by it and the Consultant shall be liable to
                          pay to the Company for the losses suffered by the
                          Company.{" "}
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          17.2.
                          <span style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          The Consultant agrees that any negative covenants,
                          obligations and/or undertakings given to the Company
                          shall be specifically enforceable by injunction and
                          any damages claimed in addition thereto shall not
                          constitute a defense to any claim of injunction nor
                          prevent the grant of specific relief to the Company.
                          The Consultant&nbsp; expressly waives the defense that
                          damages are sufficient alternate relief to an
                          injunction and the Consultant&nbsp; confirms, assures
                          and represents that each and all the negative
                          covenants and obligations and undertakings referred to
                          herein or separately executed in favor of the Company
                          shall be enforceable by one or more injunctions
                          prohibiting the breach of any covenant or compelling
                          specific performance of any obligation or the
                          observance of any covenant on the part of the
                          Consultant&nbsp; as contracted herein (whether by way
                          of ad interim or interim relief, or otherwise by way
                          of permanent injunction and damages).{" "}
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          17.3.
                          <span style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          No remedy conferred by any of the provisions of this
                          Agreement is intended to be exclusive of any other
                          remedy which is otherwise available at law, in equity,
                          by statute or otherwise, and each and every other
                          remedy shall be cumulative and shall be in addition to
                          every other remedy given hereunder or now or hereafter
                          existing at law, in equity, by statute or otherwise.
                          The election of any one or more of such remedies by
                          any of the Parties hereto shall not constitute a
                          waiver by such party of the right to pursue any other
                          available remedy.{" "}
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-bottom": "0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "line-height": "150%",
                        }}
                      >
                        <b>
                          <u>
                            <span
                              style={{
                                "font-size": "10.5pt",
                                "line-height": "150%",
                                "font-family": '"Tahoma",sans-serif',
                                color: "windowtext",
                              }}
                            >
                              <span
                                style={{
                                  "-webkit-text-decoration": "none",
                                  "text-decoration": "none",
                                }}
                              >
                                &nbsp;
                              </span>
                            </span>
                          </u>
                        </b>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          margin: "0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-22.5pt",
                          "text-indent": "-22.5pt",
                          "line-height": "200%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "200%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          18.<span style={{}}>&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <b>
                          <u>
                            <span
                              style={{
                                "font-size": "10.5pt",
                                "line-height": "200%",
                                "font-family": '"Tahoma",sans-serif',
                                color: "windowtext",
                              }}
                            >
                              DISPUTE RESOLUTION
                            </span>
                          </u>
                        </b>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          18.1.
                          <span style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          This Agreement shall be governed and construed in
                          accordance with the laws of India, and any disputes
                          therein shall fall within the exclusive jurisdiction
                          of the courts in Bangalore, India.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          18.2.
                          <span style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            "letter-spacing": "-.1pt",
                          }}
                        >
                          In the event of any dispute arising between the
                          parties with respect to this Agreement, the same shall
                          be referred to the Sole Arbitrator and the arbitration
                          shall be in accordance with Arbitration and
                          Conciliation Act of 1996. The language of arbitration
                          proceeding shall be English. The seat and place of
                          arbitration shall be Bangalore and the decision of the
                          Arbitrator shall be final and binding on both parties
                          herein.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          margin: "0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-22.5pt",
                          "text-indent": "-22.5pt",
                          "line-height": "200%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "200%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          19.<span style={{}}>&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <b>
                          <u>
                            <span
                              style={{
                                "font-size": "10.5pt",
                                "line-height": "200%",
                                "font-family": '"Tahoma",sans-serif',
                                color: "windowtext",
                              }}
                            >
                              ANTI BRIBERY:
                            </span>
                          </u>
                        </b>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          19.1.
                          <span style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          Each party covenants and undertakes that they shall
                          not permit any of the their Subsidiaries or Affiliates
                          or any of their representatives or agents to promise,
                          authorize or make any payment to, or otherwise
                          contribute any item of value directly or indirectly,
                          to any third party, including any Non- U.S. Official
                          (as defined under the Foreign Corrupt Practices Act,
                          1977 ("FCPA")), in each case, in violation of the FCPA
                          or Prevention of Corruption Act, 1988 ("PCA"), the
                          (UK) Anti-Bribery Act (“ABA”) or any other applicable
                          anti-bribery or anti-corruption laws.
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          margin: "0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-22.5pt",
                          "text-indent": "-22.5pt",
                          "line-height": "200%",
                        }}
                      >
                        <span
                          lang="EN-GB"
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "200%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          20.<span style={{}}>&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <b>
                          <u>
                            <span
                              style={{
                                "font-size": "10.5pt",
                                "line-height": "200%",
                                "font-family": '"Tahoma",sans-serif',
                                color: "windowtext",
                              }}
                            >
                              MISCELLANEOUS
                            </span>
                          </u>
                        </b>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "200%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          {" "}
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": ".5in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.5in",
                          "text-indent": "-.5in",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          lang="EN-GB"
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          20.1.
                          <span style={{}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          This Agreement shall supersede all previous
                          agreements, understandings, contracts and any other
                          documents in respect to the services mentioned under
                          this Agreement.{" "}
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": "-14.2pt",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "14.2pt",
                          "text-indent": "14.2pt",
                          "line-height": "150%",
                        }}
                      >
                        <b>
                          <span
                            lang="EN-GB"
                            style={{
                              "font-size": "10.5pt",
                              "line-height": "150%",
                              "font-family": '"Tahoma",sans-serif',
                              color: "windowtext",
                            }}
                          >
                            IN WITNESS WHEREOF
                          </span>
                        </b>
                        <span
                          lang="EN-GB"
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          {" "}
                          the parties hereto have signed and executed this
                          Agreement on the date first mentioned hereinabove in
                          the presence of the following witnesses
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          ;
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": "-14.2pt",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "14.2pt",
                          "text-indent": "14.2pt",
                          "line-height": "200%",
                        }}
                      >
                        <span
                          lang="EN-GB"
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "200%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          &nbsp;
                        </span>
                      </p>
                      <p
                        className="WW-Default"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "0in",
                          "margin-left": "-14.2pt",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "14.2pt",
                          "text-indent": "14.2pt",
                          "line-height": "200%",
                        }}
                      >
                        <span
                          lang="EN-GB"
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "200%",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          &nbsp;
                        </span>
                      </p>
                      <table
                        className="MsoNormalTable"
                        border={0}
                        cellSpacing={0}
                        cellPadding={0}
                        width={666}
                        style={{
                          "margin-left": "4.5pt",
                          "border-collapse": "collapse",
                        }}
                      >
                        <tbody>
                          <tr>
                            <td
                              width={366}
                              valign="top"
                              style={{
                                width: "274.5pt",
                                padding: "0in 5.4pt 0in 5.4pt",
                              }}
                            >
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  For <b>Kids Clinic India Pvt. Ltd.</b>
                                </span>
                              </p>
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                            </td>
                            <td
                              width={300}
                              valign="top"
                              style={{
                                width: "225.0pt",
                                padding: "0in 5.4pt 0in 5.4pt",
                              }}
                            >
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td
                              width={366}
                              valign="top"
                              style={{
                                width: "274.5pt",
                                padding: "0in 5.4pt 0in 5.4pt",
                              }}
                            >
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  Name:{" "}
                                  <b>
                                    {" "}
                                    {oboard &&
                                      oboard.doctorCommercial &&
                                      oboard.doctorCommercial[0] &&
                                      oboard.doctorCommercial[0].fullname}
                                  </b>
                                </span>
                                {/* <b> */}
                                {/* <span
                                    lang="EN-GB"
                                    style={{
                                      "font-size": "10.5pt",
                                      "font-family": '"Tahoma",sans-serif',
                                    }}
                                  >
                                    <h4 style={{ color: "black",  "font-size": "11pt" }}>
                                      {oboard &&
                                        oboard.doctorCommercial &&
                                        oboard.doctorCommercial[0] &&
                                        oboard.doctorCommercial[0].fullname}
                                    </h4>
                                  </span>
                                </b> */}
                              </p>
                            </td>
                            <td
                              width={300}
                              valign="top"
                              style={{
                                width: "225.0pt",
                                padding: "0in 5.4pt 0in 5.4pt",
                              }}
                            >
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td
                              width={366}
                              valign="top"
                              style={{
                                width: "274.5pt",
                                padding: "0in 5.4pt 0in 5.4pt",
                              }}
                            >
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  Designation: <b>Chief Executive Officer</b>
                                </span>
                              </p>
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  Date:{" "}
                                  <b>
                                    {" "}
                                    {new Date(k)
                                      .toLocaleString()
                                      .toString()
                                      .substring(0, 9)}
                                  </b>
                                  {/* <h4 style={{ color: "blue" }}></h4> */}
                                </span>
                              </p>
                            </td>
                            <td
                              width={300}
                              valign="top"
                              style={{
                                width: "225.0pt",
                                padding: "0in 5.4pt 0in 5.4pt",
                              }}
                            >
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  {/* _________
                                  <h4 style={{ color: "blue" }}>??*Input*??</h4>
                                  ___ */}
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td
                              width={366}
                              valign="top"
                              style={{
                                width: "274.5pt",
                                padding: "0in 5.4pt 0in 5.4pt",
                              }}
                            >
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                            </td>
                            <td
                              width={300}
                              valign="top"
                              style={{
                                width: "225.0pt",
                                padding: "0in 5.4pt 0in 5.4pt",
                              }}
                            >
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td
                              width={366}
                              valign="top"
                              style={{
                                width: "274.5pt",
                                padding: "0in 5.4pt 0in 5.4pt",
                              }}
                            >
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                            </td>
                            <td
                              width={300}
                              valign="top"
                              style={{
                                width: "225.0pt",
                                padding: "0in 5.4pt 0in 5.4pt",
                              }}
                            >
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr style={{ height: "60.25pt" }}>
                            <td
                              width={366}
                              valign="top"
                              style={{
                                width: "274.5pt",
                                padding: "0in 5.4pt 0in 5.4pt",
                                height: "60.25pt",
                              }}
                            >
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  Witness:
                                </span>
                              </p>
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  Name:{" "}
                                </span>
                              </p>
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  Address:
                                </span>
                              </p>
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                            </td>
                            <td
                              width={300}
                              valign="top"
                              style={{
                                width: "225.0pt",
                                padding: "0in 5.4pt 0in 5.4pt",
                                height: "60.25pt",
                              }}
                            >
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  {/* ) */}
                                </span>
                              </p>
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  {/* <h4 style={{ color: "blue" }}>??*Input*??</h4> */}
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td
                              width={366}
                              valign="top"
                              style={{
                                width: "274.5pt",
                                padding: "0in 5.4pt 0in 5.4pt",
                              }}
                            >
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <b>
                                  <span
                                    lang="EN-GB"
                                    style={{
                                      "font-size": "10.5pt",
                                      "font-family": '"Tahoma",sans-serif',
                                      color: "windowtext",
                                    }}
                                  >
                                    Signed by the Consultant
                                  </span>
                                </b>
                              </p>
                            </td>
                            <td
                              width={300}
                              valign="top"
                              style={{
                                width: "225.0pt",
                                padding: "0in 5.4pt 0in 5.4pt",
                              }}
                            >
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td
                              width={366}
                              valign="top"
                              style={{
                                width: "274.5pt",
                                padding: "0in 5.4pt 0in 5.4pt",
                              }}
                            >
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <b>
                                  <span
                                    lang="EN-GB"
                                    style={{
                                      "font-size": "10.5pt",
                                      "font-family": '"Tahoma",sans-serif',
                                      color: "windowtext",
                                    }}
                                  >
                                    &nbsp;
                                  </span>
                                </b>
                              </p>
                            </td>
                            <td
                              width={300}
                              valign="top"
                              style={{
                                width: "225.0pt",
                                padding: "0in 5.4pt 0in 5.4pt",
                              }}
                            >
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td
                              width={366}
                              valign="top"
                              style={{
                                width: "274.5pt",
                                padding: "0in 5.4pt 0in 5.4pt",
                              }}
                            >
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <b>
                                  <span
                                    lang="EN-GB"
                                    style={{
                                      "font-size": "10pt",
                                      "font-family": '"Tahoma",sans-serif',
                                      color: "windowtext",
                                    }}
                                  >
                                    Dr.{" "}
                                    {oboard &&
                                      oboard.doctorCommercial &&
                                      oboard.doctorCommercial[0] &&
                                      oboard.doctorCommercial[0].fullname}
                                  </span>
                                  {/* <h4 style={{ color: "black",  "font-size": "10.5pt" }}>
                                    {oboard &&
                                      oboard.doctorCommercial &&
                                      oboard.doctorCommercial[0] &&
                                      oboard.doctorCommercial[0].fullname}
                                  </h4> */}
                                </b>
                                <b>
                                  <span
                                    lang="EN-GB"
                                    style={{
                                      "font-size": "10.5pt",
                                      "font-family": '"Tahoma",sans-serif',
                                    }}
                                  ></span>
                                </b>
                              </p>
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  Date:{" "}
                                  {new Date(k)
                                    .toLocaleString()
                                    .toString()
                                    .substring(0, 9)}
                                  {/* <h4 style={{ color: "black",  "font-size": "10pt" }}>
                                    {new Date(k)
                                      .toLocaleString()
                                      .toString()
                                      .substring(0, 9)}
                                  </h4> */}
                                </span>
                              </p>
                            </td>
                            <td
                              width={300}
                              valign="top"
                              style={{
                                width: "225.0pt",
                                padding: "0in 5.4pt 0in 5.4pt",
                              }}
                            >
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  {/* <h4 style={{ color: "blue" }}>??*Input*??</h4> */}
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td
                              width={366}
                              valign="top"
                              style={{
                                width: "274.5pt",
                                padding: "0in 5.4pt 0in 5.4pt",
                              }}
                            >
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <b>
                                  <span
                                    lang="EN-GB"
                                    style={{
                                      "font-size": "10.5pt",
                                      "font-family": '"Tahoma",sans-serif',
                                      color: "windowtext",
                                    }}
                                  >
                                    &nbsp;
                                  </span>
                                </b>
                              </p>
                            </td>
                            <td
                              width={300}
                              valign="top"
                              style={{
                                width: "225.0pt",
                                padding: "0in 5.4pt 0in 5.4pt",
                              }}
                            >
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td
                              width={366}
                              valign="top"
                              style={{
                                width: "274.5pt",
                                padding: "0in 5.4pt 0in 5.4pt",
                              }}
                            >
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <b>
                                  <span
                                    lang="EN-GB"
                                    style={{
                                      "font-size": "10.5pt",
                                      "font-family": '"Tahoma",sans-serif',
                                      color: "windowtext",
                                    }}
                                  >
                                    &nbsp;
                                  </span>
                                </b>
                              </p>
                            </td>
                            <td
                              width={300}
                              valign="top"
                              style={{
                                width: "225.0pt",
                                padding: "0in 5.4pt 0in 5.4pt",
                              }}
                            >
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td
                              width={366}
                              valign="top"
                              style={{
                                width: "274.5pt",
                                padding: "0in 5.4pt 0in 5.4pt",
                              }}
                            >
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  Witness:
                                </span>
                              </p>
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  Name:
                                </span>
                              </p>
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  Address:
                                </span>
                              </p>
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                            </td>
                            <td
                              width={300}
                              valign="top"
                              style={{
                                width: "225.0pt",
                                padding: "0in 5.4pt 0in 5.4pt",
                              }}
                            >
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  {/* ) */}
                                </span>
                              </p>
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "-webkit-text-align": "justify",
                                  "text-align": "justify",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "windowtext",
                                  }}
                                >
                                  {/* <h4 style={{ color: "blue" }}>??*Input*??</h4> */}
                                </span>
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      {/* <hr style={{border:"1 px solid black",color:"red"}} /> */}
                      <p
                        className="MsoNormal"
                        align="center"
                        style={{
                          "-webkit-text-align": "center",
                          "text-align": "center",
                          marginBottom: "10px",
                          marginTop: "-243px",
                          "font-size": "10.5pt",
                          "line-height": "115%",
                          "font-family": '"Tahoma",sans-serif',
                        }}
                      >
                        <b>
                          <h6>
                            <u>
                              <b>SCHEDULE 1:</b>
                            </u>{" "}
                          </h6>
                          {/* <u>
                            <span
                              style={{
                                "font-size": "10.5pt",
                                "line-height": "115%",
                                "font-family": '"Tahoma",sans-serif',
                                color: "white", 
                              }}
                            >
                              SCHEDULE 1:
                            </span>
                          </u> */}
                        </b>
                      </p>
                      <table
                        className="MsoTableGrid"
                        border={1}
                        cellSpacing={0}
                        cellPadding={0}
                        align="left"
                        style={{
                          "border-collapse": "collapse",
                          border: "none",
                          "margin-left": "6.75pt",
                          "margin-right": "6.75pt",
                          width: "100%",
                          marginTop: "-5px",
                        }}
                      >
                        <tbody>
                          <tr style={{ height: "19.8pt" }}>
                            <td
                              width={236}
                              valign="bottom"
                              style={{
                                width: "176.95pt",
                                border: "solid windowtext 1.0pt",
                                padding: "0in 5.4pt 0in 5.4pt",
                                height: "19.8pt",
                              }}
                            >
                              <p className="MsoNormal">
                                <b>
                                  <span
                                    lang="EN-GB"
                                    style={{
                                      "font-size": "10.5pt",
                                      "line-height": "115%",
                                      "font-family": '"Tahoma",sans-serif',
                                      color: "black",
                                    }}
                                  >
                                    Name of the Consultant
                                  </span>
                                </b>
                              </p>
                            </td>
                            <td
                              width={387}
                              valign="bottom"
                              style={{
                                width: "290.6pt",
                                border: "solid windowtext 1.0pt",
                                "border-left": "none",
                                padding: "0in 5.4pt 0in 5.4pt",
                                height: "19.8pt",
                              }}
                            >
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                  }}
                                >
                                  {oboard &&
                                    oboard.doctorCommercial &&
                                    oboard.doctorCommercial[0] &&
                                    oboard.doctorCommercial[0].fullname}
                                </span>
                              </p>
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr style={{ height: "19.8pt" }}>
                            <td
                              width={236}
                              valign="bottom"
                              style={{
                                width: "176.95pt",
                                border: "solid windowtext 1.0pt",
                                "border-top": "none",
                                padding: "0in 5.4pt 0in 5.4pt",
                                height: "19.8pt",
                              }}
                            >
                              <p className="MsoNormal">
                                <b>
                                  <span
                                    lang="EN-GB"
                                    style={{
                                      "font-size": "10.5pt",
                                      "line-height": "115%",
                                      "font-family": '"Tahoma",sans-serif',
                                      color: "black",
                                    }}
                                  >
                                    Designation
                                  </span>
                                </b>
                              </p>
                            </td>
                            <td
                              width={387}
                              valign="bottom"
                              style={{
                                width: "290.6pt",
                                "border-top": "none",
                                "border-left": "none",
                                "border-bottom": "solid windowtext 1.0pt",
                                "border-right": "solid windowtext 1.0pt",
                                padding: "0in 5.4pt 0in 5.4pt",
                                height: "19.8pt",
                              }}
                            >
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                  }}
                                >
                                  {oboard &&
                                    oboard.doctorCommercial &&
                                    oboard.doctorCommercial[0] &&
                                    oboard.doctorCommercial[0].designationlist}
                                </span>
                              </p>
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr style={{ height: "28.75pt" }}>
                            <td
                              width={236}
                              valign="bottom"
                              style={{
                                width: "176.95pt",
                                border: "solid windowtext 1.0pt",
                                "border-top": "none",
                                padding: "0in 5.4pt 0in 5.4pt",
                                height: "28.75pt",
                              }}
                            >
                              <p className="MsoNormal">
                                <b>
                                  <span
                                    lang="EN-GB"
                                    style={{
                                      "font-size": "10.5pt",
                                      "line-height": "115%",
                                      "font-family": '"Tahoma",sans-serif',
                                      color: "black",
                                    }}
                                  >
                                    Father/ Husband name of the Consultant
                                  </span>
                                </b>
                              </p>
                            </td>
                            <td
                              width={387}
                              valign="bottom"
                              style={{
                                width: "290.6pt",
                                "border-top": "none",
                                "border-left": "none",
                                "border-bottom": "solid windowtext 1.0pt",
                                "border-right": "solid windowtext 1.0pt",
                                padding: "0in 5.4pt 0in 5.4pt",
                                height: "28.75pt",
                              }}
                            >
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                  }}
                                >
                                 {oboard &&
                                    oboard.doctorCommercial &&
                                    oboard.doctorCommercial[0] &&
                                    oboard.doctorCommercial[0].fathername}
                                </span>
                              </p>
                              <p
                                className="XExecution"
                                style={{
                                  "margin-right": "0in",
                                  "line-height": "normal",
                                  "layout-grid-mode": "char",
                                }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                  }}
                                >
                                  &nbsp;
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr style={{ height: "25.15pt" }}>
                            <td
                              width={236}
                              valign="bottom"
                              style={{
                                width: "176.95pt",
                                border: "solid windowtext 1.0pt",
                                "border-top": "none",
                                padding: "0in 5.4pt 0in 5.4pt",
                                height: "25.15pt",
                              }}
                            >
                              <p className="MsoNormal">
                                <b>
                                  <span
                                    lang="EN-GB"
                                    style={{
                                      "font-size": "10.5pt",
                                      "line-height": "115%",
                                      "font-family": '"Tahoma",sans-serif',
                                      color: "black",
                                    }}
                                  >
                                    Permanent Account Number
                                  </span>
                                </b>
                              </p>
                            </td>
                            <td
                              width={387}
                              valign="bottom"
                              style={{
                                width: "290.6pt",
                                "border-top": "none",
                                "border-left": "none",
                                "border-bottom": "solid windowtext 1.0pt",
                                "border-right": "solid windowtext 1.0pt",
                                padding: "0in 5.4pt 0in 5.4pt",
                                height: "25.15pt",
                              }}
                            >
                              <p className="MsoNormal">
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "line-height": "115%",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "black",
                                  }}
                                >
                                  {oboard &&
                                    oboard.doctorCommercial &&
                                    oboard.doctorCommercial[0] &&
                                    oboard.doctorCommercial[0].pancardno}
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr style={{ height: "21.25pt" }}>
                            <td
                              width={236}
                              valign="bottom"
                              style={{
                                width: "176.95pt",
                                border: "solid windowtext 1.0pt",
                                "border-top": "none",
                                padding: "0in 5.4pt 0in 5.4pt",
                                height: "21.25pt",
                              }}
                            >
                              <p className="MsoNormal">
                                <b>
                                  <span
                                    lang="EN-GB"
                                    style={{
                                      "font-size": "10.5pt",
                                      "line-height": "115%",
                                      "font-family": '"Tahoma",sans-serif',
                                      color: "black",
                                    }}
                                  >
                                    Medical Council Certificate No.
                                  </span>
                                </b>
                              </p>
                            </td>
                            <td
                              width={387}
                              valign="bottom"
                              style={{
                                width: "290.6pt",
                                "border-top": "none",
                                "border-left": "none",
                                "border-bottom": "solid windowtext 1.0pt",
                                "border-right": "solid windowtext 1.0pt",
                                padding: "0in 5.4pt 0in 5.4pt",
                                height: "21.25pt",
                              }}
                            >
                              <p className="MsoNormal">
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "line-height": "115%",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "black",
                                  }}
                                >
                                  {oboard &&
                                    oboard.doctorCommercial &&
                                    oboard.doctorCommercial[0] &&
                                    oboard.doctorCommercial[0].medicalcertno}
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr style={{ height: "21.25pt" }}>
                            <td
                              width={236}
                              valign="bottom"
                              style={{
                                width: "176.95pt",
                                border: "solid windowtext 1.0pt",
                                "border-top": "none",
                                padding: "0in 5.4pt 0in 5.4pt",
                                height: "21.25pt",
                              }}
                            >
                              <p className="MsoNormal">
                                <b>
                                  <span
                                    lang="EN-GB"
                                    style={{
                                      "font-size": "10.5pt",
                                      "line-height": "115%",
                                      "font-family": '"Tahoma",sans-serif',
                                      color: "black",
                                    }}
                                  >
                                    Aadhar No.
                                  </span>
                                </b>
                              </p>
                            </td>
                            <td
                              width={387}
                              valign="bottom"
                              style={{
                                width: "290.6pt",
                                "border-top": "none",
                                "border-left": "none",
                                "border-bottom": "solid windowtext 1.0pt",
                                "border-right": "solid windowtext 1.0pt",
                                padding: "0in 5.4pt 0in 5.4pt",
                                height: "21.25pt",
                              }}
                            >
                              <p className="MsoNormal">
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "line-height": "115%",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "black",
                                  }}
                                >
                                  {oboard &&
                                    oboard.doctorCommercial &&
                                    oboard.doctorCommercial[0] &&
                                    oboard.doctorCommercial[0].aadhaarno}
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr style={{ height: "21.25pt" }}>
                            <td
                              width={236}
                              valign="bottom"
                              style={{
                                width: "176.95pt",
                                border: "solid windowtext 1.0pt",
                                "border-top": "none",
                                padding: "0in 5.4pt 0in 5.4pt",
                                height: "21.25pt",
                              }}
                            >
                              <p className="MsoNormal">
                                <b>
                                  <span
                                    lang="EN-GB"
                                    style={{
                                      "font-size": "10.5pt",
                                      "line-height": "115%",
                                      "font-family": '"Tahoma",sans-serif',
                                      color: "black",
                                    }}
                                  >
                                    Correspondence Address of the Consultant
                                  </span>
                                </b>
                              </p>
                            </td>
                            <td
                              width={387}
                              valign="bottom"
                              style={{
                                width: "290.6pt",
                                "border-top": "none",
                                "border-left": "none",
                                "border-bottom": "solid windowtext 1.0pt",
                                "border-right": "solid windowtext 1.0pt",
                                padding: "0in 5.4pt 0in 5.4pt",
                                height: "21.25pt",
                              }}
                            >
                              <p className="MsoNormal">
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "line-height": "115%",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "black",
                                  }}
                                >
                                     {oboard &&
                                    oboard.doctorCommercial &&
                                    oboard.doctorCommercial[0] &&
                                    oboard.doctorCommercial[0].Address}
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr style={{ height: "25.6pt" }}>
                            <td
                              width={236}
                              valign="bottom"
                              style={{
                                width: "176.95pt",
                                border: "solid windowtext 1.0pt",
                                "border-top": "none",
                                padding: "0in 5.4pt 0in 5.4pt",
                                height: "25.6pt",
                              }}
                            >
                              <p className="MsoNormal">
                                <b>
                                  <span
                                    lang="EN-GB"
                                    style={{
                                      "font-size": "10.5pt",
                                      "line-height": "115%",
                                      "font-family": '"Tahoma",sans-serif',
                                      color: "black",
                                    }}
                                  >
                                    Contact number
                                  </span>
                                </b>
                              </p>
                            </td>
                            <td
                              width={387}
                              valign="bottom"
                              style={{
                                width: "290.6pt",
                                "border-top": "none",
                                "border-left": "none",
                                "border-bottom": "solid windowtext 1.0pt",
                                "border-right": "solid windowtext 1.0pt",
                                padding: "0in 5.4pt 0in 5.4pt",
                                height: "25.6pt",
                              }}
                            >
                              <p className="MsoNormal">
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "line-height": "115%",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "black",
                                  }}
                                >
                                  {oboard &&
                                    oboard.doctorCommercial &&
                                    oboard.doctorCommercial[0] &&
                                    oboard.doctorCommercial[0].mobile}
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr style={{ height: "22.0pt" }}>
                            <td
                              width={236}
                              valign="bottom"
                              style={{
                                width: "176.95pt",
                                border: "solid windowtext 1.0pt",
                                "border-top": "none",
                                padding: "0in 5.4pt 0in 5.4pt",
                                height: "22.0pt",
                              }}
                            >
                              <p className="MsoNormal">
                                <b>
                                  <span
                                    lang="EN-GB"
                                    style={{
                                      "font-size": "10.5pt",
                                      "line-height": "115%",
                                      "font-family": '"Tahoma",sans-serif',
                                      color: "black",
                                    }}
                                  >
                                    E-mail
                                  </span>
                                </b>
                              </p>
                            </td>
                            <td
                              width={387}
                              valign="bottom"
                              style={{
                                width: "290.6pt",
                                "border-top": "none",
                                "border-left": "none",
                                "border-bottom": "solid windowtext 1.0pt",
                                "border-right": "solid windowtext 1.0pt",
                                padding: "0in 5.4pt 0in 5.4pt",
                                height: "22.0pt",
                              }}
                            >
                              <p className="MsoNormal">
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "line-height": "115%",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "black",
                                  }}
                                >
                                  {oboard &&
                                    oboard.doctorCommercial &&
                                    oboard.doctorCommercial[0] &&
                                    oboard.doctorCommercial[0].email}
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr style={{ height: "24.25pt" }}>
                            <td
                              width={236}
                              valign="bottom"
                              style={{
                                width: "176.95pt",
                                border: "solid windowtext 1.0pt",
                                "border-top": "none",
                                padding: "0in 5.4pt 0in 5.4pt",
                                height: "24.25pt",
                              }}
                            >
                              <p className="MsoNormal">
                                <b>
                                  <span
                                    lang="EN-GB"
                                    style={{
                                      "font-size": "10.5pt",
                                      "line-height": "115%",
                                      "font-family": '"Tahoma",sans-serif',
                                      color: "black",
                                    }}
                                  >
                                    Commencement Date
                                  </span>
                                </b>
                              </p>
                            </td>
                            <td
                              width={387}
                              valign="bottom"
                              style={{
                                width: "290.6pt",
                                "border-top": "none",
                                "border-left": "none",
                                "border-bottom": "solid windowtext 1.0pt",
                                "border-right": "solid windowtext 1.0pt",
                                padding: "0in 5.4pt 0in 5.4pt",
                                height: "24.25pt",
                              }}
                            >
                              <p className="MsoNormal">
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "line-height": "115%",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "black",
                                  }}
                                >
                                  {oboard &&
                                    oboard.doctorCommercial &&
                                    oboard.doctorCommercial[0] &&
                                    oboard.doctorCommercial[0].indemnityvalue}
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr style={{ height: "19.95pt" }}>
                            <td
                              width={236}
                              valign="bottom"
                              style={{
                                width: "176.95pt",
                                border: "solid windowtext 1.0pt",
                                "border-top": "none",
                                padding: "0in 5.4pt 0in 5.4pt",
                                height: "19.95pt",
                              }}
                            >
                              <p className="MsoNormal">
                                <b>
                                  <span
                                    lang="EN-GB"
                                    style={{
                                      "font-size": "10.5pt",
                                      "line-height": "115%",
                                      "font-family": '"Tahoma",sans-serif',
                                      color: "black",
                                    }}
                                  >
                                    Term
                                  </span>
                                </b>
                              </p>
                            </td>
                            <td
                              width={387}
                              valign="bottom"
                              style={{
                                width: "290.6pt",
                                "border-top": "none",
                                "border-left": "none",
                                "border-bottom": "solid windowtext 1.0pt",
                                "border-right": "solid windowtext 1.0pt",
                                padding: "0in 5.4pt 0in 5.4pt",
                                height: "19.95pt",
                              }}
                            >
                              <p className="MsoNormal">
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "line-height": "115%",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "black",
                                  }}
                                >
                                 {oboard &&
                                    oboard.doctorCommercial &&
                                    oboard.doctorCommercial[0] &&
                                    oboard.doctorCommercial[0].contractlength}
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr style={{ height: "20.95pt" }}>
                            <td
                              width={236}
                              valign="bottom"
                              style={{
                                width: "176.95pt",
                                border: "solid windowtext 1.0pt",
                                "border-top": "none",
                                padding: "0in 5.4pt 0in 5.4pt",
                                height: "20.95pt",
                              }}
                            >
                              <p className="MsoNormal">
                                <b>
                                  <span
                                    lang="EN-GB"
                                    style={{
                                      "font-size": "10.5pt",
                                      "line-height": "115%",
                                      "font-family": '"Tahoma",sans-serif',
                                      color: "black",
                                    }}
                                  >
                                    Expiry Date
                                  </span>
                                </b>
                              </p>
                            </td>
                            <td
                              width={387}
                              valign="bottom"
                              style={{
                                width: "290.6pt",
                                "border-top": "none",
                                "border-left": "none",
                                "border-bottom": "solid windowtext 1.0pt",
                                "border-right": "solid windowtext 1.0pt",
                                padding: "0in 5.4pt 0in 5.4pt",
                                height: "20.95pt",
                              }}
                            >
                              <p className="MsoNormal">
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "line-height": "115%",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "black",
                                  }}
                                >
                                 {oboard &&
                                    oboard.doctorCommercial &&
                                    oboard.doctorCommercial[0] &&
                                    oboard.doctorCommercial[0].indemnityexpiry}
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr style={{ height: "20.5pt" }}>
                            <td
                              width={236}
                              valign="bottom"
                              style={{
                                width: "176.95pt",
                                border: "solid windowtext 1.0pt",
                                "border-top": "none",
                                padding: "0in 5.4pt 0in 5.4pt",
                                height: "20.5pt",
                              }}
                            >
                              <p className="MsoNormal">
                                <b>
                                  <span
                                    lang="EN-GB"
                                    style={{
                                      "font-size": "10.5pt",
                                      "line-height": "115%",
                                      "font-family": '"Tahoma",sans-serif',
                                      color: "black",
                                    }}
                                  >
                                    Hospital Address
                                  </span>
                                </b>
                              </p>
                            </td>
                            <td
                              width={387}
                              valign="bottom"
                              style={{
                                width: "290.6pt",
                                "border-top": "none",
                                "border-left": "none",
                                "border-bottom": "solid windowtext 1.0pt",
                                "border-right": "solid windowtext 1.0pt",
                                padding: "0in 5.4pt 0in 5.4pt",
                                height: "20.5pt",
                              }}
                            >
                              <p className="MsoNormal">
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "line-height": "115%",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "black",
                                  }}
                                >
                                
                                  {oboard &&
                                    oboard.doctorCommercial &&
                                    oboard.doctorCommercial[0] &&
                                    oboard.doctorCommercial[0].Address}
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr style={{ height: "34.6pt" }}>
                            <td
                              width={236}
                              valign="bottom"
                              style={{
                                width: "176.95pt",
                                border: "solid windowtext 1.0pt",
                                "border-top": "none",
                                padding: "0in 5.4pt 0in 5.4pt",
                                height: "34.6pt",
                              }}
                            >
                              <p className="MsoNormal">
                                <b>
                                  <span
                                    lang="EN-GB"
                                    style={{
                                      "font-size": "10.5pt",
                                      "line-height": "115%",
                                      "font-family": '"Tahoma",sans-serif',
                                      color: "black",
                                    }}
                                  >
                                    Professional Indemnity Amount
                                  </span>
                                </b>
                              </p>
                            </td>
                            <td
                              width={387}
                              valign="bottom"
                              style={{
                                width: "290.6pt",
                                "border-top": "none",
                                "border-left": "none",
                                "border-bottom": "solid windowtext 1.0pt",
                                "border-right": "solid windowtext 1.0pt",
                                padding: "0in 5.4pt 0in 5.4pt",
                                height: "34.6pt",
                              }}
                            >
                              <p className="MsoNormal">
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "line-height": "115%",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "black",
                                  }}
                                >
                                Rs. {oboard &&
                                    oboard.doctorCommercial &&
                                    oboard.doctorCommercial[0] &&
                                    oboard.doctorCommercial[0].indemnityvalue}
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr style={{ height: "31.9pt" }}>
                            <td
                              width={236}
                              valign="bottom"
                              style={{
                                width: "176.95pt",
                                border: "solid windowtext 1.0pt",
                                "border-top": "none",
                                padding: "0in 5.4pt 0in 5.4pt",
                                height: "31.9pt",
                              }}
                            >
                              <p className="MsoNormal">
                                <b>
                                  <span
                                    lang="EN-GB"
                                    style={{
                                      "font-size": "10.5pt",
                                      "line-height": "115%",
                                      "font-family": '"Tahoma",sans-serif',
                                      color: "black",
                                    }}
                                  >
                                    Department (area of service to be provided)
                                  </span>
                                </b>
                              </p>
                            </td>
                            <td
                              width={387}
                              valign="bottom"
                              style={{
                                width: "290.6pt",
                                "border-top": "none",
                                "border-left": "none",
                                "border-bottom": "solid windowtext 1.0pt",
                                "border-right": "solid windowtext 1.0pt",
                                padding: "0in 5.4pt 0in 5.4pt",
                                height: "31.9pt",
                              }}
                            >
                              <p className="MsoNormal">
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "line-height": "115%",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "black",
                                  }}
                                >
                                  Department
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr style={{ height: "34.9pt" }}>
                            <td
                              width={236}
                              valign="bottom"
                              style={{
                                width: "176.95pt",
                                border: "solid windowtext 1.0pt",
                                "border-top": "none",
                                padding: "0in 5.4pt 0in 5.4pt",
                                height: "34.9pt",
                              }}
                            >
                              <p className="MsoNormal">
                                <b>
                                  <span
                                    lang="EN-GB"
                                    style={{
                                      "font-size": "10.5pt",
                                      "line-height": "115%",
                                      "font-family": '"Tahoma",sans-serif',
                                      color: "black",
                                    }}
                                  >
                                    Bank Name
                                  </span>
                                </b>
                              </p>
                              <p className="MsoNormal">
                                <b>
                                  <span
                                    lang="EN-GB"
                                    style={{
                                      "font-size": "10.5pt",
                                      "line-height": "115%",
                                      "font-family": '"Tahoma",sans-serif',
                                      color: "black",
                                    }}
                                  >
                                    Account No. &amp;{" "}
                                  </span>
                                </b>
                              </p>
                              <p className="MsoNormal">
                                <b>
                                  <span
                                    lang="EN-GB"
                                    style={{
                                      "font-size": "10.5pt",
                                      "line-height": "115%",
                                      "font-family": '"Tahoma",sans-serif',
                                      color: "black",
                                    }}
                                  >
                                    IFSC Code
                                  </span>
                                </b>
                              </p>
                            </td>
                            <td
                              width={387}
                              valign="bottom"
                              style={{
                                width: "290.6pt",
                                "border-top": "none",
                                "border-left": "none",
                                "border-bottom": "solid windowtext 1.0pt",
                                "border-right": "solid windowtext 1.0pt",
                                padding: "0in 5.4pt 0in 5.4pt",
                                height: "34.9pt",
                              }}
                            >
                              <p
                                className="MsoNormal"
                                style={{ "line-height": "normal" }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "black",
                                  }}
                                >
                                  {oboard &&
                                    oboard.doctorCommercial &&
                                    oboard.doctorCommercial[0] &&
                                    oboard.doctorCommercial[0].BankName}
                                </span>
                              </p>
                              <p
                                className="MsoNormal"
                                style={{ "line-height": "normal" }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "black",
                                  }}
                                >
                                  {oboard &&
                                    oboard.doctorCommercial &&
                                    oboard.doctorCommercial[0] &&
                                    oboard.doctorCommercial[0].bankaccountno}
                                </span>
                              </p>
                              <p
                                className="MsoNormal"
                                style={{ "line-height": "normal" }}
                              >
                                <span
                                  lang="EN-GB"
                                  style={{
                                    "font-size": "10.5pt",
                                    "font-family": '"Tahoma",sans-serif',
                                    color: "black",
                                  }}
                                >
                                  {oboard &&
                                    oboard.doctorCommercial &&
                                    oboard.doctorCommercial[0] &&
                                    oboard.doctorCommercial[0].ifsccode}
                                </span>
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <hr />
                      <p
                        className="MsoBodyText"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "line-height": "normal",
                        }}
                      >
                        <b>
                          <span
                            lang="EN-GB"
                            style={{
                              "font-size": "10.5pt",
                              "font-family": '"Tahoma",sans-serif',
                              color: "black",
                            }}
                          >
                            &nbsp;
                          </span>
                        </b>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "line-height": "normal",
                        }}
                      >
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "font-family": '"Tahoma",sans-serif',
                            }}
                          >
                            &nbsp;
                          </span>
                        </b>
                      </p>
                      <b>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "107%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          <br
                            clear="all"
                            style={{ "page-break-before": "always" }}
                          />
                        </span>
                      </b>
                      <p
                        className="MsoNormal"
                        style={{
                          "margin-bottom": "8.0pt",
                          "line-height": "107%",
                        }}
                      >
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "line-height": "107%",
                              "font-family": '"Tahoma",sans-serif',
                              color: "#00000A",
                            }}
                          >
                            &nbsp;
                          </span>
                        </b>
                      </p>
                      <p
                        className="MsoBodyText"
                        align="center"
                        style={{
                          "-webkit-text-align": "center",
                          "text-align": "center",
                        }}
                      >
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "font-family": '"Tahoma",sans-serif',
                            }}
                          >
                            SCHEDULE – 2
                          </span>
                        </b>
                      </p>
                      <p
                        className="MsoBodyText"
                        align="center"
                        style={{
                          "-webkit-text-align": "center",
                          "text-align": "center",
                        }}
                      >
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "font-family": '"Tahoma",sans-serif',
                            }}
                          >
                            PART 1
                          </span>
                        </b>
                      </p>
                      <p
                        className="MsoBodyText"
                        align="center"
                        style={{
                          "-webkit-text-align": "center",
                          "text-align": "center",
                          "line-height": "normal",
                        }}
                      >
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "font-family": '"Tahoma",sans-serif',
                            }}
                          >
                            (Description of Medical Services)
                          </span>
                        </b>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "line-height": "normal",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": ".5in",
                          "text-indent": ".5in",
                          "line-height": "normal",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          The Consultant shall perform all the medical services
                          during the term of this agreement including:
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": "22.5pt",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "line-height": "normal",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": "1.0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "normal",
                          margin: "9px 334px auto",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          (a)<span style={{}}>&nbsp; </span>
                        </span>
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "font-family": '"Tahoma",sans-serif',
                            }}
                          >
                            Department
                          </span>
                        </b>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": "1.0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "line-height": "normal",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "font-family": '"Tahoma",sans-serif',
                            color: "windowtext",
                          }}
                        >
                          &nbsp;
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "line-height": "normal",
                          margin: "9px 300px auto",
                        }}
                      >
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "font-family": '"Tahoma",sans-serif',
                            }}
                          >
                            {oboard &&
                              oboard.doctorCommercial &&
                              oboard.doctorCommercial[0] &&
                              oboard.doctorCommercial[0].departmentlist}
                          </span>
                        </b>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "line-height": "normal",
                        }}
                      >
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "font-family": '"Tahoma",sans-serif',
                            }}
                          >
                            &nbsp;
                          </span>
                        </b>
                      </p>
                      <p
                        className="MsoBodyText"
                        align="center"
                        style={{
                          "-webkit-text-align": "center",
                          "text-align": "center",
                          "line-height": "normal",
                        }}
                      >
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "font-family": '"Tahoma",sans-serif',
                            }}
                          >
                            PART 2
                          </span>
                        </b>
                      </p>
                      <p
                        className="MsoBodyText"
                        align="center"
                        style={{
                          "-webkit-text-align": "center",
                          "text-align": "center",
                          "line-height": "150%",
                        }}
                      >
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "line-height": "150%",
                              "font-family": '"Tahoma",sans-serif',
                            }}
                          >
                            (Description of Professional Fee)
                          </span>
                        </b>
                      </p>
                      <p
                        className="MsoBodyText"
                        align="center"
                        style={{
                          "-webkit-text-align": "center",
                          "text-align": "center",
                          "line-height": "150%",
                        }}
                      >
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "line-height": "150%",
                              "font-family": '"Tahoma",sans-serif',
                            }}
                          >
                            &nbsp;
                          </span>
                        </b>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": ".5in",
                          "text-indent": ".5in",
                          "line-height": "normal",
                        }}
                      >
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "font-family": '"Tahoma",sans-serif',
                            }}
                          >
                            Monthly Fixed Fee:
                          </span>
                        </b>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          In consideration of the Medical Services rendered by
                          the Consultant, the Company will pay an all-inclusive
                          monthly fixed fee of Rs.
                          {oboard &&
                            oboard.doctorCommercial &&
                            oboard.doctorCommercial[0] &&
                            oboard.doctorCommercial[0].ctcmonth}
                          /- (Rupees Amount in words Only).{" "}
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": ".5in",
                          "text-indent": ".5in",
                          "line-height": "normal",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": ".5in",
                          "text-indent": ".5in",
                          "line-height": "normal",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "line-height": "normal",
                        }}
                      >
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "font-family": '"Tahoma",sans-serif',
                              margin: "9px 165px auto",
                            }}
                          >
                            {inWords(amount)}
                          </span>
                        </b>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": ".5in",
                          "text-indent": ".5in",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          In case you are required to travel on the Company’s
                          business, the Company will make appropriate
                          arrangements, or you will be reimbursed expenses as
                          permissible under the Company’s rules.
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "line-height": "150%",
                        }}
                      >
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "line-height": "150%",
                              "font-family": '"Tahoma",sans-serif',
                              color: "windowtext",
                            }}
                          >
                            &nbsp;
                          </span>
                        </b>
                      </p>
                      <b>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "107%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          <br
                            clear="all"
                            style={{ "page-break-before": "always" }}
                          />
                        </span>
                      </b>
                      <p
                        className="MsoNormal"
                        style={{
                          "margin-bottom": "8.0pt",
                          "line-height": "107%",
                        }}
                      >
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "line-height": "107%",
                              "font-family": '"Tahoma",sans-serif',
                              color: "#00000A",
                            }}
                          >
                            &nbsp;
                          </span>
                        </b>
                      </p>
                      <p
                        className="MsoBodyText"
                        align="center"
                        style={{
                          "-webkit-text-align": "center",
                          "text-align": "center",
                          "line-height": "normal",
                        }}
                      >
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "font-family": '"Tahoma",sans-serif',
                            }}
                          >
                            SCHEDULE – 3
                          </span>
                        </b>
                      </p>
                      <p
                        className="MsoBodyText"
                        align="center"
                        style={{
                          "-webkit-text-align": "center",
                          "text-align": "center",
                          "line-height": "normal",
                        }}
                      >
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "font-family": '"Tahoma",sans-serif',
                            }}
                          >
                            DOCUMENTS TO BE SUBMITTED BY THE CONSULTANT
                          </span>
                        </b>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "line-height": "normal",
                        }}
                      >
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "font-family": '"Tahoma",sans-serif',
                            }}
                          >
                            &nbsp;
                          </span>
                        </b>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": ".5in",
                          "text-indent": ".5in",
                          "line-height": "normal",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          This list is indicative and not exhaustive, and the
                          Company reserves the right to request for additional
                          information about the Consultant as may be required
                          from time-to-time.{" "}
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "line-height": "normal",
                        }}
                      >
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "font-family": '"Tahoma",sans-serif',
                            }}
                          >
                            &nbsp;
                          </span>
                        </b>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": "0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "0in",
                          "text-indent": "0in",
                          "line-height": "200%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "200%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          1.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "200%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          State Registration Certificate{" "}
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": "0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "0in",
                          "text-indent": "0in",
                          "line-height": "200%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "200%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          2.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "200%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          Photocopies Of Degree Certificates
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": "0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "0in",
                          "text-indent": "0in",
                          "line-height": "200%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "200%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          3.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "200%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          Experience Letter (Testimonials)
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": "0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "0in",
                          "text-indent": "0in",
                          "line-height": "200%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "200%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          4.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "200%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          Passport Size Photographs
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": "0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "0in",
                          "text-indent": "0in",
                          "line-height": "200%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "200%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          5.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "200%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          Photocopy of PAN Card
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": "0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "0in",
                          "text-indent": "0in",
                          "line-height": "200%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "200%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          6.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "200%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          Photocopy of Aadhar Card
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": "0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "0in",
                          "text-indent": "0in",
                          "line-height": "200%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "200%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          7.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "200%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          Cancelled Cheque Leaf
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": "0in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "0in",
                          "text-indent": "0in",
                          "line-height": "200%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "200%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          8.
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "200%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          Photocopy of Valid Professional Indemnity Insurance
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        align="center"
                        style={{
                          "margin-bottom": "0in",
                          "-webkit-text-align": "center",
                          "text-align": "center",
                          "line-height": "normal",
                        }}
                      >
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "font-family": '"Tahoma",sans-serif',
                            }}
                          >
                            &nbsp;
                          </span>
                        </b>
                      </p>
                      <p
                        className="MsoNormal"
                        align="center"
                        style={{
                          "margin-bottom": "0in",
                          "-webkit-text-align": "center",
                          "text-align": "center",
                          "line-height": "normal",
                        }}
                      >
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "font-family": '"Tahoma",sans-serif',
                            }}
                          >
                            &nbsp;
                          </span>
                        </b>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          MEDICAL STAFF BYLAWS Cloudnine hospitals. January
                          2017&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          Preamble: This Medical Staff Byelaws define and codify
                          the broad framework or charter of rules and
                          regulations, policies and procedures, mutual rights
                          and obligations of the Hospital and the
                          Consultant/medical staff in relation to their practice
                          in the Hospital/s managed or operated by Cloudnine
                          hospitals
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          The Medical Staff Bylaws shall be construed, read and
                          interpreted in conjunction with the binding Medical
                          Professional Services Agreement (hereinafter referred
                          to as the Services Agreement) entered into between
                          Cloudnine hospitals (for and on behalf of hospitals)
                          and the consultant. In the event of any inconsistency
                          or contradiction between the provisions of the Medical
                          Staff Byelaws vis-à-vis the Services Agreement on any
                          subject matter, then the provisions mentioned in the
                          latter( Services Agreement) shall always prevail over
                          the former (Medical Staff
                          Byelaws).&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          I. DEFINITIONS&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          a. A center head is a person appointed by the
                          Management of Cloudnine Hospitals from time to time
                          conferred with necessary authority to administer the
                          day to day administration of the Hospital.&nbsp;&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          b. Central Medical Quality (CMQ):&nbsp; shall mean a
                          committee constituted by the management to supervise
                          and manage medical quality at each of the Hospitals.
                          The constitution, roles and responsibilities of the
                          CMQ are more fully described in Clinical Manual,
                          Medical Administration.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          c. Clinical Manual, Medical Administration –is a
                          comprehensive codified document explaining rules,
                          responsibilities, protocols, byelaws and polices of
                          the hospital applicable to the Medical Staff&nbsp;
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          d. Medical director means a member of the Medical
                          Staff appointed by the management of Cloudnine
                          Hospitals to manage the day to day medical/clinical
                          administration of the hospital. The roles and
                          responsibilities of are as mentioned in this
                          document&nbsp;&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          e. Committees of the Hospital: shall mean all such
                          committees of the Hospital as may be constituted by
                          the management from time to time to address hospital
                          and medical staff related issues that may arise from
                          time to time. The constitution, composition, tenure,
                          powers, duties, roles and responsibilities of the
                          Committee and its members are more fully mentioned in
                          the Clinical Manual, Medical Administration&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          f. Consultant means the medical staff member directly
                          responsible for patient care at the Hospital
                          possessing requisite academic qualification and
                          experience, more fully mentioned in the Clinical
                          Manual, Medical Administration and privileged by the
                          Medical Practices Committee (MPC).&nbsp; The basic
                          requirement to be appointed as a consultant the doctor
                          should have completed MD/MS/DNB in their specialty at
                          least 5 years before the date of application or should
                          have completed DGO/ DA/ DCH 8 years before the date of
                          application. This stipulation can be waived at the
                          discretion of the Chairman or DMS.
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          g. Quality Assurance Department (QAD) is a department
                          constituted by the management to formulate and oversee
                          the implementation of the polices at each of the
                          hospitals of Cloudnine. The constitution, composition,
                          tenure, powers, duties, roles and responsibilities of
                          the department are more fully mentioned in the
                          Clinical Manual, Medical Administration&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          h. Hospital shall mean Cloudnine Hospital{" "}
                          <b>“Address”</b> (A unit of Cloudnine Hospitals) and
                          includes the following:&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;(i) Primary Hospital. For the purposes of this
                          Medical Staff Byelaws and with respect to any
                          consultant full time, part time or visiting, as the
                          case may be, a Primary Hospital shall mean such
                          hospital/facility of Cloudnine where the consultant
                          has agreed to render substantial portion of his/her
                          professional services and charges for his/her
                          professional services are accrued and paid from such
                          hospital.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          (ii) Associate Hospital/Facilities For the purposes of
                          this Medical Staff Byelaws and with respect to any
                          consultant rendering his/her services at the hospital
                          either full time, part time or visiting, as the case
                          may be, an Associate Hospital/Facility shall mean and
                          include all such other hospitals and facility/ies
                          (other than the primary hospital) controlled and or
                          managed by Cloudnine where any consultant is required
                          to render his/her professional services on a
                          temporary/long term basis. For the purposes of Medical
                          Staff Byelaws the term “Facilities” shall mean to
                          include the existing clinics, community hospitals,
                          referral hospitals, day care centers, research
                          institutes managed and controlled directly by
                          Cloudnine or to be established in future directly or
                          in association with any other institutions under any
                          arrangement with such other
                          institution.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;Medical Staff means all the Consultants (full
                          time, part time, visiting, and junior), Registrars and
                          Medical Officers conferred with practicing rights in
                          the Hospital, including the following
                          categories:&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          (i) Full Time Consultant: means and includes a medical
                          practitioner&nbsp; possessing the requisite academic
                          qualifications, credentialed and privileged (more
                          fully described in Clinical Manual, Medical
                          Administration) to perform such invasive and/or
                          noninvasive medical procedures at the Hospital either
                          individually or forming a part of consultant’s group
                          rendering his/her professional services at the
                          hospitals controlled and managed by Cloudnine, having
                          agreed to render his/her professional services of not
                          less than 48 hours in aggregate in any week of 7 days
                          having the following rights and
                          restrictions:&nbsp;&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;Right of outpatient consultation and treatment
                          within the hospital premises&nbsp;&nbsp; Right to
                          admit patients for invasive or noninvasive treatment
                          and procedures under his/her care at the
                          hospital.&nbsp; Shall not have any rights to his/her
                          private practice in any clinics, teaching or
                          non-teaching hospitals, medical colleges, clinics and
                          other medical institutions other than the facilities
                          managed by Cloudnine in any capacity without obtaining
                          Cloudnine’s specific express consent in
                          writing.&nbsp;&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          (ii) Part time consultant means and include a medical
                          practitioner&nbsp; possessing the requisite academic
                          qualifications, credentialed and privileged (more
                          fully described in Clinical Manual, Medical
                          Administration) to perform such invasive and/or
                          noninvasive medical procedures at the Hospital either
                          individually or forming a part of the consultant’s
                          group rendering his/her professional services at the
                          hospitals controlled and managed by Cloudnine having
                          agreed to render his/her professional services of not
                          less than 12 hours and not more than 48 hours in
                          aggregate in any week of 7 days having the following
                          rights and restrictions. The number of hours mentioned
                          before can be changed with the consent of the
                          Cloudnine administration.
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          a. Right to outpatient consultation and treatment
                          within the hospital premises b. Right to admit
                          patients for invasive or noninvasive treatment and
                          procedures under his/her care at the Hospital. c.
                          Rights to his/her private practice in any clinics,
                          teaching or non-teaching hospitals, medical colleges,
                          clinics and other medical institutions other than the
                          facilities managed by Cloudnine in any capacity.
                          However, such outside Hospital practice shall not have
                          any conflict of interest.&nbsp;&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          2. Visiting consultant means and includes a medical
                          practitioner possessing the requisite academic
                          qualifications, credentialed and privileged (more
                          fully described in Clinical Manual, Medical
                          Administration) to perform such invasive and/or non
                          invasive medical procedures at the Hospital either
                          individually or forming a part of consultant’s group
                          rendering his/her professional services at the
                          hospitals controlled and managed by Cloudnine having
                          agreed to render his/her professional services as and
                          when required by the hospital or suo motto having the
                          following rights and restrictions&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          a. Right to admit patients for invasive or non
                          invasive treatment and procedures under his/her care
                          at the Hospital. b. Rights to his/her private practice
                          in any clinics, teaching or non teaching hospitals,
                          medical colleges, clinics and other medical
                          institutions other than the facilities managed by
                          Cloudnine in any capacity. However, such outside
                          Hospital practice shall not have any conflict of
                          interest.&nbsp;&nbsp; c. Shall not have the right to
                          outpatient consultation and treatment within the
                          hospital premises, for any patient other than from
                          his/her own practice&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          3. Associate consultant means and includes a medical
                          practitioner possessing the requisite academic
                          qualifications, credentialed and privileged (more
                          fully described in Clinical Manual, Medical
                          Administration) to perform such invasive and/or
                          noninvasive medical procedures at the Hospital either
                          individually or forming a part of consultant’s group
                          rendering his/her professional services at the
                          hospitals controlled and managed by Cloudnine having
                          agreed to render his/her professional services as and
                          when required by the hospital or suo motto having the
                          following rights and restrictions. These doctors are
                          consultants who do not have independent admitting
                          rights and will need to under the supervision of a
                          consultant.
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          3. Junior Consultant means and includes a medical
                          practitioner possessing the requisite necessary
                          academic qualifications, credentialed and privileged
                          (more fully described in Clinical Manual, Medical
                          Administration) to perform such invasive and/or
                          noninvasive medical procedures at the hospital either
                          individually or forming a part of consultants group
                          rendering his/ her professional services at the
                          hospitals controlled and managed by Cloudnine having
                          agreed to render his/her professional services only
                          under the supervision/guidance of a consultant.&nbsp;
                          Working hours should not be less than 208 hours in
                          month.
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          4. Registrars means and include a medical practitioner
                          possessing the requisite academic qualifications,
                          credentialed and privileged&nbsp; (more fully
                          described in Clinical Manual, Medical Administration)
                          to perform such invasive and/or noninvasive medical
                          procedures at the hospital either individually or
                          forming a part of consultant’s group rendering his/her
                          professional services at the hospitals controlled and
                          managed by Cloudnine having agreed to render his/her
                          professional services only under the
                          supervision/guidance of a consultant.&nbsp; Working
                          hours should not be less than 208 hours in month.
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          5. Fellow means and include a medical practitioner
                          possessing the requisite academic qualifications,
                          credentialed and privileged&nbsp; (more fully
                          described in Clinical Manual, Medical Administration)
                          to perform such invasive and/or noninvasive medical
                          procedures at the hospital either individually or
                          forming a part of consultant’s group rendering his/her
                          professional services at the hospitals controlled and
                          managed by Cloudnine having agreed to render his/her
                          professional services only under the
                          supervision/guidance of a consultant and is enrolled
                          in a Fellowship training program.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          6. Medical officer means and include a medical
                          practitioner possessing the requisite academic
                          qualifications, credentialed and privileged (more
                          fully described in Clinical Manual) to perform such
                          invasive and/or noninvasive medical procedures at the
                          hospital either individually or forming a part of
                          consultant’s group rendering his/her professional
                          services at the hospitals controlled and managed by
                          Cloudnine having agreed to render his/her professional
                          services only under the supervision /guidance of a
                          consultant.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          7. Primary consultant: shall mean a consultant either
                          full time/part time/visiting consultant as the case
                          may be who is primarily responsible and accountable to
                          the hospital and to the patient in connection with
                          admission and treatment of a patient including for the
                          acts and omissions of the associate
                          consultants/medical registrar/ medical staff
                          (hereinafter referred to as “authorised persons”
                          acting under his/her instruction, supervision and
                          guidance.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          8. Referral consultant: shall mean a consultant either
                          full time/part time/visiting consultant of the
                          hospital as the case may be whose opinion is sought by
                          the primary consultant as it is beyond his/her scope
                          of training.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          ii. Management means the Board of Directors of
                          Cloudnine hospital, or it’s designate.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          II SELECTION OF MEDICAL STAFF&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          A. CREDENTIALING&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          a. All Consultants possessing minimum eligibility
                          criterion (as mentioned in Clinical Manual, Medical
                          Administration)) and interested in obtaining
                          practicing rights in the Hospital shall submit an
                          application, along with other relevant documents as
                          determined by the Management from time to time to the
                          Group Medical Director through the Regional
                          director/Center head/ Medical director/Human Resource
                          Department of the hospital as the case may be for
                          evaluation and approval.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          b. The first privileging of the consultants will be
                          granted by the GMD and the same will be ratified after
                          six months in the MPC which will be attended by the
                          GMD or his authorized
                          representative.&nbsp;&nbsp;&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          c. Medical Practices Committee (MPC) shall confirm all
                          subsequent practicing privileges including
                          renewals.&nbsp;&nbsp;&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          d. The Center head shall prepare Consultant’s
                          credentials and practicing privileges and place it
                          before the Credentialing Committee (CC), for their
                          confirmation. Any differences between the Center head
                          and the credentialing committee shall be forwarded to
                          the Director of Medical services (DMS) for final
                          approval&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          e. All Medical Staff members of the hospital shall be
                          entitled to exercise only those medical practicing
                          privileges specifically confirmed to them by the
                          CC.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          f. The CC shall investigate, evaluate and recommend to
                          the DMS the entitled medical practicing privileges of
                          the applicant based upon the applicant’s education,
                          training, experience, demonstrated competence, health
                          status, references and other relevant information. The
                          applicant shall have the burden of establishing his
                          qualifications, and competence.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          g. The validity of the approval for practicing
                          privileges is 2 years and the renewal may be confirmed
                          by the CC{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          h. The New Medical Staff Members, or locums will be
                          granted temporary privileges by the Medical director,
                          if needed, following a Consultant joining the Hospital
                          until the applicant can be formally confirmed by the
                          CC at the next meeting.&nbsp; In case of locums, the
                          temporary privileges are valid for a maximum period of
                          three months from date granted to the locum consultant
                          by the Medical director before the locum consultant is
                          allowed to practice in the hospital. For locum
                          Consultants, it is the responsibility of the inviting
                          consultant to forward the locum consultants
                          credentials to the Medical director, for the granting
                          of temporary privileges.&nbsp; The locum consultant
                          must sign the Medical Bye laws and is bound by this
                          document.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          i. Applications for medical practicing privileges
                          shall list in writing the privileges and state any
                          relevant training and/or experience appropriate to the
                          request. This request shall be made in the specialty
                          specific privileging form&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          j. Any consultant may expand the scope of their
                          practicing privileges, utilizing the procedure
                          described above.{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          k. In the case of an emergency, any Medical Staff
                          member, to the degree permitted by his or her license,
                          shall be permitted and assisted to do everything
                          possible to save the life of a patient, using every
                          facility of the hospital necessary.&nbsp; When the
                          emergency situation no longer exists, such Medical
                          Staff member must request the Medical director to
                          temporarily grant the privileges necessary to continue
                          to treat the patient, or transfer the patient to an
                          appropriate member of the Medical Staff, or to an
                          outside consultant.&nbsp; For the purpose of this
                          situation, an emergency is defined as a condition in
                          which there is danger of serious permanent harm to a
                          patient, or in which the life of a patient is in
                          imminent danger or any delay in administering
                          treatment would add to that danger.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          l. Once the CC grants practicing privileges to a
                          Consultant, the Consultant will be considered as a
                          Medical Staff member and the privileges shall remain
                          valid for a 2 year period. This can be terminated if
                          the consultant performs in any way that is detrimental
                          to patient care after due process.
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          m. Notwithstanding the above, the decision to grant or
                          renew the privileges to the Medical staff who (i)
                          absents him/her self from the hospital for a
                          continuous period of sixty (60) days or more due to a
                          medical illness or (ii) who has passed their
                          sixty-fifth birthday shall be subject to the approval
                          of the DMS based on the information provided about the
                          current health and medical reports of the said
                          practitioner. In this regard the decision of the DMS
                          is final.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          n. Participation of Medical staff members in the
                          “Controlled Clinical Trials” (CCT) or Clinical
                          Research (CR) shall be in accordance with the
                          “Controlled Clinical Trials” (CCT) or Clinical
                          Research (CR) manual adopted by the Hospital from time
                          to time.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;III. REMEDIAL ACTIONS: RULES AND
                          REGULATIONS&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          a. Any Medical Staff member, employee, patient (or
                          their proxy), the Medical director or Center head may
                          request an inquiry regarding a consultant’s conduct or
                          medical care when said party believes a consultant has
                          acted in a way that is:&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          I. Detrimental to patient care or safety; or{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;II. Against hospital policy; or{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          III. Disruptive to hospital operations.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          b. All complaints shall be in writing and addressed to
                          the Center head or the DMS and handled as
                          follows:&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          i. The Center head and the Medical director will
                          review all complaints, as described hereinabove and
                          discuss with the Consultant in question and ask for
                          written accounts from all parties involved. In such an
                          event all such concerned parties shall provide all the
                          necessary information and documents in their knowledge
                          and possession to Center head and the Medical director
                          and they shall forward all related information to the
                          DMS or to the person or committee nominated/designated
                          by the DMS from time to time for this purpose.&nbsp;
                          If involved parties refuse to provide written details,
                          then the Center head/ Medical director will provide
                          such details, based on their investigation and the
                          Medical director reserves the right to initiate
                          appropriate disciplinary actions against such erring
                          members.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          Based on the available facts and circumstances, if the
                          DMS or the person/ committee nominated/designated by
                          the DMS is of the opinion that, the matter needs a
                          detailed further investigation then, the same shall be
                          forwarded to the CMQ for a detailed report on the
                          allegation. CMQ shall furnish their report to the DMS.
                          If the findings of the CMQ are suggestive of a
                          prima-facie case then the DMS shall forward the case
                          to the CC for adjudication. However, the report of CMQ
                          being a confidential report meant for the use of
                          DMS/CC, the same shall not be called in question or
                          compelled to be made public by any of the concerned
                          party.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          ii. The CC with a minimum quorum of will hear each
                          complaint and submit its report and their
                          recommendation to the Medical director who shall
                          forward the recommendations of the CC to the DMS.
                          Depending upon the recommendation of the CC and the
                          gravity of the situation, the DMS shall decide
                          appropriate course of action which may include the
                          termination of services of the consultant.
                          Notwithstanding the difference of opinion among the
                          members of the CC, the decision of the DMS is final
                          and cannot be called in question by the consultant
                          charged with the allegation or any member of the
                          CC.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;iii. Any Consultant whose credentials are under
                          review for any complaint against the said consultant
                          by the CC shall be entitled to request that the CC
                          investigate the matter within 30 days.&nbsp; If the
                          involved Consultant disagrees with either the
                          findings, or actions recommended by the CC, said
                          Consultant may appeal to the DMS within 30 days of
                          such findings of the CC.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          iv. The Medical director may temporarily suspend all
                          or any portion of the clinical privileges of a
                          Consultant, prior to CC review, whenever such action
                          must, in the judgment of the Medical director, be
                          taken immediately to safeguard patient safety.&nbsp;
                          The complaint in question will then be taken up by the
                          CC, as described in III above within 48
                          hours.&nbsp;&nbsp; Appeals:&nbsp;&nbsp; A Consultant
                          may appeal against the decision of CC to the DMS,
                          within 15 days of such decision of the CC in the event
                          of such Consultant does not agree with the CC’s
                          decision with respect to his/her revocation or change
                          in practicing privileges.&nbsp; The DMS will address
                          such appeal and adjudicate within 30 days of receipt
                          of such appeal and the same shall be binding on the
                          Consultant.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          V. DUTIES OF Medical directors:&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;
                        </span>
                      </p>
                      <p
                        className="MsoListParagraphCxSpFirst"
                        style={{
                          "margin-bottom": "8.0pt",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "107%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "107%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          1.<span style={{}}>&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "107%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          There will be only one functional medical director for
                          a one year period. If there are more than one, this
                          role will be done on a rotational basis.
                        </span>
                      </p>
                      <p
                        className="MsoListParagraphCxSpMiddle"
                        style={{
                          "margin-bottom": "8.0pt",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "107%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "107%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          2.<span style={{}}>&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "107%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          They will need to be informed of all medically related
                          issues on a daily basis including nurse to patient
                          ratio for the last 24 hours, patient complaints,
                          doctor complaints and doctor noncompliance of
                          policies. These should be informed to the Director
                          medical services on a daily basis
                        </span>
                      </p>
                      <p
                        className="MsoListParagraphCxSpMiddle"
                        style={{
                          "margin-bottom": "8.0pt",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "107%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "107%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          3.<span style={{}}>&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "107%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          They will be responsible for creating the CME calendar
                          for the month. There will need to be at least one CME
                          meeting a month. The M&amp;M meeting will need to be
                          held every 3 months and can replace one of the CME
                          meetings.
                        </span>
                      </p>
                      <p
                        className="MsoListParagraphCxSpMiddle"
                        style={{
                          "margin-bottom": "8.0pt",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "107%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "107%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          4.<span style={{}}>&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "107%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          They will be responsible for ensuring the completion
                          and submission of doctor (consultant and junior) duty
                          rosters to the center heads.
                        </span>
                      </p>
                      <p
                        className="MsoListParagraphCxSpMiddle"
                        style={{
                          "margin-bottom": "8.0pt",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "107%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "107%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          5.<span style={{}}>&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "107%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          They will be responsible for helping the center heads
                          resolve all medical care related complaints in a
                          timely manner. The closure of these complaints need to
                          be informed to the Director, Medical services.
                        </span>
                      </p>
                      <p
                        className="MsoListParagraphCxSpMiddle"
                        style={{
                          "margin-bottom": "8.0pt",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "107%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "107%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          6.<span style={{}}>&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "107%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          They will be responsible for talking to doctors who
                          are not compliant with hospital policies. In the event
                          there is a conflict of interest the Director of
                          Medical services will do the needful.
                        </span>
                      </p>
                      <p
                        className="MsoListParagraphCxSpMiddle"
                        style={{
                          "margin-bottom": "8.0pt",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "107%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "107%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          7.<span style={{}}>&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "107%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          The unit medical directors are encouraged to come up
                          with clinical audits. The Director of Medical services
                          will help with this process whenever required.{" "}
                        </span>
                      </p>
                      <p
                        className="MsoListParagraphCxSpMiddle"
                        style={{
                          "margin-bottom": "8.0pt",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "107%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "107%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          8.<span style={{}}>&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "107%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          The unit medical directors with the help of the center
                          heads and the nursing in charge should ensure that all
                          mandatory committee meetings are held and the minutes
                          with action taken are documented and stored.
                        </span>
                      </p>
                      <p
                        className="MsoListParagraphCxSpMiddle"
                        style={{
                          "margin-bottom": "8.0pt",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "107%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "107%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          9.<span style={{}}>&nbsp;&nbsp;&nbsp;</span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "107%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          The unit medical directors with the help of the center
                          heads and the nursing in charge should ensure that all
                          end of the month reports are sent to the quality team
                          by the 2<sup>nd</sup> of every month.
                        </span>
                      </p>
                      <p
                        className="MsoListParagraphCxSpMiddle"
                        style={{
                          "margin-bottom": "8.0pt",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "107%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "107%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          10.<span style={{}}>&nbsp;</span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "107%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          The following are the reports that need to be sent on
                          a monthly basis
                        </span>
                      </p>
                      <p
                        className="MsoListParagraphCxSpMiddle"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;
                        </span>
                      </p>
                      <p
                        className="MsoListParagraphCxSpMiddle"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "8.0pt",
                          "margin-left": ".75in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "107%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "107%",
                            "font-family": '"Calibri",sans-serif',
                          }}
                        >
                          -
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "107%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          All NABH QI data including corrective and preventive
                          action (CAPA) taken
                        </span>
                      </p>
                      <p
                        className="MsoListParagraphCxSpMiddle"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "8.0pt",
                          "margin-left": ".75in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "107%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "107%",
                            "font-family": '"Calibri",sans-serif',
                          }}
                        >
                          -
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "107%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          All clinical audits done or ongoing with current
                          status
                        </span>
                      </p>
                      <p
                        className="MsoListParagraphCxSpMiddle"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "8.0pt",
                          "margin-left": ".75in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "107%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "107%",
                            "font-family": '"Calibri",sans-serif',
                          }}
                        >
                          -
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "107%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          All Incident reports data with details and CAPA
                        </span>
                      </p>
                      <p
                        className="MsoListParagraphCxSpMiddle"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "8.0pt",
                          "margin-left": ".75in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "107%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "107%",
                            "font-family": '"Calibri",sans-serif',
                          }}
                        >
                          -
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "107%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          Report of all CMEs conducted with attendance data
                        </span>
                      </p>
                      <p
                        className="MsoListParagraphCxSpMiddle"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "8.0pt",
                          "margin-left": ".75in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "107%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "107%",
                            "font-family": '"Calibri",sans-serif',
                          }}
                        >
                          -
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "107%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          M&amp;M report if it is conducted that month with
                          brief report of discussion and CAPA
                        </span>
                      </p>
                      <p
                        className="MsoListParagraphCxSpMiddle"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "8.0pt",
                          "margin-left": ".75in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "107%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "107%",
                            "font-family": '"Calibri",sans-serif',
                          }}
                        >
                          -
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "107%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          All patient complaints with CAPA
                        </span>
                      </p>
                      <p
                        className="MsoListParagraphCxSpMiddle"
                        style={{
                          "margin-top": "0in",
                          "margin-right": "0in",
                          "margin-bottom": "8.0pt",
                          "margin-left": ".75in",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "107%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "107%",
                            "font-family": '"Calibri",sans-serif',
                          }}
                        >
                          -
                          <span style={{}}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "107%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          Report of any disciplinary issues related to doctors
                          and nurses
                        </span>
                      </p>
                      <p
                        className="MsoListParagraphCxSpLast"
                        style={{
                          "margin-bottom": "8.0pt",
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                          "-webkit-text-indent": "-.25in",
                          "text-indent": "-.25in",
                          "line-height": "107%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "107%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          11.<span style={{}}>&nbsp;</span>
                        </span>
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "107%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          They will be involved in the credentialing and
                          privileging the consultants in their units with the
                          help of HRD
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          VI. ORGANIZATION OF THE MEDICAL
                          STAFF&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          a. Each medical staff member shall be a member of a
                          hospital department, as defined by their respective
                          medical specialty. The departments shall consist of
                          the following:&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          OBG and Surgery&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp; : To include all surgery
                          subspecialties&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          OB/GYN&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          :&nbsp; To include all OB/GYN subspecialties&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          Pediatric Medicine&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp; :&nbsp; To include all Pediatrics
                          and NICU&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          Anesthesia and Radiology
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          b. Each department shall have a co-ordinator, who
                          shall be nominated by Medical director.
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          The functions of each department shall be to assure
                          the delivery of high quality patient care in their
                          respective department by implementation of the
                          policies formulated by the Central Quality Assurance
                          Department (QAD). In the event of a need for an
                          amendment to the existing departmental policy then the
                          proposal for an amendment shall be routed through
                          Medical director to the QAD and QAD shall decide on
                          the necessity for the proposed amendment and decide
                          accordingly. The decision of the QAD is final and
                          binding. All amendments shall take effect only after
                          the approval of the QAD.&nbsp;&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp; Each department shall hold
                          meeting for the department at regular intervals to
                          discuss the issues pertaining to the department.
                          However, the interval between two such departmental
                          meetings shall not exceed 2(one) calendar month. All
                          the business transacted at the departmental meeting
                          shall be minuted and a copy of the same shall be
                          forwarded to the Medical director and center head. The
                          DMS shall have the right to inspect the minutes and
                          take copies without any prior notice.&nbsp;&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp; All the material issues
                          discussed at the department meetings requiring the
                          consideration of the Medical director/DMS / Management
                          shall be immediately brought to the notice of Medical
                          director. If the referred issues are not addressed/no
                          response is received within a reasonable time
                          (however, not later than 2 months) then the Department
                          shall bring the same to the notice of the DMS
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;&nbsp;&nbsp;
                          VIII&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          MEDICAL STAFF MEETINGS&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;As and when the situation so warrants, the DMS
                          in consultation with the Medical director shall have
                          the right to call for a meeting of the Medical
                          staff&nbsp;&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          IX&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; OBLIGATIONS OF
                          MEDICAL STAFF MEMBERS&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;The following are obligations of all Medical
                          Staff members.&nbsp; Failure to perform these
                          obligations shall constitute a default/misconduct by
                          any medical staff.&nbsp; Any repeated default may
                          result in the revocation of clinical privileges at the
                          Hospital, at the discretion of the Management.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          a. General: &nbsp;
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          i. Admitting Privileges: Only members of the Medical
                          Staff may admit patients to the Hospital and serve as
                          the Consultant.&nbsp; A Consultant shall at all times
                          be designated for each patient receiving care in the
                          Hospital.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          ii. Availability: subject to the extent of services
                          agreed to be rendered by a consultant (i.e Full
                          time/Part time/Visiting as the case may be) the
                          Consultants must be available at all times, except
                          when he/she has made arrangements for another Medical
                          Staff member to replace him or her. &nbsp;A primary
                          practitioner will be considered unavailable if he or
                          she has not responded ( by telephone or otherwise ) to
                          a call from the Hospital within 30 minutes and the
                          Medical director/ Center head will then be notified to
                          appoint a replacement consultant.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          iii. Emergency Department Call: All Medical Staff
                          members, except the visiting consultants, are expected
                          to participate in the on-call rotation for the
                          Emergency Department.&nbsp; On call request will be
                          considered unperformed if a consultant has not
                          responded (by telephone or otherwise) within 30
                          minutes.&nbsp; Call shall be optional for the
                          consultant who has crossed the age of 60 years, or if
                          granted a waiver from call, by the CC.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          iv. Continuing Medical Education:&nbsp; All Medical
                          Staff are required to accumulate a minimum of 24 hours
                          of continuing medical education credits every calendar
                          year.&nbsp; The CME requirement will begin on January
                          1, following a Consultant’s signing of the service
                          contract.&nbsp; If a Consultant fails to
                          comply&nbsp;&nbsp; with this CME requirement, the
                          matter will be forwarded to the CC for review.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          v. Clinical Practice Guidelines: All Medical Staff
                          shall conform to the Clinical Practice Guidelines
                          adopted by the hospital from time to time.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          vi. Participate in induction imparted by the hospital
                          before commencing his/her clinical practice at the
                          hospital.&nbsp; In case of conflicting medical
                          opinions by the consultants the same shall be
                          escalated to CMS for seeking expert/second opinion.
                          Participate in various committees of hospital.&nbsp;
                          Shall adhere to the grooming and dress code norms as
                          may be adopted by the hospital from time to time&nbsp;
                          Except for furnishing recommendations to the hospital
                          administration for procurement of drugs, implants,
                          equipments and other consumables, the medical staff
                          shall not involve in promotion of any particular drug,
                          implant, equipment as the case may be .&nbsp; No
                          indulgence in unfair/unethical trade
                          practices&nbsp;&nbsp; Shall adhere to the safety
                          policy as adopted by the hospital in specific and
                          Medical code of ethics in general&nbsp;&nbsp; Each and
                          every document required to be signed by the primary
                          consultant (not limited to the prescription, case
                          progress notes etc.,) shall be promptly signed by the
                          respective primary consultant. However, in the event
                          of any document being signed by a person other than
                          the primary consultant but under the express authority
                          of the primary consultant then the primary consultant
                          shall subsequently verify and endorse the correctness
                          of the contents of the document signed by the
                          authorised person.&nbsp;&nbsp; Notwithstanding the
                          fact that, the primary consultant is not in agreement
                          with the medical opinion expressed by his authorised
                          person, still be accountable and liable for the same.
                          However, this fact shall be brought to the notice of
                          the Medical director without any delay and shall
                          extend all support to the Medical director/ Center
                          head to minimize the impact arising out of the act or
                          omission of his/her authorised person.&nbsp; Maintain
                          Membership of an organization in good standing in
                          their specialty.{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;Not be convicted of, or have pled nolo
                          contendere to any criminal activity.{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;Participate in Hospital’s quality improvement,
                          utilization review and risk management programs.{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;Comply with hospitals procedures and policies to
                          monitor and control the expenses of the hospital in
                          order to promote cost effective services.&nbsp;&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;Comply with hospitals corporate responsibility
                          program and standard of conduct which is part of that
                          program.{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;Cooperate in good faith any investigation or
                          assist the hospital to investigate any complaints made
                          by the patients or hospital personnel and to resolve
                          such complaints in a reasonable time with appropriate
                          action.{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;Participate in training and educational programs
                          applicable to the service provided as mandated by the
                          hospital.{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;Consultants shall also comply with all the
                          hospital and professional licensure and reimbursement
                          laws, regulations, rules and policies, including
                          without limitations all applicable standards and
                          recommendations of the National Board of Accreditation
                          for hospitals and health care workers.{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;Consultant agrees to participate with all the
                          insurance companies and TPA that Cloudnine partners
                          with time to time. Consultant shall follow all the
                          rules of the Cloudnine billing policy.{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;Participate in letter and spirit in the
                          hospital’s Infection Control Program.{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;Implement all clinical programs that are rolled
                          out for various specialties from time to time by
                          Cloudnine.
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;Any Consultant who is allegedly on substance
                          abuse will submit to the processes established by
                          Cloudnine to confirm/ rule out substance abuse.
                          Failure to submit to such processes shall be grounds
                          for termination.{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;The Medical director shall call upon any or
                          several consultants involved in the management of a
                          case to be present at the Mortality and Morbidity
                          (M&amp;M) meeting or any similar forum for discussion.
                          Failure to appear for such discussions without due
                          reason or prior intimation is sufficient ground for
                          disciplinary action.{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;In accordance with the statutory provisions ,
                          pre-natal sex determination shall not be conducted
                          in&nbsp; Cloudnine hospitals by any medical
                          staff.&nbsp;&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;The examination of the opposite gender shall be
                          done only in presence of a chaperone of the same
                          gender as the patient, or a family member of the
                          patient under examination. Appropriate precautions
                          shall be taken while examining the patients of the
                          opposite gender.&nbsp;&nbsp; Personal beliefs/views
                          about a patient’s lifestyle, culture, gender, belief,
                          age, social status or perceived economic worth must
                          never prejudice the treatment of the patient under the
                          Medical staff’s care.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;Patient/family as the case may be to be fully
                          involved in all decision making with respect to
                          patients treatment /procedure&nbsp;&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;All referrals should be sent to the consultant
                          on call unless specific conditions warrant otherwise
                          and this shall be documented in the patient
                          notes.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;The Medical Staff shall participate in the roles
                          assigned in various codes like code blue{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;The Medical staff is also responsible to follow
                          all policies, manuals, guidelines and protocols etc.
                          issued from time to time.{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          The medical staff is bound by the Prevention of sexual
                          harassment (POSH) policy of the hospitals.
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          Admission and Discharge of Patients:&nbsp;
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          i. Provisional diagnosis: Patients shall not be
                          admitted to the Hospital until a provisional diagnosis
                          of the patient, or a valid reason for admission has
                          been made.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          ii. Necessary information:&nbsp; It is the duty of the
                          consultant to provide such available written
                          information as may be necessary to assist in the
                          protection of a patient from self-harm or for the
                          protection of others.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          iii. Consent for admission and treatment: Prior to
                          initiating any non-emergent operation or procedure, or
                          to admitting a patient to the hospital, the primary
                          consultant shall obtain the general consent for
                          admission and treatment from the patient and/or the
                          patient’s family.&nbsp; Except in emergency
                          situations, such treatment shall not be ordered until
                          proper consent has been obtained.&nbsp; Further, the
                          Consultant must explain to the patient and/or
                          patient’s family:1) the procedure to be performed, the
                          potential complication and potential benefits of the
                          procedure, or 2) the reasons for admitting the
                          patient.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          In emergency situations where a patient is
                          indisposed/legally unable to give consent and a
                          guardian is not readily available, consent for medical
                          procedures must be obtained from the Medical director.
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          iv. Discharge Orders: Patients will be discharged only
                          on order of the consultant and /or his designee.&nbsp;
                          If a patient leaves the hospital without an order and
                          against the primary consultant’s advice, the patient
                          should be asked to sign an “Against Medical Advice”
                          form.&nbsp;&nbsp;&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          The Primary Consultant then must make note of the
                          incident and the surrounding circumstances in the
                          patient’s medical record.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          v. Day-passes/transfer to outside facilities: Day
                          passes or transfers to outside facilities of patients
                          for tests/evaluations/treatment not available in
                          Hospital are permitted.&nbsp; These passes should be
                          supported by an order of the primary consultant in the
                          patient’s medical record.&nbsp;&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          Orders:&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          1. All orders for admission, treatment and performance
                          of test or other procedures shall be in writing/
                          electronically in the HER, in the patient’s medical
                          record. Under unavoidable circumstances, verbal order
                          shall be routed through the in-house medical staff of
                          the hospital and the same shall be authenticated by
                          the ordering consultant within 24 hours from the time
                          of order.&nbsp;&nbsp;&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          2. All orders must be timed, date, and signed by the
                          primary consultant&nbsp;&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          3. Admitting orders must contain admitting diagnosis,
                          and desired ward (i.e. ICU/CCU vs. Non ICU ward
                          room).&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          4. The primary consultant’s orders must be written
                          legibly.&nbsp; Orders that are illegible or improperly
                          written will not be carried out until clarified by the
                          primary consultant.&nbsp;&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          Medical Records – Inpatient&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          i. The Primary Consultant is responsible for the
                          following components in patient medical record:&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          1. A brief current history and physical examination by
                          the primary consultant or any member of his team shall
                          be recorded and appropriate orders written within 30
                          minutes after admission of the patient. The consultant
                          must countersign the detailed initial admission record
                          within 24 hours of admission.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          2. Operative Report(s): Operative reports shall be
                          completed immediately following surgery.&nbsp; The
                          reports shall include the pre-operative and
                          post-operative diagnoses, an account of the findings
                          at surgery and the relevant details of the surgical
                          technique.&nbsp; Complications and whether any
                          specimens were sent to pathology should also be
                          noted&nbsp;&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          3. Anesthetic Record: An anesthetic record shall be
                          completed by the primary anesthetist on all patients
                          receiving regional block or general anesthesia.&nbsp;
                          This record should include a pre anesthetic
                          assessment, clinical findings on physical exam,
                          relevant lab tests and overall impression of
                          anesthetic risk.&nbsp; Details regarding delivery of
                          anesthesia, ET tube, regional block location, etc.
                          should also be mentioned.&nbsp; All drugs or fluids
                          given, along with time, dosage and route should be
                          noted.&nbsp; Periodic vital signs should be
                          recorded.&nbsp; Any intra-operative or post-anesthetic
                          complications should be noted.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          4. Progress Note (daily): Patient progress notes shall
                          be recorded at least twice by the treating time and at
                          least once by the primary consultant daily at the time
                          of observation.&nbsp; They shall reflect a pertinent,
                          chronological report of the patient’s course in the
                          hospital, changes in the patient’s condition, the
                          results of treatment and any briefing of patient or
                          family.&nbsp;&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          5. Discharge Summary: A discharge summary form shall
                          be completed for all patients’ hospitalized. The
                          discharge summary should reflect the reason for
                          hospitalization, the significant findings, procedures
                          performed and treatment rendered, the condition at
                          discharge and any instructions (including discharge
                          medications) given to the patient and/or family. In
                          case of discharge against medical advice then the same
                          shall be explicitly mentioned in the discharge summary
                          including the associated risks of going against
                          medical advice.&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          6. Referral and Referral Consultant’s Report: all
                          referrals shall be in accordance with the referral
                          protocol/policy adopted by the hospital. The Referral
                          consultant’s report shall document a review of the
                          patient’s record, pertinent findings and his/her
                          opinion on the referred subject and recommendations.
                          All referrals should be seen within the specified time
                          limit mentioned hereinafter and the medication ordered
                          should be informed /discussed with the primary
                          consultant&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          Time limits&nbsp;&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          (i) For emergency consultation like life threatening
                          conditions – immediate (ii) For urgent- like unstable
                          vitals – within 4 hours from the time of
                          referral&nbsp; (iii) For routine – within 24 hours
                          (iv) pre-operative consultation shall be recorded
                          prior to surgery.&nbsp; .&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          In the event of a request by the patient/patient’s
                          kin/ medical staff/ Center head for the change of a
                          consultant (primary/referral) as the case may be, then
                          all such requests shall be forwarded to the Medical
                          director and the Medical director subject to
                          acceptance by the new consultant shall make necessary
                          arrangements to transfer the patient’s care&nbsp; to
                          the new consultant.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          ii. Completion of Medical Records: All medical staff
                          shall strictly adhere to the Electronic/ written
                          Medical Records policy adopted by the hospital of
                          his/her attachment and the entries in the same shall
                          be completed in all respects on or before discharge of
                          the patient.&nbsp; If a Consultants’ medical records
                          are incomplete within the stipulated period, the
                          Medical director will be alerted. The Medical director
                          will in turn notify the Consultant and ensure
                          compliance.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          iii. All medical records are the property of the
                          hospital and shall not be removed or copied from the
                          hospital except by court order/written request of the
                          patient/patient’ next kin/patient’s authorized
                          representative statutory authorities (to the extent
                          permissible under law).In the case of readmission of a
                          patient, all previous record shall be available for
                          use by the primary consultant.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          iv. All medical records of MTP shall be hidden from
                          view unless the CMS authorizes the same.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          v. Medical information may be released internally
                          without patient consent only for the purpose of
                          patient care, peer review, quality improvement
                          activities, and research.&nbsp;&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          Medical Records – Outpatient&nbsp;
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          i. Each outpatient report should include the diagnosis
                          and treatment plan of the consultant, supported by
                          current and historical information, objective physical
                          examination findings plus laboratory and/or radiology
                          information that support the diagnosis and treatment
                          plan. The patient notes shall also reflect any
                          preventive action and nutritional advice given&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          ii. If there is a consistent pattern of incomplete
                          outpatient medical records by a consultant, the
                          Medical director will consider remedial action&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          iii. Release of Outpatient Medical Records: Issues
                          regarding custody and release of outpatient medical
                          records shall be treated the same as inpatient medical
                          records.&nbsp;&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          Use of Hospital Services&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          i. All drugs and medications administered to patients
                          shall be only those listed in the hospital
                          formulary.&nbsp; If a drug, or its equivalent, is not
                          available on the formulary, then the hospital
                          pharmacist should be requested to obtain the
                          medication. Drugs prescribed outside the formulary
                          should be approved by the Medical director if it is
                          for one time use. Consultants may request addition /
                          deletions as per their requirements to the Medical
                          director, who will then initiate the process for
                          change in the formulary as per policy.&nbsp;&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          ii. Only if the pharmacist is unsuccessful in
                          obtaining the desired medication, shall the medication
                          be obtained from outside the hospital.&nbsp; Hospital
                          formulary is dynamic in nature and will be updated
                          regularly as per the protocol adopted for the same.
                          The prescriptions must be as per protocol.&nbsp;&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          iii. All medicines procured from outside as prescribed
                          herein above must be in a container clearly identified
                          as to patient’s name, number, and strength.&nbsp; It
                          must be given to the hospital for safekeeping and
                          administration.&nbsp; It should only be administered
                          if supported by a proper written order and verified by
                          the consultant.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          iv. Consultants will utilize hospital diagnostic
                          services (laboratory, radiology, etc.,) as warranted
                          by the patient’s medical condition, and not refer to
                          outside facilities for tests or diagnostic procedures
                          which are available in the hospital.&nbsp; For
                          services not available at the hospital, the consultant
                          shall refer to outside facilities where the hospital
                          have entered into any reciprocal arrangement for such
                          referral diagnostic tests.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          v. Consultant will refer to other Medical Staff
                          Specialist for opinions and treatment on patient
                          matters outside of their respective specialty area, on
                          all hospital patients requiring such referrals, unless
                          a patient requests otherwise.&nbsp; Consultant may
                          refer to outside specialists if a specific specialty
                          is not available in the Hospital with the concurrence
                          of the Chief of Medical services.&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          vi. Consultants shall participate in the training
                          programs organized for any new software/appliance/
                          instrument either for patient care or for
                          administrative use as and when introduced&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          X:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          AMENDMENTS&nbsp;{" "}
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;No amendments to this byelaw shall take effect
                          without the explicit consent of the management in
                          writing.
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <b>
                          <span
                            style={{
                              "font-size": "10.5pt",
                              "line-height": "115%",
                              "font-family": '"Tahoma",sans-serif',
                            }}
                          >
                            ACKNOWLEDGEMENT
                          </span>
                        </b>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          I acknowledge the receipt of Company’s ‘medical Staff
                          bylaws’ and I have read and understand that being a
                          consultant of the Company I require to abide by all
                          standards and policies contained under this bylaws.
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          I agree to maintain all company information
                          confidentially and shall not disclose to any third
                          person, unless in the ordinary course of business.
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          Name:
                          <u>
                            {oboard &&
                              oboard.doctorCommercial &&
                              oboard.doctorCommercial[0] &&
                              oboard.doctorCommercial[0].fullname}
                          </u>
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          Department:{" "}
                          <u>
                            {oboard &&
                              oboard.doctorCommercial &&
                              oboard.doctorCommercial[0] &&
                              oboard.doctorCommercial[0].departmentlist}
                          </u>
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          Signature: _____________________________
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          Date: _________________________________
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;
                        </span>
                      </p>
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;
                        </span>
                      </p>
                      <p
                        className="MsoBodyText"
                        style={{
                          "margin-left": "-9.0pt",
                          "line-height": "150%",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "150%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;
                        </span>
                      </p>
                    </div>
                    <span
                      style={{
                        "font-size": "10.5pt",
                        "line-height": "115%",
                        "font-family": '"Tahoma",sans-serif',
                      }}
                    >
                      <br clear="all" style={{ "page-break-before": "auto" }} />
                    </span>
                    <div className="WordSection2">
                      <p
                        className="MsoNormal"
                        style={{
                          "-webkit-text-align": "justify",
                          "text-align": "justify",
                        }}
                      >
                        <span
                          style={{
                            "font-size": "10.5pt",
                            "line-height": "115%",
                            "font-family": '"Tahoma",sans-serif',
                          }}
                        >
                          &nbsp;
                        </span>
                      </p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default Test;
