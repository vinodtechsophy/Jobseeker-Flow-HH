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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useRef, useState, useMemo, useCallback, } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Button, Grid, Typography, Box } from "@mui/material";
import StepCount from "../../components/StepCount";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { LIGHT_GREY } from "../../color";
import ColumnSelection from "../../components/ColumnSelection/ColumnSelection";
import BookmarkIcon from "../../../src/assets/bookmark.svg";
import { LISTING_GENERIC_HEADERS } from "./ColumnHeader";
import AgGridWithPagination from "../GridItem/AgGridWithPagination";
import { PAGE_SIZE_ARRAY } from "../../constants";
import { statusFilterContestLinkedJobsekeers, JobSeekersAggregateWithContest, } from "../../services/JobSeekerService";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import moment from "moment";
import { makeStyles } from "@mui/styles";
var useStyles = makeStyles(function () { return ({
    mailIcon: { color: "#4D6CD9", margin: "10px" },
    actions1: { fontSize: "15px !important" },
    bookmarkIcon: { color: "#4D6CD9" },
}); });
var AllJs = function (props) {
    var gridRef = useRef();
    var contestId = props.contestId;
    var classes = useStyles();
    var _a = useState(LISTING_GENERIC_HEADERS), columnDefs = _a[0], setColumnDefs = _a[1];
    var _b = useState(10), pageSize = _b[0], setPageSize = _b[1];
    var _c = React.useState(0), pageNo = _c[0], setPageNo = _c[1];
    var _d = useState([]), selectedRows = _d[0], setSelectedRows = _d[1];
    var _e = useState(4), totalPages = _e[0], setTotalPages = _e[1];
    var _f = React.useState(), rowData = _f[0], setRowData = _f[1];
    var _g = React.useState(1), selectedButtonId = _g[0], setSelectedButtonId = _g[1];
    var _h = React.useState("JOB_SEEKER_APPLIED"), selectedButtonValue = _h[0], setSelectedButtonValue = _h[1];
    var _j = React.useState(false), columnsListOpen = _j[0], setColumnsListOpen = _j[1];
    var _k = React.useState(true), floatingFilter = _k[0], setFloatingFilter = _k[1];
    var _l = useState([]), aggregateCount = _l[0], setAggregateCount = _l[1];
    var label = { inputProps: { "aria-label": "Checkbox demo" } };
    var _m = useState(false), isMailCheckEnable = _m[0], setIsMailCheckEnable = _m[1];
    useEffect(function () {
        getTableRowData(contestId, selectedButtonValue, pageNo, pageSize);
        handleAggregateData(contestId);
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
        setPageNo(pageNumber);
        getTableRowData(contestId, selectedButtonValue, pageNumber, pageSize);
    };
    var pageSizeChange = function (pageSizeChanged) {
        setPageSize(pageSizeChanged);
        getTableRowData(contestId, selectedButtonValue, pageNo, pageSizeChanged);
    };
    var setSelectedButton = function (id, filterValue) {
        setSelectedButtonId(id);
        setSelectedButtonValue(filterValue);
        getTableRowData(contestId, filterValue, 0, 10);
    };
    var getTableRowData = function (contestId, selectedButtonValue, pageNo, pageSize) { return __awaiter(void 0, void 0, void 0, function () {
        var response, mapData, result;
        var _a, _b, _c, _d, _e, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0: return [4 /*yield*/, statusFilterContestLinkedJobsekeers(contestId, selectedButtonValue, pageNo, pageSize)];
                case 1:
                    response = _g.sent();
                    if (response.data.success) {
                        mapData = response.data.data.content;
                        result = mapData.map(function (item, index) {
                            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
                            var Data = __assign(__assign(__assign({}, item), item.matchedProfileLogsList[0]), item.matchedProfilesList[0]);
                            Data.name = "".concat(Data.firstName, " ").concat(Data.lastName);
                            Data.appliedDate = moment(Data.appliedDate).format("DD-MM-YYYY");
                            Data.ownershipTillDate = Data.ownershipTillDate
                                ? moment(Data.ownershipTillDate).format("DD-MM-YYYY")
                                : "";
                            var y = (_b = (_a = Data.profileDetailsMap) === null || _a === void 0 ? void 0 : _a.totalExperience) === null || _b === void 0 ? void 0 : _b.totalExperienceYears;
                            var m = (_d = (_c = Data.profileDetailsMap) === null || _c === void 0 ? void 0 : _c.totalExperience) === null || _d === void 0 ? void 0 : _d.totalExperienceMonths;
                            Data.experience = "".concat(y ? y : 0, " years ").concat(m ? m : 0, " months");
                            var lakh = (_f = (_e = Data.profileDetailsMap) === null || _e === void 0 ? void 0 : _e.expectedCtc) === null || _f === void 0 ? void 0 : _f.expectedCtcLakh;
                            var thousand = (_h = (_g = Data.profileDetailsMap) === null || _g === void 0 ? void 0 : _g.expectedCtc) === null || _h === void 0 ? void 0 : _h.expectedCtcThousand;
                            Data.expectedCtc = "".concat(lakh ? lakh : 0, " lakh ").concat(thousand ? thousand : 0, " thousand");
                            Data.currentLocation = (_j = Data.profileWorkStatusMap) === null || _j === void 0 ? void 0 : _j.currentLocation;
                            Data.currentlyWorking = (_k = Data.profileDetailsMap) === null || _k === void 0 ? void 0 : _k.currentlyWorking;
                            Data.noticePeriod = (_l = Data.profileNoticePeriodMap) === null || _l === void 0 ? void 0 : _l.noticePeriod;
                            return Data;
                        });
                        setRowData(result);
                        setTotalPages((_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.totalPages);
                        setPageNo((_d = (_c = response === null || response === void 0 ? void 0 : response.data) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.pageNo);
                        setPageSize((_f = (_e = response === null || response === void 0 ? void 0 : response.data) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.pageSize);
                    }
                    else {
                        console.log("false");
                        setRowData([]);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var handleAggregateData = function (contestId) { return __awaiter(void 0, void 0, void 0, function () {
        var count, response, result, response1, result1, result2, result3, result4, result5, result6, result7, response2, result8;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return __generator(this, function (_k) {
            switch (_k.label) {
                case 0:
                    count = [];
                    return [4 /*yield*/, JobSeekersAggregateWithContest(contestId, "status", "", "")];
                case 1:
                    response = _k.sent();
                    if (response.data.success) {
                        result = response.data.data.filter(function (data) { return data.status === "JOB_SEEKER_APPLIED"; });
                        count[0] = (_a = result[0]) === null || _a === void 0 ? void 0 : _a.count;
                    }
                    return [4 /*yield*/, JobSeekersAggregateWithContest(contestId, "jobSeekerMainStage", "JOB_SEEKER_APPLIED", "")];
                case 2:
                    response1 = _k.sent();
                    if (response1.data.success) {
                        result1 = response1.data.data.filter(function (data) { return data.status === "hhShortlisting"; });
                        count[1] = (_b = result1[0]) === null || _b === void 0 ? void 0 : _b.count;
                        result2 = response1.data.data.filter(function (data) { return data.status === "employerDuplication"; });
                        count[2] = (_c = result2[0]) === null || _c === void 0 ? void 0 : _c.count;
                        result3 = response1.data.data.filter(function (data) { return data.status === "employerShortlisting"; });
                        count[3] = (_d = result3[0]) === null || _d === void 0 ? void 0 : _d.count;
                        result4 = response1.data.data.filter(function (data) { return data.status === "phaseL1"; });
                        count[4] = (_e = result4[0]) === null || _e === void 0 ? void 0 : _e.count;
                        result5 = response1.data.data.filter(function (data) { return data.status === "phaseL2"; });
                        count[5] = (_f = result5[0]) === null || _f === void 0 ? void 0 : _f.count;
                        result6 = response1.data.data.filter(function (data) { return data.status === "phaseHr"; });
                        count[6] = (_g = result6[0]) === null || _g === void 0 ? void 0 : _g.count;
                        result7 = response1.data.data.filter(function (data) { return data.status === "offerRolled"; });
                        count[7] = (_h = result7[0]) === null || _h === void 0 ? void 0 : _h.count;
                    }
                    return [4 /*yield*/, JobSeekersAggregateWithContest(contestId, "coolingPeriod", "", "")];
                case 3:
                    response2 = _k.sent();
                    if (response2.data.success) {
                        result8 = response2.data.data.filter(function (data) { return data.status === "TOTAL_JOB_SEEKERS"; });
                        count[8] = (_j = result8[0]) === null || _j === void 0 ? void 0 : _j.count;
                    }
                    setAggregateCount(count);
                    return [2 /*return*/];
            }
        });
    }); };
    return (_jsxs(Grid, __assign({ container: true, spacing: 3 }, { children: [_jsxs(Grid, __assign({ item: true, xs: 12, p: 2 }, { children: [_jsx(Typography, __assign({ fontSize: 30 }, { children: "Profile" })), _jsx(StepCount, { StepCountList: [
                            {
                                label: "Submitted",
                                tooltip: "Submitted",
                                id: 1,
                                value: "JOB_SEEKER_APPLIED",
                            },
                            {
                                label: "HH Shortlisting",
                                tooltip: "HH Shortlisting",
                                id: 2,
                                value: "JOB_SEEKER_APPLIED,jobSeekerMainStage:hhShortlisting",
                            },
                            {
                                label: "Employer Duplication ",
                                tooltip: "Employer Duplication",
                                id: 3,
                                value: "JOB_SEEKER_APPLIED,jobSeekerMainStage:employerDuplication",
                            },
                            {
                                label: "Employer Shortlisting",
                                tooltip: "Employer Shortlisting",
                                id: 4,
                                value: "JOB_SEEKER_APPLIED,jobSeekerMainStage:employerShortlisting",
                            },
                            {
                                label: "Phase-L1",
                                tooltip: "Phase-L1",
                                id: 5,
                                value: "JOB_SEEKER_APPLIED,jobSeekerMainStage:phaseL1",
                            },
                            {
                                label: "Phase-L2",
                                tooltip: "Phase-L2",
                                id: 6,
                                value: "JOB_SEEKER_APPLIED,jobSeekerMainStage:phaseL2",
                            },
                            {
                                label: "Phase-HR",
                                tooltip: "Phase-HR",
                                id: 7,
                                value: "JOB_SEEKER_APPLIED,jobSeekerMainStage:phaseHr",
                            },
                            {
                                label: "Offer Rolled",
                                tooltip: "Offer Rolled",
                                id: 8,
                                value: "JOB_SEEKER_APPLIED,jobSeekerMainStage:offerRolled",
                            },
                            {
                                label: "Cooling Period",
                                tooltip: "Cooling Period",
                                id: 9,
                                value: "JOB_SEEKER_APPLIED,coolingPeriod:notNull",
                            },
                        ], countsList: [
                            { _id: 1, count: aggregateCount[0] },
                            { _id: 2, count: aggregateCount[1] },
                            { _id: 3, count: aggregateCount[2] },
                            { _id: 4, count: aggregateCount[3] },
                            { _id: 5, count: aggregateCount[4] },
                            { _id: 6, count: aggregateCount[5] },
                            { _id: 7, count: aggregateCount[6] },
                            { _id: 8, count: aggregateCount[7] },
                            { _id: 9, count: aggregateCount[8] },
                        ], setSelectedButton: setSelectedButton, selectedButton: selectedButtonId })] })), _jsx(Grid, __assign({ item: true, xs: 12 }, { children: _jsxs("div", __assign({ className: "forms-button-container" }, { children: [_jsxs("div", { children: [_jsxs(Button, __assign({ variant: "outlined", className: "save-draft-button", onClick: function () { return setColumnsListOpen(true); }, disabled: columnsListOpen }, { children: ["Columns ", _jsx(GridViewOutlinedIcon, { className: "generic-icon" })] })), _jsxs(Button, __assign({ variant: "outlined", className: "save-draft-button", onClick: function () { return toogleFloatingFilter(!floatingFilter); }, sx: { background: floatingFilter ? LIGHT_GREY : "inherit" } }, { children: ["Filters ", _jsx(FilterAltOutlinedIcon, { className: "generic-icon" })] }))] }), _jsx("div", { children: _jsxs(Box, __assign({ display: "inline-block" }, { children: [_jsxs(Box, __assign({ display: "inline-block", className: classes.actions1 }, { children: [_jsx(Checkbox, { disabled: selectedRows.length > 0 ? false : true, checked: isMailCheckEnable, onChange: function () { return setIsMailCheckEnable(!isMailCheckEnable); } }), " ", selectedRows.length, " Selected"] })), _jsx(MailOutlineIcon, { sx: { color: "#4D6CD9" }, className: classes.mailIcon }), _jsx("img", { src: BookmarkIcon })] })) })] })) })), _jsx(ColumnSelection, { AllColumns: columnDefs.filter(function (col) {
                    return col.headerName !== "All";
                })
                    .map(function (cl) {
                    return Object.assign({ headerName: cl.headerName, hide: !cl.hide });
                }), setColumnsDisplay: setColumnsDisplay, onClose: setColumnsListOpen, open: columnsListOpen }), _jsx(Grid, __assign({ item: true, xs: 12 }, { children: _jsx(AgGridWithPagination, { gridRef: gridRef, rowData: rowData, columnDefs: columnDefs, defaultColDef: defaultColDef, autoGroupColumnDef: autoGroupColumnDef, suppressRowClickSelection: true, groupSelectsChildren: true, rowSelection: "multiple", rowGroupPanelShow: "always", pivotPanelShow: "always", enableRangeSelection: true, pagination: false, pageSize: pageSize, onSelectionChanged: onSelectionChanged, pageSizeArray: PAGE_SIZE_ARRAY, totalPages: totalPages, pageChange: pageChange, pageSizeChange: pageSizeChange }) }))] })));
};
export default AllJs;
