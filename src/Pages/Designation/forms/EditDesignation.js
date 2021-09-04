import React, { useEffect, useState } from "react";
// @material-ui/core components
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
  FormControl,
  FormControlLabel,
  Paper,
  RadioGroup,
} from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import FormLabel from "@material-ui/core/FormLabel";


const styleSheet = makeStyles((theme) => ({
  paperStyle: { marginTop: "10px" },
  textFieldstyle: {
    marginBottom: "20px",
    marginTop: "20px",
  },
  btnStyle: {
    right: "5px",
    marginBottom: "20px",
  },
  cancellBtnStyle: {
    // float: "right",
    // marginRight: "60px",
    // marginLeft: "auto",
    // display: "block",
    marginBottom: "20px",
  },
}));

export default function EditDesignation({
  currentDesignation,
  setEditing,
  setPreview,
  updateDesignation,
}) {
  const style = styleSheet();
  //   const initialFormState = { id: null, name: "", code: "", status: "" };
  const [designation, setDesignation] = useState(currentDesignation);
  const [value, setValue] = React.useState(0);
  const [check, setCheck] = useState(false);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDesignation({ ...designation, [name]: value });
  };

  useEffect(() => {
    setValue(designation.status);
  }, [currentDesignation]);

  const handleChange = (event) => {

    setValue(event.target.value);
  };
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          designation.status = value;
          updateDesignation(designation.id, designation);
        }}
      >
        <Paper className={style.paperStyle}>
          <Grid container>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
            <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
              <TextField
                className={style.textFieldstyle}
                variant="outlined"
                name="name"
                label="Designation"
                value={designation.name}
                onChange={handleInputChange}
                required
                fullWidth
              />
              <TextField
                className={style.textFieldstyle}
                variant="outlined"
                name="code"
                label="Code"
                value={designation.code}
                onChange={handleInputChange}
                required
                fullWidth
              />
              <FormControl component="fieldset">
                <FormLabel component="legend">Status</FormLabel>
                <RadioGroup
                  row
                  name="status"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value={1}
                    control={<Radio color="#00963f" />}
                    label="Active"
                    checked={value == 1 ? true : false}
                  />
                  <FormControlLabel
                    value={0}
                    control={<Radio color="#00963f" />}
                    label="Inactive"
                    checked={value == 0 ? true : false}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}></Grid>
            <Grid item xs={4} sm={4} md={5} lg={5} xl={5}></Grid>
            <Grid item xs={4} sm={4} md={3} lg={3} xl={3}>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                className={style.btnStyle}
              >
                Update
              </Button>
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                className={style.cancellBtnStyle}
                onClick={() => {
                  setEditing(false);
                  setPreview(true);
                }}
              >
                Cancell
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
      
    </>
  );
}
