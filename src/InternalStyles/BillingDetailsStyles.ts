import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { createTheme } from '@mui/material/styles';
import {
  FULL_WIDTH_PERCENT
} from './CommonStyleVariables';

export const formLabelsTheme = createTheme({
    components: {
      MuiFormLabel: {
        styleOverrides: {
          asterisk: {
            color: "#db3131",
            "&$error": {
              color: "#db3131",
            },
          },
        },
      },
    },
});
  
export const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    boxShadow: "none",
    marginBottom: 30,
}));
  
export const useStyles: any = makeStyles(() => ({
    inputField: {
      height: 42,
      width: FULL_WIDTH_PERCENT,
      [`& fieldset`]: {
        borderRadius: 12,
      },
    },
}));