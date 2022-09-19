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
import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
var Alert = React.forwardRef(function Alert(props, ref) {
    return _jsx(MuiAlert, __assign({ elevation: 6, ref: ref, variant: "filled" }, props));
});
export default function Notification(_a) {
    var open = _a.open, type = _a.type, duration = _a.duration, message = _a.message, setOpen = _a.setOpen;
    return (_jsx(Stack, __assign({ spacing: 2, sx: { width: "100%" } }, { children: _jsx(Snackbar, __assign({ open: open, autoHideDuration: duration || 3000, onClose: function () { return setOpen(false); }, anchorOrigin: { vertical: "top", horizontal: "right" } }, { children: _jsx(Alert, __assign({ severity: type, sx: { width: "100%" }, onClose: function () { return setOpen(false); } }, { children: message })) })) })));
}
