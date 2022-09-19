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
import React, { useEffect, useRef, useState, useMemo, useCallback, } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Button, Grid, Typography, Box } from "@mui/material";
import StepCount from "../../components/StepCount";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { LIGHT_GREY } from "../../color";
import ColumnSelection from "../../components/ColumnSelection/ColumnSelection";
import BookmarkIcon from "../../../public/assets/bookmark.svg";
import { LISTING_GENERIC_HEADERS } from "./ColumnHeader";
import AgGridWithPagination from "../GridItem/AgGridWithPagination";
import { PAGE_SIZE_ARRAY } from "../../constants";
import { contestLinkedJobsekeers } from "../../services/JobSeekerService";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
var rowData = [
    {
        jobSeekerName: "Narayana",
        jobSeekerID: "HH-121",
        technology: "JAVA",
        experience: "2Years",
        expectedCTC: "6Lakhs",
        profileUploaded: "12-08-2022",
        ownershipExpiryDate: "30-08-2022",
        profileOwnedby: "Vinod",
        lastCurrentContestParticipated: "DataScience",
        jobSeekerMainStage: "Data",
        jobSeekerSubStage: "onHold",
        jobSeekerComment: "pending",
        belongstoCollection: "High",
        phoneNumber: 9014064300,
        emailAddress: "narayana@gmail.com",
        currentLocation: "hyderabad",
        currentlyWorking: "yes",
        noticePeriod: "30 days",
        resumeUploaded: "yes",
    },
    {
        jobSeekerName: "Bujji",
        jobSeekerID: "HH-122",
        technology: "JAVA",
        experience: "2Years",
        expectedCTC: "6Lakhs",
        profileUploaded: "19-07-2022",
        ownershipExpiryDate: "30-08-2022",
        profileOwnedby: "Vinod",
        lastCurrentContestParticipated: "DataScience",
        jobSeekerMainStage: "Data",
        jobSeekerSubStage: "onHold",
        jobSeekerComment: "pending",
        belongstoCollection: "High",
        phoneNumber: 9703121036,
        emailAddress: "narayana@gmail.com",
        currentLocation: "hyderabad",
        currentlyWorking: "yes",
        noticePeriod: "30 days",
        resumeUploaded: "yes",
    },
    {
        jobSeekerName: "Sai",
        jobSeekerID: "HH-123",
        technology: "JAVA",
        experience: "2Years",
        expectedCTC: "6Lakhs",
        profileUploaded: "11-08-2022",
        ownershipExpiryDate: "30-07-2022",
        profileOwnedby: "Vinod",
        lastCurrentContestParticipated: "DataScience",
        jobSeekerMainStage: "Data",
        jobSeekerSubStage: "onHold",
        jobSeekerComment: "pending",
        belongstoCollection: "High",
        phoneNumber: 9494764509,
        emailAddress: "narayana@gmail.com",
        currentLocation: "hyderabad",
        currentlyWorking: "yes",
        noticePeriod: "30 days",
        resumeUploaded: "yes",
    },
];
var AllJs = function () {
    var gridRef = useRef();
    var _a = useState(LISTING_GENERIC_HEADERS), columnDefs = _a[0], setColumnDefs = _a[1];
    var _b = useState(10), pageSize = _b[0], setPageSize = _b[1];
    var _c = React.useState(1), pageNo = _c[0], setPageNo = _c[1];
    var _d = useState([]), selectedRows = _d[0], setSelectedRows = _d[1];
    var _e = useState(4), totalPages = _e[0], setTotalPages = _e[1];
    // const [rowData, setRowData] = React.useState<any[]>();
    var _f = React.useState(1), selectedButton = _f[0], setSelectedButton = _f[1];
    var _g = React.useState(false), columnsListOpen = _g[0], setColumnsListOpen = _g[1];
    var _h = React.useState(true), floatingFilter = _h[0], setFloatingFilter = _h[1];
    var label = { inputProps: { "aria-label": "Checkbox demo" } };
    useEffect(function () {
        var getTableRowData = function () { return __awaiter(void 0, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, contestLinkedJobsekeers("CONTEST_07_10078", 0, 100)];
                    case 1:
                        response = _a.sent();
                        console.log(response === null || response === void 0 ? void 0 : response.data);
                        return [2 /*return*/];
                }
            });
        }); };
        getTableRowData();
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
            cellStyle: { "border-right-color": "#DFE5FF" },
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
        setPageNo(pageNumber);
        // apiCallRelatedFormData(contestStatus, pageNumber - 1);
    };
    var pageSizeChange = function (pageSizeChanged) {
        setPageSize(pageSizeChanged);
        // apiCallRelatedFormData(contestStatus, 0, pageSizeChanged);
    };
    return (_jsxs(Grid, __assign({ container: true, spacing: 3 }, { children: [_jsxs(Grid, __assign({ item: true, xs: 12, p: 2 }, { children: [_jsx(Typography, __assign({ fontSize: 30 }, { children: "Profile" })), _jsx(StepCount, { StepCountList: [
                            {
                                label: "Submitted",
                                tooltip: "Submitted",
                                id: 1,
                            },
                            {
                                label: "HH Shortlisting",
                                tooltip: "HH Shortlisting",
                                id: 2,
                            },
                            {
                                label: "Employer Duplication ",
                                tooltip: "Employer Duplication",
                                id: 3,
                            },
                            {
                                label: "Employer Shortlisting",
                                tooltip: "Employer Shortlisting",
                                id: 4,
                            },
                            {
                                label: "Phase-L1",
                                tooltip: "Phase-L1",
                                id: 5,
                            },
                            {
                                label: "Phase-L2",
                                tooltip: "Phase-L2",
                                id: 6,
                            },
                            {
                                label: "Phase-HR",
                                tooltip: "Phase-HR",
                                id: 7,
                            },
                            {
                                label: "Offer Rolled",
                                tooltip: "Offer Rolled",
                                id: 8,
                            },
                            {
                                label: "Cooling Period",
                                tooltip: "Cooling Period",
                                id: 9,
                            },
                        ], countsList: [
                            { _id: 1, count: 12 },
                            { _id: 2, count: 8 },
                            { _id: 3, count: 6 },
                            { _id: 4, count: 4 },
                            { _id: 5, count: 8 },
                            { _id: 6, count: 6 },
                            { _id: 7, count: 4 },
                            { _id: 8, count: 2 },
                            { _id: 9, count: 2 },
                        ], setSelectedButton: setSelectedButton, selectedButton: selectedButton })] })), _jsx(Grid, __assign({ item: true, xs: 12 }, { children: _jsxs("div", __assign({ className: "forms-button-container" }, { children: [_jsxs("div", { children: [_jsxs(Button, __assign({ variant: "outlined", className: "save-draft-button", onClick: function () { return setColumnsListOpen(true); }, disabled: columnsListOpen }, { children: ["Columns ", _jsx(GridViewOutlinedIcon, { className: "generic-icon" })] })), _jsxs(Button, __assign({ variant: "outlined", className: "save-draft-button", onClick: function () { return toogleFloatingFilter(!floatingFilter); }, sx: { background: floatingFilter ? LIGHT_GREY : "inherit" } }, { children: ["Filters ", _jsx(FilterAltOutlinedIcon, { className: "generic-icon" })] }))] }), _jsx("div", { children: _jsxs(Box, __assign({ display: "inline-block" }, { children: [_jsx(Checkbox, {}), " 10 Selected", _jsx(MailOutlineIcon, { sx: { color: "#4D6CD9" } }), _jsx("img", { src: BookmarkIcon })] })) })] })) })), _jsx(ColumnSelection, { AllColumns: columnDefs.map(function (cl) {
                    return Object.assign({ headerName: cl.headerName, hide: !cl.hide });
                }), setColumnsDisplay: setColumnsDisplay, onClose: setColumnsListOpen, open: columnsListOpen }), _jsx(Grid, __assign({ item: true, xs: 12 }, { children: _jsx(AgGridWithPagination, { gridRef: gridRef, rowData: rowData, columnDefs: columnDefs, defaultColDef: defaultColDef, autoGroupColumnDef: autoGroupColumnDef, suppressRowClickSelection: true, groupSelectsChildren: true, rowSelection: "multiple", rowGroupPanelShow: "always", pivotPanelShow: "always", enableRangeSelection: true, pagination: false, pageSize: pageSize, onSelectionChanged: onSelectionChanged, pageSizeArray: PAGE_SIZE_ARRAY, totalPages: totalPages, pageChange: pageChange, pageSizeChange: pageSizeChange }) }))] })));
};
export default AllJs;
