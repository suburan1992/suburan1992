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
import AddProcedure from "./forms/AddProcedure";
import EditProcedure from "./forms/EditProcedure";
import TableProcedure from "./tables/TableProcedure";
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

export default function ManageProcedure() {
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
    platinumPrice: "",
    commercial: "",
    domain: "",
    remark: "",
    status: "",
  };
  const [procedure, setProcedure] = useState(initialFormState);
  const [preview, setPreview] = useState(true);
  const [editing, setEditing] = useState(false);
  const [rows, setRows] = useState([]);
  const [data, setData] = useState(false);
  const [pcat, setPcat] = useState([]);
  const [ccat, setCcat] = useState([]);
  const [dcat, setDcat] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8090/api/CommercialCategory/")
      .then((res) => res.data)
      .then((rows) => {
        setCcat(rows.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8090/api/DomainCategory/")
      .then((res) => res.data)
      .then((rows) => {
        setDcat(rows.data);
      });
  }, []);

  //http://localhost:8090/api/DomainCategory/

  useEffect(() => {
    axios
      .get("http://localhost:8090/api/ProcedureCategory/")
      .then((res) => res.data)
      .then((rows) => {
        setPcat(rows.data);
      });
  }, [data]);

  // get all records from procedure
  useEffect(() => {
    axios
      .get("http://localhost:8090/api/procedures/")
      .then((res) => res.data)
      .then((rows) => {
        console.log(rows, "procedurerecords");
        setRows(rows);
      });
  }, [data]);
  //populate single record in the Edit component
  const editRow = (procedure) => {
    setPreview(false);
    setEditing(true);
    setProcedure({
      id: procedure.id,
      name: procedure.name,
      platinumPrice: procedure.platinumPrice,
      commercial: procedure.commercial,
      domain: procedure.domain,
      remark: procedure.remark,
      status: procedure.status,
    });
  };

  //update Procedure
  const updateProcedure = (id, procedure) => {
    setData(false);
    axios
      .put("http://localhost:8090/api/procedures/" + id, procedure)
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
  const addProcedure = (procedure) => {
    console.log(procedure);
    setData(false);
    axios
      .post("http://localhost:8090/api/procedures/", procedure)
      .then((res) => {
        console.log(res);
        setPreview(true);
        setData(true);
        if (res.status === 200) {
          setState({
            open: true,
            vertical: "top",
            horizontal: "center",
            message: "Procedure added successfully.",
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
        .delete("http://localhost:8090/api/procedures/" + row.id)
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
                <Typography variant="h6">Manage Procedures</Typography>
                {preview ? (
                  <Typography variant="body2">
                    Masters / Manage Procedures / Procedure List
                  </Typography>
                ) : editing ? (
                  <Typography variant="body2">
                    Masters / Manage Procedures / Edit Procedure
                  </Typography>
                ) : (
                  <Typography variant="body2">
                    Masters / Manage Procedures / Add Procedure
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
                  <TableProcedure
                    rows={rows}
                    editRow={editRow}
                    deleteProcedure={deleteProcedure}
                  />
                ) : editing ? (
                  <EditProcedure
                    editing={editing}
                    setEditing={setEditing}
                    setPreview={setPreview}
                    currentProcedure={procedure}
                    updateProcedure={updateProcedure}
                    pcat={pcat}
                    ccat={ccat}
                    dcat={dcat}
                  />
                ) : (
                  <AddProcedure
                    addProcedure={addProcedure}
                    pcat={pcat}
                    ccat={ccat}
                    dcat={dcat}
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
