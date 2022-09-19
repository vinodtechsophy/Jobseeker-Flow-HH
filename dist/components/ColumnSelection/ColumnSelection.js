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
import React from "react";
import { Grid, Dialog, Divider, Checkbox, FormControlLabel, } from "@mui/material";
import { COLUMNS_TEXT, ALL_KEY } from "../../constants";
var ColumnSelection = function (props) {
    var onClose = props.onClose, open = props.open, setColumnsDisplay = props.setColumnsDisplay, AllColumns = props.AllColumns;
    var _a = React.useState(true), selectAll = _a[0], setSelectAll = _a[1];
    var _b = React.useState(AllColumns), currentColumns = _b[0], setCurrentColumns = _b[1];
    var handleClose = function () {
        onClose(false);
    };
    var handleListItemClick = function (value) {
        onClose(value);
    };
    var handleChange = function (event, column) {
        if (column === ALL_KEY && event.target.checked) {
            AllColumns.forEach(function (col) { return (col.hide = true); });
            setColumnsDisplay(AllColumns);
            setSelectAll(true);
            setCurrentColumns(function (cols) { return __spreadArray([], AllColumns, true); });
        }
        else if (column !== ALL_KEY) {
            if (selectAll === true)
                setSelectAll(false);
            var colIndex = AllColumns.findIndex(function (val) { return val.headerName === column; });
            var allCount = AllColumns.reduce(function (total, column) { return total + (column.hide === true ? 1 : 0); }, 0);
            var currentCount = currentColumns.reduce(function (total, column) { return total + (column.hide === true ? 1 : 0); }, 0);
            var currentDifference = Math.abs(allCount - currentCount);
            if (currentDifference > 1) {
                currentColumns[colIndex] = {
                    headerName: column,
                    hide: event.target.checked,
                };
                setCurrentColumns(function (cols) { return __spreadArray([], currentColumns, true); });
                setColumnsDisplay(currentColumns);
                var hideArr = currentColumns
                    .filter(function (col) { return col.headerName !== undefined; })
                    .map(function (column) { return column.hide; })
                    .findIndex(function (hide) { return hide === false; });
                if (hideArr === -1)
                    setSelectAll(true);
            }
            else {
                AllColumns[colIndex] = {
                    headerName: column,
                    hide: event.target.checked,
                };
                setCurrentColumns(function (cols) { return __spreadArray([], AllColumns, true); });
                setColumnsDisplay(AllColumns);
                var hideArr = AllColumns.filter(function (col) { return col.headerName !== undefined; })
                    .map(function (column) { return column.hide; })
                    .findIndex(function (hide) { return hide === false; });
                if (hideArr === -1)
                    setSelectAll(true);
            }
        }
        else {
            setSelectAll(false);
        }
    };
    return (_jsx(Dialog, __assign({ onClose: handleClose, open: open }, { children: _jsxs(Grid, __assign({ container: true, spacing: 1, my: 2 }, { children: [_jsx(Grid, __assign({ xs: 6, pl: 10 }, { children: _jsx("p", __assign({ className: "columns-dialog-title" }, { children: COLUMNS_TEXT })) })), _jsx(Grid, __assign({ xs: 6, pl: 10 }, { children: _jsx(FormControlLabel, { value: selectAll, checked: selectAll, control: _jsx(Checkbox, {}), label: "Show All Columns", onChange: function (e) { return handleChange(e, ALL_KEY); }, labelPlacement: "end" }) })), _jsx(Grid, __assign({ xs: 12, mb: 1 }, { children: _jsx(Divider, {}) })), currentColumns
                    .filter(function (col) { return col.headerName !== undefined; })
                    .map(function (column) { return (_jsx(Grid, __assign({ xs: 6, pl: 10 }, { children: _jsx(FormControlLabel, { checked: column.hide, control: _jsx(Checkbox, {}), label: column.headerName, onChange: function (e) { return handleChange(e, column.headerName); }, labelPlacement: "end" }) }), column.headerName)); })] })) })));
};
export default ColumnSelection;
