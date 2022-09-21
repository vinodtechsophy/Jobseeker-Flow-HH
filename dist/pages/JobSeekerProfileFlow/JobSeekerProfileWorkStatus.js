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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Radio, Select, MenuItem, TextField, InputLabel, RadioGroup, FormControl, FormControlLabel } from '@mui/material';
import { YesNoOptions, WorkStatusArray, OTHER_LIMIT_TEXT, EXPERIENCE_TITLE, ProfileFetchLocations, PROFILE_SOURCE_HOLDER, PROFILE_LOCATION_TEXT, CURRENT_LOCATION_TEXT, CERTIFICATION_ADD_TEXT, PREFERRED_LOCATION_TEXT, ADDITIONAL_CERTIFICATES_TEXT, WORK_STATUS_TEXT, } from './JobSeekerProfileFlowConstants';
import './JobSeekerProfileFlow.css';
import PreviousNextButtons from "../../components/PreviousNextButtons/PreviousNextButtons";
import CertificationDetails from "./CertificationDetails/CertificationDetails";
import { WARNING_KEY, WorkStatusType } from "../../constants";
import FreshGraduateDetails from "./FreshGraduateDetails/FreshGraduateDetails";
import ExperiencedSeeker from "./ExperiencedSeeker/ExperiencedSeeker";
import { useStyles } from "./JobSeekerProfileFlowStyles";
import { updateJobSeekerProfile } from '../../services/FormDataService';
import { useAppSelector } from "../../services/StoreHooks";
import { ERROR_KEY, SUCCESS_KEY, FORM_SUBMISSION_SUCCESS } from "../../constants";
var JobSeekerProfileWorkStatus = function (props) {
    var classes = useStyles();
    var experiencedRef = React.useRef();
    var freshGraduateRef = React.useRef();
    var userDataState = useAppSelector(function (state) { return state.currentUser; });
    var _a = React.useState(userDataState.userData.workStatus), jobStatus = _a[0], setJobStatus = _a[1];
    var _b = React.useState(''), currentLocation = _b[0], setCurrentLocation = _b[1];
    var _c = React.useState(''), preferredLocation = _c[0], setPreferredLocation = _c[1];
    var _d = React.useState(''), profileFetchLocation = _d[0], setProfileFetchLocation = _d[1];
    var _e = React.useState([]), certificationDetails = _e[0], setCertificationDetails = _e[1];
    var _f = React.useState(''), additonalCertificationStatus = _f[0], setAdditionalCertificationStatus = _f[1];
    var _g = React.useState({
        currentEmployer: '',
        country: '',
        city: '',
    }), experiencedDetails = _g[0], setExperiencedDetails = _g[1];
    var _h = React.useState({
        instituteName: "",
        instituteCity: "",
        instituteCountry: "",
        collegeEndDate: "",
        collegeStartDate: "",
    }), freshGraduateDetails = _h[0], setFreshGraduateDetails = _h[1];
    var handleProfileFetch = function (event) {
        setProfileFetchLocation(event.target.value);
    };
    var handleCertificationStatus = function (event) {
        setAdditionalCertificationStatus(event.target.value);
    };
    var submitWorkStatus = function () { return __awaiter(void 0, void 0, void 0, function () {
        var profileWorkStatusMap, profileDetailsResponse, error_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (experiencedRef === null || experiencedRef === void 0 ? void 0 : experiencedRef.current)
                        experiencedRef === null || experiencedRef === void 0 ? void 0 : experiencedRef.current.childMethod();
                    if (freshGraduateRef === null || freshGraduateRef === void 0 ? void 0 : freshGraduateRef.current)
                        freshGraduateRef === null || freshGraduateRef === void 0 ? void 0 : freshGraduateRef.current.childMethod();
                    profileWorkStatusMap = buildDetailsPayload();
                    if (!validateWorkStatusMap(profileWorkStatusMap)) {
                        props.setOpen(true);
                        props.setType(WARNING_KEY);
                        props.setDataMessage("Please enter all work status details");
                        return [2 /*return*/];
                    }
                    ;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, updateJobSeekerProfile({
                            profileId: userDataState.userData.profileId,
                            profileData: { profileWorkStatusMap: profileWorkStatusMap }
                        })];
                case 2:
                    profileDetailsResponse = _b.sent();
                    console.log(profileDetailsResponse === null || profileDetailsResponse === void 0 ? void 0 : profileDetailsResponse.data);
                    if ((_a = profileDetailsResponse === null || profileDetailsResponse === void 0 ? void 0 : profileDetailsResponse.data) === null || _a === void 0 ? void 0 : _a.success) {
                        props.setType(SUCCESS_KEY);
                        props.setDataMessage(FORM_SUBMISSION_SUCCESS);
                        props.setOpen(true);
                        props.handleComplete(3);
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
        return __assign(__assign(__assign({ jobStatus: jobStatus, currentLocation: currentLocation, preferredLocation: preferredLocation, profileFetchLocation: profileFetchLocation, additonalCertificationStatus: additonalCertificationStatus }, experiencedDetails), { certificationDetails: certificationDetails }), freshGraduateDetails);
    };
    var validateWorkStatusMap = function (data) {
        var _a;
        if (!data.currentLocation ||
            !data.preferredLocation ||
            !data.profileFetchLocation)
            return false;
        else if (data.additonalCertificationStatus === YesNoOptions[0]) {
            if (((_a = data.certificationDetails) === null || _a === void 0 ? void 0 : _a.length) < 1)
                return false;
        }
        else if (jobStatus === WorkStatusType.FRESHER) {
            if (!data.instituteName || !data.instituteCity || !data.instituteCountry
                || !data.collegeEndDate || !data.collegeStartDate)
                return false;
        }
        return true;
    };
    var handleCertifications = function (certification) {
        delete certification.saveStatus;
        setCertificationDetails(function (data) { return __spreadArray(__spreadArray([], data, true), [certification], false); });
    };
    var removeCertification = function (index) {
        var list = __spreadArray([], certificationDetails, true);
        list.splice(index, 1);
        console.log(list);
        setCertificationDetails(list);
    };
    return (_jsxs("div", __assign({ className: "job-seeker-profile-content" }, { children: [_jsx("p", __assign({ className: "step-content-title-text" }, { children: EXPERIENCE_TITLE })), _jsxs("div", __assign({ className: "conditional-container" }, { children: [_jsx("div", __assign({ className: "experience-card-title" }, { children: _jsx("p", { children: PROFILE_LOCATION_TEXT }) })), _jsx("div", { children: _jsx(FormControl, { children: _jsx(RadioGroup, __assign({ value: profileFetchLocation, onChange: handleProfileFetch }, { children: ProfileFetchLocations.map(function (location) { return (_jsx(FormControlLabel, { disabled: !props.hasButtons, value: location, control: _jsx(Radio, {}), label: location }, location)); }) })) }) }), profileFetchLocation === ProfileFetchLocations[ProfileFetchLocations.length - 1] ?
                        _jsx("div", __assign({ className: "profile-location-field" }, { children: _jsx(TextField, { disabled: !props.hasButtons, type: "text", multiline: true, fullWidth: true, placeholder: PROFILE_SOURCE_HOLDER, rows: 2, helperText: OTHER_LIMIT_TEXT, onChange: function (e) { return console.log('val ', e.target.value); }, InputProps: {
                                    inputProps: { maxLength: 20 }
                                }, size: "small" }) }))
                        : null] })), _jsxs("div", __assign({ className: "conditional-container" }, { children: [_jsx("div", __assign({ className: "experience-card-title" }, { children: _jsxs("p", { children: [CURRENT_LOCATION_TEXT, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }) })), _jsx("div", { children: _jsxs(FormControl, __assign({ sx: { minWidth: 250 } }, { children: [_jsx(InputLabel, __assign({ sx: { lineHeight: '15px' } }, { children: CURRENT_LOCATION_TEXT })), _jsx(Select, __assign({ disabled: !props.hasButtons, size: "small", value: currentLocation, label: CURRENT_LOCATION_TEXT, className: classes.inputField, onChange: function (e) { return setCurrentLocation(e.target.value); } }, { children: WorkStatusArray.map(function (item) { return (_jsx(MenuItem, __assign({ value: item }, { children: item }), item)); }) }))] })) })] })), _jsxs("div", __assign({ className: "conditional-container" }, { children: [_jsx("div", __assign({ className: "experience-card-title" }, { children: _jsxs("p", { children: [PREFERRED_LOCATION_TEXT, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }) })), _jsx("div", { children: _jsxs(FormControl, __assign({ sx: { minWidth: 250 } }, { children: [_jsx(InputLabel, __assign({ sx: { lineHeight: '15px' } }, { children: PREFERRED_LOCATION_TEXT })), _jsx(Select, __assign({ disabled: !props.hasButtons, size: "small", value: preferredLocation, label: PREFERRED_LOCATION_TEXT, className: classes.inputField, onChange: function (e) { return setPreferredLocation(e.target.value); } }, { children: WorkStatusArray.map(function (item) { return (_jsx(MenuItem, __assign({ value: item }, { children: item }), item)); }) }))] })) })] })), _jsxs("div", __assign({ className: "conditional-container" }, { children: [_jsx("div", __assign({ className: "experience-card-title" }, { children: _jsx("p", { children: ADDITIONAL_CERTIFICATES_TEXT }) })), _jsx("div", { children: _jsx(FormControl, { children: _jsx(RadioGroup, __assign({ value: additonalCertificationStatus, onChange: handleCertificationStatus }, { children: YesNoOptions.map(function (location) { return (_jsx(FormControlLabel, { disabled: !props.hasButtons, value: location, control: _jsx(Radio, {}), label: location }, location)); }) })) }) })] })), additonalCertificationStatus === YesNoOptions[0] ?
                _jsxs("div", __assign({ className: "conditional-container" }, { children: [_jsx("div", __assign({ className: "experience-card-title" }, { children: _jsx("p", { children: CERTIFICATION_ADD_TEXT }) })), _jsx(CertificationDetails, { disabled: !props.hasButtons, setCertificationData: handleCertifications, removeCertification: removeCertification, setType: props.setType, setOpen: props.setOpen, setDataMessage: props.setDataMessage })] }))
                : null, _jsx("div", __assign({ className: "conditional-container" }, { children: _jsx("div", __assign({ className: "experience-card-title" }, { children: _jsxs("p", { children: [WORK_STATUS_TEXT, ": ", jobStatus] }) })) })), _jsx("div", __assign({ className: "conditional-container" }, { children: jobStatus === WorkStatusType.FRESHER ?
                    _jsx(FreshGraduateDetails, { disabled: !props.hasButtons, ref: freshGraduateRef, setParentData: setFreshGraduateDetails, setType: props.setType, setOpen: props.setOpen, setDataMessage: props.setDataMessage })
                    :
                        _jsx(ExperiencedSeeker, { disabled: !props.hasButtons, workStatus: jobStatus, ref: experiencedRef, setParentData: setExperiencedDetails, setType: props.setType, setOpen: props.setOpen, setDataMessage: props.setDataMessage }) })), props.hasButtons ?
                _jsx(PreviousNextButtons, { handleNext: submitWorkStatus, handleBack: props.handleBack })
                : null] })));
};
export default JobSeekerProfileWorkStatus;
