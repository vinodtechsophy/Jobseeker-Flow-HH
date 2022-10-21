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
import { Grid, Button, Checkbox, TextField, Typography, } from "@mui/material";
import { useFormik, getIn } from "formik";
import * as Yup from "yup";
import { StyledContainer, useStyles } from "../JobSeekerProfileFlowStyles";
import { WARNING_KEY, URL_REGEX, URL_ERROR_MSG, ALPHA_ERR_MSG, HALF_SIZE_GRID, FULL_SIZE_GRID, LETTERS_ONLY_REGEX, ALPHA_NUMERIC_REGEX, SPECIAL_CHAR_ERR_MSG, } from "../../../constants";
import { FormAttributes, SAVE_BTN_TEXT, DELETE_BTN_TEXT, CERTIFICATION_ADD_TEXT, CERTIFICATION_NAME_TEXT, CERTIFICATION_ORIGIN_TEXT, CREDENTIAL_ID_TEXT, CREDENTIAL_URL_TEXT, CERTIFICATION_EXPIRY_DATE, CERTIFICATION_ISSUE_DATE, CREDENTIAL_EXPIRY_TEXT, } from "./CertificationDetailsConstants";
import AddIcon from "@mui/icons-material/Add";
import "./CertificationDetails.css";
import Calendar from "../../../components/Calendar/Calendar";
var CertificationDetails = function (props) {
    var classes = useStyles();
    var _a = React.useState([]), serviceList = _a[0], setServiceList = _a[1];
    var handleServiceRemove = function (index) {
        var list = __spreadArray([], serviceList, true);
        list.splice(index, 1);
        setServiceList(list);
        var memberList = __spreadArray([], certificationDetailsForm.values.members, true);
        memberList.splice(index, 1);
        certificationDetailsForm.setValues(function (prevValues) { return ({
            members: memberList,
        }); });
    };
    var initialValuesForForm = {
        name: "",
        issuingOrganization: "",
        credentialStatus: false,
        credentialId: "",
        credentialURL: "",
        issueDate: "",
        expirationDate: "",
        saveStatus: false,
    };
    var teamArray = [];
    var certificationDetailsForm = useFormik({
        initialValues: { members: teamArray },
        validationSchema: Yup.object().shape({
            members: Yup.array()
                .of(Yup.object({
                name: Yup.string()
                    .required(FormAttributes.name.required)
                    .min(3)
                    .max(FormAttributes.name.maxLength)
                    .matches(LETTERS_ONLY_REGEX, SPECIAL_CHAR_ERR_MSG),
                issuingOrganization: Yup.string()
                    .required(FormAttributes.issuingOrganization.required)
                    .min(3)
                    .max(FormAttributes.issuingOrganization.maxLength)
                    .matches(LETTERS_ONLY_REGEX, SPECIAL_CHAR_ERR_MSG),
                credentialId: Yup.string()
                    .required(FormAttributes.credentialId.required)
                    .min(3)
                    .max(FormAttributes.credentialId.maxLength)
                    .matches(ALPHA_NUMERIC_REGEX, ALPHA_ERR_MSG),
                credentialURL: Yup.string()
                    .required(FormAttributes.credentialURL.required)
                    .min(6)
                    .max(FormAttributes.credentialURL.maxLength)
                    .matches(URL_REGEX, URL_ERROR_MSG),
                issueDate: Yup.string().required(FormAttributes.issueDate.required),
                expirationDate: Yup.string(),
            }))
                .required("offer details required")
                .min(1, "add at least one offer"),
        }),
        onSubmit: function (values, _a) {
            var setSubmitting = _a.setSubmitting;
        },
        enableReinitialize: true,
    });
    var handleServiceAdd = function (prefillValue) {
        certificationDetailsForm.setValues(function (prevValues) { return ({
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
            certificationDetailsForm.setValues(function (prevValues) { return ({
                members: __spreadArray([], prefillArray, true),
            }); });
            setServiceList(function (prevState) { return __spreadArray([], prefillArray, true); });
        }
    };
    var getError = function (name) {
        var error = getIn(certificationDetailsForm.errors, name);
        var touch = getIn(certificationDetailsForm.touched, name);
        return touch && error ? error : null;
    };
    useEffect(function () {
        if (props.prefillDetails) {
            AddMultipleService(props.prefillDetails);
        }
        else if (serviceList.length === 0)
            handleServiceAdd();
    }, []);
    var handleIssueDate = function (date, index) {
        certificationDetailsForm.setFieldValue("members[".concat(index, "].issueDate"), date);
    };
    var handleExpirationDate = function (date, index) {
        certificationDetailsForm.setFieldValue("members[".concat(index, "].expirationDate"), date);
    };
    var handleSaveData = function (index) {
        if (!certificationDetailsForm.values.members[index].issueDate) {
            props.setType(WARNING_KEY);
            props.setDataMessage("Please select issue date");
            props.setOpen(true);
        }
        else if (!certificationDetailsForm.values.members[index].credentialStatus &&
            !certificationDetailsForm.values.members[index].expirationDate) {
            props.setType(WARNING_KEY);
            props.setDataMessage("Please select expiration date");
            props.setOpen(true);
        }
        else if (!certificationDetailsForm.values.members[index].name) {
            props.setType(WARNING_KEY);
            props.setDataMessage("Please enter the certification name");
            props.setOpen(true);
        }
        else if (!certificationDetailsForm.values.members[index].issuingOrganization) {
            props.setType(WARNING_KEY);
            props.setDataMessage("Please enter the issuing organisation's name");
            props.setOpen(true);
        }
        else if (!certificationDetailsForm.values.members[index].credentialId) {
            props.setType(WARNING_KEY);
            props.setDataMessage("Please enter the credentialId");
            props.setOpen(true);
        }
        else if (!certificationDetailsForm.values.members[index].credentialURL) {
            props.setType(WARNING_KEY);
            props.setDataMessage("Please enter the credentialURL");
            props.setOpen(true);
        }
        else if (!certificationDetailsForm.values.members[index].credentialStatus &&
            certificationDetailsForm.values.members[index].issueDate.getTime() >
                certificationDetailsForm.values.members[index].expirationDate.getTime()) {
            props.setType(WARNING_KEY);
            props.setDataMessage("Please select valid expiration date");
            props.setOpen(true);
        }
        else {
            certificationDetailsForm.setFieldValue("members[".concat(index, "].saveStatus"), true);
            props.setCertificationData(certificationDetailsForm.values.members);
        }
    };
    var handleDeleteData = function (index) {
        props.removeCertification(index);
        handleServiceRemove(index);
    };
    return (_jsx(React.Fragment, { children: _jsxs("div", __assign({ className: "certification-div" }, { children: [_jsx("div", __assign({ className: "add-btn-div" }, { children: _jsxs(Button, __assign({ className: "next-button", variant: "contained", onClick: function () { return handleServiceAdd(); } }, { children: [_jsx(AddIcon, { className: "add-icon" }), " ", CERTIFICATION_ADD_TEXT] })) })), serviceList.length > 0 &&
                    serviceList.map(function (singleService, index) { return (_jsx("div", __assign({ className: "services" }, { children: _jsx("div", __assign({ className: "first-division" }, { children: _jsxs(StyledContainer, { children: [_jsxs(Grid, __assign({ container: true, className: classes.muiContainer }, { children: [_jsx(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: FULL_SIZE_GRID, lg: FULL_SIZE_GRID, sx: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                    marginBottom: 1,
                                                } }, { children: _jsxs(Typography, __assign({ className: classes.Heading2 }, { children: ["Certification ", index + 1, " Details"] })) })), _jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: HALF_SIZE_GRID, lg: HALF_SIZE_GRID }, { children: [_jsxs("p", { children: [CERTIFICATION_NAME_TEXT, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), _jsx(TextField, { required: true, disabled: props.disabled, id: FormAttributes.name.id, placeholder: FormAttributes.name.placeholder, label: FormAttributes.name.label, className: classes.boxInputField, size: "small", name: "members[".concat(index, "].name"), onBlur: certificationDetailsForm.handleBlur, onChange: certificationDetailsForm.handleChange, value: certificationDetailsForm.values.members[index].name, error: getError("members[".concat(index, "].name")), helperText: getError("members[".concat(index, "].name")) })] })), _jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: HALF_SIZE_GRID, lg: HALF_SIZE_GRID, className: "right-grid" }, { children: [_jsxs("p", { children: [CERTIFICATION_ORIGIN_TEXT, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), _jsx(TextField, { required: true, disabled: props.disabled, id: FormAttributes.issuingOrganization.id, placeholder: FormAttributes.issuingOrganization.placeholder, label: FormAttributes.issuingOrganization.label, className: classes.boxInputField, size: "small", name: "members[".concat(index, "].issuingOrganization"), onBlur: certificationDetailsForm.handleBlur, onChange: certificationDetailsForm.handleChange, value: certificationDetailsForm.values.members[index]
                                                            .issuingOrganization, error: getError("members[".concat(index, "].issuingOrganization")), helperText: getError("members[".concat(index, "].issuingOrganization")) })] })), _jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: FULL_SIZE_GRID, lg: FULL_SIZE_GRID, mt: 2 }, { children: [_jsx("span", { children: CREDENTIAL_EXPIRY_TEXT }), _jsx(Checkbox, { disabled: props.disabled, checked: certificationDetailsForm.values.members[index]
                                                            .credentialStatus, value: certificationDetailsForm.values.members[index]
                                                            .credentialStatus, onChange: function (event) {
                                                            return certificationDetailsForm.setFieldValue("members[".concat(index, "].credentialStatus"), event.target.checked);
                                                        }, inputProps: { "aria-label": "controlled" } })] })), _jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: HALF_SIZE_GRID, lg: HALF_SIZE_GRID, mt: 2 }, { children: [_jsxs("p", { children: [CERTIFICATION_ISSUE_DATE, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), _jsx(Calendar, { setDate: function (date) { return handleIssueDate(date, index); }, status: true, value: certificationDetailsForm.values.members[index]
                                                            .issueDate, calendarDisabled: props.disabled })] })), _jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: HALF_SIZE_GRID, lg: HALF_SIZE_GRID, className: "right-grid", mt: 2 }, { children: [_jsxs("p", { children: [CERTIFICATION_EXPIRY_DATE, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), _jsx(Calendar, { setDate: function (date) { return handleExpirationDate(date, index); }, status: true, calendarDisabled: certificationDetailsForm.values.members[index]
                                                            .credentialStatus || props.disabled, value: certificationDetailsForm.values.members[index]
                                                            .expirationDate })] })), _jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: HALF_SIZE_GRID, lg: HALF_SIZE_GRID, className: "credential-grid" }, { children: [_jsxs("p", { children: [CREDENTIAL_ID_TEXT, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), _jsx(TextField, { required: true, disabled: props.disabled, id: FormAttributes.credentialId.id, placeholder: FormAttributes.credentialId.placeholder, label: FormAttributes.credentialId.label, className: classes.boxInputField, size: "small", name: "members[".concat(index, "].credentialId"), onBlur: certificationDetailsForm.handleBlur, onChange: certificationDetailsForm.handleChange, value: certificationDetailsForm.values.members[index]
                                                            .credentialId, error: getError("members[".concat(index, "].credentialId")), helperText: getError("members[".concat(index, "].credentialId")) })] })), _jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: HALF_SIZE_GRID, lg: HALF_SIZE_GRID, className: "credential-grid right-grid" }, { children: [_jsxs("p", { children: [CREDENTIAL_URL_TEXT, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), _jsx(TextField, { id: FormAttributes.credentialURL.id, placeholder: FormAttributes.credentialURL.placeholder, label: FormAttributes.credentialURL.label, required: true, disabled: props.disabled, size: "small", className: classes.boxInputField, name: "members[".concat(index, "].credentialURL"), onBlur: certificationDetailsForm.handleBlur, onChange: certificationDetailsForm.handleChange, value: certificationDetailsForm.values.members[index]
                                                            .credentialURL, error: getError("members[".concat(index, "].credentialURL")), helperText: getError("members[".concat(index, "].credentialURL")) })] }))] })), !props.disabled ? (_jsx("div", __assign({ className: "final-button-div" }, { children: !certificationDetailsForm.values.members[index]
                                            .saveStatus ? (_jsx(Button, __assign({ className: "save-button", variant: "outlined", onClick: function () { return handleSaveData(index); } }, { children: SAVE_BTN_TEXT }))) : (_jsx(Button, __assign({ className: "save-button", variant: "outlined", onClick: function () { return handleDeleteData(index); } }, { children: DELETE_BTN_TEXT }))) }))) : null] }) })) }), index)); })] })) }));
};
export default CertificationDetails;
