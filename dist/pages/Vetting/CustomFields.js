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
import { useState, useEffect } from "react";
import { Typography, Button, Box, tooltipClasses, Tooltip, IconButton, Drawer, } from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import { openFile } from "../../services/DocumentService";
import MessageBox from "../Broadcast/MessageBox";
import { jobseekerConsentStatusChangeWorkflow } from "../../services/JobSeekerService";
import { useAppDispatch } from "../../services/StoreHooks";
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
    iconColor: {
        color: "#4d6cd9",
        margin: "8px",
    },
    uploadText: {
        color: "#4d6cd9",
    },
    dropdown: {
        border: "1px solid #DFE5FF",
    },
    dropdownAlignment: {
        display: "inline-flex",
        alignItems: "center",
    },
    commonAlignment: {
        textAlign: "center",
    },
    dropdownIconAlignment: {
        left: "18px",
    },
    chatBox: {
        width: "390px",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        left: 0,
    },
}); });
export var ResumeUploaded = function (params) {
    var classes = useStyles();
    var handleViewResume = function () { return __awaiter(void 0, void 0, void 0, function () {
        var resumeId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    resumeId = params.getValue();
                    return [4 /*yield*/, openFile(resumeId)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    return (_jsx("div", __assign({ className: classes.commonAlignment }, { children: _jsx(Typography, __assign({ onClick: handleViewResume, className: classes.uploadText }, { children: "View Resume Uploaded" })) })));
};
export var Icons = function (params) {
    var _a = useState(false), toggleDrawer = _a[0], setToggleDrawer = _a[1];
    var classes = useStyles();
    var handleClick = function () { };
    var handleChat = function () {
        setToggleDrawer(true);
    };
    return (_jsxs("div", __assign({ className: classes.commonAlignment }, { children: [_jsx(VisibilityIcon, { className: classes.iconColor, onClick: handleClick }), _jsx(LocalPhoneRoundedIcon, { className: classes.iconColor, onClick: handleClick }), _jsx(ChatBubbleOutlineIcon, { className: classes.iconColor, onClick: handleChat }), _jsx(DehazeIcon, { className: classes.iconColor, onClick: handleClick }), _jsx(Drawer, __assign({ anchor: "left", open: toggleDrawer, onClose: function () { return setToggleDrawer(false); } }, { children: _jsx(Box, __assign({ className: classes.chatBox }, { children: _jsx(MessageBox, { closeIt: function () { return setToggleDrawer(false); }, params: params }) })) }))] })));
};
export var CustomDropDown = function (params) {
    var _a = useState(false), disable = _a[0], setDisable = _a[1];
    var dispatch = useAppDispatch();
    var Passed = {
        option: "JOB_SEEKER_CONSENT_PASS",
        color: "#22C55E",
        title: "Success",
        body: "Passed",
    };
    var Pending = {
        option: "JOB_SEEKER_CONSENT_PENDING",
        color: "#ff781f",
        title: "",
        body: "Pending",
    };
    var Failed = {
        option: "JOB_SEEKER_CONSENT_FAIL",
        color: "#EF4444",
        title: "",
        body: "Job Seeker Rejected Consent!",
    };
    var _b = useState({
        option: "",
        color: "",
        title: "",
        body: "",
    }), option = _b[0], setOption = _b[1];
    useEffect(function () {
        if (params.getValue() === "JOB_SEEKER_CONSENT_PENDING" ||
            params.getValue() === null ||
            params.getValue() === "") {
            // setOption({
            //   option: "",
            //   color: "",
            //   title: "",
            //   body: "",
            // });
            // setDisable(true);
            setOption(Pending);
        }
        else if (params.getValue() === "JOB_SEEKER_CONSENT_PASS") {
            setOption(Passed);
            setDisable(true);
        }
        // else if (params.getValue() === "JOB_SEEKER_CONSENT_PENDING") {
        //   setOption(Pending);
        // }
        else if (params.getValue() === "JOB_SEEKER_CONSENT_FAIL") {
            setOption(Failed);
            setDisable(true);
        }
    }, []);
    var id = "cellNo".concat(params.rowIndex).concat(params.column.instanceId);
    var iconId = "iconNo".concat(params.rowIndex).concat(params.column.instanceId);
    var _c = useState(""), message = _c[0], setMessage = _c[1];
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
    var handleChange = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var payLoad, response, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    payLoad = {
                        messageName: "consentArrived",
                        businessKey: params.data._id,
                        correlationKeys: {},
                        processVariables: {
                            consentGivenByJobSeeker: {
                                value: event.target.value,
                                type: "string",
                            },
                        },
                    };
                    if (!(event.target.value == "JOB_SEEKER_CONSENT_PASS")) return [3 /*break*/, 2];
                    return [4 /*yield*/, jobseekerConsentStatusChangeWorkflow(payLoad)];
                case 1:
                    response = _a.sent();
                    if (response) {
                        setOption(Passed);
                        dispatchNotificationData({
                            enable: true,
                            type: "success",
                            message: "Job Seeker Consent Changed to Pass",
                            duration: 2000,
                        });
                    }
                    else {
                        setOption(Pending);
                        dispatchNotificationData({
                            enable: true,
                            type: "error",
                            message: "Something Went Wrong Please Try gain",
                        });
                    }
                    return [3 /*break*/, 6];
                case 2:
                    if (!(event.target.value == "JOB_SEEKER_CONSENT_PENDING")) return [3 /*break*/, 3];
                    setOption(Pending);
                    return [3 /*break*/, 6];
                case 3:
                    if (!(event.target.value == "JOB_SEEKER_CONSENT_FAIL")) return [3 /*break*/, 5];
                    return [4 /*yield*/, jobseekerConsentStatusChangeWorkflow(payLoad)];
                case 4:
                    response = _a.sent();
                    if (response) {
                        setOption(Failed);
                        dispatchNotificationData({
                            enable: true,
                            type: "success",
                            message: "Job Seeker Consent Changed to Fail",
                            duration: 2000,
                        });
                    }
                    else {
                        setOption(Pending);
                        dispatchNotificationData({
                            enable: true,
                            type: "error",
                            message: "Something Went Wrong Please Try gain",
                            duration: 2000,
                        });
                    }
                    return [3 /*break*/, 6];
                case 5:
                    if (event.target.value == "") {
                        setOption({
                            option: "",
                            color: "",
                            title: "",
                            body: "",
                        });
                    }
                    _a.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var classes = useStyles();
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
    var ColorButton = styled(Button)(function (_a) {
        var theme = _a.theme;
        return ({
            color: theme.palette.getContrastText("#4d6cd9"),
            backgroundColor: "#4d6cd9",
            "&:hover": {
                backgroundColor: "#4d6cd9",
            },
            borderRadius: 20,
            width: "8px",
            fontSize: "12px",
            height: "20px",
        });
    });
    var handleResend = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var payLoad, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    payLoad = {
                        messageName: "consentArrived",
                        businessKey: params.data._id,
                        correlationKeys: {},
                        processVariables: {
                            consentGivenByJobSeeker: {
                                value: "JOB_SEEKER_CONSENT_PENDING",
                                type: "string",
                            },
                        },
                    };
                    return [4 /*yield*/, jobseekerConsentStatusChangeWorkflow(payLoad)];
                case 1:
                    response = _a.sent();
                    if (response) {
                        dispatchNotificationData({
                            enable: true,
                            type: "success",
                            message: "Job Seeker Consent Resent!",
                            duration: 2000,
                        });
                    }
                    else {
                        dispatchNotificationData({
                            enable: true,
                            type: "error",
                            message: "Job Seeker Consent Resent Failed",
                            duration: 2000,
                        });
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (_jsxs(_Fragment, { children: [_jsx("div", { children: _jsxs("select", __assign({ id: id, className: classes.dropdown, value: option.option || "JOB_SEEKER_CONSENT_PENDING", onChange: handleChange, disabled: true
                        ? option.option === "JOB_SEEKER_CONSENT_FAIL" ||
                            option.option === "JOB_SEEKER_CONSENT_PASS"
                        : false }, { children: [_jsx("option", __assign({ value: "JOB_SEEKER_CONSENT_PASS" }, { children: "Passed" })), _jsx("option", __assign({ value: "JOB_SEEKER_CONSENT_PENDING" }, { children: "Pending" })), _jsx("option", __assign({ value: "JOB_SEEKER_CONSENT_FAIL" }, { children: "Failed" }))] })) }), _jsx("div", __assign({ className: classes.dropdownAlignment }, { children: (function () {
                    if (option.option == "JOB_SEEKER_CONSENT_PASS") {
                        return (_jsx(Tooltip, __assign({ title: option.body, placement: "right-start" }, { children: _jsx(IconButton, __assign({ className: classes.dropdownIconAlignment }, { children: _jsx(CheckCircleIcon, { id: iconId, sx: { color: option.color, fontSize: "25px" } }) })) })));
                    }
                    else if (option.option == "JOB_SEEKER_CONSENT_FAIL") {
                        return (_jsx(Tooltip, __assign({ title: option.body, placement: "right-start" }, { children: _jsx(IconButton, __assign({ className: classes.dropdownIconAlignment }, { children: _jsx(ErrorIcon, { id: iconId, sx: { color: option.color, fontSize: "25px" } }) })) })));
                    }
                    else {
                        return (_jsxs(_Fragment, { children: [_jsx(ColorButton, __assign({ variant: "contained", onClick: function () { return handleResend(params); } }, { children: "Resend" })), _jsx(Tooltip, __assign({ title: option.body || "Pending", placement: "right-start" }, { children: _jsx(IconButton, { children: _jsx(PauseCircleFilledIcon, { id: iconId, sx: {
                                                color: option.color || "#ff781f",
                                                fontSize: "25px",
                                            } }) }) }))] }));
                    }
                })() }))] }));
};
var CustomFields = function () {
    return _jsx("div", { children: "CustomFields" });
};
export default CustomFields;
