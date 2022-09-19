import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    marginBottom: theme.spacing(3),
    color: theme.palette.text.secondary,
    boxShadow: 'none'
  }));
  
export const useStyles = makeStyles(() => ({
    inputField: {
        height: 42,
       [`& fieldset`]: {
             borderRadius: 12
       },
    },
  }));