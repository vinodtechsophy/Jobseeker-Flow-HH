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
import { Grid, Button, Checkbox, TextField, Typography, } from "@mui/material";
import { useFormik, getIn } from "formik";
import * as Yup from "yup";
import { StyledContainer, useStyles } from "../JobSeekerProfileFlowStyles";
import { URL_REGEX, URL_ERROR_MSG, ALPHA_ERR_MSG, HALF_SIZE_GRID, FULL_SIZE_GRID, LETTERS_ONLY_REGEX, ALPHA_NUMERIC_REGEX, SPECIAL_CHAR_ERR_MSG, } from "../../../constants";
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
                .required("offr details required")
                .min(1, "add at least one offer"),
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
                channel: "Company Onboard",
                otherChannel: "",
            }); });
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
        certificationDetailsForm.setValues(function (prevValues) { return ({
            members: __spreadArray(__spreadArray([], prevValues.members, true), [__assign({}, initialValuesForForm)], false),
        }); });
        setServiceList(function (prevState) { return __spreadArray(__spreadArray([], prevState, true), [{ service: "" }], false); });
    };
    var getError = function (name) {
        var error = getIn(certificationDetailsForm.errors, name);
        var touch = getIn(certificationDetailsForm.touched, name);
        return touch && error ? error : null;
    };
    useEffect(function () {
        if (serviceList.length === 0)
            handleServiceAdd();
    }, []);
    var handleIssueDate = function (date, index) {
        certificationDetailsForm.setFieldValue("members[".concat(index, "].issueDate"), date);
    };
    var handleExpirationDate = function (date, index) {
        certificationDetailsForm.setFieldValue("members[".concat(index, "].expirationDate"), date);
    };
    var handleSaveData = function (index) {
        certificationDetailsForm.setFieldValue("members[".concat(index, "].saveStatus"), true);
        props.setCertificationData(certificationDetailsForm.values.members[index]);
    };
    var handleDeleteData = function (index) {
        props.removeCertification(index);
        handleServiceRemove(index);
        certificationDetailsForm.resetForm();
    };
    return (_jsx(React.Fragment, { children: _jsxs("div", __assign({ className: "certification-div" }, { children: [_jsx("div", __assign({ className: "add-btn-div" }, { children: _jsxs(Button, __assign({ className: "next-button", variant: "contained", onClick: handleServiceAdd }, { children: [_jsx(AddIcon, { className: "add-icon" }), " ", CERTIFICATION_ADD_TEXT] })) })), serviceList.length > 0 &&
                    serviceList.map(function (singleService, index) { return (_jsx("div", __assign({ className: "services" }, { children: _jsx("div", __assign({ className: "first-division" }, { children: _jsxs(StyledContainer, { children: [_jsxs(Grid, __assign({ container: true, className: classes.muiContainer }, { children: [_jsx(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: FULL_SIZE_GRID, lg: FULL_SIZE_GRID, sx: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                    marginBottom: 1,
                                                } }, { children: _jsxs(Typography, __assign({ className: classes.Heading2 }, { children: ["Certification ", index + 1, " Details"] })) })), _jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: HALF_SIZE_GRID, lg: HALF_SIZE_GRID }, { children: [_jsxs("p", { children: [CERTIFICATION_NAME_TEXT, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), _jsx(TextField, { required: true, disabled: props.disabled, id: FormAttributes.name.id, placeholder: FormAttributes.name.placeholder, className: classes.boxInputField, size: "small", name: "members[".concat(index, "].name"), onBlur: certificationDetailsForm.handleBlur, onChange: certificationDetailsForm.handleChange, value: certificationDetailsForm.values.members[index].name, error: getError("members[".concat(index, "].name")), helperText: getError("members[".concat(index, "].name")) })] })), _jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: HALF_SIZE_GRID, lg: HALF_SIZE_GRID, className: "right-grid" }, { children: [_jsxs("p", { children: [CERTIFICATION_ORIGIN_TEXT, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), _jsx(TextField, { required: true, disabled: props.disabled, id: FormAttributes.issuingOrganization.id, placeholder: FormAttributes.issuingOrganization.placeholder, className: classes.boxInputField, size: "small", name: "members[".concat(index, "].issuingOrganization"), onBlur: certificationDetailsForm.handleBlur, onChange: certificationDetailsForm.handleChange, value: certificationDetailsForm.values.members[index]
                                                            .issuingOrganization, error: getError("members[".concat(index, "].issuingOrganization")), helperText: getError("members[".concat(index, "].issuingOrganization")) })] })), _jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: FULL_SIZE_GRID, lg: FULL_SIZE_GRID, mt: 2 }, { children: [_jsx("span", { children: CREDENTIAL_EXPIRY_TEXT }), _jsx(Checkbox, { checked: certificationDetailsForm.values.members[index]
                                                            .credentialStatus, value: certificationDetailsForm.values.members[index]
                                                            .credentialStatus, onChange: function (event) {
                                                            return certificationDetailsForm.setFieldValue("members[".concat(index, "].credentialStatus"), event.target.checked);
                                                        }, inputProps: { "aria-label": "controlled" } })] })), _jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: HALF_SIZE_GRID, lg: HALF_SIZE_GRID, mt: 2 }, { children: [_jsxs("p", { children: [CERTIFICATION_ISSUE_DATE, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), _jsx(Calendar, { setDate: function (date) { return handleIssueDate(date, index); }, status: true })] })), _jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: HALF_SIZE_GRID, lg: HALF_SIZE_GRID, className: "right-grid", mt: 2 }, { children: [_jsxs("p", { children: [CERTIFICATION_EXPIRY_DATE, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), _jsx(Calendar, { setDate: function (date) { return handleExpirationDate(date, index); }, status: true, disabled: certificationDetailsForm.values.members[index]
                                                            .credentialStatus })] })), _jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: HALF_SIZE_GRID, lg: HALF_SIZE_GRID, className: "credential-grid" }, { children: [_jsxs("p", { children: [CREDENTIAL_ID_TEXT, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), _jsx(TextField, { required: true, disabled: props.disabled, id: FormAttributes.credentialId.id, placeholder: FormAttributes.credentialId.placeholder, className: classes.boxInputField, size: "small", name: "members[".concat(index, "].credentialId"), onBlur: certificationDetailsForm.handleBlur, onChange: certificationDetailsForm.handleChange, value: certificationDetailsForm.values.members[index]
                                                            .credentialId, error: getError("members[".concat(index, "].credentialId")), helperText: getError("members[".concat(index, "].credentialId")) })] })), _jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: HALF_SIZE_GRID, lg: HALF_SIZE_GRID, className: "credential-grid right-grid" }, { children: [_jsxs("p", { children: [CREDENTIAL_URL_TEXT, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), _jsx(TextField, { id: FormAttributes.credentialURL.id, placeholder: FormAttributes.credentialURL.placeholder, required: true, disabled: props.disabled, size: "small", className: classes.boxInputField, name: "members[".concat(index, "].credentialURL"), onBlur: certificationDetailsForm.handleBlur, onChange: certificationDetailsForm.handleChange, value: certificationDetailsForm.values.members[index]
                                                            .credentialURL, error: getError("members[".concat(index, "].credentialURL")), helperText: getError("members[".concat(index, "].credentialURL")) })] }))] })), !props.disabled ? (_jsx("div", __assign({ className: "final-button-div" }, { children: !certificationDetailsForm.values.members[index]
                                            .saveStatus ? (_jsx(Button, __assign({ className: "save-button", variant: "outlined", onClick: function () { return handleSaveData(index); } }, { children: SAVE_BTN_TEXT }))) : (_jsx(Button, __assign({ className: "save-button", variant: "outlined", onClick: function () { return handleDeleteData(index); } }, { children: DELETE_BTN_TEXT }))) }))) : null] }) })) }), index)); })] })) }));
};
export default CertificationDetails;
