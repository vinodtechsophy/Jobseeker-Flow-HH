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
                    position: "static",
                    display: "inline-grid",
                    borderWidth: "2px",
                } }, { children: [_jsx("div", __assign({ style: {
                            display: "block",
                            height: "49%",
                        } }, { children: _jsx("img", { src: "assets/images/".concat(props.fileName), width: "40%", height: "120%" }) })), _jsx("div", __assign({ style: {
                            display: "block",
                            height: "49%",
                        } }, { children: _jsx(Typography, __assign({ variant: "caption", display: "block", gutterBottom: true, fontSize: ".8vw" }, { children: props.title })) }))] })) })) }));
};
export default JobSeekerTempleteButton;
