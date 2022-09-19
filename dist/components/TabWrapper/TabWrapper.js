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
import { createElement as _createElement } from "react";
import { jsx as _jsx } from "react/jsx-runtime";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import "./TabWrapperStyles.css";
var useStyles = makeStyles(function (theme) { return ({
    tabWrapperMainTabs: {
        "&.MuiTabs-root .MuiTabScrollButton-root svg": {
            color: "white",
        },
        height: "60px",
        borderRadius: "10px 10px 0 0",
        backgroundColor: "#4D6CD9",
    },
    tabWrapperMainTab: {
        marginTop: "7px",
        marginLeft: "3px",
        width: "24.5%",
        textTransform: "none",
        color: "white !important",
        "&.Mui-selected": {
            marginTop: "6px",
            height: "15px",
            borderRadius: "15px ",
            backgroundColor: "#F1F7FF",
            border: "none",
            color: "#4D6CD9 !important",
            padding: "15px 32px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
        },
    },
}); });
export var TabPanel = function (props) {
    var children = props.children, value = props.value, index = props.index, disablePadding = props.disablePadding, other = __rest(props, ["children", "value", "index", "disablePadding"]);
    return (_jsx("div", __assign({ role: "tabpanel", hidden: value !== index, id: "simple-tabpanel-".concat(index), "aria-labelledby": "simple-tab-".concat(index) }, other, { className: "tab-panel" }, { children: value === index && (_jsx(Box, __assign({ sx: disablePadding ? {} : { p: 2 } }, { children: children }))) })));
};
var a11yProps = function (index) {
    return {
        id: "simple-tab-".concat(index),
        "aria-controls": "simple-tabpanel-".concat(index),
    };
};
var TabWrapper = function (_a) {
    var tabsList = _a.tabsList, tabIndex = _a.tabIndex, setTabIndex = _a.setTabIndex;
    var classes = useStyles();
    var handleChange = function (event, newValue) {
        setTabIndex(newValue);
    };
    return (_jsx(Box, __assign({ sx: { width: "100%" } }, { children: _jsx(Box, __assign({ sx: { borderBottom: 1, borderColor: "divider" } }, { children: _jsx(Tabs, __assign({ value: tabIndex, onChange: handleChange, className: classes.tabWrapperMainTabs, "aria-label": "basic tabs example", variant: "scrollable" }, { children: tabsList.map(function (tab) { return (_createElement(Tab, __assign({ className: classes.tabWrapperMainTab, label: tab.title }, a11yProps(tab.index), { key: tab.index }))); }) })) })) })));
};
export default TabWrapper;
