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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useImperativeHandle, useEffect } from "react";
import { Stack, Grid, Radio, TextField, RadioGroup, FormControl, FormControlLabel, } from "@mui/material";
import { useStyles } from "../JobSeekerProfileFlowStyles";
import { HALF_SIZE_GRID, FULL_SIZE_GRID, CITY_LABEL, COUNTRY_LABEL, WorkStatusType, WARNING_KEY, } from "../../../constants";
import { JOB_TYPE_TEXT, JOBLESS_REASON, END_CLIENT_TEXT, JOB_TYPE_OPTIONS, PAYROLL_NAME_TEXT, COMPANY_NAME_LABEL, LAST_EMPLOYER_TEXT, JOBLESS_HELPER_TEXT, LAST_EMPLOYER_LOCATION_TEXT, PREV_EMPLOYER_RELIEVING_TEXT, CURRENT_EMPLOYER_TEXT, COMPANY_LOCATION_TEXT, CURRENT_EMPLOYER_JOINING_TEXT, } from "./ExperiencedSeekerConstants";
import "../JobSeekerProfileFlow.css";
import Calendar from "../../../components/Calendar/Calendar";
import { useFormik } from "formik";
import * as Yup from "yup";
var ExperiencedSeeker = React.forwardRef(function (props, ref) {
    var classes = useStyles();
    var experiencedSeekerForm = useFormik({
        initialValues: {
            jobDurationType: JOB_TYPE_OPTIONS[0],
            currentEmployer: "",
            country: "",
            city: "",
            relievingDate: "",
            joiningDate: "",
            notWorkingReason: "",
            endClient: "",
            payrollEmployer: "",
            lastEmployer: "",
        },
        validationSchema: Yup.object().shape({
            currentEmployer: Yup.string()
                .required("Please add current Employer")
                .min(1),
            country: Yup.string().required("Please add Country").min(1),
            city: Yup.string().required("Please add City").min(1),
            jobDurationType: Yup.string(),
            endClient: Yup.string(),
            lastEmployer: Yup.string(),
            payrollEmployer: Yup.string(),
            joiningDate: Yup.string(),
            relievingDate: Yup.string(),
            notWorkingReason: Yup.string(),
        }),
        onSubmit: function (values, _a) {
            var setSubmitting = _a.setSubmitting;
        },
        enableReinitialize: true,
    });
    var handleSubmit = function () {
        if (!validateExperienceDetails()) {
            props.setParentData(experiencedSeekerForm.initialValues);
            props.setType(WARNING_KEY);
            props.setDataMessage("Please enter all experience details");
            props.setOpen(true);
        }
        else
            props.setParentData(experiencedSeekerForm.values);
    };
    var validateExperienceDetails = function () {
        if (!experiencedSeekerForm.values.city ||
            !experiencedSeekerForm.values.country)
            return false;
        switch (props.workStatus) {
            case WorkStatusType.JOBLESS:
                if (experiencedSeekerForm.values.jobDurationType === JOB_TYPE_OPTIONS[0]) {
                    if (!experiencedSeekerForm.values.lastEmployer ||
                        !experiencedSeekerForm.values.relievingDate ||
                        !experiencedSeekerForm.values.notWorkingReason)
                        return false;
                }
                else {
                    if (!experiencedSeekerForm.values.lastEmployer ||
                        !experiencedSeekerForm.values.relievingDate ||
                        !experiencedSeekerForm.values.notWorkingReason ||
                        !experiencedSeekerForm.values.payrollEmployer ||
                        !experiencedSeekerForm.values.endClient)
                        return false;
                }
                break;
            case WorkStatusType.FULL_TIME:
                if (experiencedSeekerForm.values.jobDurationType === JOB_TYPE_OPTIONS[0]) {
                    if (!experiencedSeekerForm.values.currentEmployer ||
                        !experiencedSeekerForm.values.joiningDate)
                        return false;
                }
                else {
                    if (!experiencedSeekerForm.values.currentEmployer ||
                        !experiencedSeekerForm.values.joiningDate ||
                        !experiencedSeekerForm.values.payrollEmployer ||
                        !experiencedSeekerForm.values.endClient)
                        return false;
                }
                break;
        }
        return true;
    };
    var handleDate = function (dateValue) {
        props.workStatus === WorkStatusType.JOBLESS
            ? experiencedSeekerForm.setFieldValue("relievingDate", dateValue)
            : experiencedSeekerForm.setFieldValue("joiningDate", dateValue);
    };
    useImperativeHandle(ref, function () { return ({
        childMethod: function () {
            handleSubmit();
        },
    }); });
    useEffect(function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        if (props.experiencedPrefillData) {
            if ((_a = props.experiencedPrefillData) === null || _a === void 0 ? void 0 : _a.city)
                experiencedSeekerForm.setFieldValue("city", (_b = props.experiencedPrefillData) === null || _b === void 0 ? void 0 : _b.city);
            if ((_c = props.experiencedPrefillData) === null || _c === void 0 ? void 0 : _c.country)
                experiencedSeekerForm.setFieldValue("country", (_d = props.experiencedPrefillData) === null || _d === void 0 ? void 0 : _d.country);
            if ((_e = props.experiencedPrefillData) === null || _e === void 0 ? void 0 : _e.endClient)
                experiencedSeekerForm.setFieldValue("endClient", (_f = props.experiencedPrefillData) === null || _f === void 0 ? void 0 : _f.endClient);
            if ((_g = props.experiencedPrefillData) === null || _g === void 0 ? void 0 : _g.lastEmployer)
                experiencedSeekerForm.setFieldValue("lastEmployer", (_h = props.experiencedPrefillData) === null || _h === void 0 ? void 0 : _h.lastEmployer);
            if ((_j = props.experiencedPrefillData) === null || _j === void 0 ? void 0 : _j.relievingDate)
                experiencedSeekerForm.setFieldValue("relievingDate", (_k = props.experiencedPrefillData) === null || _k === void 0 ? void 0 : _k.relievingDate);
            if ((_l = props.experiencedPrefillData) === null || _l === void 0 ? void 0 : _l.currentEmployer)
                experiencedSeekerForm.setFieldValue("currentEmployer", (_m = props.experiencedPrefillData) === null || _m === void 0 ? void 0 : _m.currentEmployer);
            if ((_o = props.experiencedPrefillData) === null || _o === void 0 ? void 0 : _o.payrollEmployer)
                experiencedSeekerForm.setFieldValue("payrollEmployer", (_p = props.experiencedPrefillData) === null || _p === void 0 ? void 0 : _p.payrollEmployer);
            if ((_q = props.experiencedPrefillData) === null || _q === void 0 ? void 0 : _q.notWorkingReason)
                experiencedSeekerForm.setFieldValue("notWorkingReason", (_r = props.experiencedPrefillData) === null || _r === void 0 ? void 0 : _r.notWorkingReason);
        }
    }, []);
    return (_jsx(React.Fragment, { children: _jsx("div", __assign({ className: "experienced-div" }, { children: _jsxs(Grid, __assign({ container: true, className: classes.muiContainer }, { children: [_jsx(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: FULL_SIZE_GRID, lg: FULL_SIZE_GRID }, { children: _jsxs("div", { children: [_jsx("div", __assign({ className: "experience-card-title" }, { children: _jsxs("p", { children: [JOB_TYPE_TEXT, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }) })), _jsx("div", { children: _jsx(FormControl, { children: _jsx(RadioGroup, __assign({ id: "jobDurationType", value: experiencedSeekerForm.values.jobDurationType, onChange: function (e) {
                                                experiencedSeekerForm.setFieldValue("jobDurationType", e.target.value);
                                            } }, { children: JOB_TYPE_OPTIONS.map(function (type) { return (_jsx(FormControlLabel, { disabled: props.disabled, value: type, control: _jsx(Radio, {}), label: type }, type)); }) })) }) }), props.workStatus === WorkStatusType.JOBLESS ? (_jsx("div", __assign({ className: "reason-field" }, { children: _jsx(TextField, { required: true, id: "notWorkingReason", disabled: props.disabled, type: "text", multiline: true, fullWidth: true, placeholder: JOBLESS_REASON, rows: 4, helperText: JOBLESS_HELPER_TEXT, onBlur: experiencedSeekerForm.handleBlur, onChange: experiencedSeekerForm.handleChange, value: experiencedSeekerForm.values.notWorkingReason, InputProps: {
                                            inputProps: { maxLength: 750 },
                                        }, size: "small" }) }))) : null] }) })), experiencedSeekerForm.values.jobDurationType === JOB_TYPE_OPTIONS[1] ? (_jsxs(_Fragment, { children: [_jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: HALF_SIZE_GRID, lg: HALF_SIZE_GRID }, { children: [_jsx("p", { children: PAYROLL_NAME_TEXT }), _jsx(TextField, { required: true, id: "payrollEmployer", disabled: props.disabled, label: COMPANY_NAME_LABEL, className: classes.boxInputField, size: "small", onBlur: experiencedSeekerForm.handleBlur, onChange: experiencedSeekerForm.handleChange, value: experiencedSeekerForm.values.payrollEmployer })] })), _jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: HALF_SIZE_GRID, lg: HALF_SIZE_GRID }, { children: [_jsx("p", { children: END_CLIENT_TEXT }), _jsx(TextField, { required: true, id: "endClient", disabled: props.disabled, label: COMPANY_NAME_LABEL, className: classes.boxInputField, size: "small", onBlur: experiencedSeekerForm.handleBlur, onChange: experiencedSeekerForm.handleChange, value: experiencedSeekerForm.values.endClient })] }))] })) : null, _jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: HALF_SIZE_GRID, lg: HALF_SIZE_GRID }, { children: [_jsxs("p", { children: [props.workStatus === WorkStatusType.JOBLESS
                                        ? LAST_EMPLOYER_TEXT
                                        : CURRENT_EMPLOYER_TEXT, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), props.workStatus === WorkStatusType.JOBLESS ? (_jsx(TextField, { required: true, id: "lastEmployer", disabled: props.disabled, label: COMPANY_NAME_LABEL, className: classes.boxInputField, size: "small", onBlur: experiencedSeekerForm.handleBlur, onChange: experiencedSeekerForm.handleChange, value: experiencedSeekerForm.values.lastEmployer })) : (_jsx(TextField, { required: true, id: "currentEmployer", disabled: props.disabled, label: COMPANY_NAME_LABEL, className: classes.boxInputField, size: "small", onBlur: experiencedSeekerForm.handleBlur, onChange: experiencedSeekerForm.handleChange, value: experiencedSeekerForm.values.currentEmployer }))] })), _jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: HALF_SIZE_GRID, lg: HALF_SIZE_GRID }, { children: [_jsxs("p", { children: [props.workStatus === WorkStatusType.JOBLESS
                                        ? LAST_EMPLOYER_LOCATION_TEXT
                                        : COMPANY_LOCATION_TEXT, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), _jsxs(Stack, __assign({ direction: "row", spacing: 3 }, { children: [_jsx(TextField, { required: true, id: "city", disabled: props.disabled, label: CITY_LABEL, className: classes.inputField, size: "small", onBlur: experiencedSeekerForm.handleBlur, onChange: experiencedSeekerForm.handleChange, value: experiencedSeekerForm.values.city }), _jsx(TextField, { required: true, id: "country", disabled: props.disabled, label: COUNTRY_LABEL, className: classes.inputField, size: "small", onBlur: experiencedSeekerForm.handleBlur, onChange: experiencedSeekerForm.handleChange, value: experiencedSeekerForm.values.country })] }))] })), _jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: HALF_SIZE_GRID, lg: HALF_SIZE_GRID }, { children: [_jsxs("p", { children: [props.workStatus === WorkStatusType.JOBLESS
                                        ? PREV_EMPLOYER_RELIEVING_TEXT
                                        : CURRENT_EMPLOYER_JOINING_TEXT, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), _jsx(Calendar, { setDate: handleDate, status: true })] }))] })) })) }));
});
export default ExperiencedSeeker;
