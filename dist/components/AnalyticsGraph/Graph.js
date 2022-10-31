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
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import GraphCo from "../../../src/assets/GraphCo.png";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { getContestAggregateStatistics, getContestAggregateStatisticsGroupBy, } from "../../services/JobSeekerService";
var useStyles = makeStyles({
    graphImg: {
        // position: "absolute",
        // left: "18vw",
        top: 0,
        width: "850px",
    },
    leftDiv: {
        position: "absolute",
        right: "40vw",
    },
    rightDiv: {
        position: "absolute",
        left: "49vw",
    },
    leftItem1: {
        borderColor: "#266E88",
        borderLeft: "1px solid",
        width: "200px",
    },
    leftItem2: {
        borderColor: "#CD433E",
        width: "200px",
        borderLeft: "1px solid",
    },
    leftItem3: {
        borderColor: "#F2B241",
        width: "200px",
        borderLeft: "1px solid",
        marginBottom: "20px",
    },
    leftItem4: {
        borderColor: "#EDD85F",
        width: "220px",
        borderLeft: "1px solid",
        marginBottom: "28px",
    },
    leftItem5: {
        borderColor: "#8FC38B",
        width: "270px",
        borderLeft: "1px solid",
    },
    leftItem6: {
        borderColor: "#5DACC8",
        width: "300px",
        borderLeft: "1px solid",
    },
    leftItem7: {
        borderColor: "#9167B3",
        width: "320px",
        borderLeft: "1px solid",
        marginBottom: "30px",
    },
    leftItem8: {
        borderColor: "#4A779F",
        width: "330px",
        borderLeft: "1px solid",
    },
    rightItem1: {
        borderColor: "#266E88",
        borderRight: "1px solid #266E88",
        width: "200px",
        marginLeft: "-3px",
    },
    rightItem2: {
        borderColor: "#CD433E",
        borderRight: "1px solid #CD433E",
        width: "200px",
        marginLeft: "-3px",
    },
    rightItem3: {
        borderColor: "#F2B241",
        width: "200px",
        borderRight: "1px solid #F2B241",
        marginLeft: "-3px",
    },
    rightItem4: {
        borderColor: "#EDD85F",
        width: "220px",
        borderRight: "1px solid #EDD85F",
        marginBottom: "28px",
        marginLeft: "-20px",
    },
    rightItem5: {
        borderColor: "#8FC38B",
        width: "270px",
        borderRight: "1px solid #8FC38B",
        marginLeft: "-70px",
    },
    rightItem6: {
        borderColor: "#5DACC8",
        width: "300px",
        borderRight: "1px solid #5DACC8",
        marginLeft: "-100px",
    },
    rightItem7: {
        borderColor: "#9167B3",
        width: "320px",
        borderRight: "1px solid #9167B3",
        marginBottom: "30px",
        marginLeft: "-120px",
    },
    rightItem8: {
        borderColor: "#4A779F",
        width: "330px",
        borderRight: "1px solid #4A779F",
        marginLeft: "-130px",
    },
});
var Item = styled(Box)(function (_a) {
    var theme = _a.theme;
    return (__assign(__assign({ backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff" }, theme.typography.body2), { padding: "8px 9px", 
        // top right bottom left
        margin: "5px 13px 18px 13px", alignItems: "center", justifyContent: "center", display: "flex", color: theme.palette.text.secondary, borderTop: "1px solid", borderBottom: "1px solid" }));
});
var Graph = function (props) {
    var classes = useStyles();
    // const [contestStatistics, setContestStatistics] = useState<any>({});
    var _a = useState([]), aggregateCount = _a[0], setAggregateCount = _a[1];
    var _b = useState([]), aggregatePercentage = _b[0], setAggregatePercentage = _b[1];
    var apiCallAggregateContestStatistics = function () { return __awaiter(void 0, void 0, void 0, function () {
        var count, percentage, response, result, result1, response1, result2, result3, response2, result4, result5, result6, result7;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        return __generator(this, function (_o) {
            switch (_o.label) {
                case 0:
                    count = [];
                    percentage = [];
                    return [4 /*yield*/, getContestAggregateStatistics()];
                case 1:
                    response = _o.sent();
                    if ((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.success) {
                        result = response.data.data.filter(function (data) { return data.status === "PROFILE_DUPLICATE"; });
                        count[0] = (_b = result[0]) === null || _b === void 0 ? void 0 : _b.count;
                        percentage[0] = (_c = result[0]) === null || _c === void 0 ? void 0 : _c.percentage;
                        result1 = response.data.data.filter(function (data) { return data.status === "TOTAL_PROFILES_UPLOADED"; });
                        count[1] = (_d = result1[0]) === null || _d === void 0 ? void 0 : _d.count;
                        percentage[1] = (_e = result1[0]) === null || _e === void 0 ? void 0 : _e.percentage;
                    }
                    return [4 /*yield*/, getContestAggregateStatisticsGroupBy(props.contestId, "consentStatus")];
                case 2:
                    response1 = _o.sent();
                    if ((_f = response1 === null || response1 === void 0 ? void 0 : response1.data) === null || _f === void 0 ? void 0 : _f.success) {
                        result2 = response1.data.data.filter(function (data) { return data.status === "JOB_SEEKER_CONSENT_PENDING"; });
                        count[2] = (_g = result2[0]) === null || _g === void 0 ? void 0 : _g.count;
                        percentage[2] = "_ _";
                        result3 = response1.data.data.filter(function (data) { return data.status === "JOB_SEEKER_CONSENT_PASS"; });
                        count[3] = (_h = result3[0]) === null || _h === void 0 ? void 0 : _h.count;
                        percentage[3] = "_ _";
                    }
                    return [4 /*yield*/, getContestAggregateStatisticsGroupBy(props.contestId, "jobSeekerMainStage")];
                case 3:
                    response2 = _o.sent();
                    if ((_j = response2 === null || response2 === void 0 ? void 0 : response2.data) === null || _j === void 0 ? void 0 : _j.success) {
                        result4 = response2.data.data.filter(function (data) { return data.status === "hhShortListing"; });
                        count[4] = (_k = result4[0]) === null || _k === void 0 ? void 0 : _k.count;
                        percentage[4] = "_ _";
                        result5 = response2.data.data.filter(function (data) { return data.status === "employerDuplication"; });
                        count[5] = (_l = result5[0]) === null || _l === void 0 ? void 0 : _l.count;
                        percentage[5] = "_ _";
                        result6 = response2.data.data.filter(function (data) { return data.status === "employerShortlisting"; });
                        count[6] = (_m = result6[0]) === null || _m === void 0 ? void 0 : _m.count;
                        percentage[6] = "_ _";
                        result7 = response2.data.data.filter(function (data) { return data.status === "phaseHr"; });
                        count[7] = "_ _";
                        percentage[7] = "_ _";
                    }
                    setAggregateCount(count);
                    setAggregatePercentage(percentage);
                    return [2 /*return*/];
            }
        });
    }); };
    useEffect(function () {
        apiCallAggregateContestStatistics();
    }, []);
    // useEffect(() => console.log(contestStatistics), [contestStatistics]);
    // const prepareData = (agregateData: any) => {
    //   const t = {};
    //   agregateData.map(
    //     (data: { count: number; status: string; percentage: string }) => {
    //       Object.assign(t, {
    //         [data.status]: { count: data.count, percentage: data.percentage },
    //       });
    //     }
    //   );
    //   setContestStatistics(t);
    // };
    // useEffect(() => {}, [contestStatistics]);
    return (_jsx(Box, __assign({ position: "relative" }, { children: _jsxs(Box, __assign({ display: "flex", justifyContent: "center" }, { children: [_jsxs(Box, __assign({ display: "flex", flexDirection: "column", className: classes.leftDiv }, { children: [_jsx(Item, __assign({ className: classes.leftItem1 }, { children: aggregatePercentage[0] || "_ _" })), _jsx(Item, __assign({ className: classes.leftItem2 }, { children: aggregatePercentage[1] || "_ _" })), _jsx(Item, __assign({ className: classes.leftItem3 }, { children: aggregatePercentage[2] || "_ _" })), _jsx(Item, __assign({ className: classes.leftItem4 }, { children: aggregatePercentage[3] || "_ _" })), _jsx(Item, __assign({ className: classes.leftItem5 }, { children: aggregatePercentage[4] || "_ _" })), _jsx(Item, __assign({ className: classes.leftItem6 }, { children: aggregatePercentage[5] || "_ _" })), _jsx(Item, __assign({ className: classes.leftItem7 }, { children: aggregatePercentage[6] || "_ _" })), _jsx(Item, __assign({ className: classes.leftItem8 }, { children: aggregatePercentage[7] || "_ _" }))] })), _jsx(Box, { children: _jsx("img", { className: classes.graphImg, src: GraphCo, alt: "Graph", loading: "lazy" }) }), _jsxs(Box, __assign({ alignItems: "end", display: "flex", flexDirection: "column", className: classes.rightDiv }, { children: [_jsx(Item, __assign({ className: classes.rightItem1 }, { children: aggregateCount[0] || "_ _" })), _jsx(Item, __assign({ className: classes.rightItem2 }, { children: aggregateCount[1] || "_ _" })), _jsx(Item, __assign({ className: classes.rightItem3 }, { children: aggregateCount[2] || "_ _" })), _jsx(Item, __assign({ className: classes.rightItem4 }, { children: aggregateCount[3] || "_ _" })), _jsx(Item, __assign({ className: classes.rightItem5 }, { children: aggregateCount[4] || "_ _" })), _jsx(Item, __assign({ className: classes.rightItem6 }, { children: aggregateCount[5] || "_ _" })), _jsx(Item, __assign({ className: classes.rightItem7 }, { children: aggregateCount[6] || "_ _" })), _jsx(Item, __assign({ className: classes.rightItem8 }, { children: aggregateCount[7] || "_ _" }))] }))] })) })));
};
export default Graph;
