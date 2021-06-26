import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Snackbars(props) {
    const {showSnackBar,handleSnackBarCLose} = props
  const classes = useStyles();
  const [open, setOpen] = React.useState(showSnackBar);
console.log(showSnackBar)
//   const handleOpen = () => {
//     setOpen(true);
//     setTimeout(handleClose,3000);
//   };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    handleSnackBarCLose();
  };

  return (
    <div className={classes.root}>
      {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          votes cannot go under ZERO!
        </Alert>
      </Snackbar>
      {/* <Alert severity="error">This is an error message!</Alert> */}
    </div>
  );
}
