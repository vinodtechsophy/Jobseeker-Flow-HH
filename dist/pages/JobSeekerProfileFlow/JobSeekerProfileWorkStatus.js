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
import React, { useEffect } from "react";
import { Stack, Radio, Select, MenuItem, TextField, InputLabel, RadioGroup, FormControl, FormControlLabel, CircularProgress, } from "@mui/material";
import { YesNoOptions, OTHER_LIMIT_TEXT, EXPERIENCE_TITLE, ProfileFetchLocations, PROFILE_SOURCE_HOLDER, PROFILE_LOCATION_TEXT, CURRENT_LOCATION_TEXT, CERTIFICATION_ADD_TEXT, PREFERRED_LOCATION_TEXT, ADDITIONAL_CERTIFICATES_TEXT, WORK_STATUS_TEXT, } from "./JobSeekerProfileFlowConstants";
import "./JobSeekerProfileFlow.css";
import PreviousNextButtons from "../../components/PreviousNextButtons/PreviousNextButtons";
import CertificationDetails from "./CertificationDetails/CertificationDetails";
import { WARNING_KEY, WorkStatusType } from "../../constants";
import FreshGraduateDetails from "./FreshGraduateDetails/FreshGraduateDetails";
import ExperiencedSeeker from "./ExperiencedSeeker/ExperiencedSeeker";
import { useStyles } from "./JobSeekerProfileFlowStyles";
import { getCityList, getJobSeekerProfile, updateJobSeekerProfile, } from "../../services/FormDataService";
import { useAppSelector } from "../../services/StoreHooks";
import { ERROR_KEY, SUCCESS_KEY, FORM_SUBMISSION_SUCCESS, JOB_TYPE_OPTIONS, } from "../../constants";
var JobSeekerProfileWorkStatus = function (props) {
    var classes = useStyles();
    var experiencedRef = React.useRef();
    var freshGraduateRef = React.useRef();
    var userDataState = useAppSelector(function (state) { return state.currentUser; });
    var _a = React.useState(false), gotPatchData = _a[0], setGotPatchData = _a[1];
    var _b = React.useState(false), loader = _b[0], setLoader = _b[1];
    var _c = React.useState([]), citiesArray = _c[0], setCitiesArray = _c[1];
    var _d = React.useState(userDataState.userData.workStatus), jobStatus = _d[0], setJobStatus = _d[1];
    var _e = React.useState(""), currentLocation = _e[0], setCurrentLocation = _e[1];
    var _f = React.useState(""), preferredLocation = _f[0], setPreferredLocation = _f[1];
    var _g = React.useState(""), profileFetchLocation = _g[0], setProfileFetchLocation = _g[1];
    var _h = React.useState([]), certificationDetails = _h[0], setCertificationDetails = _h[1];
    var _j = React.useState(""), additonalCertificationStatus = _j[0], setAdditionalCertificationStatus = _j[1];
    var _k = React.useState({
        currentEmployer: "",
        country: "",
        city: "",
    }), experiencedDetails = _k[0], setExperiencedDetails = _k[1];
    var _l = React.useState({
        instituteName: "",
        instituteCity: "",
        instituteCountry: "",
        collegeEndDate: "",
        collegeStartDate: "",
    }), freshGraduateDetails = _l[0], setFreshGraduateDetails = _l[1];
    var handleProfileFetch = function (event) {
        setProfileFetchLocation(event.target.value);
    };
    var handleCertificationStatus = function (event) {
        setAdditionalCertificationStatus(event.target.value);
    };
    var validExp = {};
    var submitWorkStatus = function () { return __awaiter(void 0, void 0, void 0, function () {
        var profileWorkStatusMap, profileDetailsResponse, error_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    setLoader(true);
                    if (experiencedRef === null || experiencedRef === void 0 ? void 0 : experiencedRef.current)
                        validExp = experiencedRef === null || experiencedRef === void 0 ? void 0 : experiencedRef.current.childMethod();
                    if (freshGraduateRef === null || freshGraduateRef === void 0 ? void 0 : freshGraduateRef.current)
                        validExp = freshGraduateRef === null || freshGraduateRef === void 0 ? void 0 : freshGraduateRef.current.childMethod();
                    console.log(validExp);
                    profileWorkStatusMap = buildDetailsPayload(validExp);
                    if (!!validateWorkStatusMap(profileWorkStatusMap)) return [3 /*break*/, 1];
                    props.setOpen(true);
                    props.setType(WARNING_KEY);
                    props.setDataMessage("Please enter all work status details");
                    setLoader(false);
                    return [2 /*return*/];
                case 1:
                    if (profileWorkStatusMap.jobDurationType === JOB_TYPE_OPTIONS[0]) {
                        delete profileWorkStatusMap.payrollEmployer;
                        delete profileWorkStatusMap.endClient;
                    }
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, updateJobSeekerProfile({
                            profileId: userDataState.userData.profileId,
                            profileData: { profileWorkStatusMap: profileWorkStatusMap, profileLastCompletedStep: "4" },
                        })];
                case 3:
                    profileDetailsResponse = _b.sent();
                    if ((_a = profileDetailsResponse === null || profileDetailsResponse === void 0 ? void 0 : profileDetailsResponse.data) === null || _a === void 0 ? void 0 : _a.success) {
                        props.setType(SUCCESS_KEY);
                        props.setDataMessage(FORM_SUBMISSION_SUCCESS);
                        props.setOpen(true);
                        props.handleComplete(3);
                        // props.handleNext();
                        if (jobStatus === WorkStatusType.FRESHER ||
                            jobStatus === WorkStatusType.JOBLESS) {
                            props.setActiveStep(5);
                        }
                        else {
                            props.setActiveStep(4);
                        }
                    }
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _b.sent();
                    console.log(error_1);
                    props.setType(ERROR_KEY);
                    props.setDataMessage(error_1 === null || error_1 === void 0 ? void 0 : error_1.message);
                    props.setOpen(true);
                    return [3 /*break*/, 5];
                case 5:
                    setLoader(false);
                    _b.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var buildDetailsPayload = function (validExp) {
        return __assign({ jobStatus: jobStatus, currentLocation: currentLocation, preferredLocation: preferredLocation, profileFetchLocation: profileFetchLocation, additonalCertificationStatus: additonalCertificationStatus, certificationDetails: certificationDetails }, validExp);
    };
    var validateExperienceDetails = function (experiencedData) {
        if (!experiencedData.city || !experiencedData.country)
            return false;
        switch (props.workStatus) {
            case WorkStatusType.JOBLESS:
                if (experiencedData.jobDurationType === JOB_TYPE_OPTIONS[0]) {
                    if (!experiencedData.lastEmployer ||
                        !experiencedData.relievingDate ||
                        !experiencedData.notWorkingReason)
                        return false;
                }
                else {
                    if (!experiencedData.lastEmployer ||
                        !experiencedData.relievingDate ||
                        !experiencedData.notWorkingReason ||
                        !experiencedData.payrollEmployer ||
                        !experiencedData.endClient)
                        return false;
                }
                break;
            case WorkStatusType.FULL_TIME:
                if (experiencedData.jobDurationType === JOB_TYPE_OPTIONS[0]) {
                    if (!experiencedData.currentEmployer || !experiencedData.joiningDate)
                        return false;
                }
                else {
                    if (!experiencedData.currentEmployer ||
                        !experiencedData.joiningDate ||
                        !experiencedData.payrollEmployer ||
                        !experiencedData.endClient)
                        return false;
                }
                break;
        }
        return true;
    };
    var validateFresherDetails = function (freshrData) {
        if (!freshrData.instituteName ||
            !freshrData.instituteCity ||
            !freshrData.instituteCountry ||
            !freshrData.collegeEndDate ||
            !freshrData.collegeStartDate)
            return false;
        return true;
    };
    var checkExpData = function (experiencedData) {
        if (!validateExperienceDetails(experiencedData)) {
            setExperiencedDetails({});
            props.setType(WARNING_KEY);
            props.setDataMessage("Please enter all experience details");
            props.setOpen(true);
            setLoader(false);
            return false;
        }
        else {
            setExperiencedDetails(experiencedData);
            console.log(experiencedDetails);
            return true;
        }
    };
    var checkFrshrData = function (fresherData) {
        if (!validateFresherDetails(fresherData)) {
            setFreshGraduateDetails({});
            props.setType(WARNING_KEY);
            props.setDataMessage("Please enter the college details");
            props.setOpen(true);
            setLoader(false);
            return false;
        }
        else {
            setFreshGraduateDetails(fresherData);
            console.log(freshGraduateDetails);
            return true;
        }
    };
    var validateWorkStatusMap = function (data) {
        var _a;
        if (!data.currentLocation || !data.preferredLocation)
            return false;
        if (data.additonalCertificationStatus === "Yes") {
            if (((_a = data.certificationDetails) === null || _a === void 0 ? void 0 : _a.length) === 0)
                return false;
            else {
                certificationDetails.forEach(function (row) {
                    if (!row.name ||
                        !row.issuingOrganization ||
                        !row.credentialId ||
                        !row.credentialURL ||
                        !row.issueDate ||
                        !row.expirationDate ||
                        !row.credentialStatus)
                        return false;
                });
            }
        }
        else {
            setCertificationDetails([]);
        }
        if (jobStatus === WorkStatusType.FRESHER) {
            if (!checkFrshrData(validExp)) {
                return false;
            }
        }
        else {
            if (!checkExpData(validExp)) {
                return false;
            }
        }
        return true;
    };
    var removeCertification = function (index) {
        var list = __spreadArray([], certificationDetails, true);
        list.splice(index, 1);
        setCertificationDetails(list);
    };
    useEffect(function () {
        if (props.profileDataId || userDataState.userData.profileId) {
            callPrefillData();
            fetchCityDetails();
        }
    }, [userDataState.userData.profileId, props.profileDataId]);
    var fetchCityDetails = function () { return __awaiter(void 0, void 0, void 0, function () {
        var cityRawData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getCityList()];
                case 1:
                    cityRawData = _a.sent();
                    setCitiesArray(cityRawData === null || cityRawData === void 0 ? void 0 : cityRawData.data.split("\n"));
                    return [2 /*return*/];
            }
        });
    }); };
    var callPrefillData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var profileDataFetched, error_2;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return __generator(this, function (_k) {
            switch (_k.label) {
                case 0:
                    _k.trys.push([0, 2, , 3]);
                    setLoader(true);
                    return [4 /*yield*/, getJobSeekerProfile(props.profileDataId || userDataState.userData.profileId)];
                case 1:
                    profileDataFetched = _k.sent();
                    if ((_c = (_b = (_a = profileDataFetched === null || profileDataFetched === void 0 ? void 0 : profileDataFetched.data) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.profileDetailsMap) === null || _c === void 0 ? void 0 : _c.workStatus) {
                        setJobStatus((_e = (_d = profileDataFetched === null || profileDataFetched === void 0 ? void 0 : profileDataFetched.data) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.profileDetailsMap.workStatus);
                    }
                    if ((_g = (_f = profileDataFetched === null || profileDataFetched === void 0 ? void 0 : profileDataFetched.data) === null || _f === void 0 ? void 0 : _f.data) === null || _g === void 0 ? void 0 : _g.profileWorkStatusMap) {
                        patchWorkStatusDetails((_j = (_h = profileDataFetched === null || profileDataFetched === void 0 ? void 0 : profileDataFetched.data) === null || _h === void 0 ? void 0 : _h.data) === null || _j === void 0 ? void 0 : _j.profileWorkStatusMap);
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _k.sent();
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
    var patchWorkStatusDetails = function (patchData) {
        setCurrentLocation(patchData.currentLocation);
        setPreferredLocation(patchData.preferredLocation);
        setProfileFetchLocation(patchData.profileFetchLocation);
        setCertificationDetails(function () { return __spreadArray([], patchData.certificationDetails, true); });
        setAdditionalCertificationStatus(patchData.additonalCertificationStatus);
        setStatusSubDetails(patchData);
        setGotPatchData(true);
    };
    var setStatusSubDetails = function (patchObject) {
        if (patchObject.instituteName) {
            setFreshGraduateDetails({
                instituteName: patchObject.instituteName,
                instituteCity: patchObject.instituteCity,
                instituteCountry: patchObject.instituteCountry,
                collegeEndDate: patchObject.collegeEndDate,
                collegeStartDate: patchObject.collegeStartDate,
            });
        }
        else {
            setExperiencedDetails({
                jobDurationType: patchObject.jobDurationType,
                city: patchObject.city,
                country: patchObject.country,
                endClient: patchObject === null || patchObject === void 0 ? void 0 : patchObject.endClient,
                joiningDate: patchObject === null || patchObject === void 0 ? void 0 : patchObject.joiningDate,
                lastEmployer: patchObject === null || patchObject === void 0 ? void 0 : patchObject.lastEmployer,
                relievingDate: patchObject === null || patchObject === void 0 ? void 0 : patchObject.relievingDate,
                currentEmployer: patchObject === null || patchObject === void 0 ? void 0 : patchObject.currentEmployer,
                payrollEmployer: patchObject === null || patchObject === void 0 ? void 0 : patchObject.payrollEmployer,
                notWorkingReason: patchObject === null || patchObject === void 0 ? void 0 : patchObject.notWorkingReason,
            });
        }
    };
    return (_jsx(_Fragment, { children: !loader ? (_jsxs("div", __assign({ className: "job-seeker-profile-content" }, { children: [_jsx("p", __assign({ className: "step-content-title-text" }, { children: EXPERIENCE_TITLE })), _jsxs("div", __assign({ className: "conditional-container" }, { children: [_jsx("div", __assign({ className: "experience-card-title" }, { children: _jsx("p", { children: PROFILE_LOCATION_TEXT }) })), _jsx("div", __assign({ id: "job-profile-ad-container" }, { children: _jsx(FormControl, { children: _jsx(RadioGroup, __assign({ id: "job-profile-ad", value: profileFetchLocation, onChange: handleProfileFetch }, { children: ProfileFetchLocations.map(function (location) { return (_jsx(FormControlLabel, { disabled: !props.hasButtons, value: location, control: _jsx(Radio, {}), label: location }, location)); }) })) }) })), profileFetchLocation ===
                            ProfileFetchLocations[ProfileFetchLocations.length - 1] ? (_jsx("div", __assign({ id: "profile-location-textbox-container", className: "profile-location-field" }, { children: _jsx(TextField, { id: "profile-location-textbox", disabled: !props.hasButtons, type: "text", multiline: true, fullWidth: true, placeholder: PROFILE_SOURCE_HOLDER, rows: 2, helperText: OTHER_LIMIT_TEXT, onChange: function (e) { return console.log("val ", e.target.value); }, InputProps: {
                                    inputProps: { maxLength: 20 },
                                }, size: "small" }) }))) : null] })), _jsxs("div", __assign({ id: "current-location-parent-container", className: "conditional-container" }, { children: [_jsx("div", __assign({ className: "experience-card-title" }, { children: _jsxs("p", { children: [CURRENT_LOCATION_TEXT, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }) })), _jsx("div", __assign({ id: "current-location-dropdown-container" }, { children: _jsxs(FormControl, __assign({ sx: { minWidth: 250 } }, { children: [_jsx(InputLabel, __assign({ sx: { lineHeight: "15px" } }, { children: CURRENT_LOCATION_TEXT })), _jsx(Select, __assign({ id: "current-location-dropdown", disabled: !props.hasButtons, size: "small", value: currentLocation, label: CURRENT_LOCATION_TEXT, className: classes.inputField, onChange: function (e) { return setCurrentLocation(e.target.value); } }, { children: citiesArray.map(function (item, index) { return (_jsx(MenuItem, __assign({ value: item }, { children: item }), item + index)); }) }))] })) }))] })), _jsxs("div", __assign({ id: "prefered-location-parent-container", className: "conditional-container" }, { children: [_jsx("div", __assign({ className: "experience-card-title" }, { children: _jsxs("p", { children: [PREFERRED_LOCATION_TEXT, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }) })), _jsx("div", __assign({ id: "prefered-location-dropdown-container" }, { children: _jsxs(FormControl, __assign({ sx: { minWidth: 250 } }, { children: [_jsx(InputLabel, __assign({ sx: { lineHeight: "15px" } }, { children: PREFERRED_LOCATION_TEXT })), _jsx(Select, __assign({ id: "prefered-location-dropdown", disabled: !props.hasButtons, size: "small", value: preferredLocation, label: PREFERRED_LOCATION_TEXT, className: classes.inputField, onChange: function (e) { return setPreferredLocation(e.target.value); } }, { children: citiesArray.map(function (item, index) { return (_jsx(MenuItem, __assign({ value: item }, { children: item }), item + index)); }) }))] })) }))] })), _jsxs("div", __assign({ id: "additonal-certification-Status-parent-container", className: "conditional-container" }, { children: [_jsx("div", __assign({ className: "experience-card-title" }, { children: _jsx("p", { children: ADDITIONAL_CERTIFICATES_TEXT }) })), _jsx("div", __assign({ id: "additonal-certification-Status-radio-container" }, { children: _jsx(FormControl, { children: _jsx(RadioGroup, __assign({ id: "additonal-certification-Status-radio", value: additonalCertificationStatus, onChange: handleCertificationStatus }, { children: YesNoOptions.map(function (location) { return (_jsx(FormControlLabel, { disabled: !props.hasButtons, value: location, control: _jsx(Radio, {}), label: location }, location)); }) })) }) }))] })), additonalCertificationStatus === YesNoOptions[0] ? (_jsxs("div", __assign({ id: "certification-details-container" }, { children: [_jsx("div", __assign({ className: "experience-card-title" }, { children: _jsx("p", { children: CERTIFICATION_ADD_TEXT }) })), _jsx(CertificationDetails, { disabled: !props.hasButtons, setCertificationData: setCertificationDetails, removeCertification: removeCertification, setType: props.setType, setOpen: props.setOpen, setDataMessage: props.setDataMessage, prefillDetails: props.profileDataId || userDataState.userData.profileId
                                ? certificationDetails
                                : null })] }))) : null, _jsx("div", { children: _jsx("div", __assign({ className: "experience-card-title" }, { children: _jsxs("p", { children: [WORK_STATUS_TEXT, ": ", jobStatus] }) })) }), _jsx("div", __assign({ id: "freshGraduate-details-container" }, { children: jobStatus === WorkStatusType.FRESHER ? (_jsx(FreshGraduateDetails, { disabled: !props.hasButtons, ref: freshGraduateRef, setParentData: setFreshGraduateDetails, setType: props.setType, setOpen: props.setOpen, setDataMessage: props.setDataMessage, fresherPrefillData: props.profileDataId || userDataState.userData.profileId
                            ? freshGraduateDetails
                            : null })) : null })), _jsx("div", __assign({ id: "experienced-seeker-container" }, { children: jobStatus !== WorkStatusType.FRESHER ? (_jsx(_Fragment, { children: gotPatchData ? (_jsx(ExperiencedSeeker, { disabled: !props.hasButtons, workStatus: jobStatus, ref: experiencedRef, setParentData: setExperiencedDetails, setType: props.setType, setOpen: props.setOpen, setDataMessage: props.setDataMessage, experiencedPrefillData: props.profileDataId || userDataState.userData.profileId
                                ? experiencedDetails
                                : null })) : (_jsx(ExperiencedSeeker, { disabled: !props.hasButtons, workStatus: jobStatus, ref: experiencedRef, setParentData: setExperiencedDetails, setType: props.setType, setOpen: props.setOpen, setDataMessage: props.setDataMessage, experiencedPrefillData: props.profileDataId || userDataState.userData.profileId
                                ? experiencedDetails
                                : null })) })) : null })), props.hasButtons ? (_jsx(PreviousNextButtons, { handleNext: submitWorkStatus, handleBack: props.handleBack })) : null] }))) : (_jsx(Stack, __assign({ alignItems: "center" }, { children: _jsx(CircularProgress, {}) }))) }));
};
export default JobSeekerProfileWorkStatus;
