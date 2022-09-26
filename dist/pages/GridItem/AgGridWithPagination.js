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
import React, { useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { MenuItem, Select, Pagination } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MAIN_BLUE, WHITE_TEXT } from "../../color";
import "./AgGrid.css";
var theme = createTheme({
    palette: {
        primary: {
            main: MAIN_BLUE,
            contrastText: WHITE_TEXT,
        },
    },
});
var AgGridWithPagination = function (props) {
    var _a = React.useState(false), gotData = _a[0], setGotData = _a[1];
    var _b = React.useState(""), type = _b[0], setType = _b[1];
    useEffect(function () { }, []);
    var handleChange = function (event, value) {
        props.pageChange(value);
    };
    var getRowStyle = function (params) {
        if (params.node.rowIndex % 2 != 0) {
            return { background: "#F1F7FF" };
        }
    };
    var onCellClicked = function (event) {
        var _a;
        if (((_a = event === null || event === void 0 ? void 0 : event.colDef) === null || _a === void 0 ? void 0 : _a.headerName) === "Upload Profile") {
            props.fulfillUpload(event === null || event === void 0 ? void 0 : event.data);
        }
    };
    return (_jsxs("div", __assign({ className: "ag-theme-alpine grid-container ag-root-wrapper " }, { children: [_jsx(AgGridReact, { ref: props.gridRef, rowData: props.rowData, columnDefs: props.columnDefs, defaultColDef: props.defaultColDef, getRowStyle: getRowStyle, onGridReady: props.onGridReady, autoGroupColumnDef: props.autoGroupColumnDef, suppressRowClickSelection: props.suppressRowClickSelection, groupSelectsChildren: props.groupSelectsChildren, rowSelection: props.rowSelection, rowGroupPanelShow: props.rowGroupPanelShow, pivotPanelShow: props.pivotPanelShow, enableRangeSelection: props.enableRangeSelection, pagination: props.pagination, onSelectionChanged: props.onSelectionChanged, onCellClicked: onCellClicked }), _jsxs("div", __assign({ className: "pagination-container" }, { children: [_jsx(Select, __assign({ label: false, value: props.pageSize, size: "small", className: "grid-select", onChange: function (e) { return props.pageSizeChange(e.target.value); } }, { children: props.pageSizeArray.map(function (size) { return (_jsx(MenuItem, __assign({ value: size }, { children: size }), size)); }) })), _jsx(ThemeProvider, __assign({ theme: theme }, { children: _jsx(Pagination, { count: props.totalPages, shape: "rounded", color: "primary", onChange: handleChange, page: props.currentPage }) }))] }))] })));
};
export default AgGridWithPagination;
