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
    var handleStepOpen = function () {
        var jobSeekerId = params.data._id;
        var profileId = params.data.profileId;
        dispatch({
            type: "STEP_CHANGE",
            data: {
                step: params.data.profileLastCompletedStep - 1,
                tab: 0,
            },
        });
        dispatch({
            type: "USER_ADD",
            data: {
                userData: __assign(__assign({}, userDataState.userData), { profileId: profileId, jobSeekerId: jobSeekerId }),
                userId: userDataState === null || userDataState === void 0 ? void 0 : userDataState.userId,
            },
        });
    };
    var state = useAppSelector(function (state) { return state.tabsState; });
    console.log(state);
    return (_jsx(_Fragment, { children: _jsxs("div", __assign({ className: classes.commonAlignment }, { children: [_jsx(VisibilityIcon, { className: classes.iconColor, onClick: handleClick }), _jsx(LocalPhoneRoundedIcon, { className: classes.iconColor, onClick: handleClick }), _jsx(OpenInNewIcon, { className: classes.iconColor, onClick: handleStepOpen }), _jsx(DehazeIcon, { className: classes.iconColor, onClick: handleClick })] })) }));
};
var CustomFields = function () {
    return _jsx("div", { children: "CustomFields" });
};
export default CustomFields;
