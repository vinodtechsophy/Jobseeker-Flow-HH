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
import { useEffect, useRef, useState, useMemo, useCallback, } from "react";
import { TEMPLATE_BUTTON } from "../../constants";
import { Typography } from "@mui/material";
import JobSeekerTempleteButton from "../../components/JobSeekerProfile/JobSeekerTempleteButton";
import { makeStyles } from "@mui/styles";
import "../JobSeekerBaseStyles.css";
import { LISTING_GENERIC_HEADERS } from "./AddProfileColumnHeaders";
import GridItem from "../GridItem/GridItem";
import KeycloakService from "../../services/KeycloakService";
import { useAppSelector, useAppDispatch } from "../../services/StoreHooks";
var useStyles = makeStyles(function () { return ({
    buttonCardContainer: {
        "&.MuiCardContent-root": {
            paddingBottom: "0vw",
        },
    },
}); });
var JobSeekerAddProfile = function (props) {
    useEffect(function () {
        fetchToken();
    }, []);
    var fetchToken = function () { return __awaiter(void 0, void 0, void 0, function () {
        var token;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, KeycloakService.fetchTokenOtherUser()];
                case 1:
                    token = _a.sent();
                    localStorage.setItem("react-token", token);
                    return [2 /*return*/];
            }
        });
    }); };
    var classes = useStyles();
    var dispatch = useAppDispatch();
    var gridRef = useRef();
    var userDataState = useAppSelector(function (state) { return state.currentUser; });
    var _a = useState(LISTING_GENERIC_HEADERS), columnDefs = _a[0], setColumnDefs = _a[1];
    var _b = useState(10), pageSize = _b[0], setPageSize = _b[1];
    var _c = useState([]), selectedRows = _c[0], setSelectedRows = _c[1];
    var _d = useState(1), totalPages = _d[0], setTotalPages = _d[1];
    var fulfillUpload = function (data) {
        dispatchProfileLogId(data === null || data === void 0 ? void 0 : data.profileLogId);
        props.handleComplete(0);
        props.handleNext();
    };
    var dispatchProfileLogId = function (profileLogId) {
        dispatch({
            type: 'USER_ADD',
            data: {
                userData: __assign(__assign({}, userDataState.userData), { profileLogId: profileLogId }),
                userId: userDataState.userId
            }
        });
    };
    var r1 = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        interviewed: "no",
        pdcStatus: null,
        profileLogId: "",
        dob: "",
        lastFiveDigitOfPan: "",
        fdcStatus: null,
        uploadProfile: "",
    };
    var r2 = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        interviewed: "no",
        pdcStatus: null,
        dob: "",
        lastFiveDigitOfPan: "",
        fdcStatus: null,
        uploadProfile: "",
    };
    var r3 = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        interviewed: "no",
        pdcStatus: null,
        dob: "",
        lastFiveDigitOfPan: "",
        fdcStatus: null,
        uploadProfile: "",
    };
    var r4 = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        interviewed: "no",
        pdcStatus: null,
        dob: "",
        lastFiveDigitOfPan: "",
        fdcStatus: null,
        uploadProfile: "",
    };
    var r5 = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        interviewed: "no",
        pdcStatus: null,
        dob: "",
        lastFiveDigitOfPan: "",
        fdcStatus: null,
        uploadProfile: "",
    };
    var row = [r1, r2, r3, r4, r5];
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
    // const onGridReady = React.useCallback(
    //   (params) => {
    //     apiCallRelatedFormData();
    //   },
    //   [gotData]
    // );
    // const onUpdateColumns = useCallback((data) => {
    //   if (gridRef?.current) gridRef.current.api.setColumnDefs(data);
    // }, []);
    // const autoGroupColumnDef = useMemo<ColDef>(() => {
    //   return {
    //     headerName: "Group",
    //     minWidth: 170,
    //     field: "athlete",
    //     valueGetter: (params) => {
    //       if (params.node!.group) {
    //         return params.node!.key;
    //       } else {
    //         return params.data[params.colDef.field!];
    //       }
    //     },
    //     headerCheckboxSelection: true,
    //     cellRenderer: "agGroupCellRenderer",
    //     cellRendererParams: {
    //       checkbox: true,
    //     },
    //   };
    // }, []);
    // const pageChange = (pageNumber) => {
    //   setPageNo(pageNumber);
    //   apiCallRelatedFormData(contestStatus, pageNumber - 1);
    // };
    // const pageSizeChange = (pageSizeChanged) => {
    //   setPageSize(pageSizeChanged);
    //   apiCallRelatedFormData(contestStatus, 0, pageSizeChanged);
    // };
    var onSelectionChanged = useCallback(function () {
        if (gridRef.current) {
            var rowSelection = gridRef.current.api.getSelectedRows();
            setSelectedRows(rowSelection);
        }
    }, []);
    var onCellValueChanged = useCallback(function (event) {
        console.log(event);
        // if (gridRef.current) {
        //   const rowSelection = gridRef.current.api.getSelectedRows();
        // }
    }, []);
    return (_jsx("div", __assign({ className: "form-encapsulate" }, { children: _jsxs("div", __assign({ className: "form-card-holder" }, { children: [_jsxs("div", { children: [_jsx("div", { children: _jsx(Typography, __assign({ variant: "h4", gutterBottom: true, component: "div", color: "black", margin: "2vw 1vw 0vw 2vw" }, { children: "For Bulk Duplication Check" })) }), _jsx("div", __assign({ style: { margin: "1vw 1vw 1vw 1vw" } }, { children: TEMPLATE_BUTTON.map(function (button) { return (_jsx(JobSeekerTempleteButton, { fileName: button.iconFileName, title: button.title })); }) })), _jsx("div", { children: _jsxs(Typography, __assign({ variant: "h6", gutterBottom: true, component: "div", color: "black", display: "flex", justifyContent: "center" }, { children: [_jsx("hr", { className: "line" }), "( OR )", _jsx("hr", { className: "line" })] })) })] }), _jsx("div", { children: _jsx(Typography, __assign({ variant: "h4", gutterBottom: true, component: "div", color: "black", margin: "2vw 1vw 2vw 2vw" }, { children: "Enter the Details Manually" })) }), _jsx("div", { children: _jsx(GridItem, { gridRef: gridRef, rowData: row, columnDefs: columnDefs, defaultColDef: defaultColDef, suppressRowClickSelection: true, groupSelectsChildren: true, rowSelection: "multiple", rowGroupPanelShow: "always", pivotPanelShow: "always", enableRangeSelection: true, pagination: false, 
                        // pageSize={pageSize}
                        onSelectionChanged: onSelectionChanged, 
                        // pageSizeArray={PAGE_SIZE_ARRAY}
                        // totalPages={totalPages}
                        // pageChange={pageChange}
                        // pageSizeChange={pageSizeChange}
                        onCellValueChanged: onCellValueChanged, fulfillUpload: fulfillUpload }) })] })) })));
};
export default JobSeekerAddProfile;
