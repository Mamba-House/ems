import {
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Button,
} from "@material-ui/core";
import React from "react";
import List from "../components/business/recruitments";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "56%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
function Recruiment() {
  const classes = useStyles();
  const [code, setCode] = React.useState(null);

  const [type, setType] = React.useState(null);
  const [employee, setEmployee] = React.useState(null);
  return (
    <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
      <Grid container justify="space-between">
        <Grid sm={4} item>
          <TextField
            id="outlined-basic"
            label="Job Title"
            variant="outlined"
            onChange={(e) => setCode(e.target.value)}
          />
        </Grid>
        <Grid sm={4} item>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Job Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={type}
              fullWidth={true}
              onChange={(e) => setType(e.target.value)}
              label="Job Type"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid sm={4} item>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Status
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={employee}
              fullWidth={true}
              onChange={(e) => setEmployee(e.target.value)}
              label="Status"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

         
        </Grid>

       

       

        <Grid item sm={12}>
          <List />
        </Grid>
      </Grid>
    </div>
  );
}

export default Recruiment;
