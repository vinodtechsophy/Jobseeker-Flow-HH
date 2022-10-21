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
    var handleClick = function () {
        console.log("Hello");
    };
    return (_jsx(_Fragment, { children: _jsxs("div", __assign({ className: classes.commonAlignment }, { children: [_jsx(VisibilityIcon, { className: classes.iconColor, onClick: handleClick }), _jsx(LocalPhoneRoundedIcon, { className: classes.iconColor, onClick: handleClick }), _jsx(DehazeIcon, { className: classes.iconColor, onClick: handleClick })] })) }));
};
var CustomFields = function () {
    return _jsx("div", { children: "CustomFields" });
};
export default CustomFields;
