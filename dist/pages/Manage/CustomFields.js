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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import { Typography, Button, TextField, Box, Tooltip, IconButton, Drawer, Grid, Card, Popover, Dialog, DialogTitle, DialogContent, DialogContentText, FormGroup, FormControlLabel, } from "@mui/material";
import { makeStyles } from "@mui/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import CloseIcon from "@mui/icons-material/Close";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { openFile } from "../../services/DocumentService";
import MessageBox from "../Broadcast/MessageBox";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import clsx from "clsx";
import { mainStages, subStages } from "./ManageConstants";
import { manageJobseekerPatch, GenericProcess, } from "../../services/JobSeekerService";
import { useAppDispatch } from "../../services/StoreHooks";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import moment from "moment";
import SendIcon from "@mui/icons-material/Send";
var useStyles = makeStyles(function () { return ({
    iconColor: {
        color: "#4d6cd9",
        margin: "8px",
    },
    uploadText: {
        color: "#4d6cd9",
    },
    viewAssessmentCard: {
        border: "1px solid grey",
        height: "200px ",
        marginTop: "10px",
        marginRight: "5px",
        marginLeft: "5px",
        fontSize: "15px",
    },
    assessmentActionButton: {
        height: "2px",
        width: "1px",
        float: "right",
        margin: "3px 3px 0px 0px",
        cursor: "pointer",
    },
    assessmentButton: {
        textAlign: "center",
        marginTop: 3,
    },
    assessmentDeleteAction: {
        border: "1px solid gray",
        borderRadius: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "left",
        alignItems: "center",
        paddingLeft: "40px",
        width: "250px",
        color: "gray",
        height: "55px",
        fontSize: "16px",
    },
    deleteActionButton: {
        width: "250px",
        justifyContent: "left",
        paddingLeft: "25px",
        color: "gray",
        height: "55px",
        fontSize: "16px",
    },
    deleteIcon: {
        marginRight: "15px",
        cursor: "pointer",
    },
    assessmentUpdateAction: {
        borderLeft: "1px solid gray",
        borderRight: "1px solid gray",
        borderBottom: "1px solid gray",
        borderRadius: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "left",
        alignItems: "center",
        paddingLeft: "43px",
        width: "250px",
        color: "gray",
        height: "55px",
        fontSize: "16px",
    },
    updateActionButton: {
        width: "250px",
        justifyContent: "left",
        color: "gray",
        height: "55px",
        fontSize: "16px",
    },
    updateIcon: {
        marginRight: "17px",
        backgroundColor: "gray",
        color: "white",
        borderRadius: 3,
        cursor: "pointer",
        padding: "2px",
    },
    uploadIcon: {
        size: "small",
        marginRight: "18px",
        marginLeft: "25px",
        backgroundColor: "gray",
        color: "white",
        borderRadius: "2px",
        fontSize: "14px",
    },
    assessmentDialogueBox: {
        backgroundColor: "#4D6CD9",
        width: "600px",
        textAlign: "center",
    },
    assessmentDialogueContent: {
        textAlign: "center",
    },
    assessmentDialogueText: {
        paddingTop: "50px",
        paddingBottom: "40px",
        justifyContent: "center",
        textAlign: "center",
    },
    assessmentDialogueAction: {
        paddingTop: "10px",
        paddingBottom: "40px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "600px",
    },
    delete: {
        backgroundColor: "#4D6CD9",
        borderRadius: 20,
        color: "black",
        paddingLeft: "30px",
        paddingRight: "30px",
        height: "30px",
        paddingTop: "3px",
        cursor: "pointer",
        marginRight: "20px",
    },
    cancel: {
        backgroundColor: "#4D6CD9",
        borderRadius: 20,
        color: "black",
        paddingLeft: "20px",
        paddingRight: "20px",
        height: "30px",
        paddingTop: "3px",
        cursor: "pointer",
        marginLeft: "20px",
    },
    leftDrawerBox: {
        width: "390px",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        overflowY: "auto",
    },
    viewAssessmentTitle: {
        textAlign: "center",
        backgroundColor: "#4D6CD9",
        height: "50px",
        // width: "390px",
        color: "#FFFFFF",
        padding: "10px",
        fontSize: "20px",
        fontWeight: "bold",
    },
    assessmentDetailsCard: {
        border: "1px solid grey",
        height: "180px ",
        marginTop: "20px",
        marginRight: "5px",
        marginLeft: "5px",
        fontSize: "13px",
        marginBottom: "10px",
    },
    assessmentDetails: {
        width: "190px",
        "& legend": { display: "none" },
        "& fieldset": { top: 0 },
    },
    partnerAssessment: {
        fontSize: "20px",
        fontWeight: "bold",
        textAlign: "center",
    },
    mainContainer: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        height: 687,
        width: 390,
        margin: 1,
        border: "1px solid #E5E5E5",
    },
    section1: {
        textAlign: "center",
        backgroundColor: "#4D6CD9",
        height: "50px",
        width: "390px",
        color: "#FFFFFF",
        padding: "10px",
    },
    section2: {
        marginTop: "15px",
        width: "390px",
        textAlign: "center",
    },
    section3: {
        marginTop: "15px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    card: {
        marginLeft: "18px",
        backgroundColor: "white",
        width: "350px",
        height: "auto",
        borderRadius: "10px",
    },
    timeSlotTitleContainer: {
        marginTop: "40px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    commonColor: {
        color: "#4d6cd9",
    },
    commonMargin: {
        margin: "10px",
    },
    dropdown: {
        border: "1px solid #DFE5FF",
    },
    dropdownContent: {
        display: "inline-flex",
        alignItems: "center",
    },
    closeIcon: {
        float: "right",
    },
    formControl: {
        top: 5,
        minWidth: 120,
    },
}); });
export var ResumeUploaded = function (params) {
    var classes = useStyles();
    var id = "cell-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var containerId = "container-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
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
    return (_jsx("div", __assign({ id: containerId, className: classes.assessmentDialogueContent }, { children: _jsx(Typography, __assign({ id: id, onClick: handleViewResume, className: classes.uploadText }, { children: "View Resume Uploaded" })) })));
};
export var Icons = function (params) {
    var _a = useState(false), toggleDrawer = _a[0], setToggleDrawer = _a[1];
    var classes = useStyles();
    var handleClick = function () { };
    var handleChat = function () {
        console.log("Chat Icon clicked");
        setToggleDrawer(true);
    };
    return (_jsxs("div", __assign({ className: classes.assessmentDialogueContent }, { children: [_jsx(VisibilityIcon, { className: classes.iconColor, onClick: handleClick }), _jsx(LocalPhoneRoundedIcon, { className: classes.iconColor, onClick: handleClick }), _jsx(ChatBubbleOutlineIcon, { className: classes.iconColor, onClick: handleChat }), _jsx(DehazeIcon, { className: classes.iconColor, onClick: handleClick }), _jsx(Drawer, __assign({ anchor: "left", open: toggleDrawer, onClose: function () { return setToggleDrawer(false); } }, { children: _jsx(Box, __assign({ className: classes.leftDrawerBox }, { children: _jsx(MessageBox, { closeIt: function () { return setToggleDrawer(false); }, params: params }) })) }))] })));
};
export var MainStageDropDown = function (params) {
    var dispatch = useAppDispatch();
    var id = "cell-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var containerId = "container-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var elementName = "element-name-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var _a = useState(params.data.jobSeekerMainStage), mainStageSelected = _a[0], setMainStageSelected = _a[1];
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
        var jobSeekerId, payload, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    jobSeekerId = params.data._id;
                    payload = {
                        processDefinitionKey: "Process_wnxmrag",
                        businessKey: jobSeekerId,
                        variables: {
                            action: "jobSeekerMainStage",
                            jobSeekerMainStage: event.target.value,
                            jobSeekerId: jobSeekerId,
                        },
                    };
                    return [4 /*yield*/, GenericProcess(payload)];
                case 1:
                    response = _a.sent();
                    if (response.data.success) {
                        params.setValue(event.target.value);
                        params.refreshCell();
                        setMainStageSelected(event.target.value);
                        dispatchNotificationData({
                            enable: true,
                            type: "success",
                            message: "MainStage Updated Successfully ",
                            duration: 4000,
                        });
                    }
                    else {
                        params.setValue(params.data.jobSeekerMainStage);
                        params.refreshCell();
                        setMainStageSelected(mainStageSelected);
                        dispatchNotificationData({
                            enable: true,
                            type: "error",
                            message: "MainStage Not Updated Please Try Again ",
                            duration: 4000,
                        });
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var classes = useStyles();
    return (_jsx(_Fragment, { children: _jsx("div", __assign({ id: containerId }, { children: _jsx("select", __assign({ id: id, name: elementName, className: classes.dropdown, onChange: handleChange, defaultValue: mainStageSelected }, { children: mainStages.map(function (item) { return (_jsx("option", __assign({ value: item.value }, { children: item.title }))); }) })) })) }));
};
export var SubStageDropDown = function (params) {
    var id = "cell-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var containerId = "container-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var elementName = "element-name-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var iconId = "iconNo".concat(params.rowIndex).concat(params.column.instanceId);
    var initalValue;
    var _a = useState(params.data.jobSeekerSubStage), subStageSelected = _a[0], setSubStageSelected = _a[1];
    var dispatch = useAppDispatch();
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
    var _b = useState(params.data.jobSeekerMainStage), mainStageVal = _b[0], setMainStageVal = _b[1];
    var handleChange = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var jobSeekerId, payload, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setMainStageVal(params.data.jobSeekerMainStage);
                    jobSeekerId = params.data._id;
                    payload = {
                        processDefinitionKey: "Process_wnxmrag",
                        businessKey: jobSeekerId,
                        variables: {
                            action: "jobSeekerSubStage",
                            jobSeekerSubStage: event.target.value,
                            jobSeekerId: jobSeekerId,
                        },
                    };
                    return [4 /*yield*/, GenericProcess(payload)];
                case 1:
                    response = _a.sent();
                    if (response.data.success) {
                        params.setValue(event.target.value);
                        params.refreshCell();
                        dispatchNotificationData({
                            enable: true,
                            type: "success",
                            message: "SubStage Updated Successfully ",
                            duration: 4000,
                        });
                    }
                    else {
                        params.setValue(params.data.jobSeekerSubStage);
                        dispatchNotificationData({
                            enable: true,
                            type: "error",
                            message: "SubStage not Updated Please Try Again",
                            duration: 4000,
                        });
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    useEffect(function () {
        if (params.data.jobSeekerSubStage)
            setSubStageSelected(params.data.jobSeekerSubStage);
        if (params.data.jobSeekerMainStage)
            setMainStageVal(params.data.jobSeekerMainStage);
    }, [params]);
    var classes = useStyles();
    if (mainStageVal)
        return (_jsx(_Fragment, { children: _jsx("div", __assign({ id: containerId }, { children: _jsx("select", __assign({ id: id, name: elementName, className: classes.dropdown, onChange: handleChange, defaultValue: subStageSelected }, { children: mainStageVal
                        ? subStages[mainStageVal]["subStages"].map(function (item) { return (_jsx("option", __assign({ value: item.value }, { children: item.title }))); })
                        : null })) })) }));
    else
        return null;
};
export var SubStageCommentsDropDown = function (params) {
    var id = "cell-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var containerId = "container-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var elementName = "element-name-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var iconId = "iconNo".concat(params.rowIndex).concat(params.column.instanceId);
    var _a = useState(""), mainStageVal = _a[0], setMainStageVal = _a[1];
    var _b = useState(""), subStageVal = _b[0], setSubStageVal = _b[1];
    var dispatch = useAppDispatch();
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
        var jobSeekerId, payload, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    jobSeekerId = params.data._id;
                    payload = {
                        jobSeekerComment: event.target.value,
                    };
                    return [4 /*yield*/, manageJobseekerPatch(jobSeekerId, payload)];
                case 1:
                    response = _a.sent();
                    if (response.data.success) {
                        params.setValue(event.target.value);
                        params.refreshCell();
                        dispatchNotificationData({
                            enable: true,
                            type: "success",
                            message: "Comment Updated Successfully ",
                            duration: 4000,
                        });
                    }
                    else {
                        params.setValue(params.data.jobSeekerComment);
                        dispatchNotificationData({
                            enable: true,
                            type: "error",
                            message: "Comment Not Updated Please Try Again ",
                            duration: 4000,
                        });
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    useEffect(function () {
        if (params.data.jobSeekerMainStage && params.data.jobSeekerSubStage) {
            setMainStageVal(params.data.jobSeekerMainStage);
            setSubStageVal(params.data.jobSeekerSubStage);
        }
    }, [params]);
    var classes = useStyles();
    if (mainStageVal && subStageVal)
        return (_jsx(_Fragment, { children: _jsx("div", __assign({ id: containerId }, { children: _jsx("select", __assign({ id: id, name: elementName, className: classes.dropdown, onChange: handleChange, defaultValue: params.data.jobSeekerComment }, { children: mainStageVal && subStageVal
                        ? subStages[mainStageVal][subStageVal].map(function (item) { return (_jsx("option", __assign({ value: item.value }, { children: item.title }))); })
                        : null })) })) }));
    else
        return null;
};
export var ViewAssessments = function (params) {
    var containerId = "container-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var cardId = "card-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var cardCloseButtonId = "card-close-button-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var assessmentTypeId = "assessment-type-drop-down-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var assessmentTypeName = "assessment-type-drop-down-name-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var assessmentPartnerId = "assessment-partner-drop-down-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var assessmentPartnerName = "assessment-partner-drop-down-name-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var assessmentButtonId = "assessment-button-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var assessmentButtonName = "assessment-button-name-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var viewAssessmentCardId = "view-assessment-card-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var viewAssessmentButtonId = "view-assessment-button-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var viewAssessmentButtonName = "view-assessment-button-name-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var uploadAssessmentCardId = "upload-assessment-card-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var uploadAssessmentButtonId = "upload-assessment-button-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var uploadAssessmentButtonName = "upload-assessment-button-name-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var deleteAssessmentContainerId = "delete-assessment-container-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var deleteAssessmentCloseButtonId = "delete-assessment-close-button-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var deleteAssessmentYesButtonId = "delete-assessment-yes-button-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var deleteAssessmentCancelButtonId = "delete-assessment-cancel-button-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var _a = useState(false), toggleDrawer = _a[0], setToggleDrawer = _a[1];
    var _b = React.useState([]), assessmentType = _b[0], setAssessmentType = _b[1];
    var _c = React.useState([]), assessmentPartner = _c[0], setAssessmentPartner = _c[1];
    var _d = useState(null), anchorElView = _d[0], setAnchorElView = _d[1];
    var _e = useState(null), anchorElUpload = _e[0], setAnchorElUpload = _e[1];
    var _f = useState(false), isDeleteBoxOpen = _f[0], setIsDeleteBoxOpen = _f[1];
    var _g = useState(false), isUpdateBoxOpen = _g[0], setIsUpdateBoxOpen = _g[1];
    var _h = useState(false), isUploadBoxOpen = _h[0], setIsUploadBoxOpen = _h[1];
    var _j = useState(false), isDeleteSuccessBoxOpen = _j[0], setIsDeleteSuccessBoxOpen = _j[1];
    var assessmentTypes = [
        "Assessment Services",
        "Interview as a Service",
        "Resume Builder",
        "Learning Management System",
    ];
    var assessmentPartners = [
        "Assessment Services",
        "Interview as a Service",
        "Resume Builder",
        "Learning Management System",
    ];
    var handleChangeAssessmentType = function (event) {
        var value = event.target.value;
        setAssessmentType(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value);
    };
    var handleChangeAssessmentPartner = function (event) {
        var value = event.target.value;
        setAssessmentPartner(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value);
    };
    var classes = useStyles();
    var handleClick = function () {
        setToggleDrawer(true);
    };
    var handleCloseView = function () {
        setAnchorElView(null);
    };
    var handleViewReport = function (event) {
        setAnchorElView(event.currentTarget);
    };
    var openViewPop = Boolean(anchorElView);
    var ViewAssessmentReport = function () {
        return (_jsxs(Card, __assign({ id: viewAssessmentCardId, className: classes.viewAssessmentCard, elevation: 3 }, { children: [_jsxs(Box, __assign({ className: classes.assessmentDialogueContent }, { children: [_jsxs("div", __assign({ className: classes.commonMargin }, { children: ["Assessment Type - Interview as a Service", _jsx(IconButton, __assign({ onClick: handleViewReport, className: classes.assessmentActionButton }, { children: _jsx(DehazeIcon, { className: classes.commonColor }) })), _jsxs(Popover, __assign({ id: "view-popover", open: openViewPop, anchorEl: anchorElView, onClose: handleCloseView, anchorReference: "anchorPosition", anchorPosition: { top: 345, left: 355 } }, { children: [_jsxs(Box, __assign({ className: classes.assessmentDeleteAction }, { children: [_jsx(DeleteForeverIcon, { className: classes.deleteIcon, onClick: function () {
                                                        setIsDeleteBoxOpen(true);
                                                    } }), _jsx(Typography, { children: "Delete" })] })), _jsxs(Box, __assign({ className: classes.assessmentUpdateAction }, { children: [_jsx(BorderColorIcon, { className: classes.updateIcon, onClick: function () {
                                                        setIsUpdateBoxOpen(true);
                                                    }, fontSize: "small" }), _jsx(Typography, { children: "Update" })] }))] }))] })), _jsx("div", __assign({ className: classes.commonMargin }, { children: "Assessment Partner - Interviewplus" })), _jsx("div", __assign({ className: classes.commonMargin }, { children: "Assessment Partner - Interviewplus" })), _jsx("div", __assign({ className: classes.commonMargin }, { children: "Assessment Partner - Interviewplus" }))] })), _jsx(Box, __assign({ className: classes.assessmentButton }, { children: _jsx(Button, __assign({ id: viewAssessmentButtonId, name: viewAssessmentButtonName, variant: "contained" }, { children: "View Assesment Report" })) }))] })));
    };
    var handleCloseUpload = function () {
        setAnchorElUpload(null);
    };
    var handleUploadReport = function (event) {
        setAnchorElUpload(event.currentTarget);
    };
    var openUploadPop = Boolean(anchorElUpload);
    var UploadAssessmentReport = function () {
        return (_jsxs(Card, __assign({ id: uploadAssessmentCardId, className: classes.viewAssessmentCard, elevation: 3 }, { children: [_jsxs(Box, __assign({ textAlign: "center" }, { children: [_jsxs("div", __assign({ className: classes.commonMargin }, { children: ["Assessment Type - Interview as a Service", _jsx(IconButton, __assign({ onClick: handleUploadReport, className: classes.assessmentActionButton }, { children: _jsx(DehazeIcon, { className: classes.commonColor }) })), _jsxs(Popover, __assign({ id: "upload-popover", open: openUploadPop, anchorEl: anchorElUpload, onClose: handleCloseUpload, anchorReference: "anchorPosition", anchorPosition: { top: 565, left: 355 } }, { children: [_jsxs(Box, __assign({ className: classes.assessmentDeleteAction }, { children: [_jsx(DeleteForeverIcon, { className: classes.deleteIcon, onClick: function () {
                                                        setIsDeleteBoxOpen(true);
                                                    } }), _jsx(Typography, { children: "Delete" })] })), _jsxs(Box, __assign({ className: classes.assessmentUpdateAction }, { children: [_jsx(BorderColorIcon, { className: classes.updateIcon, onClick: function () {
                                                        setIsUploadBoxOpen(true);
                                                    }, fontSize: "small" }), _jsx(Typography, { children: "Upload" })] }))] }))] })), _jsx("div", __assign({ className: classes.commonMargin }, { children: "Assessment Partner - Interviewplus" })), _jsx("div", __assign({ className: classes.commonMargin }, { children: "Assessment Partner - Interviewplus" })), _jsx("div", __assign({ className: classes.commonMargin }, { children: "Assessment Partner - Interviewplus" }))] })), _jsx(Box, __assign({ className: classes.assessmentButton }, { children: _jsx(Button, __assign({ id: uploadAssessmentButtonId, name: uploadAssessmentButtonName, variant: "contained" }, { children: "Upload Assesment Report" })) }))] })));
    };
    var handleDelete = function () {
        //Delete Method
        setIsDeleteBoxOpen(false);
        setAnchorElUpload(null);
        setAnchorElView(null);
        setIsDeleteSuccessBoxOpen(true);
    };
    var DeleteAssessment = function () {
        return (_jsxs(Dialog, __assign({ id: deleteAssessmentContainerId, open: isDeleteBoxOpen, "aria-labelledby": "delete-dialog-title", "aria-describedby": "delete-dialog-description" }, { children: [_jsxs(DialogTitle, __assign({ id: "delete-dialog-title", className: classes.assessmentDialogueBox }, { children: ["Delete Assessment", _jsx(CloseIcon, { id: deleteAssessmentCloseButtonId, onClick: function () {
                                setIsDeleteBoxOpen(false);
                            }, className: classes.assessmentActionButton })] })), _jsx(DialogContent, __assign({ className: classes.assessmentDialogueContent }, { children: _jsx(DialogContentText, __assign({ id: "delete-dialog-description", className: classes.assessmentDialogueText }, { children: "Are you sure you want to Delete Assessment of the Job Seeker from the platfrom?" })) })), _jsxs(Box, __assign({ className: classes.assessmentDialogueAction }, { children: [_jsx(Box, __assign({ id: deleteAssessmentYesButtonId, className: classes.delete, onClick: handleDelete }, { children: _jsx(Typography, { children: "Yes" }) })), _jsx(Box, __assign({ id: deleteAssessmentCancelButtonId, className: classes.cancel, onClick: function () {
                                setIsDeleteBoxOpen(false);
                                setAnchorElUpload(null);
                                setAnchorElView(null);
                            } }, { children: _jsx(Typography, { children: "Cancel" }) }))] }))] })));
    };
    var DeleteAssessmentSuccess = function () {
        return (_jsxs(Dialog, __assign({ open: isDeleteSuccessBoxOpen, "aria-labelledby": "delete-success-dialog-title", "aria-describedby": "delete-success-dialog-description" }, { children: [_jsxs(DialogTitle, __assign({ id: "delete-success-dialog-title", className: classes.assessmentDialogueBox }, { children: ["Delete Assessment", _jsx(CloseIcon, { onClick: function () {
                                setIsDeleteSuccessBoxOpen(false);
                            }, className: classes.assessmentActionButton })] })), _jsx(DialogContent, __assign({ className: classes.assessmentDialogueContent }, { children: _jsx(DialogContentText, __assign({ id: "delete-success-dialog-description", className: classes.assessmentDialogueText }, { children: "Assessment has been deleted!" })) }))] })));
    };
    var UpdateAssessment = function () {
        return (_jsxs(Dialog, __assign({ open: isUpdateBoxOpen, "aria-labelledby": "update-dialog-title", "aria-describedby": "update-dialog-description" }, { children: [_jsxs(DialogTitle, __assign({ id: "update-dialog-title", className: classes.assessmentDialogueBox }, { children: ["Update Assessment", _jsx(CloseIcon, { onClick: function () {
                                setIsUpdateBoxOpen(false);
                                setAnchorElView(null);
                            }, className: classes.assessmentActionButton })] })), _jsx(DialogContent, __assign({ className: classes.assessmentDialogueContent }, { children: _jsx(DialogContentText, __assign({ id: "update-dialog-description", className: classes.assessmentDialogueText }, { children: "Job Seeker Name -" })) }))] })));
    };
    var UploadAssessment = function () {
        return (_jsxs(Dialog, __assign({ open: isUploadBoxOpen, "aria-labelledby": "upload-dialog-title", "aria-describedby": "upload-dialog-description" }, { children: [_jsxs(DialogTitle, __assign({ id: "upload-dialog-title", className: classes.assessmentDialogueBox }, { children: ["Upload Assessment", _jsx(CloseIcon, { onClick: function () {
                                setIsUploadBoxOpen(false);
                                setAnchorElUpload(null);
                            }, className: classes.assessmentActionButton })] })), _jsx(DialogContent, __assign({ className: classes.assessmentDialogueContent }, { children: _jsx(DialogContentText, __assign({ id: "upload-dialog-description", className: classes.assessmentDialogueText }, { children: "Job Seeker Name -" })) }))] })));
    };
    return (_jsxs("div", __assign({ id: containerId, className: classes.assessmentDialogueContent }, { children: [_jsx(Typography, __assign({ onClick: handleClick, className: classes.uploadText }, { children: "View Assessments" })), _jsx(Drawer, __assign({ anchor: "left", open: toggleDrawer, onClose: function () { return setToggleDrawer(false); } }, { children: _jsx(Box, __assign({ className: classes.leftDrawerBox }, { children: _jsxs(Grid, { children: [_jsx(Box, { children: _jsxs(Typography, __assign({ className: classes.viewAssessmentTitle }, { children: ["View Assessments", _jsx(CloseIcon, { id: cardCloseButtonId, className: classes.closeIcon, onClick: function () { return setToggleDrawer(false); } })] })) }), _jsx(Typography, __assign({ className: classes.assessmentDialogueContent }, { children: "Request New Assessment" })), _jsx(Typography, __assign({ className: classes.assessmentDialogueContent }, { children: "Job Seeker Name - Rajesh Sharma" })), _jsxs(Box, { children: [_jsxs(Card, __assign({ id: cardId, className: classes.assessmentDetailsCard, elevation: 3 }, { children: [_jsxs(Box, __assign({ display: "flex" }, { children: [_jsx(Typography, __assign({ p: 2.2 }, { children: "Assessment Type" })), _jsx(FormControl, __assign({ className: classes.formControl, size: "small" }, { children: _jsx(Select, __assign({ labelId: "demo-multiple-checkbox-label", id: assessmentTypeId, name: assessmentTypeName, multiple: true, value: assessmentType, onChange: handleChangeAssessmentType, input: _jsx(OutlinedInput, { label: "Tag" }), renderValue: function (selected) { return selected.join(", "); }, className: classes.assessmentDetails }, { children: assessmentTypes.map(function (name) { return (_jsxs(MenuItem, __assign({ value: name }, { children: [_jsx(Checkbox, { checked: assessmentType.indexOf(name) > -1 }), _jsx(ListItemText, { primary: name })] }), name)); }) })) }))] })), _jsxs(Box, __assign({ display: "flex" }, { children: [_jsx(Typography, __assign({ p: 1 }, { children: "Assessment Partner" })), _jsx(FormControl, __assign({ className: classes.formControl, size: "small" }, { children: _jsx(Select, __assign({ labelId: "demo-multiple-checkbox-label", id: assessmentPartnerId, name: assessmentPartnerName, multiple: true, value: assessmentPartner, onChange: handleChangeAssessmentPartner, input: _jsx(OutlinedInput, { label: "Tag" }), renderValue: function (selected) { return selected.join(", "); }, className: classes.assessmentDetails }, { children: assessmentPartners.map(function (name) { return (_jsxs(MenuItem, __assign({ value: name }, { children: [_jsx(Checkbox, { checked: assessmentPartner.indexOf(name) > -1 }), _jsx(ListItemText, { primary: name })] }), name)); }) })) }))] })), _jsx(Box, __assign({ className: clsx(classes.assessmentDialogueContent, classes.section3) }, { children: _jsx(Button, __assign({ id: assessmentButtonId, name: assessmentButtonName, variant: "contained" }, { children: "Request Assessment" })) }))] })), _jsx(Typography, __assign({ className: classes.partnerAssessment }, { children: "Partner Assessment Reports" })), _jsx(ViewAssessmentReport, {}), _jsx(UploadAssessmentReport, {}), _jsx(DeleteAssessment, {}), _jsx(DeleteAssessmentSuccess, {}), _jsx(UpdateAssessment, {}), _jsx(UploadAssessment, {})] })] }) })) }))] })));
};
export var Interview = function (params) {
    var containerId = "container-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var scheduleButtonId = "schedule-button-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var scheduleButtonName = "schedule-button-name-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var scheduledrawerId = "schedule-drawer-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var cardId = "card-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var cardScheduleButtonId = "card-schedule-button-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var cardScheduleButtonName = "card-schedule-button-name-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var cardCloseButtonId = "card-close-button-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var cardDatePickerId = "card-date-picker-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var classes = useStyles();
    var _a = useState(false), toggleDrawer = _a[0], setToggleDrawer = _a[1];
    var _b = useState(""), nextInterviewDate = _b[0], setNextInterviewDate = _b[1];
    var times = ["11:00am to 01:00pm", "03:00pm to 06:00pm"];
    var _c = React.useState(moment()), dateValue = _c[0], setDateValue = _c[1];
    var dispatch = useAppDispatch();
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
    var handleDateChange = function (newValue) { return __awaiter(void 0, void 0, void 0, function () {
        var dd, mm, yy;
        return __generator(this, function (_a) {
            dd = ("0" + newValue.$D).slice(-2);
            mm = ("0" + (newValue.$M + 1)).slice(-2);
            yy = newValue.$y;
            // Date picker is handling the date in DD/MM/YYYY format
            console.log("".concat(mm, "/").concat(dd, "/").concat(yy));
            setDateValue("".concat(dd, "/").concat(mm, "/").concat(yy));
            return [2 /*return*/];
        });
    }); };
    var handleSchedule = function () { return __awaiter(void 0, void 0, void 0, function () {
        var jobSeekerId, payload, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    jobSeekerId = params.data._id;
                    payload = {
                        nextInterviewDate: dateValue,
                    };
                    return [4 /*yield*/, manageJobseekerPatch(jobSeekerId, payload)];
                case 1:
                    response = _a.sent();
                    if (response.data.success) {
                        params.setValue(moment(dateValue, "DD-MM-YYYY").format("DD-MM-YYYY"));
                        params.refreshCell();
                        setToggleDrawer(false);
                        dispatchNotificationData({
                            enable: true,
                            type: "success",
                            message: "Interview Date is Successfully Scheduled",
                            duration: 4000,
                        });
                    }
                    else {
                        params.setValue(params.data.nextInterviewDate);
                        params.refreshCell();
                        dispatchNotificationData({
                            enable: true,
                            type: "error",
                            message: "Interview Date is Not Scheduled Please Try Again ",
                            duration: 4000,
                        });
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var Card = function (props) {
        var handleOnChange = function (e) {
            if (e.target.checked) {
                var time = e.target.value;
            }
        };
        return (_jsxs(Grid, { children: [_jsx(Box, { children: _jsxs(Typography, __assign({ className: classes.viewAssessmentTitle }, { children: ["Interview Scheduling", _jsx(CloseIcon, { id: cardCloseButtonId, onClick: handleClose, className: classes.closeIcon })] })) }), _jsx(Box, __assign({ className: classes.section2 }, { children: _jsx("h5", __assign({ className: classes.commonColor }, { children: "Phase - L1" })) })), _jsxs(Box, __assign({ className: classes.section3 }, { children: [_jsx("p", { children: "Choose Date" }), _jsx(Box, { children: _jsx(LocalizationProvider, __assign({ dateAdapter: AdapterDayjs }, { children: _jsx(DesktopDatePicker, { label: "Choose Date", inputFormat: "DD/MM/YYYY", value: moment(dateValue, "DD-MM-YYYY").format("MM-DD-YYYY"), onChange: handleDateChange, disablePast: true, renderInput: function (params) { return (_jsx(TextField, __assign({ id: cardDatePickerId }, params))); } }) })) })] })), _jsxs(Box, __assign({ p: 1, className: classes.timeSlotTitleContainer }, { children: [_jsx("p", { children: "Time Slots Available" }), _jsx(FormGroup, { children: times.map(function (time, index) { return (_jsx(FormControlLabel, { id: "".concat(time, "-").concat(index), onChange: handleOnChange, value: time, control: _jsx(Checkbox, {}), label: time })); }) })] })), _jsx(Box, __assign({ p: 1, className: classes.timeSlotTitleContainer }, { children: _jsx(Button, __assign({ id: cardScheduleButtonId, name: cardScheduleButtonName, variant: "contained", onClick: handleSchedule }, { children: "Schedule" })) }))] }));
    };
    var handleClose = function () {
        setToggleDrawer(false);
    };
    return (_jsxs("div", __assign({ id: containerId, className: classes.assessmentDialogueContent }, { children: [_jsx(Button, __assign({ id: scheduleButtonId, name: scheduleButtonName, size: "small", onClick: function () { return setToggleDrawer(true); }, variant: "contained", sx: { background: "#4D6CD9", borderRadius: "15px", height: "25px" } }, { children: "Schedule" })), _jsx(Drawer, __assign({ id: scheduledrawerId, anchor: "right", open: toggleDrawer, onClose: handleClose }, { children: _jsx(Card, { id: cardId, handleCloseIcon: handleClose }) }))] })));
};
export var Reward = function (params) {
    var _a = useState(params.data.sendReward), disable = _a[0], setDisable = _a[1];
    var id = "cell-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var containerId = "container-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var elementName = "element-name-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    useEffect(function () {
        if (params.data.coolingPeriod === "Complete") {
            setDisable(true);
        }
        else {
            setDisable(false);
        }
    }, [params.data.coolingPeriod]);
    return (_jsx("div", __assign({ id: containerId }, { children: _jsx(Button, __assign({ id: id, name: elementName, disabled: !disable, size: "small", variant: "contained", sx: { background: "#4D6CD9", borderRadius: "15px", height: "25px" } }, { children: "Reward" })) })));
};
export var JobSeekerJoined = function (params) {
    var id = "cell-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var containerId = "container-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var _a = useState(), disable = _a[0], setDisable = _a[1];
    var _b = React.useState(params.getValue()), dateValue = _b[0], setDateValue = _b[1];
    var dispatch = useAppDispatch();
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
    var handleDateChange = function (newValue) { return __awaiter(void 0, void 0, void 0, function () {
        var dd, mm, yy, jobSeekerId, payload, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dd = ("0" + newValue.$D).slice(-2);
                    mm = ("0" + (newValue.$M + 1)).slice(-2);
                    yy = newValue.$y;
                    // Date picker is handling the date in DD/MM/YYYY format
                    console.log("".concat(mm, "/").concat(dd, "/").concat(yy));
                    setDateValue("".concat(dd, "/").concat(mm, "/").concat(yy));
                    jobSeekerId = params.data._id;
                    payload = {
                        jobSeekerJoinedDate: "".concat(dd, "/").concat(mm, "/").concat(yy),
                    };
                    return [4 /*yield*/, manageJobseekerPatch(jobSeekerId, payload)];
                case 1:
                    response = _a.sent();
                    console.log(response);
                    if (response.data.success) {
                        params.setValue(moment(dateValue, "DD-MM-YYYY").format("DD-MM-YYYY"));
                        dispatchNotificationData({
                            enable: true,
                            type: "success",
                            message: "JobSeekerJoined Date is Successfully Updated",
                            duration: 4000,
                        });
                    }
                    else {
                        params.setValue(params.data.jobSeekerJoinedDate);
                        dispatchNotificationData({
                            enable: true,
                            type: "error",
                            message: "JobSeekerJoined Date is Not Updated Please Try Again ",
                            duration: 4000,
                        });
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (_jsx("div", __assign({ id: containerId }, { children: _jsx(LocalizationProvider, __assign({ dateAdapter: AdapterDayjs }, { children: _jsx(DesktopDatePicker
            // label="Choose Date"
            , { 
                // label="Choose Date"
                inputFormat: "DD/MM/YYYY", value: moment(dateValue, "DD-MM-YYYY").format("MM-DD-YYYY"), onChange: handleDateChange, disablePast: true, renderInput: function (params) { return _jsx(TextField, __assign({ id: id }, params)); } }) })) })));
};
export var CoolingPeriod = function (params) {
    var id = "cell-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var containerId = "container-no-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var elementName = "element-name-".concat(params.rowIndex, "-").concat(params.column.instanceId);
    var _a = useState(params.data.coolingPeriod), coolingPeriodEntered = _a[0], setCoolingPeriodEntered = _a[1];
    var dispatch = useAppDispatch();
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
    var handleCoolingPeriod = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            setCoolingPeriodEntered(event.target.value);
            return [2 /*return*/];
        });
    }); };
    var handleSend = function () { return __awaiter(void 0, void 0, void 0, function () {
        var jobSeekerId, payload, response, jobSeekerId, payload, response, jobSeekerId, payload, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(coolingPeriodEntered === "Complete")) return [3 /*break*/, 2];
                    jobSeekerId = params.data._id;
                    payload = {
                        coolingPeriod: coolingPeriodEntered,
                        sendReward: true,
                    };
                    return [4 /*yield*/, manageJobseekerPatch(jobSeekerId, payload)];
                case 1:
                    response = _a.sent();
                    if (response.data.success) {
                        params.setValue(coolingPeriodEntered);
                        params.refreshCell();
                        dispatchNotificationData({
                            enable: true,
                            type: "success",
                            message: "CoolingPeriod is Successfully Updated",
                            duration: 4000,
                        });
                    }
                    else {
                        params.setValue(params.data.coolingPeriod);
                        params.refreshCell();
                        dispatchNotificationData({
                            enable: true,
                            type: "error",
                            message: "CoolingPeriod is Not Updated Please Try Again ",
                            duration: 4000,
                        });
                    }
                    return [3 /*break*/, 6];
                case 2:
                    if (!(coolingPeriodEntered === "")) return [3 /*break*/, 4];
                    jobSeekerId = params.data._id;
                    payload = {
                        coolingPeriod: "N/A",
                        sendReward: false,
                    };
                    return [4 /*yield*/, manageJobseekerPatch(jobSeekerId, payload)];
                case 3:
                    response = _a.sent();
                    if (response.data.success) {
                        params.setValue("N/A");
                        params.refreshCell();
                        setCoolingPeriodEntered("N/A");
                        dispatchNotificationData({
                            enable: true,
                            type: "success",
                            message: "CoolingPeriod is Successfully Scheduled",
                            duration: 4000,
                        });
                    }
                    else {
                        params.setValue(params.data.coolingPeriod);
                        params.refreshCell();
                        dispatchNotificationData({
                            enable: true,
                            type: "error",
                            message: "CoolingPeriod is Not Scheduled Please Try Again ",
                            duration: 4000,
                        });
                    }
                    return [3 /*break*/, 6];
                case 4:
                    jobSeekerId = params.data._id;
                    payload = {
                        coolingPeriod: coolingPeriodEntered,
                        sendReward: false,
                    };
                    return [4 /*yield*/, manageJobseekerPatch(jobSeekerId, payload)];
                case 5:
                    response = _a.sent();
                    if (response.data.success) {
                        params.setValue(coolingPeriodEntered);
                        params.refreshCell();
                        dispatchNotificationData({
                            enable: true,
                            type: "success",
                            message: "CoolingPeriod is Successfully Scheduled",
                            duration: 4000,
                        });
                    }
                    else {
                        params.setValue(params.data.coolingPeriod);
                        params.refreshCell();
                        dispatchNotificationData({
                            enable: true,
                            type: "error",
                            message: "CoolingPeriod is Not Scheduled Please Try Again ",
                            duration: 4000,
                        });
                    }
                    _a.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    }); };
    return (_jsx("div", __assign({ id: containerId }, { children: _jsx(TextField, { id: id, name: elementName, label: "CoolingPeriod", variant: "outlined", value: coolingPeriodEntered, onChange: handleCoolingPeriod, InputProps: {
                endAdornment: (_jsx(Tooltip, __assign({ title: "Update", placement: "top", arrow: true }, { children: _jsx(SendIcon, { fontSize: "small", sx: { color: "#4D6CD9" }, onClick: handleSend }) }))),
            } }) })));
};
var CustomFields = function () {
    return _jsx("div", { children: "CustomFields" });
};
export default CustomFields;
