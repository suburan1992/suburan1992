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

export default function TableProcedure({ rows, editRow, deleteProcedure }) {
  const tables = myTableStyle();
  return (
    <>
      <Paper className={tables.root}>
        <MaterialTable
          columns={[
            { title: "Procedure Name", field: "name" },
            { title: "Platinum Price", field: "platinumPrice" },
            // { title: "Catagory", field: "procedureCatagory.name" },
            { title: "Commercial Catagory", field: "commercialcategory.name" },

            { title: "Domain Catagory", field: "domaincategory.name" },
            { title: "Remark", field: "remark" },
            {
              title: "Status",
              field: "status",
              lookup: { true: "Active", false: "Inactive" },
            },
          ]}
          actions={[
            {
              icon: "edit",
              tooltip: "Edit",
              iconProps: { style: { fontSize: "24px", color: "#5f5fe7" } },
              onClick: (event, row) => editRow(row),
            },
            {
              icon: "delete",
              tooltip: "Delete",
              iconProps: { style: { fontSize: "24px", color: "#f55151" } },
              onClick: (event, row) => {
                deleteProcedure(row);
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
