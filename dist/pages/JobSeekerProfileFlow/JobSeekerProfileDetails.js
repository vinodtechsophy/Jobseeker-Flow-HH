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
import React, { useEffect } from "react";
import { Select, MenuItem, Checkbox, TextField, InputLabel, FormControl, CircularProgress, Stack, } from "@mui/material";
import InlineInputs from "../../components/InlineInputs/InlineInputs";
import { CTCDetails, FRESHER_TEXT, TCTC_SUB_TEXT, TOTAL_CTC_TEXT, FIXED_CTC_TEXT, TOTAL_EXP_TEXT, CTC_DETAIL_TEXT, TOTAL_CTC_LABEL, WorkStatusArray, YearMonthDetails, TCTC_PLACEHOLDER, EXPERIENCE_TITLE, WORK_STATUS_TEXT, RELEVANT_EXP_TEXT, VARIABLE_CTC_TEXT, EXPECTED_CTC_TEXT, } from "./JobSeekerProfileFlowConstants";
import "./JobSeekerProfileFlow.css";
import PreviousNextButtons from "../../components/PreviousNextButtons/PreviousNextButtons";
import { getJobSeekerProfile, updateJobSeekerProfile, } from "../../services/FormDataService";
import { useAppSelector, useAppDispatch } from "../../services/StoreHooks";
import { ERROR_KEY, SUCCESS_KEY, FORM_SUBMISSION_SUCCESS, EXPEXTED_CTC_DET, WARNING_KEY, } from "../../constants";
var JobSeekerProfileDetails = function (props) {
    var dispatch = useAppDispatch();
    var userDataState = useAppSelector(function (state) { return state.currentUser; });
    // const activeTabState = useAppSelector((state) => state.tabsState);
    var _a = React.useState(false), freshGraduate = _a[0], setFreshGraduate = _a[1];
    var _b = React.useState(false), loader = _b[0], setLoader = _b[1];
    var _c = React.useState(""), workStatus = _c[0], setWorkStatus = _c[1];
    var _d = React.useState(""), totalCtc = _d[0], setTotalCtc = _d[1];
    var _e = React.useState({ totalExperienceYears: "", totalExperienceMonths: "" }), totalExperience = _e[0], setTotalExperience = _e[1];
    var _f = React.useState({ relevantExperienceYears: "", relevantExperienceMonths: "" }), relevantExperience = _f[0], setRelevantExperience = _f[1];
    var _g = React.useState({ fixedCtcLakh: "", fixedCtcThousand: "" }), fixedCtc = _g[0], setFixedCtc = _g[1];
    var _h = React.useState({ variableCtcLakh: "", variableCtcThousand: "" }), variableCtc = _h[0], setVariableCtc = _h[1];
    var _j = React.useState({ expectedCtcLakh: "", expectedCtcThousand: "" }), expectedCtc = _j[0], setExpectedCtc = _j[1];
    // useEffect(() => {
    //   props.handleComplete(0);
    //   props.handleComplete(1);
    // }, [activeTabState.activeStep]);
    var handleTotalExperience = function (value, index) {
        if (index === 0)
            setTotalExperience({
                totalExperienceYears: value ? value : "0",
                totalExperienceMonths: totalExperience.totalExperienceMonths,
            });
        else if (index === 1)
            setTotalExperience({
                totalExperienceYears: totalExperience.totalExperienceYears,
                totalExperienceMonths: value ? value : "0",
            });
    };
    var handleRelevantExperience = function (value, index) {
        if (index === 0)
            setRelevantExperience({
                relevantExperienceYears: value ? value : "0",
                relevantExperienceMonths: relevantExperience.relevantExperienceMonths,
            });
        else if (index === 1)
            setRelevantExperience({
                relevantExperienceYears: relevantExperience.relevantExperienceYears,
                relevantExperienceMonths: value ? value : "0",
            });
    };
    var handleFixedCtc = function (value, index) {
        if (index === 0) {
            setFixedCtc({
                fixedCtcLakh: value,
                fixedCtcThousand: fixedCtc.fixedCtcThousand,
            });
            handleTotalCtc(value ? value : "0", "", "", "");
        }
        else if (index === 1) {
            setFixedCtc({
                fixedCtcLakh: fixedCtc.fixedCtcLakh,
                fixedCtcThousand: value,
            });
            handleTotalCtc("", value ? value : "0", "", "");
        }
    };
    var handleVariableCtc = function (value, index) {
        if (index === 0) {
            setVariableCtc({
                variableCtcLakh: value,
                variableCtcThousand: variableCtc.variableCtcThousand,
            });
            handleTotalCtc("", "", value ? value : "0", "");
        }
        else if (index === 1) {
            setVariableCtc({
                variableCtcLakh: variableCtc.variableCtcLakh,
                variableCtcThousand: value,
            });
            handleTotalCtc("", "", "", value ? value : "0");
        }
    };
    var handleTotalCtc = function (fL, fT, vL, vT) {
        setTotalCtc(((parseInt(fL ? fL : fixedCtc.fixedCtcLakh ? fixedCtc.fixedCtcLakh : "0") +
            parseInt(vL
                ? vL
                : variableCtc.variableCtcLakh
                    ? variableCtc.variableCtcLakh
                    : "0")) *
            100000 +
            (parseInt(fT ? fT : fixedCtc.fixedCtcThousand ? fixedCtc.fixedCtcThousand : "0") +
                parseInt(vT
                    ? vT
                    : variableCtc.variableCtcThousand
                        ? variableCtc.variableCtcThousand
                        : "0")) *
                1000).toString());
    };
    var handleExpectedCtc = function (value, index) {
        if (index === 0)
            setExpectedCtc({
                expectedCtcLakh: value ? value : "0",
                expectedCtcThousand: expectedCtc.expectedCtcThousand,
            });
        else if (index === 1)
            setExpectedCtc({
                expectedCtcLakh: expectedCtc.expectedCtcLakh,
                expectedCtcThousand: value ? value : "0",
            });
    };
    var validateExperience = function (profileDetails) {
        return (parseInt(profileDetails.totalExperience.totalExperienceYears
            ? profileDetails.totalExperience.totalExperienceYears
            : "0") *
            12 +
            parseInt(profileDetails.totalExperience.totalExperienceMonths
                ? profileDetails.totalExperience.totalExperienceMonths
                : "0") <
            parseInt(profileDetails.relevantExperience.relevantExperienceYears
                ? profileDetails.relevantExperience.relevantExperienceYears
                : "0") *
                12 +
                parseInt(profileDetails.relevantExperience.relevantExperienceMonths
                    ? profileDetails.relevantExperience.relevantExperienceMonths
                    : "0"));
    };
    var validateCtc = function (expected) {
        return (parseInt(totalCtc) >=
            parseInt(expected.expectedCtcLakh) * 100000 +
                parseInt(expected.expectedCtcThousand ? expected.expectedCtcThousand : "0") *
                    1000);
    };
    var checkExperienceDetails = function (profileDetailsMap) {
        return (profileDetailsMap.workStatus != "Fresh Graduate" &&
            (((parseInt(profileDetailsMap.totalExperience.totalExperienceYears) ==
                0 ||
                !profileDetailsMap.totalExperience.totalExperienceYears) &&
                (parseInt(profileDetailsMap.totalExperience.totalExperienceMonths) ==
                    0 ||
                    !profileDetailsMap.totalExperience.totalExperienceMonths)) ||
                ((parseInt(profileDetailsMap.relevantExperience.relevantExperienceYears) == 0 ||
                    !profileDetailsMap.relevantExperience.relevantExperienceYears) &&
                    (parseInt(profileDetailsMap.relevantExperience.relevantExperienceMonths) == 0 ||
                        !profileDetailsMap.relevantExperience.relevantExperienceMonths))));
    };
    var submitDetails = function () { return __awaiter(void 0, void 0, void 0, function () {
        var profileDetailsMap, profileDetailsResponse, error_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    setLoader(true);
                    profileDetailsMap = buildDetailsPayload();
                    if (!(profileDetailsMap.expectedCtc.expectedCtcLakh &&
                        parseInt(profileDetailsMap.expectedCtc.expectedCtcLakh) != 0)) return [3 /*break*/, 10];
                    if (!profileDetailsMap.workStatus) return [3 /*break*/, 8];
                    if (!checkExperienceDetails(profileDetailsMap)) return [3 /*break*/, 1];
                    props.setType(WARNING_KEY);
                    props.setDataMessage("Please fill Experience Details");
                    props.setOpen(true);
                    return [3 /*break*/, 7];
                case 1:
                    if (!((profileDetailsMap.workStatus == WorkStatusArray[0] ||
                        profileDetailsMap.workStatus == WorkStatusArray[1]) &&
                        validateExperience(profileDetailsMap))) return [3 /*break*/, 2];
                    props.setType(WARNING_KEY);
                    props.setDataMessage("Relevant Experience must not exceed Total Experience");
                    props.setOpen(true);
                    return [3 /*break*/, 7];
                case 2:
                    if (!((profileDetailsMap.workStatus == WorkStatusArray[0] ||
                        profileDetailsMap.workStatus == WorkStatusArray[1]) &&
                        (!profileDetailsMap.fixedCtc.fixedCtcLakh ||
                            parseInt(profileDetailsMap.fixedCtc.fixedCtcLakh) == 0 ||
                            !profileDetailsMap.variableCtc.variableCtcLakh ||
                            parseInt(profileDetailsMap.variableCtc.variableCtcLakh) == 0))) return [3 /*break*/, 3];
                    props.setType(WARNING_KEY);
                    props.setDataMessage("Please fill Current CTC details");
                    props.setOpen(true);
                    return [3 /*break*/, 7];
                case 3:
                    if (!(profileDetailsMap.workStatus != "Fresh Graduate" &&
                        validateCtc(profileDetailsMap.expectedCtc))) return [3 /*break*/, 4];
                    props.setType(WARNING_KEY);
                    props.setDataMessage("Expected CTC must be greater than Total CTC");
                    props.setOpen(true);
                    return [3 /*break*/, 7];
                case 4:
                    _b.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, updateJobSeekerProfile({
                            profileId: props.profileDataId || userDataState.userData.profileId,
                            profileData: { profileDetailsMap: profileDetailsMap, profileLastCompletedStep: "3" },
                        })];
                case 5:
                    profileDetailsResponse = _b.sent();
                    if ((_a = profileDetailsResponse === null || profileDetailsResponse === void 0 ? void 0 : profileDetailsResponse.data) === null || _a === void 0 ? void 0 : _a.success) {
                        dispatchWorkStatus(workStatus);
                        props.setType(SUCCESS_KEY);
                        props.setDataMessage(FORM_SUBMISSION_SUCCESS);
                        props.setOpen(true);
                        props.handleComplete(2);
                        props.handleNext();
                    }
                    return [3 /*break*/, 7];
                case 6:
                    error_1 = _b.sent();
                    console.log(error_1);
                    props.setType(ERROR_KEY);
                    props.setDataMessage(error_1 === null || error_1 === void 0 ? void 0 : error_1.message);
                    props.setOpen(true);
                    return [3 /*break*/, 7];
                case 7: return [3 /*break*/, 9];
                case 8:
                    props.setType(WARNING_KEY);
                    props.setDataMessage("Please select Work Status");
                    props.setOpen(true);
                    _b.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    props.setType(WARNING_KEY);
                    props.setDataMessage(EXPEXTED_CTC_DET);
                    props.setOpen(true);
                    _b.label = 11;
                case 11:
                    setLoader(false);
                    return [2 /*return*/];
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
            currentlyWorking: workStatus === WorkStatusArray[0] ? "Yes" : "No",
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
    useEffect(function () {
        if (props.profileDataId || userDataState.userData.profileId)
            callPrefillData();
    }, []);
    var callPrefillData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var profileDataFetched, error_2;
        var _a, _b, _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 2, , 3]);
                    setLoader(true);
                    return [4 /*yield*/, getJobSeekerProfile(props.profileDataId || userDataState.userData.profileId)];
                case 1:
                    profileDataFetched = _e.sent();
                    if ((_b = (_a = profileDataFetched === null || profileDataFetched === void 0 ? void 0 : profileDataFetched.data) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.profileDetailsMap) {
                        patchProfileDetails((_d = (_c = profileDataFetched === null || profileDataFetched === void 0 ? void 0 : profileDataFetched.data) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.profileDetailsMap);
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _e.sent();
                    console.log(error_2);
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
    var patchProfileDetails = function (patchData) {
        console.log(patchData);
        setFreshGrad(patchData.freshGraduate);
        setTotalExperience({
            totalExperienceYears: patchData.totalExperience.totalExperienceYears,
            totalExperienceMonths: patchData.totalExperience.totalExperienceMonths,
        });
        setRelevantExperience({
            relevantExperienceYears: patchData.relevantExperience.relevantExperienceYears,
            relevantExperienceMonths: patchData.relevantExperience.relevantExperienceMonths,
        });
        setFixedCtc({
            fixedCtcLakh: patchData.fixedCtc.fixedCtcLakh,
            fixedCtcThousand: patchData.fixedCtc.fixedCtcThousand,
        });
        setVariableCtc({
            variableCtcLakh: patchData.variableCtc.variableCtcLakh,
            variableCtcThousand: patchData.variableCtc.variableCtcThousand,
        });
        setExpectedCtc({
            expectedCtcLakh: patchData.expectedCtc.expectedCtcLakh,
            expectedCtcThousand: patchData.expectedCtc.expectedCtcThousand,
        });
        setWorkStatus(patchData.workStatus);
        setTotalCtc(patchData.totalCtc);
    };
    var setFreshGrad = function (data) {
        if (data === "true") {
            setFreshGraduate(true);
        }
        else {
            setFreshGraduate(false);
        }
    };
    var emptyExperienceCTCDetatils = function () {
        setRelevantExperience({
            relevantExperienceYears: "",
            relevantExperienceMonths: "",
        });
        setTotalExperience({
            totalExperienceMonths: "",
            totalExperienceYears: "",
        });
        setFixedCtc({
            fixedCtcLakh: "",
            fixedCtcThousand: "",
        });
        setVariableCtc({
            variableCtcLakh: "",
            variableCtcThousand: "",
        });
    };
    return (_jsx(_Fragment, { children: !loader ? (_jsxs("div", __assign({ className: "job-seeker-profile-content" }, { children: [_jsx("p", __assign({ className: "step-content-title-text" }, { children: EXPERIENCE_TITLE })), _jsxs("div", __assign({ id: "experience-details-container", className: "experience-details-card" }, { children: [_jsxs("div", __assign({ className: "experience-card-title" }, { children: [_jsx("div", { children: _jsxs("span", { children: [TOTAL_EXP_TEXT, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }) }), _jsxs("div", __assign({ id: "check-fg-container" }, { children: [_jsx("span", { children: FRESHER_TEXT }), _jsx(Checkbox, { id: "check-fg", name: "checkFreshGraduate", disabled: !props.hasButtons, checked: freshGraduate, onChange: function (e) {
                                                var _a;
                                                setFreshGraduate((_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.checked);
                                                if (e.target.checked === true) {
                                                    emptyExperienceCTCDetatils();
                                                    setWorkStatus("Fresh Graduate");
                                                }
                                                else {
                                                    setWorkStatus("");
                                                }
                                            }, inputProps: { "aria-label": "controlled" } })] }))] })), _jsx(InlineInputs, { InlineInputsArray: YearMonthDetails, disabled: !props.hasButtons || freshGraduate, setValues: handleTotalExperience, value: totalExperience }), _jsx(InlineInputs, { InlineInputsArray: YearMonthDetails, InlineInputTitle: RELEVANT_EXP_TEXT, disabled: !props.hasButtons || freshGraduate, setValues: handleRelevantExperience, value: relevantExperience })] })), _jsx("div", __assign({ id: "work-status-parent-parent-container", className: "generic-container" }, { children: _jsxs("div", __assign({ id: "work-status-parent-container", className: "inline-div" }, { children: [_jsx("div", { children: _jsxs("p", __assign({ className: "step-content-title-text" }, { children: [" ", WORK_STATUS_TEXT, " ", _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] })) }), _jsx("div", __assign({ id: "work-status-container", className: "work-status-select" }, { children: _jsxs(FormControl, __assign({ id: "work-status-formcontrol", sx: { minWidth: 250 } }, { children: [_jsx(InputLabel, __assign({ id: "demo-simple-select-helper-label" }, { children: WORK_STATUS_TEXT })), _jsx(Select, __assign({ id: "work-status-dropdown", name: "workStatusDropDown", disabled: !props.hasButtons || freshGraduate, value: freshGraduate ? "Fresh Graduate" : workStatus, label: WORK_STATUS_TEXT, onChange: function (e) {
                                                if (e.target.value !== "Fresh Graduate") {
                                                    setFreshGraduate(false);
                                                }
                                                else {
                                                    emptyExperienceCTCDetatils();
                                                    setFreshGraduate(true);
                                                }
                                                setWorkStatus(e.target.value);
                                            } }, { children: WorkStatusArray.map(function (item) { return (_jsx(MenuItem, __assign({ value: item }, { children: item }), item)); }) }))] })) }))] })) })), _jsxs("div", __assign({ id: "ctc-root-container", className: "conditional-container" }, { children: [_jsx("div", { children: _jsxs("p", __assign({ className: "ctc-details-text" }, { children: [" ", CTC_DETAIL_TEXT] })) }), _jsx(InlineInputs, { InlineInputsArray: CTCDetails, InlineInputTitle: FIXED_CTC_TEXT, disabled: !props.hasButtons || freshGraduate, setValues: handleFixedCtc, value: fixedCtc }), _jsx(InlineInputs, { InlineInputsArray: CTCDetails, InlineInputTitle: VARIABLE_CTC_TEXT, disabled: !props.hasButtons || freshGraduate, setValues: handleVariableCtc, value: variableCtc }), _jsxs("div", __assign({ id: "total-ctc-parent-container" }, { children: [_jsx("div", __assign({ className: "experience-card-title" }, { children: _jsx("div", { children: _jsx("p", { children: TOTAL_CTC_TEXT }) }) })), _jsxs("div", __assign({ id: "total-ctc-textbox-container", className: "inline-div" }, { children: [_jsx(TextField, { id: "total-ctc-textbox", disabled: true, type: "text", value: totalCtc, label: TOTAL_CTC_LABEL, placeholder: TCTC_PLACEHOLDER, InputProps: {
                                                inputProps: {
                                                    maxLength: 12,
                                                },
                                            }, size: "small" }), _jsx("div", __assign({ className: "tctc-text" }, { children: _jsx("span", { children: TCTC_SUB_TEXT }) }))] }))] }))] })), _jsxs("div", __assign({ className: "generic-container" }, { children: [_jsx("div", __assign({ className: "expected-ctc" }, { children: _jsxs("p", __assign({ className: "step-content-title-text" }, { children: [" ", EXPECTED_CTC_TEXT, " ", _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] })) })), _jsx("div", __assign({ id: "expected-ctc-container", className: "experience-details-card" }, { children: _jsx(InlineInputs, { required: true, InlineInputsArray: CTCDetails, disabled: !props.hasButtons, setValues: handleExpectedCtc, value: expectedCtc }) }))] })), props.hasButtons ? (_jsx(PreviousNextButtons, { handleNext: submitDetails, handleBack: props.handleBack })) : null] }))) : (_jsx(Stack, __assign({ alignItems: "center" }, { children: _jsx(CircularProgress, {}) }))) }));
};
export default JobSeekerProfileDetails;
