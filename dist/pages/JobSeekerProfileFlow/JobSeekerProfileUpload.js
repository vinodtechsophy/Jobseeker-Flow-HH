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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect } from "react";
import { Box, Grid, Button, Checkbox, Typography, ButtonGroup, } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useDropzone } from "react-dropzone";
import DownloadIcon from "@mui/icons-material/Download";
import PreviousNextButtons from "../../components/PreviousNextButtons/PreviousNextButtons";
import { UploadFiles, getJobSeekerProfile, createJobSeekerProfile, updateJobSeekerProfile, } from "../../services/FormDataService";
import { ERROR_KEY, SUCCESS_KEY, IMAGE_UPLOAD_ERROR, JOB_SEEKER_RESUME, FORM_SUBMISSION_SUCCESS, } from "../../constants";
import { useAppSelector, useAppDispatch } from "../../services/StoreHooks";
import KeycloakService from "../../services/KeycloakService";
import { getFileDetails } from "../../services/DocumentService";
var useStyles = makeStyles({
    Grid1: {
        marginTop: 50,
        display: "flex",
        justifyContent: "center",
    },
    Grid2: {
        marginTop: 10,
    },
    bGroup: {
        "&:hover": {
            //you want this to be the same as the backgroundColor above
            backgroundColor: "#4D6CD9",
        },
        backgroundColor: "#4D6CD9 !important",
        color: "white !important",
    },
    manaulUploadDiv: {
        border: "2px solid grey",
        height: "180px",
        width: "100%",
        borderRadius: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    maualUploadSubHeading: {
        marginLeft: "20px",
        fontSize: "12px",
        color: "red",
        alignSelf: "center",
    },
    subText1: {
        fontSize: "15px",
    },
    subText2: {
        fontSize: "15px",
    },
    subText3: {
        fontSize: "15px",
        color: "#4D6CD9",
        cursor: "pointer"
    },
    tempalteSubText1: {
        fontSize: "13px",
    },
    fillTemplate: {
        border: "1px solid #4D6CD9",
        height: "140px",
        width: "140px",
        marginTop: "10px",
        marginLeft: "90px",
        backgroundColor: "#4D6CD9",
        borderRadius: "10px",
        color: "white",
        fontSize: "15px",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
    },
    uploadLogoText: {
        width: "96px",
        fontFamily: "Nunito",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "16px",
        lineHeight: "22px",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        color: "#A4A4A4",
    },
    browseFiles: {
        width: "228px",
        height: "22px",
        fontFamily: "Nunito",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "16px",
        lineHeight: "22px",
        color: "#4D6CD9",
    },
    limitWidth: {
        width: "500px",
        float: "right",
    },
    uploadResume: {
        alignItems: "center",
        marginRight: 1,
        align: "left",
        fontFamily: "Nunito",
        fontStyle: "normal",
        fontWeight: 700,
        color: " #30374C",
    },
    dragBox: {
        borderRadius: 10,
        border: "2px solid grey",
        width: "500px",
        height: "160px",
        marginRight: "70px",
    },
    dashedBox: {
        borderRadius: 10,
        border: "2px dashed blue",
    },
    filledWarning: {
        marginLeft: "25px",
        fontSize: "15px",
        marginTop: "5px",
        color: "red",
    },
    autoFillTxt: {
        fontFamily: "Nunito",
        fontStyle: "normal",
        fontWeight: 700,
        color: " #30374C",
    },
});
var JobSeekerProfileUpload = function (props) {
    var classes = useStyles();
    var dispatch = useAppDispatch();
    var userDataState = useAppSelector(function (state) { return state.currentUser; });
    var _a = React.useState(true), manualState = _a[0], setManualState = _a[1];
    var _b = React.useState(false), templateState = _b[0], setTemplateState = _b[1];
    var label = { inputProps: { "aria-label": "Checkbox demo" } };
    var _c = React.useState(""), imageName = _c[0], setImageName = _c[1];
    var _d = useDropzone({ onDrop: function () { } }), acceptedFilesTemplate = _d.acceptedFiles, rootPropsTemplate = _d.getRootProps, inputPropsTemplate = _d.getInputProps, openTemplate = _d.isDragActive;
    var _e = useDropzone({ onDrop: function () { } }), acceptedFilesTemplateResume = _e.acceptedFiles, rootPropsTemplateResume = _e.getRootProps, inputPropsTemplateResume = _e.getInputProps, openTemplateResume = _e.isDragActive;
    var _f = useDropzone({ onDrop: function () { } }), acceptedFilesResume = _f.acceptedFiles, rootPropsResume = _f.getRootProps, inputPropsResume = _f.getInputProps, openResume = _f.isDragActive;
    var handleManualUpload = function () {
        setManualState(true);
        setTemplateState(false);
    };
    var handleTemplateUpload = function () {
        setTemplateState(true);
        setManualState(false);
    };
    var uploadPayloadBuild = function () {
        return {
            documentTypeId: JOB_SEEKER_RESUME,
            documentPath: "resume/".concat(userDataState.userData.profileLogId),
            documentName: userDataState.userData.profileLogId,
            files: acceptedFilesResume,
        };
    };
    var callResumeUpload = function () { return __awaiter(void 0, void 0, void 0, function () {
        var uploadResponse, updateResumeReponse, seekerProfile, error_1;
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return __generator(this, function (_j) {
            switch (_j.label) {
                case 0:
                    if (!(acceptedFilesResume.length > 0)) return [3 /*break*/, 9];
                    _j.label = 1;
                case 1:
                    _j.trys.push([1, 8, , 9]);
                    return [4 /*yield*/, UploadFiles(uploadPayloadBuild()).catch(function (error) {
                            props.setType(ERROR_KEY);
                            props.setDataMessage(IMAGE_UPLOAD_ERROR);
                            props.setOpen(true);
                            console.log(error);
                        })];
                case 2:
                    uploadResponse = _j.sent();
                    if (!((_a = uploadResponse === null || uploadResponse === void 0 ? void 0 : uploadResponse.data) === null || _a === void 0 ? void 0 : _a.success)) return [3 /*break*/, 7];
                    if (!imageName) return [3 /*break*/, 4];
                    return [4 /*yield*/, updateJobSeekerProfile({
                            profileId: props.profileDataId || userDataState.userData.profileId,
                            profileData: {
                                resumeDocumentId: (_c = (_b = uploadResponse === null || uploadResponse === void 0 ? void 0 : uploadResponse.data) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.id,
                            }
                        })];
                case 3:
                    updateResumeReponse = _j.sent();
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, createJobSeekerProfile({
                        profileLogId: userDataState.userData.profileLogId,
                        profileData: {
                            resumeDocumentId: (_e = (_d = uploadResponse === null || uploadResponse === void 0 ? void 0 : uploadResponse.data) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.id,
                        },
                    })];
                case 5:
                    seekerProfile = _j.sent();
                    if ((_f = seekerProfile === null || seekerProfile === void 0 ? void 0 : seekerProfile.data) === null || _f === void 0 ? void 0 : _f.success) {
                        dispatchProfileId((_h = (_g = seekerProfile === null || seekerProfile === void 0 ? void 0 : seekerProfile.data) === null || _g === void 0 ? void 0 : _g.data) === null || _h === void 0 ? void 0 : _h.profileId);
                    }
                    _j.label = 6;
                case 6:
                    props.setType(SUCCESS_KEY);
                    props.setDataMessage(FORM_SUBMISSION_SUCCESS);
                    props.setOpen(true);
                    props.handleComplete(1);
                    props.handleNext();
                    _j.label = 7;
                case 7: return [3 /*break*/, 9];
                case 8:
                    error_1 = _j.sent();
                    console.log(error_1);
                    props.setType(ERROR_KEY);
                    props.setDataMessage(error_1 === null || error_1 === void 0 ? void 0 : error_1.message);
                    props.setOpen(true);
                    return [3 /*break*/, 9];
                case 9: return [2 /*return*/];
            }
        });
    }); };
    var dispatchProfileId = function (profileId) {
        dispatch({
            type: "USER_ADD",
            data: {
                userData: __assign(__assign({}, userDataState.userData), { profileId: profileId }),
                userId: userDataState.userId,
            },
        });
    };
    useEffect(function () {
        callPrefillData();
    }, []);
    var callPrefillData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var token, profileDataFetched, fileResponse;
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return __generator(this, function (_j) {
            switch (_j.label) {
                case 0: return [4 /*yield*/, KeycloakService.fetchTokenDifferently()];
                case 1:
                    token = _j.sent();
                    localStorage.setItem('react-token', token);
                    sessionStorage.setItem('react-token', token);
                    return [4 /*yield*/, getJobSeekerProfile(props.profileDataId)];
                case 2:
                    profileDataFetched = _j.sent();
                    if (!((_b = (_a = profileDataFetched === null || profileDataFetched === void 0 ? void 0 : profileDataFetched.data) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.resumeDocumentId)) return [3 /*break*/, 4];
                    return [4 /*yield*/, getFileDetails((_d = (_c = profileDataFetched === null || profileDataFetched === void 0 ? void 0 : profileDataFetched.data) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.resumeDocumentId)];
                case 3:
                    fileResponse = _j.sent();
                    if ((_f = (_e = fileResponse === null || fileResponse === void 0 ? void 0 : fileResponse.data) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.fileName)
                        setImageName((_h = (_g = fileResponse === null || fileResponse === void 0 ? void 0 : fileResponse.data) === null || _g === void 0 ? void 0 : _g.data) === null || _h === void 0 ? void 0 : _h.fileName);
                    _j.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (_jsxs("div", __assign({ className: "job-seeker-profile-content" }, { children: [_jsxs(Grid, __assign({ container: true, spacing: 3 }, { children: [_jsx(Grid, __assign({ item: true, xs: 12, className: classes.Grid1 }, { children: _jsxs(ButtonGroup, __assign({ variant: "outlined", "aria-label": "outlined button group" }, { children: [_jsx(Button, __assign({ className: templateState ? classes.bGroup : "", onClick: handleTemplateUpload }, { children: "Template Upload" })), _jsx(Button, __assign({ className: manualState ? classes.bGroup : "", onClick: handleManualUpload }, { children: "Manual Upload" }))] })) })), manualState ? (_jsxs(Grid, __assign({ item: true, xs: 12, margin: 8, className: classes.Grid2 }, { children: [_jsxs(Box, __assign({ display: "inline-flex", marginTop: 3, marginBottom: 3 }, { children: [_jsx(Typography, __assign({ className: classes.uploadResume, variant: "h6" }, { children: "Upload Resume*" })), _jsx(Typography, __assign({ className: classes.maualUploadSubHeading }, { children: "Warning! Make Sure the Job Seeker can Join within 30 days after Profile is entered into the contest" }))] })), _jsxs("div", __assign({}, rootPropsResume(), { className: classes.manaulUploadDiv }, { children: [_jsx("input", __assign({}, inputPropsResume())), " ", _jsx(Typography, __assign({ textAlign: "center" }, { children: openResume ? (_jsx("p", { children: "Drop the files here ..." })) : (_jsx("p", { children: "Drag 'n' drop some files here, or click to select files" })) }))] })), _jsxs(Box, __assign({ marginTop: 3, justifyContent: "space-between", sx: {
                                    display: {
                                        sm: "block",
                                        md: "flex",
                                        lg: "flex",
                                        xl: "flex",
                                    },
                                } }, { children: [_jsx(Box, __assign({ textAlign: "left", className: classes.subText1 }, { children: imageName && acceptedFilesResume.length < 1 ?
                                            _jsx("span", { children: imageName }) :
                                            _jsx(Box, { children: acceptedFilesResume.map(function (file) { return (_jsx(Box, { children: file.path }, file.path || file.name)); }) }) })), _jsxs(Box, __assign({ textAlign: "left", className: classes.subText2 }, { children: [_jsx(Checkbox, __assign({}, label, { defaultChecked: true, color: "success" })), "Duplication Check with Hiringhood Completed"] })), _jsx(Box, __assign({}, rootPropsResume(), { textAlign: "left", className: classes.subText3 }, { children: "Re-Upload" }))] }))] }))) : null, templateState ? (_jsxs(Grid, __assign({ container: true, spacing: 3 }, { children: [_jsxs(Grid, __assign({ item: true, xs: 12, marginLeft: 10 }, { children: [_jsx("h1", { children: "Dear User Template upload is unavailable currently, will be updated in the next iteration" }), _jsxs(Box, __assign({ display: "inline-flex", marginTop: 10, justifyContent: "space-between" }, { children: [_jsxs(Typography, __assign({ variant: "h6", align: "left", className: classes.autoFillTxt }, { children: ["Auto Fill Using Template*", _jsx("p", __assign({ className: classes.tempalteSubText1 }, { children: "Auto fill information for steps 3-6" }))] })), _jsx(Typography, __assign({ className: classes.filledWarning }, { children: "Warning! make sure all information is filled before uploading" }))] }))] })), _jsxs(Grid, __assign({ item: true, xs: 12, display: "inline-flex", justifyContent: "space-between" }, { children: [_jsxs(Box, __assign({ className: classes.fillTemplate }, { children: [_jsx(DownloadIcon, { style: { fontSize: "80px" } }), _jsx(Box, { children: "Auto Fill Template" })] })), _jsxs(Box, __assign({ className: classes.dragBox }, rootPropsTemplate(), { children: [_jsxs(Box, __assign({ className: classes.dashedBox, sx: { p: 1, m: 3 } }, { children: [_jsx("input", __assign({}, inputPropsTemplate())), _jsx(Typography, __assign({ fontSize: 20, color: "blue", textAlign: "center" }, { children: "+" })), _jsxs(Typography, __assign({ variant: "body1", color: "blue", textAlign: "center" }, { children: ["Drag & drop", " "] })), _jsx(Typography, __assign({ textAlign: "center" }, { children: "Your file here or browse" })), _jsx("aside", {})] })), _jsxs(Box, __assign({ sx: {
                                                    display: {
                                                        xs: "block",
                                                        sm: "flex",
                                                        md: "flex",
                                                        lg: "flex",
                                                    },
                                                    justifyContent: "space-between",
                                                    p: 2,
                                                }, className: classes.limitWidth }, { children: [_jsxs(Box, { children: [_jsx(Box, __assign({}, rootPropsTemplate(), { textAlign: "left", className: classes.browseFiles }, { children: "Browse File" })), _jsx(Box, __assign({ sx: { fontSize: "10px" } }, { children: "Size: 5MB, Format: .pdf" }))] }), _jsx(Box, __assign({}, rootPropsTemplate(), { textAlign: "right", className: classes.uploadLogoText }, { children: "Upload File" }))] }))] }))] })), _jsxs(Grid, __assign({ item: true, xs: 12, margin: 8 }, { children: [_jsxs(Box, __assign({ display: "inline-flex", marginTop: 3, marginBottom: 3, justifyContent: "space-between" }, { children: [_jsx(Typography, __assign({ className: classes.uploadResume }, { children: "Upload Resume*" })), _jsx(Typography, __assign({ className: classes.maualUploadSubHeading }, { children: "Warning! Make Sure the Job Seeker can Join within 30 days after Profile is entered into the contest" }))] })), _jsxs("div", __assign({}, rootPropsTemplateResume(), { className: classes.manaulUploadDiv }, { children: [_jsx("input", __assign({}, inputPropsTemplateResume())), " ", _jsx(Typography, __assign({ textAlign: "center" }, { children: openTemplateResume ? (_jsx("p", { children: "Drop the files here ..." })) : (_jsx("p", { children: "Drag 'n' drop some files here, or click to select files" })) }))] })), _jsxs(Box, __assign({ marginTop: 3, justifyContent: "space-between", sx: {
                                            display: {
                                                sm: "block",
                                                md: "flex",
                                                lg: "flex",
                                                xl: "flex",
                                            },
                                        } }, { children: [_jsx(Box, __assign({ textAlign: "left", className: classes.subText1 }, { children: _jsx(Box, { children: acceptedFilesTemplateResume.map(function (file) { return (_jsx(Box, { children: file.path }, file.path || file.name)); }) }) })), _jsxs(Box, __assign({ textAlign: "left", className: classes.subText2 }, { children: [_jsx(Checkbox, __assign({}, label, { disabled: true, checked: true, color: "success" })), "Duplication Check with Hiringhood Completed"] })), _jsx(Box, __assign({}, rootPropsResume(), { textAlign: "left", className: classes.subText3 }, { children: "Re-Upload" }))] }))] }))] }))) : null] })), _jsx(PreviousNextButtons, { handleNext: callResumeUpload, handleBack: props.handleBack })] })));
};
export default JobSeekerProfileUpload;
