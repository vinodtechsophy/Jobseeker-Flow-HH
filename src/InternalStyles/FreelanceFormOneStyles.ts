import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { createTheme } from '@mui/material/styles';
import {
  PRIMARY_THEME_COLOR, FULL_WIDTH_PERCENT
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
    marginBottom: 8,
}));
  
export const useStyles = makeStyles(() => ({
    inputField: {
        width: FULL_WIDTH_PERCENT,
       [`& fieldset`]: {
             borderRadius: 12
       },
    },
    uploadLogoText: {
      width: "96px",
  
      fontFamily: "Nunito",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "22px",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      color: "#A4A4A4",
    },
    browseFiles: {
      width: "228px",
      height: "22px",
      fontFamily: "Nunito",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "22px",
      color: PRIMARY_THEME_COLOR,
    },
    limitWidth: {
      width: 402,
    },
}));