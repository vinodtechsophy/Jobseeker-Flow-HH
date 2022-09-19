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
import cashReward from "../../assets/reward.svg";
import "./cashRewardStyles.css";
var CashReward = function (props) {
    var amount = props.amount, _a = props.title, title = _a === void 0 ? "Cash Reward" : _a, _b = props.showStar, showStar = _b === void 0 ? true : _b;
    return (_jsx("div", __assign({ className: "cash-reward-container" }, { children: amount && (_jsxs("div", __assign({ style: { display: "flex", flexDirection: "column" } }, { children: [_jsxs("div", { children: [_jsx("div", { children: _jsx("img", { className: "cash-reward-image", src: cashReward, alt: "reward" }) }), _jsx("div", __assign({ className: "cash-reward-content" }, { children: _jsx("p", __assign({ className: "cash-reward-amount" }, { children: showStar ? "".concat(amount, "*") : amount })) }))] }), _jsx("div", __assign({ style: { height: "30%" } }, { children: _jsx("p", { children: title }) }))] }))) })));
};
export default CashReward;
