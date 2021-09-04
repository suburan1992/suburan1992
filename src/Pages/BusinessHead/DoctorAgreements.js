import React from 'react'
import Sidebar from '../../Components/Sidebar'
import Navbar from '../../Components/Navbar'

function DoctorAgreements() {
    return (
        <>
            <Sidebar/>
            
            <div className="main-content side-content pt-0">
                <div className="container-fluid">

                <div className="inner-body">
                <Navbar/> 
                        <div className="page-header">
                            <div>
                                <h2 className="main-content-title tx-24 mg-b-5">Doctor List</h2><br/>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">BHDashboard</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">View Doctor Agreements</li>
                                </ol>
                            </div>
                        </div>

                        <div className="row row-sm">
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 grid-margin">
                                <div className="card custom-card">
                                    <div className="card-header border-bottom-0 pb-0">
                                        <div className="d-flex justify-content-between">
                                            <div className="input-group mb-3 searchbar">
                                              <input type="text" class="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                              <div className="input-group-append">
                                                <button className="btn btn-primary" type="button"><i className="fe fe-search" ></i></button>
                                              </div>
                                            </div>
                                            <div className="ml-auto float-right">
                                                <select className="form-select rounded cdropdown" aria-label="Default select example" >
                                                   <option defaultValue>Filter By</option>
                                                   <option value="1">By Date</option>
                                                  <option value="2">By Name</option>
                                                 </select>

                                                 <select className="form-select rounded  cdropdown" aria-label="Default select example" >
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
                                                        <th className="wd-lg-20p"><span>Name</span></th>
                                                        <th className="wd-lg-20p"><span>Designation</span></th>
                                                        <th className="wd-lg-20p"><span>Department</span></th>
                                                        <th className="wd-lg-20p"><span>Location</span></th>
                                                        <th className="wd-lg-20p"><span>Agreement Type</span></th>   
                                                        <th className="wd-lg-20p"><span>Start Date</span></th>   
                                                        <th className="wd-lg-20p"><span>End Date</span></th>   
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                      <td>Dr Soham Joshi </td>
                                                      <td>Surgical Resident</td>
                                                      <td>Surgery Department</td>
                                                      <td>Chennai</td>
                                                      <td>Internship</td>
                                                      <td>12 July 2020</td>
                                                      <td><i class="fas fa-exclamation-triangle fa-xs mr-2" style={{color:"red"}}></i>12 July 2021</td>
                                                    </tr>
                                                    <tr>
                                                      <td>Dr Ritik Sanghvi </td>
                                                      <td>Pathologist</td>
                                                      <td>Pathology Department</td>
                                                      <td>Pune</td>
                                                      <td>Full Time</td>
                                                      <td>30 October 2020</td>
                                                      <td><i class="fas fa-check-circle fa-xs mr-2" style={{color:"green"}}></i>30 October 2021</td>
                                                      
                                                      
                                                    </tr>
                                                                    
                                                </tbody>
                                            </table>
                                        </div>
                                        <ul className="pagination mt-4 mb-0 float-right">
                                            <li className="page-item page-prev disabled"><a className="page-link" href="#" tabindex="-1">Prev</a></li>
                                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                                            <li className="page-item"><a className="page-link" href="#">5</a></li>
                                            <li className="page-item page-next"><a className="page-link" href="#">Next</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DoctorAgreements
