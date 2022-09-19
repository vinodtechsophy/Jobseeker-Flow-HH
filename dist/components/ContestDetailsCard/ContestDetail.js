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
import wantedImage from "../../assets/wanted.svg";
import "./contestDetailStyles.css";
import { getImageForBadge, } from "../ContestDetailsCard/getBadges";
var ContestDetail = function (props) {
    var contestDetails = props.contestDetails;
    return (_jsx("div", { children: _jsxs("div", __assign({ className: "contest-detail-container" }, { children: [_jsxs("div", __assign({ style: { display: "flex", flex: "1 1 0px", width: "100%" } }, { children: [_jsx("div", __assign({ style: { width: "35%" } }, { children: getImageForBadge(contestDetails.badge) && (_jsx("img", { src: getImageForBadge(contestDetails === null || contestDetails === void 0 ? void 0 : contestDetails.badge), alt: "Badge", className: "contest-detail-badge", width: "85w", height: "85vw" })) })), _jsx("div", { children: _jsx("img", { className: "contest-detail-wanted-image", src: wantedImage, alt: "Wanted", width: "80w", height: "85vw" }) }), _jsx("div", {})] })), _jsxs("div", __assign({ style: { width: "18vw", paddingLeft: ".5vw" } }, { children: [_jsx("p", __assign({ className: "contest-detail-job-type" }, { children: contestDetails.employmentType })), _jsx("div", __assign({ style: {
                                minWidth: "12rem",
                                // marginTop: "0.75rem",
                            } }, { children: _jsx("p", __assign({ className: "contest-detail-job-title" }, { children: "Ruby On Rails Devloper" })) }))] }))] })) }));
};
export default ContestDetail;
