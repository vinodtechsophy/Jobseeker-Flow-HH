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
import React from "react";
import { Radio, TextField, RadioGroup, FormControl, FormControlLabel, } from "@mui/material";
import { LWD_TEXT, YesNoOptions, NoticeOptions, OFFER_IN_HAND, NOTICE_STATUS, BUYOUT_OPTION, SEEKER_STATUS, NO_OFFER_REASON, WORD_LIMIT_TEXT, NEGOTIABLE_TEXT, NEGOTIABLE_LABEL, JOINING_DATE_TEXT, LATE_JOINING_TEXT, CHANGE_REASON_TEXT, NEGOTIABLE_YES_TEXT, BUYOUT_QUESTION_TEXT, OFFICIAL_NOTICE_PERIOD_TEXT, } from "./JobSeekerProfileFlowConstants";
import "./JobSeekerProfileFlow.css";
import PreviousNextButtons from "../../components/PreviousNextButtons/PreviousNextButtons";
import CurrentOffers from "./CurrentOffers/CurrentOffers";
import { useStyles } from "./JobSeekerProfileFlowStyles";
import Calendar from "../../components/Calendar/Calendar";
var JobSeekerProfileNoticePeriod = function (props) {
    var classes = useStyles();
    var _a = React.useState(""), offerStatus = _a[0], setOfferStatus = _a[1];
    var _b = React.useState(""), joiningDate = _b[0], setJoiningDate = _b[1];
    var _c = React.useState(""), noticePeriod = _c[0], setNoticePeriod = _c[1];
    var _d = React.useState(""), noticeStatus = _d[0], setNoticeStatus = _d[1];
    var _e = React.useState(""), buyoutStatus = _e[0], setBuyoutStatus = _e[1];
    var _f = React.useState(""), lastWorkingDate = _f[0], setLastWorkingDate = _f[1];
    var _g = React.useState(""), negotiablePeriod = _g[0], setNegotiablePeriod = _g[1];
    var _h = React.useState(""), negotiableStatus = _h[0], setNegotiableStatus = _h[1];
    var _j = React.useState(true), currentlyWorking = _j[0], setCurrentlyWorking = _j[1];
    return (_jsxs("div", __assign({ className: "job-seeker-profile-content" }, { children: [_jsxs("div", __assign({ className: "notice-details-card" }, { children: [currentlyWorking ? (_jsxs(_Fragment, { children: [_jsx("div", __assign({ className: "experience-card-title" }, { children: _jsxs("span", { children: [NOTICE_STATUS, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }) })), _jsx("div", __assign({ className: "notice-period-radio" }, { children: _jsx(FormControl, { children: _jsx(RadioGroup, __assign({ value: noticeStatus, onChange: function (e) { return setNoticeStatus(e.target.value); } }, { children: NoticeOptions.map(function (option) { return (_jsx(FormControlLabel, { value: option, control: _jsx(Radio, {}), label: option, disabled: !props.hasButtons }, option)); }) })) }) }))] })) : (_jsxs(_Fragment, { children: [_jsx("div", __assign({ className: "experience-card-title" }, { children: _jsxs("span", { children: [SEEKER_STATUS, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }) })), _jsxs("div", __assign({ className: "notice-period-radio" }, { children: [_jsxs("p", { children: [JOINING_DATE_TEXT, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), _jsx(Calendar, { setDate: setJoiningDate, status: true })] })), _jsxs("div", __assign({ className: "job-change-field" }, { children: [_jsxs("p", { children: [LATE_JOINING_TEXT, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), _jsx(TextField, { type: "text", multiline: true, fullWidth: true, rows: 3, disabled: !props.hasButtons, helperText: WORD_LIMIT_TEXT, onChange: function (e) { return console.log("val ", e.target.value); }, InputProps: {
                                            inputProps: {
                                                maxLength: 1200,
                                            },
                                        } })] }))] })), _jsx("div", __assign({ className: "notice-period-conditional" }, { children: noticeStatus === NoticeOptions[0] ? (_jsxs("div", { children: [_jsxs("p", { children: [LWD_TEXT, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), _jsx(Calendar, { setDate: setLastWorkingDate, status: true })] })) : noticeStatus === NoticeOptions[1] ? (_jsxs("div", { children: [_jsxs("p", { children: [OFFICIAL_NOTICE_PERIOD_TEXT, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), _jsx(TextField, { disabled: !props.hasButtons, className: classes.inputField, type: "number", label: OFFICIAL_NOTICE_PERIOD_TEXT, value: noticePeriod, onInput: function (e) {
                                        if (Number(e.target.value) > 180 ||
                                            Number(e.target.value) < 0) {
                                            e.target.value = Math.max(0, parseInt(e.target.value))
                                                .toString()
                                                .slice(0, 2);
                                        }
                                        setNoticePeriod(e.target.value);
                                    }, size: "small" })] })) : null })), noticeStatus !== "" ? (_jsxs(React.Fragment, { children: [_jsxs("div", __assign({ className: "job-change-field" }, { children: [_jsxs("p", { children: [CHANGE_REASON_TEXT, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), _jsx(TextField, { disabled: !props.hasButtons, type: "text", multiline: true, fullWidth: true, rows: 3, helperText: WORD_LIMIT_TEXT, onChange: function (e) { return console.log("val ", e.target.value); }, InputProps: {
                                            inputProps: {
                                                maxLength: 1200,
                                            },
                                        } })] })), _jsxs("div", __assign({ className: "notice-period-conditional" }, { children: [_jsxs("p", { children: [NEGOTIABLE_TEXT, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), _jsx(FormControl, { children: _jsxs(RadioGroup, __assign({ value: negotiableStatus, onChange: function (e) { return setNegotiableStatus(e.target.value); } }, { children: [YesNoOptions.map(function (option) { return (_jsx(FormControlLabel, { value: option, control: _jsx(Radio, {}), label: option, disabled: !props.hasButtons }, option)); }), noticeStatus === NoticeOptions[0] ? (_jsx(FormControlLabel, { value: BUYOUT_OPTION, control: _jsx(Radio, {}), label: BUYOUT_OPTION })) : null] })) })] }))] })) : null, negotiableStatus === YesNoOptions[0] ? (_jsxs("div", __assign({ className: "notice-period-conditional" }, { children: [_jsxs("p", { children: [NEGOTIABLE_YES_TEXT, noticeStatus === NoticeOptions[1] ? (_jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))) : null] }), _jsx(TextField, { disabled: !props.hasButtons, className: classes.inputField, type: "number", label: NEGOTIABLE_LABEL, value: negotiablePeriod, onInput: function (e) {
                                    if (Number(e.target.value) > 180 ||
                                        Number(e.target.value) < 0) {
                                        e.target.value = Math.max(0, parseInt(e.target.value))
                                            .toString()
                                            .slice(0, 2);
                                    }
                                    setNegotiablePeriod(e.target.value);
                                }, size: "small" })] }))) : null, noticeStatus === NoticeOptions[1] ? (_jsxs("div", __assign({ className: "notice-period-conditional" }, { children: [_jsxs("p", { children: [BUYOUT_QUESTION_TEXT, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), _jsx(FormControl, { children: _jsx(RadioGroup, __assign({ value: buyoutStatus, onChange: function (e) { return setBuyoutStatus(e.target.value); } }, { children: YesNoOptions.map(function (option) { return (_jsx(FormControlLabel, { value: option, control: _jsx(Radio, {}), label: option, disabled: !props.hasButtons }, option)); }) })) })] }))) : null, noticeStatus === NoticeOptions[0] || !currentlyWorking ? (_jsxs(React.Fragment, { children: [_jsxs("div", __assign({ className: "notice-period-conditional" }, { children: [_jsxs("p", { children: [OFFER_IN_HAND, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), _jsx(FormControl, { children: _jsx(RadioGroup, __assign({ value: offerStatus, onChange: function (e) { return setOfferStatus(e.target.value); } }, { children: YesNoOptions.map(function (option) { return (_jsx(FormControlLabel, { value: option, control: _jsx(Radio, {}), label: option, disabled: !props.hasButtons }, option)); }) })) })] })), offerStatus === YesNoOptions[1] ? (_jsxs("div", __assign({ className: "job-change-field" }, { children: [_jsxs("p", { children: [NO_OFFER_REASON, _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }), _jsx(TextField, { disabled: !props.hasButtons, type: "text", multiline: true, fullWidth: true, rows: 3, helperText: WORD_LIMIT_TEXT, onChange: function (e) { return console.log("val ", e.target.value); }, InputProps: {
                                            inputProps: {
                                                maxLength: 1200,
                                            },
                                        }, size: "small" })] }))) : offerStatus === YesNoOptions[0] ? (_jsx("div", __assign({ className: "notice-period-conditional" }, { children: _jsx("div", __assign({ className: "outline-div" }, { children: _jsx(CurrentOffers, {}) })) }))) : null] })) : null] })), props.hasButtons ? (_jsx(PreviousNextButtons, { handleNext: props.handleNext, handleBack: props.handleBack })) : null] })));
};
export default JobSeekerProfileNoticePeriod;
