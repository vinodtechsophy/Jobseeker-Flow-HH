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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState, useRef, useEffect } from "react";
import { Typography, Button, Box, tooltipClasses, Tooltip, ClickAwayListener, } from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { preDuplicationCheck, fullDuplicationCheck, } from "../services/JobSeekerService";
var useStyles = makeStyles(function () { return ({
    buttonContainer: {
        "&.MuiButton-root": {
            minWidth: "2vw",
        },
    },
    arrow: {
        "&:before": {
            border: "1px solid #36454F",
            color: "#ffffff",
        },
    },
}); });
export var FirstNameInputBox = function (params) {
    var id = "cellNo".concat(params.rowIndex).concat(params.column.instanceId);
    var _a = useState(params.getValue()), firstName = _a[0], setFirstName = _a[1];
    var handleChange = function (event) {
        if (/^[A-Za-z\s]+$/.test(event.target.value) || event.target.value == "") {
            setFirstName(event.target.value);
            params.setValue(event.target.value);
        }
    };
    return (_jsx("div", { children: _jsx("input", { id: id, disabled: params.pdcDisabled, type: "text", onChange: handleChange, value: firstName, style: { width: "100%", border: "1px solid #DFE5FF" } }) }));
};
export var LastNameInputBox = function (params) {
    var id = "cellNo".concat(params.rowIndex).concat(params.column.instanceId);
    var _a = useState(params.getValue()), lastName = _a[0], setLastName = _a[1];
    var handleChange = function (event) {
        if (/^[A-Za-z\s]+$/.test(event.target.value) || event.target.value == "") {
            setLastName(event.target.value);
            params.setValue(event.target.value);
        }
    };
    return (_jsx("div", { children: _jsx("input", { id: id, disabled: params.pdcDisabled, type: "text", onChange: handleChange, value: lastName, style: { width: "100%", border: "1px solid #DFE5FF" } }) }));
};
export var MobileNumberInputBox = function (params) {
    var id = "cellNo".concat(params.rowIndex).concat(params.column.instanceId);
    var _a = useState(params.getValue()), mobileNumber = _a[0], setMobileNumber = _a[1];
    var handleChange = function (event) {
        if (/^\d{0,10}$/.test(event.target.value.trim())) {
            setMobileNumber(event.target.value);
            params.setValue(event.target.value);
        }
    };
    return (_jsx("div", { children: _jsx("input", { id: id, disabled: params.pdcDisabled, type: "text", onChange: handleChange, value: mobileNumber, style: { width: "100%", border: "1px solid #DFE5FF" } }) }));
};
export var EmailTextInput = function (params) {
    var id = "cellNo".concat(params.rowIndex).concat(params.column.instanceId);
    var _a = useState(params.getValue()), message = _a[0], setMessage = _a[1];
    var handleChange = function (event) {
        setMessage(event.target.value);
        params.setValue(event.target.value);
    };
    return (_jsx("div", { children: _jsx("input", { id: id, disabled: params.pdcDisabled, type: "email", onChange: handleChange, value: message, style: { width: "100%", border: "1px solid #DFE5FF" } }) }));
};
export var CustomDropDown = function (params) {
    var yes = {
        option: "yes",
        color: "#EF4444",
        title: "Error!",
        body: "The job seeker needs 6 month cooldown before it can be entered again.",
    };
    var no = {
        option: "no",
        color: "#22C55E",
        title: "",
        body: "",
    };
    var _a = useState({
        option: "",
        color: "",
        title: "",
        body: "",
    }), option = _a[0], setOption = _a[1];
    useEffect(function () {
        setOption(params.getValue() == "yes" ? yes : no);
    }, []);
    var id = "cellNo".concat(params.rowIndex).concat(params.column.instanceId);
    var iconId = "iconNo".concat(params.rowIndex).concat(params.column.instanceId);
    var _b = useState(params.getValue()), message = _b[0], setMessage = _b[1];
    var handleChange = function (event) {
        setMessage(event.target.value);
        params.setValue(event.target.value);
        if (event.target.value == "yes") {
            setOption(yes);
            setOpen(true);
            setTimeout(function () {
                setOpen(false);
            }, 4000);
        }
        else {
            setOption(no);
            setOpen(false);
            setTimeout(function () {
                setOpen(false);
            }, 4000);
        }
    };
    var classes = useStyles();
    var _c = React.useState(false), open = _c[0], setOpen = _c[1];
    var HtmlTooltip = styled(function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (_jsx(Tooltip, __assign({}, props, { placement: "right", arrow: true, classes: { popper: className, arrow: classes.arrow } })));
    })(function (_a) {
        var _b;
        var theme = _a.theme;
        return (_b = {},
            _b["& .".concat(tooltipClasses.tooltip)] = {
                backgroundColor: "#ffffff",
                border: "1px solid ".concat(option.color),
                maxWidth: 220,
                fontSize: theme.typography.pxToRem(12),
                borderRadius: "1vw",
            },
            _b);
    });
    var handleTooltipClose = function () {
        setOpen(false);
    };
    var handleTooltipOpen = function () {
        setOpen(true);
        setTimeout(function () {
            setOpen(false);
        }, 4000);
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", { children: _jsxs("select", __assign({ id: id, style: { border: "1px solid #DFE5FF" }, value: message, onChange: handleChange }, { children: [_jsx("option", __assign({ value: "no" }, { children: "No" })), _jsx("option", __assign({ value: "yes" }, { children: "Yes" }))] })) }), _jsx("div", __assign({ style: { display: "inline-flex", alignItems: "center" } }, { children: _jsx(ClickAwayListener, __assign({ onClickAway: handleTooltipClose }, { children: _jsx(HtmlTooltip
                    // PopperProps={{
                    //   disablePortal: true,
                    // }}
                    , __assign({ 
                        // PopperProps={{
                        //   disablePortal: true,
                        // }}
                        onClose: handleTooltipClose, open: open, disableFocusListener: true, disableHoverListener: true, disableTouchListener: true, title: _jsxs(React.Fragment, { children: [_jsx(Typography, __assign({ variant: "subtitle2" }, { children: _jsx("b", __assign({ style: { color: option.color } }, { children: option.title })) })), _jsx(Typography, __assign({ variant: "caption", color: "#626880" }, { children: option.body }))] }) }, { children: (function () {
                            if (option.option == "yes") {
                                return (_jsx(ReportGmailerrorredIcon, { id: iconId, sx: { color: option.color, fontSize: "20px" } }));
                            }
                            else {
                                return _jsx("div", {});
                            }
                        })() })) })) }))] }));
};
export var PDCStatusCheckButton = function (params) {
    var fail = {
        result: "Fail",
        color: "#EF4444",
        title: "Dublicate Found!",
        body: "The ownwership with sai anvesh Maruboyina for 30 days.",
    };
    var pass = {
        result: "Pass",
        color: "#22C55E",
        title: "Pre Dublication Check Pass, job Seeker Id Created! ",
        body: "Please Add DOB and PAN No. For full Dublication Check.",
    };
    var _a = useState({
        result: "",
        color: "",
        title: "",
        body: "",
    }), result = _a[0], setResult = _a[1];
    var classes = useStyles();
    var _b = React.useState(false), open = _b[0], setOpen = _b[1];
    var HtmlTooltip = styled(function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (_jsx(Tooltip, __assign({}, props, { placement: "right", arrow: true, classes: { popper: className, arrow: classes.arrow } })));
    })(function (_a) {
        var _b;
        var theme = _a.theme;
        return (_b = {},
            _b["& .".concat(tooltipClasses.tooltip)] = {
                backgroundColor: "#ffffff",
                border: "1px solid ".concat(result.color),
                maxWidth: 220,
                fontSize: theme.typography.pxToRem(12),
                borderRadius: "1vw",
            },
            _b);
    });
    var buttonId = "buttonNo".concat(params.rowIndex).concat(params.column.instanceId);
    var iconId = "iconNo".concat(params.rowIndex).concat(params.column.instanceId);
    var ref = useRef(null);
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var handleClick = function (event) {
        if (params.data.firstName.trim() == "" ||
            params.data.lastName.trim() == "" ||
            params.data.phoneNumber.trim() == "" ||
            params.data.email.trim() == "" ||
            params.data.interviewed.trim() == "") {
            alert("Enter All Details.");
            params.setValue([false, ""]);
        }
        else if (!/^[6-9]{1}[0-9]{9}$/.test(params.data.phoneNumber)) {
            alert("Invalid Phone Number.");
            params.setValue([false, ""]);
        }
        else if (!emailRegex.test(params.data.email)) {
            alert("Invalid Email.");
            params.setValue([false, ""]);
        }
        else {
            var bodyPayload = {
                referralCompanyId: "a2",
                contestId: "CONTEST_07_1091",
                emailId: params.data.email,
                mobileNumber: params.data.phoneNumber,
                firstName: params.data.firstName,
                lastName: params.data.lastName,
                interviewAttended: params.data.interviewed,
            };
            preDuplicationCheck(bodyPayload).then(function (response) {
                if ((response === null || response === void 0 ? void 0 : response.data.data.status) == "PDC_SUCCESS") {
                    setResult(pass);
                    setOpen(true);
                    setTimeout(function () {
                        setOpen(false);
                    }, 4000);
                    params.setValue([true, response === null || response === void 0 ? void 0 : response.data.data.profileLogId]);
                    localStorage.setItem("row".concat(params.rowIndex), JSON.stringify(params.data));
                }
                else {
                    setResult(fail);
                    setOpen(true);
                    setTimeout(function () {
                        setOpen(false);
                    }, 4000);
                    params.setValue([false, response === null || response === void 0 ? void 0 : response.data.data.profileLogId]);
                }
            });
        }
    };
    var handleTooltipClose = function () {
        setOpen(false);
    };
    var handleTooltipOpen = function () {
        setOpen(true);
        setTimeout(function () {
            setOpen(false);
        }, 4000);
    };
    useEffect(function () {
        if (params.getValue() == null) {
            setResult({
                result: "",
                color: "",
                title: "",
                body: "",
            });
        }
        else if (params.getValue()) {
            setResult(pass);
        }
        else if (!params.getValue() == false) {
            setResult(fail);
        }
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx(Button, __assign({ className: classes.buttonContainer, sx: {
                    display: "inline",
                }, variant: "contained", size: "small", onClick: handleClick }, { children: "Check" })), _jsx("div", __assign({ style: { color: result.color, display: "inline" } }, { children: result.result })), _jsx("div", __assign({ style: { display: "inline-flex", alignItems: "center" } }, { children: _jsx(ClickAwayListener, __assign({ onClickAway: handleTooltipClose }, { children: _jsx(HtmlTooltip, __assign({ onClose: handleTooltipClose, open: open, disableFocusListener: true, disableHoverListener: true, disableTouchListener: true, title: _jsxs(React.Fragment, { children: [_jsx(Typography, __assign({ variant: "subtitle2" }, { children: _jsx("b", __assign({ style: { color: result.color } }, { children: result.title })) })), _jsx(Typography, __assign({ variant: "caption", color: "#626880" }, { children: result.body }))] }) }, { children: (function () {
                            if (result.result == "Pass") {
                                return (_jsx(TaskAltIcon, { id: iconId, sx: { color: result.color, fontSize: "18px" } }));
                            }
                            else if (result.result == "Fail") {
                                return (_jsx(ReportGmailerrorredIcon, { id: iconId, sx: { color: result.color, fontSize: "20px" } }));
                            }
                            else {
                                return _jsx("div", {});
                            }
                        })() })) })) }))] }));
};
export var CustomDOBInputBox = function (params) {
    var _a = React.useState(params.getValue() == "" ? new Date() : params.getValue()), date = _a[0], setDate = _a[1];
    var handleChange = function (newValue) {
        setDate("".concat(newValue.$y, "/").concat(newValue.$M + 1, "/").concat(newValue.$D));
        params.setValue("".concat(newValue.$y, "/").concat(newValue.$M + 1, "/").concat(newValue.$D));
    };
    return (_jsx(LocalizationProvider, __assign({ dateAdapter: AdapterDayjs }, { children: _jsx(DatePicker, { label: "Custom input", views: ["year", "month", "day"], value: date, onChange: function (newValue) {
                handleChange(newValue);
            }, renderInput: function (_a) {
                var inputRef = _a.inputRef, inputProps = _a.inputProps, InputProps = _a.InputProps;
                return (_jsxs(Box, __assign({ sx: { display: "flex", alignItems: "center" } }, { children: [_jsx("input", __assign({ ref: inputRef }, inputProps, { style: {
                                // height: "2vw",
                                width: "90%",
                                border: "1px solid #DFE5FF",
                            } })), InputProps === null || InputProps === void 0 ? void 0 : InputProps.endAdornment] })));
            } }) })));
};
export var PanInputBox = function (params) {
    var id = "cellNo".concat(params.rowIndex).concat(params.column.instanceId);
    var _a = useState(params.getValue()), panNumber = _a[0], setPanNumber = _a[1];
    var handleChange = function (event) {
        if (event.target.value.trim().length <= 5) {
            setPanNumber(event.target.value);
            params.setValue(event.target.value);
        }
    };
    return (_jsx("div", { children: _jsx("input", { id: id, disabled: params.pdcDisabled, type: "text", onChange: handleChange, value: panNumber, style: { width: "100%", border: "1px solid #DFE5FF" } }) }));
};
export var FDCStatusCheckButton = function (params) {
    var fail = {
        result: "Fail",
        color: "#EF4444",
        title: "Dublicate Found!",
        body: "The ownwership with sai Anvesh Maruboyina for 30 days.",
    };
    var pass = {
        result: "Pass",
        color: "#22C55E",
        title: "Final Dublication Check Passed, ",
        body: "Press upload to start uploading the profile.",
    };
    var _a = useState({
        result: "",
        color: "",
        title: "",
        body: "",
    }), result = _a[0], setResult = _a[1];
    var classes = useStyles();
    var _b = React.useState(false), open = _b[0], setOpen = _b[1];
    var HtmlTooltip = styled(function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (_jsx(Tooltip, __assign({}, props, { placement: "right", arrow: true, classes: { popper: className, arrow: classes.arrow } })));
    })(function (_a) {
        var _b;
        var theme = _a.theme;
        return (_b = {},
            _b["& .".concat(tooltipClasses.tooltip)] = {
                backgroundColor: "#ffffff",
                border: "1px solid ".concat(result.color),
                maxWidth: 220,
                fontSize: theme.typography.pxToRem(12),
                borderRadius: "1vw",
            },
            _b);
    });
    var buttonId = "buttonNo".concat(params.rowIndex).concat(params.column.instanceId);
    var iconId = "iconNo".concat(params.rowIndex).concat(params.column.instanceId);
    var ref = useRef(null);
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var handleClick = function (event) {
        if (params.data.firstName.trim() == "" ||
            params.data.lastName.trim() == "" ||
            params.data.phoneNumber.trim() == "" ||
            params.data.email.trim() == "" ||
            params.data.interviewed.trim() == "") {
            alert("Enter All Details.");
            params.setValue(false);
        }
        // else if (params.data.dob.trim() == "") {
        //   alert("Please enter date of birth.");
        // }
        else if (!/^[A-Za-z\s]+$/.test(params.data.firstName)) {
            alert("Only alphabet can be entered in first name.");
            params.setValue(false);
        }
        else if (!/^[A-Za-z\s]+$/.test(params.data.lastName)) {
            alert("Only alphabet can be entered in last name.");
            params.setValue(false);
        }
        else if (!/^[6-9]{1}[0-9]{9}$/.test(params.data.phoneNumber)) {
            alert("Invalid Phone Number.");
            params.setValue(false);
        }
        else if (!emailRegex.test(params.data.email)) {
            alert("Invalid Email.");
            params.setValue(false);
        }
        else if (params.data.lastFiveDigitOfPan.trim().length != 5) {
            alert("Please enter last five digits of PAN.");
            params.setValue(false);
        }
        else {
            fullDuplicationCheck(params.data.profileLogId, params.data.lastFiveDigitOfPan, params.data.dob).then(function (response) {
                if ((response === null || response === void 0 ? void 0 : response.data.data.status) == "FDC_SUCCESS") {
                    setResult(pass);
                    setOpen(true);
                    setTimeout(function () {
                        setOpen(false);
                    }, 4000);
                    params.setValue(true);
                    localStorage.setItem("row".concat(params.rowIndex), JSON.stringify(params.data));
                }
                else {
                    setResult(fail);
                    setOpen(true);
                    setTimeout(function () {
                        setOpen(false);
                    }, 4000);
                    params.setValue(false);
                }
            });
        }
    };
    var handleTooltipClose = function () {
        setOpen(false);
    };
    var handleTooltipOpen = function () {
        setOpen(true);
        setTimeout(function () {
            setOpen(false);
        }, 4000);
    };
    useEffect(function () {
        if (params.getValue() == null) {
            setResult({
                result: "",
                color: "",
                title: "",
                body: "",
            });
        }
        else if (params.getValue()) {
            setResult(pass);
        }
        else if (!params.getValue() == false) {
            setResult(fail);
        }
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx(Button, __assign({ className: classes.buttonContainer, sx: {
                    display: "inline",
                }, variant: "contained", size: "small", onClick: handleClick }, { children: "Check" })), _jsx("div", __assign({ style: { color: result.color, display: "inline" } }, { children: result.result })), _jsx("div", __assign({ style: { display: "inline-flex", alignItems: "center" } }, { children: _jsx(ClickAwayListener, __assign({ onClickAway: handleTooltipClose }, { children: _jsx(HtmlTooltip
                    // PopperProps={{
                    //   disablePortal: true,
                    // }}
                    , __assign({ 
                        // PopperProps={{
                        //   disablePortal: true,
                        // }}
                        onClose: handleTooltipClose, open: open, disableFocusListener: true, disableHoverListener: true, disableTouchListener: true, title: _jsxs(React.Fragment, { children: [_jsx(Typography, __assign({ variant: "subtitle2" }, { children: _jsx("b", __assign({ style: { color: result.color } }, { children: result.title })) })), _jsx(Typography, __assign({ variant: "caption", color: "#626880" }, { children: result.body }))] }) }, { children: (function () {
                            if (result.result == "Pass") {
                                return (_jsx(TaskAltIcon, { id: iconId, sx: { color: result.color, fontSize: "18px" } }));
                            }
                            else if (result.result == "Fail") {
                                return (_jsx(ReportGmailerrorredIcon, { id: iconId, sx: { color: result.color, fontSize: "18px" } }));
                            }
                            else {
                                return _jsx("div", {});
                            }
                        })() })) })) }))] }));
};
export var CustomUploadButton = function (params) {
    var classes = useStyles();
    var navigateUpload = function () { };
    return (_jsx("div", __assign({ style: {
            textAlign: "center",
        } }, { children: _jsx(Button, __assign({ className: classes.buttonContainer, variant: "contained", size: "small", onClick: navigateUpload }, { children: "Upload" })) })));
};
var ManualDataInputTableElement = function () {
    return _jsx("div", { children: "ManualDataInputTableElement" });
};
export default ManualDataInputTableElement;
