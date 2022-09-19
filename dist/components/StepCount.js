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
import { ButtonGroup, Button, Tooltip, } from "@mui/material";
import { MAIN_GREEN } from "../color";
var StepCount = function (props) {
    return (_jsx(_Fragment, { children: _jsx(ButtonGroup, __assign({ fullWidth: true, sx: { gap: "1%", px: "1vw", my: 2 } }, { children: props.StepCountList.map(function (button) {
                var _a;
                return (_jsx(Tooltip, __assign({ title: props.StepCountList.length < 6 ? "" : button.tooltip, placement: "top", arrow: true }, { children: _jsxs(Button, __assign({ className: "step-count-wrapper", variant: button.id === props.selectedButton ? "contained" : "outlined", onClick: function () { return props.setSelectedButton(button.id); } }, { children: [_jsx("div", __assign({ className: "step-count-text" }, { children: ((_a = props.countsList.find(function (item) { return item._id === button.id; })) === null || _a === void 0 ? void 0 : _a.count) || "0" })), button.label, _jsx("div", { className: "step-underline", style: {
                                    background: MAIN_GREEN,
                                } })] })) }), button.id));
            }) })) }));
};
export default StepCount;
