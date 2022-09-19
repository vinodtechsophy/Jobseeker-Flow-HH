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
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";
import { useStyles } from "./CalendarStyles";
import "./Calendar.css";
var Calendar = function (props) {
    var _a = useState(new Date()), value = _a[0], setValue = _a[1];
    var _b = useState(value.getDate()), dayValue = _b[0], setDayValue = _b[1];
    var _c = useState(value.getMonth() + 1), monthValue = _c[0], setMonthValue = _c[1];
    var _d = useState(value.getFullYear()), yearValue = _d[0], setYearValue = _d[1];
    var classes = useStyles();
    var handleDatePicker = function (val) {
        setDayValue(val.getDate());
        setMonthValue(val.getMonth() + 1);
        setYearValue(val.getFullYear());
        setValue(val);
        props.setDate(val);
    };
    var handleDayChange = function (event) {
        setDayValue(event.target.value);
        if (value) {
            setValue(new Date(yearValue, monthValue - 1, event.target.value));
            props.setDate(new Date(yearValue, monthValue - 1, event.target.value));
        }
    };
    var handleMonthChange = function (event) {
        setMonthValue(event.target.value);
        setValue(new Date(yearValue, event.target.value - 1, dayValue));
        props.setDate(new Date(yearValue, event.target.value - 1, dayValue));
    };
    var handleYearChange = function (event) {
        setYearValue(event.target.value);
        setValue(new Date(event.target.value, monthValue - 1, dayValue));
        props.setDate(new Date(event.target.value, monthValue - 1, dayValue));
    };
    return (_jsx("div", __assign({ className: "row datePicker" }, { children: props.status ? (_jsxs(_Fragment, { children: [_jsx(TextField, { className: classes.date, id: "outlined-date", label: "Date", size: "small", variant: "outlined", value: dayValue, onChange: handleDayChange, disabled: props.disabled }), _jsx(TextField, { className: classes.date, id: "outlined-month", label: "Month", size: "small", value: monthValue, onChange: handleMonthChange, disabled: props.disabled }), _jsx(TextField, { className: classes.year, id: "outlined-year", label: "Year", size: "small", value: yearValue, onChange: handleYearChange, disabled: props.disabled }), _jsx(LocalizationProvider, __assign({ dateAdapter: AdapterDateFns }, { children: _jsx(DatePicker, { label: "Custom input", value: value, onChange: handleDatePicker, disabled: props.disabled, renderInput: function (_a) {
                            var inputRef = _a.inputRef, inputProps = _a.inputProps, InputProps = _a.InputProps;
                            return (_jsxs(Box, __assign({ sx: {
                                    display: "flex",
                                    alignItems: "center",
                                } }, { children: [_jsx("input", __assign({ ref: inputRef }, inputProps)), InputProps === null || InputProps === void 0 ? void 0 : InputProps.endAdornment] })));
                        } }) }))] })) : (_jsxs(_Fragment, { children: [_jsx(TextField, { className: classes.date, id: "outlined-month-one", label: "Month", size: "small", value: monthValue, onChange: handleMonthChange }), _jsx(TextField, { className: classes.year, id: "outlined-year-one", label: "Year", size: "small", value: yearValue, onChange: handleYearChange }), _jsx(LocalizationProvider, __assign({ dateAdapter: AdapterDateFns }, { children: _jsx(DatePicker, { views: ["year", "month"], label: "Custom input", value: value, onChange: handleDatePicker, renderInput: function (_a) {
                            var inputRef = _a.inputRef, inputProps = _a.inputProps, InputProps = _a.InputProps;
                            return (_jsxs(Box, __assign({ sx: {
                                    display: "flex",
                                    alignItems: "center",
                                } }, { children: [_jsx("input", __assign({ ref: inputRef }, inputProps)), InputProps === null || InputProps === void 0 ? void 0 : InputProps.endAdornment] })));
                        } }) }))] })) })));
};
export default Calendar;
