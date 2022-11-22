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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useEffect, useRef, useState, useMemo, useCallback, } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Button, Grid, Typography, Box, Tooltip } from "@mui/material";
import StepCount from "../../components/StepCount";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { LIGHT_GREY } from "../../color";
import ColumnSelection from "../../components/ColumnSelection/ColumnSelection";
import AgGridWithPagination from "../GridItem/AgGridWithPagination";
import { PAGE_SIZE_ARRAY } from "../../constants";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { LISTING_GENERIC_HEADERS } from "./ColumnHeaders";
import { getIncompleteUplodsStepCount, getJobseekersOnStepCount, } from "../../services/JobSeekerService";
import moment from "moment";
import { makeStyles } from "@mui/styles";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
var useStyles = makeStyles(function () { return ({
    iconStyle: { color: "#4D6CD9", margin: "5px" },
    action1: { fontSize: "15px !important" },
}); });
var IncompleteUploads = function (props) {
    var contestId = props.contestId, id = props.id;
    var classes = useStyles();
    var gridRef = useRef();
    var _a = useState(LISTING_GENERIC_HEADERS), columnDefs = _a[0], setColumnDefs = _a[1];
    var _b = useState(10), pageSize = _b[0], setPageSize = _b[1];
    var _c = React.useState(0), pageNo = _c[0], setPageNo = _c[1];
    var _d = useState([]), selectedRows = _d[0], setSelectedRows = _d[1];
    var _e = useState(0), totalPages = _e[0], setTotalPages = _e[1];
    var _f = React.useState(), rowData = _f[0], setRowData = _f[1];
    var _g = React.useState(1), selectedButtonId = _g[0], setSelectedButtonId = _g[1];
    var _h = React.useState(false), columnsListOpen = _h[0], setColumnsListOpen = _h[1];
    var _j = React.useState(true), floatingFilter = _j[0], setFloatingFilter = _j[1];
    var _k = useState(1), selectedButtonValue = _k[0], setSelectedButtonValue = _k[1];
    var _l = useState({
        step1: 0,
        step2: 0,
        step3: 0,
        step4: 0,
        step5: 0,
        step6: 0,
        step7: 0,
    }), inStepCount = _l[0], setInStepCount = _l[1];
    var _m = useState([]), selectedEmails = _m[0], setSelectedEmails = _m[1];
    var _o = useState(false), isMailCheckEnable = _o[0], setIsMailCheckEnable = _o[1];
    var label = { inputProps: { "aria-label": "Checkbox demo" } };
    var setSelectedButton = function (id, filterValue) {
        console.log(filterValue, id);
        setSelectedButtonId(id);
        setSelectedButtonValue(filterValue);
        setPageNo(0);
        setPageSize(10);
    };
    var getTableRowData = function (filterValue, id, pageNo, pageSize) { return __awaiter(void 0, void 0, void 0, function () {
        var response, mapData, result, stateData;
        var _a, _b, _c, _d, _e, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0: return [4 /*yield*/, getJobseekersOnStepCount(filterValue, id, pageNo, pageSize)];
                case 1:
                    response = _g.sent();
                    console.log(response === null || response === void 0 ? void 0 : response.data);
                    if (response.data.success) {
                        mapData = response.data.data.content;
                        result = mapData.map(function (item, index) {
                            var Data = __assign(__assign(__assign({}, item), item.matchedProfileLogsList[0]), item.matchedProfilesList[0]);
                            return Data;
                        });
                        stateData = result.map(function (item, index) {
                            item.dateOfBirth = moment(item.dateOfBirth).format("DD-MM-YYYY");
                            item.updatedOn = moment(item.updatedOn).format("DD-MM-YYYY");
                            item.ownershipTillDate = moment(item.ownershipTillDate).format("DD-MM-YYYY");
                            var Data = __assign({}, item);
                            return Data;
                        });
                        setRowData(stateData);
                        setTotalPages((_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.totalPages);
                        setPageNo((_d = (_c = response === null || response === void 0 ? void 0 : response.data) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.pageNo);
                        setPageSize((_f = (_e = response === null || response === void 0 ? void 0 : response.data) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.pageSize);
                    }
                    else {
                        setRowData([]);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var handleAggregateData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, result1, result2, result3, result4, result5, result6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getIncompleteUplodsStepCount(id)];
                case 1:
                    response = _a.sent();
                    console.log(response);
                    if (response.data.success) {
                        console.log(response.data.success);
                        result1 = response.data.data.filter(function (data) { return data.profileLastCompletedStep === "1"; });
                        result2 = response.data.data.filter(function (data) { return data.profileLastCompletedStep === "2"; });
                        result3 = response.data.data.filter(function (data) { return data.profileLastCompletedStep === "3"; });
                        result4 = response.data.data.filter(function (data) { return data.profileLastCompletedStep === "4"; });
                        result5 = response.data.data.filter(function (data) { return data.profileLastCompletedStep === "5"; });
                        result6 = response.data.data.filter(function (data) { return data.profileLastCompletedStep === "6"; });
                        setInStepCount({
                            step1: (result1.length > 0 && result1[0].count) || 0,
                            step2: (result2.length > 0 && result2[0].count) || 0,
                            step3: (result3.length > 0 && result3[0].count) || 0,
                            step4: (result4.length > 0 && result4[0].count) || 0,
                            step5: (result5.length > 0 && result5[0].count) || 0,
                            step6: (result6.length > 0 && result6[0].count) || 0,
                        });
                    }
                    else {
                        setInStepCount({
                            step1: 0,
                            step2: 0,
                            step3: 0,
                            step4: 0,
                            step5: 0,
                            step6: 0,
                        });
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    useEffect(function () {
        handleAggregateData();
        getTableRowData(selectedButtonValue, id, pageNo, pageSize);
    }, [selectedButtonValue, id, pageNo, pageSize]);
    var autoGroupColumnDef = useMemo(function () {
        return {
            headerName: "Group",
            minWidth: 170,
            field: "athlete",
            valueGetter: function (params) {
                if (params.node.group) {
                    return params.node.key;
                }
                else {
                    return params.data[params.colDef.field];
                }
            },
            headerCheckboxSelection: true,
            cellRenderer: "agGroupCellRenderer",
            cellRendererParams: {
                checkbox: true,
            },
        };
    }, []);
    var defaultColDef = useMemo(function () {
        return {
            flex: 1,
            minWidth: 170,
            maxWidth: 250,
            sortable: true,
            floatingFilter: true,
            enableRowGroup: true,
            enablePivot: true,
            enableValue: true,
            resizable: true,
            cellStyle: { borderRightColor: "#DFE5FF" },
        };
    }, []);
    console.log(columnDefs);
    var setColumnsDisplay = function (columnList) {
        var newColumnDefs = columnDefs.map(function (colDef) {
            var columnReference = columnList.find(function (col) { return col.headerName === colDef.headerName; });
            if (columnReference) {
                return __assign(__assign({}, colDef), { hide: !columnReference.hide });
            }
        });
        onUpdateColumns(newColumnDefs);
    };
    var toogleFloatingFilter = function (toggleOption) {
        setFloatingFilter(toggleOption);
        var newColumnDefs = columnDefs.map(function (colDef) {
            return __assign(__assign({}, colDef), { floatingFilter: toggleOption });
        });
        onUpdateColumns(newColumnDefs);
    };
    var onUpdateColumns = useCallback(function (data) {
        if (gridRef === null || gridRef === void 0 ? void 0 : gridRef.current)
            gridRef.current.api.setColumnDefs(data);
    }, []);
    var onSelectionChanged = useCallback(function () {
        if (gridRef.current) {
            var rowSelection = gridRef.current.api.getSelectedRows();
            setSelectedRows(rowSelection);
        }
    }, []);
    var pageChange = function (pageNumber) {
        setPageNo(pageNumber - 1);
    };
    var pageSizeChange = function (pageSizeChanged) {
        setPageNo(0);
        setPageSize(pageSizeChanged);
    };
    var filterEmailIds = function () {
        var emails = selectedRows.map(function (item) { return item.emailId; });
        setSelectedEmails(emails);
    };
    useEffect(function () {
        filterEmailIds();
    }, [selectedRows]);
    return (_jsx(_Fragment, { children: _jsxs(Grid, __assign({ container: true, spacing: 3 }, { children: [_jsxs(Grid, __assign({ item: true, xs: 12, p: 2 }, { children: [_jsx(Typography, __assign({ fontSize: 30 }, { children: "Incomplete Uploads" })), _jsx(StepCount, { StepCountList: [
                                {
                                    label: "Step 1",
                                    tooltip: "Submitted",
                                    id: 1,
                                    value: 1,
                                },
                                {
                                    label: "Step 2",
                                    tooltip: "Upload Resume",
                                    id: 2,
                                    value: 2,
                                },
                                {
                                    label: "Step 3",
                                    tooltip: "Job Seeker Details",
                                    id: 3,
                                    value: 3,
                                },
                                {
                                    label: "Step 4",
                                    tooltip: "Work status",
                                    id: 4,
                                    value: 4,
                                },
                                {
                                    label: "Step 5",
                                    tooltip: "Notice Period",
                                    id: 5,
                                    value: 5,
                                },
                                {
                                    label: "Step 6",
                                    tooltip: "JD Specific Questions",
                                    id: 6,
                                    value: 6,
                                },
                            ], countsList: [
                                { _id: 1, count: inStepCount.step1 },
                                { _id: 2, count: inStepCount.step2 },
                                { _id: 3, count: inStepCount.step3 },
                                { _id: 4, count: inStepCount.step4 },
                                { _id: 5, count: inStepCount.step5 },
                                { _id: 6, count: inStepCount.step6 },
                            ], setSelectedButton: setSelectedButton, selectedButton: selectedButtonId })] })), _jsx(Grid, __assign({ item: true, xs: 12 }, { children: _jsxs("div", __assign({ className: "forms-button-container" }, { children: [_jsxs("div", { children: [_jsxs(Button, __assign({ variant: "outlined", className: "save-draft-button", onClick: function () { return setColumnsListOpen(true); }, disabled: columnsListOpen }, { children: ["Columns ", _jsx(GridViewOutlinedIcon, { className: "generic-icon" })] })), _jsxs(Button, __assign({ variant: "outlined", className: "save-draft-button", onClick: function () { return toogleFloatingFilter(!floatingFilter); }, sx: { background: floatingFilter ? LIGHT_GREY : "inherit" } }, { children: ["Filters ", _jsx(FilterAltOutlinedIcon, { className: "generic-icon" })] }))] }), _jsx("div", { children: _jsxs(Box, __assign({ display: "inline-block", className: classes.action1 }, { children: [_jsx(Checkbox, { disabled: selectedRows.length > 0 ? false : true, checked: isMailCheckEnable, onChange: function () { return setIsMailCheckEnable(!isMailCheckEnable); } }), " ", selectedRows.length, " Selected", _jsx(Tooltip, __assign({ title: "Bookmark", placement: "top", arrow: true }, { children: _jsx(BookmarkBorderIcon, { className: classes.iconStyle }) })), _jsx(Tooltip, __assign({ title: "Mail All Jobseekers", placement: "top", arrow: true }, { children: _jsx(MailOutlineIcon, { className: classes.iconStyle, onClick: function () {
                                                    return isMailCheckEnable &&
                                                        window.open("https://mail.google.com/mail/?view=cm&fs=1&to=".concat(selectedEmails.toString()));
                                                } }) })), _jsx(Tooltip, __assign({ title: "Mail All Recruiters", placement: "top", arrow: true }, { children: _jsx(MailOutlineIcon, { className: classes.iconStyle, onClick: function () {
                                                    return isMailCheckEnable &&
                                                        window.open("https://mail.google.com/mail/?view=cm&fs=1&to=email@domain.example,test@gamil.com");
                                                } }) }))] })) })] })) })), _jsx(ColumnSelection, { AllColumns: columnDefs.filter(function (col) {
                        return col.headerName !== "All";
                    })
                        .map(function (cl) {
                        return Object.assign({ headerName: cl.headerName, hide: !cl.hide });
                    }), setColumnsDisplay: setColumnsDisplay, onClose: setColumnsListOpen, open: columnsListOpen }), _jsx(Grid, __assign({ item: true, xs: 12 }, { children: _jsx(AgGridWithPagination, { gridRef: gridRef, rowData: rowData, columnDefs: columnDefs, defaultColDef: defaultColDef, autoGroupColumnDef: autoGroupColumnDef, suppressRowClickSelection: true, groupSelectsChildren: true, rowSelection: "multiple", rowGroupPanelShow: "always", pivotPanelShow: "always", enableRangeSelection: true, pagination: false, pageSize: pageSize, onSelectionChanged: onSelectionChanged, pageSizeArray: PAGE_SIZE_ARRAY, totalPages: totalPages, pageChange: pageChange, pageSizeChange: pageSizeChange }) }))] })) }));
};
export default IncompleteUploads;
