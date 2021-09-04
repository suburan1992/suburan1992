import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Sidebar from '../../Components/Sidebar';
import Navbar from '../../Components/Navbar';
import RequestCard from '../../Components/RequestCard'
import AgreementsCard from '../../Components/AgreementsCard';
import TemplatesCard from '../../Components/TemplatesCard';
import Slider from "react-slick";
function Agreements() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: true,
        arrows: true
    };
    const options = {
        items: 1,
        nav: true,
        rewind: true,
        autoplay: true
    };

    // const events = {
    //     onDragged: function(event) {...},
    //     onChanged: function(event) {...}
    // };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    function buttonClick() {
    }
    return (
        <>
            <Sidebar />
            
            <div className="main-content side-content pt-0">
                <div className="container-fluid">
                    <div className="inner-body">
                    <Navbar />
                        <div class="page-header">
                            <div>
                                <h2 class="main-content-title tx-24 mg-b-5">Carousel</h2><br />
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="#">Advanced UI</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Carousel</li>
                                </ol>
                            </div>
                           
                        </div>


                        <h3 className="main-content-title tx-24 " style={{ marginTop: "30px", marginBottom: '20px' }}>Agreements</h3>

                        <div className="m-3 p-2" style={{ backgroundColor: "" }}>
                            <Slider {...settings}>
                                <div className="row d-flex justify-content-around align-items-center m-0">
                                    <div className="col-sm-3 ">
                                        <AgreementsCard />
                                    </div>
                                    <div className="col-sm-3 ">
                                        <AgreementsCard />
                                    </div>
                                    <div className="col-sm-3 ">
                                        <AgreementsCard />
                                    </div>
                                    <div className="col-sm-3">
                                        <AgreementsCard />
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-around align-items-center m-0">
                                    <div className="col-sm-3 ">
                                        <AgreementsCard />
                                    </div>
                                    <div className="col-sm-3 ">
                                        <AgreementsCard />
                                    </div>
                                    <div className="col-sm-3 ">
                                        <AgreementsCard />
                                    </div>
                                    <div className="col-sm-3">
                                        <AgreementsCard />
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-around align-items-center m-0">
                                    <div className="col-sm-3 ">
                                        <AgreementsCard />
                                    </div>
                                    <div className="col-sm-3 ">
                                        <AgreementsCard />
                                    </div>
                                    <div className="col-sm-3 ">
                                        <AgreementsCard />
                                    </div>
                                    <div className="col-sm-3">
                                        <AgreementsCard />
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-center align-items-center m-0">
                                    <div className="col-sm-3 ">
                                        <AgreementsCard />
                                    </div>
                                    <div className="col-sm-3 ">
                                        <AgreementsCard />
                                    </div>
                                    <div className="col-sm-3 ">
                                        <AgreementsCard />
                                    </div>
                                    <div className="col-sm-3">
                                        <AgreementsCard />
                                    </div>
                                </div>


                            </Slider>
                        </div>


                        <div className="d-flex" style={{ marginTop: "30px", marginBottom: '20px' }}>
                            <h3 className="main-content-title tx-24">Agreement Templates <span className="ml-3 h5" onClick={handleShow}> create +</span></h3>
                        </div>
                        <div className="row row-sm">
                            <div className="col-sm-3 ">
                                <TemplatesCard />
                            </div>
                            <div className="col-sm-3 ">
                                <TemplatesCard />
                            </div>
                            <div className="col-sm-3 ">
                                <TemplatesCard />
                            </div>
                            <div className="col-sm-3 ">
                                <TemplatesCard />
                            </div>
                            <div className="col-sm-3 ">
                                <TemplatesCard />
                            </div>
                            <div className="col-sm-3 ">
                                <TemplatesCard />
                            </div>
                            <div className="col-sm-3 ">
                                <TemplatesCard />
                            </div>
                        </div>
                    </div>
                </div>

                <Modal size="lg" scrollable dialogClassName="modalStandard" centered aria-labelledby="example-modal-sizes-title-lg" show={show} onHide={handleClose}>
                    <Modal.Header className="modalHeader" closeButton>
                        <Modal.Title className="modalTitle">Create New</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">
                            <div className="col-6 mb-7">
                                <label className="tx-inverse text-muted">Name</label>
                                <input className="form-control" placeholder="Input box" type="text" />
                            </div>

                            <div className="col-6 ">
                                <label className="tx-inverse text-muted">Category</label>
                                <select className="form-select inputStyle" aria-label="Default select example" >
                                    <option defaultValue>Filter By</option>
                                    <option value="1">By Date</option>
                                    <option value="2">By Name</option>
                                </select>
                            </div>

                            <div className="col-6 ">
                                <div className="input-group file-browser mt-3">
                                    <label className="input-group-btn">
                                        <span className="btn btn-block inputStyle">  <span className="d-flex justify-content-left text-muted">Upload </span>
                                            <input type="file" style={{ display: 'none' }} multiple="" />
                                        </span>
                                    </label>

                                </div>
                            </div>
                        </div>

                    </Modal.Body>
                    <Modal.Footer className="d-flex justify-content-center">
                        <button className="standardButton acceptButton" onClick={handleClose}>
                            Accept
                        </button>
                        <button className="standardButton rejectButton" onClick={handleClose}>
                            Reject
                        </button>
                    </Modal.Footer>
                </Modal>








            </div>

        </>
    )
}

export default Agreements
