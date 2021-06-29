import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import {
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  makeStyles,
  Button,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
}));



  function createData(project, monday, tuesday, wednesday, thursday, friday, saturday, sunday, total) {
    return { project, monday, tuesday, wednesday, thursday, friday, saturday, sunday , total };
  }
  
  const rows = [
    createData('Project 1 ', 159, 6.0, 24, 4.0, 50, 30, 20,300),
    createData('Project 1 ', 159, 6.0, 24, 4.0, 50, 30, 20,300),
    createData('Project 1 ', 159, 6.0, 24, 4.0, 50, 30, 20,300),
    createData('Project 1 ', 159, 6.0, 24, 4.0, 50, 30, 20,300),
    createData('Project 1 ', 159, 6.0, 24, 4.0, 50, 30, 20,300),
    createData('Project 1 ', 159, 6.0, 24, 4.0, 50, 30, 20,300),

  ];
  


export default function TimeSheets() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div style={{ paddingLeft: "180px", paddingRight: "120px", paddingTop:"20px" }}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container>
          <Grid item sm={6}>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Date picker dialog"
              format="MM/dd/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Grid>
          <Grid sm={6} item>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Project
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={age}
                fullWidth={true}
                onChange={handleChange}
                label="Project"
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

          
          <Grid container style={{ paddingTop: "45px", paddingBottom:"30px" }} item justify="center">
            <Button variant="contained" size="large" color="primary">
              ADD PROJECT
            </Button>
          </Grid>
        </Grid>

        
      </MuiPickersUtilsProvider>

      <div style={{width: "100%",   border: '2px solid black', borderRadius: "30px", padding:"20px"}}>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Project</TableCell>
            <TableCell align="right">Monday</TableCell>
            <TableCell align="right">Tuesday</TableCell>
            <TableCell align="right">Wednesday</TableCell>
            <TableCell align="right">Thursday</TableCell>
            <TableCell align="right">Friday</TableCell>
            <TableCell align="right">Saturday</TableCell>
            <TableCell align="right">Sunday</TableCell>
            <TableCell align="right">Total</TableCell>



          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.project}
              </TableCell>
              <TableCell align="right">{row.monday}</TableCell>
              <TableCell align="right">{row.tuesday}</TableCell>
              <TableCell align="right">{row.wednesday}</TableCell>
              <TableCell align="right">{row.thursday}</TableCell>
              <TableCell align="right">{row.friday}</TableCell>
              <TableCell align="right">{row.saturday}</TableCell>
              <TableCell align="right">{row.sunday}</TableCell>
              <TableCell align="right">{row.total}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    </div>
  );
}
