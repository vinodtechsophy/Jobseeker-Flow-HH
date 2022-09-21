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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import { Typography, tooltipClasses, Tooltip, IconButton, } from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import { openFile } from "../../services/DocumentService";
var useStyles = makeStyles(function () { return ({
    buttonContainer: {
        "&.MuiButton-root": {
            minWidth: "2vw",
        },
    },
    arrow: {
        "&:before": {
            border: "1px solid #36454F",
            color: "#ffffff",
        },
    },
    iconColor: {
        color: "#4d6cd9",
        margin: "8px",
    },
    uploadText: {
        color: "#4d6cd9",
    },
}); });
export var ResumeUploaded = function (params) {
    var classes = useStyles();
    var handleViewResume = function () { return __awaiter(void 0, void 0, void 0, function () {
        var resumeId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    resumeId = params.getValue();
                    console.log(resumeId);
                    return [4 /*yield*/, openFile(resumeId)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    return (_jsx("div", __assign({ style: {
            textAlign: "center",
        } }, { children: _jsx(Typography, __assign({ onClick: handleViewResume, className: classes.uploadText }, { children: "View Resume Uploaded" })) })));
};
export var Icons = function (params) {
    var classes = useStyles();
    var handleClick = function () {
        console.log(params);
    };
    var handleChat = function () {
        console.log("Chat Icon clicked");
    };
    return (_jsxs("div", __assign({ style: {
            textAlign: "center",
        } }, { children: [_jsx(VisibilityIcon, { className: classes.iconColor, onClick: handleClick }), _jsx(LocalPhoneRoundedIcon, { className: classes.iconColor, onClick: handleClick }), _jsx(ChatBubbleOutlineIcon, { className: classes.iconColor, onClick: handleChat }), _jsx(DehazeIcon, { className: classes.iconColor, onClick: handleClick })] })));
};
export var CustomDropDown = function (params) {
    // console.log("Vetting custom feild", params);
    var Passed = {
        option: "passed",
        color: "#22C55E",
        title: "Success",
        body: "Passed",
    };
    var Pending = {
        option: "pending",
        color: "#ff781f",
        title: "",
        body: "Pending",
    };
    var Failed = {
        option: "failed",
        color: "#EF4444",
        title: "",
        body: "Failed",
    };
    var _a = useState({
        option: "",
        color: "",
        title: "",
        body: "",
    }), option = _a[0], setOption = _a[1];
    useEffect(function () {
        console.log(params.getValue());
        if (params.getValue() === null || "") {
            setOption({
                option: "",
                color: "",
                title: "",
                body: "",
            });
        }
        else if (params.getValue() === "passed") {
            setOption(Passed);
        }
        else if (params.getValue() === "pending") {
            setOption(Pending);
        }
        else if (params.getValue() === "failed") {
            setOption(Failed);
        }
    }, []);
    var id = "cellNo".concat(params.rowIndex).concat(params.column.instanceId);
    var iconId = "iconNo".concat(params.rowIndex).concat(params.column.instanceId);
    var _b = useState(""), message = _b[0], setMessage = _b[1];
    var handleChange = function (event) {
        params.setValue(event.target.value);
        if (event.target.value == "passed") {
            console.log("Can call Api to change status to Passed");
            setOption(Passed);
        }
        else if (event.target.value == "pending") {
            setOption(Pending);
        }
        else if (event.target.value == "failed") {
            setOption(Failed);
        }
        else if (event.target.value == "") {
            setOption({
                option: "",
                color: "",
                title: "",
                body: "",
            });
        }
    };
    var classes = useStyles();
    var _c = React.useState(false), open = _c[0], setOpen = _c[1];
    var HtmlTooltip = styled(function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (_jsx(Tooltip, __assign({}, props, { placement: "right", arrow: true, classes: { popper: className, arrow: classes.arrow } })));
    })(function (_a) {
        var _b;
        var theme = _a.theme;
        return (_b = {},
            _b["& .".concat(tooltipClasses.tooltip)] = {
                backgroundColor: "#ffffff",
                border: "1px solid ".concat(option.color),
                maxWidth: 220,
                fontSize: theme.typography.pxToRem(12),
                borderRadius: "1vw",
            },
            _b);
    });
    var handleTooltipClose = function () {
        setOpen(false);
    };
    var handleTooltipOpen = function () {
        setOpen(true);
        setTimeout(function () {
            setOpen(false);
        }, 4000);
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", { children: _jsxs("select", __assign({ id: id, style: { border: "1px solid #DFE5FF" }, value: option.option, onChange: handleChange, disabled: true }, { children: [_jsx("option", __assign({ value: "" }, { children: "Null" })), _jsx("option", __assign({ value: "passed" }, { children: "Passed" })), _jsx("option", __assign({ value: "pending" }, { children: "Pending" })), _jsx("option", __assign({ value: "failed" }, { children: "Failed" }))] })) }), _jsx("div", __assign({ style: { display: "inline-flex", alignItems: "center" } }, { children: (function () {
                    if (option.option == "passed") {
                        return (_jsx(Tooltip, __assign({ title: option.body, placement: "right-start" }, { children: _jsx(IconButton, { children: _jsx(CheckCircleIcon, { id: iconId, sx: { color: option.color, fontSize: "25px" } }) }) })));
                    }
                    else if (option.option == "pending") {
                        return (_jsx(Tooltip, __assign({ title: option.body, placement: "right-start" }, { children: _jsx(IconButton, { children: _jsx(PauseCircleFilledIcon, { id: iconId, sx: { color: option.color, fontSize: "25px" } }) }) })));
                    }
                    else if (option.option == "failed") {
                        return (_jsx(Tooltip, __assign({ title: option.body, placement: "right-start" }, { children: _jsx(IconButton, { children: _jsx(ErrorIcon, { id: iconId, sx: { color: option.color, fontSize: "25px" } }) }) })));
                    }
                })() }))] }));
};
var CustomFields = function () {
    return _jsx("div", { children: "CustomFields" });
};
export default CustomFields;
