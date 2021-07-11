import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { stateData } from "../../helpers/stateCodes";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableRow: {
    cursor: "pointer",
  },
});

export default function DenseTable(props) {
  const { data, handleClick, onClick,date } = props;
  var rows = [];
  rows=data;
  console.log(rows);
  const classes = useStyles();
  const handleStateClick = (row, state) => {
    handleClick(row, state);
    onClick();
  };
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>
              <h3>Center Name</h3>
            </TableCell>
            <TableCell align="center">
              <h3>Available</h3>
            </TableCell>
            <TableCell align="center">
              <h3>Dose 1</h3>
            </TableCell>
            <TableCell align="center">
              <h3>Dose 2</h3>
            </TableCell>
            <TableCell align="center">
              <h3>Vaccine</h3>
            </TableCell>
            <TableCell align="center">
              <h3>Date</h3>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length>0?rows.map((row) => (
            <TableRow
              key={row.name}
              className={classes.tableRow}
            >
              <TableCell component="th" scope="row">
                <h4>{row.name}</h4>
              </TableCell>
              <TableCell align="center">{row.available_capacity}</TableCell>
              <TableCell align="center">
                {row.available_capacity_dose1}
              </TableCell>
              <TableCell align="center">
                {row.available_capacity_dose2}
              </TableCell>
              <TableCell align="center">{row.vaccine}</TableCell>
              <TableCell align="center">{date}</TableCell>
            </TableRow>
          )) : ""}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
