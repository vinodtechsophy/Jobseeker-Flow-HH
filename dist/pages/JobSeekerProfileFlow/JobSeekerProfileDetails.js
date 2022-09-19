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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Select, MenuItem, Checkbox, TextField, InputLabel, FormControl, } from "@mui/material";
import InlineInputs from "../../components/InlineInputs/InlineInputs";
import { CTCDetails, FRESHER_TEXT, TCTC_SUB_TEXT, TOTAL_CTC_TEXT, FIXED_CTC_TEXT, TOTAL_EXP_TEXT, CTC_DETAIL_TEXT, TOTAL_CTC_LABEL, WorkStatusArray, YearMonthDetails, TCTC_PLACEHOLDER, EXPERIENCE_TITLE, WORK_STATUS_TEXT, RELEVANT_EXP_TEXT, VARIABLE_CTC_TEXT, EXPECTED_CTC_TEXT, } from "./JobSeekerProfileFlowConstants";
import "./JobSeekerProfileFlow.css";
import PreviousNextButtons from "../../components/PreviousNextButtons/PreviousNextButtons";
import { updateJobSeekerProfile } from "../../services/FormDataService";
import { useAppSelector, useAppDispatch } from "../../services/StoreHooks";
import { ERROR_KEY, SUCCESS_KEY, FORM_SUBMISSION_SUCCESS, } from "../../constants";
var JobSeekerProfileDetails = function (props) {
    var dispatch = useAppDispatch();
    var userDataState = useAppSelector(function (state) { return state.currentUser; });
    var _a = React.useState(false), freshGraduate = _a[0], setFreshGraduate = _a[1];
    var _b = React.useState(""), workStatus = _b[0], setWorkStatus = _b[1];
    var _c = React.useState(""), totalCtc = _c[0], setTotalCtc = _c[1];
    var _d = React.useState({ totalExperienceYears: "", totalExperienceMonths: "" }), totalExperience = _d[0], setTotalExperience = _d[1];
    var _e = React.useState({ relevantExperienceYears: "", relevantExperienceMonths: "" }), relevantExperience = _e[0], setRelevantExperience = _e[1];
    var _f = React.useState({ fixedCtcLakh: "", fixedCtcThousand: "" }), fixedCtc = _f[0], setFixedCtc = _f[1];
    var _g = React.useState({ variableCtcLakh: "", variableCtcThousand: "" }), variableCtc = _g[0], setVariableCtc = _g[1];
    var _h = React.useState({ expectedCtcLakh: "", expectedCtcThousand: "" }), expectedCtc = _h[0], setExpectedCtc = _h[1];
    var handleTotalExperience = function (value, index) {
        if (index === 0 && value)
            setTotalExperience({
                totalExperienceYears: value,
                totalExperienceMonths: totalExperience.totalExperienceMonths,
            });
        else if (index === 1 && value)
            setTotalExperience({
                totalExperienceYears: totalExperience.totalExperienceYears,
                totalExperienceMonths: value,
            });
    };
    var handleRelevantExperience = function (value, index) {
        if (index === 0 && value)
            setRelevantExperience({
                relevantExperienceYears: value,
                relevantExperienceMonths: relevantExperience.relevantExperienceMonths,
            });
        else if (index === 1 && value)
            setRelevantExperience({
                relevantExperienceYears: relevantExperience.relevantExperienceYears,
                relevantExperienceMonths: value,
            });
    };
    var handleFixedCtc = function (value, index) {
        if (index === 0 && value)
            setFixedCtc({
                fixedCtcLakh: value,
                fixedCtcThousand: fixedCtc.fixedCtcThousand,
            });
        else if (index === 1 && value)
            setFixedCtc({
                fixedCtcLakh: fixedCtc.fixedCtcLakh,
                fixedCtcThousand: value,
            });
    };
    var handleVariableCtc = function (value, index) {
        if (index === 0 && value)
            setVariableCtc({
                variableCtcLakh: value,
                variableCtcThousand: variableCtc.variableCtcThousand,
            });
        else if (index === 1 && value)
            setVariableCtc({
                variableCtcLakh: variableCtc.variableCtcLakh,
                variableCtcThousand: value,
            });
    };
    var handleExpectedCtc = function (value, index) {
        if (index === 0 && value)
            setExpectedCtc({
                expectedCtcLakh: value,
                expectedCtcThousand: expectedCtc.expectedCtcThousand,
            });
        else if (index === 1 && value)
            setExpectedCtc({
                expectedCtcLakh: expectedCtc.expectedCtcLakh,
                expectedCtcThousand: value,
            });
    };
    var submitDetails = function () { return __awaiter(void 0, void 0, void 0, function () {
        var profileDetailsMap, profileDetailsResponse, error_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    profileDetailsMap = buildDetailsPayload();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, updateJobSeekerProfile({
                            profileId: userDataState.userData.profileId,
                            profileData: { profileDetailsMap: profileDetailsMap },
                        })];
                case 2:
                    profileDetailsResponse = _b.sent();
                    console.log(profileDetailsResponse === null || profileDetailsResponse === void 0 ? void 0 : profileDetailsResponse.data);
                    if ((_a = profileDetailsResponse === null || profileDetailsResponse === void 0 ? void 0 : profileDetailsResponse.data) === null || _a === void 0 ? void 0 : _a.success) {
                        dispatchWorkStatus(workStatus);
                        props.setType(SUCCESS_KEY);
                        props.setDataMessage(FORM_SUBMISSION_SUCCESS);
                        props.setOpen(true);
                        props.handleComplete(2);
                        props.handleNext();
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    console.log(error_1);
                    props.setType(ERROR_KEY);
                    props.setDataMessage(error_1 === null || error_1 === void 0 ? void 0 : error_1.message);
                    props.setOpen(true);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var buildDetailsPayload = function () {
        return {
            totalCtc: totalCtc,
            expectedCtc: expectedCtc,
            fixedCtc: fixedCtc,
            variableCtc: variableCtc,
            totalExperience: totalExperience,
            relevantExperience: relevantExperience,
            freshGraduate: freshGraduate.toString(),
            workStatus: workStatus,
        };
    };
    var dispatchWorkStatus = function (workStatus) {
        dispatch({
            type: "USER_ADD",
            data: {
                userData: __assign(__assign({}, userDataState.userData), { workStatus: workStatus }),
                userId: userDataState.userId,
            },
        });
    };
    return (_jsxs("div", __assign({ className: "job-seeker-profile-content" }, { children: [_jsx("p", __assign({ className: "step-content-title-text" }, { children: EXPERIENCE_TITLE })), _jsxs("div", __assign({ className: "experience-details-card" }, { children: [_jsxs("div", __assign({ className: "experience-card-title" }, { children: [_jsx("div", { children: _jsxs("span", { children: [TOTAL_EXP_TEXT, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }) }), _jsxs("div", { children: [_jsx("span", { children: FRESHER_TEXT }), _jsx(Checkbox, { disabled: !props.hasButtons, checked: freshGraduate, onChange: function (e) { var _a; return setFreshGraduate((_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.checked); }, inputProps: { "aria-label": "controlled" } })] })] })), _jsx(InlineInputs, { InlineInputsArray: YearMonthDetails, disabled: !props.hasButtons, setValues: handleTotalExperience }), _jsx(InlineInputs, { InlineInputsArray: YearMonthDetails, InlineInputTitle: RELEVANT_EXP_TEXT, disabled: !props.hasButtons, setValues: handleRelevantExperience })] })), _jsx("div", __assign({ className: "generic-container" }, { children: _jsxs("div", __assign({ className: "inline-div" }, { children: [_jsx("div", { children: _jsxs("p", __assign({ className: "step-content-title-text" }, { children: [" ", WORK_STATUS_TEXT, " ", _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] })) }), _jsx("div", __assign({ className: "work-status-select" }, { children: _jsxs(FormControl, __assign({ sx: { minWidth: 250 } }, { children: [_jsx(InputLabel, __assign({ id: "demo-simple-select-helper-label" }, { children: WORK_STATUS_TEXT })), _jsx(Select, __assign({ disabled: !props.hasButtons, value: workStatus, label: WORK_STATUS_TEXT, onChange: function (e) { return setWorkStatus(e.target.value); } }, { children: WorkStatusArray.map(function (item) { return (_jsx(MenuItem, __assign({ value: item }, { children: item }), item)); }) }))] })) }))] })) })), _jsxs("div", __assign({ className: "conditional-container" }, { children: [_jsx("div", { children: _jsxs("p", __assign({ className: "ctc-details-text" }, { children: [" ", CTC_DETAIL_TEXT] })) }), _jsx(InlineInputs, { InlineInputsArray: CTCDetails, InlineInputTitle: FIXED_CTC_TEXT, disabled: !props.hasButtons, setValues: handleFixedCtc }), _jsx(InlineInputs, { InlineInputsArray: CTCDetails, InlineInputTitle: VARIABLE_CTC_TEXT, disabled: !props.hasButtons, setValues: handleVariableCtc }), _jsxs("div", { children: [_jsx("div", __assign({ className: "experience-card-title" }, { children: _jsx("div", { children: _jsx("p", { children: TOTAL_CTC_TEXT }) }) })), _jsxs("div", __assign({ className: "inline-div" }, { children: [_jsx(TextField, { disabled: !props.hasButtons, type: "text", onChange: function (e) { return setTotalCtc(e.target.value); }, label: TOTAL_CTC_LABEL, placeholder: TCTC_PLACEHOLDER, InputProps: {
                                            inputProps: {
                                                maxLength: 12,
                                            },
                                        }, size: "small" }), _jsx("div", __assign({ className: "tctc-text" }, { children: _jsx("span", { children: TCTC_SUB_TEXT }) }))] }))] })] })), _jsxs("div", __assign({ className: "generic-container" }, { children: [_jsx("div", __assign({ className: "expected-ctc" }, { children: _jsxs("p", __assign({ className: "step-content-title-text" }, { children: [" ", EXPECTED_CTC_TEXT, " ", _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] })) })), _jsx("div", __assign({ className: "experience-details-card" }, { children: _jsx(InlineInputs, { InlineInputsArray: CTCDetails, disabled: !props.hasButtons, setValues: handleExpectedCtc }) }))] })), props.hasButtons ? (_jsx(PreviousNextButtons, { handleNext: submitDetails, handleBack: props.handleBack })) : null] })));
};
export default JobSeekerProfileDetails;
