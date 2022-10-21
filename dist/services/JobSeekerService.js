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
import axios from "axios";
export var preDuplicationCheck = function (bodyPayload) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios
                    .post("".concat(process.env.REACT_APP_MAIN_SERVER_URL, "hiringhood/v1/profile-log/check-duplicates"), bodyPayload, {
                    headers: {
                        Authorization: "Bearer ".concat(sessionStorage.getItem("react-token")),
                    },
                })
                    .catch(function (error) {
                    console.log(error);
                    return error;
                })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
export var fullDuplicationCheck = function (profileLogId, panNumber, dob) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios
                    .patch("".concat(process.env.REACT_APP_MAIN_SERVER_URL, "hiringhood/v1/profile-log/").concat(profileLogId, "/check-duplicates"), { panNumber: panNumber, dateOfBirth: dob }, {
                    headers: {
                        Authorization: "Bearer ".concat(sessionStorage.getItem("react-token")),
                    },
                })
                    .catch(function (error) {
                    console.log(error);
                    return error;
                })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
export var getConsentAggregateData = function (contestId) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios
                    .get("".concat(process.env.REACT_APP_MAIN_SERVER_URL, "hiringhood/v1/job-seekers/aggregate/consent-status?filterColumn=contestId&filterValue=").concat(contestId), {
                    headers: {
                        Authorization: "Bearer ".concat(sessionStorage.getItem("react-token")),
                    },
                })
                    .catch(function (error) {
                    console.log(error);
                })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
export var getAggregateData = function (contestId) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios
                    .get("".concat(process.env.REACT_APP_MAIN_SERVER_URL, "hiringhood/v1/job-seekers/aggregate/status?filterColumn=contestId&filterValue=").concat(contestId), {
                    headers: {
                        Authorization: "Bearer ".concat(sessionStorage.getItem("react-token")),
                    },
                })
                    .catch(function (error) {
                    console.log(error);
                })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
export var getDuplicationFailedProfiles = function (filterValue, page, size, contestId) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios
                    .get("".concat(process.env.REACT_APP_MAIN_SERVER_URL, "hiringhood/v1/profile-logs?contestId=").concat(contestId, "&filterColumn=status&filterValue=").concat(filterValue).concat(page ? "&page=" + page : "&page=" + 0).concat(size ? "&size=" + size : ""), {
                    headers: {
                        Authorization: "Bearer ".concat(sessionStorage.getItem("react-token")),
                    },
                })
                    .catch(function (error) {
                    console.log(error);
                })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
export var getDuplicationFailedProfilesAggregate = function (contestId) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios
                    .get("".concat(process.env.REACT_APP_MAIN_SERVER_URL, "hiringhood/v1/profile-logs/aggregate/status?filterColumn=contestId&filterValue=").concat(contestId), {
                    headers: {
                        Authorization: "Bearer ".concat(sessionStorage.getItem("react-token")),
                    },
                })
                    .catch(function (error) {
                    console.log(error);
                })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
export var startJobSeekerWorkflow = function (bodyPayload) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios
                    .post("".concat(process.env.REACT_APP_MAIN_SERVER_URL, "hiringhood/v1/job-seeker/").concat(bodyPayload.jobSeekerId, "/submit?action=").concat(bodyPayload.action), bodyPayload, {
                    headers: {
                        Authorization: "Bearer ".concat(sessionStorage.getItem("react-token")),
                    },
                })
                    .catch(function (error) {
                    console.log(error);
                })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
export var getContestAggregateStatistics = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios
                    .get("".concat(process.env.REACT_APP_MAIN_SERVER_URL, "hiringhood/v1/profiles/aggregate/status"), {
                    headers: {
                        Authorization: "Bearer ".concat(sessionStorage.getItem("react-token")),
                    },
                })
                    .catch(function (error) {
                    console.log(error);
                })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
export var statusFilterContestLinkedJobsekeers = function (id, status, page, size) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios
                    .get("".concat(process.env.REACT_APP_MAIN_SERVER_URL, "hiringhood/v1/job-seekers-profiles?contestId=").concat(id, "&filters=").concat(status ? "status:" + status : "", "&page=").concat(page, "&size=").concat(size), {
                    headers: {
                        Authorization: "Bearer ".concat(sessionStorage.getItem("react-token")),
                    },
                })
                    .catch(function (error) {
                    console.log(error);
                })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
export var consentStatusFilterContestLinkedJobsekeers = function (id, status, page, size) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios
                    .get("".concat(process.env.REACT_APP_MAIN_SERVER_URL, "hiringhood/v1/job-seekers-profiles?contestId=").concat(id, "&filters=consentStatus:").concat(status, "&page=").concat(page, "&size=").concat(size), {
                    headers: {
                        Authorization: "Bearer ".concat(sessionStorage.getItem("react-token")),
                    },
                })
                    .catch(function (error) {
                    console.log(error);
                })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
export var jobseekerConsentStatusChangeWorkflow = function (processPayload) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, axios
                .post("".concat(process.env.REACT_APP_MAIN_SERVER_URL ||
                "https://api.dev.hiringhood.com/", "camunda/engine-rest/message"), processPayload, {
                headers: {
                    Authorization: "Bearer ".concat(sessionStorage.getItem("react-token")),
                },
            })
                .catch(function (error) {
                console.log(error);
            })];
    });
}); };
export var getIncompleteUplodsStepCount = function (contestId) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios
                    .get("".concat(process.env.REACT_APP_MAIN_SERVER_URL, "hiringhood/v1/profiles/aggregate/step?filterColumn=contestId&filterValue=").concat(contestId), {
                    headers: {
                        Authorization: "Bearer ".concat(sessionStorage.getItem("react-token")),
                    },
                })
                    .catch(function (error) {
                    console.log(error);
                })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
export var getJobseekersOnStepCount = function (step, contestId, page, size) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios
                    .get("".concat(process.env.REACT_APP_MAIN_SERVER_URL, "hiringhood/v1/job-seekers-profiles?contestId=").concat(contestId, "&filters=matchedProfilesList.profileLastCompletedStep:").concat(step, "&page=").concat(page, "&size=").concat(size), {
                    headers: {
                        Authorization: "Bearer ".concat(sessionStorage.getItem("react-token")),
                    },
                })
                    .catch(function (error) {
                    console.log(error);
                })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
export var getJobSeekersDetails = function (contestId, profileId) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios
                    .get("".concat(process.env.REACT_APP_MAIN_SERVER_URL, "hiringhood/v1/job-seekers-profiles?").concat(contestId ? "contestId=" + contestId : "", "&filters=").concat(profileId ? "profileId:" + profileId : ""), {
                    headers: {
                        Authorization: "Bearer ".concat(sessionStorage.getItem("react-token")),
                    },
                })
                    .catch(function (error) {
                    console.log(error);
                })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
export var manageJobseekerPatch = function (jobSeekrId, payLoad) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios
                    .patch("".concat(process.env.REACT_APP_MAIN_SERVER_URL, "hiringhood/v1/job-seeker/").concat(jobSeekrId), payLoad, {
                    headers: {
                        Authorization: "Bearer ".concat(sessionStorage.getItem("react-token")),
                    },
                })
                    .catch(function (error) {
                    console.log(error);
                    return error;
                })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
export var JobSeekersStagefilterWithContest = function (contestId, stage, page, size) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios
                    .get("".concat(process.env.REACT_APP_MAIN_SERVER_URL, "hiringhood/v1/job-seekers-profiles?contestId=").concat(contestId, "&filters=consentStatus:JOB_SEEKER_CONSENT_PASS,jobSeekerMainStage:").concat(stage, "&page=").concat(page, "&size=").concat(size), {
                    headers: {
                        Authorization: "Bearer ".concat(sessionStorage.getItem("react-token")),
                    },
                })
                    .catch(function (error) {
                    console.log(error);
                })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
export var JobSeekersInCoolingPeriodWithContest = function (contestId, filter, page, size) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios
                    .get("".concat(process.env.REACT_APP_MAIN_SERVER_URL, "hiringhood/v1/job-seekers-profiles?contestId=").concat(contestId, "&filters=consentStatus:JOB_SEEKER_CONSENT_PASS,coolingPeriod:").concat(filter, "&page=").concat(page, "&size=").concat(size), {
                    headers: {
                        Authorization: "Bearer ".concat(sessionStorage.getItem("react-token")),
                    },
                })
                    .catch(function (error) {
                    console.log(error);
                })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
export var JobSeekersMainStageAggregateWithContest = function (contestId) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios
                    .get("".concat(process.env.REACT_APP_MAIN_SERVER_URL, "hiringhood/v1/job-seekers/aggregate?groupBy=jobSeekerMainStage&filters=contestId:").concat(contestId, ",consentStatus:JOB_SEEKER_CONSENT_PASS"), {
                    headers: {
                        Authorization: "Bearer ".concat(sessionStorage.getItem("react-token")),
                    },
                })
                    .catch(function (error) {
                    console.log(error);
                })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
export var JobSeekersCoolingPeriodAggregateWithContest = function (contestId) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios
                    .get("".concat(process.env.REACT_APP_MAIN_SERVER_URL, "hiringhood/v1/job-seekers/aggregate?groupBy=coolingPeriod&filters=contestId:").concat(contestId, ",consentStatus:JOB_SEEKER_CONSENT_PASS"), {
                    headers: {
                        Authorization: "Bearer ".concat(sessionStorage.getItem("react-token")),
                    },
                })
                    .catch(function (error) {
                    console.log(error);
                })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
export var GenericProcess = function (processPayload) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, axios
                .post("".concat(process.env.REACT_APP_MAIN_SERVER_URL ||
                "https://api.dev.hiringhood.com/", "workflow/v1/process/start"), processPayload, {
                headers: {
                    Authorization: "Bearer ".concat(sessionStorage.getItem("react-token")),
                },
            })
                .catch(function (error) {
                console.log(error);
            })];
    });
}); };
