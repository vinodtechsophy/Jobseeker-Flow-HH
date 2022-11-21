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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { makeStyles } from "@mui/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import DehazeIcon from "@mui/icons-material/Dehaze";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useAppDispatch, useAppSelector } from "../../services/StoreHooks";
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
    commonAlignment: {
        textAlign: "center",
    },
}); });
export var Icons = function (params) {
    var classes = useStyles();
    var dispatch = useAppDispatch();
    var userDataState = useAppSelector(function (state) { return state.currentUser; });
    var handleClick = function () {
        console.log("Hello");
    };
    console.log(params.data.profileLastCompletedStep);
    var handleStepOpen = function () { return __awaiter(void 0, void 0, void 0, function () {
        var jobSeekerId, profileId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    jobSeekerId = params.data._id;
                    profileId = params.data.profileId;
                    if (!(jobSeekerId && profileId)) return [3 /*break*/, 2];
                    return [4 /*yield*/, dispatch({
                            type: "USER_ADD",
                            data: {
                                userData: __assign(__assign({}, userDataState.userData), { profileId: profileId, jobSeekerId: jobSeekerId }),
                                userId: userDataState === null || userDataState === void 0 ? void 0 : userDataState.userId,
                            },
                        })];
                case 1:
                    _a.sent();
                    dispatch({
                        type: "STEP_CHANGE",
                        data: {
                            step: params.data.profileLastCompletedStep - 1,
                            tab: 0,
                        },
                    });
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var state = useAppSelector(function (state) { return state.tabsState; });
    console.log(state);
    return (_jsx(_Fragment, { children: _jsxs("div", __assign({ className: classes.commonAlignment }, { children: [_jsx(VisibilityIcon, { className: classes.iconColor, onClick: handleClick }), _jsx(LocalPhoneRoundedIcon, { className: classes.iconColor, onClick: handleClick }), _jsx(OpenInNewIcon, { className: classes.iconColor, onClick: handleStepOpen }), _jsx(DehazeIcon, { className: classes.iconColor, onClick: handleClick })] })) }));
};
var CustomFields = function () {
    return _jsx("div", { children: "CustomFields" });
};
export default CustomFields;
