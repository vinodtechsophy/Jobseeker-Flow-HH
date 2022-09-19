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
import React from "react";
import { TextField } from "@mui/material";
import "../../App.css";
import "./InlineInputs.css";
var InlineInputs = function (props) {
    return (_jsxs("div", { children: [props.InlineInputTitle ? (_jsx("div", __assign({ className: "experience-card-title" }, { children: _jsx("div", { children: _jsxs("p", { children: [props.InlineInputTitle, " ", _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }) }) }))) : null, _jsx("div", __assign({ className: "inline-div" }, { children: props.InlineInputsArray.map(function (input, index) { return (_jsxs(React.Fragment, { children: [_jsx("div", __assign({ className: "number-input-field" }, { children: _jsx(TextField, { disabled: props.disabled, type: input.type, label: input.label, placeholder: input.placeholder, onInput: function (e) {
                                    var _a;
                                    if (input.type === "number") {
                                        if (Number(e.target.value) > Number(input.max))
                                            return "";
                                        e.target.value = Math.max(0, parseInt(e.target.value))
                                            .toString()
                                            .slice(0, Number((_a = input.max) === null || _a === void 0 ? void 0 : _a.toString().length) || 2);
                                    }
                                }, onChange: function (e) {
                                    return props.setValues(e.target.value.toString(), index);
                                }, InputProps: {
                                    inputProps: input.type === "number"
                                        ? {
                                            max: input === null || input === void 0 ? void 0 : input.max,
                                            min: 0,
                                        }
                                        : {
                                            maxLength: input === null || input === void 0 ? void 0 : input.maxLength,
                                        },
                                }, size: "small" }) })), _jsx("div", __assign({ className: "input-align" }, { children: _jsx("span", { children: input.label }) }))] }, input.label)); }) }))] }));
};
export default InlineInputs;
