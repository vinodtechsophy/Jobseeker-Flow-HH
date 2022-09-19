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
import "./JobSeekerProfileFlow.css";
import { getFormData, getFormModeler, updateJobSeekerProfile, } from "../../services/FormDataService";
import PreviousNextButtons from "../../components/PreviousNextButtons/PreviousNextButtons";
import { JD_PATCH_FORM, SUCCESS_KEY, FORM_SUBMISSION_SUCCESS, ERROR_KEY, } from "../../constants";
import { Form } from "react-formio";
import { useAppSelector } from "../../services/StoreHooks";
var JobSeekerProfileJD = function (props) {
    var userDataState = useAppSelector(function (state) { return state.currentUser; });
    var _a = React.useState(false), loader = _a[0], setLoader = _a[1];
    var _b = React.useState(null), menuForm = _b[0], setMenuForm = _b[1];
    var _c = React.useState(false), formValidated = _c[0], setFormValidated = _c[1];
    var _d = React.useState({}), prefillDetails = _d[0], setPrefillDetails = _d[1];
    var _e = React.useState({}), postFormDetails = _e[0], setPostFormDetails = _e[1];
    useEffect(function () {
        fetchForm();
    }, []);
    var fetchForm = function () { return __awaiter(void 0, void 0, void 0, function () {
        var formMarkup, jdMarkup;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        return __generator(this, function (_m) {
            switch (_m.label) {
                case 0: return [4 /*yield*/, getFormData(JD_PATCH_FORM, "", props.contestId)];
                case 1:
                    formMarkup = _m.sent();
                    if (!((_c = (_b = (_a = formMarkup === null || formMarkup === void 0 ? void 0 : formMarkup.data) === null || _a === void 0 ? void 0 : _a.data[0]) === null || _b === void 0 ? void 0 : _b.formData) === null || _c === void 0 ? void 0 : _c.jdQuestionForm)) return [3 /*break*/, 3];
                    return [4 /*yield*/, getFormModeler((_f = (_e = (_d = formMarkup === null || formMarkup === void 0 ? void 0 : formMarkup.data) === null || _d === void 0 ? void 0 : _d.data[0]) === null || _e === void 0 ? void 0 : _e.formData) === null || _f === void 0 ? void 0 : _f.jdQuestionForm)];
                case 2:
                    jdMarkup = _m.sent();
                    if ((_j = (_h = (_g = jdMarkup === null || jdMarkup === void 0 ? void 0 : jdMarkup.data) === null || _g === void 0 ? void 0 : _g.data) === null || _h === void 0 ? void 0 : _h.components) === null || _j === void 0 ? void 0 : _j.components) {
                        setMenuForm((_l = (_k = jdMarkup === null || jdMarkup === void 0 ? void 0 : jdMarkup.data) === null || _k === void 0 ? void 0 : _k.data) === null || _l === void 0 ? void 0 : _l.components);
                    }
                    _m.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleChange = function (data) {
        setPostFormDetails(data.data);
        setFormValidated(data.isValid);
    };
    var submitFormData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var jdQuestionsMap, bodyPayload, profileJDDetailsResponse, error_1;
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    jdQuestionsMap = Object.assign(postFormDetails);
                    setLoader(true);
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 3, , 4]);
                    bodyPayload = {
                        profileId: userDataState.userData.profileId,
                        profileData: {
                            jdQuestionsMap: jdQuestionsMap
                        },
                    };
                    return [4 /*yield*/, updateJobSeekerProfile(bodyPayload)];
                case 2:
                    profileJDDetailsResponse = _d.sent();
                    if ((_a = profileJDDetailsResponse === null || profileJDDetailsResponse === void 0 ? void 0 : profileJDDetailsResponse.data) === null || _a === void 0 ? void 0 : _a.success) {
                        props.setType(SUCCESS_KEY);
                        props.setDataMessage(FORM_SUBMISSION_SUCCESS);
                        props.setOpen(true);
                        props.handleComplete(5);
                        props.handleNext();
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _d.sent();
                    console.log(error_1 === null || error_1 === void 0 ? void 0 : error_1.response);
                    props.setType(ERROR_KEY);
                    props.setDataMessage((_c = (_b = error_1 === null || error_1 === void 0 ? void 0 : error_1.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.message);
                    props.setOpen(true);
                    return [3 /*break*/, 4];
                case 4:
                    setLoader(false);
                    return [2 /*return*/];
            }
        });
    }); };
    return (_jsxs("div", __assign({ className: "job-seeker-profile-content" }, { children: [_jsx(Form, { form: menuForm, submission: {
                    data: prefillDetails,
                }, onChange: function (schema) { return handleChange(schema); } }), _jsx(PreviousNextButtons, { handleNext: submitFormData, handleBack: props.handleBack })] })));
};
export default JobSeekerProfileJD;
