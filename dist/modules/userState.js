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
var UserType;
(function (UserType) {
    UserType["FREELANCE_RECRUITER"] = "Freelance Recruiter";
    UserType["RECRUITMENT_COMPANY"] = "Recruitment Company";
})(UserType || (UserType = {}));
var initial = {
    userId: '', userData: {
        userName: "",
        workStatus: "",
        mobileNumber: "",
        emailId: "",
        department: "",
        groups: [],
        roles: [],
        realm: "techsophy-platform",
        userType: UserType.FREELANCE_RECRUITER,
        profileLogId: "",
        profileId: ""
    }
};
export default (function (state, event) {
    if (state === void 0) { state = initial; }
    switch (event.type) {
        case 'USER_ADD':
            return __assign(__assign({}, state), { userData: event.data.userData, userId: event.data.userId });
        default:
            return state;
    }
});
