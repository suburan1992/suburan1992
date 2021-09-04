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

export default function TableDepartment({ rows, editRow, deleteDepartment }) {
  const tables = myTableStyle();
  return (
    <>
      <Paper className={tables.root}>
        <MaterialTable
          columns={[
            { title: "Name", field: "name" },
            { title: "Code", field: "code" },
            {
              title: "Status",
              field: "status",
              lookup: { 1: "Active", 0: "Inactive" },
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
                deleteDepartment(row);
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
          title="Department"
        />
      </Paper>
    </>
  );
}
