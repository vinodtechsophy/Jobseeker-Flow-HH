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
export var initialAlertState = {
    enable: false,
    type: "",
    message: "",
    duration: 0
};
export default (function (state, event) {
    if (state === void 0) { state = initialAlertState; }
    switch (event.type) {
        case 'SEND_ALERT':
            return __assign(__assign({}, state), { enable: event.data.enable, type: event.data.type, message: event.data.message, duration: event.data.duration });
        default:
            return state;
    }
});
