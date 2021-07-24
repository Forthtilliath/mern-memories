import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    // color: '#0000 !important',
    // '&::before': {
    //   content: '"Attach your photo: "',
    //   color: 'grey',
    //   height: 60,
    //   marginTop: -60
    // }
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));