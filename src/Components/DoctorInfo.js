import React from 'react'
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer'

function DoctorInfo() {
    return (
        <>
            <Sidebar />
            <Navbar />
            <div className="main-content side-content pt-0">
                <div className="container-fluid">
                    <div className="inner-body">
                        <div class="page-header">
                            <div><h2 class="main-content-title tx-24 mg-b-5">Demo Doctor</h2>
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="dashboard">Home</a></li>
                                    <li class="breadcrumb-item active" >view doctors</li>
                                    <li class="breadcrumb-item active" aria-current="page">demo doctor</li>
                                </ol>
                            </div>
                            <div class="d-flex"></div>
                        </div>
                        <div class="col-lg-12">
                            <div class="card shadow-lg border-0 rounded-lg mt-5 pd-b-5">
                                <div class="card-body ml-3">
                                    <h3 class="text-left font-weight-semibold my-4">Job description</h3>

                                    <div className="row ">
                                        <div className="col-md-6">
                                            <label className="font-weight-lighter tx-xl-18 mb-1"><span className="font-weight-normal tx-xl-20">Code:</span> 97568900</label><br />
                                            <label className="font-weight-lighter tx-xl-18 mb-1"><span className="font-weight-normal tx-xl-20">Designation:</span>demo Designation</label>

                                        </div>
                                        <div className="col-md-6">
                                            <label className="font-weight-lighter tx-xl-18 mb-1"><span className="font-weight-normal tx-xl-20">Specialisation:</span> demo SPecs</label><br />
                                            <label className="font-weight-lighter tx-xl-18 mb-1"><span className="font-weight-normal tx-xl-20">Nature of employment:</span> demo SPecs</label><br />
                                        </div>
                                    </div>
                                    {/* /////////////////////////////////////////////// */}

                                    <hr style={{ width: "80%", height: "2px", color: "blueviolet" }} />

                                    <h3 class="text-left font-weight-semibold my-4">Personal Information</h3>
                                    <div className="row ">
                                        <div className="col-md-6">
                                            <label className="font-weight-lighter tx-xl-18 mb-1"><span className="font-weight-normal tx-xl-20">Contact Number:</span> 97234568900</label><br />
                                            <label className="font-weight-lighter tx-xl-18 mb-1"><span className="font-weight-normal tx-xl-20">PAN Number:</span> 97234568900</label><br />
                                            <label className="font-weight-lighter tx-xl-18 mb-1"><span className="font-weight-normal tx-xl-20">PAN Length:</span> 12</label><br />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="font-weight-lighter tx-xl-18 mb-1"><span className="font-weight-normal tx-xl-20">Address:</span>demo adressdemo adressdemo adressdemo adressdemo adressdemo adressdemo adressdemo adressdemo adressdemo adressdemo adressdemo adressdemo adress</label>
                                        </div>
                                    </div>
                                    {/* ////////////////////////////////////// */}
                                    <hr style={{ width: "80%", height: "2px", color: "blueviolet" }} />

                                    <h3 class="text-left font-weight-semibold my-4">Bank Account Details</h3>
                                    <div className="row ">
                                        <div className="col-md-6">
                                            <label className="font-weight-lighter tx-xl-18 mb-1"><span className="font-weight-normal tx-xl-20">Bank Name:</span>Demo bank</label><br />
                                            <label className="font-weight-lighter tx-xl-18 mb-1"><span className="font-weight-normal tx-xl-20">IFSC Code:</span>HG5678</label><br />
                                            <label className="font-weight-lighter tx-xl-18 mb-1"><span className="font-weight-normal tx-xl-20">Payee:</span>Mr demo</label><br />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="font-weight-lighter tx-xl-18 mb-1"><span className="font-weight-normal tx-xl-20">IFSC Length: </span>11</label><br />
                                            <label className="font-weight-lighter tx-xl-18 mb-1"><span className="font-weight-normal tx-xl-20">No of digits in Bank Account Number: </span>14</label><br />
                                        </div>

                                    </div>

                                    {/* ////////////////////////////////////// */}
                                    <hr style={{ width: "80%", height: "2px", color: "blueviolet" }} />

                                    <h3 class="text-left font-weight-semibold my-4">Email</h3>
                                    <div className="row ">
                                        <div className="col-md-6">
                                            <label className="font-weight-lighter tx-xl-18 mb-1"><span className="font-weight-normal tx-xl-20">Personal Email:</span>demo@gmail.com</label><br />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="font-weight-lighter tx-xl-18 mb-1"><span className="font-weight-normal tx-xl-20">Official Email:</span>demo@cloudninecare.com</label><br />
                                        </div>
                                    </div>

                                    {/* ////////////////////////////////////// */}
                                    <hr style={{ width: "80%", height: "2px", color: "blueviolet" }} />

                                    <h3 class="text-left font-weight-semibold my-4">Agreement Details:</h3>
                                    <div className="row ">
                                        <div className="col-md-6">
                                            <label className="font-weight-lighter tx-xl-18 mb-1"><span className="font-weight-normal tx-xl-20">Agreement Signature:</span>Given</label><br />
                                            <label className="font-weight-lighter tx-xl-18 mb-1"><span className="font-weight-normal tx-xl-20">Tenure:</span>12 months</label><br />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="font-weight-lighter tx-xl-18 mb-1"><span className="font-weight-normal tx-xl-20">Agreement Start Date:</span>21/June/2020</label><br />
                                            <label className="font-weight-lighter tx-xl-18 mb-1"><span className="font-weight-normal tx-xl-20">Agreement End Date:</span>21/June/2021</label><br />
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>

                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default DoctorInfo
