import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { stateData } from '../../helpers/stateCodes';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableRow:{
      cursor:"pointer"
  }
});

export default function DenseTable(props) {

    
    const rows = []
    const {data, handleClick, onClick} = props;
    data.map(data => rows.push(data));
  const classes = useStyles();
    const handleStateClick = (row,state)=>{
        handleClick(row,state);
        onClick();
    }
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell><h3>State</h3></TableCell>
            <TableCell align="center"><h3>Confirmed</h3></TableCell>
            <TableCell align="center"><h3>Active</h3></TableCell>
            <TableCell align="center"><h3>Recovered</h3></TableCell>
            <TableCell align="center"><h3>Deceased</h3></TableCell>
            <TableCell align="center"><h3>Partially Vaccinated</h3></TableCell>
            <TableCell align="center"><h3>Fully Vaccinated</h3></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} onClick={()=>handleStateClick(row,stateData[row[0]])} className={classes.tableRow}>
              <TableCell component="th" scope="row">
                <h4>{stateData[row[0]]}</h4>
              </TableCell>
              <TableCell align="center">{row[1].total.confirmed}</TableCell>
              <TableCell align="center">{row[1].total.confirmed - (row[1].total.recovered + row[1].total.deceased)}</TableCell>
              <TableCell align="center">{row[1].total.recovered}</TableCell>
              <TableCell align="center">{row[1].total.deceased}</TableCell>
              <TableCell align="center">{row[1].total.vaccinated1}</TableCell>
              <TableCell align="center">{row[1].total.vaccinated2}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
