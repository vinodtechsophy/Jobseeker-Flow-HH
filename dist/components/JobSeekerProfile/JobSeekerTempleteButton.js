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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography, Button } from "@mui/material";
var theme = createTheme({
    palette: {
        primary: {
            main: "#4D6CD9",
        },
    },
});
var JobSeekerTempleteButton = function (props) {
    return (_jsx(_Fragment, { children: _jsx(ThemeProvider, __assign({ theme: theme }, { children: _jsxs(Button, __assign({ variant: "outlined", color: "primary", sx: {
                    padding: "0",
                    margin: "2vw",
                    width: "9vw",
                    height: "9vw",
                    display: "inline-flex",
                    flexDirection: "column",
                    borderWidth: "2px",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "1vw",
                } }, { children: [_jsx("div", __assign({ style: {
                            display: "block",
                            height: "45%",
                            padding: "10%",
                            width: "100%",
                        } }, { children: _jsx(props.fileName, { sx: { fontSize: "2.5rem" } }) })), _jsx("hr", { style: {
                            display: "block",
                            width: "1vw",
                            margin: "auto 0px",
                            padding: "0",
                            border: "1px solid #4D6CD9",
                            alignItems: "center",
                        } }), _jsx("div", __assign({ style: {
                            display: "block",
                            height: "45%",
                        } }, { children: _jsx(Typography, __assign({ variant: "caption", display: "block", gutterBottom: true, fontSize: ".8vw" }, { children: props.title })) }))] })) })) }));
};
export default JobSeekerTempleteButton;
