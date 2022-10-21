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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
import { Stack, Button, Divider, Typography, IconButton, CircularProgress, } from "@mui/material";
import { JobSeekerReviewArray } from "./JobSeekerProfileFlowConstants";
import "./JobSeekerProfileFlow.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { ERROR_KEY, ADD_PROFILE_CONFIRMATION_BOX_TEXT, } from "../../constants";
import JobSeekerProfileJD from "./JobSeekerProfileJD";
import JobSeekerProfileUpload from "./JobSeekerProfileUpload";
import JobSeekerProfileDetails from "./JobSeekerProfileDetails";
import JobSeekerProfileWorkStatus from "./JobSeekerProfileWorkStatus";
import JobSeekerProfileNoticePeriod from "./JobSeekerProfileNoticePeriod";
import ConfirmationModel from "../../components/ConfirmationModal/ConfirmationModel";
import { startJobSeekerWorkflow } from "../../services/JobSeekerService";
import JobSeekerCompleteProfile from "../JobSeekerCompleteProfile/JobSeekerCompleteProfile";
import { useAppSelector, useAppDispatch } from "../../services/StoreHooks";
import { updateJobSeekerProfile } from "../../services/FormDataService";
import JobSeekerAddProfile from "../JobSeekerAddProfile/JobSeekerAddProfile";
var JobSeekerProfileReview = function (props) {
    var _a = React.useState(false), loader = _a[0], setLoader = _a[1];
    var _b = React.useState(false), checkout = _b[0], setCheckout = _b[1];
    var _c = React.useState(-1), currentIndex = _c[0], setCurrentIndex = _c[1];
    var _d = useState({
        isOpen: false,
        title: "",
        mainMessage: "",
        bottomMessage: "",
    }), dialogAction = _d[0], setDialogAction = _d[1];
    var _e = useState(false), submitted = _e[0], setSubmitted = _e[1];
    var userDataState = useAppSelector(function (state) { return state.currentUser; });
    var dispatch = useAppDispatch();
    var dispatchNotificationData = function (notifyData) {
        dispatch({
            type: "SEND_ALERT",
            data: {
                enable: notifyData.enable,
                type: notifyData.type,
                message: notifyData.message,
                duration: notifyData.duration,
            },
        });
    };
    var renderCurrentSelection = function (currentSection) {
        switch (currentSection) {
            case 1:
                return (_jsx(JobSeekerAddProfile, { profileDataId: userDataState.userData.profileId, hasButtons: false }));
            case 2:
                return (_jsx(JobSeekerProfileUpload, { profileDataId: userDataState.userData.profileId, hasButtons: false }));
            case 3:
                return (_jsx(JobSeekerProfileDetails, { profileDataId: userDataState.userData.profileId, hasButtons: false }));
            case 4:
                return (_jsx(JobSeekerProfileWorkStatus, { profileDataId: userDataState.userData.profileId, hasButtons: false }));
            case 5:
                return (_jsx(JobSeekerProfileNoticePeriod, { profileDataId: userDataState.userData.profileId, hasButtons: false }));
            default:
                return (_jsx(JobSeekerProfileJD, { profileDataId: userDataState.userData.profileId, hasButtons: false }));
        }
    };
    var submitAllDetails = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b;
        return __generator(this, function (_c) {
            setLoader(true);
            setDialogAction({
                isOpen: true,
                title: ADD_PROFILE_CONFIRMATION_BOX_TEXT.header,
                mainMessage: ADD_PROFILE_CONFIRMATION_BOX_TEXT.mainMessage,
                bottomMessage: ADD_PROFILE_CONFIRMATION_BOX_TEXT.bottomMessage,
            });
            try {
                // const postFormResponse = await GenericProcess(
                //     {
                //         processDefinitionKey: CONTEST_PROCESS_ID,
                //         businessKey: userDataState.userId || JSON.stringify(Math.random()),
                //         variables: {
                //             action: ACTIVATE_ACTION,
                //             formDataIds: JSON.stringify([userDataState.userData.parentDataId])
                //         }
                //     }
                // );
                // if(postFormResponse?.data?.success) {
                //     props.setType(SUCCESS_KEY);
                //     props.setDataMessage(FORM_SUBMISSION_SUCCESS);
                //     props.setOpen(true);
                //     props.setCheckout(true);
                //     setCheckout(true);
                // }
            }
            catch (error) {
                console.log(error === null || error === void 0 ? void 0 : error.response);
                props.setType(ERROR_KEY);
                props.setDataMessage((_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message);
                props.setOpen(true);
            }
            setLoader(false);
            return [2 /*return*/];
        });
    }); };
    var cancelFunction = function () {
        setDialogAction(__assign(__assign({}, dialogAction), { isOpen: false }));
    };
    var apiCallStartJobSeekerWorkflow = function () { return __awaiter(void 0, void 0, void 0, function () {
        var bodyPayload, response, bodyPayload_1, stepUpdateResponse;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    bodyPayload = {
                        jobSeekerId: userDataState.userData.jobSeekerId,
                        action: "startJobSeekerWorkflow",
                    };
                    return [4 /*yield*/, startJobSeekerWorkflow(bodyPayload)];
                case 1:
                    response = _c.sent();
                    if (!((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.success)) return [3 /*break*/, 3];
                    bodyPayload_1 = {
                        profileId: userDataState.userData.profileId,
                        profileData: {
                            profileLastCompletedStep: "7",
                        },
                    };
                    return [4 /*yield*/, updateJobSeekerProfile(bodyPayload_1)];
                case 2:
                    stepUpdateResponse = _c.sent();
                    if ((_b = stepUpdateResponse === null || stepUpdateResponse === void 0 ? void 0 : stepUpdateResponse.data) === null || _b === void 0 ? void 0 : _b.success) {
                        props.setProgressBar(false);
                        setSubmitted(true);
                        setDialogAction(__assign(__assign({}, dialogAction), { isOpen: false }));
                    }
                    else {
                        dispatchNotificationData({
                            enable: true,
                            type: "error",
                            message: "Something Went Wrong Please Try gain",
                        });
                    }
                    _c.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (_jsx(_Fragment, { children: submitted ? (_jsx(_Fragment, { children: _jsx(JobSeekerCompleteProfile, { contestId: props.contestId }) })) : (_jsx(_Fragment, { children: _jsx("div", __assign({ className: "form-internal-body" }, { children: checkout ? (
                // <SignupSuccess
                //     setCheckout={setCheckout}
                //     setActiveStep={props.setActiveStep}
                //     setCompleted={props.setCompleted}
                //     displayMessage={`Your Contest has been Published Successfully`}
                // />
                _jsx(_Fragment, {})) : (_jsxs(_Fragment, { children: [_jsx("div", __assign({ className: "stepper-container" }, { children: JobSeekerReviewArray.map(function (reviewData, index) { return (_jsx(_Fragment, { children: ((userDataState.userData.workStatus === 'Fresh Graduate' || userDataState.userData.workStatus === "Not-Working") &&
                                    index !== 4) || (userDataState.userData.workStatus === "Working") ? (_jsxs("div", __assign({ className: "review-card", style: currentIndex === index
                                        ? {
                                            height: "auto",
                                            flexDirection: "column",
                                        }
                                        : {
                                            height: "68px",
                                            flexDirection: "row",
                                        } }, { children: [_jsx("span", __assign({ className: "review-title-text" }, { children: reviewData.label })), _jsxs("div", { children: [reviewData.navigate ? (_jsxs(Button, __assign({ variant: "text", className: "review-buttons-color", onClick: function () { return props.setActiveStep(index); } }, { children: [_jsx("img", { src: "assets/images/Edit.png", className: "review-icons" }), "Edit"] }))) : null, _jsx(IconButton, __assign({ "aria-label": "plus", className: "review-buttons-color", onClick: function () {
                                                        if (currentIndex !== index)
                                                            setCurrentIndex(index);
                                                        else
                                                            setCurrentIndex(-1);
                                                    } }, { children: currentIndex !== index ? (_jsx(AddIcon, {})) : (_jsx(RemoveIcon, {})) }))] }), currentIndex === index ? (_jsx("div", __assign({ style: { width: "100%" } }, { children: renderCurrentSelection(index + 1) }))) : null] }), index)) : null })); }) })), _jsx("div", __assign({ className: "review-divider" }, { children: _jsx(Divider, {}) })), loader ? (_jsx(Stack, __assign({ alignItems: "center" }, { children: _jsx(CircularProgress, {}) }))) : (_jsxs("div", __assign({ className: "forms-button-container" }, { children: [_jsx(Typography, { variant: "h6", noWrap: true, component: "div" }), _jsx(Typography, __assign({ variant: "h6", noWrap: true, component: "div" }, { children: _jsxs(Button, __assign({ variant: "contained", className: "next-button", onClick: submitAllDetails }, { children: ["Submit All Details", _jsx(ArrowForwardIosIcon, { className: "next-icon" })] })) }))] }))), _jsx(ConfirmationModel, { dialogAction: dialogAction, setDialogAction: setDialogAction, buttonRightFunction: apiCallStartJobSeekerWorkflow, buttonLeftFunction: cancelFunction })] })) })) })) }));
};
export default JobSeekerProfileReview;
