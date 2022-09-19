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
import Card from "./contestCard";
import "./contestQuotaStyles.css";
var bonusImage = ("assets/bonus.svg");
var matchingProfilesImage = ("assets/matching-profiles-container.svg");
var quotaImage = ("assets/quota-container.svg");
var ContestQuota = function (props) {
    var bonus = props.bonus, profilesMatched = props.profilesMatched, quota = props.quota;
    return (_jsx(_Fragment, { children: _jsx(Card, { children: _jsxs("div", __assign({ className: "contest-quota-container" }, { children: [_jsxs("div", __assign({ className: "contest-quota-image-container" }, { children: [_jsx("img", { src: bonusImage, alt: "Bonus" }), _jsx("p", __assign({ className: "contest-quota-text" }, { children: bonus })), _jsx("p", __assign({ className: "contest-quota-label" }, { children: "Bonus" }))] })), profilesMatched && (_jsxs("div", __assign({ className: "contest-quota-image-container" }, { children: [_jsx("img", { src: matchingProfilesImage, alt: "Matching Profiles" }), _jsx("p", __assign({ className: "contest-quota-text" }, { children: profilesMatched })), _jsx("p", __assign({ className: "contest-quota-label" }, { children: "Matching Profiles" }))] }))), _jsxs("div", __assign({ className: "contest-quota-image-container" }, { children: [_jsx("img", { src: quotaImage, alt: "Quota" }), _jsx("p", __assign({ className: "contest-quota-text" }, { children: quota })), _jsx("p", __assign({ className: "contest-quota-label" }, { children: "Total Quota" }))] }))] })) }) }));
};
export default ContestQuota;
