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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
import React, { useEffect } from "react";
import ContestDetail from "../ContestDetailsCard/ContestDetail";
import { Button, IconButton } from "@mui/material";
import Card from "../ContestDetailsCard/contestCard";
import "../ContestDetailsCard/contestDetailsStyles.css";
import { getImageForTag, } from "../ContestDetailsCard/getBadges";
import { patchContestDetails, getContestDetails, } from "../../services/ContestService";
import { CONTEST_DETAILS } from "../../constants";
import JobSeekerProfileStatusDetails from "./JobSeekerProfileStatusDetails";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import companyImage from "../../assets/company.svg";
import experienceImage from "../../assets/experience.svg";
import positionsImage from "../../assets/positions.svg";
import ctcImage from "../../assets/ctc.svg";
import locationImage from "../../assets/location.svg";
import ratingStar from "../../assets/rating-star.svg";
var domainSkillsImage = "assets/domainSkills.svg";
var noticeImage = "assets/notice.svg";
var calendarImage = "assets/calendar.svg";
var skillsImage = "assets/skills.svg";
var degreeImage = "assets/degree.svg";
var tagImage = "assets/tag.svg";
var renderDetails = function (image, text, tooltip) {
    return (text && (_jsxs(_Fragment, { children: [_jsx("div", __assign({ style: { padding: "5%", marginTop: "0" } }, { children: _jsx("img", { src: image, alt: "Icon" }) })), _jsx("div", __assign({ style: { color: "#626880", marginTop: ".4vw" } }, { children: _jsx("p", { children: text }) }))] })));
};
var JobSeekerProfileStatus = function (props) {
    var _a = React.useState(""), subStatus = _a[0], setSubStatus = _a[1];
    var contestDetails = props.contestDetails;
    var _b = React.useState(false), openModal = _b[0], setOpenModal = _b[1];
    var _c = React.useState(""), modalTitle = _c[0], setModalTitle = _c[1];
    var _d = React.useState(""), modalMessage = _d[0], setModalMessage = _d[1];
    var handleSubStatusChange = function (e) {
        setOpenModal(true);
        setModalTitle("Change Phase");
        setModalMessage(e.target.value);
    };
    var confirmedSubStatusChange = function () {
        setOpenModal(false);
        setSubStatus(modalMessage);
        handleApiSubStatusChange(modalMessage);
    };
    var handleBeginHunt = function () {
        window.open(contestDetails.contestUrl);
    };
    var handleApiSubStatusChange = function (subStatus) { return __awaiter(void 0, void 0, void 0, function () {
        var data, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = {
                        formId: CONTEST_DETAILS,
                        id: contestDetails.id,
                        formData: {
                            subStatus: subStatus,
                        },
                    };
                    return [4 /*yield*/, patchContestDetails(data)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    useEffect(function () {
        var apiData = function (contestId) { return __awaiter(void 0, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getContestDetails(contestId)];
                    case 1:
                        response = _a.sent();
                        setSubStatus(response === null || response === void 0 ? void 0 : response.data.data[0].formData.subStatus);
                        return [2 /*return*/];
                }
            });
        }); };
        apiData(contestDetails.id);
    }, [contestDetails.id]);
    var JOB_SEEKER_STATUS = [
        {
            iconFileName: "Group 3474",
            title: "Bounty",
            data: contestDetails.bounty,
        },
        { iconFileName: "Group 99", title: "Matching Profiles", data: " 0" },
        { iconFileName: "Group 108", title: "Total Quota", data: " 0" },
        { iconFileName: "Group 3369", title: "Days Left", data: " 0" },
    ];
    return (_jsx(Card, { children: _jsxs("div", __assign({ style: { display: "block", padding: "1vw 2vw 1vw 1vw" } }, { children: [_jsxs("div", __assign({ className: "contest-detail-card-header-container" }, { children: [_jsx("div", { children: getImageForTag(contestDetails.tag) && (_jsx("img", { src: getImageForTag(contestDetails === null || contestDetails === void 0 ? void 0 : contestDetails.tag), alt: "tag", className: "contest-detail-tag-image-jobSeekerFlow" })) }), _jsx(IconButton, __assign({ color: "primary", "aria-label": "bookmark" }, { children: _jsx(BookmarkIcon, {}) }))] })), _jsxs("div", __assign({ className: "contest-detail-card-body-container" }, { children: [_jsx("div", __assign({ style: { borderRight: "1px solid #DFE5FF" } }, { children: _jsx(ContestDetail, { contestDetails: props.contestDetails }) })), _jsxs("div", __assign({ className: "contest-details-container" }, { children: [_jsx("div", __assign({ className: "contest-status-details-container" }, { children: JOB_SEEKER_STATUS.map(function (status) { return (_jsx("div", __assign({ style: { height: "100%", width: "100%" } }, { children: _jsx(JobSeekerProfileStatusDetails, { iconFileName: status.iconFileName, title: status.title, data: status.data }) }))); }) })), _jsxs("div", __assign({ className: "job-details-container" }, { children: [_jsxs("div", __assign({ className: "job-details-container-container" }, { children: [_jsx("div", __assign({ className: "job-details-container-container-container" }, { children: renderDetails(companyImage, contestDetails.employerName, "company") })), _jsxs("div", __assign({ style: {
                                                        justifyContent: "center",
                                                        textAlign: "center",
                                                    } }, { children: [_jsx("img", { src: ratingStar, alt: "Icon" }), _jsx("p", __assign({ style: { display: "inline", color: "#626880" } }, { children: "\u00a0 __" }))] }))] })), _jsxs("div", __assign({ className: "job-details-container-container" }, { children: [_jsx("div", __assign({ className: "job-details-container-container-container" }, { children: renderDetails(experienceImage, contestDetails.experience, "Experience") })), _jsx("div", __assign({ className: "job-details-container-container-container" }, { children: renderDetails(positionsImage, contestDetails.numberOfPositions, "positions") }))] })), _jsxs("div", __assign({ className: "job-details-container-container" }, { children: [_jsx("div", __assign({ className: "job-details-container-container-container" }, { children: renderDetails(ctcImage, contestDetails.ctc, "ctc") })), _jsx("div", __assign({ className: "job-details-container-container-container" }, { children: renderDetails(locationImage, contestDetails.locations[0], "location") }))] })), _jsxs("div", __assign({ className: "job-details-container-container" }, { children: [_jsx("div", __assign({ style: { margin: ".5vw" } }, { children: _jsx(Button, __assign({ sx: {
                                                            borderRadius: "1vw",
                                                            fontSize: ".8vw",
                                                            height: "3vw",
                                                            width: "100%",
                                                        }, variant: "contained" }, { children: "View All Uploaded Profiles" })) })), _jsx("div", __assign({ style: { width: "90%", margin: ".5vw" } }, { children: _jsx(Button, __assign({ sx: {
                                                            borderRadius: "1vw",
                                                            fontSize: ".8vw",
                                                            height: "3vw",
                                                            width: "100%",
                                                        }, variant: "contained", onClick: function () {
                                                            props.setActiveStep(0);
                                                            props.handleNotComplete(0);
                                                        } }, { children: "Add More Profiles" })) }))] }))] }))] }))] }))] })) }));
};
export default JobSeekerProfileStatus;
