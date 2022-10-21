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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
import { Typography, Button, Box, tooltipClasses, Tooltip, ClickAwayListener, IconButton, } from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { preDuplicationCheck, fullDuplicationCheck, } from "../services/JobSeekerService";
import moment from "moment";
import { useAppDispatch } from "../services/StoreHooks";
import { DUPLICATION_PASS, DUPLICATION_FAIL } from "../constants";
import DeleteIcon from "@mui/icons-material/Delete";
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
    var id = "cell-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var elementName = "".concat(params.colDef.field, "-").concat(params.rowIndex, "-").concat(params.column.instanceId);
    var containerId = "container-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var _a = useState(params.getValue()), firstName = _a[0], setFirstName = _a[1];
    useEffect(function () {
        if (params.getValue().trim() == "")
            setFirstName(params.getValue());
    }, [params.getValue()]);
    var handleChange = function (event) {
        if (/^[A-Za-z\s]+$/.test(event.target.value) || event.target.value == "") {
            setFirstName(event.target.value);
            params.setValue(event.target.value);
        }
    };
    return (_jsx("div", __assign({ id: containerId }, { children: _jsx("input", { id: id, name: elementName, disabled: params.pdcDisabled, type: "text", onChange: handleChange, value: firstName, style: { width: "100%", border: "1px solid #DFE5FF" } }) })));
};
export var LastNameInputBox = function (params) {
    var id = "cell-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var elementName = "".concat(params.colDef.field, "-").concat(params.rowIndex, "-").concat(params.column.instanceId);
    var containerId = "container-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var _a = useState(params.getValue()), lastName = _a[0], setLastName = _a[1];
    var handleChange = function (event) {
        if (/^[A-Za-z\s]+$/.test(event.target.value) || event.target.value == "") {
            setLastName(event.target.value);
            params.setValue(event.target.value);
        }
    };
    useEffect(function () {
        if (params.getValue().trim() == "")
            setLastName(params.getValue());
    }, [params.getValue()]);
    return (_jsx("div", __assign({ id: containerId }, { children: _jsx("input", { id: id, name: elementName, disabled: params.pdcDisabled, type: "text", onChange: handleChange, value: lastName, style: { width: "100%", border: "1px solid #DFE5FF" } }) })));
};
export var MobileNumberInputBox = function (params) {
    var id = "cell-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var elementName = "".concat(params.colDef.field, "-").concat(params.rowIndex, "-").concat(params.column.instanceId);
    var containerId = "container-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var _a = useState(params.getValue()), mobileNumber = _a[0], setMobileNumber = _a[1];
    var handleChange = function (event) {
        if (/^\d{0,10}$/.test(event.target.value.trim())) {
            setMobileNumber(event.target.value);
            params.setValue(event.target.value);
        }
    };
    useEffect(function () {
        if (params.getValue().trim() == "")
            setMobileNumber(params.getValue());
    }, [params.getValue()]);
    return (_jsx("div", __assign({ id: containerId }, { children: _jsx("input", { id: id, name: elementName, disabled: params.pdcDisabled, type: "text", onChange: handleChange, value: mobileNumber, style: { width: "100%", border: "1px solid #DFE5FF" } }) })));
};
export var EmailTextInput = function (params) {
    var id = "cell-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var elementName = "".concat(params.colDef.field, "-").concat(params.rowIndex, "-").concat(params.column.instanceId);
    var containerId = "container-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var _a = useState(params.getValue()), email = _a[0], setEmail = _a[1];
    var handleChange = function (event) {
        setEmail(event.target.value);
        params.setValue(event.target.value);
    };
    useEffect(function () {
        if (params.getValue().trim() == "")
            setEmail(params.getValue());
    }, [params.getValue()]);
    return (_jsx("div", __assign({ id: containerId }, { children: _jsx("input", { id: id, name: elementName, disabled: params.pdcDisabled, type: "email", onChange: handleChange, value: email, style: { width: "100%", border: "1px solid #DFE5FF" } }) })));
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
    var id = "cell-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var elementName = "".concat(params.colDef.field, "-").concat(params.rowIndex, "-").concat(params.column.instanceId);
    var containerId = "container-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var iconId = "icon-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var _b = useState(params.getValue()), isInterviewed = _b[0], setIsInterviewed = _b[1];
    var handleChange = function (event) {
        setIsInterviewed(event.target.value);
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
    useEffect(function () {
        if (params.getValue() == "no") {
            setOption(no);
            setOpen(false);
            setIsInterviewed(params.getValue());
        }
    }, [params.getValue()]);
    return (_jsxs(_Fragment, { children: [_jsx("div", __assign({ id: containerId }, { children: _jsxs("select", __assign({ id: id, name: elementName, style: { border: "1px solid #DFE5FF" }, value: isInterviewed, onChange: handleChange }, { children: [_jsx("option", __assign({ value: "no" }, { children: "No" })), _jsx("option", __assign({ value: "yes" }, { children: "Yes" }))] })) })), _jsx("div", __assign({ style: { display: "inline-flex", alignItems: "center" } }, { children: _jsx(ClickAwayListener, __assign({ onClickAway: handleTooltipClose }, { children: _jsx(HtmlTooltip
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
    var dispatch = useAppDispatch();
    var fail = {
        result: "Fail",
        color: "#EF4444",
        title: "Dublicate Found!",
        body: "",
    };
    var pass = {
        result: "Pass",
        color: "#22C55E",
        title: "Pre Duplication Check Pass, job Seeker Id Created! ",
        body: "",
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
    var id = "cell-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var elementName = "".concat(params.colDef.field, "-").concat(params.rowIndex, "-").concat(params.column.instanceId);
    var containerId = "container-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var iconId = "icon-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var dispatchNotificationData = function (notifyData) {
        dispatch({
            type: "SEND_ALERT",
            data: {
                enable: notifyData.enable,
                type: notifyData.type,
                message: notifyData.message,
                duration: notifyData.duration,
            },
        });
    };
    var ref = useRef(null);
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var handleClick = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var bodyPayload, response;
        var _a, _b, _c, _d, _e, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    if (!(params.data.firstName.trim() == "" ||
                        params.data.lastName.trim() == "" ||
                        params.data.phoneNumber.trim() == "" ||
                        params.data.email.trim() == "" ||
                        params.data.interviewed.trim() == "")) return [3 /*break*/, 1];
                    dispatchNotificationData({
                        enable: true,
                        type: "warning",
                        message: "Enter All Details.",
                        duration: 2000,
                    });
                    console.log("Enter All Details.");
                    params.setValue([false, ""]);
                    return [3 /*break*/, 5];
                case 1:
                    if (!!/^[6-9]{1}[0-9]{9}$/.test(params.data.phoneNumber)) return [3 /*break*/, 2];
                    dispatchNotificationData({
                        enable: true,
                        type: "warning",
                        message: "Invalid Phone Number.",
                        duration: 2000,
                    });
                    console.log("Invalid Phone Number.");
                    params.setValue([false, ""]);
                    return [3 /*break*/, 5];
                case 2:
                    if (!!emailRegex.test(params.data.email)) return [3 /*break*/, 3];
                    dispatchNotificationData({
                        enable: true,
                        type: "warning",
                        message: "Invalid Email.",
                        duration: 2000,
                    });
                    console.log("Invalid Email.");
                    params.setValue([false, ""]);
                    return [3 /*break*/, 5];
                case 3:
                    bodyPayload = {
                        referralCompanyId: "a2",
                        contestId: params.data.contestId,
                        emailId: params.data.email,
                        mobileNumber: params.data.phoneNumber,
                        firstName: params.data.firstName,
                        lastName: params.data.lastName,
                        interviewAttended: params.data.interviewed,
                    };
                    return [4 /*yield*/, preDuplicationCheck(bodyPayload)];
                case 4:
                    response = _g.sent();
                    if ((response === null || response === void 0 ? void 0 : response.status) === 200) {
                        if ((response === null || response === void 0 ? void 0 : response.data.data.status) == "PDC_SUCCESS") {
                            setResult(__assign(__assign({}, DUPLICATION_PASS), { title: "Pre Duplication Check Pass, job Seeker Id Created! ", body: response === null || response === void 0 ? void 0 : response.data.message }));
                            params.setValue([true, response === null || response === void 0 ? void 0 : response.data.data.profileLogId]);
                            sessionStorage.setItem("row".concat(params.rowIndex), JSON.stringify(params.data));
                            setOpen(true);
                            setTimeout(function () {
                                setOpen(false);
                            }, 4000);
                        }
                        else {
                            setResult(__assign(__assign({}, DUPLICATION_FAIL), { title: "Duplicate Found!", body: response === null || response === void 0 ? void 0 : response.data.message }));
                            params.setValue([false, response === null || response === void 0 ? void 0 : response.data.data.profileLogId]);
                            setOpen(true);
                            setTimeout(function () {
                                setOpen(false);
                            }, 4000);
                        }
                    }
                    else if (((_a = response === null || response === void 0 ? void 0 : response.response) === null || _a === void 0 ? void 0 : _a.status) === 500) {
                        setResult(__assign(__assign({}, DUPLICATION_FAIL), { title: "Duplicate Found!", body: "500 ".concat((_c = (_b = response === null || response === void 0 ? void 0 : response.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.error, " ").concat((_e = (_d = response === null || response === void 0 ? void 0 : response.response) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.message) }));
                        setOpen(true);
                        setTimeout(function () {
                            setOpen(false);
                        }, 4000);
                        params.setValue(false);
                    }
                    else {
                        setResult(__assign(__assign({}, DUPLICATION_FAIL), { title: "Duplicate Found!", body: (_f = response === null || response === void 0 ? void 0 : response.response) === null || _f === void 0 ? void 0 : _f.data.message }));
                        setOpen(true);
                        setTimeout(function () {
                            setOpen(false);
                        }, 4000);
                        params.setValue(false);
                    }
                    _g.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    }); };
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
            setResult(__assign(__assign({}, DUPLICATION_PASS), { title: "Pre Duplication Check Pass, job Seeker Id Created!" }));
        }
        else if (!params.getValue() == false) {
            setResult(__assign(__assign({}, DUPLICATION_FAIL), { title: "Dublicate Found!" }));
        }
    }, []);
    useEffect(function () {
        if (params.getValue() === "0") {
            setResult({
                result: "",
                color: "",
                title: "",
                body: "",
            });
            setOpen(false);
        }
    }, [params.getValue()]);
    return (_jsxs(_Fragment, { children: [_jsx(Button, __assign({ id: id, name: elementName, className: classes.buttonContainer, sx: {
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
    var _a = React.useState(params.getValue()
    // params.getValue() == ""
    //   ? new Date(new Date().setFullYear(new Date().getFullYear() - 18))
    //   : params.getValue()
    ), date = _a[0], setDate = _a[1];
    var _b = useState(false), isDisable = _b[0], setIsDisable = _b[1];
    var id = "cell-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var elementName = "".concat(params.colDef.field, "-").concat(params.rowIndex, "-").concat(params.column.instanceId);
    var containerId = "container-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var handleChange = function (newValue) {
        if (newValue != null) {
            var dd = ("0" + newValue.$D).slice(-2);
            var mm = ("0" + (newValue.$M + 1)).slice(-2);
            var yy = newValue.$y;
            // Date picker is handling the date in MM/DD/YYYY format
            setDate("".concat(mm, "/").concat(dd, "/").concat(yy));
            params.setValue("".concat(dd, "/").concat(mm, "/").concat(yy));
        }
    };
    useEffect(function () {
        setIsDisable(!params.data.pdcStatus);
    }, [params.data.pdcStatus]);
    return (_jsx(LocalizationProvider, __assign({ dateAdapter: AdapterDayjs }, { children: _jsx(DatePicker, { label: "Custom input", views: ["year", "month", "day"], disabled: isDisable, value: date, inputFormat: "DD/MM/YYYY", onChange: function (newValue) {
                handleChange(newValue);
            }, maxDate: moment().subtract(18, "year"), renderInput: function (_a) {
                var inputRef = _a.inputRef, inputProps = _a.inputProps, InputProps = _a.InputProps;
                return (_jsxs(Box, __assign({ sx: { display: "flex", alignItems: "center" } }, { children: [_jsx("input", __assign({ id: id, name: elementName, ref: inputRef }, inputProps, { style: {
                                // height: "2vw",
                                width: "90%",
                                border: "1px solid #DFE5FF",
                            } })), InputProps === null || InputProps === void 0 ? void 0 : InputProps.endAdornment] })));
            } }) })));
};
export var PanInputBox = function (params) {
    var id = "cell-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var elementName = "".concat(params.colDef.field, "-").concat(params.rowIndex, "-").concat(params.column.instanceId);
    var containerId = "container-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var _a = useState(params.getValue()), panNumber = _a[0], setPanNumber = _a[1];
    var _b = useState(false), isDisable = _b[0], setIsDisable = _b[1];
    var handleChange = function (event) {
        if (event.target.value.trim().length <= 5) {
            setPanNumber(event.target.value);
            params.setValue(event.target.value);
        }
    };
    useEffect(function () {
        setIsDisable(!params.data.pdcStatus);
    }, [params.data.pdcStatus]);
    useEffect(function () {
        if (params.getValue().trim() == "")
            setPanNumber(params.getValue());
    }, [params.getValue()]);
    return (_jsx("div", __assign({ id: containerId }, { children: _jsx("input", { id: id, name: elementName, disabled: isDisable, type: "text", onChange: handleChange, value: panNumber, style: { width: "100%", border: "1px solid #DFE5FF" } }) })));
};
export var FDCStatusCheckButton = function (params) {
    var dispatch = useAppDispatch();
    var fail = {
        result: "Fail",
        color: "#EF4444",
        title: "Dublicate Found!",
        body: "The ownwership with sai Anvesh Maruboyina for 30 days.",
    };
    var pass = {
        result: "Pass",
        color: "#22C55E",
        title: "Final Duplication Check Passed, ",
        body: "Press upload to start uploading the profile.",
    };
    var _a = useState({
        result: "",
        color: "",
        title: "",
        body: "",
    }), result = _a[0], setResult = _a[1];
    var _b = useState(false), isDisable = _b[0], setIsDisable = _b[1];
    useEffect(function () {
        setIsDisable(!params.data.pdcStatus);
    }, [params.data.pdcStatus]);
    var classes = useStyles();
    var _c = React.useState(false), open = _c[0], setOpen = _c[1];
    var dispatchNotificationData = function (notifyData) {
        dispatch({
            type: "SEND_ALERT",
            data: {
                enable: notifyData.enable,
                type: notifyData.type,
                message: notifyData.message,
                duration: notifyData.duration,
            },
        });
    };
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
    var id = "cell-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var elementName = "".concat(params.colDef.field, "-").concat(params.rowIndex, "-").concat(params.column.instanceId);
    var containerId = "container-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var iconId = "icon-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var handleClick = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        var _a, _b, _c, _d, _e, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    if (!(params.data.firstName.trim() == "" ||
                        params.data.lastName.trim() == "" ||
                        params.data.phoneNumber.trim() == "" ||
                        params.data.email.trim() == "" ||
                        params.data.interviewed.trim() == "")) return [3 /*break*/, 1];
                    dispatchNotificationData({
                        enable: true,
                        type: "warning",
                        message: "Enter All Details.",
                        duration: 2000,
                    });
                    params.setValue(false);
                    return [3 /*break*/, 8];
                case 1:
                    if (!!/^[A-Za-z\s]+$/.test(params.data.firstName)) return [3 /*break*/, 2];
                    dispatchNotificationData({
                        enable: true,
                        type: "warning",
                        message: "Only alphabet can be entered in first name.",
                        duration: 2000,
                    });
                    params.setValue(false);
                    return [3 /*break*/, 8];
                case 2:
                    if (!!/^[A-Za-z\s]+$/.test(params.data.lastName)) return [3 /*break*/, 3];
                    dispatchNotificationData({
                        enable: true,
                        type: "warning",
                        message: "Only alphabet can be entered in last name.",
                        duration: 2000,
                    });
                    params.setValue(false);
                    return [3 /*break*/, 8];
                case 3:
                    if (!!/^[6-9]{1}[0-9]{9}$/.test(params.data.phoneNumber)) return [3 /*break*/, 4];
                    dispatchNotificationData({
                        enable: true,
                        type: "warning",
                        message: "Invalid Phone Number.",
                        duration: 2000,
                    });
                    params.setValue(false);
                    return [3 /*break*/, 8];
                case 4:
                    if (!!emailRegex.test(params.data.email)) return [3 /*break*/, 5];
                    dispatchNotificationData({
                        enable: true,
                        type: "warning",
                        message: "Invalid Email.",
                        duration: 2000,
                    });
                    params.setValue(false);
                    return [3 /*break*/, 8];
                case 5:
                    if (!(params.data.lastFiveDigitOfPan.trim().length != 5)) return [3 /*break*/, 6];
                    dispatchNotificationData({
                        enable: true,
                        type: "warning",
                        message: "Please enter last five digits of PAN.",
                        duration: 2000,
                    });
                    params.setValue(false);
                    return [3 /*break*/, 8];
                case 6: return [4 /*yield*/, fullDuplicationCheck(params.data.profileLogId, params.data.lastFiveDigitOfPan, params.data.dob)];
                case 7:
                    response = _g.sent();
                    if ((response === null || response === void 0 ? void 0 : response.status) === 200) {
                        if ((response === null || response === void 0 ? void 0 : response.data.data.status) == "FDC_SUCCESS") {
                            setResult(__assign(__assign({}, DUPLICATION_PASS), { title: "Final Duplication Check Passed, ", body: response === null || response === void 0 ? void 0 : response.data.message }));
                            setOpen(true);
                            setTimeout(function () {
                                setOpen(false);
                            }, 4000);
                            params.setValue(true);
                            sessionStorage.setItem("row".concat(params.rowIndex), JSON.stringify(params.data));
                        }
                        else {
                            setResult(__assign(__assign({}, DUPLICATION_FAIL), { title: "Final Duplication Check Failed, ", body: response === null || response === void 0 ? void 0 : response.data.message }));
                            setOpen(true);
                            setTimeout(function () {
                                setOpen(false);
                            }, 4000);
                            params.setValue(false);
                        }
                    }
                    else if (((_a = response === null || response === void 0 ? void 0 : response.response) === null || _a === void 0 ? void 0 : _a.status) === 500) {
                        setResult(__assign(__assign({}, DUPLICATION_FAIL), { title: "Final Duplication Check Failed, ", body: "500 ".concat((_c = (_b = response === null || response === void 0 ? void 0 : response.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.error, " ").concat((_e = (_d = response === null || response === void 0 ? void 0 : response.response) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.message) }));
                        setOpen(true);
                        setTimeout(function () {
                            setOpen(false);
                        }, 4000);
                        params.setValue(false);
                    }
                    else {
                        setResult(__assign(__assign({}, DUPLICATION_FAIL), { title: "Final Duplication Check Failed, ", body: (_f = response === null || response === void 0 ? void 0 : response.response) === null || _f === void 0 ? void 0 : _f.data.message }));
                        setOpen(true);
                        setTimeout(function () {
                            setOpen(false);
                        }, 4000);
                        params.setValue(false);
                    }
                    _g.label = 8;
                case 8: return [2 /*return*/];
            }
        });
    }); };
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
            setResult(__assign(__assign({}, DUPLICATION_PASS), { title: "Final Duplication Check Passed, " }));
        }
        else if (!params.getValue() == false) {
            setResult(__assign(__assign({}, DUPLICATION_FAIL), { title: "Final Dublication Check Failed, " }));
        }
    }, []);
    useEffect(function () {
        if (params.getValue() === "0") {
            setResult({
                result: "",
                color: "",
                title: "",
                body: "",
            });
            setOpen(false);
        }
    }, [params.getValue()]);
    return (_jsxs(_Fragment, { children: [_jsx(Button, __assign({ id: id, name: elementName, className: classes.buttonContainer, sx: {
                    display: "inline",
                }, variant: "contained", size: "small", onClick: handleClick, disabled: isDisable }, { children: "Check" })), _jsx("div", __assign({ style: { color: result.color, display: "inline" } }, { children: result.result })), _jsx("div", __assign({ style: { display: "inline-flex", alignItems: "center" } }, { children: _jsx(ClickAwayListener, __assign({ onClickAway: handleTooltipClose }, { children: _jsx(HtmlTooltip
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
    var _a = useState(false), isDisable = _a[0], setIsDisable = _a[1];
    useEffect(function () {
        setIsDisable(!params.data.fdcStatus);
    }, [params.data.fdcStatus]);
    var navigateUpload = function () { };
    var id = "cell-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var elementName = "".concat(params.colDef.field, "-").concat(params.rowIndex, "-").concat(params.column.instanceId);
    var containerId = "container-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    return (_jsx("div", __assign({ style: {
            textAlign: "center",
        }, id: containerId }, { children: _jsx(Button, __assign({ id: id, name: elementName, className: classes.buttonContainer, variant: "contained", size: "small", onClick: navigateUpload, disabled: isDisable }, { children: "Upload" })) })));
};
export var ClearRowButton = function (params) {
    var classes = useStyles();
    var _a = useState(params.data.pdcStatus), disableButton = _a[0], setdisableButton = _a[1];
    useEffect(function () {
        setdisableButton(params.data.pdcStatus);
    }, [params.data.pdcStatus]);
    var handleClick = function () {
        params.node.setDataValue("firstName", "");
        params.node.setDataValue("lastName", "");
        params.node.setDataValue("phoneNumber", "");
        params.node.setDataValue("email", "");
        params.node.setDataValue("interviewed", "no");
        params.node.setDataValue("pdcStatus", "0");
        params.node.setDataValue("lastFiveDigitOfPan", "");
        params.node.setDataValue("dob", "");
        params.node.setDataValue("fdcStatus", "0");
        params.node.setDataValue("uploadProfile", "");
    };
    var id = "clear-row-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    // const elementName = `${params.colDef.field}-${params.rowIndex}-${params.column.instanceId}`;
    var containerId = "container-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    return (_jsx("div", __assign({ id: containerId, style: {
            textAlign: "center",
        } }, { children: _jsx(IconButton, __assign({ id: id, 
            // className={classes.buttonContainer}
            onClick: handleClick, "aria-label": "delete", disabled: disableButton === true ? true : false }, { children: _jsx(DeleteIcon, {}) })) })));
};
var ManualDataInputTableElement = function () {
    return _jsx("div", { children: "ManualDataInputTableElement" });
};
export default ManualDataInputTableElement;
