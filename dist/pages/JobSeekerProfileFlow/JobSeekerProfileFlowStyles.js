var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { createTheme } from '@mui/material/styles';
import { Container } from "@mui/material";
export var formLabelsTheme = createTheme({
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
export var Item = styled(Paper)(function (_a) {
    var theme = _a.theme;
    return (__assign(__assign({ backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff" }, theme.typography.body2), { padding: theme.spacing(1), color: theme.palette.text.secondary, boxShadow: "none", marginBottom: 30 }));
});
export var StyledContainer = styled(Container)(function (_a) {
    var theme = _a.theme;
    return (__assign(__assign({ backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff" }, theme.typography.body2), { padding: theme.spacing(1), color: theme.palette.text.secondary, boxShadow: "none" }));
});
export var useStyles = makeStyles(function () {
    var _a, _b;
    return ({
        inputField: (_a = {},
            _a["& fieldset"] = {
                borderRadius: 12,
                height: 45,
                width: '100%'
            },
            _a),
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
        boxInputField: (_b = {
                width: '80%'
            },
            _b["& fieldset"] = {
                borderRadius: 12,
                height: 45,
                width: '95%'
            },
            _b)
    });
});
