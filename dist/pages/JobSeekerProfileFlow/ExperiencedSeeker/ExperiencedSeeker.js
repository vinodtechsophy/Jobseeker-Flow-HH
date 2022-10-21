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
import { HALF_SIZE_GRID, FULL_SIZE_GRID, CITY_LABEL, COUNTRY_LABEL, WorkStatusType, } from "../../../constants";
import { JOB_TYPE_TEXT, JOBLESS_REASON, END_CLIENT_TEXT, JOB_TYPE_OPTIONS, PAYROLL_NAME_TEXT, COMPANY_NAME_LABEL, LAST_EMPLOYER_TEXT, JOBLESS_HELPER_TEXT, LAST_EMPLOYER_LOCATION_TEXT, PREV_EMPLOYER_RELIEVING_TEXT, CURRENT_EMPLOYER_TEXT, COMPANY_LOCATION_TEXT, CURRENT_EMPLOYER_JOINING_TEXT, } from "./ExperiencedSeekerConstants";
import "../JobSeekerProfileFlow.css";
import Calendar from "../../../components/Calendar/Calendar";
import { useFormik } from "formik";
import * as Yup from "yup";
var ExperiencedSeeker = React.forwardRef(function (props, ref) {
    var _a, _b;
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
    var handleDate = function (dateValue) {
        props.workStatus === WorkStatusType.JOBLESS
            ? experiencedSeekerForm.setFieldValue("relievingDate", dateValue)
            : experiencedSeekerForm.setFieldValue("joiningDate", dateValue);
        var tempObject = __assign({}, experiencedSeekerForm.values);
        props.workStatus === WorkStatusType.JOBLESS
            ? (tempObject["relievingDate"] = dateValue)
            : (tempObject["joiningDate"] = dateValue);
        props.setParentData(tempObject);
    };
    useImperativeHandle(ref, function () { return ({
        childMethod: function () {
            return experiencedSeekerForm.values;
        },
    }); });
    useEffect(function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
        if (props.experiencedPrefillData) {
            if ((_a = props.experiencedPrefillData) === null || _a === void 0 ? void 0 : _a.jobDurationType)
                experiencedSeekerForm.setFieldValue("jobDurationType", (_b = props.experiencedPrefillData) === null || _b === void 0 ? void 0 : _b.jobDurationType);
            if ((_c = props.experiencedPrefillData) === null || _c === void 0 ? void 0 : _c.city)
                experiencedSeekerForm.setFieldValue("city", (_d = props.experiencedPrefillData) === null || _d === void 0 ? void 0 : _d.city);
            if ((_e = props.experiencedPrefillData) === null || _e === void 0 ? void 0 : _e.country)
                experiencedSeekerForm.setFieldValue("country", (_f = props.experiencedPrefillData) === null || _f === void 0 ? void 0 : _f.country);
            if ((_g = props.experiencedPrefillData) === null || _g === void 0 ? void 0 : _g.endClient)
                experiencedSeekerForm.setFieldValue("endClient", (_h = props.experiencedPrefillData) === null || _h === void 0 ? void 0 : _h.endClient);
            if ((_j = props.experiencedPrefillData) === null || _j === void 0 ? void 0 : _j.joiningDate)
                experiencedSeekerForm.setFieldValue("joiningDate", (_k = props.experiencedPrefillData) === null || _k === void 0 ? void 0 : _k.joiningDate);
            if ((_l = props.experiencedPrefillData) === null || _l === void 0 ? void 0 : _l.lastEmployer)
                experiencedSeekerForm.setFieldValue("lastEmployer", (_m = props.experiencedPrefillData) === null || _m === void 0 ? void 0 : _m.lastEmployer);
            if ((_o = props.experiencedPrefillData) === null || _o === void 0 ? void 0 : _o.relievingDate)
                experiencedSeekerForm.setFieldValue("relievingDate", (_p = props.experiencedPrefillData) === null || _p === void 0 ? void 0 : _p.relievingDate);
            if ((_q = props.experiencedPrefillData) === null || _q === void 0 ? void 0 : _q.currentEmployer)
                experiencedSeekerForm.setFieldValue("currentEmployer", (_r = props.experiencedPrefillData) === null || _r === void 0 ? void 0 : _r.currentEmployer);
            if ((_s = props.experiencedPrefillData) === null || _s === void 0 ? void 0 : _s.payrollEmployer)
                experiencedSeekerForm.setFieldValue("payrollEmployer", (_t = props.experiencedPrefillData) === null || _t === void 0 ? void 0 : _t.payrollEmployer);
            if ((_u = props.experiencedPrefillData) === null || _u === void 0 ? void 0 : _u.notWorkingReason)
                experiencedSeekerForm.setFieldValue("notWorkingReason", (_v = props.experiencedPrefillData) === null || _v === void 0 ? void 0 : _v.notWorkingReason);
        }
    }, []);
    return (_jsx(React.Fragment, { children: _jsx("div", __assign({ className: "experienced-div" }, { children: _jsxs(Grid, __assign({ container: true, className: classes.muiContainer }, { children: [_jsx(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: FULL_SIZE_GRID, lg: FULL_SIZE_GRID }, { children: _jsxs("div", { children: [_jsx("div", __assign({ className: "experience-card-title" }, { children: _jsxs("p", { children: [JOB_TYPE_TEXT, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }) })), _jsx("div", { children: _jsx(FormControl, { children: _jsx(RadioGroup, __assign({ id: "jobDurationType", value: experiencedSeekerForm.values.jobDurationType, onChange: function (e) {
                                                experiencedSeekerForm.setFieldValue("jobDurationType", e.target.value);
                                            } }, { children: JOB_TYPE_OPTIONS.map(function (type) { return (_jsx(FormControlLabel, { disabled: props.disabled, value: type, control: _jsx(Radio, {}), label: type }, type)); }) })) }) }), props.workStatus === WorkStatusType.JOBLESS ? (_jsx("div", __assign({ className: "reason-field" }, { children: _jsx(TextField, { required: true, id: "notWorkingReason", disabled: props.disabled, label: JOBLESS_REASON, type: "text", multiline: true, fullWidth: true, placeholder: JOBLESS_REASON, rows: 4, helperText: JOBLESS_HELPER_TEXT, onBlur: experiencedSeekerForm.handleBlur, onChange: experiencedSeekerForm.handleChange, value: experiencedSeekerForm.values.notWorkingReason, InputProps: {
                                            inputProps: { maxLength: 750 },
                                        }, size: "small" }) }))) : null] }) })), experiencedSeekerForm.values.jobDurationType ===
                        JOB_TYPE_OPTIONS[1] ? (_jsxs(_Fragment, { children: [_jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: HALF_SIZE_GRID, lg: HALF_SIZE_GRID }, { children: [_jsx("p", __assign({ className: "institute-field" }, { children: PAYROLL_NAME_TEXT })), _jsx(TextField, { required: true, id: "payrollEmployer", disabled: props.disabled, label: COMPANY_NAME_LABEL, className: classes.boxInputField, size: "small", onBlur: experiencedSeekerForm.handleBlur, onChange: experiencedSeekerForm.handleChange, value: experiencedSeekerForm.values.payrollEmployer })] })), _jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: HALF_SIZE_GRID, lg: HALF_SIZE_GRID }, { children: [_jsx("p", __assign({ className: "institute-field" }, { children: END_CLIENT_TEXT })), _jsx(TextField, { required: true, id: "endClient", disabled: props.disabled, label: COMPANY_NAME_LABEL, className: classes.boxInputField, size: "small", onBlur: experiencedSeekerForm.handleBlur, onChange: experiencedSeekerForm.handleChange, value: experiencedSeekerForm.values.endClient })] }))] })) : null, _jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: HALF_SIZE_GRID, lg: HALF_SIZE_GRID }, { children: [_jsxs("p", __assign({ className: "institute-field" }, { children: [props.workStatus === WorkStatusType.JOBLESS
                                        ? LAST_EMPLOYER_TEXT
                                        : CURRENT_EMPLOYER_TEXT, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] })), props.workStatus === WorkStatusType.JOBLESS ? (_jsx("div", { children: _jsx(TextField, { required: true, id: "lastEmployer", disabled: props.disabled, label: COMPANY_NAME_LABEL, className: classes.boxInputField, size: "small", onBlur: experiencedSeekerForm.handleBlur, onChange: experiencedSeekerForm.handleChange, value: experiencedSeekerForm.values.lastEmployer }) })) : (_jsx("div", { children: _jsx(TextField, { required: true, id: "currentEmployer", disabled: props.disabled, label: COMPANY_NAME_LABEL, className: classes.boxInputField, size: "small", onBlur: experiencedSeekerForm.handleBlur, onChange: experiencedSeekerForm.handleChange, value: experiencedSeekerForm.values.currentEmployer }) }))] })), _jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: HALF_SIZE_GRID, lg: HALF_SIZE_GRID }, { children: [_jsxs("p", __assign({ className: "institute-field" }, { children: [props.workStatus === WorkStatusType.JOBLESS
                                        ? LAST_EMPLOYER_LOCATION_TEXT
                                        : COMPANY_LOCATION_TEXT, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] })), _jsxs(Stack, __assign({ direction: "row", spacing: 3 }, { children: [_jsx(TextField, { required: true, id: "city", disabled: props.disabled, label: CITY_LABEL, className: classes.inputField, size: "small", onBlur: experiencedSeekerForm.handleBlur, onChange: experiencedSeekerForm.handleChange, value: experiencedSeekerForm.values.city }), _jsx(TextField, { required: true, id: "country", disabled: props.disabled, label: COUNTRY_LABEL, className: classes.inputField, size: "small", onBlur: experiencedSeekerForm.handleBlur, onChange: experiencedSeekerForm.handleChange, value: experiencedSeekerForm.values.country })] }))] })), _jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: HALF_SIZE_GRID, lg: HALF_SIZE_GRID }, { children: [_jsxs("p", __assign({ className: "institute-field" }, { children: [props.workStatus === WorkStatusType.JOBLESS
                                        ? PREV_EMPLOYER_RELIEVING_TEXT
                                        : CURRENT_EMPLOYER_JOINING_TEXT, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] })), _jsx(Calendar, { setDate: handleDate, status: true, value: props.workStatus === WorkStatusType.JOBLESS
                                    ? (_a = props === null || props === void 0 ? void 0 : props.experiencedPrefillData) === null || _a === void 0 ? void 0 : _a.relievingDate
                                    : (_b = props === null || props === void 0 ? void 0 : props.experiencedPrefillData) === null || _b === void 0 ? void 0 : _b.joiningDate, calendarDisabled: props.disabled })] }))] })) })) }));
});
export default ExperiencedSeeker;
