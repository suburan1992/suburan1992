import "./App.css";
import Sidebar from "../Components/Sidebar";
import Chat from "../Components/Chat";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import BHDashboard from "../Pages/BusinessHead/Dashboard";
import DoctorDashboard from "../Pages/Doctor/DoctorDashboard";
import RdDashboard from "../Pages/RegionalDirector/RdDashboard";
import HRDashboard from "../Pages/HumanResource/HrDashboard";
import SignUp from "../Pages/Login/SignUp";
import ForgotPassword from "../Pages/Login/ForgotPassword";
import LoginPage from "../Pages/Login/LoginPage";
import DoctorForm from "../Pages/BusinessHead/DoctorForm";
import RdStatus from "../Pages/RegionalDirector/status";
import UploadDocuments from "../Pages/Doctor/UploadDocuments";
import UploadedDocument from "../Pages/Doctor/UploadedDocument";
import Agreements from "../Pages/HumanResource/Agreements";
import ViewDoctors from "../Pages/BusinessHead/ViewDoctors";
import DoctorAgreements from "../Pages/BusinessHead/DoctorAgreements";
import DoctorInfo from "../Components/DoctorInfo";
import PayoutPage from "../Pages/Payout/PayoutPage";
import PayoutDashboard from "../Pages/Payout/PayoutDashboard";
import DoctorProfile from "../Pages/Doctor/DoctorProfile";
import Doctortest from "../Pages/Doctor/Doctortest";
import ManageDesignation from "../Pages/Designation/ManageDesignation";
import ManageDepartment from "../Pages/Department/ManageDepartment";
import ManageProcedure from "../Pages/Procedure/ManageProcedure";
import ManageServiceCatagory from "../Pages/ServiceCatagory/ManageServiceCatagory";
import ManageProcedureCatagory from "../Pages/procedureCatagory/ManageProcedureCatagory";
import ManageParameter from "../Pages/Parameter/ManageParameter";
import ManageCommercialCatagory from "../Pages/CommercialCategory/ManageCommercialCatagory";
import ManageDomainCatagory from "../Pages/DomainCatagory/ManageDomainCatagory";
import MangeExcelFile from "../Pages/UploadExcelFile/MangeExcelFile";
// for temporary testing of code
import Temp from "../Pages/Payout/Temp";
import TestDashboard from "../Pages/BusinessHead/TestDashboard";
import ViewStatus from "../Pages/RegionalDirector/ViewStatus";

import Test from "../Pages/Payout/test";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  toast.configure();
  const reqTableData = [
    {
      requestId: "N1234",
      requestType: "Onboarding",
      requestRaisedBy: "Business Head",
      date: "07/12/2018",
      subject: "Onboarding",
      currentStatus: "ongoing",
    },
    {
      requestId: "N1234",
      requestType: "Payout",
      requestRaisedBy: "Regional Director",
      date: "07/12/2018",
      subject: "Onboarding",
      currentStatus: "ongoing",
    },
    {
      requestId: "N1234",
      requestType: "Renewal",
      requestRaisedBy: "Doctor",
      date: "07/12/2018",
      subject: "Onboarding",
      currentStatus: "ongoing",
    },
    {
      requestId: "N1234",
      requestType: "Postion",
      requestRaisedBy: "Business Head",
      date: "07/12/2018",
      subject: "Onboarding",
      currentStatus: "ongoing",
    },
    {
      requestId: "N1234",
      requestType: "Onboarding",
      requestRaisedBy: "BH",
      date: "07/12/2018",
      subject: "Onboarding",
      currentStatus: "completed",
    },
    {
      requestId: "N1234",
      requestType: "Position",
      requestRaisedBy: "BH",
      date: "07/12/2018",
      subject: "Onboarding",
      currentStatus: "ongoing",
    },
  ];

  const payoutExceptionData = [
    {
      exceptionId: "P1234",
      doctorName: "Dr Ajay Arora",
      doctorBranch: "Jayanagar",
      date: "24/06/2021",
      errorMessage: "?",
      currentStatus: "BH Approval Pending",
    },
    {
      exceptionId: "P1354",
      doctorName: "Dr Sharan Kumar",
      doctorBranch: "Bellandur",
      date: "26/06/2021",
      errorMessage: "?",
      currentStatus: "Payout Intervention Required",
    },
    {
      exceptionId: "P1211",
      doctorName: "Dr Rahul Kumar",
      doctorBranch: "Jayanagar",
      date: "23/06/2021",
      errorMessage: "?",
      currentStatus: "BH Approval passed",
    },
    {
      exceptionId: "P1320",
      doctorName: "Dr ABC",
      doctorBranch: "Chennai",
      date: "25/06/2021",
      errorMessage: "?",
      currentStatus: "Payout Intervention Required",
    },
    {
      exceptionId: "P1120",
      doctorName: "Dr DEF",
      doctorBranch: "Jayanagar",
      date: "22/06/2021",
      errorMessage: "?",
      currentStatus: "RD Approval Pending",
    },
    {
      exceptionId: "P1222",
      doctorName: "Dr GHI",
      doctorBranch: "Malleshwaram",
      date: "24/06/2021",
      errorMessage: "?",
      currentStatus: "Doctor Confirmation Pending",
    },
  ];

  const TopTenPayouts = [
    {
      srNo: 0,
      doctorName: "Dr Ajay Arora",
      doctorBranch: "Jayanagar",
      Payout: "50lpa",
    },
    {
      srNo: 1,
      doctorName: "Dr Kalpa Sharma",
      doctorBranch: "Kanakpura Road",
      Payout: "50lpa",
    },
    {
      srNo: 2,
      doctorName: "Dr Satish",
      doctorBranch: "Jayanagar",
      Payout: "48lpa",
    },
    {
      srNo: 3,
      doctorName: "Dr Jacob Arora",
      doctorBranch: "Jayanagar",
      Payout: "45lpa",
    },
    {
      srNo: 4,
      doctorName: "Dr Nidhi Lathi",
      doctorBranch: "Chennai",
      Payout: "43lpa",
    },
    {
      srNo: 5,
      doctorName: "Dr Sanjeev",
      doctorBranch: "Jayanagar",
      Payout: "40lpa",
    },
    {
      srNo: 6,
      doctorName: "Dr Soham",
      doctorBranch: "Jayanagar",
      Payout: "40lpa",
    },
    {
      srNo: 7,
      doctorName: "Dr Karthik",
      doctorBranch: "Jayanagar",
      Payout: "35lpa",
    },
    {
      srNo: 8,
      doctorName: "Dr Pushpa",
      doctorBranch: "Jayanagar",
      Payout: "34lpa",
    },
    {
      srNo: 9,
      doctorName: "Dr Krishna",
      doctorBranch: "Jayanagar",
      Payout: "30lpa",
    },
  ];
  return (
    <div className="App">
      {/*<Dashboard/>
      <DoctorForm/>*/}

      <Router>
        <Route exact path="/sidebar">
          {/* <Sidebar userType={"RD"} /> */}
        </Route>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/ForgotPassword" component={ForgotPassword} />
        <Route exact path="/Doctor-Profile" component={DoctorProfile} />
        <Route exact path="/Doctortest" component={Doctortest} />
        {/* <Route exact pathe="/view-status" component={ViewStatus} /> */}
        <Route exact path="/bh-dashboard">
          <BHDashboard reqTableData={reqTableData} />
        </Route>
        <Route exact path="/rd-dashboard">
          <RdDashboard reqTableData={reqTableData} />
        </Route>
        <Route exact path="/DoctorDashboard">
          <DoctorDashboard reqTableData={reqTableData} />
        </Route>
        <Route exact path="/payout-dashboard">
          <PayoutDashboard reqTableData={payoutExceptionData} />
        </Route>

        <Route exact path="/chat" component={Chat} />
        <Route exact path="/hr-agreements" component={Agreements} />
        <Route exact path="/hr-dashboard" component={HRDashboard} />
        <Route exact path="/create-doctor" component={DoctorForm} />
        <Route exact path="/upload-documents" component={UploadDocuments} />
        <Route exact path="/UploadedDocument" component={UploadedDocument} />
        <Route exact path="/view-doctors" component={ViewDoctors} />
        <Route exact path="/doctor-agreements" component={DoctorAgreements} />
        <Route exact path="/doctor-info" component={DoctorInfo} />
        <Route exact path="/rdStatus" component={RdStatus} />
        <Route exact path="/payout-page" component={PayoutPage} />

        <Route exact path="/TestDashboard" component={TestDashboard} />
        <Route exact path="/manage-designation" component={ManageDesignation} />
        <Route exact path="/manage-department" component={ManageDepartment} />
        <Route exact path="/manage-procedure" component={ManageProcedure} />
        <Route
          exact
          path="/service-category"
          component={ManageServiceCatagory}
        />
        <Route
          exact
          path="/procedure-category"
          component={ManageProcedureCatagory}
        />
        <Route exact path="/manage-parameter" component={ManageParameter} />
        <Route
          exact
          path="/manage-commercial"
          component={ManageCommercialCatagory}
        />
        <Route exact path="/manage-domain" component={ManageDomainCatagory} />
        <Route exact path="/manage-file" component={MangeExcelFile} />

        {/* shreyansh payout */}
        <Route exact path="/Test">
          <Test reqTableData={payoutExceptionData} />
        </Route>

        {/* Arya Payout */}
        <Route exact path="/temp">
          <Temp
            PayoutExceptionData={payoutExceptionData}
            TopTenPayouts={TopTenPayouts}
          />
        </Route>
      </Router>
    </div>
  );
}

export default App;
