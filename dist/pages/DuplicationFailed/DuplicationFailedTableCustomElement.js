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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import { Typography, IconButton, tooltipClasses, Tooltip, ClickAwayListener, } from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
var useStyles = makeStyles(function () { return ({
    buttonContainer: {
        "&.MuiButton-root": {
            minWidth: "2vw",
        },
    },
    arrow: {
        "&:before": {
            border: "1px solid #36454F",
            color: "#ffffff",
        },
    },
}); });
export var CustomDropDown = function (params) {
    var yes = {
        option: "yes",
        color: "#EF4444",
        title: "Error!",
        body: "The job seeker needs 6 month cooldown before it can be entered again.",
    };
    var no = {
        option: "no",
        color: "#22C55E",
        title: "",
        body: "",
    };
    var _a = useState({
        option: "",
        color: "",
        title: "",
        body: "",
    }), option = _a[0], setOption = _a[1];
    useEffect(function () {
        setOption(params.getValue() == "yes" ? yes : no);
    }, []);
    var id = "cellNo".concat(params.rowIndex).concat(params.column.instanceId);
    var iconId = "iconNo".concat(params.rowIndex).concat(params.column.instanceId);
    var _b = useState(params.getValue()), message = _b[0], setMessage = _b[1];
    var handleChange = function (event) {
        setMessage(event.target.value);
        params.setValue(event.target.value);
        if (event.target.value == "yes") {
            setOption(yes);
            setOpen(true);
            setTimeout(function () {
                setOpen(false);
            }, 4000);
        }
        else {
            setOption(no);
            setOpen(false);
            setTimeout(function () {
                setOpen(false);
            }, 4000);
        }
    };
    var classes = useStyles();
    var _c = React.useState(false), open = _c[0], setOpen = _c[1];
    var HtmlTooltip = styled(function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (_jsx(Tooltip, __assign({}, props, { placement: "right", arrow: true, classes: { popper: className, arrow: classes.arrow } })));
    })(function (_a) {
        var _b;
        var theme = _a.theme;
        return (_b = {},
            _b["& .".concat(tooltipClasses.tooltip)] = {
                backgroundColor: "#ffffff",
                border: "1px solid ".concat(option.color),
                maxWidth: 220,
                fontSize: theme.typography.pxToRem(12),
                borderRadius: "1vw",
            },
            _b);
    });
    var handleTooltipClose = function () {
        setOpen(false);
    };
    var handleTooltipOpen = function () {
        setOpen(true);
        setTimeout(function () {
            setOpen(false);
        }, 4000);
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", { children: _jsxs("select", __assign({ id: id, style: { border: "1px solid #DFE5FF" }, value: message, onChange: handleChange }, { children: [_jsx("option", __assign({ value: "no" }, { children: "No" })), _jsx("option", __assign({ value: "yes" }, { children: "Yes" }))] })) }), _jsx("div", __assign({ style: { display: "inline-flex", alignItems: "center" } }, { children: _jsx(ClickAwayListener, __assign({ onClickAway: handleTooltipClose }, { children: _jsx(HtmlTooltip
                    // PopperProps={{
                    //   disablePortal: true,
                    // }}
                    , __assign({ 
                        // PopperProps={{
                        //   disablePortal: true,
                        // }}
                        onClose: handleTooltipClose, open: open, disableFocusListener: true, disableHoverListener: true, disableTouchListener: true, title: _jsxs(React.Fragment, { children: [_jsx(Typography, __assign({ variant: "subtitle2" }, { children: _jsx("b", __assign({ style: { color: option.color } }, { children: option.title })) })), _jsx(Typography, __assign({ variant: "caption", color: "#626880" }, { children: option.body }))] }) }, { children: (function () {
                            if (option.option == "yes") {
                                return (_jsx(ReportGmailerrorredIcon, { id: iconId, sx: { color: option.color, fontSize: "20px" } }));
                            }
                            else {
                                return _jsx("div", {});
                            }
                        })() })) })) }))] }));
};
export var ActionButtons = function (params) {
    return (_jsx(_Fragment, { children: _jsx(IconButton, __assign({ color: "primary", "aria-label": "delete" }, { children: _jsx(BookmarkIcon, {}) })) }));
};
