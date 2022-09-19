import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { createTheme } from '@mui/material/styles';
import { Container } from "@mui/material";

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

export const StyledContainer = styled(Container)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    boxShadow: "none",
}));

export const useStyles = makeStyles(() => ({
    inputField: {
      [`& fieldset`]: {
        borderRadius: 12,
        height: 45
      },
    },
    Heading: {
      height: "44px",
      fontFamily: "Nunito",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "22px",
      color: "#30374C",
      textAlign: "left",
      marginBottom: 30,
      marginTop: 40,
    },
    displayFlex: {
      display: "flex",
    },
    mr2: {
      marginRight: 12,
    },
    Heading2: {
      width: "280px",
      height: "30px",
      fontFamily: "Nunito",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: " 30px",
      color: "#30374C"
    },
    Radio: {
      fontFamily: "Nunito",
      fontStyle: "normal",
      fontWeight: 400,
      color: "#30374C",
    },
    Options: {
      borderRadius: "12px",
      border: "1.5px solid #AAB0CB",
      width: "191px",
      height: "42px",
      color: "var(--light-title)",
    },
    horizontal: {
      width: "407px",
      fontFamily: "Nunito",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: " 16px",
      lineHeight: "22px",
    },
    limitWidth: {
      width: 402,
    },
    muiGrid: {
      paddingLeft: '24px !important',
    },
    muiContainer: {
      paddingLeft: '0px !important'
    },
    boxInputField: {
      [`& fieldset`]: {
        borderRadius: 12,
        height: 45,
        width: '125%'
      },
    }
}));