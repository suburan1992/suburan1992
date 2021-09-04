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
import AddServiceCatagory from "./forms/AddServiceCatagory";
import EditServiceCAtagory from "./forms/EditServiceCAtagory";
import TableServiceCatagory from "./tables/TableServiceCatagory";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import { designationlist } from "../../actions/designationAction";

const styleSheet = makeStyles((theme) => ({
  iconButtonStyle: {
    float: "right",
  },
  marginforMaster: {
    marginTop: "30px",
  },
}));

export default function ManageServiceCatagory() {
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
  const initialFormState = { id: null, name: "", code: "", status: "" };
  const [designation, setDesignation] = useState(initialFormState);
  const [preview, setPreview] = useState(true);
  const [editing, setEditing] = useState(false);
  const [rows, setRows] = useState([]);
  const [data, setData] = useState(false);

  // get all records from designation
  useEffect(() => {
    axios
      .get("http://localhost:8090/api/ServiceCategory/")
      .then((res) => res.data)
      .then((rows) => {
        setRows(rows.data);
      });
  }, [data]);

  //populate single record in the Edit component
  const editRow = (designation) => {
    setPreview(false);
    setEditing(true);
    setDesignation({
      id: designation.id,
      name: designation.name,
      code: designation.code,
      status: designation.status,
    });
  };

  //update designation
  const updateDesignation = (id, designation) => {
    setData(false);
    axios
      .put("http://localhost:8090/api/ServiceCategory/" + id, designation)
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

  //add designation
  const addDesignation = (designation) => {
    setData(false);
    axios
      .post("http://localhost:8090/api/ServiceCategory/", designation)
      .then((res) => {
        setPreview(true);
        setData(true);
        if (res.status === 200) {
          setState({
            open: true,
            vertical: "top",
            horizontal: "center",
            message: "ServiceCategory added successfully.",
            color: "success",
          });
        }
      });
  };

  //deletion of designation
  const deleteDesignation = (row) => {
    setData(false);
    var k = window.confirm("Are you sure want to delete this record ?");
    if (k) {
      axios
        .delete("http://localhost:8090/api/ServiceCategory/" + row.id)
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
                <Typography variant="h6">Service Category</Typography>
                {preview ? (
                  <Typography variant="body2">
                    Masters / Service Category / Service Category List
                  </Typography>
                ) : editing ? (
                  <Typography variant="body2">
                    Masters / Service Category / Edit Service Category
                  </Typography>
                ) : (
                  <Typography variant="body2">
                    Masters / Service Category / Add Service Category
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
                  <TableServiceCatagory
                    rows={rows}
                    editRow={editRow}
                    deleteDesignation={deleteDesignation}
                  />
                ) : editing ? (
                  <EditServiceCAtagory
                    editing={editing}
                    setEditing={setEditing}
                    setPreview={setPreview}
                    currentDesignation={designation}
                    updateDesignation={updateDesignation}
                  />
                ) : (
                  <AddServiceCatagory addDesignation={addDesignation} />
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
