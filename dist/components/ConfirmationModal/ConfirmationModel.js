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
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, IconButton, Button, } from "@mui/material";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { makeStyles } from "@mui/styles";
import { CONFIRMATION_BOX_BUTTON } from "../../constants";
import { CLOSE_RED, MAIN_BLUE, BORDER_RED, WHITE_TEXT, DARK_BLUE, COOL_RED } from "../../color";
var useStyles = makeStyles(function () { return ({
    confirmationButton: {
        "&.MuiButton-outlined": {
            color: MAIN_BLUE,
            borderColor: MAIN_BLUE,
            textTransform: "none",
            borderRadius: "1vw",
            fontWeight: "500",
            width: "8vw",
        },
    },
    cancelButton: {
        "&.MuiButton-outlined": {
            color: COOL_RED,
            borderColor: COOL_RED,
            textTransform: "none",
            borderRadius: "1vw",
            fontWeight: "500",
            width: "8vw",
        },
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingBottom: "2.5vh",
    },
    titleContainer: {
        backgroundColor: MAIN_BLUE,
        color: WHITE_TEXT,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "1.5vh",
        paddingBottom: "1.5vh",
    },
    titleText: {
        justifyContent: "center",
        display: "flex",
        fontWeight: "700",
    },
    titleIconButton: {
        display: "inline",
        color: CLOSE_RED,
        borderColor: BORDER_RED,
        position: "absolute",
        alignItems: "center",
        right: "0px",
    },
    messageContainer: {
        color: DARK_BLUE,
        padding: "3vh 4vw 3vh 4vw ",
    },
    messageText: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2.5vh",
    },
}); });
var ConfirmationModel = function (props) {
    var _a = props.dialogAction, isOpen = _a.isOpen, title = _a.title, message = _a.message;
    var classes = useStyles();
    var handleClose = function () {
        props.setDialogAction({
            isOpen: false,
            title: '',
            message: ''
        });
    };
    return (_jsx(_Fragment, { children: _jsxs(Dialog, __assign({ open: isOpen, onClose: handleClose }, { children: [_jsxs(DialogTitle, __assign({ className: classes.titleContainer }, { children: [_jsx(Typography, __assign({ variant: "h6", className: classes.titleText }, { children: title })), _jsx(IconButton, __assign({ className: classes.titleIconButton, onClick: function () { return handleClose(); } }, { children: _jsx(CancelRoundedIcon, {}) }))] })), _jsx(DialogContent, __assign({ className: classes.messageContainer }, { children: _jsx(Typography, __assign({ variant: "subtitle2", className: classes.messageText }, { children: message })) })), _jsxs(DialogActions, __assign({ className: classes.buttonContainer }, { children: [_jsx(Button, __assign({ variant: "outlined", className: classes.cancelButton, onClick: function () { return props.buttonLeftFunction(); } }, { children: CONFIRMATION_BOX_BUTTON[1] })), _jsx(Button, __assign({ variant: "outlined", className: classes.confirmationButton, onClick: function () { return props.buttonRightFunction(); } }, { children: CONFIRMATION_BOX_BUTTON[0] }))] }))] })) }));
};
export default ConfirmationModel;
