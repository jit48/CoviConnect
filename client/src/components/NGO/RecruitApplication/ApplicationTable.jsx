import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Button from '../../Button/Button';
import api from '../../../axios';
import {useAuth} from '../../../contexts/AuthContext'


const ApplicationTable = (props) => {
  const {user: {user, token}} = useAuth()

  const [applications, setApplications ] = React.useState(props.applications)

    const columns = [
        { id: 'name', label: 'Name', minWidth: 170 },
        { id: 'gender', label: 'Gender', minWidth: 100 },
        {
          id: 'contact',
          label: 'Contact',
          minWidth: 170,
          align: 'right',
          // format: (value) => value.toLocaleString('en-US'),
        },
        {
          id: 'email',
          label: 'Email',
          minWidth: 170,
          align: 'right',
          //format: (value) => value.toLocaleString('en-US'),
        },
        {
          id: 'occupation',
          label: 'Occupation',
          minWidth: 170,
          align: 'right',
        //   format: (value) => value.toFixed(2),
        },
        {
            format: 'button',
            id: 'hirebtn',
            minWidth: 170,
            align: 'right',
        },
        {   
            format: 'button',
            id: 'deletebtn',
            minWidth: 170,
            align: 'right',
          //   format: (value) => value.toFixed(2),
        },

      ];


      const rows = [];
      applications.map((application)=>(
        rows.push(application)
      ))
      
      const useStyles = makeStyles({
        root: {
          width: '100%',
        },
        container: {
          maxHeight: 440,
        },
      });

        const classes = useStyles();
        const [page, setPage] = React.useState(0);
        const [rowsPerPage, setRowsPerPage] = React.useState(10);
        
      
        const handleChangePage = (event, newPage) => {
          setPage(newPage);
        };
      
        const handleChangeRowsPerPage = (event) => {
          setRowsPerPage(+event.target.value);
          setPage(0);
        };

        const handleHire = async (row) => {
          const res = await api.post(`ngo/recruit/hire/${row._id}/${props.recruitmentId}`, row, {headers : {'x-auth-token': token}})
            .then((res)=>res.data)
            setApplications(res)
        }
        
        const handleDelete = async (row) => {
            const res = await api.post(`ngo/recruit/delete/${row._id}/${props.recruitmentId}`, row, {headers : {'x-auth-token': token}})
            .then((res)=>res.data)
            setApplications(res)
        }

        const getApplications = async () => {
          const rData = await api.get(`/ngo/getAllRecruitments/${user._id}`)
            .then((res)=>res.data)

            console.log("rData:", rData)
            console.log("application state:", applications)

          const rows = [];
          rData.forEach((recruitment)=>{
            recruitment.applications.forEach((application)=>{
              rows.push(application)
            })
          })
            console.log("rows:", rows)

          if (rows.length !== applications.length) {
            setApplications(rows);
          }
        }

        useEffect(()=>{
          getApplications()
          // eslint-disable-next-line react-hooks/exhaustive-deps
        },[applications])

        return (
          <Paper className={classes.root}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format==='button' && column.id==='hirebtn' ? <Button variant='primary' onClick={()=>handleHire(row)}>Hire</Button> 
                              : column.id==='deletebtn' ? <Button variant='secondary' onClick={()=>handleDelete(row)}>Reject</Button> : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        );
}


export default ApplicationTable