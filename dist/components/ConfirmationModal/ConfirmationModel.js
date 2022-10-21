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
import { ADD_PROFILE_CONFIRMATION_BOX_BUTTON } from "../../constants";
import { CLOSE_RED, MAIN_BLUE, DARK_BLUE, } from "../../color";
var useStyles = makeStyles(function () { return ({
    confirmationButton: {
        "&.MuiButton-contained": {
            backGroundColor: MAIN_BLUE,
            borderColor: MAIN_BLUE,
            textTransform: "none",
            borderRadius: ".5vw",
            fontWeight: "500",
        },
    },
    cancelButton: {
        "&.MuiButton-outlined": {
            color: MAIN_BLUE,
            borderColor: MAIN_BLUE,
            textTransform: "none",
            borderRadius: ".5vw",
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
        // backgroundColor: MAIN_BLUE,
        // color: WHITE_TEXT,
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
        padding: "1vw",
    },
    titleIconButton: {
        "&.MuiIconButton-root": {
            // display: "inline",
            color: CLOSE_RED,
            // borderColor: BORDER_RED,
            // backGroundColor: "red",
            position: "absolute",
            alignItems: "center",
            right: "1px",
            top: "1px",
        },
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
        textAlign: "center",
        color: "#626880",
    },
}); });
var ConfirmationModel = function (props) {
    var _a = props.dialogAction, isOpen = _a.isOpen, title = _a.title, mainMessage = _a.mainMessage, bottomMessage = _a.bottomMessage;
    var classes = useStyles();
    var handleClose = function () {
        props.setDialogAction({
            isOpen: false,
            title: "",
            mainMessage: "",
            bottomMessage: "",
        });
    };
    return (_jsx(_Fragment, { children: _jsxs(Dialog, __assign({ open: isOpen, onClose: handleClose }, { children: [_jsx(DialogTitle, __assign({ className: classes.titleContainer }, { children: _jsx(Typography, __assign({ variant: "h5", className: classes.titleText }, { children: title })) })), _jsx(IconButton, __assign({ className: classes.titleIconButton, onClick: function () { return handleClose(); } }, { children: _jsx(CancelRoundedIcon, {}) })), _jsx(DialogContent, __assign({ className: classes.messageContainer }, { children: _jsx(Typography, __assign({ variant: "body1", className: classes.messageText }, { children: mainMessage })) })), _jsx(DialogActions, __assign({ className: classes.buttonContainer }, { children: _jsxs("div", __assign({ style: {
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-evenly",
                        } }, { children: [_jsx(Button, __assign({ variant: "outlined", className: classes.cancelButton, onClick: function () { return props.buttonLeftFunction(); } }, { children: ADD_PROFILE_CONFIRMATION_BOX_BUTTON[0] })), _jsx(Button, __assign({ variant: "contained", className: classes.confirmationButton, onClick: function () { return props.buttonRightFunction(); } }, { children: ADD_PROFILE_CONFIRMATION_BOX_BUTTON[1] }))] })) })), _jsx(DialogContent, __assign({ className: classes.messageContainer }, { children: _jsx(Typography, __assign({ variant: "body1", className: classes.messageText }, { children: bottomMessage })) }))] })) }));
};
export default ConfirmationModel;
