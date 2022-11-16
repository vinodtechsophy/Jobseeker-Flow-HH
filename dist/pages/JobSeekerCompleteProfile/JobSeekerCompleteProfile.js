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
import React, { useEffect, useState } from "react";
import Graph from "../../components/AnalyticsGraph/Graph";
import JobSeekerProfileCard from "../../components/JobSeekerProfile/JobSeekerProfileCard";
import TabWrapper, { TabPanel } from "../../components/TabWrapper/TabWrapper";
import { Box, Typography } from "@mui/material";
import { ERROR_KEY, JOB_SEEKER_COMLETE_PROFILE_TEXT } from "../../constants";
import { getJobSeekerProfile } from "../../services/FormDataService";
import { getJobSeekersDetails } from "../../services/JobSeekerService";
import { useAppSelector } from "../../services/StoreHooks";
import moment from "moment";
var JobSeekerCompleteProfile = function (props) {
    var _a = useState(0), activeTab = _a[0], setActiveTab = _a[1];
    var _b = React.useState(false), loader = _b[0], setLoader = _b[1];
    var _c = useState(""), fullName = _c[0], setFullName = _c[1];
    var _d = useState(""), dob = _d[0], setDob = _d[1];
    var userDataState = useAppSelector(function (state) { return state.currentUser; });
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
                    if ((_a = profileDataFetched === null || profileDataFetched === void 0 ? void 0 : profileDataFetched.data) === null || _a === void 0 ? void 0 : _a.data) {
                        setFullName("".concat((_b = profileDataFetched === null || profileDataFetched === void 0 ? void 0 : profileDataFetched.data) === null || _b === void 0 ? void 0 : _b.data.firstName, " ").concat((_c = profileDataFetched === null || profileDataFetched === void 0 ? void 0 : profileDataFetched.data) === null || _c === void 0 ? void 0 : _c.data.lastName));
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
                    date = profileDataFetched === null || profileDataFetched === void 0 ? void 0 : profileDataFetched.data.data[0].matchedProfileLogsList[0].dateOfBirth;
                    setDob(moment(date).utc().format("DD-MM-YYYY"));
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
        callPrefillData();
    }, []);
    var jobSeekerTabs = [
        {
            title: "Profile Uploading",
            index: 0,
            component: _jsx("div", { children: "" }),
        },
        {
            title: "Full Name : ".concat(fullName),
            index: 1,
            component: _jsx("div", { children: "" }),
        },
        {
            title: "DOB : ".concat(dob, " "),
            index: 2,
            component: _jsx("div", { children: "" }),
        },
        {
            title: "View Profile",
            index: 3,
            component: _jsx("div", { children: "" }),
        },
    ];
    return (_jsx(_Fragment, { children: _jsxs(Box, { children: [_jsxs(Box, { children: [_jsx(Typography, __assign({ variant: "h5", color: "#22C55E", textAlign: "center", padding: "2vw" }, { children: JOB_SEEKER_COMLETE_PROFILE_TEXT.title })), _jsx(Typography, __assign({ variant: "h5", textAlign: "center", padding: ".5vw" }, { children: JOB_SEEKER_COMLETE_PROFILE_TEXT.titleOne })), _jsx(Typography, __assign({ variant: "body2", color: "#474747", textAlign: "center", padding: ".5vw" }, { children: JOB_SEEKER_COMLETE_PROFILE_TEXT.notification1 })), _jsx(Typography, __assign({ variant: "subtitle1", color: "#474747", textAlign: "center", padding: ".5vw" }, { children: JOB_SEEKER_COMLETE_PROFILE_TEXT.notification2 })), _jsx("div", __assign({ style: { padding: "3vw 0 3vw 0" } }, { children: _jsx(JobSeekerProfileCard, { contestId: props.contestId, setActiveStep: props.setActiveStep, handleNotComplete: props.handleNotComplete }) })), _jsxs("div", { children: [_jsx(TabWrapper, { tabIndex: activeTab, setTabIndex: setActiveTab, tabsList: jobSeekerTabs }), jobSeekerTabs.map(function (tab) { return (_jsx(TabPanel, __assign({ value: activeTab, index: tab.index, disablePadding: true }, { children: tab.component }), tab.index)); })] }), _jsxs("div", __assign({ style: { padding: "2vw" } }, { children: [_jsx(Typography, __assign({ variant: "h5", textAlign: "center", padding: ".5vw" }, { children: JOB_SEEKER_COMLETE_PROFILE_TEXT.notification3 })), _jsx(Typography, __assign({ variant: "h5", textAlign: "center", padding: ".5vw" }, { children: JOB_SEEKER_COMLETE_PROFILE_TEXT.notification4 }))] }))] }), _jsxs(Box, __assign({ sx: { padding: "0vw" } }, { children: [_jsx(Typography, __assign({ variant: "h4", textAlign: "center", padding: "3vw" }, { children: JOB_SEEKER_COMLETE_PROFILE_TEXT.alyticsTitle })), _jsx(Graph, { contestId: props.contestId })] }))] }) }));
};
export default JobSeekerCompleteProfile;
