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
import { Box, Grid, Button, TextField, Typography } from "@mui/material";
import { useFormik, getIn } from "formik";
import * as Yup from "yup";
import { StyledContainer, useStyles } from "../JobSeekerProfileFlowStyles";
import { ERROR_KEY, HALF_SIZE_GRID, FULL_SIZE_GRID, LETTERS_ONLY_REGEX, SPECIAL_CHAR_ERR_MSG, DISABLED_KEY, WARNING_KEY, } from "../../../constants";
import DeleteIcon from "@mui/icons-material/Delete";
import { OFFERED_ROLE, JOIN_LOCATION, PROPOSED_DATE, EMPLOYER_NAME, FormAttributes, OFFER_ADD_TEXT, SAVE_BTN_TEXT, DELETE_BTN_TEXT, } from "./CurrentOffersConstants";
import AddIcon from "@mui/icons-material/Add";
import "./CurrentOffers.css";
import InlineInputs from "../../../components/InlineInputs/InlineInputs";
import { CTCDetails, FIXED_CTC_TEXT, TOTAL_CTC_LABEL, TCTC_PLACEHOLDER, TCTC_SUB_TEXT, TOTAL_CTC_TEXT, VARIABLE_CTC_TEXT, } from "../JobSeekerProfileFlowConstants";
import DropZoneUpload from "../../../components/FileUploadComponent/DropZoneUpload";
import Calendar from "../../../components/Calendar/Calendar";
var CurrentOffers = function (props) {
    var _a;
    var classes = useStyles();
    var _b = React.useState([]), serviceList = _b[0], setServiceList = _b[1];
    var _c = React.useState([]), serviceListFiles = _c[0], setServiceListFiles = _c[1];
    var _d = React.useState(((_a = props === null || props === void 0 ? void 0 : props.prefilData) === null || _a === void 0 ? void 0 : _a.map(function (files) { return files.letterFiles; })) || []), prefillOfferLetters = _d[0], setPrefillOfferLetters = _d[1];
    var _e = React.useState({ fixedCtcLakh: "", fixedCtcThousand: "" }), fixedCtc = _e[0], setFixedCtc = _e[1];
    var _f = React.useState({ variableCtcLakh: "", variableCtcThousand: "" }), variableCtc = _f[0], setVariableCtc = _f[1];
    var handleServiceRemove = function (index) {
        var list = __spreadArray([], serviceList, true);
        list.splice(index, 1);
        setServiceList(list);
        var memberList = __spreadArray([], offerAddForm.values.members, true);
        memberList.splice(index, 1);
        offerAddForm.setValues(function (prevValues) { return ({
            members: memberList,
        }); });
        serviceListFiles[index] = null;
        fixedCtc.fixedCtcLakh = "";
        fixedCtc.fixedCtcThousand = "";
        variableCtc.variableCtcLakh = "";
        variableCtc.variableCtcThousand = "";
    };
    var handleDeleteData = function (index) {
        props.removeOfferData(index);
        handleServiceRemove(index);
        // if (serviceList.length === 1) offerAddForm.resetForm();
    };
    var initialValuesForForm = {
        joiningDate: "",
        joiningLocation: "",
        employerName: "",
        countryCode: "",
        designation: "",
        letterFiles: [],
        saveStatus: false,
        fieldDisabled: false,
        fixedCtc: {},
        variableCtc: {},
        totalCtc: "",
    };
    var currentOfferSubmit = function (index) {
        if (!offerAddForm.values.members[index].joiningDate ||
            !offerAddForm.values.members[index].joiningLocation ||
            !offerAddForm.values.members[index].employerName ||
            !offerAddForm.values.members[index].designation) {
            props.setType(WARNING_KEY);
            props.setDataMessage("Please fill the required fields");
            props.setOpen(true);
        }
        else if (offerAddForm.values.members[index].letterFiles.length < 1) {
            props.setType(WARNING_KEY);
            props.setDataMessage("Please upload offer letter");
            props.setOpen(true);
        }
        else if (offerAddForm.values.members[index].fixedCtc.fixedCtcLakh === "" ||
            offerAddForm.values.members[index].variableCtc.variableCtcLakh === "") {
            props.setType(WARNING_KEY);
            props.setDataMessage("Please provide CTC details");
            props.setOpen(true);
        }
        else {
            offerAddForm.setFieldValue("members[".concat(index, "].saveStatus"), true);
            offerAddForm.setFieldValue("members[".concat(index, "].fieldDisabled"), true);
            props.setOfferData(offerAddForm.values.members);
        }
    };
    var teamArray = [];
    var offerAddForm = useFormik({
        initialValues: { members: teamArray },
        validationSchema: Yup.object().shape({
            members: Yup.array()
                .of(Yup.object({
                joiningDate: Yup.string()
                    .required(FormAttributes.joiningDate.required)
                    .min(3)
                    .max(FormAttributes.joiningDate.maxLength)
                    .matches(LETTERS_ONLY_REGEX, SPECIAL_CHAR_ERR_MSG),
                joiningLocation: Yup.string()
                    .required(FormAttributes.joiningLocation.required)
                    //.min(1)
                    .max(FormAttributes.joiningLocation.maxLength)
                    .matches(LETTERS_ONLY_REGEX, SPECIAL_CHAR_ERR_MSG),
                employerName: Yup.string()
                    //.min(6)
                    .max(FormAttributes.employerName.maxLength)
                    .required(FormAttributes.employerName.required),
                // countryCode: Yup.string()
                //   .required(COUNTRY_CODE_MSG)
                //   .min(1)
                //   .max(FormAttributes.countryCode.maxLength)
                //   .matches(NUMBER_ONLY_REGEX),
                designation: Yup.string()
                    //.min(6)
                    .max(FormAttributes.designation.maxLength)
                    //.matches(SPECIAL_CHAR_ERR_MSG)
                    .required(FormAttributes.designation.required),
            }))
                .required("offr details required")
                .min(1, "add at least one offer"),
        }),
        onSubmit: function (values, _a) {
            var setSubmitting = _a.setSubmitting;
        },
        enableReinitialize: true,
    });
    var handleFixedCtc = function (value, pos, index) {
        if (pos === 0)
            offerAddForm.values.members[index].fixedCtc.fixedCtcLakh = value
                ? value
                : "0";
        else if (pos === 1)
            offerAddForm.values.members[index].fixedCtc.fixedCtcThousand = value
                ? value
                : "0";
        // offerAddForm.setFieldValue(`members[${index}].saveStatus`, true);
        handleTotalCtc(index);
    };
    var handleVariableCtc = function (value, pos, index) {
        if (pos === 0)
            offerAddForm.values.members[index].variableCtc.variableCtcLakh = value
                ? value
                : "0";
        else if (pos === 1)
            offerAddForm.values.members[index].variableCtc.variableCtcThousand = value
                ? value
                : "0";
        // offerAddForm.setFieldValue(`members[${index}].saveStatus`, true);
        handleTotalCtc(index);
    };
    var handleTotalCtc = function (index) {
        offerAddForm.values.members[index].totalCtc = ((parseInt(offerAddForm.values.members[index].fixedCtc.fixedCtcLakh) +
            parseInt(offerAddForm.values.members[index].variableCtc.variableCtcLakh)) *
            100000 +
            (parseInt(offerAddForm.values.members[index].fixedCtc.fixedCtcThousand) +
                parseInt(offerAddForm.values.members[index].variableCtc.variableCtcThousand)) *
                1000).toString();
        // offerAddForm.setFieldValue(`members[${index}].saveStatus`, true);
    };
    var handleServiceAdd = function (prefillValue) {
        offerAddForm.setValues(function (prevValues) { return ({
            members: __spreadArray(__spreadArray([], prevValues.members, true), [
                __assign(__assign({}, initialValuesForForm), prefillValue),
            ], false),
        }); });
        setServiceList(function (prevState) { return __spreadArray(__spreadArray([], prevState, true), [
            __assign(__assign({}, initialValuesForForm), prefillValue),
        ], false); });
    };
    var AddMultipleService = function (prefillArray) {
        if (prefillArray) {
            offerAddForm.setValues(function (prevValues) { return ({
                members: __spreadArray([], prefillArray, true),
            }); });
            setServiceList(function (prevState) { return __spreadArray([], prefillArray, true); });
        }
    };
    var getError = function (name) {
        var error = getIn(offerAddForm.errors, name);
        var touch = getIn(offerAddForm.touched, name);
        return touch && error ? error : null;
    };
    useEffect(function () {
        if (props.prefilData) {
            AddMultipleService(props.prefilData);
        }
        else if (serviceList.length === 0)
            handleServiceAdd();
    }, []);
    var receiveFileContent = function (files, index) {
        var tempArray = serviceListFiles;
        tempArray[index] = files;
        setServiceListFiles(function () { return __spreadArray([], tempArray, true); });
        offerAddForm.setFieldValue("members[".concat(index, "].letterFiles"), files);
    };
    var removeFile = function (index) {
        var tempArray = __spreadArray([], serviceListFiles, true);
        tempArray.splice(index, 1);
        setServiceListFiles(function () { return tempArray; });
        offerAddForm.values.members[index].letterFiles = null;
    };
    return (_jsxs(React.Fragment, { children: [_jsx("div", __assign({ id: "add-offer-detailes-button-container", className: "add-btn-div" }, { children: _jsxs(Button, __assign({ id: "add-offer-detailes-container", className: "next-button stack-button", variant: "contained", onClick: function () { return handleServiceAdd(); }, disabled: props.disabled }, { children: [_jsx(AddIcon, { className: "add-icon" }), " ", OFFER_ADD_TEXT] })) })), serviceList.length > 0 &&
                serviceList.map(function (singleService, index) {
                    var _a, _b, _c;
                    return (_jsx("div", __assign({ className: "services" }, { children: _jsx("div", __assign({ className: "first-division" }, { children: _jsxs(StyledContainer, { children: [_jsxs(Grid, __assign({ container: true, className: classes.muiContainer }, { children: [_jsx(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: FULL_SIZE_GRID, lg: FULL_SIZE_GRID, sx: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                    marginBottom: 1,
                                                } }, { children: _jsxs(Typography, __assign({ className: classes.Heading2 }, { children: ["Add Offer ", index + 1, " Details"] })) })), _jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: HALF_SIZE_GRID, lg: HALF_SIZE_GRID, className: "add-team-grid" }, { children: [_jsxs("p", { children: [PROPOSED_DATE, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), _jsx(Calendar, { setDate: function (date) {
                                                            offerAddForm.setFieldValue("members[".concat(index, "].joiningDate"), date);
                                                        }, status: true, value: offerAddForm.values.members[index].joiningDate, calendarDisabled: props.disabled ||
                                                            offerAddForm.values.members[index].fieldDisabled })] })), _jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: HALF_SIZE_GRID, lg: HALF_SIZE_GRID, className: "add-team-grid" }, { children: [_jsxs("p", { children: [JOIN_LOCATION, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), _jsx(TextField, { disabled: props.disabled ||
                                                            offerAddForm.values.members[index].fieldDisabled, required: true, id: FormAttributes.joiningLocation.id, placeholder: FormAttributes.joiningLocation.placeholder, label: FormAttributes.joiningLocation.label, className: classes.boxInputField, size: "small", name: "members[".concat(index, "].joiningLocation"), onBlur: offerAddForm.handleBlur, onChange: offerAddForm.handleChange, value: offerAddForm.values.members[index].joiningLocation, error: getError("members[".concat(index, "].joiningLocation")), helperText: getError("members[".concat(index, "].joiningLocation")) })] })), _jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: HALF_SIZE_GRID, lg: HALF_SIZE_GRID, className: "add-team-grid" }, { children: [_jsxs("p", { children: [EMPLOYER_NAME, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), _jsx(TextField, { disabled: props.disabled ||
                                                            offerAddForm.values.members[index].fieldDisabled, required: true, id: FormAttributes.employerName.id, placeholder: FormAttributes.employerName.placeholder, label: FormAttributes.employerName.label, className: classes.boxInputField, size: "small", name: "members[".concat(index, "].employerName"), onBlur: offerAddForm.handleBlur, onChange: offerAddForm.handleChange, value: offerAddForm.values.members[index].employerName, error: getError("members[".concat(index, "].employerName")), helperText: getError("members[".concat(index, "].employerName")) })] })), _jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: HALF_SIZE_GRID, lg: HALF_SIZE_GRID, className: "add-team-grid" }, { children: [_jsxs("p", { children: [OFFERED_ROLE, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), _jsx(TextField, { disabled: props.disabled ||
                                                            offerAddForm.values.members[index].fieldDisabled, id: FormAttributes.designation.id, placeholder: FormAttributes.designation.placeholder, label: FormAttributes.designation.label, required: true, size: "small", className: classes.boxInputField, name: "members[".concat(index, "].designation"), onBlur: offerAddForm.handleBlur, onChange: offerAddForm.handleChange, value: offerAddForm.values.members[index].designation, error: getError("members[".concat(index, "].designation")), helperText: getError("members[".concat(index, "].designation")) })] })), _jsxs("p", __assign({ className: "sub-text" }, { children: ["Offer CTC in INR", _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] })), _jsxs("div", __assign({ className: "inner-div" }, { children: [_jsx(InlineInputs, { InlineInputsArray: CTCDetails, InlineInputTitle: FIXED_CTC_TEXT, disabled: props.disabled ||
                                                            offerAddForm.values.members[index].fieldDisabled, setValues: function (val, ind) {
                                                            handleFixedCtc(val, ind, index);
                                                        }, value: offerAddForm.values.members[index].fixedCtc }), _jsx(InlineInputs, { InlineInputsArray: CTCDetails, InlineInputTitle: VARIABLE_CTC_TEXT, disabled: props.disabled ||
                                                            offerAddForm.values.members[index].fieldDisabled, setValues: function (val, ind) {
                                                            handleVariableCtc(val, ind, index);
                                                        }, value: offerAddForm.values.members[index].variableCtc }), _jsxs("div", { children: [_jsx("div", __assign({ className: "experience-card-title" }, { children: _jsx("div", { children: _jsx("p", { children: TOTAL_CTC_TEXT }) }) })), _jsxs("div", __assign({ className: "inline-div" }, { children: [_jsx(TextField, { id: "total-ctc-textbox", disabled: true, type: "text", label: TOTAL_CTC_LABEL, placeholder: TCTC_PLACEHOLDER, InputProps: {
                                                                            inputProps: {
                                                                                maxLength: 12,
                                                                            },
                                                                        }, size: "small", value: offerAddForm.values.members[index].totalCtc }), _jsx("div", __assign({ className: "tctc-text" }, { children: _jsx("span", { children: TCTC_SUB_TEXT }) }))] }))] })] })), _jsx("p", __assign({ className: "sub-text" }, { children: "Attach Offer Letter" })), _jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: HALF_SIZE_GRID, lg: HALF_SIZE_GRID, className: classes.limitWidth }, { children: [!offerAddForm.values.members[index].fieldDisabled &&
                                                        !props.disabled ? (_jsx(DropZoneUpload, { receiveFileContent: receiveFileContent, data: index, disabled: props.disabled })) : null, serviceListFiles[index] &&
                                                        (serviceListFiles === null || serviceListFiles === void 0 ? void 0 : serviceListFiles.length) > 0 &&
                                                        ((_a = serviceListFiles[index]) === null || _a === void 0 ? void 0 : _a.length) > 0 ? (_jsxs(Box, { children: [_jsx(Button, __assign({ className: "next-button", variant: "contained" }, { children: (_b = serviceListFiles[index][0]) === null || _b === void 0 ? void 0 : _b.name })), _jsx(Button, __assign({ type: "button", disabled: offerAddForm.values.members[index].saveStatus ||
                                                                    props.disabled, onClick: function () { return removeFile(index); }, className: "remove-btn" }, { children: _jsx(DeleteIcon, { color: offerAddForm.values.members[index]
                                                                        .fieldDisabled || props.disabled
                                                                        ? DISABLED_KEY
                                                                        : ERROR_KEY }) }))] })) : null, !serviceListFiles[index] &&
                                                        (prefillOfferLetters === null || prefillOfferLetters === void 0 ? void 0 : prefillOfferLetters.length) > 0 &&
                                                        ((_c = prefillOfferLetters[index]) === null || _c === void 0 ? void 0 : _c.length) > 0 ? (_jsxs(Box, { children: [_jsx(Button, __assign({ className: "next-button", variant: "contained" }, { children: prefillOfferLetters[index][0].path })), _jsx(Button, __assign({ type: "button", onClick: function () {
                                                                    var letter = prefillOfferLetters;
                                                                    letter.splice(index, 1);
                                                                    console.log(letter);
                                                                    setPrefillOfferLetters(__spreadArray([], letter, true));
                                                                }, className: "remove-btn" }, { children: _jsx(DeleteIcon, { color: !offerAddForm.values.members[index].saveStatus
                                                                        ? ERROR_KEY
                                                                        : DISABLED_KEY }) }))] })) : null] }))] })), !props.disabled ? (_jsx("div", __assign({ className: "final-button-div" }, { children: !offerAddForm.values.members[index].saveStatus ? (_jsx(Button, __assign({ id: SAVE_BTN_TEXT + "-button", className: "save-button", variant: "outlined", onClick: function () {
                                                currentOfferSubmit(index);
                                            } }, { children: SAVE_BTN_TEXT }))) : (_jsx(Button, __assign({ id: DELETE_BTN_TEXT + "-button", className: "save-button", variant: "outlined", onClick: function () {
                                                handleDeleteData(index);
                                            } }, { children: DELETE_BTN_TEXT }))) }))) : null] }) })) }), index));
                })] }));
};
export default CurrentOffers;
