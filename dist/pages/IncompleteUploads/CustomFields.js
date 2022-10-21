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
import { useAppSelector } from "../../services/StoreHooks";
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
    // const dispatch = useAppDispatch();
    var handleClick = function () {
        console.log("Hello");
    };
    console.log(params.data.profileLastCompletedStep);
    // const handleStepOpen = () => {
    //   dispatch({
    //     type: "STEP_CHANGE",
    //     data: {
    //       step: params.data.profileLastCompletedStep,
    //       tab: 0,
    //     },
    //   });
    // };
    var state = useAppSelector(function (state) { return state.tabsState; });
    console.log(state);
    return (_jsx(_Fragment, { children: _jsxs("div", __assign({ className: classes.commonAlignment }, { children: [_jsx(VisibilityIcon, { className: classes.iconColor, onClick: handleClick }), _jsx(LocalPhoneRoundedIcon, { className: classes.iconColor, onClick: handleClick }), _jsx(OpenInNewIcon, { className: classes.iconColor }), _jsx(DehazeIcon, { className: classes.iconColor, onClick: handleClick })] })) }));
};
var CustomFields = function () {
    return _jsx("div", { children: "CustomFields" });
};
export default CustomFields;
