import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// @material-ui/core components
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { IconButton } from "@material-ui/core";
import ListIcon from "@material-ui/icons/List";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
// import { SnackbarContent } from "@material-ui/core";
import SnackbarContent from "@material-ui/core/SnackbarContent";
// axios
import axios from "axios";
//bootstrap
import { Container } from "react-bootstrap";

//ui components
import AddParameter from "./forms/AddParameter";
import EditParameter from "./forms/EditParameter";
import TableParameter from "./tables/TableParameter";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";

const styleSheet = makeStyles((theme) => ({
  iconButtonStyle: {
    float: "right",
  },
  marginforMaster: {
    marginTop: "30px",
  },
}));

export default function ManageParameter() {
  const classes = styleSheet();
  const dispatch = useDispatch();
  //useStae for Snackbar
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
    message: "",
    color: "",
    icon: "",
  });
  //variables for snack bar
  const { vertical, horizontal, open } = state;
  //function for snackbar
  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const initialFormState = {
    id: null,
    name: "",
    procedureId: "",
    departmentId: "",
    designationId: "",
    serviceCatagoryId: "",
    remark: "",
    status: "",
  };
  const [parameter, setParameter] = useState(initialFormState);
  const [preview, setPreview] = useState(true);
  const [editing, setEditing] = useState(false);
  const [rows, setRows] = useState([]);
  const [data, setData] = useState(false);
  const [procedure, setProcedure] = useState([]);
  const [department, setDepartment] = useState([]);
  const [designation, setDesignation] = useState([]);
  const [seviceCatagory, setServiceCatagory] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8090/api/procedures/")
      .then((res) => res.data)
      .then((rows) => {
        setProcedure(rows);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8090/api/departments/")
      .then((res) => res.data)
      .then((rows) => {
        setDepartment(rows.data);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8090/api/designations/")
      .then((res) => res.data)
      .then((rows) => {
        setDesignation(rows.data);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8090/api/ServiceCategory/")
      .then((res) => res.data)
      .then((rows) => {
        setServiceCatagory(rows.data);
      });
  }, []);

  // get all records from procedure
  useEffect(() => {
    axios
      .get("http://localhost:8090/api/parameters/")
      .then((res) => res.data)
      .then((rows) => {

        setRows(rows);
      });
  }, [data]);
  //populate single record in the Edit component
  const editRow = (parameter) => {
    setPreview(false);
    setEditing(true);
    setParameter({
      id: parameter.id,
      name: parameter.name,
      procedureId: parameter.procedureId,
      departmentId: parameter.departmentId,
      designationId: parameter.designationId,
      serviceCatagoryId: parameter.serviceCatagoryId,
      remark: parameter.remark,
      status: parameter.status,
    });
  };

  //update Procedure
  const updateProcedure = (id, parameter) => {
    setData(false);
    axios
      .put("http://localhost:8090/api/parameters/" + id, parameter)
      .then((res) => {
        if (res.status === 200) {
          setEditing(false);
          setPreview(true);
          setData(true);

          setState({
            open: true,
            vertical: "top",
            horizontal: "center",
            message: res.data.message,
            color: "success",
          });
        }
      });
  };

  //add procedure
  const addProcedure = (parameter) => {
    setData(false);
    axios
      .post("http://localhost:8090/api/parameters/", parameter)
      .then((res) => {
        setPreview(true);
        setData(true);
        if (res.status === 200) {
          setState({
            open: true,
            vertical: "top",
            horizontal: "center",
            message: "Parameter added successfully.",
            color: "success",
          });
        }
      });
  };

  //deletion of procedure
  const deleteProcedure = (row) => {
    setData(false);
    var k = window.confirm("Are you sure want to delete this record ?");
    if (k) {
      axios
        .delete("http://localhost:8090/api/parameters/" + row.id)
        .then((res) => {
          setData(true);
          if (res.status === 200) {
            setState({
              open: true,
              vertical: "top",
              horizontal: "center",
              message: res.data.message,
              color: "danger",
            });
          }
        });
    }
  };

  return (
    <>
      <Sidebar />
      <div className="main-content side-content pt-0 mg-b-30">
        <div className="container-fluid">
          <div className="inner-body">
            <Navbar />
            <Grid container>
              <Grid
                item
                xs={12}
                sm={12}
                md={8}
                lg={8}
                xl={8}
                className={classes.marginforMaster}
              >
                <Typography variant="h6">Manage Parameters</Typography>
                {preview ? (
                  <Typography variant="body2">
                    Masters / Manage Parameters / Parameter List
                  </Typography>
                ) : editing ? (
                  <Typography variant="body2">
                    Masters / Manage Parameters / Edit Parameter
                  </Typography>
                ) : (
                  <Typography variant="body2">
                    Masters / Manage Parameters / Add Parameter
                  </Typography>
                )}
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                xl={4}
                className={classes.marginforMaster}
              >
                <div className={classes.iconButtonStyle}>
                  <IconButton
                    color="primary"
                    onClick={() => {
                      setPreview(true);
                      setEditing(false);
                    }}
                  >
                    <ListIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    onClick={() => {
                      setPreview(false);
                    }}
                  >
                    <AddCircleOutlineIcon />
                  </IconButton>
                </div>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                {preview ? (
                  <TableParameter
                    rows={rows}
                    editRow={editRow}
                    deleteProcedure={deleteProcedure}
                  />
                ) : editing ? (
                  <EditParameter
                    editing={editing}
                    setEditing={setEditing}
                    setPreview={setPreview}
                    currentProcedure={parameter}
                    updateProcedure={updateProcedure}
                    procedure={procedure}
                    department={department}
                    designation={designation}
                    seviceCatagory={seviceCatagory}
                  />
                ) : (
                  <AddParameter
                    addProcedure={addProcedure}
                    procedure={procedure}
                    department={department}
                    designation={designation}
                    seviceCatagory={seviceCatagory}
                  />
                )}
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        autoHideDuration={5000}
        open={open}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        <SnackbarContent color={state.color} message={state.message} />
      </Snackbar>
    </>
  );
}
