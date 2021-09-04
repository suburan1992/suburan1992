import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";
import RequestCard from "../../Components/RequestCard";

function PayoutPage({ reqTableData }) {
  return (
    <>
      <Sidebar />
      <div className="main-content side-content pt-0">
        <div className="container-fluid">
          <div className="inner-body">
            <Navbar />
            <div className="page-header">
              <div>
                <h2 className="main-content-title tx-24 mg-b-5">
                  Welcome Ella!
                </h2>
                <br />
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="dashboard">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Calculate Payout
                  </li>
                </ol>
              </div>
            </div>
            <div className="justify-content-center">
              <div className="row">
                <div className="col-md-4 requestCol">
                  <a className="requestCard">
                    <RequestCard reqType="new" num={5} />
                  </a>
                </div>
                {/* <div className="col-md-8 col-sm-12 col-xs-12 requestCol">
                                    <StatsCard />
                                </div> */}
                <div className="progressbar-wrapper">
                  {" "}
                  <h2 className="progressbar-title">Progress Bar</h2>
                  <div class="col-md-8 col-sm-12 col-xs-12  container">
                    <ul class="progressbar">
                      <li class="active"></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div>
              <h2 className="main-content-title tx-24 mg-b-5">Exceptions</h2>
              <br />
              <div className="row row-sm">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 grid-margin">
                  <div className="card custom-card">
                    <div className="card-header border-bottom-0 pb-0">
                      <div className="d-flex justify-content-between">
                        <div className="input-group mb-3 searchbar">
                          <input
                            type="text"
                            class="form-control"
                            placeholder=""
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                          />
                          <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                              <i className="fe fe-search"></i>
                            </button>
                          </div>
                        </div>
                        <div className="ml-auto float-right">
                          <select
                            className="form-select rounded cdropdown"
                            aria-label="Default select example"
                          >
                            <option defaultValue>Filter By</option>
                            <option value="1">By Date</option>
                            <option value="2">By Name</option>
                          </select>

                          <select
                            className="form-select rounded  cdropdown"
                            aria-label="Default select example"
                          >
                            <option defaultValue>Filter By</option>
                            <option value="1">By Date</option>
                            <option value="2">By Name</option>
                          </select>
                          {/* <div className="">
                                                    <a href="#" className="option-dots" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fe fe-more-horizontal"></i></a>
                                                    <div className="dropdown-menu dropdown-menu-right" >
                                                        <a className="dropdown-item" href="#">Today</a> <a className="dropdown-item" href="#">Last Week</a> <a className="dropdown-item" href="#">Last Month</a> <a className="dropdown-item" href="#">Last Year</a>
                                                    </div>
                                                </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive border userlist-table">
                        <table className="table card-table table-striped table-vcenter text-nowrap mb-0 ctable">
                          <thead>
                            <tr>
                              <th className="wd-lg-20p">
                                <span>Doctor ID</span>
                              </th>
                              <th className="wd-lg-20p">
                                <span>Doctor Name</span>
                              </th>
                              <th className="wd-lg-20p">
                                <span>Doctor Designation</span>
                              </th>
                              <th className="wd-lg-20p">
                                <span>Location</span>
                              </th>
                              <th className="wd-lg-20p">
                                <span>Exception message</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>120 </td>
                              <td>Dr Soham Joshi </td>
                              <td>Surgical Resident</td>
                              <td>Chennai</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td>121</td>
                              <td>Dr Ritik Sanghvi </td>
                              <td>Pathologist</td>
                              <td>Pune</td>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <ul className="pagination mt-4 mb-0 float-right">
                        <li className="page-item page-prev disabled">
                          <a className="page-link" href="#" tabindex="-1">
                            Prev
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            4
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            5
                          </a>
                        </li>
                        <li className="page-item page-next">
                          <a className="page-link" href="#">
                            Next
                          </a>
                        </li>
                      </ul>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>

            <br />
            <br />
            <div>
              <h2 className="main-content-title tx-24 mg-b-5">
                Previous Month's Payment List
              </h2>
              <br />
              <div className="row row-sm">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 grid-margin">
                  <div className="card custom-card">
                    <div className="card-header border-bottom-0 pb-0">
                      <div className="d-flex justify-content-between">
                        <div className="input-group mb-3 searchbar">
                          <input
                            type="text"
                            class="form-control"
                            placeholder=""
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                          />
                          <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                              <i className="fe fe-search"></i>
                            </button>
                          </div>
                        </div>
                        <div className="ml-auto float-right">
                          <select
                            className="form-select rounded cdropdown"
                            aria-label="Default select example"
                          >
                            <option defaultValue>Filter By</option>
                            <option value="1">By Date</option>
                            <option value="2">By Name</option>
                          </select>

                          <select
                            className="form-select rounded  cdropdown"
                            aria-label="Default select example"
                          >
                            <option defaultValue>Filter By</option>
                            <option value="1">By Date</option>
                            <option value="2">By Name</option>
                          </select>
                          {/* <div className="">
                                                    <a href="#" className="option-dots" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fe fe-more-horizontal"></i></a>
                                                    <div className="dropdown-menu dropdown-menu-right" >
                                                        <a className="dropdown-item" href="#">Today</a> <a className="dropdown-item" href="#">Last Week</a> <a className="dropdown-item" href="#">Last Month</a> <a className="dropdown-item" href="#">Last Year</a>
                                                    </div>
                                                </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive border userlist-table">
                        <table className="table card-table table-striped table-vcenter text-nowrap mb-0 ctable">
                          <thead>
                            <tr>
                              <th className="wd-lg-20p">
                                <span>SL#</span>
                              </th>
                              <th className="wd-lg-20p">
                                <span>MPI</span>
                              </th>
                              <th className="wd-lg-20p">
                                <span>ID#</span>
                              </th>
                              <th className="wd-lg-20p">
                                <span>Bill</span>
                              </th>
                              <th className="wd-lg-20p">
                                <span>Bill Date</span>
                              </th>
                              <th className="wd-lg-40p">
                                <span>Current Status</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>P1241</td>
                              <td>Payout</td>
                              <td>XYZ</td>
                              <td>03/03</td>
                              <td>Addition</td>
                              <td>Proccessing By..</td>
                            </tr>
                            <tr>
                              <td>P1241 </td>
                              <td>Payout</td>
                              <td>XYZ</td>
                              <td>03/03</td>
                              <td>Addition</td>
                              <td>Proccessing By..</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <ul className="pagination mt-4 mb-0 float-right">
                        <li className="page-item page-prev disabled">
                          <a className="page-link" href="#" tabindex="-1">
                            Prev
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            4
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            5
                          </a>
                        </li>
                        <li className="page-item page-next">
                          <a className="page-link" href="#">
                            Next
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PayoutPage;
