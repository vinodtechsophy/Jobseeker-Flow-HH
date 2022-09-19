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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./JobSeekerProfileStatusDetailsStyles.css";
var JobSeekerProfileStatusDetails = function (props) {
    return (_jsxs("div", __assign({ className: "contest_status_container" }, { children: [_jsxs("div", __assign({ className: "contest-status-data-container" }, { children: [_jsx("div", __assign({ style: { width: "5vw", height: "3vw" } }, { children: _jsx("img", { src: "assets/images/".concat(props.iconFileName, ".svg"), height: "100%", width: "100%", alt: "reward" }) })), _jsx("div", { children: props.data })] })), _jsx("div", __assign({ className: "contest-status-data-field-name-container" }, { children: props.title }))] })));
};
export default JobSeekerProfileStatusDetails;
