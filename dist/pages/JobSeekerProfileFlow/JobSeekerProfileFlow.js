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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useState } from "react";
import { Step, Stack, Stepper, StepLabel } from "@mui/material";
import "../../App.css";
import { JobSeekerAddStepper, ColorlibConnector } from "../StepIcons";
import { useAppSelector } from "../../services/StoreHooks";
import { FULL_WIDTH_PERCENT } from "../../InternalStyles/CommonStyleVariables";
import "./JobSeekerProfileFlow.css";
import JobSeekerProfileDetails from "./JobSeekerProfileDetails";
import JobSeekerProfileWorkStatus from "./JobSeekerProfileWorkStatus";
import JobSeekerProfileNoticePeriod from "./JobSeekerProfileNoticePeriod";
import JobSeekerProfileReview from "./JobSeekerProfileReview";
import JobSeekerProfileJD from "./JobSeekerProfileJD";
import JobSeekerProfileUpload from "./JobSeekerProfileUpload";
import JobSeekerAddProfile from "../../pages/JobSeekerAddProfile/JobSeekerAddProfile";
var JobSeekerProfileFlow = function (props) {
    var _a = React.useState(0), activeStep = _a[0], setActiveStep = _a[1];
    var _b = React.useState({}), completed = _b[0], setCompleted = _b[1];
    var _c = React.useState(false), gotData = _c[0], setGotData = _c[1];
    var _d = useState(true), progressBar = _d[0], setProgressBar = _d[1];
    var userDataState = useAppSelector(function (state) { return state.currentUser; });
    useEffect(function () { }, [gotData]);
    var steps = [
        "Duplication Check with hiringhood",
        "Upload Resume",
        "Job Seeker Details",
        "Work Status",
        "Notice Period",
        "JD Specific Questions",
        "Review and Submit",
    ];
    var isLastStep = function () {
        return activeStep === steps.length - 1;
    };
    var handleNext = function () {
        // if(isLastStep()) {
        //   props.setComplete(true);
        // }
        var newActiveStep = activeStep + 1;
        setActiveStep(newActiveStep);
    };
    var handleBack = function () {
        setActiveStep(function (prevActiveStep) { return prevActiveStep - 1; });
    };
    var handleComplete = function (position) {
        var newCompleted = completed;
        newCompleted[position || activeStep] = true;
        setCompleted(newCompleted);
    };
    return (_jsxs("div", { children: [progressBar ? (_jsx(_Fragment, { children: _jsx("div", __assign({ className: "stepper-container" }, { children: _jsx(Stack, __assign({ sx: { width: FULL_WIDTH_PERCENT }, spacing: 4 }, { children: _jsx(Stepper, __assign({ alternativeLabel: true, activeStep: activeStep, connector: _jsx(ColorlibConnector, {}) }, { children: steps.map(function (label, index) { return (_jsx(Step, __assign({ completed: completed[index] === true }, { children: _jsx(StepLabel, __assign({ StepIconComponent: JobSeekerAddStepper }, { children: label })) }), label)); }) })) })) })) })) : (_jsx(_Fragment, {})), activeStep + 1 === 1 ? (_jsx(JobSeekerAddProfile, { hasButtons: true, setOpen: props.setOpen, setType: props.setType, handleNext: handleNext, handleBack: handleBack, contestId: props.contestId, handleComplete: handleComplete, setDataMessage: props.setDataMessage })) : activeStep + 1 === 2 ? (_jsx(JobSeekerProfileUpload, { hasButtons: true, setOpen: props.setOpen, setType: props.setType, handleNext: handleNext, handleBack: handleBack, handleComplete: handleComplete, setDataMessage: props.setDataMessage })) : activeStep + 1 === 3 ? (_jsx(JobSeekerProfileDetails, { hasButtons: true, setOpen: props.setOpen, setType: props.setType, handleNext: handleNext, handleBack: handleBack, handleComplete: handleComplete, setDataMessage: props.setDataMessage })) : activeStep + 1 === 4 ? (_jsx(JobSeekerProfileWorkStatus, { hasButtons: true, setOpen: props.setOpen, setType: props.setType, handleNext: handleNext, handleBack: handleBack, handleComplete: handleComplete, setDataMessage: props.setDataMessage, setActiveStep: setActiveStep })) : activeStep + 1 === 5 ? (_jsx(JobSeekerProfileNoticePeriod, { hasButtons: true, setOpen: props.setOpen, setType: props.setType, handleNext: handleNext, handleBack: handleBack, handleComplete: handleComplete, setDataMessage: props.setDataMessage })) : activeStep + 1 === 6 ? (_jsx(JobSeekerProfileJD, { hasButtons: true, setOpen: props.setOpen, setType: props.setType, handleNext: handleNext, handleBack: handleBack, contestId: props.contestId, handleComplete: handleComplete, setDataMessage: props.setDataMessage, setActiveStep: setActiveStep })) : (_jsx(JobSeekerProfileReview, { contestId: props.contestId, setOpen: props.setOpen, setType: props.setType, setActiveStep: setActiveStep, setDataMessage: props.setDataMessage, setProgressBar: setProgressBar }))] }));
};
export default JobSeekerProfileFlow;
