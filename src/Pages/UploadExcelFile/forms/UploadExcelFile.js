import React from "react";
import Button from "@material-ui/core/Button";
import PublishIcon from "@material-ui/icons/Publish";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";

export default function UploadExcelFile({
  uplodFIle,
  progress,
  intVal,
  totalRecord,
}) {
  return (
    <>
      <div style={{ marginTop: "20px" }}>
        <label htmlFor="fileUpload">
          <Button
            variant="contained"
            color="primary"
            component="span"
            endIcon={<PublishIcon />}
            fullWidth
          >
            Upload FIle
          </Button>
        </label>
      </div>
      <input
        accept=".xlsx,.csv"
        id="fileUpload"
        type="file"
        style={{ display: "none" }}
        onChange={uplodFIle}
      />

      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        {progress ? (
          <LinearProgress
            variant="determinate"
            value={(intVal * 100) / totalRecord}
          />
        ) : (
          ""
        )}
      </Grid>
    </>
  );
}
