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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import { Grid, Box, TextField, Paper, Chip, Typography, } from "@mui/material";
import PushPinIcon from "@mui/icons-material/PushPin";
import CloseIcon from "@mui/icons-material/Close";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import SendIcon from "@mui/icons-material/Send";
import { makeStyles } from "@mui/styles";
import icon1 from "../../assets/company.svg";
import icon2 from "../../assets/positions.svg";
import icon3 from "../../assets/location.svg";
import icon4 from "../../assets/ctc.svg";
import icon5 from "../../assets/experience.svg";
import { getUserData } from "../../services/UserService";
import { filterContestDetailsWithRelation } from "../../services/ContestService";
var useStyles = makeStyles({
    mainContainer: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: 400,
        // margin: 30,
        overflow: "auto",
        border: "1px solid #E5E5E5",
    },
    section1: {
        textAlign: "center",
        backgroundColor: "#4D6CD9",
        height: "50px",
        width: "390px",
        color: "#FFFFFF",
        padding: "10px",
    },
    section2: {
        marginTop: "15px",
        height: "auto",
        width: "390px",
        marginBottom: "15px",
        // overflow: "auto",
    },
    card: {
        marginLeft: "15px",
        backgroundColor: "white",
        width: "350px",
        height: "auto",
        borderRadius: "10px",
    },
    cardHeader: {
        margin: "8px",
        display: "flex",
        color: "#4D6CD9",
        flexDirection: "row-reverse",
    },
    cardGridContainer: {
        display: "flex",
        flexDirection: "row",
        fontSize: "13px",
    },
    section3: {
        backgroundColor: "#E8EAFA",
        height: "70px",
        alignItems: "center",
        // display: 'flex',
        flexDirection: "row",
        paddingBottom: "20px",
        // flexWrap: 'wrap',
    },
    messageField: {
        borderRadius: 3,
        border: "1px solid #ccc",
        width: "260px",
        left: "8px",
        top: "18px",
    },
    section3Icon1: {
        color: "#4D6CD9",
        marginLeft: "8px",
        marginTop: "20px",
    },
    section3Icon2: {
        color: "#4D6CD9",
        marginLeft: "5px",
        marginTop: "20px",
    },
    section3Icon3: {
        color: "#4D6CD9",
        marginLeft: "10px",
        marginTop: "20px",
    },
});
var MessageBox = function (_a) {
    var closeIt = _a.closeIt, params = _a.params;
    var classes = useStyles();
    var _b = React.useState({}), contestData = _b[0], setContestData = _b[1];
    var _c = React.useState({}), employerData = _c[0], setEmployerData = _c[1];
    var _d = useState(params.data.contestId), currentUserId = _d[0], setCurrentUserId = _d[1];
    var _e = useState([
        {
            message: " Hi",
            userId: "821024382412341234",
        },
        {
            message: "Hello there!",
            userId: currentUserId,
        },
        {
            message: " Hi",
            userId: "821024382412341234",
        },
        {
            message: "Hello there!",
            userId: currentUserId,
        },
        {
            message: " Hi",
            userId: "821024382412341234",
        },
        {
            message: "Hello there!",
            userId: currentUserId,
        },
        {
            message: "Hi",
            userId: "821024382412341234",
        },
        {
            message: "Hello there!",
            userId: currentUserId,
        },
        {
            message: "Hi",
            userId: "821024382412341234",
        },
        {
            message: "Hello there!",
            userId: currentUserId,
        },
        {
            message: "Hi",
            userId: "821024382412341234",
        },
        {
            message: "Hey!",
            userId: currentUserId,
        },
        {
            message: "Hola!!",
            userId: "821024382412341234",
        },
        {
            message: "Hello there!",
            userId: currentUserId,
        },
        {
            message: "Greetings!",
            userId: "821024382412341234",
        },
    ]), chatMessages = _e[0], setChatMessages = _e[1];
    var searchContestDeatils = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, filterContestDetailsWithRelation(id)];
                case 1:
                    response = _d.sent();
                    console.log("response", response);
                    if (response) {
                        setContestData((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.data[0].formData);
                        setEmployerData((_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.data[0]);
                        Object.keys((_c = response === null || response === void 0 ? void 0 : response.data) === null || _c === void 0 ? void 0 : _c.data[0]).map(function (keyName) {
                            var _a;
                            if (/^\d+$/.test(keyName))
                                setEmployerData((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.data[0][keyName][0].formData);
                        });
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    // searchContestDeatils("CONTEST_2209000101");
    var handleCurrentUserData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var Data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getUserData()];
                case 1:
                    Data = _a.sent();
                    console.log(Data === null || Data === void 0 ? void 0 : Data.data.data[0].userId);
                    setCurrentUserId(Data === null || Data === void 0 ? void 0 : Data.data.data[0].userId);
                    return [2 /*return*/];
            }
        });
    }); };
    useEffect(function () {
        searchContestDeatils(params.data.contestId);
        handleCurrentUserData();
    }, []);
    return (_jsx("div", { children: _jsxs(Grid, __assign({ container: true, spacing: 0, className: classes.mainContainer }, { children: [_jsxs(Box, __assign({ className: classes.section1 }, { children: ["Message", _jsx(CloseIcon, { sx: { float: "right" }, onClick: closeIt })] })), _jsxs(Box, __assign({ className: classes.section2 }, { children: [_jsx("h5", __assign({ style: { color: "#4D6CD9", marginLeft: 4, textAlign: 'center' } }, { children: params.data.firstName })), _jsxs("p", __assign({ style: { marginLeft: 4, textAlign: 'center' } }, { children: [" ", "Profile Source: Name of the Recruiter"] })), _jsxs(Paper, __assign({ elevation: 3, className: classes.card }, { children: [_jsxs(Box, __assign({ className: classes.cardHeader }, { children: [_jsx("p", { children: contestData.position }), _jsx(PushPinIcon, { color: "primary" })] })), _jsxs(Grid, __assign({ container: true, spacing: 1, className: classes.cardGridContainer }, { children: [_jsxs(Grid, __assign({ item: true, xs: 6 }, { children: [_jsx("img", { src: icon4, alt: "Banner-Icon4" }), " ", contestData.budgetCtcFrom, "LPA - ", contestData.budgetCtcTo, "LPA"] })), _jsxs(Grid, __assign({ item: true, xs: 6 }, { children: [_jsx("img", { src: icon5, alt: "Banner-Icon5" }), " ", contestData.experienceFrom, " to ", contestData.experienceTo, " Yrs"] })), _jsxs(Grid, __assign({ item: true, xs: 6 }, { children: [_jsx("img", { src: icon1, alt: "Banner-Icon1" }), "       ", employerData.employerName || "unknown"] })), _jsxs(Grid, __assign({ item: true, xs: 6 }, { children: [_jsx("img", { src: icon2, alt: "Banner-Icon2" }), "   ", contestData.numberOfPositions, " Positions"] })), _jsxs(Grid, __assign({ xs: 6, item: true, display: "inline-flex" }, { children: [_jsx("img", { src: icon3, alt: "Banner-Icon3" }), _jsx(Typography, __assign({ variant: "body1", sx: {
                                                        wordWrap: "break-word",
                                                        // m: 0.5,
                                                        fontSize: 13,
                                                        fontWeight: "bold",
                                                        fontFamily: "nunito",
                                                    } }, { children: contestData.locations && contestData.locations.join(", ") }))] }))] }))] })), _jsx(Box, __assign({ textAlign: "center", p: 1 }, { children: "Message" })), _jsx(Paper, __assign({ elevation: 0, 
                            //   className={classes.msgBody}
                            sx: {
                                width: "380px",
                                height: "280px",
                                position: "relative",
                                overflowY: "scroll",
                                paddingBottom: 2,
                            } }, { children: currentUserId !== "" &&
                                chatMessages.reverse().map(function (message, index) { return (_jsxs(_Fragment, { children: [_jsx(Chip, { label: "".concat(message.message, " ").concat(index), sx: message.userId !== currentUserId
                                                ? {
                                                    position: "absolute",
                                                    left: 0,
                                                    m: 1,
                                                    bottom: 0,
                                                    marginBottom: 4 * index,
                                                }
                                                : {
                                                    position: "absolute",
                                                    right: 0,
                                                    m: 1,
                                                    bottom: 0,
                                                    marginBottom: 4 * index,
                                                } }), _jsx("br", {})] })); }) }))] })), _jsxs(Box, __assign({ className: classes.section3 }, { children: [_jsx(SentimentSatisfiedAltIcon, { className: classes.section3Icon1 }), _jsx(InsertLinkIcon, { className: classes.section3Icon2 }), _jsx(TextField, { placeholder: "Hello", variant: "standard", className: classes.messageField, InputProps: {
                                disableUnderline: true,
                            }, sx: {
                                border: "1px solid #ccc",
                            } }), _jsx(SendIcon, { className: classes.section3Icon3 })] }))] })) }));
};
export default MessageBox;
