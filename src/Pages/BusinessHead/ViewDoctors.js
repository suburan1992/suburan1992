import React, { useState, useEffect } from "react";
import axios from "axios";
import {useDispatch,useSelector} from 'react-redux'
import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";
import { MDBDataTableV5 } from "mdbreact";
import { Modal, Button } from "react-bootstrap";
import {listDoctors} from '../../actions/doctorActions'

function ViewDoctors() {
    const dispatch = useDispatch()
    const doctorList = useSelector(state => state.doctorList)
    const {loading , error, doctors} =doctorList
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const [currentModal, setCurrentModal]=useState(-1)
    const [id, setId] = useState('');
    // const [list, setList] = useState([]);
	// const [doctors, setDoctors] = useState({});
	// function getData(){
	// 	return axios.get('http://localhost:3001/doctors/list');
	
	// }
    
    function showDetails()
    {
        
        handleShow();
    }



    function clickRow(id) {
        setId(id)
        showDetails()
        
    }
	useEffect(() => {
        dispatch(listDoctors())
    },[dispatch])



	// 	getData()
	// 	.then((res)=>{
	// 		const allData=res.data;
	// 		var nArr = [];
	// 		allData.map((doctor) => {
	// 			const datamodule={
	// 				name: doctor.name,
	// 				code: doctor.code,
	// 				designation: doctor.designation,
	// 				contractExpiry: doctor.agreement_expiry_date,
	// 				payoutReciept:'demo',
	// 				// clickEvent:()=>handleShow()
	// 				clickEvent:()=>clickRow(doctor.id)
	// 			};
	// 			nArr.push(datamodule);
	// 		});
	// 		setDoctors({
	// 			columns: [
	// 				{
	// 					label: 'Name',
	// 					field: 'name',
	// 					width: 100,
	// 				},
	// 				{
	// 					label: 'Code',
	// 					field: 'code',
	// 					sort: 'asc',
	// 					width: 200,
	// 				},
	// 				{
	// 					label: 'Designation',
	// 					field: 'designation',
	// 					width: 100,
	// 				},
					
	// 				{
	// 					label: 'Contract Expiry ',
	// 					field: 'contractExpiry',
	// 					sort: 'asc',
	// 					width: 100,
	// 				},
	// 				{
	// 					label: 'payoutReciept',
	// 					field: 'payoutReciept',
	// 					sort: 'disabled',
	// 					width: 150,
	// 				},
		
	// 			],
		
	// 			rows: nArr
	// 		})
    //         setList(arr=>[...arr,allData]);
	// 	})
	// 	.catch((error)=>{
	// 	})
	// }, [id])

    return (
      
        <>
            
            <Sidebar />
           
            <div className="main-content side-content pt-0">
                <div className="container-fluid">

                    <div className="inner-body">
                         <Navbar />
                        <div className="page-header">
                            <div>
                                <h2 className="main-content-title tx-24 mg-b-5">Doctor List</h2><br />
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">BHDashboard</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">View Doctors</li>
                                </ol>
                            </div>
                        </div>

                        <div className="row row-sm">
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 grid-margin">
                                <div className="card custom-card">
                                    <div className="card-body flex justify-content-center align-items-center">
                                        <MDBDataTableV5
                                            hover
                                            entriesOptions={[5, 10, 15, 20, 25]}
                                            entries={5}
                                            pagesAmount={4}
                                            data={doctors}
                                            pagingTop
                                            searchTop searchBottom={false}
                                            barReverse
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal size="lg" scrollable dialogClassName="modalStandard" centered aria-labelledby="example-modal-sizes-title-lg" show={show} onHide={handleClose}>
                    <Modal.Header className="modalHeader" closeButton>
                        {/* <Modal.Title className="modalTitle">{list && list[0] && list[0].name}</Modal.Title> */}
                    </Modal.Header>
                    <Modal.Body>
                    <div class="col-lg-12">
                            <div class="card shadow-lg border-0 rounded-lg mt-2 pd-b-5">
                                <div class="card-body ml-3">
                                    <h3 class="text-left font-weight-normal my-4">Job description</h3>

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

                                    <h3 class="text-left font-weight-normal my-4">Personal Information</h3>
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

                                    <h3 class="text-left font-weight-normal my-4">Bank Account Details</h3>
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

                                    <h3 class="text-left font-weight-normal my-4">Email</h3>
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

                                    <h3 class="text-left font-weight-normal my-4">Agreement Details:</h3>
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
                    </Modal.Body>
                </Modal>

               
                
                  
                </div>
              
        
        
      
    </>
  );
}

export default ViewDoctors;
