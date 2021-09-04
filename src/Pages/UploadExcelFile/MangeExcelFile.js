import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { IconButton } from "@material-ui/core";
import ListIcon from "@material-ui/icons/List";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import XLSX from "xlsx";
import moment from "moment";

//ui components
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import AddFile from "./forms/UploadExcelFile";
import TableFile from "./tables/TableFile";
import axios from "axios";

const styleSheet = makeStyles((theme) => ({
  iconButtonStyle: {
    float: "right",
  },
  marginforMaster: {
    marginTop: "30px",
  },
}));

export default function ManageExcelFile() {
  const classes = styleSheet();
  const [preview, setPreview] = useState(true);
  const [intVal, setIntVal] = useState(0);
  const [totalRecord, setTotalRecord] = useState(0);
  const [progress, setProgress] = useState(false);
  const [rows, setRows] = useState([]);
  const [reload, setReload] = useState(false);
  const uplodFIle = (element) => {
    if (element.target.files[0]) {
      var totalBytes = element.target.files[0].size;
      const fileUpload = element.target.files[0];
      let fileName = element.target.files[0].name;
      const reader = new FileReader();
      if (reader.readAsBinaryString) {
        reader.onload = (e) => {
          processExcel(reader.result);
        };
        reader.readAsBinaryString(fileUpload);
      }
    }
  };

  function processExcel(data) {
    const workbook = XLSX.read(data, { type: "binary" });
    const firstSheet = workbook.SheetNames[0];
    const excelRows = XLSX.utils.sheet_to_row_object_array(
      workbook.Sheets[firstSheet]
    );

    //moment(moment('13-01-2020', 'DD-MM-YYYY')).format('YYYY-MM-DD');

    excelRows.map(
      (i) =>
        (i.Bill_Date = moment(moment(i.Bill_Date, "DD-MM-YYYY")).format(
          "YYYY-MM-DD"
        ))
    );
    var data = JSON.stringify(excelRows);
    // console.log(data);
    var len = excelRows.length;
    var k = [];
    var l = 0;
    setTotalRecord((z) => excelRows.length);

    for (var i = 0; i < excelRows.length; i++) {
      setProgress(true);
      setReload(false);
      axios
        .post("http://localhost:8090/api/billings/", excelRows[i])
        .then((res) => {
          setIntVal((prevState) => prevState + 1);
          console.log(res);

          // k.push(res.data);
          l++;
          console.log(l, "length");
          if (excelRows.length === l) {
            setTimeout(() => {
              setProgress(false);
              setPreview(true);
              setReload(true);
            }, 2000);
          }
        });
    }
    document.getElementById("fileUpload").value = "";
  }

  useEffect(() => {
    axios
      .get("http://localhost:8090/api/billings/")
      .then((res) => res.data)
      .then((rows) => {
        console.log(rows.data, "AllExcelData");
        setRows(rows.data);
      });
  }, [reload]);

  //deletion of billingReport
  const deleteBillingReport = (row) => {
    setReload(false);
    var k = window.confirm("Are you sure want to delete this record ?");
    if (k) {
      axios
        .delete("http://localhost:8090/api/billings/" + row.id)
        .then((res) => {
          if (res.status === 200) {
            setReload(true);
            alert(res.data.message);
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
                <Typography variant="h6">Manage File Upload</Typography>

                {preview ? (
                  <Typography variant="body2">
                    Masters / Manage File / File List
                  </Typography>
                ) : (
                  <Typography variant="body2">
                    Masters / Manage File / Add File
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
                  <TableFile
                    rows={rows}
                    deleteBillingReport={deleteBillingReport}
                  />
                ) : (
                  <AddFile
                    uplodFIle={uplodFIle}
                    intVal={intVal}
                    totalRecord={totalRecord}
                    progress={progress}
                  />
                )}
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}
