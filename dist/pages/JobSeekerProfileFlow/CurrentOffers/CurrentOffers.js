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
import React, { useEffect } from "react";
import { Box, Grid, Button, TextField, Typography } from '@mui/material';
import { useFormik, getIn } from "formik";
import * as Yup from "yup";
import { StyledContainer, useStyles } from "../JobSeekerProfileFlowStyles";
import { ERROR_KEY, HALF_SIZE_GRID, FULL_SIZE_GRID, } from "../../../constants";
import DeleteIcon from "@mui/icons-material/Delete";
import { OFFERED_ROLE, JOIN_LOCATION, PROPOSED_DATE, EMPLOYER_NAME, FormAttributes, OFFER_ADD_TEXT, SAVE_BTN_TEXT, DELETE_BTN_TEXT, } from "./CurrentOffersConstants";
import AddIcon from "@mui/icons-material/Add";
import './CurrentOffers.css';
import InlineInputs from "../../../components/InlineInputs/InlineInputs";
import { CTCDetails, FIXED_CTC_TEXT, TOTAL_CTC_LABEL, TCTC_PLACEHOLDER, TCTC_SUB_TEXT, TOTAL_CTC_TEXT, VARIABLE_CTC_TEXT, } from "../JobSeekerProfileFlowConstants";
import DropZoneUpload from "../../../components/FileUploadComponent/DropZoneUpload";
import Calendar from '../../../components/Calendar/Calendar';
var CurrentOffers = function (props) {
    var classes = useStyles();
    var _a = React.useState([]), serviceList = _a[0], setServiceList = _a[1];
    var _b = React.useState([]), serviceListFiles = _b[0], setServiceListFiles = _b[1];
    var _c = React.useState(''), joiningDate = _c[0], setJoiningDate = _c[1];
    var handleServiceRemove = function (index) {
        var list = __spreadArray([], serviceList, true);
        list.splice(index, 1);
        setServiceList(list);
    };
    var initialValuesForForm = {
        joiningDate: "",
        joiningLocation: "",
        employerName: "",
        countryCode: "",
        designation: "",
        letterFiles: [],
        saveStatus: false,
        fieldDisabled: false
    };
    var currentOfferSubmit = function (index) {
        offerAddForm.values.members[index].saveStatus = true;
        offerAddForm.values.members[index].fieldDisabled = true;
        props.setOfferData(offerAddForm.values.members);
    };
    var teamArray = [];
    var offerAddForm = useFormik({
        initialValues: { members: teamArray },
        validationSchema: Yup.object().shape({
            members: Yup.array()
                .of(Yup.object({
            // joiningDate: Yup.string().required(joiningDate_MSG).min(3).max(FormAttributes.joiningDate.maxLength).matches(LETTERS_ONLY_REGEX, SPECIAL_CHAR_ERR_MSG),
            // joiningLocation: Yup.string().required(joiningLocation_MSG).min(1).max(FormAttributes.joiningLocation.maxLength).matches(LETTERS_ONLY_REGEX, SPECIAL_CHAR_ERR_MSG),
            // employerName: Yup.string()
            //   .email(EMAIL_ERR_MSG).min(6).max(FormAttributes.employerName.maxLength)
            //   .required(EMAIL_REQ_MSG),
            // countryCode: Yup.string().required(COUNTRY_CODE_MSG).min(1).max(FormAttributes.countryCode.maxLength).matches(NUMBER_ONLY_REGEX),
            // designation: Yup.string().max(FormAttributes.designation.maxLength)
            //   .matches(phoneRegExp, PHN_ERR_MSG).length(10)
            //   .required(PHN_REQ_MSG),
            }))
                .required('offr details required')
                .min(1, 'add at least one offer'),
        }),
        onSubmit: function (values, _a) {
            var setSubmitting = _a.setSubmitting;
            handleSubmit(values, setSubmitting);
        },
        enableReinitialize: true,
    });
    var handleSubmit = function (values, setSubmitting) { return __awaiter(void 0, void 0, void 0, function () {
        var members, userPayload;
        return __generator(this, function (_a) {
            members = values.members;
            userPayload = members.map(function (item) { return ({
                joiningDate: item.joiningDate,
                joiningLocation: item.joiningLocation,
                userName: item.countryCode + item.designation,
                mobileNumber: item.countryCode + item.designation,
                employerName: item.employerName,
                department: "dummy",
                //   userType: RECRUITMENT_COMPANY,
                //   groups: [INTERNAL_GROUP],
                //   internalRecruiter: true,
                //   mobile2: "",
                //   companyId: userDataState.userData.companyId,
                channel: "Company Onboard",
                otherChannel: "",
            }); });
            // const userResponse = userPayload.map(
            //   async (teamMember: any, index: number) => {
            //     const responseCreate = await CreateUser(teamMember, true);
            //   }
            // );
            props.handleComplete();
            props.handleNext();
            if (serviceList.length > 0) {
                //   setShowNofitication(true);
                //   setNotificationType(ERROR_KEY);
                //   setNoticationMessage(USER_ADD_ERR_MSG);
            }
            setSubmitting(false);
            return [2 /*return*/];
        });
    }); };
    var handleServiceAdd = function () {
        offerAddForm.setValues(function (prevValues) { return ({
            members: __spreadArray(__spreadArray([], prevValues.members, true), [__assign({}, initialValuesForForm)], false),
        }); });
        setServiceList(function (prevState) { return __spreadArray(__spreadArray([], prevState, true), [{ service: "" }], false); });
    };
    var getError = function (name) {
        var error = getIn(offerAddForm.errors, name);
        var touch = getIn(offerAddForm.touched, name);
        return touch && error ? error : null;
    };
    useEffect(function () {
        if (serviceList.length === 0)
            handleServiceAdd();
    }, []);
    var receiveFileContent = function (files, index) {
        var tempArray = serviceListFiles;
        tempArray[index] = files;
        setServiceListFiles(function () { return __spreadArray([], tempArray, true); });
    };
    var removeFile = function (index) {
        var tempArray = serviceListFiles;
        tempArray[index] = null;
        setServiceListFiles(function () { return __spreadArray([], tempArray, true); });
    };
    return (_jsxs(React.Fragment, { children: [_jsx("div", __assign({ className: "add-btn-div" }, { children: _jsxs(Button, __assign({ className: "next-button stack-button", variant: "contained", onClick: handleServiceAdd }, { children: [_jsx(AddIcon, { className: "add-icon" }), " ", OFFER_ADD_TEXT] })) })), serviceList.length > 0 &&
                serviceList.map(function (singleService, index) {
                    var _a;
                    return (_jsx("div", __assign({ className: "services" }, { children: _jsx("div", __assign({ className: "first-division" }, { children: _jsxs(StyledContainer, { children: [_jsxs(Grid, __assign({ container: true, className: classes.muiContainer }, { children: [_jsx(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: FULL_SIZE_GRID, lg: FULL_SIZE_GRID, sx: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                    marginBottom: 1,
                                                } }, { children: _jsxs(Typography, __assign({ className: classes.Heading2 }, { children: ["Add Offer ", index + 1, " Details"] })) })), _jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: HALF_SIZE_GRID, lg: HALF_SIZE_GRID, className: "add-team-grid" }, { children: [_jsxs("p", { children: [PROPOSED_DATE, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), _jsx(Calendar, { setDate: function (date) {
                                                            offerAddForm.setFieldValue("members[".concat(index, "].joiningDate"), date);
                                                        }, status: true })] })), _jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: HALF_SIZE_GRID, lg: HALF_SIZE_GRID, className: "add-team-grid" }, { children: [_jsxs("p", { children: [JOIN_LOCATION, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), _jsx(TextField, { disabled: props.disabled || offerAddForm.values.members[index].fieldDisabled, required: true, id: FormAttributes.joiningLocation.id, label: FormAttributes.joiningLocation.label, className: classes.boxInputField, size: "small", name: "members[".concat(index, "].joiningLocation"), onBlur: offerAddForm.handleBlur, onChange: offerAddForm.handleChange, value: offerAddForm.values.members[index].joiningLocation, error: getError("members[".concat(index, "].joiningLocation")), helperText: getError("members[".concat(index, "].joiningLocation")) })] })), _jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: HALF_SIZE_GRID, lg: HALF_SIZE_GRID, className: "add-team-grid" }, { children: [_jsxs("p", { children: [EMPLOYER_NAME, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), _jsx(TextField, { disabled: props.disabled || offerAddForm.values.members[index].fieldDisabled, required: true, id: FormAttributes.employerName.id, label: FormAttributes.employerName.label, className: classes.boxInputField, size: "small", name: "members[".concat(index, "].employerName"), onBlur: offerAddForm.handleBlur, onChange: offerAddForm.handleChange, value: offerAddForm.values.members[index].employerName, error: getError("members[".concat(index, "].employerName")), helperText: getError("members[".concat(index, "].employerName")) })] })), _jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: HALF_SIZE_GRID, lg: HALF_SIZE_GRID, className: "add-team-grid" }, { children: [_jsxs("p", { children: [OFFERED_ROLE, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), _jsx(TextField, { disabled: props.disabled || offerAddForm.values.members[index].fieldDisabled, id: FormAttributes.designation.id, label: FormAttributes.designation.label, required: true, size: "small", className: classes.boxInputField, name: "members[".concat(index, "].designation"), onBlur: offerAddForm.handleBlur, onChange: offerAddForm.handleChange, value: offerAddForm.values.members[index].designation, error: getError("members[".concat(index, "].designation")), helperText: getError("members[".concat(index, "].designation")) })] })), _jsxs("p", __assign({ className: "sub-text" }, { children: ["Offer CTC in INR", _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] })), _jsxs("div", __assign({ className: "inner-div" }, { children: [_jsx(InlineInputs, { InlineInputsArray: CTCDetails, InlineInputTitle: FIXED_CTC_TEXT, disabled: props.disabled || offerAddForm.values.members[index].fieldDisabled }), _jsx(InlineInputs, { InlineInputsArray: CTCDetails, InlineInputTitle: VARIABLE_CTC_TEXT, disabled: props.disabled || offerAddForm.values.members[index].fieldDisabled }), _jsxs("div", { children: [_jsx("div", __assign({ className: "experience-card-title" }, { children: _jsx("div", { children: _jsx("p", { children: TOTAL_CTC_TEXT }) }) })), _jsxs("div", __assign({ className: "inline-div" }, { children: [_jsx(TextField, { disabled: props.disabled || offerAddForm.values.members[index].fieldDisabled, type: "text", label: TOTAL_CTC_LABEL, onChange: function (e) { return console.log('val ', e.target.value); }, placeholder: TCTC_PLACEHOLDER, InputProps: {
                                                                            inputProps: {
                                                                                maxLength: 12
                                                                            }
                                                                        }, size: "small" }), _jsx("div", __assign({ className: "tctc-text" }, { children: _jsx("span", { children: TCTC_SUB_TEXT }) }))] }))] })] })), _jsx("p", __assign({ className: "sub-text" }, { children: "Attach Offer Letter" })), _jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: HALF_SIZE_GRID, lg: HALF_SIZE_GRID, className: classes.limitWidth }, { children: [_jsx(DropZoneUpload, { receiveFileContent: receiveFileContent, data: index }), serviceListFiles[index] && serviceListFiles[index][0] ?
                                                        _jsxs(Box, { children: [_jsx(Button, __assign({ className: "next-button", variant: "contained" }, { children: (_a = serviceListFiles[index][0]) === null || _a === void 0 ? void 0 : _a.name })), _jsx(Button, __assign({ type: "button", onClick: function () { return removeFile(index); }, className: "remove-btn" }, { children: _jsx(DeleteIcon, { color: ERROR_KEY }) }))] })
                                                        : null] }))] })), !props.disabled ?
                                        _jsx("div", __assign({ className: "final-button-div" }, { children: !offerAddForm.values.members[index].saveStatus ?
                                                _jsx(Button, __assign({ className: "save-button", variant: "outlined", onClick: function () {
                                                        currentOfferSubmit(index);
                                                    } }, { children: SAVE_BTN_TEXT }))
                                                :
                                                    _jsx(Button, __assign({ className: "save-button", variant: "outlined", onClick: handleServiceRemove }, { children: DELETE_BTN_TEXT })) }))
                                        : null] }) })) }), index));
                })] }));
};
export default CurrentOffers;
