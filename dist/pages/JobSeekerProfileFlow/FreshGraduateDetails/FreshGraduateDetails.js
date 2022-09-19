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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Stack, Grid, TextField } from '@mui/material';
import { useStyles } from "../JobSeekerProfileFlowStyles";
import { CITY_LABEL, COUNTRY_LABEL, HALF_SIZE_GRID, FULL_SIZE_GRID, } from "../../../constants";
import { COLLEGE_END_TEXT, COLLEGE_START_TEXT, COLLEGE_NAME_LABEL, INSTITUTE_NAME_TEXT, INSTITUTE_LOCATION_TEXT, } from "./FreshGraduateDetailsConstants";
import Calendar from '../../../components/Calendar/Calendar';
import { useFormik } from "formik";
import * as Yup from "yup";
var FreshGraduateDetails = function (props) {
    var classes = useStyles();
    var experiencedSeekerForm = useFormik({
        initialValues: {
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
            jobType: Yup.string(),
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
        experiencedSeekerForm.setFieldValue("relievingDate", dateValue);
    };
    return (_jsx(React.Fragment, { children: _jsx("div", __assign({ className: "experience-details-card" }, { children: _jsxs(Grid, __assign({ container: true, className: classes.muiContainer }, { children: [_jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: HALF_SIZE_GRID, lg: HALF_SIZE_GRID, className: "add-team-grid" }, { children: [_jsx("p", { children: INSTITUTE_NAME_TEXT }), _jsx(TextField, { disabled: props.disabled, label: COLLEGE_NAME_LABEL, className: classes.boxInputField, size: "small" })] })), _jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: HALF_SIZE_GRID, lg: HALF_SIZE_GRID, className: "add-team-grid" }, { children: [_jsx("p", { children: INSTITUTE_LOCATION_TEXT }), _jsxs(Stack, __assign({ direction: "row", spacing: 3 }, { children: [_jsx(TextField, { disabled: props.disabled, label: CITY_LABEL, className: classes.inputField, size: "small" }), _jsx(TextField, { disabled: props.disabled, label: COUNTRY_LABEL, className: classes.inputField, size: "small" })] }))] })), _jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: HALF_SIZE_GRID, lg: HALF_SIZE_GRID, className: "add-team-grid" }, { children: [_jsx("p", { children: COLLEGE_START_TEXT }), _jsx(Calendar, {})] })), _jsxs(Grid, __assign({ item: true, xs: FULL_SIZE_GRID, sm: FULL_SIZE_GRID, md: HALF_SIZE_GRID, lg: HALF_SIZE_GRID, className: "add-team-grid" }, { children: [_jsx("p", { children: COLLEGE_END_TEXT }), _jsx(Calendar, { setDate: handleDate, status: false })] }))] })) })) }));
};
export default FreshGraduateDetails;
