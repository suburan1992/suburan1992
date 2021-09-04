import React, { useState } from "react";
// @material-ui/core components
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {
  FormControl,
  FormControlLabel,
  Paper,
  RadioGroup,
} from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";

const styleSheet = makeStyles((theme) => ({
  paperStyle: { marginTop: "10px" },
  textFieldstyle: {
    marginBottom: "20px",
    marginTop: "20px",
  },
  btnStyle: {
    marginRight: "80px",
    marginLeft: "auto",
    display: "block",
    marginBottom: "20px",
  },
}));

export default function AddCommercialCatagory({ addDesignation }) {
  const style = styleSheet();
  const initialFormState = { id: null, name: "",   status: "" };
  const [designation, setDesignation] = useState(initialFormState);
  const [value, setValue] = React.useState("1");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDesignation({ ...designation, [name]: value });
  };

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          designation.status = value;
          addDesignation(designation);
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
                label="Service Name"
                value={designation.name}
                onChange={handleInputChange}
                required
                fullWidth
              />
              {/* <TextField
                className={style.textFieldstyle}
                variant="outlined"
                name="code"
                label="Code"
                value={designation.code}
                onChange={handleInputChange}
                required
                fullWidth
              /> */}
              <FormControl component="fieldset">
                <FormLabel component="legend">Status</FormLabel>
                <RadioGroup
                  row
                  name="status"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio color="#00963f" />}
                    label="Active"
                  />
                  <FormControlLabel
                    value="0"
                    control={<Radio color="#00963f" />}
                    label="Inactive"
                  />
                </RadioGroup>
              </FormControl>
              {/* <TextField
                className={style.textFieldstyle}
                variant="outlined"
                name="status"
                label="Status"
                value={designation.status}
                onChange={handleInputChange}
                required
                fullWidth
              /> */}
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}></Grid>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              className={style.btnStyle}
            >
              Add
            </Button>
          </Grid>
        </Paper>
      </form>
    </>
  );
}
