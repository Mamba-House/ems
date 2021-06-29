import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Grid, ListItemText, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const columns = [
  { field: "id", headerName: "ID", width: 150 },
  { field: "project", headerName: "Project", width: 150 },
  { field: "role", headerName: "Role", width: 150 },
  { field: "start", headerName: "Start", width: 150 },
  { field: "finish", headerName: "Finish", width: 150 },
];

const rows = [
  {
    id: 1,
    role: "Snow",
    project: "Jon",
    start: "01 /10 / 2010",
    finish: "01 /10 / 2010",
  },
  {
    id: 2,
    role: "Snow",
    project: "Jon",
    start: "01 /10 / 2010",
    finish: "01 /10 / 2010",
  },
  {
    id: 3,
    role: "Snow",
    project: "Jon",
    start: "01 /10 / 2010",
    finish: "01 /10 / 2010",
  },
  {
    id: 4,
    role: "Snow",
    project: "Jon",
    start: "01 /10 / 2010",
    finish: "01 /10 / 2010",
  },
];




const columns2 = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "skill", headerName: "Skill", width: 150 },
    { field: "level", headerName: "Level", width: 150 },
  ];
  
  const rows2 = [
    {
      id: 1,
      skill: "Planning",
      level: "expert",
    },
    {
      id: 2,
      skill: "Power",
      level: "intermidiate",
    },
    {
      id: 3,
      skill: "Value",
      level: "intermidiate",
    },
    {
      id: 4,
      skill: "Value 2",
      level: "intermidiate",
    },
  ];
  
export default function Details() {
  const classes = useStyles();

  return (
    <div>
      <div
        style={{
          height: 400,
          width: "65%",
          marginTop: "15px",
          display: "inline-block",
        }}
      >
        <DataGrid rows={rows} columns={columns} pageSize={5} />
      </div>

      <div
        style={{
          height: 400,
          width: "30%",
          marginTop: "15px",
          display: "inline-block",
          marginLeft:"20px"
        }}
      >
        <DataGrid rows={rows2} columns={columns2} pageSize={5} />
      </div>
    </div>
  );
}
