import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {
    PRIMARY_THEME_COLOR, FULL_WIDTH_PERCENT
} from './CommonStyleVariables';

export const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    boxShadow: 'none',
    marginBottom: 16,
    paddingTop: 0,
    paddingBotom: 0
  }));
  
export const ButtonItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    boxShadow: 'none',
    marginBottom: 0
}));
  
export const useStyles = makeStyles(() => ({
inputField: {
    width: FULL_WIDTH_PERCENT,
    [`& fieldset`]: {
            borderRadius: 12
    },
},
limitWidth: {
    width: 402,
},
Heading: {
    height: "22px",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "22px",
    color: "#30374C",
    textAlign: "left",
    marginBottom: 16,
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
Radio: {
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: 400,
    color: "#30374C",
}
}));
  
export const customStyles = {
    menu: (provided: any, state: any) => ({
    ...provided,
    zIndex: 100
    }),

    control: (base: any) => ({
        ...base,
        height: 54,
        minHeight: 54,
        borderRadius: 12,
        marginTop: '42px',
    }),

    singleValue: (provided: any, state: any) => {
    return { ...provided };
    },

    placeholder: (base: any) => ({
        ...base,
        height: 16,
        textOverflow: 'ellipsis'
    })
};