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
var initial = {
    activeTab: 0,
    activeStep: 0,
};
export default (function (state, event) {
    if (state === void 0) { state = initial; }
    switch (event.type) {
        case "TAB_CHANGE":
            return __assign(__assign({}, state), { activeTab: event.data.tab });
        case "STEP_CHANGE":
            return __assign(__assign({}, state), { activeStep: event.data.step, activeTab: event.data.tab });
        default:
            return state;
    }
});
