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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useEffect, useState } from "react";
import { Radio, TextField, RadioGroup, FormControl, FormControlLabel, CircularProgress, Stack, } from "@mui/material";
import { LWD_TEXT, YesNoOptions, NoticeOptions, OFFER_IN_HAND, NOTICE_STATUS, BUYOUT_OPTION, SEEKER_STATUS, NO_OFFER_REASON, WORD_LIMIT_TEXT, NEGOTIABLE_TEXT, NEGOTIABLE_LABEL, JOINING_DATE_TEXT, LATE_JOINING_TEXT, CHANGE_REASON_TEXT, NEGOTIABLE_YES_TEXT, BUYOUT_QUESTION_TEXT, OFFICIAL_NOTICE_PERIOD_TEXT, } from "./JobSeekerProfileFlowConstants";
import "./JobSeekerProfileFlow.css";
import PreviousNextButtons from "../../components/PreviousNextButtons/PreviousNextButtons";
import CurrentOffers from "./CurrentOffers/CurrentOffers";
import { useStyles } from "./JobSeekerProfileFlowStyles";
import Calendar from "../../components/Calendar/Calendar";
import { getJobSeekerProfile, updateJobSeekerProfile, UploadFiles, } from "../../services/FormDataService";
import { ERROR_KEY, SUCCESS_KEY, FORM_SUBMISSION_SUCCESS, WARNING_KEY, OFFER_LETTER, NUMBER_ONLY_REGEX, } from "../../constants";
import { useAppSelector } from "../../services/StoreHooks";
var JobSeekerProfileNoticePeriod = function (props) {
    var classes = useStyles();
    var userDataState = useAppSelector(function (state) { return state.currentUser; });
    var _a = React.useState(""), offerStatus = _a[0], setOfferStatus = _a[1];
    var _b = React.useState(""), joiningDate = _b[0], setJoiningDate = _b[1];
    var _c = React.useState(""), noticePeriod = _c[0], setNoticePeriod = _c[1];
    var _d = React.useState(""), noticeStatus = _d[0], setNoticeStatus = _d[1];
    var _e = React.useState(""), buyoutStatus = _e[0], setBuyoutStatus = _e[1];
    var _f = React.useState(""), lastWorkingDate = _f[0], setLastWorkingDate = _f[1];
    var _g = React.useState(""), negotiablePeriod = _g[0], setNegotiablePeriod = _g[1];
    var _h = React.useState(""), negotiableStatus = _h[0], setNegotiableStatus = _h[1];
    var _j = React.useState(true), currentlyWorking = _j[0], setCurrentlyWorking = _j[1];
    var _k = useState([]), offerData = _k[0], setOfferData = _k[1];
    var _l = useState(""), reasonOfJobChange = _l[0], setReasonOfJobChange = _l[1];
    var _m = useState(""), reasonOfResignation = _m[0], setReasonOfResignation = _m[1];
    var _o = React.useState(false), loader = _o[0], setLoader = _o[1];
    var uploadPayloadBuild = function (files) {
        var _a, _b;
        return {
            documentTypeId: OFFER_LETTER,
            documentPath: "offerLetter/".concat((_a = files[0]) === null || _a === void 0 ? void 0 : _a.path),
            documentName: (_b = files[0]) === null || _b === void 0 ? void 0 : _b.path,
            files: files,
        };
    };
    var buildDetailsPayload = function () {
        return {
            currentlyWorking: currentlyWorking,
            noticeStatus: noticeStatus,
            lastWorkingDate: lastWorkingDate,
            noticePeriod: noticePeriod,
            reasonOfJobChange: reasonOfJobChange,
            negotiableStatus: negotiableStatus,
            buyoutStatus: buyoutStatus,
            offerStatus: offerStatus,
            reasonOfResignation: reasonOfResignation,
            joiningDate: joiningDate,
            offerData: offerData,
            negotiablePeriod: negotiablePeriod,
        };
    };
    var submitNoticePeriodInfo = function () { return __awaiter(void 0, void 0, void 0, function () {
        var profileNoticePeriodMap, date, fileIds_1, uploadFiles, error_1, profileDetailsResponse, error_2;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    setLoader(true);
                    profileNoticePeriodMap = buildDetailsPayload();
                    if (!validateNoticePeriodInfo(profileNoticePeriodMap)) {
                        props.setOpen(true);
                        props.setType(WARNING_KEY);
                        props.setDataMessage("Please enter all Notice Period details");
                        setLoader(false);
                        return [2 /*return*/];
                    }
                    if (profileNoticePeriodMap.lastWorkingDate) {
                        date = new Date();
                        date.setHours(0, 0, 0, 0);
                        if (new Date(profileNoticePeriodMap.lastWorkingDate).getTime() <
                            date.getTime()) {
                            props.setOpen(true);
                            props.setType(WARNING_KEY);
                            props.setDataMessage("Last Working date cannot be past date");
                            setLoader(false);
                            return [2 /*return*/];
                        }
                    }
                    if (!(profileNoticePeriodMap.offerData.length > 0)) return [3 /*break*/, 4];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    fileIds_1 = [];
                    uploadFiles = profileNoticePeriodMap.offerData.filter(function (elt) {
                        var _a;
                        if ((_a = elt.letterFiles[0]) === null || _a === void 0 ? void 0 : _a.name) {
                            return true;
                        }
                        else {
                            fileIds_1.push({
                                employerName: elt.employerName,
                                id: elt.offerDocumentId,
                            });
                        }
                    });
                    return [4 /*yield*/, Promise.all(uploadFiles.map(function (offer) { return __awaiter(void 0, void 0, void 0, function () {
                            var uploadResponse;
                            var _a, _b;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0: return [4 /*yield*/, UploadFiles(uploadPayloadBuild(offer === null || offer === void 0 ? void 0 : offer.letterFiles))];
                                    case 1:
                                        uploadResponse = _c.sent();
                                        fileIds_1.push({
                                            employerName: offer.employerName,
                                            id: (_b = (_a = uploadResponse === null || uploadResponse === void 0 ? void 0 : uploadResponse.data) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.id,
                                        });
                                        return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 2:
                    _b.sent();
                    profileNoticePeriodMap.offerData.forEach(function (offer, index) {
                        var idData = fileIds_1.find(function (files) { return files.employerName === offer.employerName; });
                        profileNoticePeriodMap.offerData[index].offerDocumentId = idData === null || idData === void 0 ? void 0 : idData.id;
                        profileNoticePeriodMap.offerData[index].saveStatus = false;
                        profileNoticePeriodMap.offerData[index].fieldDisabled = false;
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    props.setOpen(true);
                    props.setType(ERROR_KEY);
                    props.setDataMessage(
                    // "File upload failed, cannot process further, please try again"
                    "Invalid format");
                    return [2 /*return*/];
                case 4:
                    _b.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, updateJobSeekerProfile({
                            profileId: props.profileDataId || userDataState.userData.profileId,
                            profileData: { profileNoticePeriodMap: profileNoticePeriodMap, profileLastCompletedStep: "5" },
                        })];
                case 5:
                    profileDetailsResponse = _b.sent();
                    console.log(profileDetailsResponse === null || profileDetailsResponse === void 0 ? void 0 : profileDetailsResponse.data);
                    if ((_a = profileDetailsResponse === null || profileDetailsResponse === void 0 ? void 0 : profileDetailsResponse.data) === null || _a === void 0 ? void 0 : _a.success) {
                        props.setType(SUCCESS_KEY);
                        props.setDataMessage(FORM_SUBMISSION_SUCCESS);
                        props.setOpen(true);
                        props.handleComplete(4);
                        props.handleNext();
                    }
                    return [3 /*break*/, 7];
                case 6:
                    error_2 = _b.sent();
                    console.log(error_2);
                    props.setType(ERROR_KEY);
                    props.setDataMessage(error_2 === null || error_2 === void 0 ? void 0 : error_2.message);
                    props.setOpen(true);
                    return [3 /*break*/, 7];
                case 7:
                    setLoader(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var validateNoticePeriodInfo = function (data) {
        if (data.noticeStatus === "Serving Notice Period") {
            if (!data.lastWorkingDate ||
                !data.reasonOfJobChange ||
                !data.offerStatus ||
                !data.negotiableStatus)
                return false;
            if (data.negotiableStatus === "Yes") {
                if (!data.negotiablePeriod)
                    return false;
            }
            if (data.offerStatus === "Yes") {
                if (offerData.length === 0) {
                    return false;
                }
                else {
                    offerData.forEach(function (row) {
                        if (!row.designation ||
                            !row.joiningDate ||
                            !row.employerName ||
                            !row.joiningLocation)
                            return false;
                    });
                }
            }
            else {
                setOfferData([]);
                if (!data.reasonOfResignation)
                    return false;
            }
        }
        else {
            if (!data.noticePeriod ||
                !data.reasonOfJobChange ||
                !data.negotiableStatus ||
                !data.buyoutStatus)
                return false;
            if (data.negotiableStatus === "Yes") {
                if (!data.negotiablePeriod)
                    return false;
            }
        }
        return true;
    };
    var removeOfferData = function (index) {
        var list = __spreadArray([], offerData, true);
        list.splice(index, 1);
        setOfferData(list);
    };
    useEffect(function () {
        if (props.profileDataId || userDataState.userData.profileId)
            callPrefillData();
    }, []);
    // const fetchCityDetails = async () => {
    //     const cityRawData = await getCityList();
    //     setCitiesArray(cityRawData?.data.split('\n'));
    // }
    var callPrefillData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var profileDataFetched, error_3;
        var _a, _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 2, , 3]);
                    setLoader(true);
                    return [4 /*yield*/, getJobSeekerProfile(props.profileDataId || userDataState.userData.profileId)];
                case 1:
                    profileDataFetched = _e.sent();
                    if ((_b = (_a = profileDataFetched === null || profileDataFetched === void 0 ? void 0 : profileDataFetched.data) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.profileNoticePeriodMap) {
                        patchNoticePeriodDetails((_d = (_c = profileDataFetched === null || profileDataFetched === void 0 ? void 0 : profileDataFetched.data) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.profileNoticePeriodMap);
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _e.sent();
                    console.log(error_3);
                    props.setType(ERROR_KEY);
                    props.setDataMessage("Something went wrong");
                    props.setOpen(true);
                    return [3 /*break*/, 3];
                case 3:
                    setLoader(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var patchNoticePeriodDetails = function (patchData) {
        setBuyoutStatus(patchData.buyoutStatus);
        setNegotiableStatus(patchData.negotiableStatus);
        setNegotiablePeriod(patchData.negotiablePeriod);
        setNoticeStatus(patchData.noticeStatus);
        setReasonOfJobChange(patchData.reasonOfJobChange);
        setOfferStatus(patchData.offerStatus);
        setReasonOfResignation(patchData.reasonOfResignation);
        setNoticePeriod(patchData.noticePeriod);
        setOfferData(function () { return __spreadArray([], patchData.offerData, true); });
        setJoiningDate(patchData.joiningDate);
        setLastWorkingDate(patchData.lastWorkingDate);
    };
    return (_jsx(_Fragment, { children: !loader ? (_jsxs("div", __assign({ className: "job-seeker-profile-content" }, { children: [_jsxs("div", __assign({ className: "notice-details-card" }, { children: [currentlyWorking ? (_jsxs(_Fragment, { children: [_jsx("div", __assign({ className: "experience-card-title" }, { children: _jsxs("span", { children: [NOTICE_STATUS, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }) })), _jsx("div", __assign({ id: "notice-status-radio-container", className: "notice-period-radio" }, { children: _jsx(FormControl, { children: _jsx(RadioGroup, __assign({ id: "notice-status-radio", value: noticeStatus, onChange: function (e) { return setNoticeStatus(e.target.value); } }, { children: NoticeOptions.map(function (option) { return (_jsx(FormControlLabel, { value: option, control: _jsx(Radio, {}), label: option, disabled: !props.hasButtons }, option)); }) })) }) }))] })) : (_jsxs(_Fragment, { children: [_jsx("div", __assign({ className: "experience-card-title" }, { children: _jsxs("span", { children: [SEEKER_STATUS, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }) })), _jsxs("div", __assign({ className: "notice-period-radio" }, { children: [_jsxs("p", { children: [JOINING_DATE_TEXT, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), _jsx(Calendar, { setDate: setJoiningDate, status: true, value: joiningDate, calendarDisabled: !props.hasButtons })] })), _jsxs("div", __assign({ id: "late-joining-textbox-container", className: "job-change-field" }, { children: [_jsxs("p", { children: [LATE_JOINING_TEXT, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), _jsx(TextField, { id: "late-joining-textbox", type: "text", multiline: true, fullWidth: true, rows: 3, disabled: !props.hasButtons, helperText: WORD_LIMIT_TEXT, onChange: function (e) { return console.log("val ", e.target.value); }, InputProps: {
                                                inputProps: {
                                                    maxLength: 1200,
                                                },
                                            } })] }))] })), _jsx("div", __assign({ className: "notice-period-conditional" }, { children: noticeStatus === NoticeOptions[0] ? (_jsxs("div", { children: [_jsxs("p", { children: [LWD_TEXT, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), _jsx(Calendar, { setDate: setLastWorkingDate, status: true, value: lastWorkingDate, calendarDisabled: !props.hasButtons })] })) : noticeStatus === NoticeOptions[1] ? (_jsxs("div", __assign({ id: "official-notice-period-textbox-container" }, { children: [_jsxs("p", { children: [OFFICIAL_NOTICE_PERIOD_TEXT, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), _jsx(TextField, { id: "official-notice-period-textbox", disabled: !props.hasButtons, className: classes.inputField, type: "number", label: OFFICIAL_NOTICE_PERIOD_TEXT, value: noticePeriod, onInput: function (e) {
                                            var regex = NUMBER_ONLY_REGEX;
                                            if (Number(e.target.value) > 180 ||
                                                Number(e.target.value) < 0) {
                                                e.target.value = Math.max(0, parseInt(e.target.value))
                                                    .toString()
                                                    .slice(0, 2);
                                            }
                                            if (!regex.test(e.target.value) && e.target.value !== "")
                                                return false;
                                            setNoticePeriod(e.target.value);
                                        }, size: "small" })] }))) : null })), noticeStatus !== "" ? (_jsxs(React.Fragment, { children: [_jsxs("div", __assign({ id: "job-change-reason-textbox-container", className: "job-change-field" }, { children: [_jsxs("p", { children: [CHANGE_REASON_TEXT, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), _jsx(TextField, { id: "job-change-reason-textbox", required: true, disabled: !props.hasButtons, type: "text", multiline: true, label: CHANGE_REASON_TEXT, fullWidth: true, rows: 3, value: reasonOfJobChange, helperText: WORD_LIMIT_TEXT, onChange: function (e) { return setReasonOfJobChange(e.target.value); }, InputProps: {
                                                inputProps: {
                                                    maxLength: 1200,
                                                },
                                            } })] })), _jsxs("div", __assign({ className: "notice-period-conditional" }, { children: [_jsxs("p", { children: [NEGOTIABLE_TEXT, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), _jsx(FormControl, { children: _jsxs(RadioGroup, __assign({ id: "negotiable-status-radiogroup", value: negotiableStatus, onChange: function (e) { return setNegotiableStatus(e.target.value); } }, { children: [YesNoOptions.map(function (option) { return (_jsx(FormControlLabel, { value: option, control: _jsx(Radio, {}), label: option, disabled: !props.hasButtons }, option)); }), noticeStatus === NoticeOptions[0] ? (_jsx(FormControlLabel, { value: BUYOUT_OPTION, control: _jsx(Radio, {}), label: BUYOUT_OPTION, disabled: !props.hasButtons })) : null] })) })] }))] })) : null, negotiableStatus === YesNoOptions[0] ? (_jsxs("div", __assign({ id: "notice-period-textbox-container", className: "notice-period-conditional" }, { children: [_jsxs("p", { children: [NEGOTIABLE_YES_TEXT, noticeStatus === NoticeOptions[1] ? (_jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))) : null] }), _jsx(TextField, { id: "notice-period-textbox", disabled: !props.hasButtons, className: classes.inputField, type: "number", label: NEGOTIABLE_LABEL, value: negotiablePeriod, onChange: function (e) {
                                        if (JSON.stringify(e.target.value).includes("."))
                                            return false;
                                        var regex = NUMBER_ONLY_REGEX;
                                        if (Number(e.target.value) > 99 ||
                                            Number(e.target.value) < 0) {
                                            e.target.value = Math.max(0, parseInt(e.target.value))
                                                .toString()
                                                .slice(0, 2);
                                        }
                                        if (!regex.test(e.target.value) && e.target.value !== "")
                                            return false;
                                        setNegotiablePeriod(e.target.value);
                                    }, size: "small" })] }))) : null, noticeStatus === NoticeOptions[1] ? (_jsxs("div", __assign({ id: "buyout-status-radiogroup-container", className: "notice-period-conditional" }, { children: [_jsxs("p", { children: [BUYOUT_QUESTION_TEXT, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), _jsx(FormControl, { children: _jsx(RadioGroup, __assign({ id: "buyout-status-radiogroup", value: buyoutStatus, onChange: function (e) { return setBuyoutStatus(e.target.value); } }, { children: YesNoOptions.map(function (option) { return (_jsx(FormControlLabel, { value: option, control: _jsx(Radio, {}), label: option, disabled: !props.hasButtons }, option)); }) })) })] }))) : null, noticeStatus === NoticeOptions[0] || !currentlyWorking ? (_jsxs(React.Fragment, { children: [_jsxs("div", __assign({ id: "offer-status-radiogroup-container", className: "notice-period-conditional" }, { children: [_jsxs("p", { children: [OFFER_IN_HAND, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), _jsx(FormControl, { children: _jsx(RadioGroup, __assign({ id: "offer-status-radiogroup", value: offerStatus, onChange: function (e) { return setOfferStatus(e.target.value); } }, { children: YesNoOptions.map(function (option) { return (_jsx(FormControlLabel, { value: option, control: _jsx(Radio, {}), label: option, disabled: !props.hasButtons }, option)); }) })) })] })), offerStatus === YesNoOptions[1] ? (_jsxs("div", __assign({ id: "noOfferReason-textbox-container", className: "job-change-field" }, { children: [_jsxs("p", { children: [NO_OFFER_REASON, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), _jsx(TextField, { id: "noOfferReason-textbox", required: true, disabled: !props.hasButtons, type: "text", label: NO_OFFER_REASON, multiline: true, fullWidth: true, rows: 3, value: reasonOfResignation, helperText: WORD_LIMIT_TEXT, onChange: function (e) { return setReasonOfResignation(e.target.value); }, InputProps: {
                                                inputProps: {
                                                    maxLength: 1200,
                                                },
                                            }, size: "small" })] }))) : offerStatus === YesNoOptions[0] ? (_jsx("div", { children: _jsx("div", __assign({ className: "outline-div" }, { children: _jsx(CurrentOffers, { disabled: !props.hasButtons, setOfferData: setOfferData, removeOfferData: removeOfferData, setType: props.setType, setOpen: props.setOpen, setDataMessage: props.setDataMessage, prefilData: props.profileDataId ||
                                                userDataState.userData.profileId
                                                ? offerData
                                                : null }) })) })) : null] })) : null] })), props.hasButtons ? (_jsx(PreviousNextButtons, { handleNext: submitNoticePeriodInfo, handleBack: props.handleBack })) : null] }))) : (_jsx(Stack, __assign({ alignItems: "center" }, { children: _jsx(CircularProgress, {}) }))) }));
};
export default JobSeekerProfileNoticePeriod;
