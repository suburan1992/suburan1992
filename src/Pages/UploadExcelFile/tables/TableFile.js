import React from "react";
// material-table component
import MaterialTable from "material-table";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const myTableStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    "& td": {
      fontFamili: "Roboto !important",
    },
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflow: "auto",
    marginBottom: "50px",
  },
}));

export default function TableFile({ rows, deleteBillingReport }) {
  const tables = myTableStyle();
  return (
    <>
      {" "}
      <Paper className={tables.root}>
        <MaterialTable
          columns={[
            { title: "MPI", field: "MPI" },
            { title: "Patient Name", field: "Patient_Name" },
            { title: "Bill No", field: "Bill_No" },
            { title: "Bill Date", field: "Bill_Date" },
            { title: "Bill Amount", field: "Bill_Amt" },
            { title: "Contract Name", field: "Contra_Disc_Name" },
            { title: "Contract Amount", field: "Contra_Disc_Amount" },
            { title: "Management Name", field: "Mangment_Disc_Name" },
            { title: "Management Amount", field: "Mangment_Disc_Amount" },
            { title: "Professional Name", field: "Proff_Disc_Name" },
            { title: "Professional Discount", field: "Proff_Disc_Amount" },
          ]}
          actions={[
            // {
            //   icon: "edit",
            //   tooltip: "Edit",
            //   iconProps: { style: { fontSize: "24px", color: "#5f5fe7" } },
            //   onClick: (event, row) => editRow(row),
            // },
            {
              icon: "delete",
              tooltip: "Delete",
              iconProps: { style: { fontSize: "24px", color: "#f55151" } },
              onClick: (event, row) => {
                deleteBillingReport(row);
              },
            },
          ]}
          data={rows}
          options={{
            // filtering: true,
            sorting: true,
            exportButton: true,
            pageSize: 5,
            pageSizeOptions: [5, 10, 50, 100, 200, 500],
            search: true,
          }}
          title="Procedure"
        />
      </Paper>
    </>
  );
}
