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
import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { Button, ButtonGroup } from "@mui/material";
var TabButton = function (props) {
    var _a = React.useState(0), tabCount = _a[0], setTabCount = _a[1];
    return (_jsx(ButtonGroup, __assign({ fullWidth: true, sx: { border: "none", gap: "1%" } }, { children: props.ButtonList.map(function (button, index) {
            var _a;
            return (_jsx(Button, __assign({ className: tabCount === index && (button === null || button === void 0 ? void 0 : button.name) === ((_a = props.ButtonList[index]) === null || _a === void 0 ? void 0 : _a.name)
                    ? "tab-list--active-button"
                    : "tab-list-button", onClick: function () {
                    setTabCount(index);
                    props.setContestStatus(button.status);
                } }, { children: button === null || button === void 0 ? void 0 : button.name }), button.name));
        }) })));
};
export default TabButton;
