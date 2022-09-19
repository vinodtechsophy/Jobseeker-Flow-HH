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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack, Button, CircularProgress } from '@mui/material';
import { BACK_BTN_TEXT, PROCEED_BTN_TEXT } from "../../constants";
var PreviousNextButtons = function (props) {
    return (_jsx("div", __assign({ className: "button-stack-container" }, { children: _jsx(Stack, __assign({ direction: "row", justifyContent: "center", spacing: 5 }, { children: props.loader ?
                _jsx(CircularProgress, {})
                :
                    _jsxs(_Fragment, { children: [_jsx(Button, __assign({ variant: "outlined", className: "previous-button stack-button", onClick: function () { return props.handleBack(); } }, { children: BACK_BTN_TEXT })), _jsx(Button, __assign({ variant: "contained", onClick: function () { return props.handleNext(); }, className: "stack-button next-button" }, { children: PROCEED_BTN_TEXT }))] }) })) })));
};
export default PreviousNextButtons;
