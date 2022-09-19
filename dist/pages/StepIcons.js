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
import { jsx as _jsx } from "react/jsx-runtime";
import '../App.css';
import { styled } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import Slider from '@mui/material/Slider';
import { OFF_WHITE_COLOR, PRIMARY_THEME_COLOR } from '../InternalStyles/CommonStyleVariables';
var ColorlibStepIconRoot = styled('div')(function (_a) {
    var theme = _a.theme, ownerState = _a.ownerState;
    return (__assign(__assign({ backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : OFF_WHITE_COLOR, zIndex: 1, color: 'var(--light-title)', width: 40, height: 40, display: 'flex', borderRadius: '24%', fontSize: '15px', border: '1.5px solid #CED4F0', justifyContent: 'center', alignItems: 'center' }, (ownerState.active && {
        backgroundColor: PRIMARY_THEME_COLOR,
        color: OFF_WHITE_COLOR,
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    })), (ownerState.completed && {
        backgroundColor: '#00C15D',
        color: OFF_WHITE_COLOR,
    })));
});
export function JobSeekerAddStepper(props) {
    var active = props.active, completed = props.completed, className = props.className;
    var icons = {
        1: _jsx("span", { children: "01" }),
        2: _jsx("span", { children: "02" }),
        3: _jsx("span", { children: "03" }),
        4: _jsx("span", { children: "04" }),
        5: _jsx("span", { children: "05" }),
        6: _jsx("span", { children: "06" }),
        7: _jsx("span", { children: "07" }),
    };
    return (_jsx(ColorlibStepIconRoot, __assign({ ownerState: { completed: completed, active: active }, className: className }, { children: icons[String(props.icon)] })));
}
export var ColorlibConnector = styled(StepConnector)(function (_a) {
    var _b, _c, _d;
    var theme = _a.theme;
    return (_b = {},
        _b["&.".concat(stepConnectorClasses.alternativeLabel)] = {
            top: 22,
        },
        _b["&.".concat(stepConnectorClasses.active)] = (_c = {},
            _c["& .".concat(stepConnectorClasses.line)] = {
                backgroundColor: PRIMARY_THEME_COLOR,
            },
            _c),
        _b["&.".concat(stepConnectorClasses.completed)] = (_d = {},
            _d["& .".concat(stepConnectorClasses.line)] = {
                backgroundColor: '#00C15D',
            },
            _d),
        _b["& .".concat(stepConnectorClasses.line)] = {
            height: 3,
            border: 0,
            backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
            borderRadius: 1,
        },
        _b);
});
export var PrettoSlider = styled(Slider)({
    color: PRIMARY_THEME_COLOR,
    height: 16,
    marginLeft: '2%',
    width: '98%',
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        height: 20,
        width: 20,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&:before': {
            display: 'none',
        },
    },
    "& .MuiSlider-valueLabel": {
        lineHeight: 1.2,
        fontSize: 12,
        background: "unset",
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: "50% 50% 50% 0",
        backgroundColor: PRIMARY_THEME_COLOR,
        transformOrigin: "bottom left",
        transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
        "&:before": { display: "none" },
        "&.MuiSlider-valueLabelOpen": {
            transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
        },
        "& > *": {
            transform: "rotate(45deg)",
        },
    },
});
