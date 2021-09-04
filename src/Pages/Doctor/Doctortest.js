import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

export default function Doctortest() {
    const classes = useStyles();

    return (
        <>

            <Sidebar />
            <div className="main-content side-content pt-0">
                <div className="container-fluid" style={{ margin: "0 auto", backgroundColor: "white" }}>
                    <div className="inner-body">

                        <Navbar />
                        <div className="container" style={{ width: "100%", height: "30vh" }}>
                            <Timeline align="alternate">
                                <TimelineItem>
                                    <TimelineOppositeContent>
                                        <Typography variant="body2" color="textSecondary">

                                        </Typography>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot>

                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Paper elevation={3} className={classes.paper}>
                                            <Typography variant="h6" component="h1">
                                                Documents Uploaded
            </Typography>
                                            <Typography></Typography>
                                        </Paper>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineOppositeContent>
                                        <Typography variant="body2" color="textSecondary">

                                        </Typography>
                                    </TimelineOppositeContent>
                                    <TimelineSeparator>
                                        <TimelineDot color="primary">

                                        </TimelineDot>
                                        <TimelineConnector />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Paper elevation={3} className={classes.paper}>
                                            <Typography variant="h6" component="h1">
                                                RD Approval
            </Typography>
                                            <Typography></Typography>
                                        </Paper>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineSeparator>
                                        <TimelineDot color="primary" variant="outlined">

                                        </TimelineDot>
                                        <TimelineConnector className={classes.secondaryTail} />
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Paper elevation={3} className={classes.paper}>
                                            <Typography variant="h6" component="h1">

                                            </Typography>
                                            <Typography></Typography>
                                        </Paper>
                                    </TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineSeparator>
                                        <TimelineDot color="secondary">

                                        </TimelineDot>
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Paper elevation={3} className={classes.paper}>
                                            <Typography variant="h6" component="h1">

                                            </Typography>
                                            <Typography></Typography>
                                        </Paper>
                                    </TimelineContent>
                                </TimelineItem>
                            </Timeline>
                        </div>
                        <div className="card custom-card">
                            <div className="card-header border-bottom-0 pb-0">
                                <div className="d-flex justify-content-between">
                                    <div className="input-group mb-3 searchbar">
                                        <input type="text" class="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2" />
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
                                                <th className="wd-lg-20p"><span>Service Type</span></th>
                                                <th className="wd-lg-20p"><span>Approved By</span></th>
                                                <th className="wd-lg-20p"><span>Approved On</span></th>
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
                                                <td><i class="fas fa-exclamation-triangle fa-xs mr-2" style={{ color: "red" }}></i>12 July 2021</td>
                                            </tr>
                                            <tr>
                                                <td>Dr Ritik Sanghvi </td>
                                                <td>Pathologist</td>
                                                <td>Pathology Department</td>
                                                <td>Pune</td>
                                                <td>Full Time</td>
                                                <td>30 October 2020</td>
                                                <td><i class="fas fa-check-circle fa-xs mr-2" style={{ color: "green" }}></i>30 October 2021</td>


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

        </>
    );
}
