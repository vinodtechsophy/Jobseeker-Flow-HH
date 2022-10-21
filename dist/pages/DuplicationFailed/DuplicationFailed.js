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
        while (_) try {
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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useRef, useMemo, useEffect, useCallback } from "react";
import { Button, Grid, Typography, Box, Checkbox } from "@mui/material";
import StepCount from "../../components/StepCount";
import { LISTING_GENERIC_HEADERS } from "./DuplicationFailedColumnHeaders";
import ColumnSelection from "../../components/ColumnSelection/ColumnSelection";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { LIGHT_GREY } from "../../color";
import BookmarkIcon from "../../../src/assets/bookmark.svg";
import { PAGE_SIZE_ARRAY } from "../../constants";
import AgGridWithPagination from "../GridItem/AgGridWithPagination";
import { getDuplicationFailedProfiles, getDuplicationFailedProfilesAggregate, } from "../../services/JobSeekerService";
var DuplicationFailed = function (props) {
    var _a = useState(1), selectedButtonId = _a[0], setSelectedButtonId = _a[1];
    var _b = useState("SUBMITTED"), selectedButtonValue = _b[0], setSelectedButtonValue = _b[1];
    var gridRef = useRef();
    var _c = useState(LISTING_GENERIC_HEADERS), columnDefs = _c[0], setColumnDefs = _c[1];
    var _d = useState(10), pageSize = _d[0], setPageSize = _d[1];
    var _e = useState([]), selectedRows = _e[0], setSelectedRows = _e[1];
    var _f = useState(1), totalPages = _f[0], setTotalPages = _f[1];
    var _g = useState(), rowData = _g[0], setRowData = _g[1];
    var _h = React.useState(false), columnsListOpen = _h[0], setColumnsListOpen = _h[1];
    var _j = React.useState(true), floatingFilter = _j[0], setFloatingFilter = _j[1];
    var _k = React.useState(0), pageNo = _k[0], setPageNo = _k[1];
    var _l = useState({}), agCount = _l[0], setAgCount = _l[1];
    useEffect(function () {
        apiCallAggregateData();
        apiCallDuplicationFailedData(selectedButtonValue, pageNo, pageSize);
    }, []);
    var setSelectedButton = function (id, filterValue) {
        setSelectedButtonId(id);
        setSelectedButtonValue(filterValue);
        apiCallDuplicationFailedData(filterValue, 0, 10);
    };
    var apiCallAggregateData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, result, t_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getDuplicationFailedProfilesAggregate(props.contestId)];
                case 1:
                    response = _a.sent();
                    if (response.data.success) {
                        result = response.data.data;
                        t_1 = {};
                        result.map(function (data) {
                            var _a;
                            Object.assign(t_1, (_a = {}, _a[data.status] = data.count, _a));
                        });
                        setAgCount(t_1);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var apiCallDuplicationFailedData = function (filterValue, page, size) { return __awaiter(void 0, void 0, void 0, function () {
        var response, duplicationFailedRecords;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return __generator(this, function (_k) {
            switch (_k.label) {
                case 0: return [4 /*yield*/, getDuplicationFailedProfiles(filterValue, page, size, props.contestId)];
                case 1:
                    response = _k.sent();
                    if ((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.success) {
                        duplicationFailedRecords = (_c = (_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.content;
                        setRowData(duplicationFailedRecords);
                        setTotalPages((_e = (_d = response === null || response === void 0 ? void 0 : response.data) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.totalPages);
                        setPageNo((_g = (_f = response === null || response === void 0 ? void 0 : response.data) === null || _f === void 0 ? void 0 : _f.data) === null || _g === void 0 ? void 0 : _g.pageNo);
                        setPageSize((_j = (_h = response === null || response === void 0 ? void 0 : response.data) === null || _h === void 0 ? void 0 : _h.data) === null || _j === void 0 ? void 0 : _j.pageSize);
                    }
                    else {
                        setRowData([]);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
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
            cellStyle: { "borderRightColor": "#DFE5FF" },
        };
    }, []);
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
        apiCallDuplicationFailedData(selectedButtonValue, pageNumber - 1, pageSize);
    };
    var pageSizeChange = function (pageSizeChanged) {
        setPageSize(pageSizeChanged);
        apiCallDuplicationFailedData(selectedButtonValue, pageNo, pageSizeChanged);
    };
    return (_jsxs(Grid, __assign({ container: true, spacing: 3, rowSpacing: 4 }, { children: [_jsx(Grid, __assign({ item: true, xs: 12, p: 2 }, { children: _jsx(Typography, __assign({ fontSize: 30 }, { children: "Previously Failed PDC and FDC Profiles." })) })), _jsx(Grid, __assign({ item: true, xs: 12, p: 2 }, { children: _jsx(StepCount, { StepCountList: [
                        {
                            label: "Submitted",
                            tooltip: "Submitted",
                            id: 1,
                            value: "SUBMITTED",
                        },
                        {
                            label: "PDC Fail",
                            tooltip: "PDC Fail",
                            id: 2,
                            value: "PDC_FAIL",
                        },
                        {
                            label: "PDC Pass",
                            tooltip: "PDC Pass",
                            id: 3,
                            value: "PDC_PASS",
                        },
                        {
                            label: "FDC Fail",
                            tooltip: "FDC Fail",
                            id: 4,
                            value: "FDC_FAIL",
                        },
                    ], countsList: [
                        {
                            _id: 1,
                            count: ((agCount === null || agCount === void 0 ? void 0 : agCount.PDC_PASS) ? agCount === null || agCount === void 0 ? void 0 : agCount.PDC_PASS : 0) + ((agCount === null || agCount === void 0 ? void 0 : agCount.FDC_FAIL) ? agCount === null || agCount === void 0 ? void 0 : agCount.FDC_FAIL : 0) + ((agCount === null || agCount === void 0 ? void 0 : agCount.PDC_FAIL) ? agCount === null || agCount === void 0 ? void 0 : agCount.PDC_FAIL : 0),
                        },
                        { _id: 2, count: agCount.PDC_FAIL },
                        { _id: 3, count: agCount.PDC_PASS },
                        { _id: 4, count: agCount.FDC_FAIL },
                    ], setSelectedButton: setSelectedButton, selectedButton: selectedButtonId }) })), _jsx(Grid, __assign({ item: true, xs: 12 }, { children: _jsxs("div", __assign({ className: "forms-button-container" }, { children: [_jsxs("div", { children: [_jsxs(Button, __assign({ variant: "outlined", className: "save-draft-button", onClick: function () { return setColumnsListOpen(true); }, disabled: columnsListOpen }, { children: ["Columns ", _jsx(GridViewOutlinedIcon, { className: "generic-icon" })] })), _jsxs(Button, __assign({ variant: "outlined", className: "save-draft-button", onClick: function () { return toogleFloatingFilter(!floatingFilter); }, sx: { background: floatingFilter ? LIGHT_GREY : "inherit" } }, { children: ["Filters ", _jsx(FilterAltOutlinedIcon, { className: "generic-icon" })] }))] }), _jsx("div", { children: _jsxs(Box, __assign({ display: "inline-block" }, { children: [_jsx(Checkbox, {}), " 10 Selected", _jsx("img", { src: BookmarkIcon })] })) })] })) })), _jsx(ColumnSelection, { AllColumns: columnDefs.map(function (cl) {
                    return Object.assign({ headerName: cl.headerName, hide: !cl.hide });
                }), setColumnsDisplay: setColumnsDisplay, onClose: setColumnsListOpen, open: columnsListOpen }), _jsx(Grid, __assign({ item: true, xs: 12 }, { children: _jsx(AgGridWithPagination, { gridRef: gridRef, rowData: rowData, columnDefs: columnDefs, defaultColDef: defaultColDef, autoGroupColumnDef: autoGroupColumnDef, suppressRowClickSelection: true, groupSelectsChildren: true, rowSelection: "multiple", rowGroupPanelShow: "always", pivotPanelShow: "always", enableRangeSelection: true, pagination: false, pageSize: pageSize, onSelectionChanged: onSelectionChanged, pageSizeArray: PAGE_SIZE_ARRAY, totalPages: totalPages, pageChange: pageChange, pageSizeChange: pageSizeChange, currentPage: pageNo + 1 }) }))] })));
};
export default DuplicationFailed;
