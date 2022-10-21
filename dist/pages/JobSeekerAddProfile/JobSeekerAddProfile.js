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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useEffect, useRef, useState, useMemo, useCallback, } from "react";
import { ERROR_KEY, TEMPLATE_BUTTON } from "../../constants";
import { Typography, Button, Grid, Divider, Checkbox, FormControlLabel, } from "@mui/material";
import JobSeekerTempleteButton from "../../components/JobSeekerProfile/JobSeekerTempleteButton";
import "../JobSeekerBaseStyles.css";
import { LISTING_GENERIC_HEADERS } from "./AddProfileColumnHeaders";
import GridItem from "../GridItem/GridItem";
import { useAppSelector, useAppDispatch } from "../../services/StoreHooks";
import Notification from "../../components/Notification";
import { initialAlertState } from "../../modules/notificationState";
import RefreshIcon from "@mui/icons-material/Refresh";
import { createJobSeekerProfile, getJobSeekerProfile, } from "../../services/FormDataService";
import { getJobSeekersDetails } from "../../services/JobSeekerService";
import moment from "moment";
var JobSeekerAddProfile = function (props) {
    var dispatch = useAppDispatch();
    var gridRef = useRef();
    var userDataState = useAppSelector(function (state) { return state.currentUser; });
    var notifyDataState = useAppSelector(function (state) { return state.notificationAlert; });
    var _a = useState(LISTING_GENERIC_HEADERS), columnDefs = _a[0], setColumnDefs = _a[1];
    var _b = useState([]), selectedRows = _b[0], setSelectedRows = _b[1];
    var _c = React.useState(false), loader = _c[0], setLoader = _c[1];
    var _d = useState("No data"), firstName = _d[0], setFirstName = _d[1];
    var _e = useState("No data"), lastName = _e[0], setLastName = _e[1];
    var _f = useState("No data"), dateOfBirth = _f[0], setDateOfBirth = _f[1];
    var _g = useState("No data"), emaiId = _g[0], setEmaiId = _g[1];
    var _h = useState("No data"), mobileNumber = _h[0], setMobileNumber = _h[1];
    var _j = useState("No Data"), panNumber = _j[0], setPanNumber = _j[1];
    var fulfillUpload = function (data) {
        callResumeUpload(data === null || data === void 0 ? void 0 : data.profileLogId);
    };
    var callResumeUpload = function (profileLogId) { return __awaiter(void 0, void 0, void 0, function () {
        var seekerProfile;
        var _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0: return [4 /*yield*/, createJobSeekerProfile({
                        profileLogId: profileLogId,
                        profileData: {
                            profileLastCompletedStep: "1",
                        },
                    })];
                case 1:
                    seekerProfile = _f.sent();
                    if ((_a = seekerProfile === null || seekerProfile === void 0 ? void 0 : seekerProfile.data) === null || _a === void 0 ? void 0 : _a.success) {
                        dispatchProfileId((_c = (_b = seekerProfile === null || seekerProfile === void 0 ? void 0 : seekerProfile.data) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.profileId, (_e = (_d = seekerProfile === null || seekerProfile === void 0 ? void 0 : seekerProfile.data) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.jobSeekerId);
                        props.handleComplete(0);
                        props.handleNext();
                    }
                    else {
                        console.log(seekerProfile);
                        props.setType(ERROR_KEY);
                        props.setDataMessage("Something went wrong");
                        props.setOpen(true);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var dispatchProfileId = function (profileId, jobSeekerId) {
        dispatch({
            type: "USER_ADD",
            data: {
                userData: __assign(__assign({}, userDataState.userData), { profileId: profileId, jobSeekerId: jobSeekerId }),
                userId: userDataState.userId,
            },
        });
    };
    var resetNotificationData = function () {
        dispatch({
            type: "SEND_ALERT",
            data: {
                enable: initialAlertState.enable,
                type: initialAlertState.type,
                message: initialAlertState.message,
                duration: initialAlertState.duration,
            },
        });
    };
    var r1 = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        interviewed: "no",
        pdcStatus: null,
        profileLogId: "",
        dob: "",
        lastFiveDigitOfPan: "",
        fdcStatus: null,
        uploadProfile: "",
        contestId: props.contestId,
    };
    var r2 = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        interviewed: "no",
        pdcStatus: null,
        profileLogId: "",
        dob: "",
        lastFiveDigitOfPan: "",
        fdcStatus: null,
        uploadProfile: "",
        contestId: props.contestId,
    };
    var r3 = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        interviewed: "no",
        pdcStatus: null,
        profileLogId: "",
        dob: "",
        lastFiveDigitOfPan: "",
        fdcStatus: null,
        uploadProfile: "",
        contestId: props.contestId,
    };
    var r4 = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        interviewed: "no",
        pdcStatus: null,
        profileLogId: "",
        dob: "",
        lastFiveDigitOfPan: "",
        fdcStatus: null,
        uploadProfile: "",
        contestId: props.contestId,
    };
    var r5 = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        interviewed: "no",
        pdcStatus: null,
        profileLogId: "",
        dob: "",
        lastFiveDigitOfPan: "",
        fdcStatus: null,
        uploadProfile: "",
        contestId: props.contestId,
    };
    // let row = [r1, r2, r3, r4, r5];
    var row = [__assign({}, r1), __assign({}, r2), __assign({}, r3), __assign({}, r4), __assign({}, r5)];
    var defaultColDef = useMemo(function () {
        return {
            flex: 1,
            minWidth: 170,
            maxWidth: 250,
            sortable: true,
            floatingFilter: true,
            enableRowGroup: true,
            enablePivot: true,
            enableValue: true,
            resizable: true,
            suppressKeyboardEvent: function (params) { return true; },
            cellStyle: { borderRightColor: "#DFE5FF" },
        };
    }, []);
    var onSelectionChanged = useCallback(function () {
        if (gridRef.current) {
            var rowSelection = gridRef.current.api.getSelectedRows();
            setSelectedRows(rowSelection);
        }
    }, []);
    var onCellValueChanged = useCallback(function (event) {
        var _a, _b, _c, _d;
        // console.log(event);
        // console.log(gridRef.current);
        if (event.column.colDef.field == "pdcStatus") {
            if (event.oldValue != event.newValue) {
                (_b = (_a = gridRef === null || gridRef === void 0 ? void 0 : gridRef.current) === null || _a === void 0 ? void 0 : _a.api) === null || _b === void 0 ? void 0 : _b.refreshCells({
                    force: true,
                    suppressFlash: true,
                    columns: ["dob", "lastFiveDigitOfPan", "fdcStatus"],
                });
            }
        }
        if (event.column.colDef.field == "fdcStatus") {
            if (event.oldValue != event.newValue) {
                (_d = (_c = gridRef === null || gridRef === void 0 ? void 0 : gridRef.current) === null || _c === void 0 ? void 0 : _c.api) === null || _d === void 0 ? void 0 : _d.refreshCells({
                    force: true,
                    suppressFlash: true,
                    columns: ["uploadProfile"],
                });
            }
        }
    }, []);
    var clearTable = function () {
        var _a;
        // console.log(gridRef.current);
        row = [__assign({}, r1), __assign({}, r2), __assign({}, r3), __assign({}, r4), __assign({}, r5)];
        (_a = gridRef.current) === null || _a === void 0 ? void 0 : _a.api.setRowData(row);
        // console.log(gridRef.current);
    };
    var labelValuePairForShowData = function (key, value) {
        return (_jsxs(Grid, __assign({ container: true, spacing: 2, sx: { margin: "1vw" } }, { children: [_jsx(Grid, __assign({ xs: 4 }, { children: _jsx(Typography, __assign({ variant: "h6", gutterBottom: true }, { children: key })) })), _jsx(Grid, __assign({ xs: 4 }, { children: _jsx(Typography, __assign({ variant: "h6", gutterBottom: true, sx: { fontWeight: "700" } }, { children: value })) }))] })));
    };
    var callPrefillData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var profileDataFetched, error_1, profileDataFetched, date, error_2;
        var _a, _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 2, , 3]);
                    setLoader(true);
                    return [4 /*yield*/, getJobSeekerProfile(props.profileDataId || userDataState.userData.profileId)];
                case 1:
                    profileDataFetched = _e.sent();
                    console.log(profileDataFetched);
                    if ((_a = profileDataFetched === null || profileDataFetched === void 0 ? void 0 : profileDataFetched.data) === null || _a === void 0 ? void 0 : _a.data) {
                        setFirstName((_b = profileDataFetched === null || profileDataFetched === void 0 ? void 0 : profileDataFetched.data) === null || _b === void 0 ? void 0 : _b.data.firstName);
                        setLastName((_c = profileDataFetched === null || profileDataFetched === void 0 ? void 0 : profileDataFetched.data) === null || _c === void 0 ? void 0 : _c.data.lastName);
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _e.sent();
                    console.log(error_1);
                    props.setType(ERROR_KEY);
                    props.setDataMessage("Something went wrong");
                    props.setOpen(true);
                    return [3 /*break*/, 3];
                case 3:
                    _e.trys.push([3, 5, , 6]);
                    setLoader(true);
                    return [4 /*yield*/, getJobSeekersDetails("", props.profileDataId || userDataState.userData.profileId)];
                case 4:
                    profileDataFetched = _e.sent();
                    console.log(profileDataFetched);
                    date = profileDataFetched === null || profileDataFetched === void 0 ? void 0 : profileDataFetched.data.data[0].matchedProfileLogsList[0].dateOfBirth;
                    setDateOfBirth(moment(date).utc().format("DD-MM-YYYY"));
                    setMobileNumber(profileDataFetched === null || profileDataFetched === void 0 ? void 0 : profileDataFetched.data.data[0].matchedProfileLogsList[0].mobileNumber);
                    setEmaiId(profileDataFetched === null || profileDataFetched === void 0 ? void 0 : profileDataFetched.data.data[0].matchedProfileLogsList[0].emailId);
                    setPanNumber(profileDataFetched === null || profileDataFetched === void 0 ? void 0 : profileDataFetched.data.data[0].matchedProfileLogsList[0].panNumber);
                    console.log((_d = profileDataFetched === null || profileDataFetched === void 0 ? void 0 : profileDataFetched.data) === null || _d === void 0 ? void 0 : _d[0]);
                    return [3 /*break*/, 6];
                case 5:
                    error_2 = _e.sent();
                    console.log(error_2);
                    props.setType(ERROR_KEY);
                    props.setDataMessage("Something went wrong");
                    props.setOpen(true);
                    return [3 /*break*/, 6];
                case 6:
                    setLoader(false);
                    return [2 /*return*/];
            }
        });
    }); };
    useEffect(function () {
        if (!props.hasButtons)
            callPrefillData();
    }, []);
    return (_jsx(_Fragment, { children: !props.hasButtons ? (_jsxs("div", { children: [_jsx(Typography, __assign({ variant: "h5", gutterBottom: true }, { children: "Pre-duplication Check" })), labelValuePairForShowData("First Name", firstName), labelValuePairForShowData("Last Name", lastName), labelValuePairForShowData("EmailId", emaiId), labelValuePairForShowData("Mobile No.", mobileNumber), _jsx(FormControlLabel, { control: _jsx(Checkbox, { checked: true, sx: {
                            paddingLeft: "1.5vw",
                            color: "#22C55E",
                            "&.Mui-checked": {
                                color: "#22C55E",
                            },
                        } }), label: "Pre-Duplication Check sucessfully passed  ", sx: { color: "#22C55E" } }), _jsx("div", __assign({ style: { padding: "1vw" } }, { children: _jsx(Divider, {}) })), _jsx(Typography, __assign({ variant: "h5", gutterBottom: true }, { children: "Duplication Check" })), labelValuePairForShowData("Date Of Birth", dateOfBirth), labelValuePairForShowData("Last 5 digits of PAN ", panNumber), _jsx(FormControlLabel, { control: _jsx(Checkbox, { checked: true, sx: {
                            paddingLeft: "1.5vw",
                            color: "#22C55E",
                            "&.Mui-checked": {
                                color: "#22C55E",
                            },
                        } }), label: "Duplication Check sucessfully passed ", sx: { color: "#22C55E" } })] })) : (_jsx("div", __assign({ className: "form-encapsulate" }, { children: _jsxs("div", __assign({ className: "form-card-holder" }, { children: [notifyDataState && (_jsx(Notification, { open: notifyDataState.enable, type: notifyDataState.type, message: notifyDataState.message, duration: notifyDataState.duration, setOpen: function () { return resetNotificationData(); } })), _jsxs("div", { children: [_jsx("div", { children: _jsx(Typography, __assign({ variant: "h4", gutterBottom: true, component: "div", color: "black", margin: "2vw 1vw 0vw 2vw" }, { children: "For Bulk Duplication Check" })) }), _jsx("div", __assign({ style: { margin: "1vw 1vw 1vw 1vw" } }, { children: TEMPLATE_BUTTON.map(function (button) { return (_jsx(JobSeekerTempleteButton, { fileName: button.iconFileName, title: button.title }, button.title)); }) })), _jsx("div", { children: _jsxs(Typography, __assign({ variant: "h6", gutterBottom: true, component: "div", color: "black", display: "flex", justifyContent: "center" }, { children: [_jsx("hr", { className: "line" }), "( OR )", _jsx("hr", { className: "line" })] })) })] }), _jsx("div", { children: _jsx(Typography, __assign({ variant: "h4", gutterBottom: true, component: "div", color: "black", margin: "2vw 1vw 2vw 2vw" }, { children: "Enter the Details Manually" })) }), _jsx("div", __assign({ style: { marginLeft: "1vw" } }, { children: _jsx(Grid, __assign({ container: true, spacing: 3 }, { children: _jsx(Grid, __assign({ item: true, xs: 12 }, { children: _jsx("div", __assign({ className: "forms-button-container" }, { children: _jsx("div", { children: _jsxs(Button, __assign({ variant: "outlined", className: "save-draft-button", onClick: function () { return clearTable(); } }, { children: [_jsx(RefreshIcon, { sx: { transform: "rotate(260deg)" }, className: "generic-icon" }), "\u00A0", "\u00A0", "Clear Table"] })) }) })) })) })) })), _jsx("div", __assign({ style: { marginLeft: "2vw" } }, { children: _jsx(GridItem, { gridRef: gridRef, rowData: row, columnDefs: columnDefs, defaultColDef: defaultColDef, suppressRowClickSelection: true, groupSelectsChildren: true, rowSelection: "multiple", rowGroupPanelShow: "always", pivotPanelShow: "always", enableRangeSelection: true, pagination: false, onSelectionChanged: onSelectionChanged, onCellValueChanged: onCellValueChanged, fulfillUpload: fulfillUpload }) }))] })) }))) }));
};
export default JobSeekerAddProfile;
