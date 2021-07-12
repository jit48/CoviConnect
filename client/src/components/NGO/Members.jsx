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

const Members = (props) => {
    var rows = []
    const {members} = props;
    rows=members;

  const classes = useStyles();
    
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell><h3>Name</h3></TableCell>
            <TableCell align="center"><h3>Gender</h3></TableCell>
            <TableCell align="center"><h3>Contact</h3></TableCell>
            <TableCell align="center"><h3>Email</h3></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {members.map((member) => (
             <TableRow key={member._id} className={classes.tableRow}>
               <TableCell component="th" scope="row">
                 <h4>{member.name}</h4>
               </TableCell>
               <TableCell align="center">{member.gender}</TableCell>
               <TableCell align="center">{member.contact}</TableCell>
               <TableCell align="center">{member.email}</TableCell>
             </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Members;