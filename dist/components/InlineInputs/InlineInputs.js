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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect } from "react";
import { TextField } from "@mui/material";
import "../../App.css";
import { useAppDispatch } from "../../services/StoreHooks";
var InlineInputs = function (props) {
    var _a = React.useState([]), inputValues = _a[0], setInputValues = _a[1];
    var dispatch = useAppDispatch();
    useEffect(function () {
        if (JSON.stringify(props.value).length > 5)
            setInputValues(function (arr) { return Object.values(props.value); });
    }, []);
    var dispatchNotificationData = function (notifyData) {
        dispatch({
            type: "SEND_ALERT",
            data: {
                enable: notifyData.enable,
                type: notifyData.type,
                message: notifyData.message,
                duration: notifyData.duration,
            },
        });
    };
    return (_jsxs("div", __assign({ id: "root-component-container" }, { children: [props.InlineInputTitle ? (_jsx("div", __assign({ className: "experience-card-title" }, { children: _jsx("div", { children: _jsxs("p", { children: [props.InlineInputTitle, " ", _jsx("span", __assign({ className: "asterisk-span" }, { children: " *" }))] }) }) }))) : null, _jsx("div", __assign({ id: "root-inline-inputbox-container", className: "inline-div" }, { children: props.InlineInputsArray.map(function (input, index) { return (_jsxs(React.Fragment, { children: [_jsx("div", __assign({ id: input.label + "-inline-inputbox-container", className: "number-input-field" }, { children: _jsx(TextField, { id: input.label + "-inline-inputbox", name: input.label + "InlineInputbox", disabled: props.disabled, type: input.type, label: input.label, value: input.type === "number"
                                    ? Number(inputValues[index])
                                    : inputValues[index], placeholder: input.placeholder, onInput: function (e) {
                                    var _a;
                                    if (input.type === "number") {
                                        if (Number(e.target.value) > Number(input.max)) {
                                            var tempInputs_1 = __spreadArray([], inputValues, true);
                                            tempInputs_1[index] = 0;
                                            setInputValues(function (arr) { return tempInputs_1; });
                                            return "";
                                        }
                                        if (e.target.value !== "")
                                            e.target.value = Math.max(0, parseInt(e.target.value))
                                                .toString()
                                                .slice(0, Number((_a = input.max) === null || _a === void 0 ? void 0 : _a.toString().length) || 2);
                                    }
                                }, onChange: function (e) {
                                    if (input.type === "number") {
                                        if (Number(e.target.value) <= Number(input.max)) {
                                            props.setValues(e.target.value.toString(), index);
                                            var tempInputs_2 = __spreadArray([], inputValues, true);
                                            tempInputs_2[index] = e.target.value;
                                            setInputValues(function (arr) { return tempInputs_2; });
                                        }
                                        else {
                                            props.setValues("", index);
                                            var tempInputs_3 = __spreadArray([], inputValues, true);
                                            tempInputs_3[index] = "";
                                            setInputValues(function (arr) { return tempInputs_3; });
                                            dispatchNotificationData({
                                                enable: true,
                                                type: "warning",
                                                message: "Invalid data, plz try again.",
                                                duration: 2000,
                                            });
                                        }
                                    }
                                    else {
                                        props.setValues(e.target.value.toString(), index);
                                        var tempInputs_4 = __spreadArray([], inputValues, true);
                                        tempInputs_4[index] = e.target.value;
                                        setInputValues(function (arr) { return tempInputs_4; });
                                    }
                                }, InputProps: {
                                    inputProps: input.type === "number"
                                        ? {
                                            max: input === null || input === void 0 ? void 0 : input.max,
                                            min: 0,
                                        }
                                        : {
                                            maxLength: input === null || input === void 0 ? void 0 : input.maxLength,
                                        },
                                }, size: "small" }) })), _jsx("div", __assign({ className: "input-align" }, { children: _jsx("span", { children: input.label }) }))] }, input.label)); }) }))] })));
};
export default InlineInputs;
